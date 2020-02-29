const state = {
    type: null,
    message: null
};

const getters = {
    getMessage() {
        return state.message;
    },
    getType() {
        return state.type;
    },

    existAlert() {
        return !!state.message;
    },
}

const actions = {
    success({ commit }, message) {
        commit('success', message);
    },
    error({ commit }, message) {
        commit('error', message);
    },
    flush({ commit }, message) {
        commit('flush', message);
    }
};

const mutations = {
    success(state, message) {
        state.type = 'alert-success';
        state.message = message;
    },
    error(state, message) {
        state.type = 'alert-danger';
        state.message = message;
    },
    flush(state) {
        state.type = null;
        state.message = null;
    }
};

export const alert = {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
};
