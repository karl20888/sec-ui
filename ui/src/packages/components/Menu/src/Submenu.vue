<template>
  <div class="sec-submenu">
    <Submenu ref="submenu" v-bind="$attrs">
      <slot></slot>
      <template #title><slot name="title"></slot></template>
    </Submenu>
  </div>
</template>

<script>
import { Submenu } from 'element-ui';
import emitter from 'element-ui/src/mixins/emitter';

export default {
  name: 'ElSubmenu',
  componentName: 'SecSubmenu',
  inheritAttrs: false,
  mixins: [emitter],
  components: {
    Submenu,
  },
  methods: {
    handleMouseleave(deepDispatch = false) {
      const {
        index,
        rootMenu,
        hideTimeout,
        mouseInChild,
        appendToBody,
      } = this.$refs.submenu;
      let { timeout } = this.$refs.submenu;
      if (
        (
          rootMenu.menuTrigger === 'click'
          && rootMenu.mode === 'horizontal'
        ) || (
          !rootMenu.collapse
          && rootMenu.mode === 'vertical'
        )
      ) {
        return false;
      }
      this.dispatch('ElSubmenu', 'mouse-leave-child');
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (!mouseInChild) {
          rootMenu.closeMenu(index);
        }
      }, hideTimeout);
      if (appendToBody && deepDispatch) {
        if (this.$parent.$options.name === 'ElSubmenu') {
          this.$parent.handleMouseleave(true);
        }
      }
      return false;
    },
  },
};
</script>
