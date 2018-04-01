import Vue from 'vue';
import Vuex from 'vuex';

import moduleSplash from './modules/Splash';
import moduleLogin from './modules/Login';
import moduleMain from './modules/Main';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Splash: moduleSplash,
    Login: moduleLogin,
    Main: moduleMain,
  },
});

export default store;
