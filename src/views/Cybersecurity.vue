<template>
  <div>

    <h1 class="display-4">Cybersecurity</h1>
    <p class="lead">Cybersecurity is the protection of computer systems from theft or damage to their hardware, software or electronic data, as well as from disruption or misdirection of the services they provide.</p>
    <Navigation/>
    <router-view></router-view>

  </div>
</template>

<script>

import Navigation from '@/components/cybersecurity/Navigation.vue'

export default {
  name: 'Cybersecurity',
  components: {
      Navigation
  }
}
</script>