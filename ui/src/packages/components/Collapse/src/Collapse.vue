<template>
  <Collapse class="sec-collapse" v-bind="$attrs" v-on="$listeners">
    <slot></slot>
  </Collapse>
</template>

<script>
import { Collapse } from 'element-ui';

export default {
  name: 'ElCollapse',
  componentName: 'SecCollapse',
  inheritAttrs: false,
  components: {
    Collapse,
  },
};
</script>
