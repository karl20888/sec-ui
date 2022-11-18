// eslint-disable-next-line max-classes-per-file
import { Shape, Edge } from '@antv/x6';

export class BaseEdge extends Shape.Edge {
  // eslint-disable-next-line class-methods-use-this
  isGroupEdge() {
    return false;
  }
}

export class GuideEdge extends BaseEdge {}

GuideEdge.config({
  shape: 'GuideEdge',
  connector: { name: 'pai' },
  zIndex: 2,
  attrs: {
    line: {
      stroke: '#808080',
      strokeWidth: 1,
      targetMarker: {
        stroke: 'none',
        fill: 'none',
      },
    },
  },
});

Edge.registry.register({
  GuideEdge,
});

export const createEdge = (data) => new GuideEdge(data);
