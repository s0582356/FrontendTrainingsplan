<script lang="ts">
import { defineComponent } from 'vue'
import ExerciseOption from '@/components/ExerciseOption.vue'

export default defineComponent({
  name: 'ExerciseOptionView',
  components: { ExerciseOption }
})
</script>

<template>
  <div class="exercise-option-view">
    <h1 class="page-title">Trainingsplan für dich</h1>
    <p class="intro-text">Hier kannst du deine Trainingspläne verwalten und die Übungen für dein Training auswählen und anpassen.</p>
    <exercise-option title="Ultimate Training"></exercise-option>
  </div>
</template>

<style scoped>
.exercise-option-view {
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.page-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 15px;
}

.intro-text {
  text-align: center;
  font-size: 1rem;
  color: #555;
  margin-bottom: 30px;
}
</style>
