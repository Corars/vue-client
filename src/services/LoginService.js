import axios from 'axios';
import cs from './CommonService';

export default {
  checkUserWithAxios({ email, password }) {
    return new Promise((resolve) => {
      resolve(axios.post(`${cs.serviceUrl}users/login`, { email, password }));
    })
      .then(result => result)
      .catch(error => error.response);
  },
};
