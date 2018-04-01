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
                  v-model="email">
                </v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  v-model="password">
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" @click="login">{{ btnLogin }}</v-btn>
            </v-card-actions>
          </v-card>
          <v-alert type="success" :value="true" v-if="isLogin">
            {{ loginMessage }}
          </v-alert>
          <v-alert type="alert" :value="true" v-if="firstError!=null">
            {{ errorMessage }}
          </v-alert>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    title: 'Giriş',
    btnLogin: 'Tamam',
    email: '',
    password: '',
    loginMessage: 'Giriş başarılı, şimdi yönlendirileceksiniz...',
    errorMessage: 'Giriş başarısız !',
  }),
  props: {
    alerttype: String,
  },
  computed: {
    ...mapState('Login', ['errors', 'token', 'isLogin']),
    ...mapGetters('Login', ['firstError']),
  },
  methods: {
    ...mapActions('Login', [
      'checkLogin',
    ]),
    login() {
      // this.$store.dispatch('Login/checkLogin', { email: this.email, password: this.password });
      this.checkLogin({ email: this.email, password: this.password });
    },
  },
};
</script>

<style scoped>

</style>

