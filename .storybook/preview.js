import './preview.css';
import { ux4gLightTheme } from './ux4gTheme';
import { formatCode, htmlToJsx } from '../src/stories/utils/formatCode.js';

// Apply default theme to matches utilities.html
if (typeof window !== 'undefined' && !document.documentElement.hasAttribute('data-theme')) {
  document.documentElement.setAttribute('data-theme', 'light');
}

const customViewports = {
  mobileSmall: {
    name: 'Mobile (Small)',
    styles: {
      width: '320px',
      height: '568px',
    },
    type: 'mobile',
  },
  mobileLarge: {
    name: 'Mobile (Large)',
    styles: {
      width: '414px',
      height: '896px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      width: '768px',
      height: '1024px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      width: '1280px',
      height: '800px',
    },
    type: 'desktop',
  },
};

/** @type { import('@storybook/html').Preview } */
const preview = {
  initialGlobals: {
    viewport: {
      value: 'responsive',
      isRotated: false,
    },
  },
  parameters: {
    showPanel: false,
    actions: { disable: true },
    interactions: { disable: true },
    a11y: { disable: true },
    // Disable native toolbar clutter
    backgrounds: {
      disable: false,
      grid: {
        disable: true,
      },
    },
  
    controls: {
      disable: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: ux4gLightTheme,
    },
    measure: {
      disable: true,
    },
    outline: {
      disable: true,
    },
    viewport: {
      options: customViewports,
    },
    options: {
      storySort: {
        method: 'alphabetical',
        order: ['Getting Started', ['Introduction', 'Quick Start Guide'], 'UX4G', ['Tokens', 'Utilities', 'Components'], '*'],
      },
    },
  },
};

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' }
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
};

const getReactCode = (html) => htmlToJsx(html, 'Component');

