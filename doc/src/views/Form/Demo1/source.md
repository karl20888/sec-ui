```vue
<template>
  <sec-form label-width="80px">
    <sec-form-item label="活动名称">
      <sec-input v-model="form.name"></sec-input>
    </sec-form-item>
    <sec-form-item label="活动区域">
      <sec-select
        v-model="form.region"
        placeholder="请选择活动区域"
        class="wf"
      >
        <sec-option label="区域一" value="shanghai"></sec-option>
        <sec-option label="区域二" value="beijing"></sec-option>
      </sec-select>
    </sec-form-item>
    <sec-form-item label="活动时间">
      <sec-col :span="11">
        <sec-date-picker
          v-model="form.date1"
          placeholder="选择日期"
          class="wf"
        ></sec-date-picker>
      </sec-col>
      <sec-col class="tac" :span="2">-</sec-col>
      <sec-col :span="11">
        <sec-time-picker
          v-model="form.date2"
          placeholder="选择时间"
          class="wf"
        ></sec-time-picker>
      </sec-col>
    </sec-form-item>
    <sec-form-item label="即时配送">
      <sec-switch v-model="form.delivery"></sec-switch>
    </sec-form-item>
    <sec-form-item label="活动性质">
      <sec-checkbox-group v-model="form.type">
        <sec-checkbox label="美食/餐厅线上活动" name="type"></sec-checkbox>
        <sec-checkbox label="地推活动" name="type"></sec-checkbox>
        <sec-checkbox label="线下主题活动" name="type"></sec-checkbox>
        <sec-checkbox label="单纯品牌曝光" name="type"></sec-checkbox>
      </sec-checkbox-group>
    </sec-form-item>
    <sec-form-item label="特殊资源">
      <sec-radio-group v-model="form.resource">
        <sec-radio label="线上品牌商赞助"></sec-radio>
        <sec-radio label="线下场地免费"></sec-radio>
      </sec-radio-group>
    </sec-form-item>
    <sec-form-item label="活动形式">
      <sec-textarea v-model="form.desc"></sec-textarea>
    </sec-form-item>
    <sec-form-item>
      <sec-btn type="primary" @click="onSubmit">立即创建</sec-btn>
      <sec-btn>取消</sec-btn>
    </sec-form-item>
  </sec-form>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('submit!');
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