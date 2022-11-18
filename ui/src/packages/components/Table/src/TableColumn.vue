<template>
  <TableColumn v-bind="$attrs" :label="label" :prop="prop">
    <template v-if="$scopedSlots.default" #default="{ row, column, $index }">
      <slot :row="row" :column="column" :$index="$index"></slot>
    </template>
    <template v-if="$scopedSlots.header" #header="{ column, $index }">
      <slot name="header" :column="column" :$index="$index"></slot>
    </template>
  </TableColumn>
</template>

<script>
import { TableColumn } from 'element-ui';

export default {
  name: 'ElTableColumn',
  componentName: 'SecTableColumn',
  inheritAttrs: false,
  components: {
    TableColumn,
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    prop: {
      type: String,
      default: '',
    },
    alwaysShow: {
      type: Boolean,
      default: false,
    },
    initialHide: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
