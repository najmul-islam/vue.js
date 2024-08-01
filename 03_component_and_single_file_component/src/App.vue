<script setup>
import HelloWorld from "./components/HelloWorld.vue";
const name = "Sonam";
</script>

<template>
  <div>
    <h1>Local Registration by {{ name }}</h1>
    <HelloWorld />
  </div>
</template>

<style scoped>
h1 {
  text-decoration: underline;
}
</style>
