<template>
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
            type="number"
            v-model="price"
            label="Price"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type the price'
            ]"
        />

         <q-input
            filled
            type="number"
            v-model="brand"
            label="Brand"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type the brand']"
        />

        <!-- <q-select 
          standout="bg-teal text-white" 
          v-model="brand" 
          :options="options" 
          label="Brand" 
        /> -->

        <!-- <q-select 
          standout="bg-teal text-white" 
          v-model="brand" 
          label="Brand" 
        /> -->
        

        <div>
            <q-btn label="Submit" type="submit" color="primary"/>
            <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
        </div>
        </q-form>

    </div>
    </q-page>
</template>


<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { addPhone } from 'src/api/api'
/* import { testPost } from 'src/api/api' */


export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const price = ref(null)
    const brand = ref()

    //function to add phones
    const addNewPhone = async () => {
      const request = {"ModelName": name.value, "Price": price.value, "BrandId" : brand.value};
      
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
      brand,
      options: ['Honor', 'Cherry Mobile', 'Infinix', 'Realme'
      ],

      onSubmit () {
        addNewPhone()
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
</style>

