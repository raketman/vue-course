import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert';
import { objects } from './objects';
import { user } from './user';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    alert,
    objects,
    user
  }
});
