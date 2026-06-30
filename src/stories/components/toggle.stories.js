/**
 * Switch Component Stories
 *
 * Showcasing switch states, grouping, sizing, labels, and semantic descriptions.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Switch',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Switches let users turn a setting on or off with optional labels, required markers, supporting descriptions, and list-switch interaction patterns.',
            },
            source: { code: null },
            canvas: {
                sourceState: 'none',
                withToolbar: true,
            },
            story: {
                inline: false,
            },
        },
    },
};

// --- Helper Functions ---

const getHeroHeader = (title, description) => `
    <section class="ux4g-bg-primary-strong ux4g-text-white">
        <div class="ux4g-p-xl">
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l ux4g-opacity-80">
                <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                    <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                    <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                </div>
            </div>
            <div class="ux4g-max-w-800">
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'Switch');

const escapeCodeForInlineScript = (code) =>
    code
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$')
        .replace(/<\/script>/gi, '<\\/script>');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl ux4g-pb-xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-mb-l">
                <div class="ux4g-p-l ux4g-d-flex ux4g-jc-center ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-2xl ux4g-w-100 ux4g-flex-wrap">
                        ${htmlContent}
                    </div>
                </div>
            </div>

            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Hide Code</button>
            </div>

            <div class="code-area ux4g-mt-m" id="code-${id}" style="display: block;">
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-m">
                    <ul class="ux4g-tab-list">
                        <li class="ux4g-tab-item is-active tab-trigger" data-lang="html" data-id="${id}">HTML</li>
                        <li class="ux4g-tab-item tab-trigger" data-lang="react" data-id="${id}">React</li>
                        <li class="ux4g-tab-item tab-trigger" data-lang="angular" data-id="${id}">Angular</li>
                    </ul>
                </div>
                
                <div class="ux4g-bg-neutral-stronger ux4g-radius-m ux4g-o-hidden">
                    <div class="ux4g-card-header ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-py-s ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">Source Code</span>
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm ux4g-text-white copy-code" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">content_copy</span>
                            <span class="ux4g-text-white">Copy</span>
                        </button>
                    </div>
                    <div class="ux4g-card-body ux4g-p-none">
                        <pre class="ux4g-m-none ux4g-p-l ux4g-w-100"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                    </div>
                </div>
            </div>
            
            <script>
                (function() {
                    const blockId = "${id}";
                    const htmlCode = \`${escapeCodeForInlineScript(displayCode)}\`;
                    const reactCode = \`${escapeCodeForInlineScript(reactCode)}\`;
                    const angularCode = \`${escapeCodeForInlineScript(angularCode)}\`;
                    
                    const initHandlers = () => {
                        const section = document.getElementById('section-' + blockId);
                        if (!section) {
                            setTimeout(initHandlers, 100);
                            return;
                        }
                        
                        const toggleBtn = section.querySelector('.toggle-code') || document.querySelector('[data-target="code-' + blockId + '"]');
                        const codeArea = document.getElementById('code-' + blockId);
                        const output = document.getElementById('output-' + blockId);
                        const tabs = document.querySelectorAll('.tab-trigger[data-id="' + blockId + '"]');
                        const copyBtn = section.querySelector('.copy-code') || document.querySelector('.copy-code[data-id="' + blockId + '"]');
                        
                        if (!toggleBtn || !codeArea || !output) {
                            return;
                        }
                        
                        let currentLang = 'html';
                        
                        const highlight = () => {
                            const code = currentLang === 'react' ? reactCode : (currentLang === 'angular' ? angularCode : htmlCode);
                            output.textContent = code;
                            output.className = 'code-output language-' + (currentLang === 'react' ? 'javascript' : 'html') + ' ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap';
                            if (window.Prism) window.Prism.highlightElement(output);
                        };

                        toggleBtn.onclick = () => {
                            const isHidden = codeArea.style.display === 'none';
                            codeArea.style.display = isHidden ? 'block' : 'none';
                            toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                            if (isHidden) highlight();
                        };
                        
                        tabs.forEach(tab => {
                            tab.onclick = () => {
                                tabs.forEach(t => t.classList.remove('is-active'));
                                tab.classList.add('is-active');
                                currentLang = tab.dataset.lang;
                                highlight();
                            };
                        });
                        
                        copyBtn.onclick = () => {
                            navigator.clipboard.writeText(output.textContent).then(() => {
                                const original = copyBtn.innerHTML;
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
                                setTimeout(() => copyBtn.innerHTML = original, 2000);
                            });
                        };

                        if (!document.getElementById('prism-core')) {
                            const link = document.createElement('link');
                            link.rel = 'stylesheet';
                            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
                            document.head.appendChild(link);
                            const script = document.createElement('script');
                            script.id = 'prism-core';
                            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
                            script.onload = highlight;
                            document.head.appendChild(script);
                        } else {
                            highlight();
                        }
                    };
                    
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initHandlers);
                    } else {
                        initHandlers();
                    }
                })();
            </script>
        </div>
    `;
};

const renderStoryPage = (title, description, content) => `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100 ux4g-o-hidden">
        ${getHeroHeader(title, description)}

        <div class="ux4g-w-100 ux4g-o-hidden ux4g-p-m">
            <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                ${content}
            </div>
        </div>
    </div>
`;

const STATES_MATRIX_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100 ux4g-ai-center">
        <div></div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">OFF</div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">ON</div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100 ux4g-ai-center">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Default</div>
        <div>
            <label class="ux4g-switch ux4g-switch-md">
                <input class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Off</span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">On</span></div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100 ux4g-ai-center">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Hover</div>
        <div>
            <label class="ux4g-switch ux4g-switch-md is-hovered">
                <input class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Off</span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-switch ux4g-switch-md is-hovered">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">On</span></div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100 ux4g-ai-center">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Active</div>
        <div>
            <label class="ux4g-switch ux4g-switch-md is-active">
                <input class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Off</span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-switch ux4g-switch-md is-active">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">On</span></div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100 ux4g-ai-center">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Focused</div>
        <div>
            <label class="ux4g-switch ux4g-switch-md is-focused">
                <input class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Off</span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-switch ux4g-switch-md is-focused">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">On</span></div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100 ux4g-ai-center">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Disabled</div>
        <div>
            <label class="ux4g-switch ux4g-switch-md">
                <input class="ux4g-switch-input" disabled="" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Off</span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" disabled="" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">On</span></div>
            </label>
        </div>
    </div>
</div>
`.trim();

const LIST_INTERACTION_PATTERNS_HTML = `
<div class="ux4g-w-100" id="toggle-list-patterns-demo">
<div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-l ux4g-w-100">
        <div>
<div class="ux4g-mb-s ux4g-fw-semibold">Default (whole list item toggles switch)</div>
            <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                <li class="ux4g-list-item" role="option">
                    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </button>
                </li>
                <li class="ux4g-list-item" role="option">
                    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </button>
                </li>
                <li class="ux4g-list-item" role="option">
                    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </button>
                </li>
                <li class="ux4g-list-item" role="option">
                    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </button>
                </li>
            </ul>
        </div>
        <div>
<div class="ux4g-mb-s ux4g-fw-semibold">Only switch toggles (list item not clickable)</div>
            <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                <li class="ux4g-list-item" role="option">
                    <span class="ux4g-list-item-row">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </span>
                </li>
                <li class="ux4g-list-item" role="option">
                    <span class="ux4g-list-item-row">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </span>
                </li>
                <li class="ux4g-list-item" role="option">
                    <span class="ux4g-list-item-row">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </span>
                </li>
                <li class="ux4g-list-item" role="option">
                    <span class="ux4g-list-item-row">
                        <span class="ux4g-list-item-start">
                            <span aria-hidden="true">Label list switch</span>
                        </span>
                        <span class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                            </label>
                        </span>
                    </span>
                </li>
            </ul>
        </div>
    </div>
    <script>
        (function () {
            const root = document.getElementById('toggle-list-patterns-demo');
            if (root && window.ux4g && typeof window.ux4g.init === 'function') {
                window.ux4g.init(root);
            }
        })();
    </script>
</div>
`.trim();

const SIZES_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Large</div>
            <label class="ux4g-switch ux4g-switch-lg">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Switch Large</span></div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Medium</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Switch Medium</span></div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Small</div>
            <label class="ux4g-switch ux4g-switch-sm">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content"><span class="ux4g-switch-label">Switch Small</span></div>
            </label>
        </div>
    </div>
</div>
`.trim();

const LABEL_VARIANTS_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Full (all elements)</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header">
                        <span class="ux4g-switch-label">Label</span>
                        <span class="ux4g-switch-required">*</span>
                        <span class="ux4g-switch-icon"><i class="ux4g-icon-outlined ux4g-switch-icon">token</i></span>
                    </div>
                    <div class="ux4g-switch-description">
                        <span class="ux4g-switch-desc-icon"><i class="ux4g-icon ux4g-switch-icon">info</i></span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Label + required</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header">
                        <span class="ux4g-switch-label">Label</span>
                        <span class="ux4g-switch-required">*</span>
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Label only</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header"><span class="ux4g-switch-label">Label</span></div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Control only</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
            </label>
        </div>
    </div>
</div>
`.trim();

const DESCRIPTION_VARIANTS_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Helper</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header"><span class="ux4g-switch-label">Label</span></div>
                    <div class="ux4g-switch-description ux4g-switch-desc-helper">
                        <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-helper"><i class="ux4g-icon ux4g-switch-icon">info</i></span>
                        Helper text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Error</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header"><span class="ux4g-switch-label">Label</span></div>
                    <div class="ux4g-switch-description ux4g-switch-desc-error">
                        <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-error"><i class="ux4g-icon ux4g-switch-icon">error</i></span>
                        Error text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Warning</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header"><span class="ux4g-switch-label">Label</span></div>
                    <div class="ux4g-switch-description ux4g-switch-desc-warning">
                        <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-warning"><i class="ux4g-icon ux4g-switch-icon">warning</i></span>
                        Warning text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Success</div>
            <label class="ux4g-switch ux4g-switch-md">
                <input checked="" class="ux4g-switch-input" type="checkbox" />
                <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                <div class="ux4g-switch-content">
                    <div class="ux4g-switch-header"><span class="ux4g-switch-label">Label</span></div>
                    <div class="ux4g-switch-description ux4g-switch-desc-success">
                        <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-success"><i class="ux4g-icon ux4g-switch-icon">check_circle</i></span>
                        Success text
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>
`.trim();

const STATES_MATRIX_CLEAN_CODE = `
/* Default: Off */
<label class="ux4g-switch ux4g-switch-md">
  <input class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Off</span>
  </div>
