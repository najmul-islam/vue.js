<script setup>
const message = "Hello world";
const mydataid = "jack";
const url = "https://google.com";
const objOfAttr = {
  id: "Jack",
  href: "https://google.com",
};

const attributeName = "href";
const isDisabled = false;
</script>

<template>
  <!-- without v-bind -->
  <h1>{{ mydataid }}</h1>
  <h1 id="mydataid">{{ message }}</h1>
  <h1 id="{{ mydataid }}">id="{{ mydataid }}"</h1>
  <!-- using v-bind -->
  <h1 v-bind:id="mydataid">v-bind</h1>
  <h1 :id="mydataid">v-bind sorthand</h1>
  <a :href="url">google</a> <br />
  <!-- obj of attrubute -->
  <a :id="mydataid" :href="url">multiple v-bind</a><br />
  <a v-bind="objOfAttr">v-bind with obj</a><br />

  <!-- dynamic argument -->
  <a v-bind:[attributeName]="url">Dynamic atrribute name</a><br />
  <a :[attributeName]="url">Dynamic attributeName</a><br />

  <!-- boolean attributes -->
  <button disabled>Boolean attributes</button>
  <button :disabled="isDisabled">Boolean attributes</button>
</template>
