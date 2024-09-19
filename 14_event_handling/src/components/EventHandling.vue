<script setup>
import { ref } from "vue";
const count = ref(0);

function greeting() {
  console.log("Hello world");
}

function say(e) {
  console.log(e);
}
</script>

<template>
  <div>
    <!-- inline handler -->
    <h1>{{ count }}</h1>
    <!-- <button v-on:click="count++">Increase</button> -->
    <!-- <button @click="count++">Increase</button> -->
    <!-- <input v-on:focus="count++" type="text" /> -->

    <!-- <button @click="greeting()">Hello world</button> -->

    <!-- method handler -->
    <button @click="say">Click me</button>
  </div>
</template>

<style></style>
