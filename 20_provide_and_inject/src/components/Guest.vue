<script setup>
import { inject } from "vue";

const message = inject("message");
</script>

<template>
  <div style="border: 1px solid black; padding: 10px">
    <h1>Guest component</h1>
    {{ message }}
  </div>
</template>

<style scoped></style>
