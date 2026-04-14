# 工作日志 - pm-case-showcase - 2026-04-14

---

## 12:24

**用户输入：**
> 我直接部署在githubpage上为什么没反应

**Agent回复（详细）：**
用户将 Vite 项目部署到 GitHub Pages 后出现白屏或无反应，常见原因是默认 `base: '/'` 导致构建产物里 JS/CSS 使用绝对路径（如 `/assets/...`）。项目站点的真实地址是 `https://用户名.github.io/仓库名/`，浏览器会去域名根拉取 `/assets/...` 从而 404。已在 `vite.config.ts` 中设置 `base: './'` 使资源为相对路径，并执行 `npm run build` 验证 `dist/index.html` 中已为 `./assets/...`。

**执行清单（仅 bullet points）：**
- 分析 `vite.config.ts` 与 `dist/index.html` 资源路径
- 在 `vite.config.ts` 增加 `base: './'`
- 运行 `npm run build` 确认产物为相对路径

---
