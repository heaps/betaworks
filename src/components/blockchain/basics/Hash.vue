<template>
  <div>
    <!-- --------------------- START --------------------- -->
    <div class="container">

          <!-- Navigation -->
          <Navigation/>          

          <!-- card start -->
          <div class="card bg-light mb-3">
            <h5 class="card-header">{{ msg }}</h5>
            <div class="card-body">

            <!-- form start -->
            <form class="form-horizontal">
                <div class="form-group">
                    <label for="data" class="control-label">Data:</label>
                    <div>
                        <textarea id="credit-limit-input" rows="10" v-model="inputData" v-on:input="processInputData" class="form-control"></textarea>
                    </div>
                </div>
                <div class="form-group">
                    <label for="hash" class="control-label">Hash:</label>
                    <div>
                        <input id="hash" type="text" disabled class="form-control">
                    </div>
                </div>
                <div class="form-group">
                    <label for="identicon" class="control-label">Identicon:</label>
                    <div>
                        <div id="identicon"></div>
                        <div id="roundIcon" class="identicon"></div>
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

  
</template>

<script>

import Navigation from '@/components/blockchain/basics/Navigation.vue'

export default {
  name: 'Hash',
  components: {
      Navigation
  },
  data: function() {
    return {
      msg: 'Basics: SHA256 Hash',
      inputData: ''
    }
  },
  methods : {
    processInputData : function(data){
      console.log(data);
      console.log(data.srcElement);
      console.log(data.srcElement.value);      
      var value = data.srcElement.value;
      var hash = CryptoJS.SHA256(value).toString();
      console.log(hash);
      document.getElementById('hash').value = hash;

      // create identicon
      var roundIcon = document.getElementById('roundIcon');
      roundIcon.style.backgroundImage = 'url(' + hqx(blockies.create({ seed:hash ,size: 8,scale: 3}),4).toDataURL()+')';
    }
  },
  mounted: function () {
      // onload input data always empty
      console.log('in mounted');
      var empty = '';
      var hash = CryptoJS.SHA256(empty).toString();
      console.log(hash);
      document.getElementById('hash').value = hash;

      // create identicon for empty input
      var roundIcon = document.getElementById('roundIcon');
      roundIcon.style.backgroundImage = 'url(' + hqx(blockies.create({ seed:hash ,size: 8,scale: 3}),4).toDataURL()+')';
  }    

}
</script>
