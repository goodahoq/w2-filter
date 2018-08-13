<template lang="pug">
    .bikeCard
        article.cardContainer
            .disableMask(v-if="bike.sna == 0")
            .titleBody
                .title {{ bike.sna }}
                .title_en {{ bike.snaen }}
            .districtBody 
                .district {{ bike.sarea }}
                    small.district_en {{ bike.sareaen }}
            .addressBody
                .address {{ bike.ar }}
                .address_en {{ bike.aren }}
            .statusBody
                .leftNum
                    .leftTitle 可租借
                    span.num {{ bike.sbi }}
                .vacancyNum
                    .vacancyTitle 可歸還
                    span.num {{ bike.bemp }}
</template>

<script>
export default {
    name: "bikeCard",
    props: {
        bike: {
            type: Object, required: true
        }
    },
}
</script>

<style>
</style>
