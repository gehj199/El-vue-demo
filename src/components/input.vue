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
