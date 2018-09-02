<template>
  <div class="hello">

    <h1>D01</h1>
    <h3>{{ block.number }}</h3>

  </div>
</template>

<script>
export default {
  name: 'D01',
  props: {
    block: Object
  }  
}
</script>