import axios from 'axios';

const serviceUrl = 'http://213.159.7.191:3000/';

export default {
  checkUser(payload) {
    fetch(`${serviceUrl}users/login`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ email: payload.user, password: payload.password }),
    })
      .then(result => result.json())
      .then(result => result.token)
      .catch(error => error);
  },
  checkUserWithAxios(payload) {
    return new Promise((resolve, reject) => {
      resolve(
        axios.post(`${serviceUrl}users/login`, {
          email: payload.user,
          password: payload.password,
        }),
      );
      reject(
        'hata',
      );
    })
      .then(result => result.data.token);
    /*
    const a = axios.post(`${serviceUrl}users/login`, {
      email: payload.user,
      password: payload.password,
    });
    return Promise.all([a]).then(([result]) => result);
    */
  },
  getUsers() {
    fetch(`${serviceUrl}users`, {
      method: 'GET',
      headers: new Headers({
        Authorization: `Bearer ${this.$store.state.Login.token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      }),
    })
      .then(result => result.json())
      .then(result => result)
      .catch(error => error);
  },
  getUsersWithAxios() {
    axios.get(`${serviceUrl}users`, {
      headers: {
        Authorization: `Bearer ${this.$store.state.Login.token}`,
      },
    })
      .then(result => result)
      .catch(error => error);
  },
};
