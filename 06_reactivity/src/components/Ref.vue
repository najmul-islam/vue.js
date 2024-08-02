<script setup>
import { ref } from "vue";
// without ref
let a = 10;
let b = 20;
setTimeout(() => {
  console.log("set time out called");
  a = 30;
}, 2000);

// with ref
let c = ref(10);
let d = ref(20);

setTimeout(() => {
  console.log("ref timeout called");
  console.log("c", c);
  console.log("d", d);
  c.value = 30;
}, 2000);
</script>

<template>
  <h1>without ref</h1>
  <h2>Sum: {{ a + b }}</h2>
  <hr />
  <h1>with ref</h1>
  <h2>Sum {{ c + d }}</h2>
</template>
