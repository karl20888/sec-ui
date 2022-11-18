```vue
<template>
  <div class="demo-input-size">
    <sec-input
      v-model="input1"
      size="large"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    ></sec-input>
    <sec-input
      v-model="input2"
      size="medium"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    ></sec-input>
    <sec-input
      v-model="input3"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    ></sec-input>
    <sec-input
      v-model="input4"
      size="mini"
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
    ></sec-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      input4: '',
    };
  },
};
</script>

<style lang="less" scoped>
.demo-input-size .sec-input {
  width: 180px;
  vertical-align: top;
  margin: 0 10px 10px 0;
}
</style>
```