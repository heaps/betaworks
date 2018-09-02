<template>
  <div class="hello">

    <h1>D03</h1>
    <h3>{{ block.number }}</h3>
    
  </div>
</template>

<script>
export default {
  name: 'D03',
  props: {
    block: Object
  }  
}
</script>