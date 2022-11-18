<template>
  <div class="sec-dag-toolbar">
    <template v-if="!disabled">
      <Tooltip content="框选节点">
        <button
          type="button"
          :class="{
            'is-selected': rubberband,
          }"
          @click="toggleRubberband"
        ><i class="el-icon-crop"></i></button>
      </Tooltip>
      <Tooltip content="撤销">
        <button type="button" @click="undo">
          <i class="el-icon-back"></i>
        </button>
      </Tooltip>
      <Tooltip content="重做">
        <button type="button" @click="redo">
          <i class="el-icon-right"></i>
        </button>
      </Tooltip>
      <Tooltip content="删除选中节点">
        <button type="button" @click="removeCells">
          <i class="el-icon-delete"></i>
        </button>
      </Tooltip>
      <Divider direction="vertical"></Divider>
    </template>
    <Tooltip content="放大">
      <button type="button" @click="zoom(0.1)">
        <i class="el-icon-zoom-in"></i>
      </button>
    </Tooltip>
    <Tooltip content="缩小">
      <button type="button" @click="zoom(-0.1)">
        <i class="el-icon-zoom-out"></i>
      </button>
    </Tooltip>
    <Tooltip content="实际尺寸">
      <button type="button" @click="zoom('real')">
        <i class="el-icon-c-scale-to-original"></i>
      </button>
    </Tooltip>
    <Tooltip content="适应画布">
      <button type="button" @click="zoom('fit')">
        <i class="el-icon-full-screen"></i>
      </button>
    </Tooltip>
  </div>
</template>

<script>
import { Graph } from '@antv/x6';
import { Tooltip, Divider } from 'element-ui';
import { isNumber } from 'lodash';

export default {
  name: 'SecDagToolbar',
  componentName: 'SecDagToolbar',
  inheritAttrs: false,
  components: { Tooltip, Divider },
  props: {
    graph: Graph,
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      rubberband: false,
    };
  },
  methods: {
    undo() {
      this.graph.undo();
    },
    redo() {
      this.graph.redo();
    },
    removeCells() {
      const selectedCells = this.graph.getSelectedCells();
      if (selectedCells.length) {
        this.graph.removeCells(selectedCells);
      }
    },
    zoom(factor) {
      if (isNumber(factor)) {
        this.graph.zoom(factor);
      } else if (factor === 'fit') {
        this.graph.zoomToFit({ padding: 12 });
      } else if (factor === 'real') {
        this.graph.scale(1);
        this.graph.centerContent();
      }
    },
    toggleRubberband() {
      if (this.graph) {
        let re;
        if (this.disabled) {
          re = false;
        } else {
          re = !this.rubberband;
        }
        if (re) {
          this.graph.disablePanning();
          this.graph.enableRubberband();
          this.rubberband = true;
        } else {
          this.graph.enablePanning();
          this.graph.disableRubberband();
          this.rubberband = false;
        }
        this.graph.disableStrictRubberband();
      }
    },
  },
};
</script>
