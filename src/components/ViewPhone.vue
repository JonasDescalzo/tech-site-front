<template>
    <q-card class="detailsCard">
        <q-card-section>
            <q-img :src="props.phoneDetails.imageURL">
                <div class="absolute-bottom text-h6">
                    {{props.phoneDetails.modelName}}
                </div>
            </q-img>
        </q-card-section>

        <q-card-section class="q-pt-none">
            <div class="text-subtitle1">Price: {{ props.phoneDetails.price }} PHP</div>
            <p v-for="n in 4" :key="n">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.</p>
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