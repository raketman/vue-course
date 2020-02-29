import { userService } from '../services/user_service';

const userId = JSON.parse(localStorage.getItem('userId'));
const state = userId
    ? { status: { loggedIn: true }, userId: userId, user: null }
    : { status: {}, userId: null, user: null };

const getters = {
    isAuth(state) {
        return !!state.status.loggedIn;
    },
    isFetch(state) {
        return !!state.user;
    },
    getUser(state) {
        return state.user;
    }
};

const actions = {
    login({ dispatch, commit }, { username, password }) {
        userService.login(username, password).then(
                result => {
                    if (!result.data || (result.data && result.data.status == 'error')) {
                        commit('loginFailure');
                        dispatch('alert/error', result.data.msg ? result.data.msg : 'Не удалось авторизоваться', { root: true });
                        return;
                    }
                    commit('loginSuccess', result.data);
                },
                error => {
                    commit('loginFailure', error);
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
    logout({ commit }) {
        commit('logout');
    },
    fetch({commit}) {
        userService.fetch(state.userId).then(
            result => {
                commit('fetchSuccess', result.data);
            }
        );

    },
    favorite({commit},story_id) {
        userService.favorite(state.userId, story_id).then(
            result => {
                commit('fetchSuccess', result.data);
            }
        );
    }
};

const mutations = {
    fetchSuccess(state, user) {
        state.user = user;
    },
    loginSuccess(state, user) {
        state.status = { loggedIn: true };
        state.userId = user.id;
        state.user = user;

        localStorage.setItem('userId', JSON.stringify(user.id));
    },
    loginFailure(state) {
        state.status = {};
        state.userId = null;
        state.user = null;
    },
    logout(state) {
        state.status = {};
        state.userId = null;
        state.user = null;

        localStorage.removeItem('userId')
    }
};

export const user = {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
};
