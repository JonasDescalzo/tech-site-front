<template>
    <q-card class="detailsCard" style="width: 500px">
        <q-card-section>
            <q-img :src="props.phoneDetails.imageURL">
                <div class="absolute-bottom text-h6">
                    {{props.phoneDetails.modelName}}
                </div>
            </q-img>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-subtitle1">Price: {{ props.phoneDetails.price }} PHP</div>
            <div class="text-subtitle1">RAM: {{ props.phoneDetails.ram }}</div>
            <div class="text-subtitle1">Memory: {{ props.phoneDetails.memory }}</div>
            <div class="text-subtitle1">Battery: {{ props.phoneDetails.battery }}</div>
            <div class="text-subtitle1">Main Camera: {{ props.phoneDetails.mainCamera }}</div>
        </q-card-section>

        <q-card-actions align="right">
            <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
    </q-card>    
    
</template>

<script>
import { ref } from 'vue'

export default {

    props: ['phoneDetails'],

    setup (props) {
        const showPhoneDetails =  ref(false)

        return { showPhoneDetails, props, }
    }
}
</script>

<style lang="sass" scoped>

.detailsCard
    margin-left: 20px
    margin-right: 20px

</style>