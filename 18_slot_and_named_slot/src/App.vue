<script setup>
import Hello from "./components/Hello.vue";
</script>

<template>
  <div>
    <h1>Slot and Named Slot in Vue Js</h1>
    <hr />
    <!-- <Hello /> -->
    <Hello>
      <h1>Sonam</h1>
    </Hello>
    <Hello>
      <h3>Rahul</h3>
    </Hello>
  </div>
</template>

<style scoped></style>
