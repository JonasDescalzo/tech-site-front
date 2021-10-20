<template>

  <!-- brand card -->
  <q-card class="my-card ">

    <!-- image, name -->
    <div class="card-body">

      <img class="brand-image" src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-section class="card-section" >
        <div class="text-h6" >{{ _brand.name }}</div>
        
      </q-card-section>
      
    </div>
    
  </q-card>

</template>


<script>

    export default {

    props: ['_brand'],

    setup (props) {

        return { props }
    }

    }

</script>


<style lang="sass" scoped>

.my-card
  width: 100%
  max-width: 250px
  margin: 20px

.flex-center
    align-items: top

.icon
  color: gray
  margin: 0 5px 0 0

.card-body:hover
  opacity: 85%

.brand-image
  display: block
  margin-left: auto
  margin-right: auto
  max-width: 240px
  max-height: 180px

.card-section
  padding: 16px 16px 0

</style>