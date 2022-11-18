<template>
  <div>
    <div class="demo-input-suffix">
      属性方式：
      <sec-input
        v-model="input1"
        placeholder="请选择日期"
        suffix-icon="el-icon-date"
      ></sec-input>
      <sec-input
        v-model="input2"
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
      ></sec-input>
    </div>
    <div class="demo-input-suffix">
      slot 方式：
      <sec-input
        v-model="input3"
        placeholder="请选择日期"
      >
        <template #suffix>
          <i class="el-input__icon el-icon-date"></i>
        </template>
      </sec-input>
      <sec-input
        v-model="input4"
        placeholder="请输入内容"
      >
        <template #prefix>
          <i class="el-input__icon el-icon-search"></i>
        </template>
      </sec-input>
    </div>
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
.demo-input-suffix {
  margin-bottom: 15px;

  .sec-input {
    width: 180px;
    margin-right: 15px;
  }
}
</style>
