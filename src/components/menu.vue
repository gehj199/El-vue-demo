<template>
  <div class="menu" >
    <div v-if="list.length!=0">
      <ul v-for="item in list" :key="item.id">
        <li><router-link to="">{{item.text}}</router-link></li>
      </ul>
    </div>
    <div v-else>
        <ul v-for="item in defaultList" :key="item.id">
          <li><router-link to="">{{item.text}}</router-link></li>
        </ul>
    </div>

  </div>
</template>

<script>
export default {
  name:'menuList',
  data:function(){
    return {
      defaultList:[{id:0,text:'节点1'},{id:2,text:'节点2'}]
    }
  },
  props:{
    list: {
      type: Array,
      default: ()=>[]
    }
  },
}
</script>

<style lang="less">

</style>
