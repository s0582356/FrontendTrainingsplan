<script setup lang="ts">
</script>

<template>
  <div class="welcome-container">
    <h1 class="welcome-title">Willkommen in der Ultimate Training App!</h1>
    <p class="welcome-description">Deine Reise zur Fitness beginnt hier. Erstelle und verwalte deine Trainingspläne ganz einfach. Starte noch heute dein Workout-Programm.</p>
    <button class="get-started-button">Jetzt starten</button>
  </div>
</template>

<style scoped>
.welcome-container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 60px;
}

.welcome-title {
  font-size: 2.5rem;
  color: #333333;
  margin-bottom: 20px;
}

.welcome-description {
  font-size: 1.2rem;
  color: #666666;
  line-height: 1.6;
  margin-bottom: 30px;
}

.get-started-button {
  background-color: #3498db;
  color: white;
  padding: 12px 25px;
  font-size: 1.1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.get-started-button:hover {
  background-color: #2980b9;
}

.get-started-button:focus {
  outline: none;
}
</style>
