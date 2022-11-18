```vue
<template>
  <div>
    <span class="demonstration">正常左对齐</span>
    <sec-form label-width="80px" extra-width="100px">
      <sec-form-item label="用户名">
        <sec-input v-model="form.username"></sec-input>
        <template #extra>
          <sec-btn type="text">查看</sec-btn>
        </template>
      </sec-form-item>
      <sec-form-item label="密码">
        <sec-input v-model="form.password"></sec-input>
        <template #extra>
          <sec-btn type="text">查看</sec-btn>
        </template>
      </sec-form-item>
    </sec-form>
    <span class="demonstration mt20">其他对齐方式以及单独设置扩展区域宽度</span>
    <sec-form label-width="80px" extra-width="100px" extra-align="right">
      <sec-form-item label="姓名" extra-align="center">
        <sec-input v-model="form.name"></sec-input>
        <template #extra>
          <sec-btn type="primary">查看</sec-btn>
        </template>
      </sec-form-item>
      <sec-form-item label="手机号" extra-width="200px" extra-align="left">
        <sec-input v-model="form.mobile"></sec-input>
        <template #extra>
          <sec-btn type="primary" class="ml10">查看</sec-btn>
        </template>
      </sec-form-item>
      <sec-form-item label="地址">
        <sec-input v-model="form.address"></sec-input>
        <template #extra>
          <sec-btn type="primary">查看</sec-btn>
        </template>
      </sec-form-item>
      <sec-form-item label=""></sec-form-item>
    </sec-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        name: '',
        mobile: '',
        address: '',
      },
    };
  },
};
</script>

<style lang="less" scoped>
.demonstration {
  display: block;
  margin-bottom: 20px;
  color: #8492a6;
}

.sec-form {
  width: 500px;
  padding: 20px;
  border: 1px solid #ddd;
}
</style>
```