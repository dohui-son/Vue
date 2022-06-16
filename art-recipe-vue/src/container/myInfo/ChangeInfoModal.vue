<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">{{memberInfo.name}} 님 </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              SNS URL
              <input type="url" autocomplete="off" v-model.lazy.trim="newMyInfo.sns"/>
            </slot>
            <br/>
            <slot name="body">
              Description
              <input type="text" autocomplete="off" v-model.lazy.trim="newMyInfo.desc"/>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              {{alertMsg}}
              <button class="modal-default-button" @click="$emit('close')">
                save
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  props: {
    show: {
      required: true,
      type: Boolean,
    },
    memberInfo: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      newMyInfo: this.memberInfo,
      alertMsg:""
    };
  },
  methods:{
    submitTest(){
      if(this.newMyInfo && this.newMyInfo === this.memberInfo){
        alert("수정된 정보가 없습니다.");
      }
      else if(this.newMyInfo.sns && this.newMyInfo.sns !== this.memberInfo.sns ){
        // sns url 검증
        this.alertMsg="유효한 url을 입력해주세요."
      }

    }

  }
};
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 70%;
  height: 50%;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: lightgray;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;

}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
