import axios from 'axios';
export default {
  state: {
    currentType: 'Platos',
    dietActive: 0,
    allIngredients: [],
    allPlates: [],
    allDiets: [{
      nombre: 'default',
      contenido: []
    }],
    shows: {
      addDiet: false,
      showDietActive: true,
      showDiets: false,
      addPlate: false,
      showPlate: false,
      addIng: false,
      showIng: false,
    }
  },
  getters: {
    getCurrentType: state => state.currentType,
    getAllIngredients: state => state.allIngredients,
    getAllPlates: state => state.allPlates,
    getAllDiets: state => state.allDiets,
    getDietActive: state => state.dietActive,
    getShows: state => state.shows
  },
  mutations: {
    setCurrentType: (state, type) => state.currentType = type,
    setDietActive: (state, id) => state.dietActive = id,
    setAllDiets: (state, diets) => state.allDiets = diets,
    setAllPlates: (state, plates) => state.allPlates = plates,
    setAllIngredients: (state, ingredients) => state.allIngredients = ingredients,
    changeShow(state, active) {
      for (let x of Object.keys(state.shows)) {
        state.shows[x] = false;
      }

      if (active == 'addDiet') state.currentType = 'Platos';
      if (active == 'addPlate') state.currentType = 'Ingredientes';

      state.shows[active] = true;
    }
  },
  actions: {
    changeType({ commit }, type) {
      commit('setCurrentType', type);
    },
    loadIngredients({ commit }) {

      axios.get('http://127.0.0.1:9000/dieta/ingrediente')
        .then(function (response) {
          commit('setAllIngredients', response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadPlates({ commit }) {
      axios.get('http://127.0.0.1:9000/dieta/plato')
        .then(function (response) {
          commit('setAllPlates', response.data);
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadDiets({ commit }) {
      axios.get('http://127.0.0.1:9000/dieta')
        .then(function (response) {
          if(response.data.length == 0){
            commit('setAllDiets', [{
              nombre: 'default',
              contenido: []
            }]);
          } else {
            commit('setAllDiets', response.data);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
}
