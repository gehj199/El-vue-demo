// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import GhButton from './components/button'
import GhInput from './components/input'
import GhDialog from './components/dialog'
import less from 'less'

Vue.config.productionTip = false
Vue.use(less)

Vue.component(GhButton.name, GhButton);
Vue.component(GhInput.name, GhInput);
Vue.component(GhDialog.name, GhDialog)
    /* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})