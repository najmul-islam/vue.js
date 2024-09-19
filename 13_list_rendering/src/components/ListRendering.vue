<script setup>
import { ref, reactive, computed } from "vue";

const students = ref(["Rahul", "Sonam", "Rohit"]);

const employess = ref([
  { id: "1", name: "Sumit", salary: 100 },
  { id: "2", name: "Ravi", salary: 200 },
  { id: "3", name: "Anjali", salary: 150 },
  { id: "4", name: "Priya", salary: 180 },
  { id: "5", name: "Rohit", salary: 220 },
]);

const languages = ref([
  ["Java", "Android"],
  ["Python", "ML"],
  ["Dart", "Flutter"],
]);
</script>

<template>
  <div>
    <!-- <h2>{{ students[0] }}</h2>
    <h2>{{ students[1] }}</h2>
    <h2>{{ students[2] }}</h2> -->

    <!-- <h2 v-for="(student, index) in students" :key="student">
      {{ index }} : {{ student }}
    </h2> -->

    <!-- <h3 :key="employee.id" v-for="employee in employess">
      {{ employee.name }}
    </h3> -->

    <!-- array of arrays or nested v-for -->
    <!-- <div v-for="language in languages">
      <h2 v-for="item in language">{{ item }}</h2>
    </div> -->

    <!-- v-for with v-if -->
    <div class="card" :key="id" v-for="{ id, name, salary } in employess">
      <h2>name: {{ name }}</h2>
      <p>salary: {{ salary }}</p>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid black;
  width: 200px;
  border-radius: 5px;
  margin-bottom: 5px;
  padding: 2px;
}
</style>
