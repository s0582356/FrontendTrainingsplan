<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="highlight">{{ msg }}</h1>
    <p>Willkommen auf der Seite! Hier kannst du alle Funktionen nutzen und dein Training planen.</p>
  </div>
</template>

<style scoped>
h1.highlight {
  font-size: 3rem;
  font-weight: 600;
  color: #2a9d8f;
  text-align: center;
  margin-bottom: 20px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
}


p {
  font-size: 1.2rem;
  color: #333;
  text-align: center;
  margin-top: 20px;
  line-height: 1.6;
}


@media (min-width: 1024px) {
  .greetings {
    padding: 20px;
  }
  h1.highlight {
    text-align: left;
  }
  p {
    text-align: left;
    max-width: 700px;
    margin: 20px auto;
  }
}
</style>
