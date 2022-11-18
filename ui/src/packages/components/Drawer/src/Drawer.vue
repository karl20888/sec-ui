<template>
  <Drawer
    ref="drawer"
    class="sec-drawer"
    v-bind="$attrs"
    v-on="$listeners"
    :visible.sync="isVisible"
    :title="title"
    :size="drawerSize"
    :direction="direction"
    :append-to-body="appendToBody"
    :with-header="withHeader || !!title || !!$scopedSlots.title"
    :wrapper-closable="wrapperClosable && !beforeCloseTip"
    :before-close="beforeCloseHandle"
    @open="onOpen"
    @opened="onOpened"
    @close="onClose"
  >
    <template v-if="$scopedSlots.title" #title>
      <div class="sec-drawer-title">
        <slot name="title"></slot>
      </div>
    </template>
    <div class="sec-drawer-main">
      <div v-if="fullContent" class="sec-drawer-content is-full">
        <slot></slot>
      </div>
      <Scrollbar v-else class="sec-drawer-scrollbar">
        <div
          class="sec-drawer-content"
          :style="{ padding: contentPadding }"
        >
          <slot></slot>
        </div>
      </Scrollbar>
      <div v-if="$scopedSlots.footer" class="sec-drawer-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </Drawer>
</template>

<script>
import { Drawer, MessageBox, Scrollbar } from 'element-ui';
import {
  isFunction,
  isNumber,
  endsWith,
} from 'lodash';

export default {
  name: 'ElDrawer',
  componentName: 'SecDrawer',
  inheritAttrs: false,
  components: {
    Drawer,
    Scrollbar,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    size: {
      type: [String, Number],
      default: 'mini',
    },
    direction: {
      type: String,
      default: 'rtl',
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
    withHeader: {
      type: Boolean,
      default: true,
    },
    contentPadding: {
      type: String,
      default: '10px',
    },
    wrapperClosable: {
      type: Boolean,
      default: true,
    },
    beforeClose: {
      type: Function,
    },
    beforeCloseTip: {
      type: [Boolean, Function],
      default: false,
    },
    beforeCloseTipTitle: {
      type: String,
      default: '提示',
    },
    beforeCloseTipMessage: {
      type: String,
      default: '保存变更？',
    },
    beforeCloseTipConfirm: {
      type: String,
      default: '保存',
    },
    beforeCloseTipCancel: {
      type: String,
      default: '不保存',
    },
    fullContent: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isVisible: false,
      childDrawerSize: 0,
      childDrawerDirection: null,
    };
  },
  computed: {
    beforeCloseHandle() {
      if (this.beforeClose) {
        return this.beforeClose;
      }
      if (this.beforeCloseTip) {
        return this.beforeCloseConfirm;
      }
      return null;
    },
    drawerSize() {
      let drawerSize = '';
      if (this.size === 'mini') {
        drawerSize = '700px';
      } else if (this.size === 'small') {
        drawerSize = '850px';
      } else if (this.size === 'medium') {
        drawerSize = '1024px';
      } else if (isNumber(this.size)) {
        drawerSize = `${this.size}px`;
      } else if (endsWith(this.size, 'px') || endsWith(this.size, '%')) {
        drawerSize = this.size;
      } else {
        drawerSize = 'auto';
      }
      if (
        this.direction === this.childDrawerDirection
        && this.childDrawerSize
        && this.getDrawerSize() < this.childDrawerSize + 100
      ) {
        return `${this.childDrawerSize + 100}px`;
      }
      return drawerSize;
    },
  },
  methods: {
    closeDrawer() {
      this.$refs.drawer.closeDrawer();
    },
    open() {
      this.isVisible = true;
    },
    close() {
      this.isVisible = false;
    },
    onOpen() {
      this.$emit('update:visible', true);
    },
    onOpened() {
      this.updateParentDrawerSize(this.getDrawerSize(), this.direction);
    },
    onClose() {
      this.updateParentDrawerSize(0);
      this.$emit('update:visible', false);
    },
    beforeCloseConfirm(done) {
      MessageBox({
        type: 'warning',
        title: this.beforeCloseTipTitle,
        message: this.beforeCloseTipMessage,
        showCancelButton: true,
        distinguishCancelAndClose: true,
        cancelButtonText: this.beforeCloseTipCancel,
        confirmButtonText: this.beforeCloseTipConfirm,
      }).then(() => {
        if (isFunction(this.beforeCloseTip)) {
          this.beforeCloseTip(done);
        } else {
          this.$emit('confirmClose');
          done();
        }
      }).catch((action) => {
        if (action === 'cancel') {
          done();
        }
      });
    },
    getDrawerSize() {
      const drawerEl = this.$refs.drawer?.$el?.querySelectorAll('.el-drawer');
      if (drawerEl && drawerEl.length) {
        if (this.direction === 'rtl' || this.direction === 'ltr') {
          return drawerEl[0].clientWidth;
        }
        return drawerEl[0].clientHeight;
      }
      return 0;
    },
    setChildSize(size, direction) {
      if (size) {
        this.childDrawerSize = size;
        this.childDrawerDirection = direction;
      } else {
        this.childDrawerSize = 0;
        this.childDrawerDirection = null;
        this.updateParentDrawerSize(false);
      }
      this.$nextTick(() => {
        this.updateParentDrawerSize(true);
      });
    },
    updateParentDrawerSize(isOpen) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;
      while (parent && (!name || name !== 'SecDrawer')) {
        parent = parent.$parent;
        if (parent) {
          name = parent.$options.componentName;
        }
      }
      if (parent) {
        if (isOpen) {
          parent.setChildSize(this.getDrawerSize(), this.direction);
        } else {
          parent.setChildSize(0, null);
        }
      }
    },
  },
  watch: {
    visible: {
      immediate: true,
      handler(val) {
        this.isVisible = val;
      },
    },
  },
};
</script>
