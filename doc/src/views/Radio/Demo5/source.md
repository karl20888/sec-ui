```vue
<template>
  <div>
    <sec-row>
      <sec-radio v-model="radio1" label="1" border>备选项1</sec-radio>
      <sec-radio v-model="radio1" label="2" border>备选项2</sec-radio>
    </sec-row>
    <sec-row class="mt20">
      <sec-radio v-model="radio2" label="1" border size="medium">备选项1</sec-radio>
      <sec-radio v-model="radio2" label="2" border size="medium">备选项2</sec-radio>
    </sec-row>
    <sec-row class="mt20">
      <sec-radio-group v-model="radio3">
        <sec-radio label="1" border>备选项1</sec-radio>
        <sec-radio label="2" border disabled>备选项2</sec-radio>
      </sec-radio-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-radio-group v-model="radio4" size="mini" disabled>
        <sec-radio label="1" border>备选项1</sec-radio>
        <sec-radio label="2" border>备选项2</sec-radio>
      </sec-radio-group>
    </sec-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: '1',
      radio2: '1',
      radio3: '1',
      radio4: '1',
    };
  },
};
</script>
```