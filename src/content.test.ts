import test from 'node:test';
import assert from 'node:assert/strict';
import { defaultActiveNodeId, flowCards, flowEdges, flowNodes, pageSections } from './content';

test('default active node exists in the flow node list', () => {
  assert.ok(flowNodes.some((node) => node.id === defaultActiveNodeId));
});

test('every flow node has a matching detail card', () => {
  for (const node of flowNodes) {
    assert.ok(flowCards[node.id], `missing card for ${node.id}`);
  }
});

test('flow contains the required AI pipeline nodes', () => {
  const labels = flowNodes.map((node) => node.label);
  assert.deepEqual(labels, [
    '新闻文章 / 原始报道',
    'Template / 模板约束',
    'InvestigationPlanner',
    '关键节点与材料规划',
    'KeyWriter',
    'NoiseReasoner',
    'NoiseWriter',
    'Peripheral Planner',
    'Playable Pipeline / 可玩案件',
  ]);
});

test('case page copy exposes the three narrative sections', () => {
  const requiredSections = ['玩法摘要', '核心流程', '设计原则'] as const;
  for (const section of requiredSections) {
    assert.ok(pageSections.includes(section), `missing section ${section}`);
  }
});

test('flow graph defines the expected directed journey', () => {
  assert.equal(flowEdges.length, 10);
  assert.ok(flowEdges.some((edge) => edge.source === 'noise-reasoner' && edge.target === 'noise-writer'));
  assert.ok(flowEdges.filter((edge) => edge.target === 'playable-pipeline').length >= 3);
});
