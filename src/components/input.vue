<template>
  <input :type="type" @change="handleChange" class="inputControl" />
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

<style lang="less" src='../assets/less/style.less'>
@controlWidth: 80%;
.inputControl {
  width: @controlWidth;
  padding: 0;
}
</style>
