<template lang="pug">
    #navBar
        .container 
            h2 YouBike
            .serachBar
                input(
                    type="text"
                    v-model="keyword"
                    @compositionstart = "composition($event)"
                    @compositionupdate = "composition($event)"
                    @compositionend = "composition($event)"
                )
                span.searchIcon
                    i.fas(
                        :class=`searchKeyword == '' ? 'fa-search' : 'fa-times'`
                        @click='clearKeyword'
                    )
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "navBar",
    computed: {
        ...mapState(['searchKeyword']),
        keyword: {
            get() {
                return this.searchKeyword
            },
            set(newVal) {
                this.$store.commit('UPDATE_SEARCH_KEYWORD', newVal)
            }
        }
    },
    methods: {
        composition(e) {
            // console.log(e)
            this.$store.commit('UPDATE_SEARCH_KEYWORD', e.data)
        },
        clearKeyword() {
            if (this.searchKeyword != '') {
                this.$store.commit('CLEAR_SEARCH_KEYWORD')
            }
        }
    },
}
</script>

<style lang="scss">
</style>
