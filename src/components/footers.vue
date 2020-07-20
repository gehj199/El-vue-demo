<template>
  <div class="nav">
    <router-link to='/'>
      <div class="icon-center">
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/67550/26/12426/5094/5d9c4b13Eea435a3f/81328b0609c60a3c.png" alt="JD" class="nav-img"/>
      </div>
    </router-link>
    <router-link to='/login'>
      <div class="icon-center">
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/56507/6/12787/3168/5d9c4b12Ef363dd8d/4af32f42575509d8.png" alt="JD" class="nav-img"/>
      </div>
    </router-link>
   <router-link to='/login'>
      <div class="icon-center">
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/70651/38/12417/3194/5d9d3eafE12cde68b/2467c20113c50451.png" alt="JD" class="nav-img"/>
      </div>
    </router-link>
    <router-link to='/cart'>
      <div class="icon-center">
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/64954/4/12406/3529/5d9c4b12Ee7a82735/f2fe0a88bf344736.png" alt="JD" class="nav-img"/>
      </div>
    </router-link>
    <router-link to='/login' >
      <div class="icon-center">
        <img src="https://img11.360buyimg.com/jdphoto/s130x100_jfs/t1/47480/36/12929/3209/5d9c4b13E97caa63a/4dc0ec8a7e47c2b7.png" alt="JD" class="nav-img"/>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "footers",
  data() {
    return {
      bool: false,
      showDialog: false,
      str: [1, 2, 3, 4, 5],
      keys:['1','2','3','4']
    };
  },
};
</script>

<style lang="less" src='../assets/less/style.less'>

</style>