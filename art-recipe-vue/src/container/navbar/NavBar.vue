
<template>
  <nav class="navbar">
    <div class="navbar_logo">
      <router-link to="/">LOGO</router-link>
    </div>
   <ul class="navbar_menu" >
     <li><a href="#">searching bar</a></li>
     <li><a href="#"><router-link to="/myinfo">myinfo</router-link></a></li>
   </ul>
    <ul class="navbar_logo"><GoogleLogin /></ul>
    <a  href="#" class="navbar_togglebtn" @click="openMenu">toggle</a>
  </nav>
</template>
<script>
import GoogleLogin from "@/components/GoogleLogin";
export default {

  components:{
    GoogleLogin
  },
  methods:{
    openMenu(){
      // const toggleBtn = document.querySelector('.navbar_togglebtn')
      const menu = document.querySelector('.navbar_menu');
      menu.classList.toggle('active');
      console.log("open");

    }
  }
}</script>
<style scoped>
.navbar{
  display: flex;
  justify-content: space-between;
  align-items:center ;
  background-color:black;
  padding: 8px 12px;
  color: white;
}
.navbar_logo{
  font-size: 24px;
}
.navbar_logo{color: white}
.navbar_menu{
  display: flex;
  list-style: none;
  padding-left: 0;
}
@media screen and (max-width: 872px) {
  .navbar{
   flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }
  .navbar_menu{
    flex-direction: column;
    align-items: center;
    width: 100%;
    display: none;
  }
  .nav_menu li{
    width: 100%;
    text-align: center;
  }
  .navbar_icons{
    justify-content: center;
    width: 100%;
    display: none;
  }
  .navbar_togglebtn{
    display: block;
  }

}
</style>