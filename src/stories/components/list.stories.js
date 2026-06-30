/**
 * List Component Stories
 * 
 * Showcasing different types of Lists: Sizes, Validation States, Selection, and Switch variants.
 * Version: 1.3.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/List',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Lists group related rows of content, navigation choices, settings, and selectable actions.',
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

const getReactCode = (html) => htmlToJsx(html, 'List');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderListBehaviorScript = (id) => `
    <script>
        (function() {
            const root = document.getElementById('${id}');
            if (!root) return;

            // Delegating all logic to the main ux4g.js library
            if (window.ux4g && typeof window.ux4g.init === 'function') {
                window.ux4g.init(root);
            }
        })();
    </script>
`;

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, withBehavior = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl">
                    <div class="ux4g-d-block ux4g-w-100">
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
                        <pre class="ux4g-m-none ux4g-p-l ux4g-bg-neutral-stronger ux4g-w-100" style="white-space: pre-wrap; word-break: break-all;"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                    </div>
                </div>
            </div>
            
            <script>
                (function() {
                    const blockId = "${id}";
                    const htmlCode = \`${displayCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    const reactCode = \`${reactCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    const angularCode = \`${angularCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    
                    const section = document.getElementById('section-' + blockId);
                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = document.getElementById('code-' + blockId);
                    const output = document.getElementById('output-' + blockId);
                    const tabs = section.querySelectorAll('.tab-trigger');
                    const copyBtn = section.querySelector('.copy-code');
                    
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
                })();
            </script>
            ${withBehavior ? renderListBehaviorScript(`section-${id}`) : ''}
        </div>
    `;
};

const VALIDATION_HTML = (status) => `
    <ul class="ux4g-list ux4g-list-${status} ux4g-list-m">
        <li class="ux4g-list-item" role="option">
            <button class="ux4g-list-item-row" type="button">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                    <span aria-hidden="true">Label</span>
                </span>
                <span class="ux4g-list-item-end">
                    <span>Supporting text</span>
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                </span>
            </button>
        </li>
        <li class="ux4g-list-item" role="option">
            <button class="ux4g-list-item-row" type="button">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                    <span aria-hidden="true">Label</span>
                </span>
                <span class="ux4g-list-item-end">
                    <span>Supporting text</span>
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                </span>
            </button>
        </li>
        <li class="ux4g-list-item" role="option">
            <button class="ux4g-list-item-row" type="button">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                    <span aria-hidden="true">Label</span>
                </span>
                <span class="ux4g-list-item-end">
                    <span>Supporting text</span>
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                </span>
            </button>
        </li>
        <li class="ux4g-list-item" role="option">
            <button class="ux4g-list-item-row" type="button">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                    <span aria-hidden="true">Label</span>
                </span>
                <span class="ux4g-list-item-end">
                    <span>Supporting text</span>
                    <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                </span>
            </button>
        </li>
    </ul>
`;

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-py-2xl">
            <div class="ux4g-container">
                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-3xl ux4g-opacity-80">
                    <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                        <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                        <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                    </div>
                </div>
                <div class="ux4g-max-w-800">
                    <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">List</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Lists are continuous, vertical indexes of text or images. They are used to display a collection of related items in a structured format.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mb-xl">Implementation Showcase</h2>

                <!-- 1. List Size -->
                <div class="ux4g-my-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary ux4g-mb-l">1. List Size</h3>
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                            <h4 class="ux4g-label-m-strong ux4g-mb-m">Small & Medium</h4>
                            <ul class="ux4g-list ux4g-list-default ux4g-list-s ux4g-mb-l">
                                <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start">Label (Small)</span></button></li>
                            </ul>
                            <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start">Label (Medium)</span></button></li>
                            </ul>
                        </div>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                            <h4 class="ux4g-label-m-strong ux4g-mb-m">Large & XL Large</h4>
                            <ul class="ux4g-list ux4g-list-default ux4g-list-l ux4g-mb-l">
                                <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start">Label (Large)</span></button></li>
                            </ul>
                            <ul class="ux4g-list ux4g-list-default ux4g-list-xl">
                                <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start">Label (XL Large)</span></button></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <!-- 2. Validation -->
                <div class="ux4g-my-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary ux4g-mb-l">2. Validation</h3>
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-gap-l">
                            <div>
                                <h4 class="ux4g-label-s-medium ux4g-mb-s ux4g-text-warning">Warning Showcase</h4>
                                ${VALIDATION_HTML('warning')}
                            </div>
                        </div>
                    </div>
                </div>



                <!-- 3. Selection Pattern -->
                <div class="ux4g-my-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary ux4g-mb-l">3. Selection Pattern</h3>
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
                            <div>
                                <h4 class="ux4g-label-s-medium ux4g-mb-s">Checkbox</h4>
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><label class="ux4g-checkbox ux4g-checkbox-sm ux4g-w-auto"><input type="checkbox" class="ux4g-checkbox-input"><div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div></label><span>Checkbox</span></span></button></li>
                                </ul>
                            </div>
                              <div>
                                <h4 class="ux4g-label-s-medium ux4g-mb-s"> Radio</h4>
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><label class="ux4g-radio ux4g-radio-sm ux4g-w-auto"><input type="radio" class="ux4g-radio-input"><div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div></label><span>Radio Select</span></span></button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="ux4g-label-s-medium ux4g-mb-s">Checkmarks</h4>
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start">Trailing Check</span><span class="ux4g-list-item-end"><i class="ux4g-icon-outlined ux4g-fs-18">check</i></span></button></li>
                                </ul>
                            </div>
                            <div>
                                <h4 class="ux4g-label-s-medium ux4g-mb-s">Without Checkmarks</h4>
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item"><button class="ux4g-list-item-row active" type="button"><span class="ux4g-list-item-start">Active Highlight</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Switch -->
                <div class="ux4g-my-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary ux4g-mb-l">4. Switch</h3>
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                            <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                <li class="ux4g-list-item"><span class="ux4g-list-item-row"><span class="ux4g-list-item-start">Whole row toggle</span><span class="ux4g-list-item-end"><label class="ux4g-switch ux4g-switch-sm"><input type="checkbox" class="ux4g-switch-input"><div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div></label></span></span></li>
                            </ul>
                            <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                <li class="ux4g-list-item"><span class="ux4g-list-item-row"><span class="ux4g-list-item-start">Switch-only control</span><span class="ux4g-list-item-end"><label class="ux4g-switch ux4g-switch-sm"><input type="checkbox" class="ux4g-switch-input"><div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div></label></span></span></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <!-- IMPORTANT CSS -->
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Important CSS Classes</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quick reference for essential layout and state classes.</p>
                    </div>
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Layout Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-m-none">
                                        <thead>
                                            <tr class="ux4g-bg-neutral-soft">
                                                <th class="ux4g-p-m"><span class="ux4g-label-s-strong">Class</span></th>
                                                <th class="ux4g-p-m"><span class="ux4g-label-s-strong">Usage</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-list', usage: 'Main list container' },
                                                { class: 'ux4g-list-item', usage: 'Wrapper for a single list row' },
                                                { class: 'ux4g-list-item-row', usage: 'Interactive row content' },
                                                { class: 'ux4g-list-item-start', usage: 'Leading content slot' },
                                                { class: 'ux4g-list-item-end', usage: 'Trailing content slot' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-m"><code class="ux4g-text-primary ux4g-fs-12">${r.class}</code></td>
                                                <td class="ux4g-p-m"><span class="ux4g-fs-13">${r.usage}</span></td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">State & Size Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-m-none">
                                        <thead>
                                            <tr class="ux4g-bg-neutral-soft">
                                                <th class="ux4g-p-m"><span class="ux4g-label-s-strong">Class</span></th>
                                                <th class="ux4g-p-m"><span class="ux4g-label-s-strong">Usage</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-list-s/m/l/xl', usage: 'Size variants' },
                                                { class: 'ux4g-list-error', usage: 'Error validation state' },
                                                { class: 'ux4g-list-success', usage: 'Success validation state' },
                                                { class: 'ux4g-list-warning', usage: 'Warning validation state' },
                                                { class: 'active', usage: 'Selection highlight state' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-m"><code class="ux4g-text-primary ux4g-fs-12">${t.class}</code></td>
                                                <td class="ux4g-p-m"><span class="ux4g-fs-13">${t.usage}</span></td>
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

                // Initialize ux4g behavior for the introduction page
                if (window.ux4g && typeof window.ux4g.init === 'function') {
                    window.ux4g.init(intro);
                }

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

export const ListSizes = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('List Sizes', 'Full examples of all list sizes: Small, Medium, Large, and XL Large.')}
            <div class="ux4g-p-m">
                <!-- SMALL -->
                ${renderDemoCodeBlock('list-s', 'List Small', 'Full example of small list items.', `
                    <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-16"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-16"> token </span>
                                </span>
                            </button>
                        </li>
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-16"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-16"> token </span>
                                </span>
                            </button>
                        </li>
                    </ul>
                `, false, getSnippetCode([
                    { label: 'List Small - Example 1', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-16"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-16"> token </span></span></button></li>' },
                    { label: 'List Small - Example 2', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-16"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-16"> token </span></span></button></li>' },
                ]))}

                <!-- MEDIUM -->
                ${renderDemoCodeBlock('list-m', 'List Medium', 'Full example of medium list items.', `
                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-20"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-20"> token </span>
                                </span>
                            </button>
                        </li>
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-20"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-20"> token </span>
                                </span>
                            </button>
                        </li>
                    </ul>
                `, false, getSnippetCode([
                    { label: 'List Medium - Example 1', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-20"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-20"> token </span></span></button></li>' },
                    { label: 'List Medium - Example 2', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-20"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-20"> token </span></span></button></li>' },
                ]))}

                <!-- LARGE -->
                ${renderDemoCodeBlock('list-l', 'List Large', 'Full example of large list items.', `
                    <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                </span>
                            </button>
                        </li>
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                </span>
                            </button>
                        </li>
                    </ul>
                `, false, getSnippetCode([
                    { label: 'List Large - Example 1', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-24"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-24"> token </span></span></button></li>' },
                    { label: 'List Large - Example 2', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-24"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-24"> token </span></span></button></li>' },
                ]))}

                <!-- XL -->
                ${renderDemoCodeBlock('list-xl', 'List XL Large', 'Full example of XL Large list items.', `
                    <ul class="ux4g-list ux4g-list-default ux4g-list-xl">
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                </span>
                            </button>
                        </li>
                        <li class="ux4g-list-item" role="option">
                            <button class="ux4g-list-item-row" type="button">
                                <span class="ux4g-list-item-start">
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                    <span aria-hidden="true">Label</span>
                                </span>
                                <span class="ux4g-list-item-end">
                                    <span>Supporting text</span>
                                    <span class=" ux4g-icon-outlined ux4g-fs-24"> token </span>
                                </span>
                            </button>
                        </li>
                    </ul>
                `, false, getSnippetCode([
                    { label: 'List XL - Example 1', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-24"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-24"> token </span></span></button></li>' },
                    { label: 'List XL - Example 2', html: '<li class="ux4g-list-item" role="option"><button class="ux4g-list-item-row" type="button"><span class="ux4g-list-item-start"><span class="ux4g-icon-outlined ux4g-fs-24"> token </span><span aria-hidden="true">Label</span></span><span class="ux4g-list-item-end"><span>Supporting text</span><span class="ux4g-icon-outlined ux4g-fs-24"> token </span></span></button></li>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const ValidationStates = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Validation States', 'Examples of Error, Success, and Warning lists with proper icon structure.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('error-variant', 'Error Variant', 'Medium size list with error validation state.', VALIDATION_HTML('error'))}
                ${renderDemoCodeBlock('success-variant', 'Success Variant', 'Medium size list with success validation state.', VALIDATION_HTML('success'))}
                ${renderDemoCodeBlock('warning-variant', 'Warning Variant', 'Medium size list with warning validation state.', VALIDATION_HTML('warning'))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};



export const SelectionPatterns = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen" id="selection-patterns-container">
            ${getHeroHeader('Selection', 'Standardized single and multi selection patterns separated by functional tabs, using core ux4g.js for interactivity.')}
            
            <div class="ux4g-container-xl ux4g-py-2xl">
                <!-- Navigation Tabs -->
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-xl">
                    <ul class="ux4g-tab-list">
                        <li class="ux4g-tab-item is-active selection-tab-trigger ux4g-fw-semibold" data-target="single">Single Selection</li>
                        <li class="ux4g-tab-item selection-tab-trigger ux4g-fw-semibold" data-target="multi">Multi Selection</li>
                    </ul>
                </div>

                <!-- Single Selection Tab Content -->
                <div id="selection-tab-single" class="selection-tab-content">
                    <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Single Selection</h2>
                    
                    ${renderDemoCodeBlock('single-tab-1', '1. Selection checkbox', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <label class="ux4g-checkbox ux4g-checkbox-md ux4g-w-auto">
                                            <input class="ux4g-checkbox-input" type="checkbox">
                                            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        </label>
                                        <span aria-hidden="true">Label Single Selection</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('single-tab-2', '2. Selection Trailing Checkmarks', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label Single Selection</span>
                                    </span>
                                    <span class="ux4g-list-item-end">
                                        <span class="ux4g-check-icon ux4g-icon-outlined ux4g-fs-20">check</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('single-tab-3', '3. Selection No Trailing Checkmarks', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label Single Selection</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('single-tab-4', '4. Selection With Supporting Text', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                                        <span aria-hidden="true">Label Single Selection</span>
                                    </span>
                                    <span class="ux4g-list-item-end">
                                        <span>Supporting text</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('single-tab-5', '5. Selection Radio Buttons', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                                            <input class="ux4g-radio-input" name="radio_single_tab" type="radio">
                                            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        </label>
                                        <span aria-hidden="true">Label Single Selection</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}
                </div>

                <!-- Multi Selection Tab Content -->
                <div id="selection-tab-multi" class="selection-tab-content ux4g-d-none">
                    <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Multi Selection</h2>
                    
                    ${renderDemoCodeBlock('multi-tab-1', '1. Selection checkbox', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-multiselect ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <label class="ux4g-checkbox ux4g-checkbox-md ux4g-w-auto">
                                            <input class="ux4g-checkbox-input" type="checkbox">
                                            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        </label>
                                        <span aria-hidden="true">Label Multi Selection</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('multi-tab-2', '2. Selection Trailing Checkmarks', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-multiselect ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label Multi Selection</span>
                                    </span>
                                    <span class="ux4g-list-item-end">
                                        <span class="ux4g-check-icon ux4g-icon-outlined ux4g-fs-20">check</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('multi-tab-3', '3. Selection No Trailing Checkmarks', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-multiselect ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label Multi Selection</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}

                    ${renderDemoCodeBlock('multi-tab-4', '4. Selection With Supporting Text', '', `
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-multiselect ux4g-mb-l">
                            ${Array(4).fill(`
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span class="ux4g-icon-outlined ux4g-fs-20"> token </span>
                                        <span aria-hidden="true">Label Multi Selection</span>
                                    </span>
                                    <span class="ux4g-list-item-end">
                                        <span>Supporting text</span>
                                    </span>
                                </button>
                            </li>`).join('')}
                        </ul>
                    `, true)}
                </div>
            </div>

            <script>
                (function() {
                    const container = document.getElementById('selection-patterns-container');
                    if (!container) return;
                    
                    const triggers = container.querySelectorAll('.selection-tab-trigger');
                    const contents = container.querySelectorAll('.selection-tab-content');
                    
                    triggers.forEach(trigger => {
                        trigger.onclick = () => {
                            const target = trigger.dataset.target;
                            
                            // Update Tabs UI
                            triggers.forEach(t => t.classList.remove('is-active'));
                            trigger.classList.add('is-active');
                            
                            // Switch Content
                            contents.forEach(c => {
                                if (c.id === 'selection-tab-' + target) {
                                    c.classList.remove('ux4g-d-none');
                                } else {
                                    c.classList.add('ux4g-d-none');
                                }
                            });
                        };
                    });

                    // Delegating all logic to the main ux4g.js library
                    if (window.ux4g && typeof window.ux4g.init === 'function') {
                        window.ux4g.init(container);
                    }
                })();
            </script>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
export const SwitchPatterns = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen" id="switch-patterns-container">
            ${getHeroHeader('Switch', 'Controlling system preferences using switches within list items.')}
            <div class="ux4g-p-m">
                
                <!-- 1. Whole Item -->
                ${renderDemoCodeBlock('sw-1', '1. Default (whole list item toggles switch)', 'The entire row acts as a trigger for the toggle.', `
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
                    </ul>
                `, true)}

                <!-- 2. Switch Only -->
                ${renderDemoCodeBlock('sw-2', '2. Only switch toggles (list item not clickable)', 'Only the switch itself is interactive.', `
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
                    </ul>
                `, true)}
            </div>
            <script>
                (function() {
                    const container = document.getElementById('switch-patterns-container');
                    if (container && window.ux4g && typeof window.ux4g.init === 'function') {
                        window.ux4g.init(container);
                    }
                })();
            </script>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};


