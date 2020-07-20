// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GhDialog from './components/dialog'
import Footers from './components/footers'
import searchBar from '@/components/searchBar'
import store from './store/index.js'

import Vuex from 'vuex'
import less from 'less'

Vue.config.productionTip = false
Vue.use(less)
Vue.use(Vuex)

Vue.component(GhDialog.name, GhDialog);
Vue.component(Footers.name, Footers)
Vue.component(searchBar.name, searchBar)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
