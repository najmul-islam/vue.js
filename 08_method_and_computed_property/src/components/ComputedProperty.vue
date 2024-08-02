<script setup>
import { computed, ref } from "vue";
// without ref
// let firstName = "Sonam";
// let lastName = "Sharma";

// const fullName = computed(() => {
//   return firstName + " " + lastName;
// });

// with ref
let firstName = ref("Sonam");
let lastName = ref("Sharma");

const fullName = computed(() => {
  return firstName.value + " " + lastName.value;
});

setTimeout(() => {
  console.log("set time out called");
  firstName.value = "Rahul";
}, 2000);
</script>

<template>
  <h1>Computed Property</h1>
  <hr />
  <h3>Full Name: {{ fullName }}</h3>
</template>

<style></style>
