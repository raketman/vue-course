import {objectService} from "../services/object_service";

const state = {
    objects: []
};

const getters = {
    getObjects() {
        return state.objects;
    }
}

const actions = {
    fetch({ dispatch, commit }) {
        objectService.getList()
            .then(
                result => {
                    commit('fetchSuccess', result);
                },
                error => {
                    dispatch('alert/error', error, { root: true });
                }
            );
    },
};

const mutations = {
    fetchSuccess(state, objects) {
        state.objects = objects;
    },
};

export const object = {
    namespaced: true,
    getters,
    state,
    actions,
    mutations
};
