<template>
  <div>
    <sec-row>
      <sec-textarea v-model="textarea1" placeholder="请输入内容" autosize></sec-textarea>
    </sec-row>
    <sec-row class="mt20">
      <sec-textarea
        v-model="textarea2"
        placeholder="请输入内容"
        :autosize="{ minRows: 2, maxRows: 4 }"
      ></sec-textarea>
    </sec-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea1: '',
      textarea2: '',
    };
  },
};
</script>

<style lang="less" scoped>
.sec-textarea {
  width: 414px;
}
</style>
