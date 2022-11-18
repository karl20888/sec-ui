<template>
  <Container class="sec-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </Container>
</template>

<script>
import { some } from 'lodash';
import { Container } from 'element-ui';

export default {
  name: 'ElContainer',
  componentName: 'SecContainer',
  inheritAttrs: false,
  components: {
    Container,
  },
  props: {
    direction: {
      type: String,
      default: '',
    },
  },
  computed: {
    isVertical() {
      if (this.direction === 'vertical') {
        return true;
      }
      if (this.direction === 'horizontal') {
        return false;
      }
      return this.$slots && this.$slots.default
        ? some(this.$slots.default, (vnode) => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;
          return tag === 'sec-header' || tag === 'sec-footer';
        })
        : false;
    },
  },
};
</script>
