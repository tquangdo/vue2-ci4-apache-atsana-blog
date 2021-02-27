<template>
  <div class="col-12">
    <div
      :class="'alert alert-' + propClassAlert"
      role="alert"
      v-html="propMsg"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["propMsg", "propClassAlert"],
};
</script>

<style>
</style>