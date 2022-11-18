<template>
  <div>
    <sec-select v-model="value1" placeholder="请选择" multiple>
      <sec-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></sec-option>
    </sec-select>
    <sec-select
      v-model="value2"
      class="ml20"
      placeholder="请选择"
      multiple
      collapse-tags
    >
      <sec-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      ></sec-option>
    </sec-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕',
      }, {
        value: '选项2',
        label: '双皮奶',
      }, {
        value: '选项3',
        label: '蚵仔煎',
      }, {
        value: '选项4',
        label: '龙须面',
      }, {
        value: '选项5',
        label: '北京烤鸭',
      }],
      value1: [],
      value2: [],
    };
  },
};
</script>
