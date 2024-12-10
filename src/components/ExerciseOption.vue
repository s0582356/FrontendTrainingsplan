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
      übungsListe: [] as Trainingsplan[]
    };
  },
  mounted () {

    axios
      .get<Trainingsplan[]>(apiEndpoint)
      .then((response) => (this.übungsListe = response.data))
      .catch((error) => console.log(error))
}
})

</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="übungsListe.length > 0">
      <ul>
        <li v-for="übung in übungsListe" :key="übung.uebungNr">
          {{ übung }}
        </li>
      </ul>
    </div>
    <div v-else>
      <p>Die Liste hat keinen Eintrag.</p>
    </div>
  </div>
</template>

<style scoped>

</style>
