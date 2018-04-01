<template>
  <v-content id="Login">
    <v-container fluid>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>{{ title }}</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  type="text"
                  v-model="usr">
                </v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="psw">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="gir">{{ btnLogin }}</v-btn>
            </v-card-actions>
          </v-card>
          <v-alert type="success" :value="true">
            {{ token }}
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    title: '',
    btnLogin: '',
    usr: '',
    psw: '',
    drawer: null,
  }),
  props: {
    source: String,
  },
  computed: {
    ...mapState('Login', ['token', 'users']),
    firstUserId() {
      let id = '';
      if (this.$store.state.Login.users.length > 0) {
        id = this.$store.state.Login.users[0].id;
      }
      return id;
    },
  },
  watch: {
    token: () => {
      this.title = 'Token Değişti';
      // this.tryLogin({ token: this.token });
    },
  },
  methods: {
    ...mapActions('Login', [
      'checkLogin',
    ]),
    gir() {
      this.$store.dispatch('Login/checkLogin', { user: this.usr, password: this.psw });
    },
  },
  created() {
    this.title = 'Giriş';
    this.btnLogin = 'Tamam';
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

