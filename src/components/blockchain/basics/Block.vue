<template>
  <div class="hello">

    <!-- --------------------- START --------------------- -->
    <div class="container">

          <!-- card start -->
          <div class="card mb-3">
            <h5 class="card-header">Blockchain Basics: Standalone Block</h5>
            <div class="card-body" v-bind:style="{ backgroundColor: color}">

            <!-- form start -->
            <form class="form-horizontal">
                <div class="form-group">

                    <!-- block and nonce labels -->
                    <div class="form-row">
                        <div class="col">
                          <label class="control-label">Block:</label>
                        </div>
                        <div class="col">
                          <label class="control-label">Nonce:</label>
                        </div>                        
                    </div>

                    <!-- block and nonce numbers -->
                    <div class="form-row">
                        <div class="col">
                          <input type="text" disabled v-model="block" v-on:input="processInputData" class="form-control">
                        </div>
                        <div class="col">
                          <input id="hash" type="text" v-model="nonce" v-on:input="processInputData" class="form-control">
                        </div>                        
                    </div><br>

                    <!-- block data -->
                    <label class="control-label">Data:</label>
                    <div>
                        <textarea rows="10" v-model="data" v-on:input="processInputData" class="form-control"></textarea>
                    </div><br>

                    <!-- block hash -->
                    <label class="control-label">Hash:</label>
                    <div class="form-row">
                        <div class="col">
                          <input id="hash" type="text" disabled v-model="hash" class="form-control">
                        </div>
                        <div class="col-auto">
                          <button class="btn btn-primary ladda-button"  data-style="expand-right" id="mineButton" v-on:click="mineBlock">
                            <span class="ladda-label">Mine</span>
                          </button>
                        </div>                        
                    </div><br>

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

        </div>




    </div>
    <!-- --------------------- END --------------------- -->


  </div>
</template>


<script>

export default {
  name: 'Block',
  data: function() {
    return {
      block: '1',
      nonce: '72608',
      data : '',
      hash : '',
      color: '#E0F0D9',
      mineCounter  : 0,
      show         : false,
      miningSuccess: true,
      miningMessage: '',
      l            : null
    };
  },
  methods : {
    hashBlock : function(){
        var block = this.block;
        var nonce = this.nonce;
        var data  = this.data;
        var text  = block + nonce + data;
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
                text  = this.block + i + this.data;
                hash  = CryptoJS.SHA256(text).toString();
                start = hash.slice(0,4);

                // hash pattern found
                if(start === '0000'){
                    this.color = '#E0F0D9';
                    this.nonce = i;
                    this.hash = hash;
                    this.l.toggle();

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
    this.l = Ladda.create(document.getElementById('mineButton'));
  }    

};

</script>

<style scoped>

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
