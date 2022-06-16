<template>
  <button id="show-modal" @click="changeModal">Change Info</button>
  <ChangeMyInfoModal :show="showModal" @close="showModal = false">
    <template #header>
      <h3>custom header</h3>
    </template>
  </ChangeMyInfoModal>
</template>

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
    changeModal(){
      this.showModal = !this.showModal
    }

  }
}
</script>