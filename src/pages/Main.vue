<template>
    <div class="main">
        <input class="main__searh" v-model="searchText" placeholder="Введите для поиска"/>

        <div v-for="item in getList" :key="item.id">
            <story :source="item"></story>
        </div>
    </div>
</template>

<script>
    import Story from '../components/Story'

    export default {
        name: "Main",
        props: {
            isFavorite: {
                type: Boolean,
                default: false
            }
        },
        data: () => {
            return {
                searchText: ''
            }
        },
        components: {
            Story
        },
        methods: {

        },
        computed: {
            getList() {
                return this.$store.getters['object/getObjects'].filter( (item) => {
                    var isCompare = true;
                    if (this.isFavorite && this.$store.getters['user/isFetch']) {
                        isCompare = this.$store.getters['user/getUser'].favorites.indexOf(item.id) != -1;
                    }

                    if (this.searchText && isCompare) {
                        if (item.title) {
                            let regex = new RegExp(this.searchText, 'i');

                            isCompare = regex.test(item.title);
                        } else {
                            isCompare = false;
                        }

                    }

                    return isCompare
                });
            }
        },
        created() {
            // Запустим загрузку данных
            this.$store.dispatch('object/fetch')
        },
    }
</script>

<style scoped>
    .main {
        margin-top: 30px;
        text-align: left;
    }
    .main .main__searh {
        width: 100%;
        padding: 5px;
        font-size: 2em;
    }
</style>
