```vue
<template>
  <sec-transfer v-model="value" :data="data"></sec-transfer>
</template>

<script>
import { times } from 'lodash';

export default {
  data() {
    return {
      data: times(15, (i) => ({
        key: i,
        label: `备选项 ${i + 1}`,
        disabled: (i + 1) % 4 === 0,
      })),
      value: [0, 3],
    };
  },
};
</script>
```