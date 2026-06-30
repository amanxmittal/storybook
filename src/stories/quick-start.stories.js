const CDN_BASE = 'https://cdn.ux4g.gov.in/UX4G@3.0.16';
const CDN_CSS_URL = `${CDN_BASE}/index.css`;
const CDN_JS_URL = `${CDN_BASE}/ux4g.js`;
const CDN_CUSTOM_JS_URL = `${CDN_BASE}/ux4g-custom.js`;

const escapeHtml = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

/* code snippets */

const HTML_CODE = `<!DOCTYPE html>
<html lang="en" data-theme="light">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My UX4G Page</title>

  <!-- UX4G CSS -->
  <link rel="stylesheet" href="${CDN_CSS_URL}" />
</head>
<body>

  <!-- UX4G JS (theme toggle, accessibility bar, etc.) -->
  <script src="${CDN_JS_URL}"><\/script>
  <script src="${CDN_CUSTOM_JS_URL}"><\/script>

  <!-- Example: a UX4G button -->
  <button class="ux4g-btn-primary ux4g-btn-md" type="button">
    Get Started
  </button>

</body>
</html>`;

const NPM_INSTALL = `npm install ux4g-components-web`;

const REACT_INSTALL_CODE = `npm install ux4g-components-react ux4g-components-web`;

const REACT_CSS_CODE = `import 'ux4g-components-web/styles.css';
import { UX4GButton } from 'ux4g-components-react/button';

function App() {
  return (
    <>
      <UX4GButton variant="primary" size="md" onClick={() => console.log('clicked')}>
        Save
      </UX4GButton>

      <UX4GButton variant="outline-danger" size="lg">
        Delete
      </UX4GButton>

      <UX4GButton variant="tonal-primary" size="sm" shape="pill">
        Tag
      </UX4GButton>

      <UX4GButton variant="primary" size="md" loading>
        Saving...
      </UX4GButton>

      <UX4GButton variant="primary" size="md" disabled>
        Disabled
      </UX4GButton>
    </>
  );
}`;

const REACT_IMPORT_CODE = `import { UX4GButton } from 'ux4g-components-react/button';`;

const REACT_NOTES_CODE = `react           >=17.0.0
react-dom       >=17.0.0`;

const ANGULAR_INSTALL_CODE = `npm install ux4g-components-angular ux4g-components-web`;

const ANGULAR_STYLES_CODE = `{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "node_modules/ux4g-components-web/styles/ux4g.css",
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}`;

const ANGULAR_MODULE_CODE = `import { UX4GButtonModule } from 'ux4g-components-angular/button';

@NgModule({
  imports: [UX4GButtonModule],
})
export class AppModule {}`;

const ANGULAR_NOTES_CODE = `@angular/core   >=15.0.0
@angular/common >=15.0.0`;

const ANGULAR_TEMPLATE_CODE = `<!-- app.component.html -->
<ux4g-button variant="primary" size="md" (clicked)="onSave()">
  Save
</ux4g-button>

<ux4g-button variant="outline-danger" size="lg">
  Delete
</ux4g-button>

<ux4g-button variant="tonal-primary" size="sm" shape="pill">
  Tag
</ux4g-button>`;

const NEXTJS_CODE = `// 1. Install the package
// npm install ux4g-components-react ux4g-components-web

// 2. Import UX4G styles in your layout or _app file
// For App Router (app/layout.tsx):
import 'ux4g-components-web/styles.css';

// 3. Use UX4G React components
// page.tsx
'use client';
import { UX4GButton } from 'ux4g-components-react/button';

export default function Home() {
  return (
    <UX4GButton variant="primary" size="md" onClick={() => console.log('clicked')}>
      Get Started
    </UX4GButton>
  );
}`;

/* shared styles */

