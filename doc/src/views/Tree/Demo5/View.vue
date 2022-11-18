<template>
  <sec-tree
    show-checkbox
    node-key="id"
    :data="data"
    :default-expanded-key="[2, 3]"
    :default-checked-key="[5]"
  ></sec-tree>
</template>

<script>
export default {
  data() {
    return {
      data: [{
        id: 1,
        label: '一级 2',
        children: [{
          id: 3,
          label: '二级 2-1',
          children: [{
            id: 4,
            label: '三级 3-1-1',
          }, {
            id: 5,
            label: '三级 3-1-2',
            disabled: true,
          }],
        }, {
          id: 2,
          label: '二级 2-2',
          disabled: true,
          children: [{
            id: 6,
            label: '三级 3-2-1',
          }, {
            id: 7,
            label: '三级 3-2-2',
            disabled: true,
          }],
        }],
      }],
      defaultProps: {
        children: 'children',
        label: 'label',
      },
    };
  },
};
</script>
