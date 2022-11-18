```vue
<template>
  <div>
    <sec-btn class="mb20" @click="addTab">add tab</sec-btn>
    <el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.label"
        :name="item.name"
      >{{ item.content }}</el-tab-pane>
    </el-tabs>
    <sec-tabs
      v-model="editableTabsValue"
      type="card"
      closable
      :tabs="editableTabs"
      @tab-remove="removeTab"
    ></sec-tabs>
  </div>
</template>

<script>
import { each, filter } from 'lodash';

export default {
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [
        { label: 'Tab 1', name: '1', content: 'Tab 1 content' },
        { label: 'Tab 2', name: '2', content: 'Tab 2 content' },
      ],
      tabIndex: 2,
    };
  },
  methods: {
    addTab() {
      this.tabIndex += 1;
      const name = `${this.tabIndex}`;
      this.editableTabs.push({
        label: 'New Tab',
        name,
        content: 'New Tab content',
      });
      this.editableTabsValue = name;
    },
    removeTab(target) {
      const tabs = this.editableTabs;
      let active = this.editableTabsValue;
      if (active === target) {
        each(tabs, (tab, index) => {
          if (tab.name === target) {
            const next = tabs[index + 1] || tabs[index - 1];
            if (next) {
              active = next.name;
            }
          }
        });
      }
      this.editableTabsValue = active;
      this.editableTabs = filter(tabs, (tab) => tab.name !== target);
    },
  },
};
</script>
```