const pageStyles = `
<style>
  .qs-page {
    max-width: 960px;
    margin: 0 auto;
  }

  .qs-code-block {
    background: #171717;
    color: #fafafa;
    border-radius: 12px;
    padding: 24px;
    overflow-x: auto;
    font-family: 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
    font-size: 13px;
    line-height: 1.6;
    white-space: pre;
    margin: 0;
  }

  .qs-tabs {
    display: flex;
    gap: 0;
    border-bottom: 2px solid var(--ux4g-border-color-neutral-subtle, #e5e5e5);
  }

  .qs-tab {
    padding: 12px 24px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    border: none;
    background: none;
    color: var(--ux4g-text-neutral-secondary, #737373);
    border-bottom: 2px solid transparent;
    margin-bottom: -2px;
    transition: color 0.15s, border-color 0.15s;
  }

  .qs-tab:hover {
    color: var(--ux4g-text-neutral-primary, #171717);
  }

  .qs-tab[aria-selected="true"] {
    color: var(--ux4g-text-primary, #6a4eff);
    border-bottom-color: var(--ux4g-text-primary, #6a4eff);
  }

  .qs-panel {
    display: none;
  }

  .qs-panel[data-active="true"] {
    display: block;
  }

  .qs-step-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    font-size: 13px;
    font-weight: 700;
    flex-shrink: 0;
  }

  .qs-file-badge {
    display: inline-block;
    font-family: 'SFMono-Regular', Consolas, monospace;
    font-size: 12px;
    padding: 2px 8px;
    border-radius: 6px;
    background: var(--ux4g-bg-neutral-soft, #f5f5f5);
    color: var(--ux4g-text-neutral-secondary, #737373);
  }
</style>
`;

/* tab script */

const tabScript = `
<script>
  (function() {
    document.addEventListener('click', function(e) {
      var tab = e.target.closest('.qs-tab');
      if (!tab) return;
      var container = tab.closest('.qs-tab-container');
      if (!container) return;

      container.querySelectorAll('.qs-tab').forEach(function(t) {
        t.setAttribute('aria-selected', 'false');
      });
      tab.setAttribute('aria-selected', 'true');

      var target = tab.getAttribute('data-tab');
      container.querySelectorAll('.qs-panel').forEach(function(p) {
        p.setAttribute('data-active', p.getAttribute('data-panel') === target ? 'true' : 'false');
      });
    });
  })();
<\/script>
`;

/* page builder */

