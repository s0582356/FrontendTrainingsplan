<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'
import type { Trainingsplan } from '@/model/Trainingsplan'

const apiEndpoint = import.meta.env.VITE_APP_BACKEND_BASE_URL + '/api/Trainingsplan'

export default defineComponent({
  name: "ExerciseOption",
  props: ['title'],

  data() {
    return {
      übungsListe: [] as Trainingsplan[],
      newPlan: {
        uebungNr: 0,
        uebungName: '',
        anzahlSaetze: 0,
        anzahlWiederholungen: 0
      } as Trainingsplan
    };
  },
  mounted() {
    axios
      .get<Trainingsplan[]>(apiEndpoint)
      .then((response) => (this.übungsListe = response.data))
      .catch((error) => console.log(error))
  },
  methods: {
    addNewTrainingPlan() {
      axios
        .post<Trainingsplan>(apiEndpoint, this.newPlan)
        .then((response) => {
          this.übungsListe.push(response.data)
          this.newPlan = { uebungNr: 0, uebungName: '', anzahlSaetze: 0, anzahlWiederholungen: 0 }
        })
        .catch((error) => console.log(error))
    },
    updateTrainingPlan(id: number) {
      axios
        .put<Trainingsplan>(`${apiEndpoint}/${id}`, this.newPlan)
        .then((response) => {
          const index = this.übungsListe.findIndex(plan => plan.uebungNr === id)
          if (index !== -1) {
            this.übungsListe[index] = response.data
          }
        })
        .catch((error) => console.log(error))
    },
    deleteTrainingPlan(id: number) {
      axios
        .delete(`${apiEndpoint}/${id}`)
        .then(() => {
          this.übungsListe = this.übungsListe.filter(plan => plan.uebungNr !== id)
        })
        .catch((error) => console.log(error))
    }
  }
})
</script>

<template>
  <div class="exercise-option">
    <h1 class="title">{{ title }}</h1>

    <div class="plan-list" v-if="übungsListe.length > 0">
      <ul>
        <li v-for="übung in übungsListe" :key="übung.uebungNr" class="plan-item">
          <div class="plan-details">
            <span>{{ übung.uebungName }}</span>
            <span>{{ übung.anzahlSaetze }} sets x {{ übung.anzahlWiederholungen }} reps</span>
          </div>
          <div class="buttons">
            <button class="btn update-btn" @click="updateTrainingPlan(übung.uebungNr)">Update</button>
            <button class="btn delete-btn" @click="deleteTrainingPlan(übung.uebungNr)">Delete</button>
          </div>
        </li>
      </ul>
    </div>

    <div v-else>
      <p class="no-plans">Die Liste hat keinen Eintrag.</p>
    </div>

    <div class="add-plan-form">
      <input class="input" v-model="newPlan.uebungName" placeholder="Übung Name" />
      <input class="input" v-model.number="newPlan.anzahlSaetze" placeholder="Anzahl Sätze" type="number" />
      <input class="input" v-model.number="newPlan.anzahlWiederholungen" placeholder="Anzahl Wiederholungen" type="number" />
      <button class="btn add-btn" @click="addNewTrainingPlan">Add New Training Plan</button>
    </div>
  </div>
</template>

<style scoped>
/* Allgemeines Layout */
.exercise-option {
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f4f4f4;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
  font-size: 2rem;
}

.plan-list {
  margin-bottom: 20px;
}

.plan-item {
  background-color: #fff;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.plan-details {
  display: flex;
  flex-direction: column;
}

.buttons {
  display: flex;
  gap: 10px;
}

.btn {
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.update-btn {
  background-color: #4CAF50;
  color: white;
}

.update-btn:hover {
  background-color: #45a049;
}

.delete-btn {
  background-color: #f44336;
  color: white;
}

.delete-btn:hover {
  background-color: #e53935;
}

.no-plans {
  text-align: center;
  color: #888;
}

.add-plan-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 30px;
}

.input {
  padding: 12px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.input:focus {
  outline: none;
  border-color: #4CAF50;
}

.add-btn {
  background-color: #2196F3;
  color: white;
  font-size: 1.1rem;
  padding: 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-btn:hover {
  background-color: #1976D2;
}
</style>
