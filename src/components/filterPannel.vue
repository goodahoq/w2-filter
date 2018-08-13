<template lang="pug">
    .filterPannel(:class=`{ isOpen:isOpen }`)
        .filterContainer
            .areaListContainer
                .areaTitle 地區選擇
                    span.areaTotal 共有 #[span.totalNum {{ totalLength }}] 站點
                        
                .areaBody
                    .areaList(v-for="area in areaList")
                        label(@click.stop="UPDATE_FILTER_TAGS(area)")
                            i.far(:class='area.isSelected ? "fa-check-circle" : "fa-circle"')
                            span.eachAreaTitle {{area.name_zh}}
                            i.eachAreaCounts {{area.length}}
                            input(@click.stop='',type="checkbox" v-model="area.isSelected")
            .statusContainer
                .statusTitle 狀態
                .statusBody
                    .statusList
                        label
                            i.far(:class='setRentable ? "fa-check-circle" : "fa-circle"')
                            span 可租借
                            input(type='checkbox' v-model='setRentable')
                    .statusList
                        label
                            i.far(:class='setReturnable ? "fa-check-circle" : "fa-circle"')
                            span 可歸還
                            input(type='checkbox' v-model='setReturnable')
            .clearAllTagsContainer(:class=`{ disable : selectedTags.length == 0 }` @click="CLEAR_ALL_TAGS")
                a.clearTags 取消篩選
</template> 

<script>
import { mapGetters, mapState, mapMutations } from 'vuex'
export default {
    name: 'filterPannel',
    props: {
        isOpen: {
            type: Boolean, required: true
        }
    },
    computed: {
        ...mapState([
            'areaList',
            'rentable',
            'returnable',
            'totalLength'
        ]),
        ...mapGetters([
            'selectedTags'
        ]),
        selectedList() {
            return this.areaList.filter(area => area.isSelected)
        },
        setRentable: {
            get() {
                return this.rentable
            },
            set(newVal) {
                this.UPDATE_RENTABLE()
            }
        },
        setReturnable: {
            get() {
                return this.returnable
            },
            set(newVal) {
                this.UPDATE_RETURNBLE()
            }
        }
    },
    methods: {
        ...mapMutations([
            'UPDATE_RENTABLE',
            'UPDATE_RETURNBLE',
            'UPDATE_FILTER_TAGS',
            'CLEAR_ALL_TAGS'
        ]),
    },
}
</script>

<style>
</style>
