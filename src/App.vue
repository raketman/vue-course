<template>
  <div id="application">
    <user v-if="this.$store.getters['user/isFetch']"></user>
    <div class="jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-sm-10 offset-sm-1">
            <alert v-if="this.$store.getters['alert/existAlert']" />
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>

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
  margin-top: 60px;
}
</style>
