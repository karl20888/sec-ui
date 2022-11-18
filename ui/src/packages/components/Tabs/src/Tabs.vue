<script>
import { map } from 'lodash';
import { Tabs, TabPane } from 'element-ui';

export default {
  name: 'SecTabs',
  componentName: 'SecTabs',
  inheritAttrs: false,
  components: {
    Tabs,
    TabPane,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
    full: {
      type: Boolean,
      default: false,
    },
    tabs: {
      type: Array,
      default: () => [],
    },
    type: {
      type: String,
      default: '',
    },
    tabPosition: {
      type: String,
      default: 'top',
    },
    height: {
      type: String,
      default: '',
    },
  },
  computed: {
    active: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  methods: {
    onTabClick() {
      this.$nextTick(() => {
        this.$emit('change', this.active);
      });
    },
  },
  render(h) {
    const panes = map(this.tabs, (item) => h('TabPane', {
      attrs: {
        label: item.label,
        name: item.name,
        disabled: item.disabled,
      },
    }, this.$scopedSlots.label ? [h('template', { slot: 'label' }, this.$scopedSlots.label({
      label: item.label,
      name: item.name,
    }))] : null));
    if ((this.tabPosition === 'top' || this.tabPosition === 'bottom') && this.$slots.extra) {
      panes.unshift(h('div', {
        class: 'sec-tabs-extra',
      }, this.$slots.extra));
    }
    const height = this.tabPosition === 'left' || this.tabPosition === 'right' ? this.height : null;
    const tabs = h('Tabs', {
      style: { height },
      attrs: {
        value: this.active,
        ...this.$attrs,
        tabPosition: this.tabPosition,
        type: this.type,
      },
      on: {
        ...this.$listeners,
        'tab-click': this.onTabClick,
        input: (val) => {
          this.active = val;
        },
      },
    }, panes);
    const content = h('div', {
      class: 'sec-tabs-content',
    }, this.$slots.default);
    return h('div', {
      class: [
        'sec-tabs',
        this.full && 'sec-tabs-full',
        this.type === 'border-card' && 'sec-tabs-border-card',
        this.tabPosition === 'left' && 'is-left',
        this.tabPosition === 'right' && 'is-right',
      ],
      style: { height },
    }, this.tabPosition === 'bottom' ? [content, tabs] : [tabs, content]);
  },
};
</script>
