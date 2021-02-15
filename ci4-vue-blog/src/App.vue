<template>
  <div id="app-vue">
    <!-- components: {appNav: Nav,} -->
    <app-nav></app-nav>
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
};
</script>

<style>
</style>