</label>

/* Default: On */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">On</span>
  </div>
</label>

/* Hover: Off */
<label class="ux4g-switch ux4g-switch-md is-hovered">
  <input class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Off</span>
  </div>
</label>

/* Hover: On */
<label class="ux4g-switch ux4g-switch-md is-hovered">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">On</span>
  </div>
</label>

/* Active: Off */
<label class="ux4g-switch ux4g-switch-md is-active">
  <input class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Off</span>
  </div>
</label>

/* Active: On */
<label class="ux4g-switch ux4g-switch-md is-active">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">On</span>
  </div>
</label>

/* Focused: Off */
<label class="ux4g-switch ux4g-switch-md is-focused">
  <input class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Off</span>
  </div>
</label>

/* Focused: On */
<label class="ux4g-switch ux4g-switch-md is-focused">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">On</span>
  </div>
</label>

/* Disabled: Off */
<label class="ux4g-switch ux4g-switch-md">
  <input disabled class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Off</span>
  </div>
</label>

/* Disabled: On */
<label class="ux4g-switch ux4g-switch-md">
  <input checked disabled class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">On</span>
  </div>
</label>
`.trim();

const LIST_INTERACTION_PATTERNS_CLEAN_CODE = `
/* Pattern: Default (whole list item toggles switch) */
<ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
  <li class="ux4g-list-item" role="option">
    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </button>
  </li>
  <li class="ux4g-list-item" role="option">
    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </button>
  </li>
  <li class="ux4g-list-item" role="option">
    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </button>
  </li>
  <li class="ux4g-list-item" role="option">
    <button class="ux4g-list-item-row ux4g-list-switch-select" type="button">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </button>
  </li>
