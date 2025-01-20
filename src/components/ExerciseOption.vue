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
  <div>
    <h1>{{ title }}</h1>
    <div v-if="übungsListe.length > 0">
      <ul>
        <li v-for="übung in übungsListe" :key="übung.uebungNr">
          {{ übung.uebungName }} - {{ übung.anzahlSaetze }} sets x {{ übung.anzahlWiederholungen }} reps
          <button @click="updateTrainingPlan(übung.uebungNr)">Update</button>
          <button @click="deleteTrainingPlan(übung.uebungNr)">Delete</button>
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Die Liste hat keinen Eintrag.</p>
    </div>
    <input v-model="newPlan.uebungName" placeholder="Übung Name" />
    <input v-model.number="newPlan.anzahlSaetze" placeholder="Anzahl Sätze" type="number" />
    <input v-model.number="newPlan.anzahlWiederholungen" placeholder="Anzahl Wiederholungen" type="number" />
    <button @click="addNewTrainingPlan">Add New Training Plan</button>
  </div>
</template>

<style scoped>
</style>
