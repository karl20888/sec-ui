```vue
<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 render-content</p>
      <sec-tree
        show-checkbox
        default-expand-all
        node-key="id"
        :data="data"
        :expand-on-click-node="false"
        :render-content="renderContent"
      ></sec-tree>
    </div>
    <div class="block">
      <p>使用 scoped slot</p>
      <sec-tree
        show-checkbox
        default-expand-all
        node-key="id"
        :data="data"
        :expand-on-click-node="false"
      >
        <template #default="{ node, data }">
          <div class="custom-tree-node">
            <span>{{ node.label }}</span>
            <span>
              <sec-btn
                type="text"
                size="mini"
                @click="append(data)"
              >Append</sec-btn>
              <sec-btn
                type="text"
                size="mini"
                @click="remove(node, data)"
              >Delete</sec-btn>
            </span>
          </div>
        </template>
      </sec-tree>
    </div>
  </div>
</template>

<script>
let id = 1000;

export default {
  data() {
    return {
      data: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1',
          }, {
            id: 10,
            label: '三级 1-1-2',
          }],
        }],
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1',
        }, {
          id: 6,
          label: '二级 2-2',
        }],
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1',
        }, {
          id: 8,
          label: '二级 3-2',
        }],
      }],
    };
  },
  methods: {
    append(data) {
      const newChild = { id, label: 'testtest', children: [] };
      id += 1;
      if (!data.children) {
        this.$set(data, 'children', []);
      }
      data.children.push(newChild);
    },
    remove(node, data) {
      const { parent } = node;
      const children = parent.data.children || parent.data;
      const index = children.findIndex((d) => d.id === data.id);
      children.splice(index, 1);
    },
    renderContent(h, { node, data }) {
      return h('span', {
        class: 'custom-tree-node',
      }, [h('span', node.label), h('span', [h('sec-btn', {
        attrs: {
          type: 'text',
          size: 'mini',
        },
        on: {
          click: () => {
            this.append(data);
          },
        },
      }, 'Append'), h('sec-btn', {
        attrs: {
          type: 'text',
          size: 'mini',
        },
        on: {
          click: () => {
            this.remove(node, data);
          },
        },
      }, 'Delete')])]);
    },
  },
};
</script>

<style lang="less" scoped>
.custom-tree-container {
  display: flex;

  .block {
    flex: 1;
    padding: 8px 24px 24px;

    > p {
      text-align: center;
      line-height: 4;
    }
  }

  :deep(.custom-tree-node) {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 14px;
    padding-right: 8px;
  }
}
</style>
```