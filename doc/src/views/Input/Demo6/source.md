```vue
<template>
  <div>
    <sec-row>
      <sec-input
        v-model="textarea1"
        type="textarea"
        placeholder="请输入内容"
        :rows="2"
      ></sec-input>
    </sec-row>
    <sec-row class="mt20">
      <sec-textarea
        v-model="textarea2"
        placeholder="请输入内容"
        :rows="2"
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
```