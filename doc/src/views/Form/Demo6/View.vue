<template>
  <sec-form
    ref="dynamicValidateForm"
    label-width="100px"
    extra-width="70px"
    :model="dynamicValidateForm"
  >
    <sec-form-item
      label="邮箱"
      prop="email"
      :rules="[
        { required: true, message: '请输入邮箱地址', trigger: 'blur' },
        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
      ]"
    >
      <sec-input v-model="dynamicValidateForm.email"></sec-input>
    </sec-form-item>
    <sec-form-item
      v-for="(domain, index) in dynamicValidateForm.domains"
      :key="domain.key"
      :label="`域名${index}`"
      :prop="`domains.${index}.value`"
      :rules="{
        required: true,
        message: '域名不能为空',
        trigger: 'blur',
      }"
    >
      <sec-input v-model="domain.value"></sec-input>
      <template #extra>
        <sec-btn @click.prevent="removeDomain(domain)">删除</sec-btn>
      </template>
    </sec-form-item>
    <sec-form-item>
      <sec-btn type="primary" @click="submitForm">提交</sec-btn>
      <sec-btn @click="addDomain">新增域名</sec-btn>
      <sec-btn @click="resetForm">重置</sec-btn>
    </sec-form-item>
  </sec-form>
</template>

<script>
import { now } from 'lodash';

export default {
  data() {
    return {
      dynamicValidateForm: {
        domains: [{ value: '' }],
        email: '',
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.dynamicValidateForm.validate().then(() => {
        alert('submit!');
      }).catch(() => {
        console.log('error submit!!');
      });
    },
    resetForm() {
      this.$refs.dynamicValidateForm.resetFields();
    },
    removeDomain(item) {
      const index = this.dynamicValidateForm.domains.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domains.splice(index, 1);
      }
    },
    addDomain() {
      this.dynamicValidateForm.domains.push({
        value: '',
        key: now(),
      });
    },
  },
};
</script>

<style lang="less" scoped>
.sec-form {
  width: 460px;
}
</style>
