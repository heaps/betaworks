<template>
  <div>


    <div class="card">
      <div class="card-header">
        {{ title }}
      </div>
      <div class="card-body">

        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" v-bind:src="url" allowfullscreen></iframe>
        </div>

        <p class="card-text"> {{ description }} </p>

      </div>
    </div>


  </div>
</template>

<script>

export default {

  name: 'Video',
  props: {
    title       : String,
    url         : String,
    description : String    
  },    
  methods : {
  },    
  data: function(){
    return {};  
  }

};
</script>