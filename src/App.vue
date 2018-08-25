<template>
  <div id="app">

    <Navigation/>
    <div class="container" style="margin-top:20px">    
      <router-view/>
    </div>

  </div>
</template>

<script>
    import Navigation from './components/Navigation.vue'

    export default {
     name: 'app',
     components:{
        Navigation
     }
    } 
</script>
