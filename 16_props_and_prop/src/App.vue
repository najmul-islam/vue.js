<script setup>
import { ref } from "vue";
import PropsAndProp from "./components/PropsAndProp.vue";

const firstName = ref("Sonam");
const lastName = ref("Kumari");
</script>

<template>
  <h1>Props and Prop Validation in Vue Js</h1>
  <hr />
  <!-- static props -->
  <!-- <PropsAndProp fullName="Sonam Kumari" /> -->

  <!-- dynamic props -->
  <!-- <PropsAndProp :firstName="firstName" :lastName="lastName" /> -->

  <!-- oneway data flow -->
  <!-- <PropsAndProp :firstName="firstName" :lastName="lastName" /> -->

  <!-- prop validaiton -->
  <PropsAndProp fullName="Sonam Kumari" :age="25" />
</template>

<style scoped></style>
