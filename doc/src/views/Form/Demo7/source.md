```vue
<template>
  <sec-form
    ref="numberValidateForm"
    label-width="100px"
    :model="numberValidateForm"
  >
    <sec-form-item
      label="年龄"
      prop="age"
      :rules="[
        { required: true, message: '年龄不能为空' },
        { type: 'number', message: '年龄必须为数字值' },
      ]"
    >
      <sec-input
        v-model.number="numberValidateForm.age"
        type="age"
        autocomplete="off"
      ></sec-input>
    </sec-form-item>
    <sec-form-item>
      <sec-btn type="primary" @click="submitForm">提交</sec-btn>
      <sec-btn @click="resetForm">重置</sec-btn>
    </sec-form-item>
  </sec-form>
</template>

<script>
export default {
  data() {
    return {
      numberValidateForm: {
        age: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.numberValidateForm.validate().then(() => {
        alert('submit!');
      }).catch(() => {
        console.log('error submit!!');
      });
    },
    resetForm() {
      this.$refs.numberValidateForm.resetFields();
    },
  },
};
</script>

<style lang="less" scoped>
.sec-form {
  width: 460px;
}
</style>
```