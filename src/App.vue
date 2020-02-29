<template>
  <div id="application">
  <md-app md-waterfall md-mode="fixed-last">
    <md-app-toolbar class="md-large md-dense md-primary">
      <div class="md-toolbar-row">
        <div class="md-toolbar-section-start">

          <span class="md-title">Солянка детских аудиосказок</span>
        </div>

      </div>

      <div class="md-toolbar-row">
        <md-tabs md-sync-route class="md-primary">
          <md-tab id="tab-main" to="/" md-label="Главная" exact></md-tab>
          <md-tab v-if="this.$store.getters['user/isAuth']" id="tab-favorites" to="/favorites" md-label="Избранные"></md-tab>
        </md-tabs>
        <div class="md-toolbar-section-end">
          <user></user>
        </div>
      </div>


    </md-app-toolbar>

    <md-app-content>
        <alert v-if="this.$store.getters['alert/existAlert']" />
        <router-view></router-view>
    </md-app-content>
  </md-app>
  </div>
</template>

<script>

import Alert from './components/Alert'
import User from './components/User'

export default {
  name: 'App',
  components: {
    Alert,
    User
  },
  methods: {
    main() {
      this.$router.push('/');
    }
  },
  created() {
    if (this.$store.getters['user/isAuth']) {
        this.$store.dispatch('user/fetch');
    }
  }
}
</script>

<style>
#application {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
