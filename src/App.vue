<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <div class="row">
      <gh-button plain circle disabled @click="fn()">未定义</gh-button>
      <gh-button plain circle type="primary">初始化</gh-button>
      <gh-button plain circle type="success">成功</gh-button>
      <gh-button plain circle disabled type="info">信息</gh-button>
      <gh-button plain circle :disabled="bool" type="warning">警告</gh-button>
      <gh-button plain circle disabled type="danger">危险</gh-button>
    </div>
    <div class="inputArea">
      <gh-input type="text" @change="textChange()"></gh-input>
      <gh-input type="number" @change="numChange()"></gh-input>
      <gh-input type="date" @change="dateChange()"></gh-input>
      <gh-input type="date" @change="dateChange()"></gh-input>
    </div>
    <div>
      <gh-dialog title="标题" class="fontSize" sure @click="doOk"></gh-dialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      bool: false
    };
  },
  methods: {
    fn() {
      console.log(3);
    },
    textChange() {
      console.log("text");
    },
    numChange() {
      console.log("number");
    },
    dateChange() {
      console.log("date");
    },
    doOk(){
      alert(1);
    }
  }
};
</script>

<style>
</style>
