<template>
  <div class="container-scroller">
    <app-narbar></app-narbar>
    <div class="container-fluid page-body-wrapper">
    <app-sidebar></app-sidebar>
    <div class="main-panel">
     <router-view/>
    </div>
    </div>
  </div>
    
  
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Narbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue'
export default {
  name: 'Home',
  components: {
    //HelloWorld,
   appNarbar:Narbar,
   appSidebar:Sidebar
  }
}
</script>
