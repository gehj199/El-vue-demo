<template>
  <div class="search_wrapper">
      <div class="mjd-header">
          <div class="m_cc_header_inner">
              <div class="jd_header">
                  <div class="navBar">
                      <img src="../assets/images/navBar.png" alt="导航按钮">
                  </div>
                  <div class="searchBox">
                    <i>JD | </i>
                    <i class="icon"></i>
                    <input type="text" class="search-input" @click="search" />
                  </div>
                  <div class="personal" >
                      <router-link to="./login" v-if="$store.state.loginType==true" >
                          <img src="../assets/images/personal.png" alt="个人中心">
                      </router-link>
                      <router-link to="./login" >
                          <span>登陆</span>
                      </router-link>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"searchBar",
    data:function(){
      return {

      }
    },
    methods:{
      search(e){
        console.log(e);
        this.$router.push({"path":"/login"})
      }
    }
}
</script>

<style lang="less" src="../assets/less/style.less">

</style>
