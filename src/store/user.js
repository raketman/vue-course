
import { userService } from '../services/user_service';

const userId = JSON.parse(localStorage.getItem('user'));
const state = userId
    ? { status: { loggedIn: true }, userId }
    : { status: {}, user: null };

const actions = {
    login({ dispatch, commit }, { username, password }) {
        commit('loginRequest', { username });

        userService.login(username, password)
            .then(
                user => {
                    commit('loginSuccess', user);
                    //router.push('/');
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        userService.logout();
        commit('logout');
    }
};

const mutations = {
    loginRequest(state, user) {
        state.status = { loggingIn: true };
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.user = user;
    },
    loginFailure(state) {
        state.status = {};
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.user = null;
    },
    registerRequest(state, userId) {
        state.status = { registering: true };
    },
    registerSuccess(state, userId) {
        state.status = {};
    },
    registerFailure(state, error) {
        state.status = {};
    }
};

export const user = {
    namespaced: true,
    state,
    actions,
    mutations
};
