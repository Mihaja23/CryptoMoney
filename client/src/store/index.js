/* il permet d'avoir de lister le store et le store sert à gérer les données de l'api*/
import { createStore } from "vuex";
import { auth } from "./auth.module";

const store = createStore({
  modules: {
    auth,
  },
});

export default store;
