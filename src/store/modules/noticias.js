import axios from "axios";

const state = {
  noticias: []
};

const getters = {
  allNoticias: (state) => state.noticias
};

const actions = {
  async fetchNoticias({ commit }) {
    const response = await axios.get("https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=y1sMylD8zd4XCBNCf1sSf932UGJGflsp");
    commit("setNoticias", response.data.results);
    console.log(response.data.results)
  },
  async crearNoticia({ commit, state }, nuevaNoticia) {
    try {
      const noticiasActualizadas = [...state.noticias, nuevaNoticia];
      commit('setNoticias', noticiasActualizadas);

      localStorage.setItem('noticias', JSON.stringify(noticiasActualizadas));
    } catch (error) {
      console.error("Error al crear la noticia:", error);
    }
  }
};

const mutations = {
  setNoticias: (state, noticias) => {
    state.noticias = noticias;
  },
  agregarNoticia(state, nuevaNoticia) {
    state.noticias.push(nuevaNoticia);
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
