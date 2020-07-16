<template>
  <div>
    <div class="title">
      <span :class="titleClass">{{title}}</span>
    </div>
    <textarea name id cols="30" rows="5"></textarea>
    <gh-input ref="first" type="number" :title="test" @change="changeText"></gh-input>
    <div class="btngroup">
      <button class="el-button btn-primary" v-if="sure==true" @click="handleClick">确定</button>
      <button class="el-button">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "gh-dialog",
  props: {
    sure: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "测试"
    },
    test:{
        type:Boolean,
        default:false
    }
  },
  data: function() {
    //titleClass:'fontSize'
    return {
      titleClass: ""
    };
  },
  methods: {
      handleClick(e){
          this.$emit('click',e);
      },
      changeText(e){
          console.log(this.$refs.first.title);
          //alert(2);
      }
  }
};
</script>

<style lang="less">
.btnGroup {
  display: flex;
}
.fontSize {
  font-size: 25px;
  color: red;
}
.el-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}

.btn-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
</style>