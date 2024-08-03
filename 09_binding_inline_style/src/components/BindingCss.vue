<script setup>
import { ref, reactive } from "vue";

const textColor = ref("red");
const bgColor = ref("green");

const styleObj = reactive({
  color: "yellow",
  backgroundColor: "green",
});

const underLine = reactive({
  textDecoration: "underline",
});
</script>

<template>
  <div>
    <h1 style="color: red; background-color: green">
      Inline css with style attribue
    </h1>
    <h1 v-bind:style="{ color: 'red', backgroundColor: 'blue' }">
      inline css with v-bind using camalCase
    </h1>
    <h1 v-bind:style="{ color: 'red', 'background-color': 'yellow' }">
      inline css using v-bind using cabab case
    </h1>
    <h1 :style="{ color: 'red', 'background-color': 'yellow' }">
      inline css using v-bind sort hand using cabab case
    </h1>
    <hr />
    <!-- Binding to object -->
    <h1 :style="{ color: textColor, backgroundColor: bgColor }">using ref</h1>
    <h1 :style="styleObj">using reactive</h1>
    <h1 :style="[styleObj, underLine]">using reactive</h1>
  </div>
</template>

<style></style>
