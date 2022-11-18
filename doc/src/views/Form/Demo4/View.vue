<template>
  <sec-form
    ref="ruleForm"
    label-width="100px"
    :model="ruleForm"
    :rules="rules"
  >
    <sec-form-item label="活动名称" prop="name">
      <sec-input v-model="ruleForm.name"></sec-input>
    </sec-form-item>
    <sec-form-item label="活动区域" prop="region">
      <sec-select v-model="ruleForm.region" placeholder="请选择活动区域">
        <sec-option label="区域一" value="shanghai"></sec-option>
        <sec-option label="区域二" value="beijing"></sec-option>
      </sec-select>
    </sec-form-item>
    <sec-form-item label="活动时间" required>
      <sec-col :span="11">
        <sec-form-item prop="date1" class="mb0">
          <sec-date-picker
            v-model="ruleForm.date1"
            type="date"
            placeholder="选择日期"
            class="wf"
          ></sec-date-picker>
        </sec-form-item>
      </sec-col>
      <sec-col :span="2" class="tac">-</sec-col>
      <sec-col :span="11">
        <sec-form-item prop="date2" class="mb0">
          <sec-time-picker
            v-model="ruleForm.date2"
            placeholder="选择时间"
            class="wf"
          ></sec-time-picker>
        </sec-form-item>
      </sec-col>
    </sec-form-item>
    <sec-form-item label="即时配送" prop="delivery">
      <sec-switch v-model="ruleForm.delivery"></sec-switch>
    </sec-form-item>
    <sec-form-item label="活动性质" prop="type">
      <sec-checkbox-group v-model="ruleForm.type">
        <sec-checkbox label="美食/餐厅线上活动" name="type"></sec-checkbox>
        <sec-checkbox label="地推活动" name="type"></sec-checkbox>
        <sec-checkbox label="线下主题活动" name="type"></sec-checkbox>
        <sec-checkbox label="单纯品牌曝光" name="type"></sec-checkbox>
      </sec-checkbox-group>
    </sec-form-item>
    <sec-form-item label="特殊资源" prop="resource">
      <sec-radio-group v-model="ruleForm.resource">
        <sec-radio label="线上品牌商赞助"></sec-radio>
        <sec-radio label="线下场地免费"></sec-radio>
      </sec-radio-group>
    </sec-form-item>
    <sec-form-item label="活动形式" prop="desc">
      <sec-textarea v-model="ruleForm.desc"></sec-textarea>
    </sec-form-item>
    <sec-form-item>
      <sec-btn type="primary" @click="submitForm">立即创建</sec-btn>
      <sec-btn @click="resetForm">重置</sec-btn>
    </sec-form-item>
  </sec-form>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
      },
      rules: {
        name: [{
          required: true,
          message: '请输入活动名称',
          trigger: 'blur',
        }, {
          min: 3,
          max: 5,
          message: '长度在 3 到 5 个字符',
          trigger: 'blur',
        }],
        region: {
          required: true,
          message: '请选择活动区域',
          trigger: 'change',
        },
        date1: {
          type: 'date',
          required: true,
          message: '请选择日期',
          trigger: 'change',
        },
        date2: {
          type: 'date',
          required: true,
          message: '请选择日期',
          trigger: 'change',
        },
        type: {
          type: 'array',
          required: true,
          message: '请至少选择一个活动性质',
          trigger: 'change',
        },
        resource: {
          required: true,
          message: '请选择活动资源',
          trigger: 'change',
        },
        desc: {
          required: true,
          message: '请填写活动形式',
          trigger: 'blur',
        },
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate().then(() => {
        alert('submit!');
      }).catch(() => {
        console.log('error submit!!');
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
