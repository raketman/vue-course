<template>
  <div id="application">
    <div class="row">
      <div class="col-sm-3 offset-sm-0">
        <a v-on:click="main" ><img src="./assets/circle-time.svg"> </a>
      </div>
      <div class="col-sm-3 offset-sm-6">
        <user></user>
      </div>
    </div>
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
