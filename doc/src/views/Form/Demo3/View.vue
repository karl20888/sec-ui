<template>
  <div>
    <sec-radio-group v-model="labelPosition" class="mb20">
      <sec-radio-button label="left">左对齐</sec-radio-button>
      <sec-radio-button label="right">右对齐</sec-radio-button>
      <sec-radio-button label="top">顶部对齐</sec-radio-button>
    </sec-radio-group>
    <sec-form :label-position="labelPosition" label-width="80px">
      <sec-form-item label="名称">
        <sec-input v-model="formLabelAlign.name"></sec-input>
      </sec-form-item>
      <sec-form-item label="活动区域">
        <sec-input v-model="formLabelAlign.region"></sec-input>
      </sec-form-item>
      <sec-form-item label="活动形式">
        <sec-input v-model="formLabelAlign.type"></sec-input>
      </sec-form-item>
    </sec-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: '',
      },
    };
  },
};
</script>

<style lang="less" scoped>
.sec-form {
  width: 460px;
}
</style>
