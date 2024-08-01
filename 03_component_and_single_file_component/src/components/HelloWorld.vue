<script setup>
import ByeWorld from "./ByeWorld.vue";
const message = "Hello world";
</script>

<template>
  <div>
    <h1>{{ message }}</h1>
    <ByeWorld />
  </div>
</template>

<style scoped>
h1 {
  text-decoration: line-through;
}
</style>
