<template>
  <div>

    <Navigation/>    
    <router-view></router-view>

  </div>
</template>

<script>

import Navigation from '@/components/blockchain/Navigation.vue'

export default {
  name: 'Blockchain',
  components: {
      Navigation
  }
}
</script>