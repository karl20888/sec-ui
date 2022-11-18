```vue
<template>
  <sec-select v-model="value" placeholder="请选择">
    <sec-option-group
      v-for="group in options"
      :key="group.label"
      :label="group.label"
    >
      <sec-option
        v-for="item in group.options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></sec-option>
    </sec-option-group>
  </sec-select>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        label: '热门城市',
        options: [{
          value: 'Shanghai',
          label: '上海',
        }, {
          value: 'Beijing',
          label: '北京',
        }],
      }, {
        label: '城市名',
        options: [{
          value: 'Chengdu',
          label: '成都',
        }, {
          value: 'Shenzhen',
          label: '深圳',
        }, {
          value: 'Guangzhou',
          label: '广州',
        }, {
          value: 'Dalian',
          label: '大连',
        }],
      }],
      value: '',
    };
  },
};
</script>
```