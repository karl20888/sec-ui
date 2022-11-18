<script>
export default {
  props: {
    meta: {
      type: Object,
      default: () => ({
        title: '',
      }),
    },
  },
  render(h) {
    const {
      href,
      icon,
      title,
      target,
    } = this.meta;
    const tag = href ? 'a' : 'div';
    const attrs = {
      class: 'sec-layout-menu-title',
    };
    if (href) {
      attrs.domProps = {};
      attrs.domProps.href = href;
      if (target) {
        attrs.domProps.target = target;
      }
    }
    const children = [];
    if (icon) {
      children.push(h('i', {
        class: icon,
      }));
    }
    children.push(h('strong', null, title));
    return h(tag, attrs, children);
  },
};
</script>
