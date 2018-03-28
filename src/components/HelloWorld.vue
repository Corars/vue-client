<template>
  <div class="hello">
    <img src="../assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>{{ username }} {{ message }}</h2>
    <h2>{{ mesajGoster }}</h2>
    <h2>{{ veriBloku }}</h2>
    <input type="text" v-model="ara">
    <button @click="nodeApi">Değiştir</button>
    <h2>{{ kim }}</h2>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Selamı aranızda yayınız.',
      kim: '',
      ara: '',
    };
  },
  computed: {
    ...mapState(['username', 'message', 'veriBloku']),
    ...mapGetters(['mesajGoster']),
  },
  methods: {
    ...mapMutations([
      'setUsername',
    ]),
    ...mapActions([
      'updateUsername',
      'dataCek',
    ]),
    kimDegistir() {
      this.updateUsername(this.kim);
    },
    nodeApi() {
      this.dataCek(this.ara);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
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
