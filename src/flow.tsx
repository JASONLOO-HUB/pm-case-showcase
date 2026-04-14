import type { Edge, Node } from '@xyflow/react';
import { Background, Controls, MarkerType, Position, ReactFlow } from '@xyflow/react';
import type { FlowCard } from './content';
import { flowEdges, flowNodes } from './content';

type PipelineFlowProps = {
  activeNodeId: string;
  card: FlowCard;
  onNodeSelect: (nodeId: string) => void;
};

function buildNodes(activeNodeId: string): Node[] {
  return flowNodes.map((item) => ({
    id: item.id,
    position: item.position,
    sourcePosition: Position.Right,
    targetPosition: Position.Left,
    data: {
      label: (
        <div className="flow-node__body">
          <span className="flow-node__kicker">{item.kicker}</span>
          <strong className="flow-node__title">{item.label}</strong>
          <span className="flow-node__caption">{item.caption}</span>
        </div>
      ),
    },
    draggable: false,
    selectable: true,
    className: `flow-node flow-node--${item.accent}${item.id === activeNodeId ? ' is-active' : ''}`,
  }));
}

function buildEdges(): Edge[] {
  return flowEdges.map((edge) => ({
    ...edge,
    labelStyle: { fill: '#5d686d', fontSize: 11, fontWeight: 500 },
    markerEnd: {
      type: MarkerType.ArrowClosed,
      width: 18,
      height: 18,
      color: '#738790',
    },
    style: {
      stroke: '#738790',
      strokeWidth: 1.4,
    },
  }));
}

export function PipelineFlow({ activeNodeId, card, onNodeSelect }: PipelineFlowProps) {
  return (
    <div className="flow-layout">
      <div className="flow-canvas" role="presentation">
        <ReactFlow
          nodes={buildNodes(activeNodeId)}
          edges={buildEdges()}
          fitView
          fitViewOptions={{ padding: 0.12 }}
          minZoom={0.6}
          maxZoom={1.5}
          nodesConnectable={false}
          elementsSelectable={false}
          selectionOnDrag={false}
          panOnScroll
          zoomOnDoubleClick={false}
          onNodeClick={(_, node) => onNodeSelect(node.id)}
        >
          <Background gap={24} size={1} color="rgba(53, 75, 84, 0.15)" />
          <Controls showInteractive={false} />
        </ReactFlow>
      </div>

      <aside className="detail-card" aria-live="polite">
        <p className="detail-card__eyebrow">{card.eyebrow}</p>
        <h3>{card.title}</h3>
        <p className="detail-card__summary">{card.summary}</p>
        <div className="detail-card__sections">
          {card.sections.map((section) => (
            <section key={section.heading} className="detail-card__section">
              <h4>{section.heading}</h4>
              <p>{section.body}</p>
            </section>
          ))}
        </div>
      </aside>
    </div>
  );
}
