<template>
  <div class="hello">

    <h1>D02</h1>
    <h3>{{ block.number }}</h3>

    <button class="btn btn-primary" v-on:click="update()">Update Message</button><br><br>

  </div>
</template>

<script>
export default {
  name: 'D02',
  props: {
    block: Object
  },
  methods : {
    update : function(){
      this.block.number += 100;
    }
  }    
}

</script>