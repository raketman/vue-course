<template>
    <modal :close="close">
        <div slot="body" v-html="this.$store.getters['alert/getMessage']">

        </div>
    </modal>
</template>

<script>
    import modal from './ui/Modal'

    export default {
        components: {
            modal
        },
        methods: {
            close() {
                this.$store.dispatch('alert/flush');
            }
        }
    }
</script>

<style scoped>
</style>
