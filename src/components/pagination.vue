<template lang="pug">
    #pagination 
        ul  
            li(
                @click="updatePage(1)"
                :class=`{ active : pageData.currentPage == 1 }`)
                a 1
            li(v-if="pageData.currentPage >= 5 && pageData.totalPage > 8")
                a 
                    i.fas.fa-ellipsis-h
            li(
                v-for="i in pageData.totalPage"
                v-if="(i != 1) && (i != pageData.totalPage) && ((pageData.totalPage > 8 && ( pageData.currentPage - i <= 2 && i -  pageData.currentPage <= 2)) || ( i <= 6 &&  pageData.currentPage <=4 ) || ( pageData.totalPage - i <= 5 && pageData.totalPage -  pageData.currentPage <= 3 ))"
                @click="updatePage(i)"
                :class=`{ active : pageData.currentPage == i }`)
                a {{ i }}
            li(v-if="pageData.totalPage - pageData.currentPage > 3 && pageData.totalPage >= 8")
                a 
                    i.fas.fa-ellipsis-h
            li(
                v-if="pageData.totalPage !== 1"
                @click="updatePage(pageData.totalPage)"
                :class=`{ active : pageData.currentPage == pageData.totalPage }`)
                a {{pageData.totalPage}}
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: "pagination",
    computed: {
        ...mapState(['pageData'])
    },
    methods: {
        updatePage(num) {
            this.$store.commit('CHANGE_PAGE', num)
        }
    }
}
</script>

<style>
</style>
