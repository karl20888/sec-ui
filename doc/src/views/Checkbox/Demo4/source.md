```vue
<template>
  <div>
    <sec-row>
      <sec-checkbox
        v-model="checkAll"
        :indeterminate="isIndeterminate"
        @change="handleCheckAllChange"
      >全选</sec-checkbox>
    </sec-row>
    <sec-row class="mt15">
      <sec-checkbox-group
        v-model="checkedCities"
        @change="handleCheckedCitiesChange"
      >
        <sec-checkbox
          v-for="city in cities"
          :key="city"
          :label="city"
        >{{ city }}</sec-checkbox>
      </sec-checkbox-group>
    </sec-row>
  </div>
</template>

<script>
const cityOptions = ['北京', '天津', '上海', '深圳'];

export default {
  data() {
    return {
      checkAll: false,
      checkedCities: ['北京', '天津'],
      cities: cityOptions,
      isIndeterminate: true,
    };
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : [];
      this.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value) {
      const checkedCount = value.length;
      this.checkAll = checkedCount === this.cities.length;
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
    },
  },
};
</script>
```