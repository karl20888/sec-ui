<template>
  <sec-login :banner="banner">
    <sec-form class="sec-login-form" :model="form" :rules="rules">
      <sec-form-item prop="username">
        <sec-input
          v-model="form.username"
          @blur="form.username = trim(form.username)"
        >
          <template #prefix>
            <sec-icon name="zhanghao"></sec-icon>
          </template>
        </sec-input>
      </sec-form-item>
      <sec-form-item prop="password">
        <sec-input
          v-model="form.password"
          @blur="form.password = trim(form.password)"
        >
          <template #prefix>
            <sec-icon name="mima"></sec-icon>
          </template>
        </sec-input>
      </sec-form-item>
      <sec-form-item prop="verifyCode">
        <div class="sec-login-line">
          <sec-input
            v-model="form.verifyCode"
            @blur="form.verifyCode = trim(form.verifyCode)"
          >
            <template #prefix>
              <sec-icon name="yanzhengma"></sec-icon>
            </template>
          </sec-input>
          <img
            :src="codeImg"
            alt="验证码"
            @click="reloadVerifyCode"
            @keydown="reloadVerifyCode"
          >
          <sec-icon name="refresh" class="sec-login-refresh" @click="reloadVerifyCode"></sec-icon>
        </div>
      </sec-form-item>
    </sec-form>
    <sec-btn type="primary" class="wf mt20">登录</sec-btn>
  </sec-login>
</template>

<script>
import { trim } from 'lodash';

export default {
  data() {
    return {
      banner: [{
        src: '/img/banner/1.png',
        label: '第一张Banner图',
      }, {
        src: '/img/banner/2.png',
        label: '第二张Banner图',
      }],
      form: {
        username: 'sysadmin',
        password: 'sysadmin1234',
      },
      rules: {
        username: {
          required: true,
          message: '用户名不能为空',
        },
        password: {
          required: true,
          message: '密码不能为空',
        },
        verifyCode: {
          required: true,
          message: '验证码不能为空',
        },
      },
      codeImg: '',
    };
  },
  mounted() {
    this.reloadVerifyCode();
  },
  methods: {
    trim,
    reloadVerifyCode() {
      this.$axios.get('/verifyCode/init').then((data) => {
        this.codeImg = `data:image/PNG;base64,${data}`;
      });
    },
  },
};
</script>
