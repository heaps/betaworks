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
<div class="card"  v-bind:class="setColor1"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block1chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block1chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock1"
                v-on:input="updateHash1"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block1chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block1chain1nonce" type="text"
                         v-model="inputNonce1"
                         v-on:input="updateHash1"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block1chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block1chain1data" rows="3"
                        v-model="inputBlockData1"
                        v-on:input="updateHash1"
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
                         v-model="hashValue1">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon1" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon1"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL1}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block1chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine1">
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
<div class="card"  v-bind:class="setColor2"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block2chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block2chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock2"
                v-on:input="updateHash2"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block2chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block2chain1nonce" type="text"
                         v-model="inputNonce2"
                         v-on:input="updateHash2"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block2chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block2chain1data" rows="3"
                        v-model="inputBlockData2"
                        v-on:input="updateHash2"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block2chain1previous"  class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block2chain1previous" type="text"  disabled=""
                             class="form-control" v-model="prevValue2"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block2chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block2chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue2">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL2}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block2chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine2">
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
<div class="card"  v-bind:class="setColor3"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block3chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block3chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock3"
                v-on:input="updateHash3"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block3chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block3chain1nonce" type="text"
                         v-model="inputNonce3"
                         v-on:input="updateHash3"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block3chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block3chain1data" rows="3"
                        v-model="inputBlockData3"
                        v-on:input="updateHash3"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block3chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block2chain1previous" type="text"  
                            v-model="prevValue3" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block3chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block3chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue3">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL3}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block3chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine3">
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
<div class="card"  v-bind:class="setColor4"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block4chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block4chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock4"
                v-on:input="updateHash4"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block4chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block4chain1nonce" type="text"
                         v-model="inputNonce4"
                         v-on:input="updateHash4"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block4chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block4chain1data" rows="3"
                        v-model="inputBlockData4"
                        v-on:input="updateHash4"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block4chain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block4chain1previous" type="text" 
                            v-model="prevValue4" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block4chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block4chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue4">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL4}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block4chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine4">
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
<div class="card"  v-bind:class="setColor5"> 
<div class="card-body">
<form class="form-horizontal"><div class="form-group">
<label for="block5chain1number" class="col-sm-25 control-label font-weight-bold">Block:</label>
<div class="col-sm-10">
                <div class="input-group mb-3">
                    <div class="input-group-prepend">
                         <span class="input-group-text" id="basic-addon1">#</span>
                    </div>
             <input id="block5chain1number"  type="number" aria-describedby="basic-addon1"
                 v-model="inputBlock5"
                v-on:input="updateHash5"
                class="form-control">
               </div>
    </div>
        </div>
    <div class="form-group">
                    <label for="block5chain1nonce" class="col-sm-25 control-label font-weight-bold">Nonce:</label>
                    <div class="col-sm-10">
                        <input id="block5chain1nonce" type="text"
                         v-model="inputNonce5"
                         v-on:input="updateHash5"
                        class="form-control">
                    </div>
                </div>

<div class="form-group">
                    <label for="block5chain1data" class="col-sm-25 control-label font-weight-bold">Data:</label>
                    <div class="col-sm-10">
                        <textarea id="block5chain1data" rows="3"
                        v-model="inputBlockData5"
                        v-on:input="updateHash5"
                         class="form-control"></textarea>
                    </div>
                                        <div id="state" class="form-group">
                        <label for="block5hain1previous" class="col-sm-25 control-label font-weight-bold">Prev:</label>
                        <div class="col-sm-10">
                            <input id="block5chain1previous" type="text" 
                            v-model="prevValue5" disabled="" class="form-control"></div>
                            </div>
                </div>

<div id="state" class="form-group">
                    <label for="block5chain1hash" class="col-sm-25 control-label font-weight-bold">Hash:</label>
                    <div class="col-sm-10">
                        <input id="block5chain1hash" type="text" disabled class="form-control"
                         v-model="hashValue5">
                    </div>
                </div>

                <div class="form-group">
                    <label for="identicon" class="col-sm-25 control-label font-weight-bold">Identicon:</label>
                    <div class="col-sm-10">
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"
                        :style="{ backgroundImage: `url('${srcURL5}')` }"></div>
                    </div>
                </div>

