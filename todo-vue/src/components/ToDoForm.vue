<template>
<!--  <form v-on:submit="onSubmit">의 축약이 @sumbit="onSubmit"-->
<!--  use the .prevent handler to stop the browser's default submit action-->

  <form @submit.prevent="onSubmit">
    <h2 class="label-wrapper">
      <label for="new-todo-input">What needs to be done?</label>
    </h2>
    <input type="text" id="new-todo-input" name="new-todo" autocomplete="off" v-model.lazy.trim
    ="label"
           class="input__lg"
    />
<!--    .lazy modifier causes v-model to use the change event instead. This means that Vue will only sync data when the input loses focus or the form is submitted-->
    <button type="submit" class="btn btn__primary btn__lg"> Add </button>
  </form>
</template>

<script>
  export default {
    methods:{
      onSubmit(){
        if(this.label === ""){
          alert("pls type sth before add.");
          return;
        }
        console.log('Label submitted val from input - ', this.label);
        this.$emit("todo-added", this.label);
        this.label = ""; //기존에 input에 입력되어있던 값 비우기
      }
    },
    data(){
      return{
        label:""
      }
    }
  };
</script>