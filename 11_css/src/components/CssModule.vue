<template>
  <div>
    <!-- <h1 v-bind:class="$style.bgBlue">Css module</h1> -->
    <h1 v-bind:class="$classes.bgGreen">Css module</h1>
  </div>
</template>

<!-- <style module>
.bgBlue {
  background-color: blue;
}
</style> -->

<style module="classes">
.bgGreen {
  background-color: green;
}
</style>