</ul>

/* Pattern: Only switch toggles (list item not clickable) */
<ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
  <li class="ux4g-list-item" role="option">
    <span class="ux4g-list-item-row">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </span>
  </li>
  <li class="ux4g-list-item" role="option">
    <span class="ux4g-list-item-row">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </span>
  </li>
  <li class="ux4g-list-item" role="option">
    <span class="ux4g-list-item-row">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </span>
  </li>
  <li class="ux4g-list-item" role="option">
    <span class="ux4g-list-item-row">
      <span class="ux4g-list-item-start">
        <span aria-hidden="true">Label list switch</span>
      </span>
      <span class="ux4g-list-item-end">
        <label class="ux4g-switch ux4g-switch-md">
          <input class="ux4g-switch-input" type="checkbox" role="switch" />
          <div class="ux4g-switch-control">
            <span class="ux4g-switch-track">
              <span class="ux4g-switch-thumb"></span>
            </span>
          </div>
        </label>
      </span>
    </span>
  </li>
</ul>
`.trim();

const SIZES_CLEAN_CODE = `
/* Size: Large */
<label class="ux4g-switch ux4g-switch-lg">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Switch Large</span>
  </div>
</label>

/* Size: Medium */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Switch Medium</span>
  </div>
</label>

/* Size: Small */
<label class="ux4g-switch ux4g-switch-sm">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <span class="ux4g-switch-label">Switch Small</span>
  </div>
