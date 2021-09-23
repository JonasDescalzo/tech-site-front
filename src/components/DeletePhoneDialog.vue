<template>
    <q-card class="dialog-card">
    <q-img :src="props.phoneDetails.imageURL" />

    <q-card-section class="card-section">
        <q-btn
            fab
            v-close-popup
            icon="delete"
            class="delete-button absolute"
            style="top: 0; right: 12px; transform: translateY(-50%);"
            @click="onSubmit"      
            >
            <q-tooltip class="tooltip text-white text-body2" :offset="[10, 10]">
                Delete Phone
            </q-tooltip>
        </q-btn>

        <div class="row no-wrap items-center">
        <div class="col text-h6 ellipsis">DELETE "{{props.phoneDetails.modelName}}" ?</div>
        </div>

    </q-card-section>

    <!-- RAM and Memory -->
    <q-card-section class="q-pt-none row">
        <div class="text-subtitle1 col-6">
            RAM: 
        </div>
        <div class="text-subtitle1 col-6">
            Memory: 
        </div>
    </q-card-section>

    <q-separator />

    <q-card-actions align="right">
        <q-btn v-close-popup flat color="primary" label="Cancel" />
    </q-card-actions>
    </q-card>
</template>

<script>
import { ref } from 'vue'
import { deletePhoneById } from 'src/api/api'
import { useRouter } from "vue-router";

export default {
    props: ['phoneDetails'],
    setup (props) {
        const router = useRouter();
        //function to delete a phone
        const deletePhone = async () => {
        const request = props.phoneDetails.id;
        
        deletePhoneById(request).then((res) => {
            if(res.status === 200)
            {
            console.log(res.data)
            }
        })
        }  

        return { 
        onSubmit(){
            deletePhone()
            router.go()
        },   
        card: ref(false),
        props,
        }
    }
}
</script>

<style lang="sass" scoped>
.card-section
    padding: 16px 16px 0

.dialog-card
    width: 500px
    border-style: groove
    border-color: #009688

.delete-button
    background-color: crimson
    color: white

</style>