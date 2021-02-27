import Vue from "vue";
import Vuex from "vuex";
import router from "../routes";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        isLoggedIn: false,
    },
    getters: {
        loginState: (state) => {
            return state.isLoggedIn;
        },
    },
    mutations: {
        storeLogin(state) {
            state.isLoggedIn = true;
            if (router.currentRoute.name !== "RouteHome") router.push("/");
        },
        storeLogout(state) {
            state.isLoggedIn = false;
            localStorage.removeItem("lsAccessToken");
            localStorage.removeItem("lsExpireDate");

            router.push("/signin");
        },
    },
    actions: {
        storeLogin({ commit }, arg_expires_ms) {
            setTimeout(() => {
                commit("storeLogout");
            }, arg_expires_ms);
            commit("storeLogin");
        },
        storeLogout({ commit }) {
            commit("storeLogout");
        },
    },
});