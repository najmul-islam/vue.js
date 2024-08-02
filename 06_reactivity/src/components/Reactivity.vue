<script setup>
import { reactive } from "vue";

// without reactivity
let unReactiveNum = { a: 10, b: 20 };
setTimeout(() => {
  console.log("--------------------");
  console.log("unReactiveNum timeout called");
  console.log("unReactiveNum: ", unReactiveNum);
  unReactiveNum.a = 30;
  console.log("a: ", unReactiveNum.a);
}, 2000);

let unReactiveCount = 0;
setTimeout(() => {
  console.log("unReactiveCount timeout called");
  unReactiveCount++;
  console.log("count: ", unReactiveCount);
}, 2000);

// with reactivity
let reactiveNum = reactive({ c: 10, d: 20 });
setTimeout(() => {
  console.log("reactiveNum timeout called");
  console.log("reactiveNum: ", reactiveNum);
  reactiveNum.c = 30;
  console.log("c: ", reactiveNum.c);
}, 2000);

let reactiveCount = reactive({ count: 0 });
setTimeout(() => {
  console.log("reactiveCount timeout called");
  reactiveCount.count++;
  console.log("reactiveCount: ", reactiveCount);
}, 2000);
</script>

<template>
  <div>
    <!-- without reactivity -->
    <h1>without reactivity</h1>
    <h2>unReactiveNum: {{ unReactiveNum.a + unReactiveNum.b }}</h2>
    <h2>unReactiveCount: {{ unReactiveCount }}</h2>
    <hr />
    <!-- with reactivity -->
    <h1>with reactivity</h1>
    <h2>reactiveNum {{ reactiveNum.c + reactiveNum.d }}</h2>
    <h2>reactiveCount:{{ reactiveCount.count }}</h2>
  </div>
</template>
