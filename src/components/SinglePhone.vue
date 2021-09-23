<template>
    <q-card class="my-card ">

      <!-- image, name, price -->
      <div class="card-body">
        <img class="phone-image" :src="phone.imageURL" >

        <q-card-section class="card-section">
          <div class="text-h6">{{ phone.modelName }}</div>
          <div class="text-subtitle1">Price: {{ phone.price }} PHP</div>
          <div class="text-subtitle2" flat>RAM: </div>  
          <div class="text-subtitle2" flat>Memory: </div>  
          
        </q-card-section>
        
      </div>
      
      <!-- actions -->
      <q-card-actions>
        <q-btn flat>
          <q-icon class="icon" name="visibility"/>View
        </q-btn>

        <q-btn flat>
          <q-icon class="icon" name="delete"/>Delete
        </q-btn>
      </q-card-actions>

    </q-card>
</template>

<script>

export default {
  props: ['phone'],
  setup () {
    return {
       lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
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