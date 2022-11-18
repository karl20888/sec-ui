<template>
  <sec-where v-model="where" :props="props">
    <template #default="{ row }">
      <sec-form inline>
        <sec-form-item>
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
  </sec-where>
</template>

<script>
export default {
  data() {
    return {
      where: [],
      props: {
        field: '',
        condition: '',
        value: '',
      },
    };
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
