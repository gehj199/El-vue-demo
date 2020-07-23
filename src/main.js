// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GhDialog from './components/dialog'
import Footers from './components/footers'
import searchBar from '@/components/searchBar'
import store from './store/index.js'
import graphicItem from '@/components/graphicItem'
import appMenu from '@/components/appMenu'
import Vuex from 'vuex'
import less from 'less'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]
Vue.use(less)
Vue.use(Vuex)
Vue.use(ElementUI)

Vue.component(GhDialog.name, GhDialog);
Vue.component(Footers.name, Footers);
Vue.component(searchBar.name, searchBar);
Vue.component(graphicItem.name, graphicItem)
Vue.component(appMenu.name, appMenu)

/* eslint-disable no-new */
var apps=new Vue({
    router,
    store,
    render: h => h(App)
    // components: { App },
    // template: '<App/>'
}).$mount("#app")
