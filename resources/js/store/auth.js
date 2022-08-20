import axios from "axios"

export default ({
    namespaced: true,
    state: {
        'token': null,
        'user': null,
    },
    getters: {
        authenticated(state) {
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        }
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, user) {
            state.user = user;
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('/login', credentials);
            // console.log(response.data);
            // console.log(response.data.user);
            dispatch('attempt', response.data.token);
        },
        async attempt({ commit, state }, token) {
            if (token) {
                commit('SET_TOKEN', token);
            }
            if (!state.token) {
                return;
            }
            try {
                let response = await axios.get('me');
                commit('SET_USER', response.data.user);
            } catch (e) {
                // console.log(e);
                console.log('Failed');
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            }
        },
        signOutAction({ commit }) {
            return axios.post('/logout').then(() => {
                commit('SET_TOKEN', null);
                commit('SET_USER', null);
            })
        },
        minimizeSide() {
            alert();
        }
    },
})