</label>
`.trim();

const LABEL_VARIANTS_CLEAN_CODE = `
/* Variant: Full */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
      <span class="ux4g-switch-required">*</span>
      <span class="ux4g-switch-icon">
        <i class="ux4g-icon-outlined ux4g-switch-icon">token</i>
      </span>
    </div>
    <div class="ux4g-switch-description">
      <span class="ux4g-switch-desc-icon">
        <i class="ux4g-icon ux4g-switch-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Variant: Label + Required */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
      <span class="ux4g-switch-required">*</span>
    </div>
  </div>
</label>

/* Variant: Label Only */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
    </div>
  </div>
</label>

/* Variant: Control Only */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
</label>
`.trim();

const DESCRIPTION_VARIANTS_CLEAN_CODE = `
/* Description: Helper */
<label class="ux4g-switch ux4g-switch-md">
  <input class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
    </div>
    <div class="ux4g-switch-description ux4g-switch-desc-helper">
      <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-helper">
        <i class="ux4g-icon ux4g-switch-icon">info</i>
      </span>
      Helper text
    </div>
  </div>
</label>

/* Description: Error */
<label class="ux4g-switch ux4g-switch-md">
  <input class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
    </div>
    <div class="ux4g-switch-description ux4g-switch-desc-error">
      <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-error">
        <i class="ux4g-icon ux4g-switch-icon">error</i>
      </span>
      Error text
    </div>
  </div>
</label>

/* Description: Warning */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
    </div>
    <div class="ux4g-switch-description ux4g-switch-desc-warning">
      <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-warning">
        <i class="ux4g-icon ux4g-switch-icon">warning</i>
      </span>
      Warning text
    </div>
  </div>
</label>

/* Description: Success */
<label class="ux4g-switch ux4g-switch-md">
  <input checked class="ux4g-switch-input" type="checkbox" />
  <div class="ux4g-switch-control">
    <span class="ux4g-switch-track">
      <span class="ux4g-switch-thumb"></span>
    </span>
  </div>
  <div class="ux4g-switch-content">
    <div class="ux4g-switch-header">
      <span class="ux4g-switch-label">Label</span>
    </div>
    <div class="ux4g-switch-description ux4g-switch-desc-success">
      <span class="ux4g-switch-desc-icon ux4g-switch-desc-icon-success">
        <i class="ux4g-icon ux4g-switch-icon">check_circle</i>
      </span>
      Success text
    </div>
  </div>
