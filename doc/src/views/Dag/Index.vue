<template>
  <sec-block class="doc-block">
    <h2>DAG 有向无环图</h2>
    <sec-btn draggable @dragstart.native="dragHandler">拖一个</sec-btn>
    <sec-btn @click="$refs.dag.setDisabled(true)">禁用</sec-btn>
    <sec-dag-toolbar :graph="graph"></sec-dag-toolbar>
    <sec-dag
      ref="dag"
      style="height: 500px;"
      :background="true"
      :disabled.sync="disabled"
      :node="node"
      @init="onInit"
    ></sec-dag>
  </sec-block>
</template>

<script>

export default {
  data() {
    return {
      node: Node,
      graph: null,
      disabled: false,
    };
  },
  methods: {
    onInit(graph) {
      this.graph = graph;
    },
    dragHandler(event) {
      
    },
  },
};
</script>
