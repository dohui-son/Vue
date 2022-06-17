<template>
  <div>{{ memberInfo.name }} 님</div>
  <div>SNS <a href="memberInfo.sns">sns link</a></div>
  <div v-if="memberInfo.desc===''">
    자신을 소개해 보세요.
  </div>
  <div v-else>{{ memberInfo.desc }}</div>
</template>

<script>
export default {
  props: {
    memberInfo: {
      required:true,
      type: Object,
    },
  },
};
</script>
