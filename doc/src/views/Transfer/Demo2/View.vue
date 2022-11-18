<template>
  <sec-transfer
    v-model="value"
    filterable
    filter-placeholder="请输入城市拼音"
    :filter-method="filterMethod"
    :data="data"
  ></sec-transfer>
</template>

<script>
import { map, includes } from 'lodash';

export default {
  data() {
    const generateData = () => {
      const cities = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      return map(cities, (label, key) => ({
        label,
        key,
        pinyin: pinyin[key],
      }));
    };
    return {
      data: generateData(),
      value: [],
    };
  },
  methods: {
    filterMethod(query, item) {
      return includes(item.pinyin, query);
    },
  },
};
</script>
