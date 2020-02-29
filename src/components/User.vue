<template>
  <div class="row" style="position: fixed;top: 10px;">
    <div class="col-sm-9 offset-sm-0">
        <img src="../../../ass"></img>
        <span>{{ getUser.name }} ,<a v-on:click="logout">Выйти</a></span>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'User',
  methods: {
    ...mapActions('user', ['logout'])
  },
  computed: {
    ...mapGetters('user', ['isAuth', 'getUser'])
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
