import Service from '../../services/LoginService';

const state = {
  errors: [],
  token: null,
  isLogin: false,
};

const getters = {
  firstError() {
    return state.errors[0];
  },
};

const mutations = {
  catchError(pState, error) {
    state.errors.push(error);
  },
  setToken(pState, token) {
    state.token = token;
  },
  setIsLogin(pState, bool) {
    state.isLogin = bool;
  },
};

const actions = {
  async checkLogin(context, payload) {
    const result = await Service.checkUserWithAxios(payload);
    if (result.error) {
      context.commit('catchError', result.error.message); // {"error":{"message":"Bulunamadı"}}
      context.commit('setIsLogin', false);
    } else {
      context.commit('setToken', result.token); // {"message":"Geçerli !","token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."}
      context.commit('setIsLogin', true);
    }
  },
};

const moduleLogin = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default moduleLogin;
