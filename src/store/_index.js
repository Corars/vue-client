import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const serviceUrl = 'http://213.159.7.191:3000/';

const state = {
  username: 'Mehmet',
  message: 'Merhaba',
  veriBloku: '',
  hata: '',
};

const getters = {
  mesajGoster(veri) {
    return `${veri.message} ${veri.username}`;
  },
};

// her zaman sync olmalı anında çalışmalı yani.
const mutations = {
  setUsername(veri, deger) {
    state.username = deger;
  },
  dataYukle(veri, jsonVeri) {
    state.veriBloku = jsonVeri;
  },
  hataYakala(veri, error) {
    state.hata = error;
  },
};

// async olabilir
const actions = {
  updateUsername(context, deger) { // ({ commit }, deger)
    context.commit('setUsername', deger); // commit('setUsername', deger)
  },
  dataCek({ commit }, sorgu, prm) {
    fetch(`http://213.159.7.191:3000/products/${prm}`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${sorgu}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then(result => result.json())
      .catch(error => commit('hataYakala', error))
      .then(result => commit('dataYukle', result)); // commit({type:'dataYukle', jsonVeri:result}));
  },
  async checkLoginOrj(context, payload) {
    await axios.post(`${serviceUrl}users/login`, {
      email: payload.user,
      password: payload.password,
    }).then(
      (resolve) => {
        context.commit('setToken', resolve.data.token);
        // Promise.resolve(response.data);
      },
      (reject) => {
        context.commit('catchError', reject.message);
        // Promise.reject(error);
      });
  },
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  /*
  modules: {
    user: {
      state,
      getters,
      mutations,
      actions,
    },
    product: {
      state,
      getters,
      mutations,
      actions,
    },
  },
  */
});

export default store;
