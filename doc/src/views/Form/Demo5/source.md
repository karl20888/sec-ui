```vue
<template>
  <sec-form
    ref="ruleForm"
    label-width="100px"
    status-icon
    :model="ruleForm"
    :rules="rules"
  >
    <sec-form-item label="密码" prop="pass">
      <sec-input v-model="ruleForm.pass" type="password" autocomplete="off"></sec-input>
    </sec-form-item>
    <sec-form-item label="确认密码" prop="checkPass">
      <sec-input v-model="ruleForm.checkPass" type="password" autocomplete="off"></sec-input>
    </sec-form-item>
    <sec-form-item label="年龄" prop="age">
      <sec-input v-model.number="ruleForm.age"></sec-input>
    </sec-form-item>
    <sec-form-item>
      <sec-btn type="primary" @click="submitForm">提交</sec-btn>
      <sec-btn @click="resetForm">重置</sec-btn>
    </sec-form-item>
  </sec-form>
</template>

<script>
import { isInteger } from 'lodash';

export default {
  data() {
    const checkAge = (rule, value, callback) => {
      if (!value) {
        callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else if (value < 18) {
          callback(new Error('必须年满18岁'));
        } else {
          callback();
        }
      }, 1000);
    };
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致！'));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: '',
        checkPass: '',
        age: '',
      },
      rules: {
        pass: {
          validator: validatePass,
          trigger: 'blur',
        },
        checkPass: {
          validator: validatePass2,
          trigger: 'blur',
        },
        age: {
          validator: checkAge,
          trigger: 'blur',
        },
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate().then(() => {
        alert('submit');
      }).catch(() => {
        console.log('error submit!');
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
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