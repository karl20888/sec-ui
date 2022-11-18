```vue
<template>
  <sec-checkbox-group
    v-model="checkedCities"
    :min="1"
    :max="2"
  >
    <sec-checkbox
      v-for="city in cities"
      :key="city"
      :label="city"
    >{{ city }}</sec-checkbox>
  </sec-checkbox-group>
</template>

<script>
const cityOptions = ['北京', '天津', '上海', '深圳'];

export default {
  data() {
    return {
      checkedCities: ['北京', '天津'],
      cities: cityOptions,
    };
  },
};
</script>
```