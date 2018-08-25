<template>
  <div class="hello">

    <!-- Navigation -->
    <Navigation/>          

<div>
<div class="container">
    <div class="card" v-bind:class="setColor">
    <h3 class="card-header"> {{ msg }}</h3>

    <div class="card-body" >
        <div class="form-group">
            <label for="block1chain1number" class="col-sm-2 control-label font-weight-bold">Block:</label>
            <div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block1chain1number" type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block1chain1nonce" class="col-sm-2 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block1chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block1chain1data" class="col-sm-2 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block1chain1data" rows="10"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                </div>

<div id="state" class="form-group">
                    <label for="block1chain1hash" class="col-sm-2 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block1chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-2 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                    </div>
                    <div class="col-sm-10">
                        <button id="block1chain1mineButton" 
                        class="btn btn-primary btn-lg" 
                        v-on:click="processMine">
                            <span>Mine</span>
                        </button>
                    </div>
                </div>
        </div>
    </div> 
</div>
</div>
</div>
</template>

<script>

import Navigation from '@/components/blockchain/basics/Navigation.vue'

export default {
  name: 'Block',
  data: function() {
    return {
      msg: 'Basics: Block',
      inputData: '',
      inputBlock:'1',
      inputNonce:'72608',
      inputBlockData:'',
      difficulty:4,
      maximumNonce:500000,
      activeClass:'well-success',
      errorClass:'well-error',
      isActive:true,
      hashValue:'0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a',
      srcURL:'',
      bgColorSucess:'bg-success',
      bgColorErroe:'background-danger',
      identicon:'',
      dis: false, progress: 0, progress2: 0,
      components: {
      Navigation
  }
    }
  },
  created:function(){
    //    this.processMine();
    this.srcURL=hqx(blockies.create({ seed: this.hashValue ,size: 8,scale: 3}),4).toDataURL()
  },
  computed:{
    setClass: function(){
        console.log("setclass computed");
        if(this.isActive)
        return this.activeClass
        else{
             return this.errorClass
        }
    },
    setColor:function(){
        console.log("setColor computed");
        if(this.isActive)
        return this.bgColorSucess
        else{
             return this.bgColorErroe
        }
    }
  },
  methods : {
    updateHash: function() {
      console.log("\n\n!!!!!!updateHash ");    
      this.isActive=false 
      var value = this.inputBlock+this.inputNonce+this.inputBlockData;
       console.log("updateHash value="+value);
      var hash = CryptoJS.SHA256(value).toString();
      console.log(hash);
      //document.getElementById('block1chain1hash').value = hash;
      this.hashValue=hash;
      // If you want rounded and diagonals
      this.srcURL=hqx(blockies.create({ seed: this.hashValue ,size: 8,scale: 3}),4).toDataURL();      
    },
    processMine: function() {
        console.log("\n\n!!!!!!processMine ");  
        //  var btn = $(this);
        //        btn.val(btn.data("loading-text")); setTimeout(function() {
        // btn.val('reset');
        // }, 2000);   
        this.progress = 1;
				var self = this; setTimeout(function(){ self.progress = 0; }, 3000);
       this.mineBlock(this.difficulty);
    
    },
    mineBlock:function(difficulty) {
        console.log("\n\n!!!!!!mineBlock "); 
        var nonce=0;
        while (this.hashValue.substring(0, difficulty) !== Array(difficulty + 1).join("0")&& nonce<this.maximumNonce) {
            nonce++;
            this.hashValue = this.calculateHash(nonce);
        }
        console.log("BLOCK MINED: " + this.hashValue);
        this.inputNonce=nonce;
        this.isActive=true;
        this.srcURL=hqx(blockies.create({ seed: this.hashValue ,size: 8,scale: 3}),4).toDataURL();
    
    },
    calculateHash:function(nonce){
        var value = this.inputBlock+nonce+this.inputBlockData;
        var hash = CryptoJS.SHA256(value).toString();
        return hash;
    }
  }

}
</script>
<style scoped>

.well-success {
  background: rgb(223, 240, 216);
}
.well-error {
  background: rgb(250, 220, 220);
}


</style>

