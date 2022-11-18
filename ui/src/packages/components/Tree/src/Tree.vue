<template>
  <Tree
    ref="tree"
    class="sec-tree"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <template v-if="$scopedSlots.default" #default="{ node, data }">
      <slot :node="node" :data="data"></slot>
    </template>
  </Tree>
</template>

<script>
import { Tree } from 'element-ui';

export default {
  name: 'ElTree',
  componentName: 'SecTree',
  inheritAttrs: false,
  components: {
    Tree,
  },
  methods: {
    filter(value) {
      this.$refs.tree.filter(value);
    },
    updateKeyChildren(key, data) {
      this.$refs.tree.updateKeyChildren(key, data);
    },
    getCheckedNodes(leafOnly, includeHalfChecked) {
      this.$refs.tree.getCheckedNodes(leafOnly, includeHalfChecked);
    },
    setCheckedNodes(nodes, leafOnly) {
      this.$refs.tree.setCheckedNodes(nodes, leafOnly);
    },
    getCheckedKeys(leafOnly) {
      this.$refs.tree.getCheckedKeys(leafOnly);
    },
    setCheckedKeys(keys, leafOnly) {
      this.$refs.tree.setCheckedKeys(keys, leafOnly);
    },
    setChecked(data, checked, deep) {
      this.$refs.tree.setChecked(data, checked, deep);
    },
    getHalfCheckedNodes() {
      this.$refs.tree.getHalfCheckedNodes();
    },
    getHalfCheckedKeys() {
      this.$refs.tree.getHalfCheckedKeys();
    },
    getCurrentKey() {
      this.$refs.tree.getCurrentKey();
    },
    getCurrentNode() {
      this.$refs.tree.getCurrentNode();
    },
    setCurrentKey(key) {
      this.$refs.tree.setCurrentKey(key);
    },
    setCurrentNode(node) {
      this.$refs.tree.setCurrentNode(node);
    },
    getNode(data) {
      this.$refs.tree.getNode(data);
    },
    remove(data) {
      this.$refs.tree.remove(data);
    },
    append(data, parentNode) {
      this.$refs.tree.append(data, parentNode);
    },
    insertBefore(data, refNode) {
      this.$refs.tree.insertBefore(data, refNode);
    },
    insertAfter(data, refNode) {
      this.$refs.tree.insertAfter(data, refNode);
    },
  },
};
</script>
