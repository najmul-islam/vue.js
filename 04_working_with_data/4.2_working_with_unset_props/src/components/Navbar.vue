<template>
  <nav
    :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-sm']"
  >
    <div class="container">
      <a class="navbar-brand" href="#">Vue js</a>

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li :key="page.id" v-for="(page, index) in pages" class="nav-item">
          <navbar-link
            :page="page"
            :isActive="activePage === index"
            @click.prevent="navLinkClick(index)"
          ></navbar-link>
        </li>
      </ul>

      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  components: {
    NavbarLink,
  },
  props: ["pages", "activePage", "navLinkClick"],
  data() {
    return {
      theme: "light",
    };
  },
  methods: {
    changeTheme() {
      if (this.theme === "light") {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    },
  },
};
</script>
