<template>
  <q-page class="flex flex-center">
    <div v-for="phone in phones" :key="phone">
      <SinglePhone :phone="phone"/>   
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { getAllPhones } from 'src/api/api'
import { ref } from 'vue'
import SinglePhone from '../components/SinglePhone.vue'



export default defineComponent({
  name: 'PageIndex',
  components : { SinglePhone }, 
  setup () {
    const phones = ref([])

    //function to get all phones
    const getPhones = async () => {
      const response = await getAllPhones()
      
      getAllPhones().then((res) => {
        if(res.status === 200)
        {
          phones.value = res.data;
        }
      })
    }

    getPhones()

    return{ phones }
  }
})
</script>

<style lang="sass" scoped>
 
</style>
