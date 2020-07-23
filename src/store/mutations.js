export default{
  setName(state,val){
    state.name=val;
  },
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
