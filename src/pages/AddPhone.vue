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
            v-model="age"
            label="Price"
            lazy-rules
            :rules="[
            val => val !== null && val !== '' || 'Please type the price'
            ]"
        />

         <q-input
            filled
            v-model="brand"
            label="Brand"
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Please type the brand']"
        />
        

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

export default {
  setup () {
    const $q = useQuasar()

    const name = ref(null)
    const age = ref(null)
    const brand = ref(null)

    return {
      name,
      age,
      brand,

      onSubmit () {
        if (brand.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

      onReset () {
        name.value = null
        age.value = null
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

