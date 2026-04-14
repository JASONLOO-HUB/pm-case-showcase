export type AccentTone = 'input' | 'planning' | 'writing' | 'output';

export type Point = {
  x: number;
  y: number;
};

export type FlowNodeMeta = {
  id: string;
  label: string;
  kicker: string;
  caption: string;
  accent: AccentTone;
  position: Point;
};

export type FlowEdgeMeta = {
  id: string;
  source: string;
  target: string;
  label?: string;
};

export type FlowCardSection = {
  heading: string;
  body: string;
};

export type FlowCard = {
  eyebrow: string;
  title: string;
  summary: string;
  sections: FlowCardSection[];
};

export type HighlightCard = {
  title: string;
  body: string;
};

export const defaultActiveNodeId = 'investigation-planner';

export const pageSections = ['玩法摘要', '核心流程', '设计原则'] as const;

export const quickFacts: HighlightCard[] = [
  {
    title: '产品目标',
    body: '把真实报道中的事实关系转译成玩家可以调查、联系、拼图和验证的互动过程。',
  },
  {
    title: '设计重点',
    body: '先规划调查骨架，再分层生成关键材料、噪声语境和人物外围信息。',
  },
  {
    title: '最终产物',
    body: '不是“多生成几篇文章”，而是一个能够推动认知跃迁的可玩 pipeline。',
  },
];

export const gameplayPoints: HighlightCard[] = [
  {
    title: '阅读材料',
    body: '玩家在新闻、采访、档案、聊天记录和外围文件里发现人物、线索与矛盾。',
  },
  {
    title: '联系对象',
    body: '玩家围绕关键人物推进采访与接触，解锁新的证据切片，而不是被动看故事展开。',
  },
  {
    title: '组织关系',
    body: '玩家把人物与事件放到白板上，逐步形成对事件结构的判断。',
  },
  {
    title: '逼近真相',
    body: '每一次推进都来自证据链的补全，而不是系统直接把答案讲给玩家。',
  },
];

export const principles: HighlightCard[] = [
  {
    title: '先规划，再生成',
    body: '先定义调查主线和认知跃迁，再决定每一类内容如何出现。',
  },
  {
    title: '分层生成',
    body: '关键链、噪声语境、人物外围分别处理，避免所有内容混在一起失去控制。',
  },
  {
    title: '节奏优先',
    body: '设计的目标不是忠实复写原文顺序，而是让玩家一步步形成理解。',
  },
  {
    title: '产出的是体验',
    body: '最终需要生成的是可调查的互动结构，而不是一份更长、更复杂的报道。',
  },
];

export const flowNodes: FlowNodeMeta[] = [
  {
    id: 'source-article',
    label: '新闻文章 / 原始报道',
    kicker: 'Source',
    caption: '事实来源',
    accent: 'input',
    position: { x: 40, y: 54 },
  },
  {
    id: 'template',
    label: 'Template / 模板约束',
    kicker: 'Constraint',
    caption: '结构边界',
    accent: 'input',
    position: { x: 40, y: 274 },
  },
  {
    id: 'investigation-planner',
    label: 'InvestigationPlanner',
    kicker: 'Planner',
    caption: '调查骨架',
    accent: 'planning',
    position: { x: 360, y: 164 },
  },
  {
    id: 'material-plan',
    label: '关键节点与材料规划',
    kicker: 'Plan',
    caption: '推进结构',
    accent: 'planning',
    position: { x: 690, y: 164 },
  },
  {
    id: 'key-writer',
    label: 'KeyWriter',
    kicker: 'Writer',
    caption: '关键链内容',
    accent: 'writing',
    position: { x: 1030, y: 10 },
  },
  {
    id: 'noise-reasoner',
    label: 'NoiseReasoner',
    kicker: 'Reasoner',
    caption: '噪声定义',
    accent: 'planning',
    position: { x: 1030, y: 180 },
  },
  {
    id: 'noise-writer',
    label: 'NoiseWriter',
    kicker: 'Writer',
    caption: '语境材料',
    accent: 'writing',
    position: { x: 1350, y: 180 },
  },
  {
    id: 'peripheral-planner',
    label: 'Peripheral Planner',
    kicker: 'Planner',
    caption: '人物外围',
    accent: 'planning',
    position: { x: 1030, y: 350 },
  },
  {
    id: 'playable-pipeline',
    label: 'Playable Pipeline / 可玩案件',
    kicker: 'Output',
    caption: '玩家体验',
    accent: 'output',
    position: { x: 1670, y: 166 },
  },
];

