<template>
  <!-- <div class="backgroundImage"> -->
    <div class="text-h3" flat>ADD PHONE</div>  

    <q-page class="flex flex-center">
      <div class="row form q-pa-sm" style="max-width: 1500px">
        
        <div class="col" style="max-width: 500px">
          <q-img :src="imageUrl"></q-img>
        </div>
        <div class="col" style="max-width: 1000px">
          <q-form @submit="onSubmit" @reset="onReset" class="row justify-around q-gutter-sm">

            <div class="col" style="max-width: 400px">
              <q-input
                filled
                v-model="name"
                label="Model"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the model']"
              />

              <q-input
                filled
                v-model="imageUrl"
                label="ImageURL"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the imageUrl']"
              />

              <q-input
                filled
                type="number"
                v-model="price"
                label="Price"
                lazy-rules
                :rules="[
                val => val !== null && val !== '' || 'Please type the price']"
              />

              <q-select
                standout="bg-teal text-white" 
                filled
                v-model="brand"
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
                <q-btn label="Submit" type="submit" color="primary"/>
                <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
              </div>
            </div>
            <div class="col" style="max-width: 400px">
              <q-input
                filled
                v-model="ram"
                label="RAM"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the RAM']"
              />

              <q-input
                filled
                v-model="memory"
                label="Memory"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the Memory']"
              />

              <q-input
                filled
                v-model="battery"
                label="Battery"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the Battery']"
              />

              <q-input
                filled
                v-model="mainCamera"
                label="Main Camera"
                lazy-rules
                :rules="[ val => val && val.length > 0 || 'Please type the Main Camera']"
              />
            </div>

          </q-form>
        </div>

      </div>
    </q-page>

  <!-- </div> -->
</template>


<script>
import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { addPhone, getBrands } from 'src/api/api'
import { useRouter } from "vue-router";

export default {
  name: 'addPhone',
  setup () {
    const router = useRouter();
    const $q = useQuasar()
    const name = ref(null)
    const imageUrl = ref(null)
    const price = ref(null)
    const brand = ref()
    const ram = ref()
    const memory = ref()
    const battery = ref()
    const mainCamera = ref()
    const options = ref([])

    onMounted(() => {
        brand.value = null
        console.log("Add Phone page mounted")
        getBrandList()
        
    })

    //functions to get list of brands
    const getBrandList = async () => {
      getBrands().then((res) => {
        if(res.status === 200)
        {        
          res.data.forEach(element => {
            options.value.push({value: element.id, label: element.name})
          });

          console.log("getBrands success")
        }
      })
    }

    //function to add phones
    const addNewPhone = async () => {
      const request = {
        "ModelName": name.value, 
        "Price": price.value, 
        "BrandId" : brand.value, 
        "ImageURL": imageUrl.value,
        "RAM": ram.value,
        "Memory": memory.value,
        "Battery": battery.value,
        "MainCamera": mainCamera.value,
        };
      
      addPhone(request).then((res) => {
        if(res.status === 200)
        {
          console.log(res.data)
        }
      })

    }
    
    return {
      name,
      price,
      imageUrl,
      brand,
      ram,
      memory,
      battery,
      mainCamera,
      options,

      onSubmit() {
        addNewPhone()
        router.push({path: '/'})
      },



      onReset () {
        name.value = null
        imageUrl.value = null
        price.value = null
        brand.value = null
        ram.value = null
        memory.value = null
        battery.value = null
        mainCamera.value = null
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  margin: auto
  width: 100%

</style>
