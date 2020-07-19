<template>
    <div>
        <div v-if="$store.state.loginType==false">
            <router-link to="/">测试1</router-link> 
            <footers></footers>
        </div>
        <div v-if="$store.state.loginType==true">
            <router-link to="/">测试2</router-link> 
            <footers></footers>
        </div>
    </div>
</template>

<script>
import footers from '@/components/footers'
export default {

}
</script>

<style>

</style>