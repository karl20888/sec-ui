<template>
  <div>
    <sec-row>
      <sec-checkbox v-model="checked1" label="备选项1" border size="large"></sec-checkbox>
      <sec-checkbox v-model="checked2" label="备选项2" border size="large"></sec-checkbox>
    </sec-row>
    <sec-row class="mt20">
      <sec-checkbox v-model="checked3" label="备选项1" border size="medium"></sec-checkbox>
      <sec-checkbox v-model="checked4" label="备选项4" border size="medium"></sec-checkbox>
    </sec-row>
    <sec-row class="mt20">
      <sec-checkbox-group v-model="checkboxGroup1">
        <sec-checkbox label="备选项1" border></sec-checkbox>
        <sec-checkbox label="备选项2" border disabled></sec-checkbox>
      </sec-checkbox-group>
    </sec-row>
    <sec-row class="mt20">
      <sec-checkbox-group v-model="checkboxGroup2" size="mini" disabled>
        <sec-checkbox label="备选项1" border></sec-checkbox>
        <sec-checkbox label="备选项2" border></sec-checkbox>
      </sec-checkbox-group>
    </sec-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: true,
      checkboxGroup1: [],
      checkboxGroup2: [],
    };
  },
};
</script>
