<template>
  <ButtonGroup class="sec-button-group">
    <slot></slot>
  </ButtonGroup>
</template>

<script>
import { ButtonGroup } from 'element-ui';

export default {
  name: 'ElButtonGroup',
  componentName: 'SecBtnGroup',
  inheritAttrs: false,
  components: {
    ButtonGroup,
  },
};
</script>
