<template>
  <Row class="sec-row" v-bind="$attrs">
    <slot></slot>
  </Row>
</template>

<script>
import { Row } from 'element-ui';

export default {
  name: 'ElRow',
  componentName: 'SecRow',
  inheritAttrs: false,
  components: {
    Row,
  },
};
</script>
