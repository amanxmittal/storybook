/**
 * grid.stories.js
 * 
 * CSS Grid System for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Layout/Grid System',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A modern 12-column responsive layout system built with CSS Grid. It supports explicit column/row definitions, automatic sizing, spanning, and complex item alignment.',
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
                 <h2 class="ux4g-fs-24  ux4g-mb-xs">${title}</h2>
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

// --- Data for Tables ---
const baseClasses = ['ux4g-grid', 'ux4g-inline-grid'];
const colClasses = Array.from({ length: 12 }, (_, i) => `ux4g-grid-cols-${i + 1}`);
const rowClasses = Array.from({ length: 12 }, (_, i) => `ux4g-grid-rows-${i + 1}`);
const autoRowClasses = ['ux4g-auto-rows-auto', 'ux4g-auto-rows-min', 'ux4g-auto-rows-max', 'ux4g-auto-rows-fr'];
const spanClasses = Array.from({ length: 12 }, (_, i) => `ux4g-span-${i + 1}`);
const rowSpanClasses = Array.from({ length: 3 }, (_, i) => `ux4g-row-span-${i + 1}`);
const alignmentClasses = [
    'ux4g-place-items-center', 'ux4g-place-items-start', 'ux4g-place-items-end',
    'ux4g-justify-items-center', 'ux4g-align-items-center'
];
const autoFitClasses = ['ux4g-grid-auto-fit-200', 'ux4g-grid-auto-fit-250', 'ux4g-grid-auto-fit-300', 'ux4g-grid-auto-fit-400'];

const breakpoints = ['sm', 'md', 'lg', 'xl'];
const responsiveCols = [
    ...Array.from({ length: 12 }, (_, i) => `ux4g-grid-cols-sm-${i + 1}`),
    'ux4g-grid-cols-md-1', 'ux4g-grid-cols-md-2', 'ux4g-grid-cols-md-3', 'ux4g-grid-cols-md-4', 'ux4g-grid-cols-md-5', 'ux4g-grid-cols-md-6', 'ux4g-grid-cols-md-12',
    'ux4g-grid-cols-lg-1', 'ux4g-grid-cols-lg-2', 'ux4g-grid-cols-lg-3', 'ux4g-grid-cols-lg-4', 'ux4g-grid-cols-lg-6', 'ux4g-grid-cols-lg-12',
    'ux4g-grid-cols-xl-2', 'ux4g-grid-cols-xl-3', 'ux4g-grid-cols-xl-4', 'ux4g-grid-cols-xl-6', 'ux4g-grid-cols-xl-12'
];

const responsiveRows = [
    'ux4g-grid-rows-sm-1', 'ux4g-grid-rows-sm-2', 'ux4g-grid-rows-sm-3', 'ux4g-grid-rows-sm-4',
    'ux4g-grid-rows-md-1', 'ux4g-grid-rows-md-2', 'ux4g-grid-rows-md-3'
];

const responsiveSpans = [
    'ux4g-span-sm-1', 'ux4g-span-sm-2', 'ux4g-span-sm-3', 'ux4g-span-sm-4', 'ux4g-span-sm-6', 'ux4g-span-sm-12',
    'ux4g-span-md-1', 'ux4g-span-md-2', 'ux4g-span-md-3', 'ux4g-span-md-4', 'ux4g-span-md-6',
    'ux4g-span-lg-2', 'ux4g-span-lg-3', 'ux4g-span-lg-4', 'ux4g-span-lg-6'
];

const responsiveAlignment = [
    'ux4g-place-items-sm-center', 'ux4g-place-items-md-center', 'ux4g-place-items-lg-center'
];

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100" id="intro-container">
            ${getHeroHeader('Grid System', 'A modern 12-column responsive layout system built with CSS Grid. It supports explicit column/row definitions, automatic sizing, spanning, and complex item alignment.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div id="class-reference">
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the CSS Grid library, categorized for easy access.</p>
                        </div>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                            
                            <!-- Base & Structure -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Base & Columns</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${baseClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${colClasses.map(cls => createTableRow(cls, 'COLUMNS ' + cls.split('-').pop())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Explicit Rows & Auto Sizing -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Rows & Auto Sizing</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${rowClasses.map(cls => createTableRow(cls, 'ROWS ' + cls.split('-').pop())).join('')}
                                            ${autoRowClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Spans & Placement -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Spans & Placement</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${spanClasses.map(cls => createTableRow(cls, 'COLUMN SPAN ' + cls.split('-').pop())).join('')}
                                            ${rowSpanClasses.map(cls => createTableRow(cls, 'ROW SPAN ' + cls.split('-').pop())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Alignment & Auto-Fit -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Alignment & Auto-Fit</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${alignmentClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${autoFitClasses.map(cls => createTableRow(cls, 'AUTO-FIT ' + cls.split('-').pop())).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Responsive Structure -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong">Responsive Structure (SM, MD, LG, XL)</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-grid-cols-lg-3">
                                            ${responsiveCols.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${responsiveRows.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${responsiveSpans.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
                                            ${responsiveAlignment.map(cls => createTableRow(cls, cls.replace('ux4g-', '').toUpperCase())).join('')}
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
            ${getHeroHeader('Grid System Showcase', 'Individual examples of various CSS Grid behavior.')}
            <div class="ux4g-p-m">
                
                <div class="ux4g-p-l ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    
                    <!-- 1. Grid Base -->
                    ${renderDemoCodeBlock('grid-base', '1. Grid Base', 'Initiate a grid layout using the .ux4g-grid class.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-grid ux4g-grid-cols-3 ux4g-gap-m">
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">1</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">2</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">3</div>
                            </div>
                        </div>
                    `)}

                    <!-- 2. Grid Columns -->
                    ${renderDemoCodeBlock('grid-columns', '2. Grid Columns', 'Define explicit columns using .ux4g-grid-cols-{n}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-grid ux4g-grid-cols-4 ux4g-gap-m">
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">Column</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">Column</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">Column</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">Column</div>
                            </div>
                        </div>
                    `)}

                    <!-- 3. Grid Rows -->
                    ${renderDemoCodeBlock('grid-rows', '3. Grid Rows', 'Define static grid rows using .ux4g-grid-rows-{n}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-grid ux4g-grid-rows-3 ux4g-grid-cols-2 ux4g-gap-m ux4g-hpx-200">
                                <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-d-flex ux4g-ai-center ux4g-jc-center">Row 1</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-d-flex ux4g-ai-center ux4g-jc-center">Row 1</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-d-flex ux4g-ai-center ux4g-jc-center">Row 2</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-m  ux4g-d-flex ux4g-ai-center ux4g-jc-center">Row 2</div>
                            </div>
                        </div>
                    `)}

                    <!-- 4. Auto Rows -->
                    ${renderDemoCodeBlock('auto-rows', '4. Auto Rows', 'Control the size of implicit rows using .ux4g-auto-rows-{auto|min|max|fr}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-l">
                            <div class="ux4g-grid ux4g-grid-cols-2 ux4g-auto-rows-max ux4g-gap-m">
                                <div class="ux4g-bg-primary-soft ux4g-p-l ux4g-text-center">Short content</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-l ux4g-text-center">Short content</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-l ux4g-text-center">Implicit row with Content height (max-content)</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-l ux4g-text-center">Adjusts based on content</div>
                            </div>
                        </div>
                    `)}

                    <!-- 5. Span Utilities -->
                    ${renderDemoCodeBlock('span-utilities', '5. Span Utilities', 'Combine column and row spans using .ux4g-span-{n} and .ux4g-row-span-{n}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-grid ux4g-grid-cols-3 ux4g-grid-rows-2 ux4g-gap-m">
                                <div class="ux4g-span-2 ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center  ux4g-fs-18">Span 2 Columns</div>
                                <div class="ux4g-row-span-2 ux4g-bg-primary-soft ux4g-p-xl ux4g-d-flex ux4g-ai-center ux4g-jc-center  ux4g-fs-18 ux4g-text-center">Span 2 Rows</div>
                                <div class="ux4g-bg-tertiary-soft ux4g-p-xl ux4g-text-center">1x1 Item</div>
                                <div class="ux4g-bg-tertiary-soft ux4g-p-xl ux4g-text-center">1x1 Item</div>
                            </div>
                        </div>
                    `)}

                    <!-- 6. Alignment (Global) -->
                    ${renderDemoCodeBlock('grid-alignment-global', '6. Alignment (Global)', 'Align items globally within the grid container using .ux4g-place-items-{center|start|end}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-grid ux4g-grid-cols-3 ux4g-place-items-center ux4g-gap-m ux4g-bg-neutral-soft ux4g-p-l ux4g-radius-m ux4g-hpx-150">
                                <div class="ux4g-bg-primary-soft ux4g-text-white ux4g-p-m ux4g-d-flex ux4g-ai-center ux4g-jc-center">1</div>
                                <div class="ux4g-bg-primary-soft ux4g-text-white ux4g-p-m ux4g-d-flex ux4g-ai-center ux4g-jc-center">2</div>
                                <div class="ux4g-bg-primary-soft ux4g-text-white ux4g-p-m ux4g-d-flex ux4g-ai-center ux4g-jc-center">3</div>
                            </div>
                        </div>
                    `)}

                    <!-- 7. Auto Fit -->
                    ${renderDemoCodeBlock('auto-fit', '7. Auto Fit (Responsive Layout)', 'Create fully responsive masonry-style grids using .ux4g-grid-auto-fit-{width}.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xl">
                                <div>
                                    <p class="ux4g-fs-12  ux4g-mb-xs ux4g-text-neutral-secondary">200px Variant (grid-auto-fit-200)</p>
                                    <div class="ux4g-grid ux4g-grid-auto-fit-200 ux4g-gap-m">
                                        <div class="ux4g-bg-primary-soft  ux4g-p-xl ux4g-text-center">200px Min</div>
                                        <div class="ux4g-bg-primary-soft  ux4g-p-xl ux4g-text-center">200px Min</div>
                                        <div class="ux4g-bg-primary-soft  ux4g-p-xl ux4g-text-center">200px Min</div>
                                    </div>
                                </div>
                                <div>
                                    <p class="ux4g-fs-12  ux4g-mb-xs ux4g-text-neutral-secondary">300px Variant (grid-auto-fit-300)</p>
                                    <div class="ux4g-grid ux4g-grid-auto-fit-300 ux4g-gap-m">
                                        <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">300px Min</div>
                                        <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">300px Min</div>
                                    </div>
                                </div>
                                <div>
                                    <p class="ux4g-fs-12  ux4g-mb-xs ux4g-text-neutral-secondary">400px Variant (grid-auto-fit-400)</p>
                                    <div class="ux4g-grid ux4g-grid-auto-fit-400 ux4g-gap-m">
                                        <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">400px Min (Wide)</div>
                                        <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">400px Min (Wide)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `)}

                    <!-- 8. Inline Grid -->
                    ${renderDemoCodeBlock('inline-grid', '8. Inline Grid', 'Create a grid container that behaves like an inline element.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-inline-grid ux4g-grid-cols-2 ux4g-gap-s ux4g-bg-neutral-soft ux4g-p-m ux4g-radius-m">
                                <div class="ux4g-bg-primary-soft ux4g-p-s ux4g-radius-xs ux4g-border ux4g-border-primary">A</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-s ux4g-radius-xs ux4g-border ux4g-border-primary">B</div>
                            </div>
                            <span class="ux4g-ml-m ux4g-text-neutral-secondary ux4g-fs-14">Text next to inline grid</span>
                        </div>
                    `)}

                    <!-- 9. Item Alignment -->
                    ${renderDemoCodeBlock('item-alignment', '9. Item Alignment', 'Fine-tune positioning using .ux4g-justify-items-* and .ux4g-align-items-*.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-grid ux4g-grid-cols-2 ux4g-justify-items-center ux4g-align-items-center ux4g-gap-m ux4g-hpx-150 ux4g-bg-neutral-subtle ux4g-radius-m">
                                <div class="ux4g-bg-primary-soft ux4g-p-l ux4g-radius-m ux4g-shadow-m ux4g-border ux4g-border-primary">Centered X</div>
                                <div class="ux4g-bg-primary-soft ux4g-p-l ux4g-radius-m ux4g-shadow-m ux4g-border ux4g-border-primary">Centered Y</div>
                            </div>
                        </div>
                    `)}

                    <!-- 10. Responsive Grid -->
                    ${renderDemoCodeBlock('responsive-grid', '10. Responsive Grid', 'Change columns, spans, and alignment across breakpoints (SM, MD, LG, XL).', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xl">
                            <div>
                                <p class="ux4g-fs-12  ux4g-mb-xs ux4g-text-neutral-secondary">Responsive Columns (1 on Mobile, 2 on SM, 4 on MD)</p>
                                <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-md-4 ux4g-gap-m">
                                    <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">Col 1</div>
                                    <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">Col 2</div>
                                    <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">Col 3</div>
                                    <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-text-center">Col 4</div>
                                </div>
                            </div>
                            <div>
                                <p class="ux4g-fs-12  ux4g-mb-xs ux4g-text-neutral-secondary">Responsive Alignment (Centered on MD+)</p>
                                <div class="ux4g-grid ux4g-grid-cols-1 ux4g-place-items-md-center ux4g-bg-neutral-subtle ux4g-p-xl ux4g-radius-m ux4g-hpx-200">
                                    <div class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-full">Centered on MD+</div>
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
