import Vue from 'vue'
import Router from 'vue-router'
import footers from '@/components/footers'
import home from '@/components/home'
import login from '@/components/login'
import cart from '@/components/cart'
import menu from '@/components/menu'
import permission from '@/components/setPermission'

import '../assets/less/style.less'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: home
    }, {
        path: '/footers',
        name: 'footers',
        component: footers
    }, {
        path: '/login',
        name: 'login',
        component: login
    }, {
        path: '/cart',
        name: 'cart',
        component: cart
    },{
      path:'/menu',
      component:menu
    },{
      path:'/permission',
      component:permission
    }]
})
