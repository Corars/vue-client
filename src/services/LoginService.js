import axios from 'axios';
import cs from './CommonService';

export default {
  checkUserWithAxios({ email, password }) {
    return new Promise((resolve, reject) => {
      resolve(axios.post(`${cs.serviceUrl}users/login`, { email, password }));
      reject('hata');
    })
      .then(result => result.data)
      .catch(error => error.response.data);
  },
};
