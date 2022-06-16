<template>
  <nav class="navbar">
    <span class="navbar_logo">
      <router-link to="/">LOGO</router-link>
    </span>
    <span class="navbar_togglebtn" @click="openMenu">toggle</span>
   <ul class="navbar_menu" >
     <li>searching bar</li>
   </ul>
    <ul v-if="isOpen" class="mobile_navbar_menu" >
      <li>mobile searching bar</li>
      <li><router-link to="/myinfo">myinfo</router-link></li>
      <li><GoogleLogin /></li>
    </ul>
    <ul class="navbar_icons">
      <li><router-link to="/myinfo">myinfo</router-link></li>
      <li><GoogleLogin /></li>
    </ul>
  </nav>
</template>

<script>
import GoogleLogin from "@/components/GoogleLogin";
export default {
  components:{
    GoogleLogin
  },
  data(){
    return {
      isOpen: false
    }
  },
  methods:{
    openMenu(){
      this.isOpen = !this.isOpen
    }
  }
}</script>
<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items:center ;
  background-color:black;
  padding: 8px;
  color: white;
  font-size: 1.5rem;
}
.navbar_logo{
  font-size: 20px;
  color: white;
}
.navbar_menu{
  display: flex;
  list-style: none;
}
.navbar_icons{
  display: flex;
  list-style: none;
  margin-left: 5px ;
}

.mobile_navbar_menu{
 display: none;
}
  .navbar_togglebtn {
    display: none;
  }
.mobile_navbar_menu{display: none;}
@media screen and (max-width: 872px) {
  .navbar{
   flex-direction: column;
    justify-content:center;
    padding: 0.2rem;
    font-size: 1.5rem;
  }
  .navbar_menu{
    display: none;
  }
  .mobile_navbar_menu{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .nav_menu li{
    width: 100%;
    text-align: center;
  }
  .navbar_icons{
    display: none;
  }
  .navbar_togglebtn{
    cursor: pointer;
    display: block;
    width: 10%;
  }

}
</style>