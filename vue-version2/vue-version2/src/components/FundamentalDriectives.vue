/* eslint-disable */
<template>
  <div>
    {{title}}
    <div v-bind:title="message">이 위에 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있음</div>
    <button v-if="isLogIn">write</button>
    <ol>
      <li v-for="item in list" >
        {{item.text}}
      </li>
    </ol>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        title: "Sell Your Mind",
        message: '이 페이지는 ' + new Date() + '에 로드 되었습니다.',
        isLogIn: true,
        list:[
          { id: 0, text: '글 1'},
          {id: 1,text: '글 2'},
          {id: 0,text: '글 3'},
        ]
      }
    }


  };
</script>