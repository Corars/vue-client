import Service from '../../services/LoginService';

const state = {
  log: null,
  error: null,
  token: null,
  login: false,
};

const getters = {
  getLog() {
    return state.log;
  },
  getError() {
    return {
      error: state.error,
      message: 'Giriş başarısız !',
      color: 'error',
    };
  },
  getToken() {
    return state.token;
  },
  getLogin() {
    return {
      state: state.login,
      message: 'Giriş başarılı, şimdi yönlendirileceksiniz...',
      color: 'success',
    };
  },
};

const mutations = {
  setState(pState, { login, message, token }) {
    state.login = login;
    state.error = message;
    state.token = token;
  },
};

const actions = {
  async checkLogin(context, payload) {
    const result = await Service.checkUserWithAxios(payload);
    if (result.status === 401) { // {"message":"Kimlik doğrulama geçersiz !"}
      context.commit('setState', { login: false, message: result.data.message, token: null });
    } else if (result.status === 200) { // {"message":"Geçerli !","token":"eyJhbGciOiJ..."}
      context.commit('setState', { login: true, message: null, token: result.data.token });
    } else { // {"error":{"message":"Bulunamadı"}}
      context.commit('setState', { login: false, message: 'Undefined Error !', token: null });
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
