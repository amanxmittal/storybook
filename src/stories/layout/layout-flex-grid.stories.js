/**
 * layout-flex-grid.stories.js
 * 
 * Layout-Flex-Grid System for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Layout/Layout-Flex-Grid System',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A traditional 12-column layout system built with Flexbox. It supports auto-layout, column wrapping, offsets, and row-based column sizing.',
            },
            story: {
                inline: false,
            },
        },
    },
};

// --- Helper Functions ---

const getHeroHeader = (title, description) => `
    <section class="ux4g-bg-primary-strong ux4g-py-2xl">
        <div class="ux4g-container">
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l ux4g-opacity-80">
                <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                    <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                    <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                </div>
            </div>
            <div class="ux4g-max-w-800">
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Layout</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    return `
        <div class="ux4g-mb-3xl ux4g-w-100 ux4g-o-hidden" id="section-${id}" style="min-width: 0;">
            <div class="ux4g-mb-l">
                 <h2 class="ux4g-fs-24 ux4g-fw-bold ux4g-mb-xs">${title}</h2>
                ${subtitle ? `<p class="ux4g-text-neutral-secondary ux4g-mb-l">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-mb-l ux4g-w-100 ux4g-o-hidden">
                ${htmlContent}
            </div>

            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Hide Code</button>
            </div>

            <div class="code-area ux4g-mt-m ux4g-w-100 ux4g-o-hidden" id="code-${id}" style="display: block;">
                <div class="ux4g-bg-neutral-stronger ux4g-radius-m ux4g-o-hidden ux4g-w-100">
                    <div class="ux4g-card-header ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-py-s ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis ux4g-w-100">
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">Source Code</span>
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-code ux4g-text-white" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18 ux4g-mr-xs">content_copy</span>
                            <span class="ux4g-text-white">Copy</span>
                        </button>
                    </div>
                    <div class="ux4g-card-body ux4g-p-none ux4g-w-100 ux4g-o-auto">
                        <pre class="ux4g-m-none ux4g-p-l ux4g-bg-neutral-stronger ux4g-w-100" style="white-space: pre; overflow-x: auto;"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                    </div>
                </div>
            </div>
            
            <script>
                (function() {
                    const blockId = "${id}";
                    const displayCode = \`${displayCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    
                    const section = document.getElementById('section-' + blockId);
                    if (!section) return;
                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = document.getElementById('code-' + blockId);
                    const output = document.getElementById('output-' + blockId);
                    const copyBtn = section.querySelector('.copy-code');
                    
                    const highlight = () => {
                        output.textContent = displayCode;
                        output.className = 'code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block';
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
                            navigator.clipboard.writeText(output.textContent).then(() => {
                                const original = copyBtn.innerHTML;
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-mr-xs ux4g-text-white">check</span> <span class="ux4g-text-white">Copied</span>';
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

const baseClasses = ['ux4g-row', 'ux4g-col', 'ux4g-col-auto'];
const colClasses = Array.from({ length: 12 }, (_, i) => `ux4g-col-${i + 1}`);
const offsetClasses = Array.from({ length: 11 }, (_, i) => `ux4g-offset-${i + 1}`);
const rowColClasses = Array.from({ length: 6 }, (_, i) => `ux4g-row-cols-${i + 1}`);
const gutterClasses = ['ux4g-gutter-none', 'ux4g-gutter-xs', 'ux4g-gutter-s', 'ux4g-gutter-m', 'ux4g-gutter-l', 'ux4g-gutter-xl'];

const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];
const responsiveColClasses = breakpoints.flatMap(bp => [
    `ux4g-col-${bp}`,
    `ux4g-col-${bp}-auto`,
    ...Array.from({ length: 12 }, (_, i) => `ux4g-col-${bp}-${i + 1}`)
]);

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100" id="intro-container">
            ${getHeroHeader('Layout-Flex-Grid System', 'A traditional 12-column layout system built with Flexbox. It supports auto-layout, column wrapping, offsets, and row-based column sizing.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div id="class-reference">
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the layout library, categorized for easy access.</p>
                        </div>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                            
                            <!-- Base Layout -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Base Layout</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${baseClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${colClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Row Columns & Offsets -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Row Columns & Offsets</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${rowColClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${offsetClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                             <!-- Gutters -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Gutter Classes</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${gutterClasses.map(cls => createTableRow(cls, cls.replace('ux4g-gutter-', '').toUpperCase())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Responsive Columns -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Responsive Columns</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-grid-cols-lg-3">
                                            ${responsiveColClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
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
                                btn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-primary">check</span>';
                                setTimeout(() => btn.innerHTML = original, 2000);
                            });
                        };
                    });
                })();
            </script>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Showcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Layout-Flex-Grid System Showcase', 'Individual examples of various grid layout behaviors.')}
            <div class="ux4g-p-m">
                
                <div class="ux4g-p-l ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    
                    <!-- 1. Basic Columns -->
                    ${renderDemoCodeBlock('basic-columns', 'Basic Columns', 'Use .ux4g-row as a container and .ux4g-col-{n} for variable widths.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-row ux4g-gutter-m">
                                <div class="ux4g-col-4">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">ux4g-col-4</div>
                                </div>
                                <div class="ux4g-col-8">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">ux4g-col-8</div>
                                </div>
                            </div>
                            <div class="ux4g-row ux4g-gutter-m ux4g-mt-m">
                                <div class="ux4g-col-3">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">ux4g-col-3</div>
                                </div>
                                <div class="ux4g-col-6">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">ux4g-col-6</div>
                                </div>
                                <div class="ux4g-col-3">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">ux4g-col-3</div>
                                </div>
                            </div>
                        </div>
                    `)}

                    <!-- 2. Auto-Layout -->
                    ${renderDemoCodeBlock('auto-layout', 'Auto-Layout', 'Use .ux4g-col to evenly distribute space or .ux4g-col-auto to fit content.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-row ux4g-gutter-m">
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Equal Width</div>
                                </div>
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Equal Width</div>
                                </div>
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Equal Width</div>
                                </div>
                            </div>
                            <div class="ux4g-row ux4g-gutter-m ux4g-mt-m">
                                <div class="ux4g-col-auto">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Auto Width (Content)</div>
                                </div>
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Remaining Space</div>
                                </div>
                            </div>
                        </div>
                    `)}

                    <!-- 3. Offsets -->
                    ${renderDemoCodeBlock('column-offsets', 'Column Offsets', 'Move columns to the right using .ux4g-offset-{n}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-row ux4g-gutter-m">
                                <div class="ux4g-col-4">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Col 4</div>
                                </div>
                                <div class="ux4g-col-4 ux4g-offset-4">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Col 4 (Offset 4)</div>
                                </div>
                            </div>
                        </div>
                    `)}

                    <!-- 4. Row Columns -->
                    ${renderDemoCodeBlock('row-columns', 'Row Columns', 'Control number of items per row globally using .ux4g-row-cols-{n}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-row ux4g-row-cols-3 ux4g-gutter-m">
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Item 1</div>
                                </div>
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Item 2</div>
                                </div>
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Item 3</div>
                                </div>
                                <div class="ux4g-col">
                                    <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center ">Item 4</div>
                                </div>
                            </div>
                        </div>
                    `)}

                </div>

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
