<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
main {
  padding: 20px;
  background-color: #f4f4f9;
  font-family: 'Roboto', sans-serif;
}

h1 {
  font-size: 2.5rem;
  color: #333;
  text-align: center;
}

p {
  font-size: 1.2rem;
  color: #555;
  text-align: center;
  margin-top: 10px;
}
</style>
