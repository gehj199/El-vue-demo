<template>
  <div >
      <div class="loginClass" v-if="$store.state.loginType==false">
          <img src="../assets/images/login.png">
        <p class="input-container">
            <label for="">+86</label>
            <input type="number" class="input-area" placeholder="手机号">
        </p>
        <p class="input-container">
            
            <input type="number" class="input-area" placeholder="验证码">
            <label for="">获取验证码</label>
        </p>
        <p class="input-container"> 
            <button class="btn-login" @click="login">登&nbsp;&nbsp;录</button>
        </p>
      </div>
      <div class="personal" v-if="$store.state.loginType==true">
          <!-- <router-link to="/">跳转</router-link>
          <span>测试类型</span> -->
      </div>
      <footers></footers>
  </div>
</template>

<script>
import footers from '@/components/footers'
export default {
    data:function(){
        return {
        }
    },
    methods:{
        login(){
            this.$store.commit('login');
            console.log(this.$store.state.loginType);
        }
    },
    created(){
        console.log(this.$store.state.loginType);
    }
}
</script>

<style lang="less" src="../assets/less/style.less">

</style>