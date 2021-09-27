<template>

    <div class="text-h3" flat>EDIT PHONE</div> 

    <q-page class="flex flex-center">
      <div class="row form q-pa-sm" style="max-width: 1500px">
        
        <div class="col" style="max-width: 500px">
          <q-img :src="phoneData.imageURL"></q-img>
        </div>
        <div class="col" style="max-width: 1000px">
          <q-form @submit="onSubmit" class="row justify-around q-gutter-sm">

            <div class="col" style="max-width: 400px">
              <q-input
                filled
                v-model="phoneData.modelName"
                label="Model"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the model']"
              />

              <q-input
                filled
                v-model="phoneData.imageURL"
                label="ImageURL"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the imageUrl']"
              />

              <q-input
                filled
                type="number"
                v-model="phoneData.price"
                label="Price"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type the price']"
              />

              <q-select
                standout="bg-teal text-white" 
                filled
                v-model="phoneData.brandId"
                :options="options"
                option-value="value"
                option-label="label"
                label="Brand" 
                emit-value
                map-options
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please select the brand']"
              />

              <div>
                <q-btn label="Update" type="submit" color="primary"/>
              </div>
            </div>
            <div class="col" style="max-width: 400px">
              <q-input
                filled
                v-model="phoneData.ram"
                label="RAM"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the RAM']"
              />

              <q-input
                filled
                v-model="phoneData.memory"
                label="Memory"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the Memory']"
              />

              <q-input
                filled
                v-model="phoneData.battery"
                label="Battery"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the Battery']"
              />

              <q-input
                filled
                v-model="phoneData.mainCamera"
                label="Main Camera"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the Main Camera']"
              />
            </div>

          </q-form>
        </div>

      </div>
    </q-page>

</template>


<script>
import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { getPhoneById } from 'src/api/api'
import { updatePhoneById } from 'src/api/api'
import { useRouter } from "vue-router";

export default {
  setup () {
    const router = useRouter();

    const $q = useQuasar()

    const phoneData = ref({
      modelName: "",
      imageURL: "",
      price: 0,
      brandId: 0,
      ram: "",
      battery: "",
      memory: "",
      mainCamera: ""
    })

    const id = router.currentRoute.value.query.id

    //function to get phone by id
    const getPhoneData = async () => {      
      getPhoneById(id).then((res) => {
        if(res.status === 200)
        {
          phoneData.value = res.data
          // console.log(res.data)
        }
      })
    }

    //function to add phones
    const updatePhone= async () => {
      const request = {
        "ModelName": phoneData.value.modelName, 
        "Price": phoneData.value.price, 
        "BrandId" : phoneData.value.brandId, 
        "ImageURL": phoneData.value.imageURL,
        "RAM": phoneData.value.ram,
        "Memory": phoneData.value.memory,
        "Battery": phoneData.value.battery,
        "MainCamera": phoneData.value.mainCamera,
        };
      
      updatePhoneById(request, id).then((res) => {
        if(res.status === 200)
        {
          console.log(res.data)
        }
      })

    }

    onMounted(() => {
      getPhoneData()
      console.log("Edit Phone page mounted")
    })

    
    
    return {
      phoneData,
      options: [
        {value: 1, label: 'Honor'}, 
        {value: 2, label: 'Cherry Mobile'}, 
        {value: 3, label: 'Infinix'}, 
        {value: 4, label: 'Realme'}
      ],

      onSubmit() {
        updatePhone()
        router.push({path: '/'})
      },

    }
  }
}
</script>

<style lang="sass" scoped>
.form
    margin: auto
    width: 100%
    max-width: 250px

.phoneImage
    max-width: 400px
    text-align: center
</style>
