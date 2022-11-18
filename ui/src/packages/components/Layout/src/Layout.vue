<template>
  <sec-container class="sec-layout-container">
    <sec-aside
      v-if="aside"
      class="sec-layout-aside"
      :class="{
        'is-collapsed': isCollapse,
      }"
      :width="asideSize"
    >
      <slot name="brand">
        <a
          class="sec-layout-brand"
          :href="brandLink"
          :style="{
            height: headerHeight,
          }"
        >
          <img
            :src="logo"
            :alt="brand"
            class="sec-layout-logo"
          >
          <strong class="sec-layout-title">{{ brand }}</strong>
        </a>
      </slot>
      <Scrollbar class="sec-layout-scrollbar">
        <Menu
          v-if="layoutRouter"
          mode="vertical"
          class="sec-layout-menu"
          router
          :unique-opened="uniqueOpened"
          :default-active="activeMenu"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <MenuItem
            v-for="item in layoutRouter.children"
            :key="item.name"
            :menu="item"
            :path="layoutRouter.path"
          ></MenuItem>
        </Menu>
      </Scrollbar>
      <div class="sec-layout-control">
        <div class="sec-layout-aside-extra">
          <slot name="asideExtra">
            <Button
              type="text"
              :style="{
                padding: '0 10px',
              }"
              @click="$emit('more')"
            >更多</Button>
          </slot>
        </div>
        <sec-icon
          name="shousuo"
          class="sec-layout-collapse"
          @click="isCollapse = !isCollapse"
        ></sec-icon>
      </div>
    </sec-aside>
    <sec-container>
      <sec-header
        class="sec-layout-header"
        :height="headerHeight"
      >
        <slot name="header">
          <Breadcrumb class="sec-layout-breadcrumb">
            <BreadcrumbItem
              v-for="item in breadcrumb"
              :key="item.path"
              :to="item.path"
            >{{ item.meta.title }}</BreadcrumbItem>
          </Breadcrumb>
        </slot>
        <div class="sec-layout-header-extra">
          <slot name="headerExtra">
            <Button type="primary" @click="$emit('exit')">退出</Button>
          </slot>
        </div>
      </sec-header>
      <sec-main ref="content" class="sec-layout-main">
        <slot></slot>
      </sec-main>
    </sec-container>
  </sec-container>
</template>

<script>
import {
  find,
  filter,
  last,
  nth,
} from 'lodash';
import {
  Scrollbar,
  Menu,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'element-ui';
import MenuItem from './MenuItem.vue';
import logo from '@/assets/logo.png';

export default {
  name: 'SecLayout',
  componentName: 'SecLayout',
  inheritAttrs: false,
  components: {
    MenuItem,
    Scrollbar,
    Menu,
    Button,
    Breadcrumb,
    BreadcrumbItem,
  },
  props: {
    aside: {
      type: Boolean,
      default: true,
    },
    asideWidth: {
      type: String,
      default: '200px',
    },
    asideCollapseWidth: {
      type: String,
      default: '54px',
    },
    headerHeight: {
      type: String,
      default: '50px',
    },
    logo: {
      type: String,
      default: logo,
    },
    brand: {
      type: String,
      default: '后台管理系统',
    },
    brandLink: {
      type: String,
      default: '/',
    },
    router: {
      type: Object,
      default: () => ({
        options: {
          routes: [],
        },
      }),
    },
    menu: {
      type: Array,
      default: () => [],
    },
    route: {
      type: Object,
      default: () => ({
        path: '',
      }),
    },
    uniqueOpened: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isCollapse: false,
    };
  },
  computed: {
    asideSize() {
      if (this.isCollapse) {
        return this.asideCollapseWidth;
      }
      return this.asideWidth;
    },
    layoutRouter() {
      const finded = find(this.router.options.routes, 'meta.useLayout');
      if (finded) {
        if (this.menu.length) {
          finded.children = this.menu;
        }
        return finded;
      }
      return null;
    },
    activeMenu() {
      const { meta } = last(this.route.matched);
      if (meta.hide || !meta.title) {
        const p = nth(this.route.matched, -2);
        if (p) {
          return p.path;
        }
        return '/';
      }
      return this.route.path;
    },
    breadcrumb() {
      return filter(this.route.matched, 'meta.title');
    },
  },
  watch: {
    route() {
      this.$refs.content.$el.scrollTo(0, 0);
    },
  },
};
</script>