export const flowEdges: FlowEdgeMeta[] = [
  { id: 'source-to-investigation', source: 'source-article', target: 'investigation-planner', label: '提供事实边界' },
  { id: 'template-to-investigation', source: 'template', target: 'investigation-planner', label: '提供玩法约束' },
  { id: 'investigation-to-material', source: 'investigation-planner', target: 'material-plan', label: '落成调查主线' },
  { id: 'material-to-key', source: 'material-plan', target: 'key-writer', label: '关键推进链' },
  { id: 'material-to-noise-reasoner', source: 'material-plan', target: 'noise-reasoner', label: '语境设计' },
  { id: 'noise-reasoner-to-writer', source: 'noise-reasoner', target: 'noise-writer', label: '定义后再写' },
  { id: 'material-to-peripheral', source: 'material-plan', target: 'peripheral-planner', label: '人物厚度' },
  { id: 'key-to-output', source: 'key-writer', target: 'playable-pipeline', label: '主线推进' },
  { id: 'noise-to-output', source: 'noise-writer', target: 'playable-pipeline', label: '世界语境' },
  { id: 'peripheral-to-output', source: 'peripheral-planner', target: 'playable-pipeline', label: '人物侧面' },
];

export const flowCards: Record<string, FlowCard> = {
  'source-article': {
    eyebrow: '原始输入',
    title: '新闻文章 / 原始报道',
    summary: '它提供的不是现成剧本，而是事实、角色、冲突和主题边界。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '提供可被拆解的真实素材，包括人物关系、事件脉络和报道中的张力来源。',
      },
      {
        heading: '为什么不能省略',
        body: '如果没有可信的原始报道，后面的调查结构就容易变成凭空拼装，失去现实感和判断依据。',
      },
      {
        heading: '如何衔接前后',
        body: '它和模板约束一起进入 InvestigationPlanner，决定这次案件究竟围绕什么事实展开。',
      },
      {
        heading: '为什么需要这个节点',
        body: '只有先拿到可信事实源，后续每一层规划和生成才有可追溯的依据，不会变成凭空杜撰。',
      },
    ],
  },
  template: {
    eyebrow: '结构输入',
    title: 'Template / 模板约束',
    summary: '模板负责定义一个案件“应该怎样被玩”，而不是规定文风。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '提供调查节奏、信息分层和互动结构的边界，让后续生成有明确的玩法形状。',
      },
      {
        heading: '为什么不能省略',
        body: '没有模板约束，系统容易直接顺着文章写内容，结果会更像阅读材料，而不是调查体验。',
      },
      {
        heading: '如何衔接前后',
        body: '它不直接生成内容，而是和原始报道一起给 InvestigationPlanner 提供规划所需的结构条件。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它把“玩法边界”提前锁定，确保后续输出服务调查体验，而不是回到普通叙事写作。',
      },
    ],
  },
  'investigation-planner': {
    eyebrow: '核心规划节点',
    title: 'InvestigationPlanner',
    summary: '先定义调查如何推进，再决定内容如何生成。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '它把报道里的事实、角色和冲突整理成玩家可以逐步推进的调查骨架。',
      },
      {
        heading: '为什么不能省略',
        body: '如果直接写材料，内容可能看起来真实，但玩家未必会形成稳定的探索路径和认知跃迁。',
      },
      {
        heading: '如何衔接前后',
        body: '它承接原始报道与模板约束，并把统一的调查结构交给后面的关键材料、噪声和外围人物分支。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它把“玩家如何接近真相”先定下来，后续内容才能围绕同一条调查路径展开。',
      },
    ],
  },
  'material-plan': {
    eyebrow: '落地规划',
    title: '关键节点与材料规划',
    summary: '这一步把“调查骨架”翻译成“哪些信息在什么阶段以什么形式出现”。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '它明确哪些节点承担主线推进，哪些材料是关键证据，哪些内容属于语境补充或人物外围。',
      },
      {
        heading: '为什么不能省略',
        body: '如果没有这一层，所有内容都会混在一起生成，最后很难控制调查节奏和信息优先级。',
      },
      {
        heading: '如何衔接前后',
        body: '它接住 InvestigationPlanner 的结构结果，再把不同内容分发给 KeyWriter、NoiseReasoner 和 Peripheral Planner。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它先分配信息角色与优先级，避免生成顺序反过来主导结构，导致节奏失控。',
      },
    ],
  },
  'key-writer': {
    eyebrow: '主线生成',
    title: 'KeyWriter',
    summary: '关键材料沿主线顺序生成，优先保证因果关系和推进动力。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '负责把关键证据链写成可阅读、可解锁、可推进的核心材料。',
      },
      {
        heading: '为什么不能省略',
        body: '主线材料如果顺序错乱，玩家会提前知道答案，或者在推进上失去方向感。',
      },
      {
        heading: '如何衔接前后',
        body: '它基于已经确认的关键节点与材料规划生成主线内容，并把结果送入最终的可玩案件结构。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它保证关键证据按推进节奏出现，让玩家持续有方向地接近结论。',
      },
    ],
  },
  'noise-reasoner': {
    eyebrow: '语境规划',
    title: 'NoiseReasoner',
    summary: '先判断哪些噪声值得存在，再决定它们该怎么出现。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '它先定义哪些背景信息、误导信息或时代语境值得被纳入案件，以及它们应该挂载在哪个阶段。这里的噪声是指不直接推进主线、但会影响判断难度与真实感的外围信息。',
      },
      {
        heading: '为什么不能省略',
        body: '如果噪声只是“多写一点”，就会变成信息污染，而不是服务判断难度和世界感的设计。',
      },
      {
        heading: '如何衔接前后',
        body: '它接住材料规划的结果，先明确噪声的作用，再把已定义好的方向交给 NoiseWriter 落成具体材料。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它确保噪声先被定义再被生成，让语境层可控地增加真实感，而不是制造信息污染。',
      },
    ],
  },
  'noise-writer': {
    eyebrow: '语境生成',
    title: 'NoiseWriter',
    summary: '把已经想清楚作用的噪声材料写出来，而不是抢走主线的戏份。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '把被定义好的噪声信息转成具体的新闻片段、旁支文件或环境材料。这里的噪声是指不直接推进主线、但能补充语境和干扰判断节奏的外围信息。',
      },
      {
        heading: '为什么不能省略',
        body: '没有这个落笔环节，案件会只剩主线证据，缺少真实世界那种被外围信息包裹的质感。',
      },
      {
        heading: '如何衔接前后',
        body: '它承接 NoiseReasoner 给出的方向，把语境层内容落成玩家可读的材料，再汇入整体体验。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它负责把噪声语境真正落笔成可读材料，让世界感被感知，而不挤占主线。',
      },
    ],
  },
  'peripheral-planner': {
    eyebrow: '人物外围',
    title: 'Peripheral Planner',
    summary: '在主线之外补足人物弧光、社会纹理和侧面视角，让案件更像真实世界。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '围绕深度人物整理外围视角、人物厚度和外部观察，让案件不只剩下冷冰冰的主线证据。',
      },
      {
        heading: '为什么不能省略',
        body: '如果只有主线材料，玩家理解得到事实，却感受不到人物和事件背后的真实生活感。',
      },
      {
        heading: '如何衔接前后',
        body: '它基于前面的规划结果补充人物侧面，并把这些信息作为支撑世界感的层次汇入最终案件。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它补足人物侧面的生活纹理，让玩家不只看到事实，还能理解事件对人的影响。',
      },
    ],
  },
  'playable-pipeline': {
    eyebrow: '最终输出',
    title: 'Playable Pipeline / 可玩案件',
    summary: '最后汇出来的不是一组文本，而是一条玩家可以真正推进的调查过程。',
    sections: [
      {
        heading: '这个节点做什么',
        body: '把主线推进、语境层和人物外围信息整合成一个可调查、可解锁、可整理的案件体验。',
      },
      {
        heading: '为什么不能省略',
        body: '如果没有这一层整合，前面的内容只是一组生成结果，无法自然变成玩家可操作的互动结构。',
      },
      {
        heading: '如何衔接前后',
        body: '它收束所有规划和分层生成成果，把它们重新组织为玩家的调查节奏和认知路径。',
      },
      {
        heading: '为什么需要这个节点',
        body: '它把分散结果整合成可操作的案件结构，确保最终交付的是体验而不是零散文本。',
      },
    ],
  },
};
