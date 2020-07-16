<template>
  <input :type="type" @change="handleChange" style="width:80%;margin:10px;padding:0;" />
</template>

<script>
export default {
  name: "GhInput",
  props: {
    type: {
      type: String,
      default: "default"
    },
    title: {
      type: Boolean,
      default: false
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
