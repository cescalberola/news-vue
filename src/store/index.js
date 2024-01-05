import { createStore } from "vuex";
import noticias from "./modules/noticias";

const store = createStore({
  modules: {
    noticias,
  },
});

export default store;
