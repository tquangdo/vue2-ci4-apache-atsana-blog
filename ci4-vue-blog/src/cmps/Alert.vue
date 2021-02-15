<template>
  <div class="col-12">
    <div
      :class="'alert alert-' + dataClassAlert"
      role="alert"
      v-html="dataMsg"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["dataMsg", "dataClassAlert"],
};
</script>

<style>
</style>