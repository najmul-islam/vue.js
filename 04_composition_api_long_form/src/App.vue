<script>
import { ref } from "vue";
export default {
  setup() {
    const name = ref("John Doe");
    const status = ref("active");
    const tasks = ref(["Task One", "Task Two", "Task Three"]);

    const toogleStatus = () => {
      if (status.value === "active") {
        status.value = "pending";
      } else if (status.value === "pending") {
        status.value = "inactive";
      } else {
        status.value = "active";
      }
    };

    return { name, status, tasks, toogleStatus };
  },
};
</script>

<template>
  <h1>{{ name }}</h1>
  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inacitve</p>

  <h3>Tasks:</h3>
  <ul>
    <li v-for="task in tasks" :key="task">
      {{ task }}
    </li>
  </ul>

  <!-- <a v-bind:href="link">Click for Google</a> -->
  <a :href="link">Click for Google</a><br />

  <!-- <button v-on:click="toggleStatus">Change Status</button> -->
  <button @click="toogleStatus">Change Status</button>
</template>

<style></style>