const buildPage = () => `
${pageStyles}
<div class="qs-page ux4g-py-2xl ux4g-px-l ux4g-text-neutral-primary">

  <!-- Header -->
  <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s ux4g-mb-xl">
    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Getting Started</span>
    <h1 class="ux4g-display-xs-strong">Quick Start Guide</h1>
    <p class="ux4g-body-l-default ux4g-text-neutral-secondary" style="max-width:700px;">
      Integrate UX4G v3.0 into your project in minutes. Choose the method that matches your stack.
    </p>
  </div>

  <!-- Install step -->
  <section class="ux4g-mb-xl">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s ux4g-mb-m">
      <span class="qs-step-number ux4g-bg-primary-soft ux4g-text-primary">1</span>
      <h2 class="ux4g-heading-l-strong">Choose your integration method</h2>
    </div>
    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-l" style="max-width:700px;">
      UX4G can be added via a CDN link for static HTML pages or installed as an npm package for modern framework and JavaScript/TypeScript projects.
    </p>
  </section>

  <!-- Tabs -->
  <div class="qs-tab-container ux4g-mb-2xl">
    <div class="qs-tabs" role="tablist">
      <button class="qs-tab" role="tab" aria-selected="true" data-tab="html">Web</button>
      <button class="qs-tab" role="tab" aria-selected="false" data-tab="react">React</button>
      <button class="qs-tab" role="tab" aria-selected="false" data-tab="angular">Angular</button>
      <button class="qs-tab" role="tab" aria-selected="false" data-tab="nextjs">Next.js</button>
    </div>

    <!-- HTML Panel -->
    <div class="qs-panel" data-panel="html" data-active="true">
      <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l ux4g-pt-l">
        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-success-soft ux4g-text-success">A</span>
            <h3 class="ux4g-heading-m-strong">Option 1: Add via CDN</h3>
          </div>
          <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
            Drop these tags into your HTML <code>&lt;head&gt;</code> and before <code>&lt;/body&gt;</code>. No build tools needed.
          </p>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">index.css</span>
            <span class="qs-file-badge">ux4g.js</span>
            <span class="qs-file-badge">ux4g-custom.js</span>
          </div>
        </div>
        <pre class="qs-code-block"><code>${escapeHtml(HTML_CODE)}</code></pre>

        <div class="ux4g-card ux4g-card-outline ux4g-o-hidden">
          <div class="ux4g-card-body ux4g-flex-col ux4g-stack-gap-s">
            <h4 class="ux4g-heading-s-strong">CDN URLs</h4>
            <table style="width:100%; border-collapse:collapse; font-size:14px;">
              <thead>
                <tr style="text-align:left; border-bottom:1px solid var(--ux4g-border-color-neutral-subtle, #e5e5e5);">
                  <th class="ux4g-py-xs">File</th>
                  <th class="ux4g-py-xs">URL</th>
                </tr>
              </thead>
              <tbody>
                <tr style="border-bottom:1px solid var(--ux4g-border-color-neutral-subtle, #e5e5e5);">
                  <td class="ux4g-py-xs ux4g-body-s-strong">CSS</td>
                  <td class="ux4g-py-xs" style="word-break:break-all;"><code>${CDN_CSS_URL}</code></td>
                </tr>
                <tr style="border-bottom:1px solid var(--ux4g-border-color-neutral-subtle, #e5e5e5);">
                  <td class="ux4g-py-xs ux4g-body-s-strong">JS (core)</td>
                  <td class="ux4g-py-xs" style="word-break:break-all;"><code>${CDN_JS_URL}</code></td>
                </tr>
                <tr>
                  <td class="ux4g-py-xs ux4g-body-s-strong">JS (custom components)</td>
                  <td class="ux4g-py-xs" style="word-break:break-all;"><code>${CDN_CUSTOM_JS_URL}</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-success-soft ux4g-text-success">B</span>
            <h3 class="ux4g-heading-m-strong">Option 2: Install via npm</h3>
          </div>
          <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
            For JavaScript / TypeScript bundler projects.
          </p>
          <pre class="qs-code-block"><code>${escapeHtml(NPM_INSTALL)}</code></pre>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">main.js / index.js</span>
          </div>
          <pre class="qs-code-block"><code>import 'ux4g-components-web/styles.css';</code></pre>
          <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
            Or import via CSS <code>@import 'ux4g-components-web/styles.css';</code>
          </p>
        </div>
      </div>
    </div>

    <!-- React Panel -->
    <div class="qs-panel" data-panel="react" data-active="false">
      <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l ux4g-pt-l">
        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-info-soft ux4g-text-info">A</span>
            <h3 class="ux4g-heading-m-strong">Install via npm</h3>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(REACT_INSTALL_CODE)}</code></pre>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-info-soft ux4g-text-info">B</span>
            <h3 class="ux4g-heading-m-strong">Import and use components</h3>
          </div>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">App.tsx</span>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(REACT_CSS_CODE)}</code></pre>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-info-soft ux4g-text-info">C</span>
            <h3 class="ux4g-heading-m-strong">Peer dependencies</h3>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(REACT_NOTES_CODE)}</code></pre>
        </div>
      </div>
    </div>

    <!-- Angular Panel -->
    <div class="qs-panel" data-panel="angular" data-active="false">
      <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l ux4g-pt-l">
        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-danger-soft ux4g-text-danger">A</span>
            <h3 class="ux4g-heading-m-strong">Install via npm</h3>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(ANGULAR_INSTALL_CODE)}</code></pre>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-danger-soft ux4g-text-danger">B</span>
            <h3 class="ux4g-heading-m-strong">Register the stylesheet in angular.json</h3>
          </div>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">angular.json</span>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(ANGULAR_STYLES_CODE)}</code></pre>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-danger-soft ux4g-text-danger">C</span>
            <h3 class="ux4g-heading-m-strong">Import the Angular module you need</h3>
          </div>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">app.module.ts</span>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(ANGULAR_MODULE_CODE)}</code></pre>
          <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
            Per-component modules — import what you need from <code>ux4g-components-angular</code>.
          </p>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-danger-soft ux4g-text-danger">D</span>
            <h3 class="ux4g-heading-m-strong">Use in your templates</h3>
          </div>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">app.component.html</span>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(ANGULAR_TEMPLATE_CODE)}</code></pre>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-danger-soft ux4g-text-danger">E</span>
            <h3 class="ux4g-heading-m-strong">Peer dependencies</h3>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(ANGULAR_NOTES_CODE)}</code></pre>
        </div>
      </div>
    </div>

    <!-- Next.js Panel -->
    <div class="qs-panel" data-panel="nextjs" data-active="false">
      <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l ux4g-pt-l">
        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-warning-soft ux4g-text-warning">A</span>
            <h3 class="ux4g-heading-m-strong">Install via npm</h3>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(REACT_INSTALL_CODE)}</code></pre>
        </div>

        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <span class="qs-step-number ux4g-bg-warning-soft ux4g-text-warning">B</span>
            <h3 class="ux4g-heading-m-strong">Import and use components</h3>
          </div>
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs ux4g-mb-xs">
            <span class="qs-file-badge">app/layout.tsx</span>
            <span class="qs-file-badge">page.tsx</span>
          </div>
          <pre class="qs-code-block"><code>${escapeHtml(NEXTJS_CODE)}</code></pre>
          <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
            Import styles from <code>ux4g-components-web</code> and components from <code>ux4g-components-react</code>.
          </p>
        </div>
      </div>
    </div>
  </div>

  <!-- What's included -->
  <section class="ux4g-mb-xl">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s ux4g-mb-m">
      <span class="qs-step-number ux4g-bg-primary-soft ux4g-text-primary">2</span>
      <h2 class="ux4g-heading-l-strong">What's included</h2>
    </div>
    <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-m">
      <div class="ux4g-card ux4g-card-outline ux4g-o-hidden">
        <div class="ux4g-card-body ux4g-flex-col ux4g-stack-gap-xs">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">palette</i>
            <span class="ux4g-heading-s-strong">index.css</span>
          </div>
          <p class="ux4g-body-s-default ux4g-text-neutral-secondary">
            Full design system stylesheet tokens, foundations, components, layout, semantic utilities, and reset styles.
          </p>
        </div>
      </div>
      <div class="ux4g-card ux4g-card-outline ux4g-o-hidden">
        <div class="ux4g-card-body ux4g-flex-col ux4g-stack-gap-xs">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <i class="ux4g-icon-outlined ux4g-text-success ux4g-fs-20">code</i>
            <span class="ux4g-heading-s-strong">ux4g.js</span>
          </div>
          <p class="ux4g-body-s-default ux4g-text-neutral-secondary">
            Core runtime theme toggling, accessibility bar controller, and shared utilities.
          </p>
        </div>
      </div>
      <div class="ux4g-card ux4g-card-outline ux4g-o-hidden">
        <div class="ux4g-card-body ux4g-flex-col ux4g-stack-gap-xs">
          <p class="ux4g-body-s-default ux4g-text-neutral-secondary">
            Custom component behaviours interactive widget scripts for accordions, drawers, modals, and more.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- Next steps -->
  <section>
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s ux4g-mb-m">
      <span class="qs-step-number ux4g-bg-primary-soft ux4g-text-primary">3</span>
      <h2 class="ux4g-heading-l-strong">Next steps</h2>
    </div>
    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s" style="max-width:700px;">
      <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
        <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">widgets</i>
        <p class="ux4g-body-m-default">Browse <strong>Components</strong> in the sidebar to see interactive examples with copy-ready code.</p>
      </div>
      <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
        <i class="ux4g-icon-outlined ux4g-text-secondary ux4g-fs-20">tune</i>
        <p class="ux4g-body-m-default">Explore <strong>Tokens</strong> to understand the color, spacing, and typography scales.</p>
      </div>
      <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
        <i class="ux4g-icon-outlined ux4g-text-success ux4g-fs-20">view_quilt</i>
        <p class="ux4g-body-m-default">Use <strong>Utilities</strong> for rapid layout composition with responsive helpers.</p>
      </div>
    </div>
  </section>

</div>
${tabScript}
`;

export default {
  title: 'Getting Started/Quick Start Guide',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: { autodocs: false },
  },
};

export const QuickStart = {
  name: 'Quick Start Guide',
  render: () => buildPage(),
};

QuickStart.parameters = {
  docs: { disable: true },
};
