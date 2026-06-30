/**
 * Interactions.stories.js
 * 
 * Interaction utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Interactions',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling appearance, cursor styles, pointer events, user selection, and resizing.',
            },
            story: {
                inline: false,
            },
        },
    },
};

// --- Helper Functions ---

const getHeroHeader = (title, description) => `
    <section class="ux4g-bg-primary-strong  ux4g-py-2xl">
        <div class="ux4g-container">
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l ux4g-opacity-80">
                <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                    <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                    <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                </div>
            </div>
            <div class="ux4g-max-w-800">
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Utilities</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-primary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl">
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-m ux4g-w-100">
                        ${htmlContent}
                    </div>
                </div>
            </div>

            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Hide Code</button>
            </div>

            <div class="code-area ux4g-mt-m" id="code-${id}" style="display: block;">
                <div class="ux4g-bg-neutral-stronger ux4g-radius-m ux4g-o-hidden">
                    <div class="ux4g-card-header ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-py-s ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">HTML Source</span>
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm  copy-code" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18  ux4g-mr-xs">content_copy</span>
                            <span class="">Copy</span>
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
                    
                    const section = document.getElementById('section-' + blockId);
                    if (!section) return;
                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = document.getElementById('code-' + blockId);
                    const output = document.getElementById('output-' + blockId);
                    const copyBtn = section.querySelector('.copy-code');
                    
                    const highlight = () => {
                        output.textContent = htmlCode;
                        if (window.Prism) window.Prism.highlightElement(output);
                    };

                    toggleBtn.onclick = () => {
                        const isHidden = codeArea.style.display === 'none';
                        codeArea.style.display = isHidden ? 'block' : 'none';
                        toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                        if (isHidden) highlight();
                    };
                    
                    if (copyBtn) {
                        copyBtn.onclick = () => {
                            navigator.clipboard.writeText(htmlCode).then(() => {
                                const original = copyBtn.innerHTML;
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18  ux4g-mr-xs">check</span> <span class="">Copied</span>';
                                setTimeout(() => copyBtn.innerHTML = original, 2000);
                            });
                        };
                    }

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
        </div>
    `;
};

const createTableRow = (className, label) => `
    <tr>
        <td class="ux4g-p-l">
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                <div class="ux4g-d-flex ux4g-flex-col">
                    <span class="ux4g-label-s-strong">${label}</span>
                    <code class="ux4g-text-primary ux4g-fs-12">${className}</code>
                </div>
                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${className}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
            </div>
        </td>
    </tr>
`;

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Interaction Utilities Reference', 'A comprehensive reference for browser interaction utilities, including cursors, selection, and resizing.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">All available interaction utility classes categorized by function.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Cursors -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Cursors</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-200 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-cursor-pointer', 'ux4g-cursor-not-allowed'].map(cls => createTableRow(cls, cls.replace('ux4g-cursor-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- User Selection -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">User Selection</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-200 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-select-none', 'ux4g-select-text', 'ux4g-select-all', 'ux4g-select-auto'].map(cls => createTableRow(cls, cls.replace('ux4g-select-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Pointer Events -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Pointer Events</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-200 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-pointer-events-none', 'ux4g-pointer-events-auto'].map(cls => createTableRow(cls, cls.replace('ux4g-pointer-events-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Resize -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Resize</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-200 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-resize-none', 'ux4g-resize-y'].map(cls => createTableRow(cls, cls.replace('ux4g-resize-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Appearance -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Appearance</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-appearance-none'].map(cls => createTableRow(cls, 'None')).join('')}
                                    </tbody>
                                </table>
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

export const InteractionsShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Interactions Showcase', 'Visual examples of cursor behavior, selection control, and resizing utilities.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- 1. Cursors & Selection -->
                ${renderDemoCodeBlock('cursors-selection', '1. Cursors & Selection', 'Controlling how the mouse behaves and how content is selected.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center ux4g-border ux4g-cursor-pointer">
                        <span class="ux4g-fs-16 ux4g-fw-bold ux4g-text-primary">Cursor Pointer</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center ux4g-border ux4g-cursor-not-allowed">
                        <span class="ux4g-fs-16 ux4g-fw-bold ux4g-text-error">Not Allowed</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-primary  ux4g-text-center ux4g-select-none">
                        <span class="ux4g-fs-16 ux4g-fw-bold">Select None</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-primary  ux4g-text-center ux4g-select-all ux4g-mt-m ux4g-span-3">
                        <span class="ux4g-fs-16 ux4g-fw-bold">Select All (Double-click me to select entire block)</span>
                    </div>
                `, `
<div class="ux4g-cursor-pointer">...</div>
<div class="ux4g-cursor-not-allowed">...</div>
<div class="ux4g-select-none">...</div>
<div class="ux4g-select-all">...</div>
                `)}

                <!-- 2. Pointer Events -->
                ${renderDemoCodeBlock('pointer-events', '2. Pointer Events', 'Enabling or disabling interactivity on elements.', `
                    <div class="ux4g-p-xl ux4g-bg-neutral ux4g-text-center ux4g-border ux4g-pointer-events-none ux4g-span-3 ux4g-radius-m">
                        <p class="ux4g-mb-m ux4g-text-error ux4g-fw-bold">Pointer Events: None</p>
                        <button class="ux4g-btn ux4g-btn-primary">Invisible Button (Cannot Click)</button>
                    </div>
                `, `
<div class="ux4g-pointer-events-none">
  <button class="ux4g-btn ux4g-btn-primary">Can't Click Me</button>
</div>
                `)}

                <!-- 3. Resize -->
                ${renderDemoCodeBlock('resize', '3. Element Resizing', 'Controlling the resize behavior of containers and form elements.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border">
                        <textarea class="ux4g-p-m ux4g-w-100 ux4g-resize-y" placeholder="Vertical Resize (default)"></textarea>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border">
                        <textarea class="ux4g-p-m ux4g-w-100 ux4g-resize-none" placeholder="No Resize allowed"></textarea>
                    </div>
                `, `
<!-- Textarea with vertical resize -->
<textarea class="ux4g-resize-y"></textarea>

<!-- Textarea with no resize -->
<textarea class="ux4g-resize-none"></textarea>
                `)}

                <!-- 4. Appearance -->
                ${renderDemoCodeBlock('appearance', '4. Appearance Reset', 'Resetting browser default appearance for custom component styles.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-text-center ux4g-span-3">
                        <input type="checkbox" class="ux4g-appearance-none ux4g-bg-primary-strong ux4g-radius-s" style="width: 24px; height: 24px; cursor: pointer;" checked>
                        <p class="ux4g-mt-s ux4g-fs-12 ux4g-text-neutral-tertiary">Custom colored checkbox using Appearance None</p>
                    </div>
                `, `
<!-- Custom checkbox input -->
<input type="checkbox" class="ux4g-appearance-none ux4g-bg-primary">
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

