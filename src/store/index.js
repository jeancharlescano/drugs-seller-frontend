import { createStore } from "vuex";
import router from "../router";

import { getIfUserExist } from "../utilities/userRequest.js";

const store = createStore({
    state: {
        isLogged: false,
        userData: false,
    },
    mutations: {
        LOGIN(state) {
            if (state.userData) {
                state.isLogged = true;
            }
        },
        LOGOUT(state) {
            state.isLogged = false;
            state.userData = false;
        },
    },
    getters: {
        isLogged: (state) => state.isLogged,
        userData: (state) => state.userData,
    },
    actions: {
        async login ({ commit }, user) {
            await getIfUserExist(user).then((r) => {
                console.log("log: login -> r.data", r.data);
                this.state.userData = r.data;
            });
            commit("LOGIN");
            router.push("/home");
        },
        async logout ({commit}) {
            commit("LOGOUT");
            router.push("/");
        },
    },     
});

export default store;