<template>
  <div class="backgroundImage">
    
    <!-- phone list -->
    <q-page class="flex flex-center">
      <div v-for="phone in phones" :key="phone">
        <SinglePhone :_phone="phone"/>   
      </div>
    </q-page>

  </div>
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
      console.log('Home Page')
    })

    //function to get all phones
    const getPhones = async () => {
      //const response = await getAllPhones()
      
      getAllPhones().then((res) => {
        if(res.status === 200)
        {
          phones.value = res.data;
        }
      })
    }

     getPhones()

    return{ 
      phones,
      showPhoneDetails
    }
  }
})
</script>

<style lang="sass" scoped>

.backgroundImage 
  background-image: url('https://images.unsplash.com/photo-1513611771808-7e8ab7f1dec6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80')
  height: 100%
  background-attachment: fixed
  background-position: center
  background-repeat: no-repeat
  background-size: cover


</style>
