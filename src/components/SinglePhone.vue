<template>

  <q-dialog v-model="card">
    <DeletePhoneDialog :phoneDetails="props._phone"/> 
  </q-dialog>

  <!-- phone card -->
  <q-card class="my-card ">

    <!-- image, name, price -->
    <div class="card-body">
      <img class="phone-image" :src="_phone.imageURL" >

      <q-card-section class="card-section">
        <div class="text-h6">{{ _phone.modelName }}</div>
        <div class="text-subtitle1">Price: {{ _phone.price }} PHP</div>
        <div class="text-subtitle2" flat>RAM: </div>  
        <div class="text-subtitle2" flat>Memory: </div>  
        
      </q-card-section>
      
    </div>
    
    <!-- actions -->
    <q-card-actions class="flex flex-center">
      <q-btn flat>
        <q-icon class="icon" name="visibility"/>View
      </q-btn>

      <q-btn flat>
        <q-icon class="icon" name="mode"/>Edit
      </q-btn>

      <q-btn flat @click="card = true">
        <q-icon class="icon" name="delete"/>
        <q-tooltip class="text-body2" :offset="[10, 10]">
          Delete Phone
        </q-tooltip>
      </q-btn>
    </q-card-actions>

  </q-card>
</template>

<script>
import DeletePhoneDialog from '../components/DeletePhoneDialog.vue'
import { ref } from 'vue'

export default {
  props: ['_phone'],
  components : { DeletePhoneDialog }, 
  setup (props) {
    const card = ref(false)

    return {
      card,
      props,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    }
  }
}
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
  margin: 20px

.icon
  color: gray
  margin: 0 5px 0 0

.card-body:hover
  opacity: 85%

.phone-image
  display: block
  margin-left: auto
  margin-right: auto
  max-width: 240px
  max-height: 180px

.card-section
  padding: 16px 16px 0


</style>