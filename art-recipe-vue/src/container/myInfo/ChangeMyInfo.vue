<template>
  <button id="show-modal" @click="showModal = true" >ChangeInfo</button>
</template>
<Teleport to="body">
<ChangeMyInfoModal :show="showModal" @close="showModal=false">
  <template #header>
    <h3>custom header</h3>
  </template>
</ChangeMyInfoModal>
</Teleport>

<script>
import ChangeMyInfoModal from "@/container/myInfo/ChangeInfoModal";
export default {
  components: {ChangeMyInfoModal},
  data(){
    return{
      showModal:false
    }
  },
  methods:{
    openModal:{
      this.showModal = true
    }

  }
}
</script>