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

            <m-alert
              :message="getLogin.message"
              :color="getLogin.color"
              @tikla="metodum"
              v-if="getLogin.state == true">
            </m-alert>

            <v-alert :type="getError.color" :value="true" v-if="getError.error != null">
              {{ getError.message }}
            </v-alert>

          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Login',
  data: () => ({
    title: 'Giriş',
    btnLogin: 'Tamam',
    email: '',
    password: '',
  }),
  computed: {
    ...mapGetters('Login', ['getLog', 'getError', 'getToken', 'getLogin']),
  },
  watch: {
    getLogin() {
      if (this.getLogin.state) {
        setTimeout(() => {
          // this.$router.replace({ name: 'Main' });
        }, 1000);
      }
    },
  },
  methods: {
    ...mapActions('Login', ['checkLogin']),
    login() {
      this.checkLogin({ email: this.email, password: this.password });
      // this.$store.dispatch('Login/checkLogin', { email: this.email, password: this.password });
    },
    metodum() {
      return 'ali';
    },
  },
};
</script>

<style scoped>

</style>

