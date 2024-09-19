<script setup>
import { ref, reactive } from "vue";

const formData = reactive({
  fullname: "",
  email: "",
  password: "",
  message: "",
  isAdult: false,
  driving: "",
  hobbies: [],
  gender: "",
  jobpost: "",
});

const handleSubmit = (data) => {
  console.log("form submitted", formData);
};
</script>

<template>
  <pre>{{ formData }}</pre>
  <form @submit.prevent="handleSubmit">
    <div>
      <label for="name">Name : </label>
      <input type="text" id="name" v-model="formData.fullname" />
    </div>

    <div>
      <label for="email">Email : </label>
      <input type="email" id="email" v-model="formData.email" />
    </div>

    <div>
      <label for="password">Password : </label>
      <input type="password" id="password" v-model="formData.password" />
    </div>

    <div>
      <label for="message">Message : </label>
      <textarea id="password" v-model="formData.message" />
    </div>

    <div>
      <label for="isAdult">Is Audlt : </label>
      <input type="checkbox" id="isAdult" v-model="formData.isAdult" />
    </div>

    <div>
      <label for="driving">Driving: </label>
      <input
        type="checkbox"
        id="driving"
        v-model="formData.driving"
        true-value="yes"
        false-value="no"
      />
    </div>

    <div>
      <span>Hobbies: </span>
      <label for="cooking">Cooking</label>
      <input
        type="checkbox"
        id="cooking"
        v-model="formData.hobbies"
        value="cooking"
      />
      <label for="reading">Reading</label>
      <input
        type="checkbox"
        id="reading"
        v-model="formData.hobbies"
        value="reading"
      />
    </div>

    <div>
      <span>Gender: </span>
      <label for="male">Male</label>
      <input type="radio" id="male" v-model="formData.gender" value="male" />
      <label for="female">Female</label>
      <input
        type="radio"
        id="female"
        v-model="formData.gender"
        value="female"
      />
    </div>

    <div>
      <span>Job Post:</span>
      <select v-model="formData.jobpost">
        <option disabled>Selease Select One</option>
        <option value="vue">Vue Js Developer</option>
        <option value="react">React Js Developer</option>
        <option value="angular">Angular Js Developer</option>
      </select>
    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
div {
  margin: 5px 0;
}
</style>
