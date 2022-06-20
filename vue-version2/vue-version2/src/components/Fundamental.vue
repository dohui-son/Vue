<template>
  <div>
    {{title}}
    <span v-bind:title="message">이 위에 마우스를 올리면 동적으로 바인딩 된 title을 볼 수 있음</span>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        title: "Sell Your Mind",
        message: '이 페이지는 ' + new Date() + '에 로드 되었습니다.'
      }
    }


  };
</script>