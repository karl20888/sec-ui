<template>
  <sec-tree
    :props="props"
    :load="loadNode"
    lazy
    show-checkbox
  ></sec-tree>
</template>

<script>
export default {
  data() {
    return {
      props: {
        label: 'name',
        children: 'zones',
        isLeaf: 'leaf',
      },
    };
  },
  methods: {
    loadNode(node, resolve) {
      if (node.level === 0) {
        resolve([{ name: 'region' }]);
      } else if (node.level > 1) {
        resolve([]);
      } else {
        setTimeout(() => {
          const data = [{
            name: 'leaf',
            leaf: true,
          }, {
            name: 'zone',
          }];

          resolve(data);
        }, 500);
      }
    },
  },
};
</script>
