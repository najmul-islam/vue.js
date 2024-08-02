<script setup>
import { ref } from "vue";

// let obj1 = ref({ count: 1 });

// setTimeout(() => {
//   console.log("obj1 count timeout called");
//   obj1.value.count++;
// }, 2000);

let obj2 = { count: ref(1) };
let { count } = obj2;
setTimeout(() => {
  console.log("obj2 count timeout called");
  obj2.count.value++;
}, 2000);
</script>

<template>
  <div>
    <!-- <h1>count: {{ obj1.count }}</h1> -->
    <hr />

    <h1>count: {{ obj2.count }}</h1>
    <h1>count: {{ obj2.count.value }}</h1>
    <h1>count: {{ obj2.count.value + 2 }}</h1>
    <h1>count: {{ count + 2 }}</h1>
  </div>
</template>