</label>
`.trim();

const getStoryParameters = (code) => ({
    docs: {
        disable: true,
        source: { code: formatCode(code) },
    },
});

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
${getHeroHeader('Switch', 'Switches expose a binary on or off decision with support for simulated interaction states, size scaling, metadata-rich labels, semantic descriptions, and list-switch interaction patterns from the switch showcase.')}

        <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-my-xl">
                    <div class="ux4g-card ux4g-card-solid">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Key behaviors</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports off and on states with simulated hover, active, focused, and disabled treatments using the same switch anatomy.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Scales across large, medium, and small variants without changing the markup structure of the control.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Pairs the switch with optional labels, required markers, icons, and semantic helper, error, warning, or success descriptions.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Includes two source-backed list-switch patterns where either the full row or only the switch control handles the interaction.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ux4g-card ux4g-card-outline">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Available stories</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-primary-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-primary">Introduction</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Overview, source-backed live previews, and class reference for the Switch component.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-info">States Matrix</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Default, hover, active, focused, and disabled rows aligned against off and on positions.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-success">Sizes & Labels</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Large, medium, and small sizes, plus full, required, label-only, and control-only label treatments.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-warning">Descriptions & Lists</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Semantic descriptions and the two source-backed list-switch interaction patterns.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">State Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Live previews taken directly from the switch states matrix in <code>src/index.html</code>.</p>
                        </div>
                        <div class="ux4g-p-xl">
                            ${STATES_MATRIX_HTML}
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Sizes</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Large, medium, and small switch sizes from the source component section.</p>
                        </div>
                        <div class="ux4g-p-xl">
                            ${SIZES_HTML}
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Label Variants</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Full, required, label-only, and control-only variants from the switch showcase.</p>
                        </div>
                        <div class="ux4g-p-xl">
                            ${LABEL_VARIANTS_HTML}
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Description Variants</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Helper, error, warning, and success descriptions using source-backed switch description classes.</p>
                        </div>
                        <div class="ux4g-p-xl">
                            ${DESCRIPTION_VARIANTS_HTML}
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">List Interaction Patterns</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Whole-row toggle and switch-only toggle patterns from the list-switch source block.</p>
                        </div>
                        <div class="ux4g-p-xl">
                            ${LIST_INTERACTION_PATTERNS_HTML}
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
<p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy the classes used by the showcased Switch variants.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structure</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
{ class: 'ux4g-switch', label: 'Switch wrapper' },
        { class: 'ux4g-switch-input', label: 'Native checkbox input' },
        { class: 'ux4g-switch-control', label: 'Control wrapper' },
        { class: 'ux4g-switch-track', label: 'Track element' },
        { class: 'ux4g-switch-thumb', label: 'Thumb element' },
        { class: 'ux4g-switch-content', label: 'Content wrapper' },
        { class: 'ux4g-switch-header', label: 'Header row' },
        { class: 'ux4g-switch-label', label: 'Label text' },
        { class: 'ux4g-switch-description', label: 'Description text row' }
    ].map(item => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${item.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${item.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${item.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-switch-lg', label: 'Large size' },
        { class: 'ux4g-switch-md', label: 'Medium size' },
        { class: 'ux4g-switch-sm', label: 'Small size' },
        { class: 'ux4g-switch-required', label: 'Required marker' },
        { class: 'ux4g-switch-icon', label: 'Icon treatment' },
        { class: 'ux4g-switch-desc-helper', label: 'Helper description' },
        { class: 'ux4g-switch-desc-error', label: 'Error description' },
        { class: 'ux4g-switch-desc-warning', label: 'Warning description' },
        { class: 'ux4g-switch-desc-success', label: 'Success description' },
        { class: 'ux4g-list-switch', label: 'List switch layout' },
{ class: 'ux4g-list-switch-select', label: 'Whole-row switch pattern' }
    ].map(item => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${item.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${item.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${item.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <script>
            (function() {
                const intro = document.getElementById('intro-container');
                if (!intro) return;
                const copyBtns = intro.querySelectorAll('.copy-text');
                copyBtns.forEach(btn => {
                    btn.onclick = () => {
                        const text = btn.dataset.text;
                        navigator.clipboard.writeText(text).then(() => {
                            const original = btn.innerHTML;
                            btn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-success">check</span>';
                            setTimeout(() => btn.innerHTML = original, 2000);
                        });
                    };
                });
            })();
        </script>
    </div>
`;

