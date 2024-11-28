<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "ExerciseOption",
  props: ['title'],

  data() {
    return {
      übungsListe: ["Bankdrücken", "Bizepscurl", "Kreuzheben", "Kniebeugen"]
    };
  }
})
</script>

<template>
  <div>
    <h1>{{ title }}</h1>
    <div v-if="übungsListe.length > 0">
      <ul>
        <li v-for="übung in übungsListe" :key="übung">
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
