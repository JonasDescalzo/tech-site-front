<template>
    
    <!-- phone list -->
    <q-page class="flex flex-center">
      <div v-for="phone in phones" :key="phone">
        <SinglePhone :_phone="phone"/>   
      </div>
    </q-page>

</template>


<script>
import { defineComponent, onMounted } from 'vue';
import { getAllPhones } from 'src/api/api'
import { ref } from 'vue'
import SinglePhone from '../components/SinglePhone.vue'

export default defineComponent({
  name: 'PageIndex',
  components : { SinglePhone }, 
  setup () {
    const phones = ref([])
    const showPhoneDetails = ref(false)

    onMounted(() => {
      console.log('PhoneList component mounted')

      //call the function to get all phones
      getPhones()
    })

    //function to get all phones
    const getPhones = async () => {
        getAllPhones().then((res) => {
            if(res.status === 200){
                phones.value = res.data;
            }

            // console.log(res)
        })
    }

    

    return{ 
      phones,
      showPhoneDetails
    }
  }
})
</script>


<style lang="sass" scoped>

</style>
