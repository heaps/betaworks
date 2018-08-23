<template>
  <div>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Digital Transformation</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item" v-bind:class="{ active: navItems.HomeIsActive }">
            <a class="nav-link" href="/#/">Home <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.BlockchainIsActive }">
            <a class="nav-link" href="/#/blockchain/landingPage">Blockchain <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.CybersecurityIsActive }">
            <a class="nav-link" href="/#/cybersecurity">Cybersecurity</a>
          </li>
          <li class="nav-item dropdown" v-bind:class="{ active: navItems.AiIsActive }">
            <a class="nav-link dropdown-toggle" href="/#/ai" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              AI
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item" v-bind:class="{ active: navItems.CloudIsActive }">
            <a class="nav-link disabled" href="/#/cloud">Cloud</a>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>


  </div>
</template>

<script>

export default {
  name: 'Navigation',
  methods : {
    getNavigation : function(){

      var path = this.$route.path;
      //console.log('in components/blockchain/navigation getNavigation path: ' + path);
      path = path.split('/');
      path = path[1];
      //console.log('in components/blockchain/navigation getNavigation path: ' + path);

      var navItems = {
        HomeIsActive         : false,
        BlockchainIsActive   : false,
        CybersecurityIsActive: false,
        AiIsActive           : false,
        CloudIsActive        : false,
      };

      navItems.HomeIsActive          = (!path                   ) ? true : false;
      navItems.BlockchainIsActive    = (path === 'blockchain'   ) ? true : false;
      navItems.CybersecurityIsActive = (path === 'cybersecurity') ? true : false;
      navItems.AiIsActive            = (path === 'ai'           ) ? true : false;
      navItems.CloudIsActive         = (path === 'cloud'        ) ? true : false;

      // return active path
      return navItems;
    }
  },    
  data: function(){
    var navItems = this.getNavigation();    
    return { navItems };  
  },
  watch:{
      $route (to, from){
          var navItems = this.getNavigation();
          //console.log('in components/blockchain/navigation data path: ' + JSON.stringify(navItems));
          this.navItems = navItems;
      }
  }    

}
</script>