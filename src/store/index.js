import Vue from 'vue';
import Vuex from 'vuex';

import moduleSplash from './Splash';
import moduleLogin from './Login';
import moduleMain from './Main';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Splash: moduleSplash,
    Login: moduleLogin,
    Main: moduleMain,
  },
});

export default store;
