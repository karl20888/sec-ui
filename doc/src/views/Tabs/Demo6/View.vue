<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    editable
    @edit="handleTabsEdit"
  >
    <el-tab-pane
      v-for="item in editableTabs"
      :key="item.name"
      :label="item.title"
      :name="item.name"
    >{{ item.content }}</el-tab-pane>
  </el-tabs>
</template>

<script>
import { each, filter } from 'lodash';

export default {
  data() {
    return {
      editableTabsValue: '2',
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
      }],
      tabIndex: 2,
    };
  },
  methods: {
    handleTabsEdit(target, action) {
      if (action === 'add') {
        this.tabIndex += 1;
        const name = `${this.tabIndex}`;
        this.editableTabs.push({
          title: 'New Tab',
          name,
          content: 'New Tab content',
        });
        this.editableTabsValue = name;
      }
      if (action === 'remove') {
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
      }
    },
  },
};
</script>
