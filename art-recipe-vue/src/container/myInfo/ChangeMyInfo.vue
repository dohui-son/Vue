<template>
  <button id="show-modal" @click="changeModal">Change Info</button>
  <ChangeMyInfoModal :show="showModal" @close="showModal = false"  :member-info="memberInfo">
    <template #header>
      <h3>{{memberInfo.name}} 님</h3>
    </template>
  </ChangeMyInfoModal>
</template>

<script>
import ChangeMyInfoModal from "@/container/myInfo/ChangeInfoModal";
export default {
  components: { ChangeMyInfoModal },
  props: {
    memberInfo:{
      required:true,
      type:Object
    }
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    changeModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>
