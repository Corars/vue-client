export default {
  checkUser(usr, psw) {
    fetch('http://213.159.7.191:3000/users/login', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ email: usr, password: psw }),
    })
      .then(result => result.json())
      .catch()
      .then(result => result.token);
  },
};
