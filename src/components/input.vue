<template>
  <input :type="type" @change="handleChange" />
</template>

<script>
export default {
  name: "GhInput",
  props: {
    type: {
      type: String,
      default: "default"
    },
    title:{
      type:Boolean,
      default:false
    }
  },
  methods: {
    handleChange(e) {
      this.$emit("change", e);
    }
  }
};
</script>

<style>
</style>
