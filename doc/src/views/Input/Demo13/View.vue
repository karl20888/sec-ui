<template>
  <div>
    <sec-row>
      <sec-input
        v-model="text"
        placeholder="请输入内容"
        maxlength="10"
        show-word-limit
      ></sec-input>
    </sec-row>
    <sec-row class="mt20">
      <sec-textarea
        v-model="textarea"
        placeholder="请输入内容"
        maxlength="30"
      ></sec-textarea>
    </sec-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: '',
    };
  },
};
</script>

<style lang="less" scoped>
.sec-input {
  width: 180px;
}

.sec-textarea {
  width: 414px;
}
</style>
