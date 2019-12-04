import axios from 'axios';
export default {
  state: {
    langActive: '',
    langWords: [],
    langs: [],
    shows: {
      addWord: true,
    }
  },
  getters: {
    getShowsLang: state => state.shows,
    getLangActive: state => state.langActive,
    getLangWords: state => state.langWords,
    getLangs: state => state.langs,
  },
  mutations: {
    changeLangActive: (state, x) => state.langActive = x,
    updateWordList: (state, x) => state.langWords = x,
    updateLangList: (state, x) => state.langs = x
  },
  actions: {
    loadWords({state, commit}) {

      axios.get('http://127.0.0.1:9000/idiomas/palabras/' + state.langActive)
        .then(function (response) {

          commit('updateWordList', response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    loadLangs({state, commit}) {
      axios.get('http://127.0.0.1:9000/idiomas/')
      .then(function (response) {

        commit('updateLangList', response.data.map( x => x.name));
      })
      .catch(function (error) {
        console.log(error)
      });
    }
  }
}
