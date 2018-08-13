<template lang="pug">
    #App
        navBar
        p(v-if="$store.state.isLoading") LODAING
        router-view
</template>

<script>
import navBar from '@/components/navBar'
export default {
    components: {
        navBar
    },
    mounted() {
        this.$store.dispatch('getOriData')
        setInterval(() => {
            this.$store.dispatch('getOriData')
            console.log('data updated')
        }, 60000)
    }
};
</script>

<style lang="scss" src="@/style/main.scss">
</style>
