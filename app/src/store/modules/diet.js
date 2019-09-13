export default {
  state: {
    currentType: '_'
  },
  getters: {
    currentType: state => state.currentType,
  },
  mutations: {
    setCurrentType(type){
        this.state.currentType = type;
    }
  },
  actions: {
    changeType({ commit }, type){
        commit('setCurrentType', type);
    }
  }
}
