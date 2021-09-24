<template>
  <!-- <div class="backgroundImage"> -->
    <div class="text-h3" flat>ADD PHONE</div>  

    <q-page class="flex flex-center">
      <div class="form q-pa-sm" style="max-width: 400px">

        <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-sm"
        >

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
        </q-form>

        

      </div>
    </q-page>

  <!-- </div> -->
</template>


<script>
import { useQuasar } from 'quasar'
import { ref, onMounted } from 'vue'
import { addPhone } from 'src/api/api'
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

    onMounted(() => {
        brand.value = null
    })

    //function to add phones
    const addNewPhone = async () => {
      const request = {"ModelName": name.value, "Price": price.value, "BrandId" : brand.value, "ImageURL": name.value};
      
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
      options: [
        {value: 1, label: 'Honor'}, 
        {value: 2, label: 'Cherry Mobile'}, 
        {value: 3, label: 'Infinix'}, 
        {value: 4, label: 'Realme'}
      ],

      onSubmit() {
        addNewPhone()
        router.push({path: '/'})
      },



      onReset () {
        name.value = null
        price.value = null
        brand.value = null
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.form
  margin: auto
  width: 100%
  max-width: 250px

// .backgroundImage 
//   background-image: url('https://images.unsplash.com/photo-1585060544812-6b45742d762f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2081&q=80')
//   height: 100%
//   background-attachment: fixed
//   background-position: center
//   background-repeat: no-repeat
//   background-size: cover

</style>
