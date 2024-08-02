<script setup>
import { reactive } from "vue";

const obj = reactive({
  num: { count: 0 },
  user: ["Rahul", "Sonam"],
});

setTimeout(() => {
  obj.num.count++;
}, 2000);
</script>
<template>
  <div>
    <h1>Count: {{ obj.num.count }}</h1>
    <h2>User {{ obj.user[0] }}</h2>
    <h2>User {{ obj.user[1] }}</h2>
  </div>
</template>
