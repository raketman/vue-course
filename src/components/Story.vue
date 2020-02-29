<template>
  <div class="story">
    <h3 class="story__title" v-on:click="goToLink">{{ source.title }}</h3>
    <div>
      <span class="story__detail" v-if="source.author">автор - "{{ source.author }}" </span>
      <span class="story__detail" v-if="source.duration">длительность - "{{ source.duration }}" </span>
    </div>
    <div class="story__favorite">
      <button class="btn btn-small" v-bind:class="{ 'btn-info' : isCanAddFavorite, 'btn-danger': isExistInFavorite}" v-on:click="favorite"> {{ favoriteButtonText }}</button>
    </div>
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
      goToLink() {
          window.open(this.source.url);
      },
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
.story {
    text-align: left;
    border-bottom: lightgray 1px solid;
    padding-bottom: 10px;
    position: relative;
}
  .story .story__title {
      cursor: pointer;
      margin-right: 200px;
  }
  .story .story__detail {
      font-size: 0.8em;
      color: darkslategray;
  }

.story .story__favorite {
    text-align: right;
    right: 0px;
    top:0px;
    width: 200px;
    position: absolute;
}
</style>
