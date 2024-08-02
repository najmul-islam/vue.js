<script setup>
import { ref } from "vue";

// // without ref
// let firstName = "Sonam";
// let lastName = "Sharma";

// // method
// function fullName() {
//   return firstName + " " + lastName;
// }
// setTimeout(() => {
//   firstName = "Rahul";
// }, 2000);

// with ref
let firstName = ref("Sonam");
let lastName = ref("Sharma");

// method
// function fullName() {
//   return firstName.value + " " + lastName.value;
// }

// const fullName = ()=>{
//     return firstName.value + " " + lastName.value;
// }

const fullName = (roll) => {
  return firstName.value + " " + lastName.value + " " + "Roll: " + roll;
};

setTimeout(() => {
  console.log("setTimeout called");
  firstName.value = "Rahul";
}, 2000);
</script>

<template>
  <h1>Method</h1>
  <hr />
  <!-- <h3>Full Name: {{ fullName() }}</h3> -->
  <h3>Full Name with roll: {{ fullName(101) }}</h3>
</template>
