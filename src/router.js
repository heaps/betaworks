import Vue    from 'vue'
import Router from 'vue-router'

// main sections: blockchain, security, AI, and cloud
import Home               from './views/Home.vue'
import Blockchain         from './views/Blockchain.vue'
import Cybersecurity      from './views/Cybersecurity.vue'
import AI                 from './views/AI.vue'
import Cloud              from './views/Cloud.vue'

// blockchain section landing page
import LandingPage     from './components/blockchain/LandingPage.vue'

// blockchain basics components
import Block              from './components/blockchain/basics/Block.vue'
import Chain              from './components/blockchain/basics/Chain.vue'
import Coinbase           from './components/blockchain/basics/Coinbase.vue'
import Distributed        from './components/blockchain/basics/Distributed.vue'
import Hash               from './components/blockchain/basics/Hash.vue'
import Tokens             from './components/blockchain/basics/Tokens.vue'

// blockchain keys components
import Chain2             from './components/blockchain/keys/Chain.vue'
import Keys               from './components/blockchain/keys/Keys.vue'
import Signatures         from './components/blockchain/keys/Signatures.vue'
import Transaction        from './components/blockchain/keys/Transaction.vue'

// blockchain live components
import Contract           from './components/blockchain/live/Contract.vue'
import Currency           from './components/blockchain/live/Currency.vue'
import Track              from './components/blockchain/live/Track.vue'
import Transfer           from './components/blockchain/live/Transfer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/blockchain',
      name: 'blockchain',
      component: Blockchain,
      children: [
        {
          path: 'block',
          component: Block
        },
        {
          path: 'chain',
          component: Chain
        },
        {
          path: 'coinbase',
          component: Coinbase
        },
        {
          path: 'distributed',
          component: Distributed
        },
        {
          path: 'hash',
          component: Hash
        },
        {
          path: 'landingPage',
          component: LandingPage
        },
        {
          path: 'tokens',
          component: Tokens
        },
        {
          path: 'chain2',
          component: Chain2
        },
        {
          path: 'keys',
          component: Keys
        },
        {
          path: 'signatures',
          component: Signatures
        },
        {
          path: 'transaction',
          component: Transaction
        },
        {
          path: 'contract',
          component: Contract
        },
        {
          path: 'currency',
          component: Currency
        },
        {
          path: 'track',
          component: Track
        },
        {
          path: 'transfer',
          component: Transfer
        }
      ]
    },
    {
      path: '/cybersecurity',
      name: 'cybersecurity',
      component: Cybersecurity
    },
    {
      path: '/ai',
      name: 'ai',
      component: AI
    },
    {
      path: '/cloud',
      name: 'cloud',
      component: Cloud
    }

  ]
})
