import axios from "axios";

const state = {
  noticiasLocal: JSON.parse(localStorage.getItem("noticias")) || [],
  noticiasFetch: []
};

const getters = {
  noticiasLocalStorage: state => state.noticiasLocal,
  noticiasFetch: state => state.noticiasFetch,
  allNoticias: state => [...state.noticiasLocal, ...state.noticiasFetch]
};

const actions = {
  async fetchNoticias({ commit }) {
    try {
      const response = await axios.get(
        "https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=y1sMylD8zd4XCBNCf1sSf932UGJGflsp"
      );
      commit("setNoticiasFetch", response.data.results);
    } catch (error) {
      console.error("Error al obtener noticias:", error);
    }
  },
  async crearNoticia({ commit, state }, nuevaNoticia) {
    try {
      commit("agregarNoticiaLocal", nuevaNoticia);
      localStorage.setItem("noticias", JSON.stringify(state.noticiasLocal));
    } catch (error) {
      console.error("Error al crear la noticia:", error);
    }
  }
};

const mutations = {
  setNoticiasFetch(state, noticiasFetch) {
    state.noticiasFetch = noticiasFetch;
  },
  agregarNoticiaLocal(state, nuevaNoticia) {
    state.noticiasLocal = [...state.noticiasLocal, nuevaNoticia];
    localStorage.setItem("noticias", JSON.stringify(state.noticiasLocal));
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
