<script setup>
const message = "Learn vue js by geeky shows";
const num = 10;
const light = false;
function display() {
  console.log("hello from display");
}
</script>

<template>
  <h1>Hello world</h1>
  <h2>{{ message }}</h2>
  <h3>{{ 10 + 10 }}</h3>
  <h3>{{ num + 20 }}</h3>
  <h4>{{ display() }}</h4>
  {{ light ? "light" : "dark" }}
</template>

<style scoped></style>
