<template>

  <div class="container">

    <div class="card-deck">  
      <Blocks
        v-for="item in blocks" :key="item.number" v-on:hashChanged="handleHashChange" v-on:minedBlock="handleMinedBlock"
        v-bind:block    = "item.number"
        v-bind:nonce    = "item.nonce"
        v-bind:data     = "item.data"
        v-bind:previous = "item.previous"
        v-bind:hash     = "item.hash"
        v-bind:item     = "item"
      />
    </div>

  </div>
  <!-- --------------------- END --------------------- -->

</template>


<script>

import Blocks from '@/components/blockchain/basics/Blocks.vue';

export default {
  name: 'Chain',
  components: {
      Blocks
  },  
  data: function() {
    return {
      blocks : [
        {
          number   : 1,
          nonce    : 11316,
          data     : '',
          previous : '0000000000000000000000000000000000000000000000000000000000000000',
          hash     : '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf'
        },
        {
          number   : 2,
          nonce    : 35230,
          data     : '',
          previous : '000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf',
          hash     : '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19'          
        },
        {
          number   : 3,
          nonce    : 12937,
          data     : '',
          previous : '000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19',
          hash     : '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf'
        },
        {
          number   : 4,
          nonce    : 35990,
          data     : '',
          previous : '0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf',
          hash     : '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83'
        },
        {
          number   : 5,
          nonce    : 56265,
          data     : '',
          previous : '0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83',
          hash     : '0000e4b9052fd8aae92a8afda42e2ea0f17972ea67cead67352e74dd6f7d217c'
        },

      ]
    };
  },
  methods : {
    updateMessage : function(){
      this.message.hash01 += 1;
    },
    handleHashChange : function(block){
      // console.log(block);
      if(block.number >= this.blocks.length) return;
      this.blocks[block.number].previous = block.previous;
      // console.log('new: ' + this.blocks[block.number].previous);
    },
    handleMinedBlock : function(block){
      // console.log(block);
      if(block.number >= this.blocks.length) return;      
      this.blocks[block.number].previous = block.previous;
      // console.log('new: ' + this.blocks[block.number].previous);
    }
  }    

};

</script>


