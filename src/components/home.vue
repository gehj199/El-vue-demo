<template>
  <div>
      <searchBar></searchBar>
      <div style="margin-top:44px;">
        <graphicItem></graphicItem>
        <appMenu></appMenu>
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