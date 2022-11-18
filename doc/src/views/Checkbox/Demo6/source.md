```vue
<template>
  <div>
    <sec-row>
      <sec-checkbox-group v-model="checkboxGroup1" size="large">
        <sec-checkbox-button
          v-for="city in cities"
          :key="city"
          :label="city"
        >{{ city }}</sec-checkbox-button>
      </sec-checkbox-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-checkbox-group v-model="checkboxGroup2" size="medium">
        <sec-checkbox-button
          v-for="city in cities"
          :key="city"
          :label="city"
        >{{ city }}</sec-checkbox-button>
      </sec-checkbox-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-checkbox-group v-model="checkboxGroup3">
        <sec-checkbox-button
          v-for="city in cities"
          :key="city"
          :label="city"
          :disabled="city === '天津'"
        >{{ city }}</sec-checkbox-button>
      </sec-checkbox-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-checkbox-group v-model="checkboxGroup4" size="mini" disabled>
        <sec-checkbox-button
          v-for="city in cities"
          :key="city"
          :label="city"
        >{{ city }}</sec-checkbox-button>
      </sec-checkbox-group>
    </sec-row>
  </div>
</template>

<script>
const cityOptions = ['北京', '天津', '上海', '深圳'];

export default {
  data() {
    return {
      checkboxGroup1: ['北京'],
      checkboxGroup2: ['北京'],
      checkboxGroup3: ['北京'],
      checkboxGroup4: ['北京'],
      cities: cityOptions,
    };
  },
};
</script>
```