const reactToHtml = (jsx) => {
  let html = jsx
    .replace(/import\s+React\s+from\s+['"]react['"];?/g, '')
    .replace(/const\s+\w+\s+=\s+\(\)\s+=>\s+\(\s*<>\s*/g, '')
    .replace(/\s*<\/>\s*\);\s*export\s+default\s+\w+;?/g, '')
    .replace(/className=/g, 'class=')
    .replace(/htmlFor=/g, 'for=')
    .replace(/onClick=/g, 'onclick=')
    .replace(/tabIndex=/g, 'tabindex=')
    .replace(/readOnly/g, 'readonly')
    .replace(/autoFocus/g, 'autofocus')
    .replace(/style=\{\{\s*([^}]+)\s*\}\}/g, (match, p1) => {
      const styles = p1.split(',').map(s => {
        const parts = s.split(':');
        if (parts.length < 2) return '';
        const key = parts[0].trim().replace(/([A-Z])/g, '-$1').toLowerCase();
        const val = parts[1].trim().replace(/['"]/g, '');
        return `${key}: ${val}`;
      }).filter(Boolean).join('; ');
      return `style="${styles}"`;
    });
  return html;
};

const injectCustomCSS = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById('playground-custom-styles')) return;

  const style = document.createElement('style');
  style.id = 'playground-custom-styles';
  style.innerHTML = `

    .playground-controls-wrapper {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    .playground-segmented-control {
      display: inline-flex;
      border-radius: 20px;
      padding: 3px;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .playground-segmented-btn {
      background: transparent;
      border: none;
      padding: 6px 16px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 16px;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }

    /* Light Theme (Dark Code Header) */
    [data-theme="light"] .playground-segmented-control {
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    [data-theme="light"] .playground-segmented-btn {
      color: rgba(255, 255, 255, 0.65);
    }
    [data-theme="light"] .playground-segmented-btn:hover {
      color: #ffffff;
      background: rgba(255, 255, 255, 0.04);
    }
    [data-theme="light"] .playground-reset-btn {
      border: 1px solid rgba(255, 255, 255, 0.15);
      color: rgba(255, 255, 255, 0.8);
      background: rgba(255, 255, 255, 0.03);
    }
    [data-theme="light"] .playground-reset-btn:hover {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border-color: rgba(255, 255, 255, 0.3);
      box-shadow: 0 2px 8px rgba(255, 255, 255, 0.08);
    }
    [data-theme="light"] .copy-code,
    [data-theme="light"] .copy-code span {
      color: rgba(255, 255, 255, 0.8) !important;
    }
    [data-theme="light"] .copy-code:hover,
    [data-theme="light"] .copy-code:hover span {
      color: #ffffff !important;
      background: rgba(255, 255, 255, 0.1) !important;
      border-color: rgba(255, 255, 255, 0.3) !important;
      box-shadow: 0 2px 8px rgba(255, 255, 255, 0.08) !important;
    }

    /* Dark Theme (Light Code Header) */
    [data-theme="dark"] .playground-segmented-control {
      background: rgba(0, 0, 0, 0.04);
      border: 1px solid rgba(0, 0, 0, 0.08);
    }
    [data-theme="dark"] .playground-segmented-btn {
      color: rgba(0, 0, 0, 0.6);
    }
    [data-theme="dark"] .playground-segmented-btn:hover {
      color: #000000;
      background: rgba(0, 0, 0, 0.03);
    }
    [data-theme="dark"] .playground-reset-btn {
      border: 1px solid rgba(0, 0, 0, 0.12);
      color: rgba(0, 0, 0, 0.7);
      background: rgba(0, 0, 0, 0.02);
    }
    [data-theme="dark"] .playground-reset-btn:hover {
      background: rgba(0, 0, 0, 0.06);
      color: #000000;
      border-color: rgba(0, 0, 0, 0.25);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    }
    [data-theme="dark"] .copy-code,
    [data-theme="dark"] .copy-code span {
      color: rgba(0, 0, 0, 0.7) !important;
    }
    [data-theme="dark"] .copy-code:hover,
    [data-theme="dark"] .copy-code:hover span {
      color: #000000 !important;
      background: rgba(0, 0, 0, 0.06) !important;
      border-color: rgba(0, 0, 0, 0.25) !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05) !important;
    }

    /* Copy Code Button Base Styling */
    .copy-code {
      display: inline-flex !important;
      align-items: center !important;
      gap: 6px !important;
      padding: 6px 16px !important;
      font-size: 12px !important;
      font-weight: 600 !important;
      border-radius: 20px !important;
      cursor: pointer !important;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1) !important;
      outline: none !important;
    }
    .copy-code span {
      margin: 0 !important;
      color: inherit !important;
    }

    /* Active Switches background (remains vibrant/branded in both) */
    .playground-segmented-btn.is-active[data-lang="html"] {
      background: linear-gradient(135deg, #0ea5e9, #0284c7) !important;
      color: #ffffff !important;
      box-shadow: 0 2px 8px rgba(14, 165, 233, 0.35) !important;
    }

    .playground-segmented-btn.is-active[data-lang="react"] {
      background: linear-gradient(135deg, #ec4899, #be185d) !important;
      color: #ffffff !important;
      box-shadow: 0 2px 8px rgba(236, 72, 153, 0.35) !important;
    }

    .playground-segmented-btn.is-active[data-lang="angular"] {
      background: linear-gradient(135deg, #f87171, #dc2626) !important;
      color: #ffffff !important;
      box-shadow: 0 2px 8px rgba(248, 113, 113, 0.35) !important;
    }

    .playground-reset-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 16px;
      font-size: 12px;
      font-weight: 600;
      border-radius: 20px;
      cursor: pointer;
      transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      outline: none;
    }

    .playground-reset-btn:hover .ux4g-icon-outlined {
      transform: rotate(-60deg);
    }

    .playground-reset-btn .ux4g-icon-outlined {
      transition: transform 0.25s ease-out;
    }

    .sandbox-editor-wrapper {
      position: relative;
      width: 100%;
    }

    .sandbox-textarea {
      min-height: 260px;
      font-family: 'Fira Code', 'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, monospace;
      background: #0f172a !important;
      color: #e2e8f0;
      border: 1px solid #1e293b;
      border-top: none;
      outline: none;
      resize: vertical;
      width: 100%;
      box-sizing: border-box;
      padding: 18px;
      font-size: 13.5px;
      line-height: 1.6;
      border-radius: 0 0 8px 8px;
      transition: all 0.2s ease;
    }

    .sandbox-textarea.focus-html {
      color: #38bdf8;
    }

    .sandbox-textarea.focus-react {
      color: #f472b6;
    }

    .sandbox-textarea.focus-angular {
      color: #f87171;
    }

    .sandbox-textarea:focus {
      border-color: #3b82f6;
      box-shadow: 0 4px 20px rgba(15, 23, 42, 0.15) !important;
    }

    .sandbox-textarea.focus-html:focus {
      border-color: #38bdf8;
      box-shadow: 0 0 0 1px #38bdf8, 0 4px 20px rgba(56, 189, 248, 0.15) !important;
    }

    .sandbox-textarea.focus-react:focus {
      border-color: #f472b6;
      box-shadow: 0 0 0 1px #f472b6, 0 4px 20px rgba(244, 114, 182, 0.15) !important;
    }

    .sandbox-textarea.focus-angular:focus {
      border-color: #f87171;
      box-shadow: 0 0 0 1px #f87171, 0 4px 20px rgba(248, 113, 113, 0.15) !important;
    }

    .sandbox-badge {
      position: absolute;
      bottom: 12px;
      right: 18px;
      background: rgba(255, 255, 255, 0.05);
      border: 1px solid rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.4);
      font-size: 10px;
      font-weight: 600;
      font-family: inherit;
      padding: 4px 10px;
      border-radius: 20px;
      pointer-events: none;
      user-select: none;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }
  `;
  document.head.appendChild(style);
};

const normalizePlaygroundMarkup = (markup) => {
  if (typeof markup !== 'string') return '';
  if (typeof document === 'undefined') return markup.trim();

  const template = document.createElement('template');
  template.innerHTML = markup.trim();
  return template.innerHTML.trim();
};

const getPreviewBlock = (section, codeArea) => {
  const toggleRow = codeArea.previousElementSibling;
  if (toggleRow?.querySelector?.('.toggle-code')) {
    return toggleRow.previousElementSibling;
  }

  const sectionChildren = Array.from(section.children);
  const codeAreaIndex = sectionChildren.indexOf(codeArea);
  if (codeAreaIndex > 1) {
    return sectionChildren[codeAreaIndex - 2];
  }

  return section.querySelector('.ux4g-border, .ux4g-mb-l, .ux4g-p-xl') || null;
};

const getPreviewContainer = (previewBlock, initialHtml) => {
  if (!previewBlock) return null;

  const normalizedInitialHtml = normalizePlaygroundMarkup(initialHtml);
  if (!normalizedInitialHtml) {
    return previewBlock;
  }

  if (normalizePlaygroundMarkup(previewBlock.innerHTML) === normalizedInitialHtml) {
    return previewBlock;
  }

  const descendants = Array.from(previewBlock.querySelectorAll('*'));
  const innerMatch = descendants.find(
    (element) => normalizePlaygroundMarkup(element.innerHTML) === normalizedInitialHtml
  );
  if (innerMatch) {
    return innerMatch;
  }

  const outerMatch = descendants.find(
    (element) => normalizePlaygroundMarkup(element.outerHTML) === normalizedInitialHtml
  );
  if (outerMatch?.parentElement && previewBlock.contains(outerMatch.parentElement)) {
    return outerMatch.parentElement;
  }

  const paddedWrapper = previewBlock.querySelector('.ux4g-p-xl');
  if (paddedWrapper) {
    return paddedWrapper;
  }

  return previewBlock;
};

const loadPrism = () => {
  if (typeof document === 'undefined') return;
  if (document.getElementById('prism-core')) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
  document.head.appendChild(link);
  const script = document.createElement('script');
  script.id = 'prism-core';
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
  script.async = true;
  script.onload = () => {
    if (window.Prism) {
      window.Prism.highlightAll();
    }
  };
  document.head.appendChild(script);
};

const initSandbox = (skipSandbox = false) => {
  if (typeof document === 'undefined') return;
  injectCustomCSS();
  loadPrism();

  // Add </> icon to all toggle-code buttons and wire show/hide logic
  const toggleButtons = document.querySelectorAll('button.toggle-code');
  toggleButtons.forEach((btn) => {
    if (btn.dataset.iconAdded) return;
    btn.dataset.iconAdded = 'true';

    btn.style.display = 'inline-flex';
    btn.style.alignItems = 'center';
    btn.style.gap = '6px';

    const originalText = btn.textContent.trim();
    btn.innerHTML = `<span class="ux4g-icon-outlined ux4g-fs-16">code</span>${originalText}`;

    const resetBodyOverflow = () => {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('overflow-y');
    };

    btn.addEventListener('click', () => {
      const targetId = btn.dataset.target;
      const codeArea = document.getElementById(targetId);
      if (!codeArea) return;
      const isHidden = codeArea.style.display === 'none';
      codeArea.style.display = isHidden ? 'block' : 'none';
      const label = isHidden ? 'Hide Code' : 'Show Code';
      btn.innerHTML = `<span class="ux4g-icon-outlined ux4g-fs-16">code</span>${label}`;
      resetBodyOverflow();
      setTimeout(resetBodyOverflow, 0);
    });
  });
  
  const sections = document.querySelectorAll('[id^="section-"]');
  sections.forEach((section) => {
    const blockId = section.id.replace('section-', '');

    // Find the code-area container first to avoid conflicts with demo content
    // that may contain the same CSS classes (e.g., Card, Tab, Table components)
    const codeArea = document.getElementById('code-' + blockId) || section.querySelector('.code-area');
    if (!codeArea) return;

    const tabList = codeArea.querySelector('.ux4g-tab-list');
    if (!tabList) return;

    const existingTrigger = tabList.querySelector('.sandbox-tab-trigger');

    if (skipSandbox) {
      if (existingTrigger) {
        existingTrigger.remove();
      }
      const controls = codeArea.querySelector('.playground-controls-wrapper');
      if (controls) controls.remove();
      const editor = codeArea.querySelector('.sandbox-editor-wrapper');
      if (editor) editor.remove();
      const preBlock = codeArea.querySelector('.ux4g-card-body pre');
      if (preBlock) preBlock.style.display = 'block';
      const cardHeaderTitle = codeArea.querySelector('.ux4g-card-header .ux4g-label-s-strong');
      if (cardHeaderTitle) cardHeaderTitle.textContent = 'Source Code';
      return;
    }

    // If sandbox tab already exists, skip
    if (existingTrigger) return;

    // Find code block elements WITHIN the code-area (not the section)
    // This prevents querySelector from matching demo content elements
    const cardHeader = codeArea.querySelector('.ux4g-card-header');
    const cardHeaderTitle = cardHeader ? cardHeader.querySelector('.ux4g-label-s-strong') : null;
    const cardBody = codeArea.querySelector('.ux4g-card-body');
    const preBlock = cardBody ? cardBody.querySelector('pre') : null;
    const codeElement = preBlock ? preBlock.querySelector('code') : null;

    // Find preview container with multiple fallbacks to handle different renderDemoCodeBlock patterns
    // Pattern 1: Standard — .ux4g-p-xl > div (accordion, alert, button, card, etc.)
    // Pattern 2: Border wrapper — .ux4g-border (badge, carousel, checkbox, table, etc.)
    // Pattern 3: Direct mb-l wrapper — div.ux4g-mb-l (navbar, draft-status, etc.)
    // Pattern 4: Flex center wrapper — div.ux4g-d-flex.ux4g-jc-center (feedback, social-link, etc.)
    if (!cardBody || !preBlock || !cardHeader) return;
    const previewBlock = getPreviewBlock(section, codeArea);

    // Create Sandbox Tab
    const sandboxTab = document.createElement('li');
    sandboxTab.className = 'tab-trigger sandbox-tab-trigger ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm ux4g-ml-auto ux4g-as-center';
    sandboxTab.dataset.lang = 'sandbox';
    sandboxTab.dataset.id = blockId;
    sandboxTab.innerHTML = `
      <span class="ux4g-d-flex ux4g-ai-center ux4g-gap-2xs">
        <span class="ux4g-icon-outlined ux4g-fs-16">auto_awesome</span>
        Playground
      </span>
    `;
    tabList.appendChild(sandboxTab);

    // Get initial HTML
    const snippetHtml = codeElement ? codeElement.textContent : (previewBlock ? previewBlock.innerHTML : '');
    const previewContainer = getPreviewContainer(previewBlock, snippetHtml);
    if (!previewContainer) return;

    // Use the actual DOM content as the initial HTML for the playground.
    const initialHtml = formatCode(previewContainer.innerHTML);
    // Use the formatted code snippet from the code block for tab display.
    const initialCode = snippetHtml || initialHtml;

    // Helpers for code generation
    const getReactCode = (html) => htmlToJsx(html, 'PlaygroundComponent');
    const reactToHtml = (jsx) => {
      let html = jsx;
      html = html.replace(/import React.*\n+/g, '');
      html = html.replace(/const \w+ = \(\) => \([\s\S]*?<>\s*/, '');
      html = html.replace(/\s*<\/>[\s\S]*?\);\s*export default \w+;?/, '');
      html = html.replace(/className=/g, 'class=');
      html = html.replace(/htmlFor=/g, 'for=');
      html = html.replace(/ \/>/g, '>');
      return html.trim();
    };

    // State for playground
    let currentLang = 'html';
    const codeState = {
      html: initialCode,
      react: getReactCode(initialCode),
      angular: initialCode
    };

    const reinitializePreview = () => {
      if (typeof window !== 'undefined' && window.ux4g?.init) {
        try {
          window.ux4g.init(previewContainer);
        } catch (e) {
          console.error("Error re-initializing UX4G behaviors:", e);
        }
      }
    };

    const restorePreview = () => {
      previewContainer.innerHTML = initialHtml;
      reinitializePreview();
    };

    // Create Playground controls inside card header
    const controlsContainer = document.createElement('div');
    controlsContainer.className = 'playground-controls-wrapper';
    controlsContainer.style.cssText = 'display: none; margin-right: auto; margin-left: auto;';

    const segmentedControl = document.createElement('div');
    segmentedControl.className = 'playground-segmented-control';
    segmentedControl.innerHTML = `
      <button class="playground-segmented-btn is-active" data-lang="html">HTML</button>
      <button class="playground-segmented-btn" data-lang="react">React</button>
      <button class="playground-segmented-btn" data-lang="angular">Angular</button>
    `;
    controlsContainer.appendChild(segmentedControl);

    const resetButton = document.createElement('button');
    resetButton.className = 'playground-reset-btn';
    resetButton.innerHTML = `
      <span class="ux4g-icon-outlined ux4g-fs-14">restart_alt</span>
      Reset
    `;
    controlsContainer.appendChild(resetButton);

    const copyBtn = cardHeader.querySelector('.copy-code');
    if (copyBtn) {
      cardHeader.insertBefore(controlsContainer, copyBtn);

      // Override copy behavior to respect playground state and active language
      copyBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const isPlayground = editorWrapper.style.display === 'block';
        const textToCopy = isPlayground ? textarea.value : codeState[currentLang];
        navigator.clipboard.writeText(textToCopy).then(() => {
          const original = copyBtn.innerHTML;
          copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
          setTimeout(() => copyBtn.innerHTML = original, 2000);
        });
      };
    } else {
      cardHeader.appendChild(controlsContainer);
    }

    // Create Editor Wrapper
    const editorWrapper = document.createElement('div');
    editorWrapper.className = 'sandbox-editor-wrapper';
    editorWrapper.style.display = 'none';

    // Create Textarea
    const textarea = document.createElement('textarea');
    textarea.className = 'sandbox-textarea focus-html';
    textarea.value = initialHtml;
    editorWrapper.appendChild(textarea);

    // Create Badge
    const badge = document.createElement('span');
    badge.className = 'sandbox-badge';
    badge.textContent = 'Live Compiler Active';
    editorWrapper.appendChild(badge);

    cardBody.appendChild(editorWrapper);

    // Setup tab click event listeners (scoped to code-area to avoid demo content conflicts)
    const allTabs = codeArea.querySelectorAll('.tab-trigger');
    allTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        // Deselect all tabs
        allTabs.forEach((t) => t.classList.remove('is-active'));
        tab.classList.add('is-active');

        const wasSandbox = editorWrapper.style.display === 'block';
        const lang = tab.dataset.lang;
        if (lang === 'sandbox') {
          preBlock.style.display = 'none';
          editorWrapper.style.display = 'block';
          controlsContainer.style.display = 'inline-flex';
          if (cardHeaderTitle) cardHeaderTitle.textContent = 'Interactive Playground';
          
          // Set textarea to current playground selection
          textarea.value = codeState[currentLang];

          // Make playground tab button active/filled
          sandboxTab.classList.remove('ux4g-btn-outline-primary');
          sandboxTab.classList.add('ux4g-btn-primary');
        } else {
          // Revert playground tab button to outline style
          sandboxTab.classList.remove('ux4g-btn-primary');
          sandboxTab.classList.add('ux4g-btn-outline-primary');

          if (wasSandbox) {
            codeState.html = initialCode;
            codeState.react = getReactCode(initialCode);
            codeState.angular = initialCode;

            textarea.value = codeState[currentLang];
            restorePreview();
          }

          currentLang = lang;
          editorWrapper.style.display = 'none';
          preBlock.style.display = 'block';
          controlsContainer.style.display = 'none';
          if (cardHeaderTitle) cardHeaderTitle.textContent = 'Source Code';

          // Sync the code block with our state
          if (codeElement) {
            codeElement.textContent = codeState[lang];
            codeElement.className = 'code-output language-' + (lang === 'react' ? 'javascript' : 'html') + ' ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap';
            if (window.Prism) {
              window.Prism.highlightElement(codeElement);
            }
          }
        }
      });
    });

    // Handle segmented switcher clicks
    const segmentedBtns = segmentedControl.querySelectorAll('.playground-segmented-btn');
    segmentedBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        segmentedBtns.forEach((b) => b.classList.remove('is-active'));
        btn.classList.add('is-active');

        currentLang = btn.dataset.lang;
        textarea.value = codeState[currentLang];
        textarea.className = `sandbox-textarea focus-${currentLang}`;
      });
    });

    // Handle Reset
    resetButton.addEventListener('click', (e) => {
      e.preventDefault();
      codeState.html = initialHtml;
      codeState.react = getReactCode(initialHtml);
      codeState.angular = initialHtml;
      
      textarea.value = codeState[currentLang];
      restorePreview();

      const originalHTML = resetButton.innerHTML;
      resetButton.innerHTML = `<span class="ux4g-icon-outlined ux4g-fs-14 ux4g-text-success">check</span> Reset`;
      setTimeout(() => {
        resetButton.innerHTML = originalHTML;
      }, 1500);
    });

    // Sync input from textarea to preview container and states
    textarea.addEventListener('input', () => {
      const val = textarea.value;

      // Only update codeState and framework tabs if playground code is NOT cleared/empty
      if (val.trim() !== '') {
        // Update the active playground language state
        codeState[currentLang] = val;

        if (currentLang === 'html') {
          codeState.react = getReactCode(val);
          codeState.angular = val;
        } else if (currentLang === 'react') {
          const html = reactToHtml(val);
          codeState.html = html;
          codeState.angular = html;
        } else if (currentLang === 'angular') {
          codeState.html = val;
          codeState.react = getReactCode(val);
        }

        // Keep static code block synced with the latest valid code (non-empty)
        if (codeElement) {
          codeElement.textContent = codeState.html;
        }
      }

      // Always update the live visual preview container
      if (previewContainer) {
        if (currentLang === 'html' || currentLang === 'angular') {
          previewContainer.innerHTML = val;
        } else if (currentLang === 'react') {
          previewContainer.innerHTML = val.trim() !== '' ? reactToHtml(val) : '';
        }
      }

      // Re-initialize UX4G scripts on the modified container
      reinitializePreview();
    });
  });

  // Re-highlight all code blocks if Prism is already loaded (e.g. from CDN cache)
  if (typeof window !== 'undefined' && window.Prism) {
    window.Prism.highlightAll();
  }
};

export const decorators = [
  (story, context) => {
    const theme = context.globals.theme || 'light';
    const isIntroduction = 
      context.name.toLowerCase() === 'introduction' || 
      context.id.toLowerCase().endsWith('--introduction') ||
      context.title.toLowerCase().includes('introduction');

    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
      if (typeof window !== 'undefined') {
        window.requestAnimationFrame(() => {
          if (window.ux4g?.init) {
            window.ux4g.init(document);
          }
          initSandbox(isIntroduction);
        });
      }
    }
    return story();
  },
];

export default preview;
