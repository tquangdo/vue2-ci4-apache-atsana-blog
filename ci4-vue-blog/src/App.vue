<template>
  <div id="app-vue">
    <!-- components: {appNav: Nav,} -->
    <app-nav :propLoggedIn="onLoggedIn"></app-nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Nav from "./cmps/Nav";
export default {
  name: "App",
  components: {
    appNav: Nav, // <app-nav>
  },
  computed: {
    onLoggedIn() {
      return this.$store.getters.loginState;
    },
  },
  created() {
    const expires = localStorage.getItem("lsExpireDate");
    const token = localStorage.getItem("lsAccessToken");
    if (expires && token) {
      var expiresMs = new Date(expires);
      var now = new Date();
      now = now.getTime();
      expiresMs = expiresMs.getTime();
      if (now > expiresMs) {
        this.$store.dispatch("storeLogout");
      } else {
        this.$store.dispatch("storeLogin", expiresMs - now);
      }
    } else {
      if (this.$router.currentRoute.name !== "Signin")
        this.$router.push({ name: "Signin" });
    }
  },
};
</script>

<style>
body {
  background-color: #e1e1e1;
}
.form-wrapper {
  border-radius: 7px;
}
.form-wrapper label {
  font-weight: bold;
}
.errors li {
  list-style: none;
  width: 100%;
  text-align: center;
}
.errors ul {
  padding-left: 0;
  margin-bottom: 0;
}
@media (max-width: 768px) {
  .form-wrapper .text-right {
    text-align: center !important;
  }
  .form-wrapper .btn-primary {
    display: block;
    margin: 0 auto;
  }
}
</style>
