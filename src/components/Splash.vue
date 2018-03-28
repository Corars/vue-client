<template>
  <v-content id="Splash">
    <v-jumbotron color="grey lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">{{ welcome }}</h3>
            <span class="subheading">{{ altBaslik }}</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">{{ slogan }}</div>
            <v-btn large color="primary" class="mx-0" to="/login">{{ btnGiris }}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
    <br/>
    <v-progress-circular indeterminate :size="70" :width="7" color="purple"></v-progress-circular>
  </v-content>
</template>

<script>
export default {
  name: 'Splash',
  data: () => ({
    welcome: 'Hoş Geldiniz',
    altBaslik: 'Sitemimiz Node.js API kullanmaktadır.',
    slogan: 'Hadi denemeye başlayalım !',
    btnGiris: 'GİRİŞ',
  }),
};
</script>

<style scoped>

</style>

