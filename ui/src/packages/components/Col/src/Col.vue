<template>
  <Col class="sec-col" v-bind="$attrs">
    <slot></slot>
  </Col>
</template>

<script>
import { Col } from 'element-ui';

export default {
  name: 'ElCol',
  componentName: 'SecCol',
  inheritAttrs: false,
  components: {
    Col,
  },
};
</script>
