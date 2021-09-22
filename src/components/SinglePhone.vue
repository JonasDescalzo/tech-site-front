<template>
    <q-card class="my-card">
      <!-- <img src="https://cdn.quasar.dev/img/mountains.jpg"> -->
      <img src="https://i.gadgets360cdn.com/products/large/1536154425_635_honor_8x.jpg?downsize=*:180">
      

      <q-card-section>
        <div class="text-h6">{{ phone.modelName }}</div>
        <div class="text-subtitle2">{{ phone.price }}</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        {{ lorem }}
      </q-card-section>
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
</style>