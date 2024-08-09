<script setup>
const theme = { textColor: "red" };
</script>

<template>
  <h1 class="text-red">v-bind css</h1>
</template>

<style scoped>
.text-red {
  color: v-bind("theme.textColor");
}
</style>
