```vue
<template>
  <sec-cascader :props="props"></sec-cascader>
</template>

<script>
import { map } from 'lodash';

let id = 0;

export default {
  data() {
    return {
      props: {
        lazy: true,
        lazyLoad(node, resolve) {
          const { level } = node;
          setTimeout(() => {
            const nodes = map(Array.from({ length: level + 1 }), () => {
              id += 1;
              return {
                value: id,
                label: `选项${id}`,
                leaf: level >= 2,
              };
            });
            // 通过调用 resolve 将子节点数据返回，通知组件数据加载完成
            resolve(nodes);
          }, 1000);
        },
      },
    };
  },
};
</script>
```