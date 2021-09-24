<template>
  <router-view />
</template>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
})
</script>

<style lang="sass">

.text-h3 
  position:fixed
  top:0
  width:100%
  z-index:100
  text-align: center
  margin-top: 20px
  
</style>
