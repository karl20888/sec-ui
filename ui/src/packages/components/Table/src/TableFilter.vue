<script>
import { take, drop } from 'lodash';
import TableFilterMore from './TableFilterMore.vue';

export default {
  componentName: 'SecTableFilter',
  components: {
    TableFilterMore,
  },
  props: {
    slots: {
      type: Array,
      default: () => [],
    },
    max: {
      type: Number,
      default: 3,
    },
    append: {
      type: Boolean,
      default: true,
    },
    moreOptions: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.$on('sec.table.filter.change', () => {
      this.$emit('change');
    });
  },
  render(h) {
    let childrens = [];
    let moreSlots = [];
    if (this.max) {
      childrens = take(this.slots, this.max);
      moreSlots = drop(this.slots, this.max);
    } else {
      childrens = this.slots;
    }
    if (moreSlots.length) {
      childrens.push(h(TableFilterMore, {
        attrs: {
          ...this.moreOptions,
        },
      }, moreSlots));
    }
    let append = [];
    if (this.append) {
      if (this.$scopedSlots.append) {
        append = this.$scopedSlots.append();
      } else {
        append = [h('sec-btn', {
          class: 'ml10',
          on: {
            click: () => {
              this.$emit('refresh');
            },
          },
        }, '刷新')];
      }
    }
    if (append && append.length) {
      childrens.push(...append);
    }
    return h('sec-form', {
      class: 'sec-table-filter-form',
      attrs: {
        inline: true,
        isTableFilterForm: true,
      },
    }, childrens);
  },
};
</script>
