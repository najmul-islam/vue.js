<script setup>
import { ref, watch } from "vue";

let hartRate = ref(85);

watch(hartRate, (newHartRatevalue, oldHartRateValue) => {
  console.log("newHartRatevalue: ", newHartRatevalue);
  console.log("oldHartRateValue: ", oldHartRateValue);
  if (newHartRatevalue >= 120) {
    alert("Calm down... take deep breath");
  }
});
</script>

<template>
  <div>
    <h1>Hello world</h1>
    <h2 v-if="hartRate > 0">Hear Beats per Minute:{{ hartRate }}</h2>
    <h2 v-if="hartRate <= 0">Sorry you are dead...</h2>

    <button @click="hartRate += 5">Increase</button>
    <button @click="hartRate -= 5">Decrease</button>
  </div>
</template>

<style scoped></style>
