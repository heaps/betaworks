<template>
    <div>
        <h1 class="display-4">Cloud</h1>
        <p class="lead">Cloud computing is shared pools of configurable computer system resources and higher-level services that can be rapidly provisioned with minimal management effort. Cloud computing relies on sharing of resources to achieve coherence and economies of scale, similar to a public utility.</p>
        <Navigation/>
        <router-view></router-view>
    </div>

</template>

<script>

import Navigation from '@/components/cloud/Navigation.vue'

export default {
  name: 'Cloud',
  components: {
      Navigation
  }
}
</script>