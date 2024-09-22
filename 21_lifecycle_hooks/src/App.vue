<script setup>
import HelloWorld from "./components/HelloWorld.vue";
import {
  ref,
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

const show = ref(true);
const count = ref(0);

onBeforeMount(() => {
  console.log("onBeforeMount called - parent");
});

onMounted(() => {
  console.log("onMounted called - parent");
});

onBeforeUpdate(() => {
  console.log("onBeforeUpdate called - parent");
});

onUpdated(() => {
  console.log("onUpdated called - parent");
});

onBeforeUnmount(() => {
  console.log("onBeforeUnmount called - parent");
});

onUnmounted(() => {
  console.log("onUnmounted called - parent");
});
</script>

<template>
  <main>
    <h1>App component - parent</h1>
    <h1>Count: {{ count }}</h1>
    <HelloWorld v-if="show" />

    <button @click="show = !show">Show</button>
    <button @click="count++">Increase</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
