<script setup>
import { computed, ref } from "vue";

// const props = defineProps(["fullName", "age"]);
// const props = defineProps({
//   fullName: String,
//   age: Number,
// });
const props = defineProps({
  fullName: {
    type: String,
    required: true,
    default: "Sonam Sharma",
  },
  age: {
    type: Number,
  },
});

// const fname = ref(props.firstName);
// const fullName = computed(() => props.firstName + " " + props.lastName);
</script>

<template>
  <div>
    <!-- <h1>Name: {{ firstName }} {{ lastName }}</h1> -->

    <h1>Name: {{ fullName }}</h1>
    <h2>Age: {{ age }}</h2>
  </div>
</template>

<style scoped></style>
