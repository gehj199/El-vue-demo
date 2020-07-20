<template>
  <div v-if="showDialog==true">
    <div class="black" ></div>
    <div class="dialogs" >

    </div>
  </div>
</template>

<script>
export default {
  name: "GhDialog",
  props: {
    type: {
      type: String,
      default: "text"
    }
  }
};
</script>

<style>
</style>
