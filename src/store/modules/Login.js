import axios from 'axios';

const serviceUrl = 'http://213.159.7.191:3000/';

const state = {
  error: '',
  token: '',
  users: [],
};

const mutations = {
  catchError(pState, error) {
    state.error = error;
  },
  setToken(pState, token) {
    state.token = token;
  },
  setUsers(pState, payload) {
    state.users = payload.users;
  },
};

const actions = {
  async checkLogin(context, payload) {
    await axios.post(`${serviceUrl}users/login`, {
      email: payload.user,
      password: payload.password,
    }).then(
      (response) => {
        context.commit('setToken', response.data.token);
        Promise.resolve(response.data);
      },
      (error) => {
        Promise.reject(error);
      });
  },
};

const moduleLogin = {
  namespaced: true,
  state,
  mutations,
  actions,
};

export default moduleLogin;
