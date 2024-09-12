<script setup>
import { ref } from "vue";

const isActive = ref(true);
const num = ref(6);
const type = ref("A");
</script>

<template>
  <!-- <h1 v-if="true">True v-if</h1> -->
  <!-- <h1 v-if="isActive">isActive is true v-if</h1> -->
  <!-- <h1 v-if="num === 5">Num is 5 v-if</h1> -->
  <!-- <h1 v-if="num > 5">Num is getther 5 v-if</h1> -->

  <h1 v-if="isActive">isActive is true v-if</h1>
  <h1 v-else>This is v-else</h1>
</template>
