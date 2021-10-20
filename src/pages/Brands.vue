<template>
    <div class="text-h3" flat>BRANDS</div> 

    <BrandList/>

</template>



<script>
import { defineComponent, onMounted } from 'vue';
import BrandList from '../components/BrandList.vue'

export default defineComponent({

  name: 'PageIndex',
  components : { BrandList }, 

  setup () {

    onMounted(() => {
      console.log('Brands page mounted')
    })

    return{  }
  }

})
</script>



<style>

</style>