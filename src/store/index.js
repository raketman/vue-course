import Vue from 'vue';
import Vuex from 'vuex';

import { alert } from './alert';
import { object } from './object';
import { user } from './user';

Vue.use(Vuex);

export  default new Vuex.Store({
  modules: {
    alert,
    object,
    user
  }
});
