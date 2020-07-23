<template>
  <div>
      <searchBar></searchBar>
      <div style="margin-top:44px;">
        <graphicItem></graphicItem>
        <appMenu></appMenu>
      </div>
      <div style="margin-top:15px;">
        测试方法
      </div>
      <footers></footers>
  </div>
</template>

<script>
import footers from '@/components/footers'
import searchBar from '@/components/searchBar'

export default {
    name:'Home'
}
</script>

<style>

</style>
