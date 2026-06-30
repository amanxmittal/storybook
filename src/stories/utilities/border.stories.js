/**
 * Border.stories.js
 * 
 * Border utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Borders',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the border width, style, and color of an element.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Utilities</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
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
                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-grid-cols-md-4 ux4g-gap-m ux4g-w-100">
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
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
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
        ${getHeroHeader('Border Utilities Reference', 'A complete reference of all border utility classes, built on a modular engine supporting widths, individual sides, and semantic colors.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Engine & Width -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Engine & Width</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-border', 'ux4g-border-bold', 'ux4g-border-none'].map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Border Styles -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Border Styles</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-border-dashed', 'ux4g-border-dotted'].map(cls => createTableRow(cls, cls.replace('ux4g-border-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Individual Sides (RTL Safe) -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Side Utilities</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-350 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bt', 'ux4g-br', 'ux4g-bb', 'ux4g-bl'].map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Atomic Resets -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Atomic Resets (0 width)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-350 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bt-0', 'ux4g-br-0', 'ux4g-bb-0', 'ux4g-bl-0'].map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Semantic Colors -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Semantic Color Tokens</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody class="ux4g-d-grid ux4g-grid-cols-2">
                                        ${[
                                            'ux4g-border-neutral-subtle', 'ux4g-border-neutral-strong', 'ux4g-border-primary', 'ux4g-border-primary-strong',
                                            'ux4g-border-secondary', 'ux4g-border-tertiary', 'ux4g-border-success', 'ux4g-border-success-strong',
                                            'ux4g-border-info', 'ux4g-border-info-strong', 'ux4g-border-error', 'ux4g-border-error-strong',
                                            'ux4g-border-warning', 'ux4g-border-warning-strong', 'ux4g-border-neutral-elevated'
                                        ].map(cls => createTableRow(cls, cls.replace('ux4g-border-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const BorderShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Border Showcase', 'Visual examples of the modular border engine in action.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- 1. Base Engine & Width -->
                ${renderDemoCodeBlock('base-engine', '1. Base Engine & Width', 'Initialize solid borders with default or bold widths.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-text-center">Solid Default</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border-bold ux4g-text-center">Solid Bold</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-none ux4g-text-center">No Width</div>
                `, `
<!-- ux4g-border: Solid Default border -->
<div class="ux4g-border">...</div>

<!-- ux4g-border-bold: Solid Bold border -->
<div class="ux4g-border-bold">...</div>

<!-- ux4g-border-none: Removes any existing border width -->
<div class="ux4g-border-none">...</div>
                `)}

                <!-- 2. Border Styles -->
                ${renderDemoCodeBlock('border-styles', '2. Border Styles', 'Modify the stroke type using dashed or dotted classes.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-dashed ux4g-text-center">Dashed</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-dotted ux4g-text-center">Dotted</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border-bold ux4g-border-dashed ux4g-text-center">Bold Dashed</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border-bold ux4g-border-dotted ux4g-text-center">Bold Dotted</div>
                `, `
<!-- ux4g-border-dashed: Dashed border style -->
<div class="ux4g-border ux4g-border-dashed">...</div>

<!-- ux4g-border-dotted: Dotted border style -->
<div class="ux4g-border ux4g-border-dotted">...</div>

<!-- Combined width + style -->
<div class="ux4g-border ux4g-border-bold ux4g-border-dashed">...</div>
<div class="ux4g-border ux4g-border-bold ux4g-border-dotted">...</div>
                `)}

                <!-- 3. Simple Side Borders -->
                ${renderDemoCodeBlock('side-borders', '3. Side-Specific Borders', 'Atomic classes for applying borders to individual sides (RTL safe).', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-bt ux4g-text-center">Top Only</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-br ux4g-text-center">Right/End</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-bb ux4g-text-center">Bottom Only</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-bl ux4g-text-center">Left/Start</div>
                `, `
<!-- ux4g-bt: Border Top -->
<div class="ux4g-bt">...</div>

<!-- ux4g-br: Border Right (Inline End) -->
<div class="ux4g-br">...</div>

<!-- ux4g-bb: Border Bottom -->
<div class="ux4g-bb">...</div>

<!-- ux4g-bl: Border Left (Inline Start) -->
<div class="ux4g-bl">...</div>
                `)}

                <!-- 4. Side Combination + Resets -->
                ${renderDemoCodeBlock('resets', '4. Combination & Resets', 'Mix base borders with side-specific resets.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-bt-0 ux4g-text-center">All except Top</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-bb-0 ux4g-text-center">All except Bottom</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-bt ux4g-bb ux4g-text-center">Top & Bottom</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-bl ux4g-br ux4g-text-center">Left & Right</div>
                `, `
<!-- ux4g-bt-0: Border Top Reset -->
<div class="ux4g-border ux4g-bt-0">...</div>

<!-- ux4g-bb-0: Border Bottom Reset -->
<div class="ux4g-border ux4g-bb-0">...</div>

<!-- Combined Sides -->
<div class="ux4g-bt ux4g-bb">...</div>
<div class="ux4g-bl ux4g-br">...</div>
                `)}

                <!-- 5. Semantic Colors -->
                ${renderDemoCodeBlock('colors', '5. Semantic Colors', 'Apply curated tokens that preserve side-specific coloring.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-primary ux4g-text-center">Primary</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-secondary ux4g-text-center">Secondary</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-success ux4g-text-center">Success</div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-border ux4g-border-error ux4g-text-center">Error</div>
                `, `
<div class="ux4g-border ux4g-border-primary">...</div>
<div class="ux4g-border ux4g-border-secondary">...</div>
<div class="ux4g-border ux4g-border-success">...</div>
<div class="ux4g-border ux4g-border-error">...</div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
