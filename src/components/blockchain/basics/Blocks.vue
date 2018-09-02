<template>

  <!-- card start -->
  <div class="card mb-3" style="min-width: 12rem;max-width: 12rem;">

    <div class="card-body" v-bind:style="{ backgroundColor: color}">

    <!-- form start -->
    <form class="form-horizontal">
        <div class="form-group">

            <!-- block and nonce -->
            <label class="control-label">Block:</label>
            <input type="text" disabled v-model="block" v-on:input="processInputData" class="form-control"><br>

            <label class="control-label">Nonce:</label>
            <input type="text" v-model="nonce" v-on:input="processInputData" class="form-control"><br>
                          

            <!-- block data -->
            <label class="control-label">Data:</label>
            <div>
                <textarea rows="4" v-model="data" v-on:input="processInputData" class="form-control"></textarea>
            </div><br>

            <!-- block hash -->
            <label class="control-label">Previous:</label>
            <textarea rows="4" v-model="previous" v-on:input="processInputData" class="form-control" style="font-size: 0.75rem;" ></textarea><br>

            <label class="control-label">Hash:</label>
            <textarea rows="4" v-model="hash" class="form-control" style="font-size: 0.75rem;" ></textarea><br>

            <button class="btn btn-primary ladda-button"  data-style="expand-right" v-bind:id="'mineButton-' + block" v-on:click="mineBlock">
              <span class="ladda-label">Mine</span>
            </button><br>

            <!-- show if hash pattern not found -->
            <div id="demo">
              <transition name="fade">
                <p v-if="show" class="text-primary">{{miningMessage}}</p>
              </transition>
            </div>


        </div>
    </form>
    <!-- form end -->


    </div>
  </div>
  <!-- card end -->


</template>


<script>

export default {
  name: 'Chain',
  props: {
    previous   : String,
    item       : Object
  },  
  data: function() {
    return {
      block    : this.item.number,
      nonce    : this.item.nonce,
      data     : this.item.data,
      hash     : this.item.hash,
      color    : '#E0F0D9',
      show     : false,
      miningSuccess: true,
      miningMessage: '',
      l            : null
    };
  },
  methods : {
    hashBlock : function(){
        var block = this.block.toString();
        var nonce = this.nonce.toString();
        var data  = this.data;
        var previous = this.previous;
        var text  = block + nonce + data + previous;
        var hash  = CryptoJS.SHA256(text).toString();
        this.hash = hash;
        return hash;
    },
    setColor : function(hash){
        var start = hash.slice(0,3);
        if(start === '000'){
            this.color = '#E0F0D9';
        }
        else{
            this.color = '#F9DCDD';
        }
    },
    processInputData : function(){
        var hash = this.hashBlock();
        this.setColor(hash);
        this.$emit('hashChanged', {"previous":hash,"number":this.block});
    },
    mineBlock : function(){

        this.show          = true;
        this.miningMessage = 'Mining Block';
        this.miningSuccess = true;        
        this.l.toggle();

        setTimeout(function(){

            var hash  = '';
            var start = '';
            var text  = '';
            var limit = 1000000;

            for (var i=0; i<=limit; i++) {
                text  = this.block.toString() + i.toString() + this.data + this.previous;
                hash  = CryptoJS.SHA256(text).toString();
                start = hash.slice(0,4);

                // hash pattern found
                if(start === '0000'){
                    this.color = '#E0F0D9';
                    this.nonce = i;
                    this.hash = hash;
                    this.l.toggle();
                    this.$emit('minedBlock', {"previous":hash,"number":this.block});

                    // set success message
                    this.miningMessage = 'Mining Success!';
                    setTimeout(() => this.show = false, 3000);
                    return;
                }
                // not found                
                else if (i === limit){
                    this.miningMessage = 'Mining Failed!';
                    this.miningSuccess = false;
                    this.l.toggle();                    
                    setTimeout(() => this.show = false, 3000);
                    return;
                }
            }        


        }.bind(this),250);
    }
  },
  mounted: function () {
    this.processInputData();
    var mineButton = 'mineButton-' + this.block;
    this.l = Ladda.create(document.getElementById(mineButton));
  },
  watch: {
    // whenever previous changes, this function will run
    previous: function () {
      this.processInputData();
    }
  }  


};

</script>