export const Introduction = {
    render: () => INTRODUCTION_CONTENT,
    parameters: {
        docs: { disable: true },
    },
};

export const StatesMatrix = () => {
    return renderStoryPage(
    'Switch States Matrix',
    'Reference the core switch interactions pulled directly from the switch states showcase in src/index.html.',
        renderDemoCodeBlock(
            'toggle-states-matrix',
            'States Matrix',
            'Default, hover, active, focused, and disabled states across off and on switch positions.',
            STATES_MATRIX_HTML,
            false,
            STATES_MATRIX_CLEAN_CODE
        )
    );
};

export const Sizes = () => {
    return renderStoryPage(
    'Switch Sizes',
        'Compare the large, medium, and small switch scales using the exact size classes from the source component showcase.',
        renderDemoCodeBlock(
            'toggle-sizes',
            'Sizes',
    'Large, medium, and small switches share the same switch anatomy and checked state structure.',
            SIZES_HTML,
            false,
            SIZES_CLEAN_CODE
        )
    );
};

export const LabelVariants = () => {
    return renderStoryPage(
    'Switch Label Variants',
        'Review how the switch behaves as label metadata is progressively removed from the full pattern down to control-only.',
        renderDemoCodeBlock(
    'switch-label-variants',
            'Label Variants',
            'Full, label-plus-required, label-only, and control-only variants sourced directly from the switch section in src/index.html.',
            LABEL_VARIANTS_HTML,
            false,
            LABEL_VARIANTS_CLEAN_CODE
        )
    );
};

export const DescriptionVariants = () => {
    return renderStoryPage(
    'Switch Description Variants',
        'Use semantic description treatments to communicate helper guidance, validation issues, warnings, and success states.',
        renderDemoCodeBlock(
    'switch-description-variants',
            'Description Variants',
            'Helper, error, warning, and success descriptions using the existing ux4g-switch-desc-* classes.',
            DESCRIPTION_VARIANTS_HTML,
            false,
            DESCRIPTION_VARIANTS_CLEAN_CODE
        )
    );
};

export const ListInteractionPatterns = () => {
    return renderStoryPage(
    'Switch List Interaction Patterns',
        'Reference the two list-switch interaction patterns shown for the switch component in src/index.html.',
        renderDemoCodeBlock(
            'toggle-list-interaction-patterns',
            'List Interaction Patterns',
            'Default (whole list item toggles switch) and Only switch toggles (list item not clickable), using the exact source markup and classes.',
            LIST_INTERACTION_PATTERNS_HTML,
            false,
            LIST_INTERACTION_PATTERNS_CLEAN_CODE
        )
    );
};

Introduction.parameters = {
    docs: { disable: true },
};

StatesMatrix.parameters = {
    ...getStoryParameters(STATES_MATRIX_CLEAN_CODE),
};

Sizes.parameters = {
    ...getStoryParameters(SIZES_CLEAN_CODE),
};

LabelVariants.parameters = {
    ...getStoryParameters(LABEL_VARIANTS_CLEAN_CODE),
};

DescriptionVariants.parameters = {
    ...getStoryParameters(DESCRIPTION_VARIANTS_CLEAN_CODE),
};

ListInteractionPatterns.parameters = {
    ...getStoryParameters(LIST_INTERACTION_PATTERNS_CLEAN_CODE),
};
