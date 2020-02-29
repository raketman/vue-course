<template>
    <div>
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
        components: {
            Story
        },
        methods: {

        },
        computed: {
            getList() {
                return this.$store.getters['object/getObjects'].filter( (item) => {
                    if (!this.isFavorite || !this.$store.getters['user/isFetch']) {
                        return true;
                    }

                    return this.$store.getters['user/getUser'].favorites.indexOf(item.id) != -1;
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

</style>
