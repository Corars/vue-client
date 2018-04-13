// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import App from './App';
import VueRouter from './router';
import VuexStore from './store/index';

import Alert from './components/Alert';

Vue.use(Vuetify);
Vue.config.productionTip = false;

Vue.component('m-alert', Alert);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store: VuexStore,
  router: VueRouter,
  components: {
    App,
  },
  template: '<App/>',
});
