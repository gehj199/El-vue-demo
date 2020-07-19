<template>
  <div class="search_wrapper">
      <div class="mjd-header">
          <div class="m_cc_header_inner">
              <div class="jd_header">
                  <div class="navBar">
                      <img src="../assets/images/navBar.png" alt="导航按钮">
                  </div>
                  <div class="searchBox">
                    <input type="text" class="search-input" />
                  </div>
                  <div class="personal" >
                      <router-link to="./login">
                          <img src="../assets/images/personal.png" alt="个人中心">
                      </router-link>
                  </div>
              </div>
          </div>
      </div>    
  </div>   
</template>

<script>
export default {
    name:"searchBar"
}
</script>

<style lang="less" src="../assets/less/style.less">

</style>