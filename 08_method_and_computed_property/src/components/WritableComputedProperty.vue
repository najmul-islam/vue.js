<script setup>
import { computed, ref } from "vue";

let firstName = ref("Sonam");
let lastName = ref("Sharma");

const fullName = computed({
  // getter
  get() {
    console.log("geeter called");
    return firstName.value + " " + lastName.value;
  },
  // setter
  set(newValue) {
    console.log("seeter called");
    [firstName.value, lastName.value] = newValue.split(" ");
  },
});

setTimeout(() => {
  console.log("set time out called");
  fullName.value = "Rahul Sharma";
}, 3000);
</script>

<template>
  <h1>Writable Computed Property</h1>
  <hr />
  <h3>Full Name: {{ fullName }}</h3>
</template>
