<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <!-- <div class="row">
        <gh-button plain circle disabled @click="fn()">未定义</gh-button>
        <gh-button plain circle type="primary" @click="fn()">初始化</gh-button>
        <gh-button plain circle type="success" @click="$store.commit('add')">成功</gh-button>
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
            <gh-dialog
                :showDialog="showDialog"
                title="标题"
                class="fontSize"
                sure
                @cancel="doCancel"
                @click="doOk"
            ></gh-dialog>
        </div>
     -->
    
  </div>
</template>

<script>
import store from './store/index.js'
export default {
  name: "second",
  data() {
    return {
      bool: false,
      showDialog: false,
      str: [1, 2, 3, 4, 5],
      keys:['1','2','3','4']
    };
  },
  // filters: {
  //   revers: function(val) {
  //     var str=val.push(4);
  //     return str;
  //   }
  // },
  methods: {
    fn() {
      
      this.showDialog = true;
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
    doOk() {
      this.showDialog = false;
    },
    doCancel() {
      this.showDialog = false;
    }
  },
  computed:{
    rever(val){
      return this.keys.reverse();
    }
  }
};
</script>

<style>
</style>
