<script setup>
import Hello from "./components/Hello.vue";

function handleClick() {
  console.log("btn click");
}
</script>

<template>
  <!-- attrubute inheritance -->
  <!-- <Hello class="btn-pink" /> -->
  <!-- <Hello id="btn-pink" /> -->
  <!-- <Hello :style="{ backgroundColor: 'red' }" /> -->
  <Hello @click="handleClick" />
</template>

<style scoped></style>
