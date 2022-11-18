<template>
  <div>
    <Submenu
      v-if="children.length"
      popper-class="sec-layout-popmenu"
      :index="`${basePath}${menu.path}`"
    >
      <template #title>
        <MenuTitle :meta="menu.meta"></MenuTitle>
      </template>
      <sec-menu-item
        v-for="item in children"
        :key="item.name"
        :menu="item"
        :path="`${basePath}${menu.path}`"
      ></sec-menu-item>
    </Submenu>
    <MenuItem
      v-else
      :index="`${basePath}${menu.path}`"
      :class="{ 'is-active': isActive }"
    >
      <MenuTitle :meta="menu.meta"></MenuTitle>
    </MenuItem>
  </div>
</template>

<script>
import { endsWith, filter, nth } from 'lodash';
import { Submenu, MenuItem } from 'element-ui';
import MenuTitle from './MenuTitle.vue';

export default {
  name: 'SecMenuItem',
  components: {
    MenuTitle,
    Submenu,
    MenuItem,
  },
  props: {
    menu: {
      type: Object,
      default: () => ({
        name: '',
        meta: { title: '' },
        path: '',
      }),
    },
    path: {
      type: String,
      default: '/',
    },
  },
  computed: {
    basePath() {
      if (endsWith(this.path, '/')) {
        return this.path;
      }
      return `${this.path}/`;
    },
    children() {
      if (this.menu.children && this.menu.children.length) {
        return filter(this.menu.children, ({ meta }) => meta && meta.title && !meta.hide);
      }
      return [];
    },
    isActive() {
      if (this.children.length === 0 && this.menu.children && this.menu.children.length) {
        const pr = nth(this.$route.matched, -2);
        return pr && this.menu.name === pr.name;
      }
      return false;
    },
  },
};
</script>
