<template lang="pug">
    transition(name="modal")
        .map-mask(v-show="isMapOpen")
            .mapWrapper
                .mapContainer
                    .mapHeader
                        .mapCloseBtn(@click="CLOSE_MAP") x
                        .mapTitleBody 
                            .title {{ selectedStop.sna }}
                            .title_en {{ selectedStop.snaen }} 
                        .mapDistrictBody 
                            .district {{ selectedStop.sarea }}
                                small.district_en {{ selectedStop.sareaen }}
                    .googleMap#bikeMap 
            .mapCancel(@click.stop="CLOSE_MAP")
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    name: "googleMap",
    data() {
        return {
            markerCoordinates: {
                latitude: 25.0408578889,
                longitude: 121.567904444
            }
        }
    },
    watch: {
        selectedStop() {
            this.updateMap()
        }
    },
    computed: {
        ...mapState(['selectedStop', 'isMapOpen'])
    },
    methods: {
        ...mapMutations(['CLOSE_MAP']),
        updateMap() {
            const el = document.getElementById('bikeMap')
            const options = {
                zoom: 17,
                center: new google.maps.LatLng(this.selectedStop.lat ? this.selectedStop.lat : 25.0408578889, this.selectedStop.lng ? this.selectedStop.lng : 121.567904444)
            }
            const map = new google.maps.Map(el, options)
            const position = new google.maps.LatLng(this.selectedStop.lat ? this.selectedStop.lat : 25.0408578889, this.selectedStop.lng ? this.selectedStop.lng : 121.567904444)
            const marker = new google.maps.Marker({
                position,
                map
            })
        }

    },
    mounted() {
        this.updateMap()
    }
}
</script>

<style>
</style>
