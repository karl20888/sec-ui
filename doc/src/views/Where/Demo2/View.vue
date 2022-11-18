<template>
  <div>
    <sec-where-group ref="whereGroup" v-model="where" :props="props">
      <template #default="{ row }">
        <sec-form inline :model="row" :rules="rules">
          <sec-form-item prop="field">
            <sec-select v-model="row.field" placeholder="请选择字段"></sec-select>
          </sec-form-item>
          <sec-form-item>
            <sec-select v-model="row.condition" placeholder="请选择条件"></sec-select>
          </sec-form-item>
          <sec-form-item>
            <sec-input v-model="row.value" placeholder="请输入阈值"></sec-input>
          </sec-form-item>
        </sec-form>
      </template>
      <template #control="{ row }">
        <sec-btn type="text" @click="test(row)">测试</sec-btn>
      </template>
    </sec-where-group>
    <sec-btn @click="test()">测试</sec-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      where: {},
      props: {
        field: '',
        condition: '',
        value: '',
      },
      rules: {
        field: {
          required: true,
          message: '空',
        },
      },
    };
  },
  methods: {
    test(row) {
      console.log(row);
      this.$refs.whereGroup.validate();
    },
  },
  watch: {
    where: {
      deep: true,
      handler(val) {
        console.log(val);
      },
    },
  },
};
</script>
