<script setup>
import { ref } from "vue";

const name = ref("");
</script>

<template>
  <div>
    <!-- <button @click="$emit('increaseCount', 11)">Incress</button> -->

    <form @submit.prevent="$emit('fsubmit', name)">
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<style scoped></style>
