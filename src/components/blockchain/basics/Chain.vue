<template>
  <div class="hello">
  <h2>Blockchain</h2>
     <!-- Navigation -->
    <Navigation/>    

<div class="container-fluid">
    <div class="row flex-row flex-nowrap">
        <div class="col-6">
            <div class="card"></div>
            <div id="block1chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block2chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block1chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block1chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block1chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block1chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block1chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block1chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block2chain1previous" type="text" value="0000000000000000000000000000000000000000000000000000000000000000" 
                            disabled="" class="form-control">
                            </div>          
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block1chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block1chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block1chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div> 
</div>
</div>
        <div class="col-6">
            <div class="card"></div>
<div id="block2chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block2chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block2chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block2chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block2chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block2chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block2chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block2chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block2chain1previous" type="text" value="0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block2chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block2chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block2chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
</form>
        </div>
    </div> 
</div>
        </div>
        <div class="col-6">
            <div class="card"></div>
            <div id="block3chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block3chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block3chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block3chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block3chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block3chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block3chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block3chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block2chain1previous" type="text" value="0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block3chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block3chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block3chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
</form>
        </div>
    </div> 
</div>
        </div>
        <div class="col-6">
            <div class="card"></div>
            <div id="block4chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block4chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block4chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block4chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block4chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block4chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block4chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block4chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block4chain1previous" type="text" value="0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block4chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block4chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block4chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
</form>
        </div>
    </div> 
</div>
        </div>
        <div class="col-6">
            <div class="card"></div>
            <div id="block4chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block5chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block5chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block5chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block5chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block5chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block5chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block45hain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block5chain1previous" type="text" value="0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block5chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block5chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block5chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
</form>
        </div>
    </div> 
</div>
        </div>
        <div class="col-6">
            <div class="card"></div>
            <div id="block6chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block6chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block6chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block6chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block6chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block6chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block6chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block6chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block6chain1previous" type="text" value="0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block6chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block6chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block6chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
</form>
        </div>
    </div> 
</div>
        </div>
        <div class="col-6">
            <div class="card"></div>
            <div id="block7chain1well">
<div class="card"  v-bind:class="setColor"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block7chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block7chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock"
                v-on:input="updateHash"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block7chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block7chain1nonce" type="text"
                         v-model="inputNonce"
                         v-on:input="updateHash"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block7chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block7chain1data" rows="3"
                        v-model="inputBlockData"
                        v-on:input="updateHash"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block7chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block7chain1previous" type="text" value="0000f727854b50bb95c054b39c1fe5c92e5ebcfa4bcb5dc279f56aa96a365e5a" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block7chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block7chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block7chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine">
                            <span class="ladda-label">Mine</span>
                        </button>
                    </div>
                </div>
</form>
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
  name: 'Chain',
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
      bgColorErroe:'bg-danger',
      identicon:'',
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
<style>
.container-fluid {
   padding: 0px 0px 25px 0px;
}
</style>


