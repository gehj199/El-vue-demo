import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1,
    storegeType: 'draft',
    loginType: false
}

const mutations = {
    add(state) {
        state.count += 1;
    },
    reduce(state) {
        state.count -= 1;
    },
    store(state) {
        state.storegeType = 'save'
    },
    login(state) {
        state.loginType = state.loginType ? false : true;
    }
}

export default new Vuex.Store({
    state,
    mutations
})