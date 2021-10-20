<template>

     <!-- brand list -->
    <q-page class="flex flex-center" style="min-height: 0px" >
      <div v-for="brand in brands" :key="brand">
        <SingleBrand :_brand="brand"/>   
      </div>
    </q-page>

</template>


<script>
import { defineComponent, onMounted } from 'vue';
import { getBrands } from 'src/api/api'
import { ref } from 'vue'
import SingleBrand from '../components/SingleBrand.vue'

export default defineComponent({
  name: 'PageIndex',
  components : { SingleBrand }, 
  setup () {
    const brands = ref([])
    const showPhoneDetails = ref(false)

    onMounted(() => {
      console.log('BrandList component mounted')

      //call the function to get all brands
      getAllBrands()
    })

    //function to get all phones
    const getAllBrands = async () => {
        getBrands().then((res) => {
            if(res.status === 200){
                brands.value = res.data;
            }
        })
    }

    return{ 
      brands,
      showPhoneDetails
    }
  }
})
</script>

<style lang="sass" scoped>


</style>