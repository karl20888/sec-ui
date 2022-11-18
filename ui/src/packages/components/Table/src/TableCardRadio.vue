<script>
import { RadioGroup, RadioButton } from 'element-ui';

export default {
  inheritAttrs: false,
  components: {
    RadioGroup,
    RadioButton,
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    defaultCardType: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    cardType: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
  render(h) {
    const cardBtn = h(RadioButton, {
      attrs: {
        label: true,
      },
    }, [h('i', {
      class: 'sec-icon icon-folder',
    })]);
    const tableBtn = h(RadioButton, {
      attrs: {
        label: false,
      },
    }, [h('i', {
      class: 'sec-icon icon-list',
    })]);
    return h(RadioGroup, {
      attrs: {
        size: 'mini',
        value: this.cardType,
      },
      on: {
        input: (val) => {
          this.cardType = val;
        },
        change: (val) => {
          this.$emit('change', val);
        },
      },
    }, this.defaultCardType ? [cardBtn, tableBtn] : [tableBtn, cardBtn]);
  },
};
</script>
