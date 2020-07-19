
<template>
  <div v-if="showDialog==true">
    <div class="black"></div>
    <div class="dialogs">
      <div class="title">
        <span :class="titleClass">{{title}}</span>
      </div>
      <textarea name id cols="30" rows="5"></textarea>
      <div class="btngroup">
        <button class="el-button btn-primary" v-if="sure==true" @click="handleClick">确定</button>
        <button class="el-button" @click="doCancel">取消</button>
      </div>
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
    test: {
      type: Boolean,
      default: false
    },
    showDialog:{
      type:Boolean,
      deafult:false
    }
  },
  data: function() {
    //titleClass:'fontSize'
    return {
      titleClass: ""
    };
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    },
    changeText(e) {
      console.log(this.$refs.first.title);
      //alert(2);
    },
    doCancel(e){
      this.$emit("cancel", e);
    }
  },
  watch:{
    showDialog:{
      handler(newName, oldName){
        console.log(newName,oldName);
      },
      immediate:false
      
    }
  }
};
</script>

<style lang="less">
.black {
  position: fixed;
  display: block;
  z-index: 2;
  background: #eee;
  opacity: 0.8;
  width:100%;
  height:100%;
  top:0;
  left:0;
}
.dialogs {
  position: fixed;
  display: block;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  top: 30%;
  left:20%;
}
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