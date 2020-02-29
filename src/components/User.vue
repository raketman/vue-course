<template>
  <div>
    <div v-if="this.$store.getters['user/isFetch']">
        <a v-on:click="favorite" >{{ favoriteText }}</a>
        <span>{{ getUser.name }} ,<a v-on:click="logout">Выйти</a></span>
    </div>
    <div  v-if="!this.$store.getters['user/isFetch']">
      <a v-on:click="loginstart" >Войти</a>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'User',
  methods: {
    ...mapActions('user', ['logout']),
    favorite() {
      this.$router.push('/favorites');
    },
    loginstart() {
      this.$router.push('/login');
    }
  },
  computed: {
    ...mapGetters('user', ['isAuth', 'getUser']),
    favoriteText() {
      return 'Избранные';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
