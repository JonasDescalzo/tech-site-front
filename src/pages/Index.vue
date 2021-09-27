<template>
  <div class="backgroundImage">

    <PhoneList />   

  </div>
</template>

<script>
import { defineComponent, onMounted } from 'vue';
import PhoneList from '../components/PhoneList.vue'

export default defineComponent({
  name: 'PageIndex',
  components : { PhoneList }, 
  setup () {

    onMounted(() => {
      console.log('Index page mounted')
    })

    return{  }
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
