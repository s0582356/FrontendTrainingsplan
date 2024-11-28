<script lang="ts">
import { defineComponent } from 'vue'
import ExerciseOption from '@/components/ExerciseOption.vue'




export default defineComponent({
  name: 'ExerciseOptionView',
  components: { ExerciseOption }

})
</script>

<template>
  <p>Das ist eine Übungseite</p>
  <exercise-option title="Ultimate training"></exercise-option>


</template>

<style scoped></style>
