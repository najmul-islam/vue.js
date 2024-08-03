<script setup>
import { ref } from "vue";
import ClassBinding from "./components/ClassBinding.vue";
import ClassWithComponent from "./components/ClassWithComponent.vue";

const isActive = ref(true);
</script>

<template>
  <!-- <ClassBinding /> -->
  <!-- <ClassWithComponent class="app-class" /> -->
  <ClassWithComponent :class="{ isActive: 'app-class' }" />
</template>
