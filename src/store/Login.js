// import Service from '../services/service';

const state = {
  hata: '',
  token: '',
  users: [],
};

const mutations = {
  hataYakala(veri, error) {
    state.hata = error;
  },
  controlLogin(veri, json) {
    state.token = json.token;
  },
  dataYukle(veri, json) {
    state.users = json.users;
  },
};

const actions = {
  /*
  checkLogin(context, { user, password }) {
    Service.fetchLogin(user, password);
  },
  */
  controlLogin({ commit }, { usr, psw }) {
    fetch('http://213.159.7.191:3000/users/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ email: usr, password: psw }),
    })
      .then(result => result.json())
      .catch(error => commit('hataYakala', error))
      .then((result) => {
        commit('controlLogin', result);
        fetch('http://213.159.7.191:3000/users/', {
          method: 'GET',
          headers: new Headers({
            Authorization: `Bearer ${result.token}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          }),
        })
          .then(res => res.json())
          .catch(error => commit('hataYakala', error))
          .then(res => commit('dataYukle', res));
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
