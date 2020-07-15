<template>
  <button
    class="gh-button"
    :class="[`btn--${type}`,{
    'isCircle':circle,
    'isPlain':plain
  }]"
  :disabled="disabled"
    @click="handleClick"
  >
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "GhButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    plain: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
<style lang="less" src='../assets/less/style.less'>
@redColor: green;
@width: 10px;
@height: @width + 10px;

#header {
  width: @width;
  height: @height;
}
</style>
