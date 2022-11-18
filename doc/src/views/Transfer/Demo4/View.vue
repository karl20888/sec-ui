<template>
  <sec-transfer
    v-model="value"
    :props="{
      key: 'value',
      label: 'desc',
    }"
    :data="data"
  ></sec-transfer>
</template>

<script>
import { times } from 'lodash';

export default {
  data() {
    return {
      data: times(15, (i) => {
        const value = i + 1;
        return {
          value,
          desc: `备选项 ${value}`,
          disabled: value % 4 === 0,
        };
      }),
      value: [],
    };
  },
};
</script>
