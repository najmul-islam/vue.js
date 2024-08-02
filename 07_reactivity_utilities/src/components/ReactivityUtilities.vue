<script setup>
import {
  reactive,
  ref,
  isRef,
  isReactive,
  isProxy,
  unref,
  toRef,
  toRef,
} from "vue";

let a = 10;
let b = ref(10);
let num = reactive({ count: 1 });

// console.log("a isRef", isRef(a));
// console.log("b isRef: ", isRef(b));
// console.log("num isReactive", isReactive(num));
// console.log("num isProxy", isProxy(num));
console.log("a: ", b);
console.log("unref a: ", unref(a));
console.log("b: ", b);
console.log("unref b: ", unref(b));
</script>

<template>
  <h1>Hello world</h1>
</template>
