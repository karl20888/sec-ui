<template>
  <sec-select v-model="value" placeholder="请选择">
    <sec-option
      v-for="item in cities"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
      <span class="fl">{{ item.label }}</span>
      <span class="fr" style="color: #8492a6; font-size: 13px;">{{ item.value }}</span>
    </sec-option>
  </sec-select>
</template>

<script>
export default {
  data() {
    return {
      cities: [{
        value: 'Beijing',
        label: '北京',
      }, {
        value: 'Shanghai',
        label: '上海',
      }, {
        value: 'Nanjing',
        label: '南京',
      }, {
        value: 'Chengdu',
        label: '成都',
      }, {
        value: 'Shenzhen',
        label: '深圳',
      }, {
        value: 'Guangzhou',
        label: '广州',
      }],
      value: '',
    };
  },
};
</script>
