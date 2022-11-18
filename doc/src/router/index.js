import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

Vue.use(VueRouter);

export const routes = [{
  path: '/login',
  name: 'Login',
  component: () => import('../views/Login/Index.vue'),
}, {
  path: '/',
  name: 'Index',
  component: () => import('../views/Index.vue'),
  meta: {
    useLayout: true,
  },
  children: [{
    path: 'components',
    name: 'Components',
    component: () => import('../views/EmptyView.vue'),
    meta: {
      title: '组件',
    },
    children: [{
      path: 'layout',
      name: 'Layout',
      component: () => import('../views/Layout/Index.vue'),
      meta: {
        title: 'Layout 布局',
      },
    }, {
      path: 'container',
      name: 'Container',
      component: () => import('../views/Container/Index.vue'),
      meta: {
        title: 'Container 布局容器',
      },
    }, {
      path: 'button',
      name: 'Button',
      component: () => import('../views/Button/Index.vue'),
      meta: {
        title: 'Button 按钮',
      },
    }, {
      path: 'link',
      name: 'Link',
      component: () => import('../views/Link/Index.vue'),
      meta: {
        title: 'Link 文字链接',
      },
    }, {
      path: 'radio',
      name: 'Radio',
      component: () => import('../views/Radio/Index.vue'),
      meta: {
        title: 'Radio 单选框',
      },
    }, {
      path: 'checkbox',
      name: 'Checkbox',
      component: () => import('../views/Checkbox/Index.vue'),
      meta: {
        title: 'Checkbox 多选框',
      },
    }, {
      path: 'input',
      name: 'Input',
      component: () => import('../views/Input/Index.vue'),
      meta: {
        title: 'Input 输入框',
      },
    }, {
      path: 'input-number',
      name: 'InputNumber',
      component: () => import('../views/InputNumber/Index.vue'),
      meta: {
        title: 'InputNumber 计数器',
      },
    }, {
      path: 'select',
      name: 'Select',
      component: () => import('../views/Select/Index.vue'),
      meta: {
        title: 'Select 选择器',
      },
    }, {
      path: 'cascader',
      name: 'Cascader',
      component: () => import('../views/Cascader/Index.vue'),
      meta: {
        title: 'Cascader 级联选择器',
      },
    }, {
      path: 'switch',
      name: 'Switch',
      component: () => import('../views/Switch/Index.vue'),
      meta: {
        title: 'Switch 开关',
      },
    }, {
      path: 'slider',
      name: 'Slider',
      component: () => import('../views/Slider/Index.vue'),
      meta: {
        title: 'Slider 滑块',
      },
    }, {
      path: 'time-picker',
      name: 'TimePicker',
      component: () => import('../views/TimePicker/Index.vue'),
      meta: {
        title: 'TimePicker 时间选择器',
      },
    }, {
      path: 'date-picker',
      name: 'DatePicker',
      component: () => import('../views/DatePicker/Index.vue'),
      meta: {
        title: 'DatePicker 日期选择器',
      },
    }, {
      path: 'datetime-picker',
      name: 'DateTimePicker',
      component: () => import('../views/DateTimePicker/Index.vue'),
      meta: {
        title: 'DateTimePicker 日期时间选择器',
      },
    }, {
      path: 'upload',
      name: 'Upload',
      component: () => import('../views/Upload/Index.vue'),
      meta: {
        title: 'Upload 上传',
      },
    }, {
      path: 'rate',
      name: 'Rate',
      component: () => import('../views/Rate/Index.vue'),
      meta: {
        title: 'Rate 评分',
      },
    }, {
      path: 'color-picker',
      name: 'ColorPicker',
      component: () => import('../views/ColorPicker/Index.vue'),
      meta: {
        title: 'ColorPicker 颜色选择器',
      },
    }, {
      path: 'transfer',
      name: 'Transfer',
      component: () => import('../views/Transfer/Index.vue'),
      meta: {
        title: 'Transfer 穿梭框',
      },
    }, {
      path: 'form',
      name: 'Form',
      component: () => import('../views/Form/Index.vue'),
      meta: {
        title: 'Form 表单',
      },
    }, {
      path: 'table',
      name: 'Table',
      component: () => import('../views/Table/Index.vue'),
      meta: {
        title: 'Table 表格',
      },
    }, {
      path: 'tag',
      name: 'Tag',
      component: () => import('../views/Tag/Index.vue'),
      meta: {
        title: 'Tag 标签',
      },
    }, {
      path: 'progress',
      name: 'Progress',
      component: () => import('../views/Progress/Index.vue'),
      meta: {
        title: 'Progress 进度条',
      },
    }, {
      path: 'tree',
      name: 'Tree',
      component: () => import('../views/Tree/Index.vue'),
      meta: {
        title: 'Tree 树形控件',
      },
    }, {
      path: 'pager',
      name: 'Pager',
      component: () => import('../views/Pager/Index.vue'),
      meta: {
        title: 'Pager 分页',
      },
    }, {
      path: 'badge',
      name: 'Badge',
      component: () => import('../views/Badge/Index.vue'),
      meta: {
        title: 'Badge 标记',
      },
    }, {
      path: 'avatar',
      name: 'Avatar',
      component: () => import('../views/Avatar/Index.vue'),
      meta: {
        title: 'Avatar 头像',
      },
    }, {
      path: 'skeleton',
      name: 'Skeleton',
      component: () => import('../views/Skeleton/Index.vue'),
      meta: {
        title: 'Skeleton 骨架屏',
      },
    }, {
      path: 'empty',
      name: 'Empty',
      component: () => import('../views/Empty/Index.vue'),
      meta: {
        title: 'Empty 空状态',
      },
    }, {
      path: 'descriptions',
      name: 'Descriptions',
      component: () => import('../views/Descriptions/Index.vue'),
      meta: {
        title: 'Descriptions 描述列表',
      },
    }, {
      path: 'result',
      name: 'Result',
      component: () => import('../views/Result/Index.vue'),
      meta: {
        title: 'Result 结果',
      },
    }, {
      path: 'alert',
      name: 'Alert',
      component: () => import('../views/Alert/Index.vue'),
      meta: {
        title: 'Alert 警告',
      },
    }, {
      path: 'loading',
      name: 'Loading',
      component: () => import('../views/Loading/Index.vue'),
      meta: {
        title: 'Loading 加载',
      },
    }, {
      path: 'message',
      name: 'Message',
      component: () => import('../views/Message/Index.vue'),
      meta: {
        title: 'Message 消息提示',
      },
    }, {
      path: 'message-box',
      name: 'MessageBox',
      component: () => import('../views/MessageBox/Index.vue'),
      meta: {
        title: 'MessageBox 弹框',
      },
    }, {
      path: 'notification',
      name: 'Notification',
      component: () => import('../views/Notification/Index.vue'),
      meta: {
        title: 'Notification 通知',
      },
    }, {
      path: 'menu',
      name: 'Menu',
      component: () => import('../views/Menu/Index.vue'),
      meta: {
        title: 'NavMenu 导航菜单',
      },
    }, {
      path: 'tabs',
      name: 'Tabs',
      component: () => import('../views/Tabs/Index.vue'),
      meta: {
        title: 'Tabs 标签页',
      },
    }, {
      path: 'breadcrumb',
      name: 'Breadcrumb',
      component: () => import('../views/Breadcrumb/Index.vue'),
      meta: {
        title: 'Breadcrumb 面包屑',
      },
    }, {
      path: 'page-header',
      name: 'PageHeader',
      component: () => import('../views/PageHeader/Index.vue'),
      meta: {
        title: 'PageHeader 页头',
      },
    }, {
      path: 'dropdown',
      name: 'Dropdown',
      component: () => import('../views/Dropdown/Index.vue'),
      meta: {
        title: 'Dropdown 下拉菜单',
      },
    }, {
      path: 'steps',
      name: 'Steps',
      component: () => import('../views/Steps/Index.vue'),
      meta: {
        title: 'Steps 步骤条',
      },
    }, {
      path: 'dialog',
      name: 'Dialog',
      component: () => import('../views/Dialog/Index.vue'),
      meta: {
        title: 'Dialog 对话框',
      },
    }, {
      path: 'tooltip',
      name: 'Tooltip',
      component: () => import('../views/Tooltip/Index.vue'),
      meta: {
        title: 'Tooltip 文字提示',
      },
    }, {
      path: 'popover',
      name: 'Popover',
      component: () => import('../views/Popover/Index.vue'),
      meta: {
        title: 'Popover 弹出框',
      },
    }, {
      path: 'popconfirm',
      name: 'Popconfirm',
      component: () => import('../views/Popconfirm/Index.vue'),
      meta: {
        title: 'Popconfirm 气泡确认框',
      },
    }, {
      path: 'card',
      name: 'Card',
      component: () => import('../views/Card/Index.vue'),
      meta: {
        title: 'Card 卡片',
      },
    }, {
      path: 'carousel',
      name: 'Carousel',
      component: () => import('../views/Carousel/Index.vue'),
      meta: {
        title: 'Carousel 走马灯',
      },
    }, {
      path: 'collapse',
      name: 'Collapse',
      component: () => import('../views/Collapse/Index.vue'),
      meta: {
        title: 'Collapse 折叠面板',
      },
    }, {
      path: 'timeline',
      name: 'Timeline',
      component: () => import('../views/Timeline/Index.vue'),
      meta: {
        title: 'Timeline 时间线',
      },
    }, {
      path: 'divider',
      name: 'Divider',
      component: () => import('../views/Divider/Index.vue'),
      meta: {
        title: 'Divider 分割线',
      },
    }, {
      path: 'calendar',
      name: 'Calendar',
      component: () => import('../views/Calendar/Index.vue'),
      meta: {
        title: 'Calendar 日历',
      },
    }, {
      path: 'image',
      name: 'Image',
      component: () => import('../views/Image/Index.vue'),
      meta: {
        title: 'Image 图片',
      },
    }, {
      path: 'backtop',
      name: 'Backtop',
      component: () => import('../views/Backtop/Index.vue'),
      meta: {
        title: 'Backtop 回到顶部',
      },
    }, {
      path: 'infinite-scroll',
      name: 'InfiniteScroll',
      component: () => import('../views/InfiniteScroll/Index.vue'),
      meta: {
        title: 'InfiniteScroll 无限滚动',
      },
    }, {
      path: 'drawer',
      name: 'Drawer',
      component: () => import('../views/Drawer/Index.vue'),
      meta: {
        title: 'Drawer 抽屉',
      },
    }],
  }, {
    path: 'extend',
    name: 'Extend',
    component: () => import('../views/EmptyView.vue'),
    meta: {
      title: '扩展',
    },
    children: [{
      path: 'where',
      name: 'Where',
      component: () => import('../views/Where/Index.vue'),
      meta: {
        title: 'Where 查询条件',
      },
    }, {
      path: 'test',
      name: 'Test',
      meta: {
        title: '测试链接',
        href: 'https://www.baidu.com/',
        target: '_blank',
      },
    }],
  }],
}];

const router = new VueRouter({
  routes,
});

export default router;
