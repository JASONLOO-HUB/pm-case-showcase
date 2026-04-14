import { useState } from 'react';
import {
  defaultActiveNodeId,
  flowCards,
  gameplayPoints,
  principles,
  quickFacts,
} from './content';
import { PipelineFlow } from './flow';

export default function App() {
  const [activeNodeId, setActiveNodeId] = useState(defaultActiveNodeId);
  const activeCard = flowCards[activeNodeId];

  return (
    <div className="page-shell">
      <div className="page-glow page-glow--top" aria-hidden="true" />
      <div className="page-glow page-glow--right" aria-hidden="true" />

      <header className="hero">
        <div className="hero__copy">
          <p className="hero__kicker">Truth Finder · AI 产品设计案例</p>
          <h1>把新闻报道转化为可玩调查体验</h1>
          <p className="hero__summary">
            我们没有让模型一次性把故事写完，而是先把报道拆成调查主线，再分层生成关键材料、噪声语境和人物外围信息，最终汇成一个玩家可以真正推进的案件。
          </p>
        </div>

        <div className="hero__facts">
          {quickFacts.map((fact) => (
            <article key={fact.title} className="info-card info-card--hero">
              <p className="info-card__title">{fact.title}</p>
              <p className="info-card__body">{fact.body}</p>
            </article>
          ))}
        </div>
      </header>

      <main className="page-main">
        <section className="section-block">
          <div className="section-heading">
            <p className="section-heading__eyebrow">玩法摘要</p>
            <h2>玩家如何体验这个产品</h2>
            <p className="section-heading__lead">
              玩家不是顺着文章一路看完，而是在材料、联系人和白板之间来回穿梭，一步步拼出事件结构。
            </p>
          </div>

          <div className="grid-cards">
            {gameplayPoints.map((point) => (
              <article key={point.title} className="info-card">
                <h3>{point.title}</h3>
                <p>{point.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block section-block--flow">
          <div className="section-heading">
            <p className="section-heading__eyebrow">核心流程</p>
            <h2>新闻文章如何被转成一个可玩的 pipeline</h2>
            <p className="section-heading__lead">
              这张图保留了关键流程节点名，但解释方式保持产品语言。点击任意节点，右侧会显示它在这套设计里承担的角色。
            </p>
          </div>

          <PipelineFlow activeNodeId={activeNodeId} card={activeCard} onNodeSelect={setActiveNodeId} />
        </section>

        <section className="section-block">
          <div className="section-heading">
            <p className="section-heading__eyebrow">设计原则</p>
            <h2>这套 pipeline 背后的核心判断</h2>
            <p className="section-heading__lead">
              页面想强调的不是某个模型能力，而是这套产品为什么必须先做结构，再做内容。
            </p>
          </div>

          <div className="grid-cards grid-cards--principles">
            {principles.map((principle) => (
              <article key={principle.title} className="info-card info-card--principle">
                <h3>{principle.title}</h3>
                <p>{principle.body}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
