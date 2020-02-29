<template>
  <div class="hello">
    <h1>{{ source.title }}</h1>
    <p>
      {{ source.author }}, {{ source.duration }}
      <a v-bind:href="source.url" target="_blank">Перейти</a><br>

      <button class="btn" v-bind:class="{ 'btn-info' : isCanAddFavorite, 'btn-danger': isExistInFavorite}" v-on:click="favorite"> {{ favoriteButtonText }}</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
      source: {
          type: Object,
          required: true
      },
  },
  methods: {
      favorite: function() {
          if (!this.$store.getters['user/isAuth']) {
              this.$router.push('/login');
              return;
          }

          this.$store.dispatch('user/favorite', this.source.id);
      }
  },
  computed: {
      isExistInFavorite: function() {
          return this.$store.getters['user/isFetch'] && this.$store.getters['user/getUser'].favorites.indexOf(this.source.id) !== -1;
      },
      isCanAddFavorite: function(){
          return !this.isExistInFavorite && this.$store.getters['user/isAuth'];
      },
      favoriteButtonText: function() {
          return this.isExistInFavorite ? 'убрать из избранного' : 'добавить избранное';
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
