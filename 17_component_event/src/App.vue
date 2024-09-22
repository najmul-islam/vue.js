<script setup>
import ComponentEvent from "./components/ComponentEvent.vue";
import { ref } from "vue";

let count = ref(0);

const increaseByOne = () => {
  count.value++;
  console.log("increase by one");
};

// declareing emitted event
const emit = defineEmits({
  fsubmit: ({ name }) => {
    if (name) {
      return true;
    } else {
      return false;
    }
  },
});

// event validation
const submitForm = (name) => {
  emit("fsubmit", { name });
  console.log("form submitted", name);
};
</script>

<template>
  <div>
    <h1>Component Event in Vue Js</h1>
    <hr />
    <!-- <h3>Count: {{ count }}</h3> -->

    <!-- <ComponentEvent @increaseCount="count++" /> -->
    <!-- <ComponentEvent @increase-count="count++" /> -->
    <!-- <ComponentEvent @increase-count="increaseByOne" /> -->
    <!-- <ComponentEvent @increase-count="(n) => (count += n)" /> -->

    <ComponentEvent @fsubmit="submitForm" />
  </div>
</template>

<style scoped></style>
