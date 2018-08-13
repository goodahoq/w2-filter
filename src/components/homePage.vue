<template lang="pug">
    #homePage 
        .homeContainer.container
            filterPannel(:is-open = "showMobileMenu")
            .mobileMenuBtn(@click="updateMobileMenu" :class=`{ isOpen : showMobileMenu }`)
                i.fas(:class=`showMobileMenu ? "fa-times" : "fa-bars" `)
            map-modal
            .bikeCard-container.row
                p.empty_text(v-if="filteredData.length == 0") 嘿～沒有腳踏車想讓你騎喔！
                .filterTagContainer.col-md-12(v-if="filteredData.length != 0")
                    .filterDefault(v-if="selectedTags.length == 0") 你可以選擇地區！
                    .filterTag(v-else v-for="tag in selectedTags" @click="DELETE_TAG(tag)")
                        .tagBody 
                            .tagTitle {{ tag.name_zh }}
                                span.tagTitle_en {{ tag.name_en}}
                            .deleteTag
                                i.fas.fa-times
                bikeCard.col-md-6(
                    v-for="bike in filteredData"
                    :key = 'bike.sno'
                    :bike = 'bike'
                )   
                pagination(v-if="filteredData.length != 0")
</template>

<script>
import bikeCard from '@/components/bikeCard'
import filterPannel from '@/components/filterPannel'
import pagination from '@/components/pagination'
import mapModal from '@/components/mapModal'
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: "homePage",
    components: {
        bikeCard, filterPannel, pagination, mapModal
    },
    data() {
        return {
            showMobileMenu: false,
        }
    },
    methods: {
        ...mapMutations([
            'DELETE_TAG'
        ]),
        updateMobileMenu() {
            this.showMobileMenu = !this.showMobileMenu
        }
    },
    computed: {
        ...mapGetters(['filteredData', 'selectedTags'])
    }
}
</script>

<style lang="scss">
</style>