<div class="form-group"> 
                    <div class="col-sm-2">
                        <i class="icon-spinner icon-spin icon-large"></i>
                    </div>
                    <div class="col-sm-10">
                        <button id="block5chain1mineButton" data-style="expand-right" 
                        class="btn btn-primary ladda-button"
                        v-on:click="processMine5">
                            <span class="ladda-label">{{buttonmsg}}</span>
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
        buttonmsg:"Mine",
      inputData: '',
      inputBlock1:'1',
      inputBlock2:'2',
      inputBlock3:'3',
      inputBlock4:'4',
      inputBlock5:'5',
      inputNonce1:'11316',
      inputNonce2:'35230',
      inputNonce3:'12937',
      inputNonce4:'35990',
      inputNonce5:'56265',
      inputBlockData1:'',
      inputBlockData2:'',
      inputBlockData3:'',
      inputBlockData4:'',
      inputBlockData5:'',
      difficulty:4,
      maximumNonce:500000,
      activeClass1:'well-success',
      activeClass2:'well-success',
      activeClass3:'well-success',
      activeClass4:'well-success',
      activeClass5:'well-success',
      errorClass1:'well-error',
      errorClass2:'well-error',
      errorClass3:'well-error',
      errorClass4:'well-error',
      errorClass5:'well-error',
      isActive1:true,
      isActive2:true,
      isActive3:true,
      isActive4:true,
      isActive5:true,
      prevValue1:"0000000000000000000000000000000000000000000000000000000000000000",
      hashValue1:'000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf',
      hashValue2:'000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19',
      hashValue3:'0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf',
      hashValue4:'0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83',
      hashValue5:'0000e4b9052fd8aae92a8afda42e2ea0f17972ea67cead67352e74dd6f7d217c',
      prevValue2:"000015783b764259d382017d91a36d206d0600e2cbb3567748f46a33fe9297cf",
      prevValue3:'000012fa9b916eb9078f8d98a7864e697ae83ed54f5146bd84452cdafd043c19',
      prevValue4:'0000b9015ce2a08b61216ba5a0778545bf4ddd7ceb7bbd85dd8062b29a9140bf',
      prevValue5:'0000ae8bbc96cf89c68be6e10a865cc47c6c48a9ebec3c6cad729646cefaef83',
      srcURL1:hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL(),
      srcURL2:hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL(),
      srcURL3:hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL(),
      srcURL4:hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL(),
      srcURL5:hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL(),
      bgColorSucess1:'bg-success',
      bgColorSucess2:'bg-success',
      bgColorSucess3:'bg-success',
      bgColorSucess4:'bg-success',
      bgColorSucess5:'bg-success',
      bgColorErroe1:'bg-danger',
      bgColorErroe2:'bg-danger',
      bgColorErroe3:'bg-danger',
      bgColorErroe4:'bg-danger',
      bgColorErroe5:'bg-danger',
      identicon1:'',
      components: {
      Navigation
  }
    }
  },


   
    created1:function(){
    //    this.processMine();
    this.srcURL1=hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL()
  },
    created2:function(){
    //    this.processMine();
    this.srcURL2=hqx(blockies.create({ seed: this.hashValue2 ,size: 8,scale: 3}),4).toDataURL()
  },
    created3:function(){
    //    this.processMine();
    this.srcURL3=hqx(blockies.create({ seed: this.hashValue3 ,size: 8,scale: 3}),4).toDataURL()
  },
    created4:function(){
    //    this.processMine();
    this.srcURL4=hqx(blockies.create({ seed: this.hashValue4 ,size: 8,scale: 3}),4).toDataURL()
  },
    created5:function(){
    //    this.processMine();
    this.srcURL5=hqx(blockies.create({ seed: this.hashValue5 ,size: 8,scale: 3}),4).toDataURL()
  },
  computed:{
    setClass1: function(){
        console.log("setclass1 computed");
        if(this.isActive1)
        return this.activeClass1
        else{
             return this.errorClass1
        }
    },
    setClass2: function(){
        console.log("setclass2 computed");
        if(this.isActive2)
        return this.activeClass2
        else{
             return this.errorClass2
        }
    },
    setClass3: function(){
        console.log("setclass3 computed");
        if(this.isActive3)
        return this.activeClass3
        else{
             return this.errorClass3
        }
    },
    setClass4: function(){
        console.log("setclass4 computed");
        if(this.isActive4)
        return this.activeClass4
        else{
             return this.errorClass4
        }
    },
    setClass5: function(){
        console.log("setclass5 computed");
        if(this.isActive5)
        return this.activeClass5
        else{
             return this.errorClass5
        }
    },
    setColor1:function(){
        console.log("setColor computed");
        if(this.isActive1)
        return this.bgColorSucess1
        else{
             return this.bgColorErroe1
        }
    },
        setColor2:function(){
        console.log("setColor computed");
        if(this.isActive2)
        return this.bgColorSucess2
        else{
             return this.bgColorErroe2
        }
    },
        setColor3:function(){
        console.log("setColor computed");
        if(this.isActive3)
        return this.bgColorSucess3
        else{
             return this.bgColorErroe3
        }
    },
        setColor4:function(){
        console.log("setColor computed");
        if(this.isActive4)
        return this.bgColorSucess4
        else{
             return this.bgColorErroe4
        }
    },
        setColor5:function(){
        console.log("setColor computed");
        if(this.isActive5)
        return this.bgColorSucess5
        else{
             return this.bgColorErroe5
        }
    }
  },
  methods : {
    updateHash1: function() {
      console.log("\n\n!!!!!!updateHash1");    
      this.isActive1=false 
      var value1 = this.inputBlock1+this.inputNonce1+this.inputBlockData1;
       console.log("updateHash value="+value1);
      var hash1 = CryptoJS.SHA256(value1).toString();
      console.log(hash1);
      //document.getElementById('block1chain1hash').value = hash;
      this.hashValue1=hash1;
      this.prevValue2=hash1;
      // If you want rounded and diagonals
      this.srcURL1=hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL();   
      this.updateHash2()
    },
    updateHash2: function() {
      console.log("\n\n!!!!!!updateHash2");    
      this.isActive2=false 
      var value2 = this.inputBlock2+this.inputNonce2+this.inputBlockData2;
       console.log("updateHash value="+value2);
      var hash2 = CryptoJS.SHA256(value2).toString();
      console.log(hash2);
      //document.getElementById('block1chain1hash').value = hash;
      this.hashValue2=hash2;
      this.prevValue3=hash2;
      // If you want rounded and diagonals
      this.srcURL2=hqx(blockies.create({ seed: this.hashValue2 ,size: 8,scale: 3}),4).toDataURL();  
       this.updateHash3()    
    },
    updateHash3: function() {
      console.log("\n\n!!!!!!updateHash ");    
      this.isActive3=false 
      var value3 = this.inputBlock3+this.inputNonce3+this.inputBlockData3;
       console.log("updateHash value="+value3);
      var hash3 = CryptoJS.SHA256(value3).toString();
      console.log(hash3);
      //document.getElementById('block1chain1hash').value = hash;
      this.hashValue3=hash3;
      this.prevValue4=hash3;
      // If you want rounded and diagonals
      this.srcURL3=hqx(blockies.create({ seed: this.hashValue3 ,size: 8,scale: 3}),4).toDataURL();      
       this.updateHash4()
    },
    updateHash4: function() {
      console.log("\n\n!!!!!!updateHash ");    
      this.isActive4=false 
      var value4 = this.inputBlock4+this.inputNonce4+this.inputBlockData4;
       console.log("updateHash4 value="+value4);
      var hash4 = CryptoJS.SHA256(value4).toString();
      console.log(hash4);
      //document.getElementById('block1chain1hash').value = hash;
      this.hashValue4=hash4;
      this.prevValue5=hash4;
      // If you want rounded and diagonals
      this.srcURL4=hqx(blockies.create({ seed: this.hashValue4 ,size: 8,scale: 3}),4).toDataURL();     
       this.updateHash5() 
    },
    updateHash5: function() {
      console.log("\n\n!!!!!!updateHash ");    
      this.isActive5=false 
      var value5 = this.inputBlock5+this.inputNonce5+this.inputBlockData5;
       console.log("updateHash5 value="+value5);
      var hash5 = CryptoJS.SHA256(value5).toString();
      console.log(hash5);
      //document.getElementById('block1chain1hash').value = hash;
      this.hashValue5=hash5;
      // If you want rounded and diagonals
      this.srcURL5=hqx(blockies.create({ seed: this.hashValue5 ,size: 8,scale: 3}),4).toDataURL();      
    },
    processMine1: function() {
        console.log("\n\n!!!!!!processMine ");     
        this.mineBlock1(this.difficulty);

    },
    processMine2: function() {
        console.log("\n\n!!!!!!processMine ");     
        this.mineBlock2(this.difficulty);

    },
    processMine3: function() {
        console.log("\n\n!!!!!!processMine ");     
       this.mineBlock3(this.difficulty);
    
    },
    processMine4: function() {
        console.log("\n\n!!!!!!processMine ");     
       this.mineBlock4(this.difficulty);
    
    },
    processMine5: function() {
        this.buttonmsg = "Mining..."
        console.log("\n\n!!!!!!processMine ");     
       this.mineBlock5(this.difficulty);
        this.buttonmsg = "Mine"
    
    },
    mineBlock1:function(difficulty) {
        console.log("\n\n!!!!!!mineBlock "); 
        var nonce1=0;
        while (this.hashValue1.substring(0, difficulty) !== Array(difficulty + 1).join("0")&& nonce1<this.maximumNonce) {
            nonce1++;
            this.hashValue1 = this.calculateHash1(nonce1);
        }
        console.log("BLOCK MINED: " + this.hashValue1);
        this.inputNonce1=nonce1;
        this.isActive1=true;
        this.srcURL1=hqx(blockies.create({ seed: this.hashValue1 ,size: 8,scale: 3}),4).toDataURL();
        this.prevValue2 = this.hashValue1
        this.mineBlock2(this.difficulty)
    },
    mineBlock2:function(difficulty) {
        console.log("\n\n!!!!!!mineBlock2 "); 
        var nonce2=0;
        while (this.hashValue2.substring(0, difficulty) !== Array(difficulty + 1).join("0")&& nonce2<this.maximumNonce) {
            nonce2++;
            this.hashValue2 = this.calculateHash2(nonce2);
        }
        console.log("BLOCK MINED: " + this.hashValue2);
        this.inputNonce2=nonce2;
        this.isActive2=true;
        this.srcURL2=hqx(blockies.create({ seed: this.hashValue2 ,size: 8,scale: 3}),4).toDataURL();
        this.prevValue3 = this.hashValue2
    this.mineBlock3(this.difficulty)
    },
    mineBlock3:function(difficulty) {
        console.log("\n\n!!!!!!mineBlock "); 
        var nonce3=0;
        while (this.hashValue3.substring(0, difficulty) !== Array(difficulty + 1).join("0")&& nonce3<this.maximumNonce) {
            nonce3++;
            this.hashValue3 = this.calculateHash3(nonce3);
        }
        console.log("BLOCK MINED: " + this.hashValue3);
        this.inputNonce3=nonce3;
        this.isActive3=true;
        this.srcURL3=hqx(blockies.create({ seed: this.hashValue3 ,size: 8,scale: 3}),4).toDataURL();
        this.prevValue4 = this.hashValue3
        this.mineBlock4(this.difficulty)
    
    },
    mineBlock4:function(difficulty) {
        console.log("\n\n!!!!!!mineBlock "); 
        var nonce4=0;
        while (this.hashValue4.substring(0, difficulty) !== Array(difficulty + 1).join("0")&& nonce4<this.maximumNonce) {
            nonce4++;
            this.hashValue4 = this.calculateHash4(nonce4);
        }
        console.log("BLOCK MINED: " + this.hashValue4);
        this.inputNonce4=nonce4;
        this.isActive4=true;
        this.srcURL4=hqx(blockies.create({ seed: this.hashValue4 ,size: 8,scale: 3}),4).toDataURL();
        this.prevValue5 = this.hashValue4
        this.mineBlock5(this.difficulty)
    
    },
    mineBlock5:function(difficulty) {
        console.log("\n\n!!!!!!mineBlock "); 
        var nonce5=0;
        while (this.hashValue5.substring(0, difficulty) !== Array(difficulty + 1).join("0")&& nonce5<this.maximumNonce) {
            nonce5++;
            this.hashValue5 = this.calculateHash5(nonce5);
        }
        console.log("BLOCK MINED: " + this.hashValue5);
        this.inputNonce5=nonce5;
        this.isActive5=true;
        this.srcURL5=hqx(blockies.create({ seed: this.hashValue5 ,size: 8,scale: 3}),4).toDataURL();
    
    },

    calculateHash1:function(nonce1){
        var value1 = this.inputBlock1+nonce1+this.inputBlockData1;
        var hash1 = CryptoJS.SHA256(this.inputBlock1 +  nonce1 + this.inputBlockData1 + this.prevValue1).toString();
        return hash1;
    },
    calculateHash2:function(nonce2){
        var value2 = this.inputBlock2+nonce2+this.inputBlockData2;
        var hash2 = CryptoJS.SHA256(this.inputBlock2 +  nonce2 + this.inputBlockData2 + this.prevValue2).toString();
        return hash2;
    },
    calculateHash3:function(nonce3){
        var value3 = this.inputBlock3+nonce3+this.inputBlockData3;
        var hash3 = CryptoJS.SHA256(this.inputBlock3 +  nonce3 + this.inputBlockData3 + this.prevValue3).toString();
        return hash3;
    },
    calculateHash4:function(nonce4){
        var value4 = this.inputBlock4+nonce4+this.inputBlockData4;
        var hash4 = CryptoJS.SHA256(this.inputBlock4 +  nonce4 + this.inputBlockData4 + this.prevValue4).toString();
        return hash4;
    },
    calculateHash5:function(nonce5){
        var value5 = this.inputBlock5+nonce5+this.inputBlockData5;
        var hash5 = CryptoJS.SHA256(this.inputBlock5 +  nonce5 + this.inputBlockData5 + this.prevValue5).toString();
        return hash5;
    }
  }
   
}


</script>
<style>
.container-fluid {
   padding: 0px 0px 25px 0px;
}
</style>


