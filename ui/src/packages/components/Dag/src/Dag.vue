<template>
  <div ref="dagWrap" class="sec-dag" :style="{
    height: h,
  }">
    <div ref="dag" class="hf"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import {
  each,
  isNumber,
  isPlainObject,
} from 'lodash';
import { Graph, DataUri, Addon } from '@antv/x6';
import { GuideEdge } from './edge';
import Connector from './Connector.vue';

export default {
  name: 'SecDag',
  componentName: 'SecDag',
  inheritAttrs: false,
  props: {
    height: {
      type: [String, Number],
      default: '100%',
    },
    /**
     * 滚动 Scroller
     * Scroller 使画布具备滚动、平移、居中、缩放等能力
     * 详见：https://x6.antv.vision/zh/docs/tutorial/basic/scroller
     */
    background: {
      type: [Boolean, String],
      default: false,
    },
    history: {
      type: [Boolean, Object],
      default: true,
    },
    panning: {
      type: [Boolean, Object],
      default: () => ({
        enabled: true,
        modifiers: 'shift',
      }),
    },
    scroller: {
      type: [Boolean, Object],
      default: () => ({
        enabled: true,
        pannable: true,
      }),
    },
    selecting: {
      type: [Boolean, Object],
      default: () => ({
        enabled: true,
        multiple: false,
        strict: true,
      }),
    },
    keyboard: {
      type: [Boolean, Object],
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      graph: null,
      dnd: null,
    };
  },
  computed: {
    h() {
      if (isNumber(this.height)) {
        return `${this.height}px`;
      }
      return this.height;
    },
  },
  mounted() {
    const container = this.$refs.dag;
    const {
      clientWidth: width,
      clientHeight: height,
    } = container;
    let background = false;
    if (this.background === true) {
      background = {
        color: '#f7f7fa',
      };
    } else if (isPlainObject(this.background)) {
      background = this.background;
    }
    this.graph = new Graph({
      background,
      history: this.history,
      container,
      width,
      height,
      panning: this.panning,
      scroller: this.scroller,
      selecting: this.selecting,
      keyboard: this.keyboard,
      connecting: {
        snap: { radius: 10 },
        allowBlank: false,
        highlight: true,
        connector: 'pai',
        sourceAnchor: 'bottom',
        targetAnchor: 'center',
        connectionPoint: 'anchor',
        createEdge() {
          return new GuideEdge({
            attrs: {
              line: {
                strokeDasharray: '5 5',
                stroke: '#808080',
                strokeWidth: 1,
                targetMarker: {
                  name: 'block',
                  args: {
                    size: '6',
                  },
                },
              },
            },
          });
        },
        validateEdge: (args) => {
          const { edge } = args;
          return !!edge.target.port;
        },
        validateMagnet({ magnet }) {
          return magnet.getAttribute('port-group') !== 'in';
        },
        validateConnection({
          sourceView,
          targetView,
          sourceMagnet,
          targetMagnet,
        }) {
          if (sourceView === targetView) {
            return false;
          }
          if (!sourceMagnet || sourceMagnet.getAttribute('port-group') === 'in') {
            return false;
          }
          if (!targetMagnet || targetMagnet.getAttribute('port-group') !== 'in') {
            return false;
          }
          const portId = targetMagnet.getAttribute('port');
          const node = targetView.cell;
          const port = node.getPort(portId);
          return !(port && port.connected);
        },
        highlighting: {
          nodeAvailable: {
            name: 'className',
            args: {
              className: 'available',
            },
          },
          magnetAvailable: {
            name: 'className',
            args: {
              className: 'available',
            },
          },
          magnetAdsorbed: {
            name: 'className',
            args: {
              className: 'adsorbed',
            },
          },
        },
      },
      onPortRendered(args) {
        const { port, contentSelectors } = args;
        const con = contentSelectors && contentSelectors.content;
        // eslint-disable-next-line no-new
        new Vue({
          el: con,
          render: (h) => h(Connector, port),
        });
      },
      interacting(cellView) {
        if (cellView.cell && cellView.cell.disableMove) {
          return { nodeMovable: false };
        }
        return true;
      },
    });
    Graph.registerConnector('pai', (s, t) => {
      const offset = 4;
      const control = 80;
      const v1 = { x: s.x, y: s.y + offset + control };
      const v2 = { x: t.x, y: t.y - offset - control };
      return `M ${s.x} ${s.y}
       L ${s.x} ${s.y + offset}
       C ${v1.x} ${v1.y} ${v2.x} ${v2.y} ${t.x} ${t.y - offset}
       L ${t.x} ${t.y}
      `;
    }, true);
    requestAnimationFrame(() => {
      this.graph.centerContent();
    });
    this.$emit('init', this.graph);
    this.dnd = new Addon.Dnd({
      target: this.graph,
      validateNode() {
        return true;
      },
      getDragNode: (node) => node.clone({ keepId: true }),
      getDropNode: (node) => node.clone({ keepId: true }),
    });
    this.initEvents();
  },
  destroyed() {
    this.dispose();
  },
  watch: {
    disabled: {
      immediate: true,
      handler(val) {
        this.setDisabled(!!val);
      },
    },
  },
  methods: {
    setDisabled(disabled) {
      if (this.graph) {
        if (disabled) {
          this.graph
            .disableSelectionMovable()
            // .disableSelection()
            // 多选框
            .disableMultipleSelection()
            // 清空选区
            .cleanSelection()
            // 剪切板
            .disableClipboard()
            // 历史记录
            .disableHistory()
            // 对齐线
            .disableSnapline()
            // 快捷键
            .disableKeyboard();
        } else {
          this.graph
            .enableSelectionMovable()
            .enableClipboard()
            .enableHistory()
            .enableSnapline()
            .enableKeyboard();
        }
        const cells = this.graph.getCells();
        if (cells.length) {
          each(cells, (cell) => {
            Object.assign(cell, {
              disableMove: !!disabled,
            });
          });
        }
      }
      this.$emit('update:disabled', !!disabled);
    },
    setCellsSelectedStatus(cells, selected) {
      each(cells, (cell) => {
        const data = cell.getData();
        cell.setData({ ...data, selected });
        if (cell.isNode()) {
          const view = this.graph.findViewByCell(cell);
          if (view && view.vm) {
            view.vm.selected = selected;
          }
        }
      });
    },
    initEvents() {
      this.graph.on('selection:changed', ({ removed, selected }) => {
        this.setCellsSelectedStatus(removed, false);
        this.setCellsSelectedStatus(selected, true);
        this.$emit('selection', selected);
      });
      this.graph.on('edge:connected', (args) => {
        const { edge = {}, isNew } = args;
        const { source, target } = edge;
        if (isNew) {
          const node = args.currentCell;
          const portId = edge.getTargetPortId();
          if (node && portId) {
            node.setPortProp(portId, 'connected', true);
            edge.attr({
              line: {
                strokeDasharray: '',
                targetMarker: '',
                stroke: '#808080',
              },
            });
            const sourceId = this.graph.getCellById(source.cell).getData().id;
            const targetId = this.graph.getCellById(target.cell).getData().id;
            const data = {
              source: sourceId,
              target: targetId,
              outputPortId: source.port,
              inputPortId: target.port,
            };
            edge.setData(data);
          }
        }
      });
      this.graph.on('edge:removed', (args) => {
        try {
          const { edge } = args;
          const { target } = edge;
          const { cell: nodeId, port: portId } = target;
          if (nodeId) {
            const targetCell = this.graph.getCellById(nodeId);
            if (targetCell) {
              targetCell.setPortProp(portId, 'connected', false);
            }
          }
        } catch (error) {
          console.warn(error);
        }
      });
      this.graph.bindKey(['delete', 'backspace'], () => {
        const selectedCells = this.graph.getSelectedCells();
        if (selectedCells.length) {
          this.graph.removeCells(selectedCells);
        }
      });
      window.addEventListener('resize', this.windowResizeHandler);
    },
    windowResizeHandler() {
      requestAnimationFrame(() => {
        const {
          clientWidth,
          clientHeight,
        } = this.$refs.dagWrap;
        this.graph.resize(clientWidth, clientHeight);
      });
    },
    // 画布是否可以平移
    isPannable() {
      return this.graph.isPannable();
    },
    // 启用画布平移
    enablePanning() {
      this.graph.enablePanning();
    },
    // 禁止画布平移
    disablePanning() {
      this.graph.disablePanning();
    },
    // 切换画布平移状态
    togglePanning() {
      this.graph.togglePanning();
    },
    // 画布缩放
    // https://x6.antv.vision/zh/docs/api/graph/transform#zoom
    zoom(factor, options) {
      this.graph.zoom(factor, options);
    },
    // 内容居中
    // https://x6.antv.vision/zh/docs/api/graph/transform#centercontent
    centerContent(options) {
      this.graph.centerContent(options);
    },
    // 导出 SVG
    // https://x6.antv.vision/zh/docs/tutorial/basic/graph/#%E5%AF%BC%E5%87%BA-svg
    toSVG(fileName, options) {
      this.graph.toSVG((dataUri) => {
        DataUri.downloadDataUri(DataUri.svgToDataUrl(dataUri), fileName);
      }, options);
    },
    // 导出 PNG/JPEG
    // https://x6.antv.vision/zh/docs/tutorial/basic/graph/#%E5%AF%BC%E5%87%BA-pngjpeg
    toPNG(fileName, options) {
      this.graph.toPNG((dataUri) => {
        DataUri.downloadDataUri(dataUri, fileName);
      }, options);
    },
    dispose() {
      window.removeEventListener('resize', this.windowResizeHandler);
      this.graph.dispose();
    },
    registerNode(name, component) {
      Graph.registerVueComponent(name, component, true);
    },
    dragIn(event, node) {
      if (this.dnd && !this.disabled) {
        this.dnd.start(node, event);
      }
    },
  },
};
</script>
