<template>
  <div>


      <!-- START: blockchain menu -->
      <div class="starter-template">

        <h1 class="display-4">Blockchain</h1>
        <p class="lead">A blockchain is a list of records, called blocks, which are linked using cryptography.</p>

        <!-- Basics Bread Crumbs Navigation -->
        <BasicsNavigation/>

        <div class="card">
          <h5 class="card-header">Basics</h5>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><a href="/#/blockchain/hash">Hash</a></li>
            <li class="list-group-item"><a href="/#/blockchain/block">Block</a></li>
            <li class="list-group-item"><a href="/#/blockchain/chain">Blockchain</a></li>
            <li class="list-group-item"><a href="/#/blockchain/distributed">Distributed</a></li>          
            <li class="list-group-item"><a href="/#/blockchain/tokens">Tokens</a></li>
            <li class="list-group-item"><a href="/#/blockchain/coinbase">Coinbase</a></li>          
          </ul>
        </div>      

        <div style="padding: 25px;"></div>

        <!-- Keys Bread Crumbs Navigation -->
        <KeysNavigation/>

        <div class="card">
            <h5 class="card-header">Keys</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><a href="/#/blockchain/keys">Keys</a></li>
              <li class="list-group-item"><a href="/#/blockchain/signatures">Signatures</a></li>
              <li class="list-group-item"><a href="/#/blockchain/transaction">Transaction</a></li>
              <li class="list-group-item"><a href="/#/blockchain/chain2">Blockchain</a></li>
            </ul>
          </div>      

        <div style="padding: 25px;"></div>

        <!-- Live Bread Crumbs Navigation -->
        <LiveNavigation/>

        <div class="card">
            <h5 class="card-header">Intereacting with the Live Blockchain</h5>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Create a Transaction - Transfer Funds</li>
              <li class="list-group-item">Track Transactions</li>
              <li class="list-group-item">Create a Smart Contract</li>
              <li class="list-group-item">Create a Crypto Currency</li>
            </ul>
          </div>      


      </div>
      <div style="padding: 25px;"></div>      
      <!-- END: blockchain menu -->


  </div>
</template>

<script>

import BasicsNavigation from '@/components/blockchain/basics/Navigation.vue'
import KeysNavigation from '@/components/blockchain/keys/Navigation.vue'
import LiveNavigation from '@/components/blockchain/live/Navigation.vue'

export default {
  name: 'Menu',
  components: {
      BasicsNavigation,KeysNavigation,LiveNavigation 
  }
}

</script>