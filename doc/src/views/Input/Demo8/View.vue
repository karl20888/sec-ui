<template>
  <div>
    <sec-row>
      <sec-input v-model="input1" placeholder="请输入内容">
        <template #prepend>Http://</template>
      </sec-input>
    </sec-row>
    <sec-row class="mt15">
      <sec-input v-model="input2" placeholder="请输入内容">
        <template #append>.com</template>
      </sec-input>
    </sec-row>
    <div class="sec-row mt15">
      <sec-input v-model="input3" placeholder="请输入内容" class="input-with-select">
        <template #prepend>
          <sec-select v-model="select" placeholder="请选择" class="prepend-select">
            <sec-option label="餐厅名" value="1"></sec-option>
            <sec-option label="订单号" value="2"></sec-option>
            <sec-option label="用户电话" value="3"></sec-option>
          </sec-select>
        </template>
        <template #append>
          <sec-btn icon="el-icon-search"></sec-btn>
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
      select: '',
    };
  },
};
</script>

<style lang="less" scoped>
.input-with-select :deep(.el-input-group__prepend) {
  background-color: #fff;
}

.prepend-select {
  width: 130px;
}
</style>
