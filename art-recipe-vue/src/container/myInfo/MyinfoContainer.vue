<template><div>
  MY INFO Part
  <MyInfoList :memberInfo="memberInfo" />
  <ChangeMyInfo :memberInfo="memberInfo"/>
</div></template>


<script>
import ChangeMyInfo from "@/container/myInfo/ChangeMyInfo";
import MyInfoList from "@/container/myInfo/MyInfoList";
export default {
  components:{
    ChangeMyInfo, MyInfoList
  },
  data(){
    return{
      memberInfo:{
        name:"000",
        sns:"https://www.instagram.com/",
        desc:"",
      }
    }
  }
};
</script>
