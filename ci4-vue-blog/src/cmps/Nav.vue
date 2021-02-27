<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <!-- khi click avatar: IF loggedin THEN home page ELSE login page -->
      <router-link class="navbar-brand" :to="propLoggedIn ? '/' : '/signin'">{{
        envBrand
      }}</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul v-if="!propLoggedIn" class="navbar-nav mr-auto">
          <MenuLink path="/signin" text="Signin"></MenuLink>
          <MenuLink path="/signup" text="Signup"></MenuLink>
        </ul>
        <ul v-else class="navbar-nav mr-auto">
          <MenuLink path="/" text="Admin"></MenuLink>

          <li class="nav-item">
            <a class="nav-link" href="#" @click.prevent="logout()">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import MenuLink from "./MenuLink";
export default {
  props: ["propLoggedIn"],
  data() {
    return {
      envBrand: process.env.VUE_APP_APPNAME,
    };
  },
  components: {
    MenuLink,
  },
  methods: {
    logout() {
      this.$store.dispatch("storeLogout");
    },
  },
};
</script>