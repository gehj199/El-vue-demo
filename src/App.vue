<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    {{keys|revers}}
    <router-view/>

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
  filters: {
    revers: function(val) {
      var str=[...val];
      str.push(5)
      return str.reverse();
    }
  },
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
