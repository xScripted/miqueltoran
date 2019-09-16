import axios from 'axios';
export default {
  state: {
    currentType: 'Ingredientes',
    allIngredients: [],
    shows: {
      addDiet: false,
      showDiet: false,
      addPlate: false,
      showPlate: false,
      addIng: false,
      showIng: false,
    }
  },
  getters: {
    getCurrentType: state => state.currentType,
    getAllIngredients: state => state.allIngredients,
    getShows: state => state.shows,
  },
  mutations: {
    setCurrentType(state, type){
      state.currentType = type;
    },
    setAllIngredients(state, ingredients){
      state.allIngredients = ingredients;
    },
    changeShow: function(state, active) {
      for (let x of Object.keys(state.shows)) {
        state.shows[x] = false;
      }
      state.shows[active] = true;
    }
  },
  actions: {
    changeType({ commit }, type){
      commit('setCurrentType', type);
    },
    loadIngredients({ commit }){

      axios.get('http://127.0.0.1:9000/dieta/ingrediente')
      .then(function (response) {
        commit('setAllIngredients', response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
}
