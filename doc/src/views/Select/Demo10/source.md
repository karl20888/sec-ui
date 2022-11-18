```vue
<template>
  <sec-select
    v-model="value"
    placeholder="请选择文章标签"
    multiple
    filterable
    allow-create
    default-first-option
  >
    <sec-option
      v-for="item in options"
      :key="item.value"
      :lable="item.label"
      :value="item.value"
    ></sec-option>
  </sec-select>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: 'HTML',
        label: 'HTML',
      }, {
        value: 'CSS',
        label: 'CSS',
      }, {
        value: 'JavaScript',
        label: 'JavaScript',
      }],
      value: [],
    };
  },
};
</script>
```