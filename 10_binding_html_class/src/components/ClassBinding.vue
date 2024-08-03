<script setup>
import { ref, reactive } from "vue";

const isActive = ref(true);
const isImportent = ref(true);

const classObj = reactive({
  active: true,
  "f-bold": true,
  iText: false,
});
</script>

<template>
  <h1 class="text-red">Normal class</h1>
  <!-- binding to object -->
  <h1 v-bind:class="{ active: isActive, fBold: isImportent }">
    Binding object
  </h1>

  <h1 :class="classObj">Reactive Binding object</h1>
</template>

<style></style>
