/**
 * Backgrounds.stories.js
 * 
 * Semantic background tokens and utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Backgrounds',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the background color of an element.',
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
        ${getHeroHeader('Background Utilities Reference', 'A comprehensive reference of semantic background tokens and utility classes for the UX4G Design System.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every background class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Neutral Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Neutral</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-neutral', 'ux4g-bg-neutral-elevated', 'ux4g-bg-neutral-soft', 'ux4g-bg-neutral-subtle', 'ux4g-bg-neutral-emphasis', 'ux4g-bg-neutral-strong', 'ux4g-bg-neutral-stronger', 'ux4g-bg-neutral-disabled'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Primary Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Primary</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-primary', 'ux4g-bg-primary-soft', 'ux4g-bg-primary-subtle', 'ux4g-bg-primary-emphasis', 'ux4g-bg-primary-strong', 'ux4g-bg-primary-stronger'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Secondary Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Secondary</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-secondary', 'ux4g-bg-secondary-soft', 'ux4g-bg-secondary-subtle', 'ux4g-bg-secondary-emphasis', 'ux4g-bg-secondary-strong'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Tertiary Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Tertiary</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-tertiary', 'ux4g-bg-tertiary-soft', 'ux4g-bg-tertiary-subtle', 'ux4g-bg-tertiary-emphasis', 'ux4g-bg-tertiary-strong'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Success Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Success</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-success', 'ux4g-bg-success-soft', 'ux4g-bg-success-subtle', 'ux4g-bg-success-emphasis', 'ux4g-bg-success-strong'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Error Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Error</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-error', 'ux4g-bg-error-soft', 'ux4g-bg-error-subtle', 'ux4g-bg-error-emphasis', 'ux4g-bg-error-strong', 'ux4g-bg-error-stronger'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Warning Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Warning</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-warning', 'ux4g-bg-warning-soft', 'ux4g-bg-warning-subtle', 'ux4g-bg-warning-emphasis', 'ux4g-bg-warning-strong'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Info Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Info</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bg-info', 'ux4g-bg-info-soft', 'ux4g-bg-info-subtle', 'ux4g-bg-info-emphasis', 'ux4g-bg-info-strong'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Functional Backgrounds -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Functional</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-220 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody class="ux4g-d-grid ux4g-grid-cols-2">
                                        ${['ux4g-control-bg-default', 'ux4g-bg-overlay', 'ux4g-bg-none'].map(cls => createTableRow(cls, cls.replace('ux4g-bg-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const BackgroundShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Background Showcase', 'A complete visual showcase of semantic background tokens and utility classes.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- 1. Neutral Backgrounds -->
                ${renderDemoCodeBlock('neutral', '1. Neutral Backgrounds', 'Core background levels for UI surfaces and containers.', `
                    <div class="ux4g-p-xl ux4g-bg-neutral ux4g-text-center">Neutral</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-elevated ux4g-text-center">Elevated</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-strong ux4g-text-white ux4g-text-center">Strong</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center">Stronger</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-disabled ux4g-text-center">Disabled</div>
                `, `
<div class="ux4g-bg-neutral">...</div>
<div class="ux4g-bg-neutral-elevated">...</div>
<div class="ux4g-bg-neutral-soft">...</div>
<div class="ux4g-bg-neutral-subtle">...</div>
<div class="ux4g-bg-neutral-emphasis">...</div>
<div class="ux4g-bg-neutral-strong">...</div>
<div class="ux4g-bg-neutral-stronger">...</div>
<div class="ux4g-bg-neutral-disabled">...</div>
                `)}

                <!-- 2. Primary Backgrounds -->
                ${renderDemoCodeBlock('primary', '2. Primary Backgrounds', 'Brand-focused background tokens for highlighting and primary actions.', `
                    <div class="ux4g-p-xl ux4g-bg-primary  ux4g-text-center">Primary</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-white ux4g-text-center">Strong</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-stronger ux4g-text-white ux4g-text-center">Stronger</div>
                `, `
<div class="ux4g-bg-primary">...</div>
<div class="ux4g-bg-primary-soft">...</div>
<div class="ux4g-bg-primary-subtle">...</div>
<div class="ux4g-bg-primary-emphasis">...</div>
<div class="ux4g-bg-primary-strong">...</div>
<div class="ux4g-bg-primary-stronger">...</div>
                `)}

                <!-- 3. Secondary Backgrounds -->
                ${renderDemoCodeBlock('secondary', '3. Secondary Backgrounds', 'Secondary brand colors for variety and supporting elements.', `
                    <div class="ux4g-p-xl ux4g-bg-secondary  ux4g-text-center">Secondary</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-strong ux4g-text-white ux4g-text-center">Strong</div>
                `, `
<div class="ux4g-bg-secondary">...</div>
<div class="ux4g-bg-secondary-soft">...</div>
<div class="ux4g-bg-secondary-subtle">...</div>
<div class="ux4g-bg-secondary-emphasis">...</div>
<div class="ux4g-bg-secondary-strong">...</div>
                `)}

                <!-- 4. Tertiary Backgrounds -->
                ${renderDemoCodeBlock('tertiary', '4. Tertiary Backgrounds', 'Tertiary utility colors for supplementary accents.', `
                    <div class="ux4g-p-xl ux4g-bg-tertiary  ux4g-text-center">Tertiary</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-strong ux4g-text-white ux4g-text-center">Strong</div>
                `, `
<div class="ux4g-bg-tertiary">...</div>
<div class="ux4g-bg-tertiary-soft">...</div>
<div class="ux4g-bg-tertiary-subtle">...</div>
<div class="ux4g-bg-tertiary-emphasis">...</div>
<div class="ux4g-bg-tertiary-strong">...</div>
                `)}

                <!-- 5. Success Backgrounds -->
                ${renderDemoCodeBlock('success', '5. Success Backgrounds', 'Positive status indicators for completed tasks or successful states.', `
                    <div class="ux4g-p-xl ux4g-bg-success  ux4g-text-center">Success</div>
                    <div class="ux4g-p-xl ux4g-bg-success-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-success-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-success-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-success-strong ux4g-text-white ux4g-text-center">Strong</div>
                `, `
<div class="ux4g-bg-success">...</div>
<div class="ux4g-bg-success-soft">...</div>
<div class="ux4g-bg-success-subtle">...</div>
<div class="ux4g-bg-success-emphasis">...</div>
<div class="ux4g-bg-success-strong">...</div>
                `)}

                <!-- 6. Error Backgrounds -->
                ${renderDemoCodeBlock('error', '6. Error Backgrounds', 'Critical status indicators for warnings, errors, or destructive actions.', `
                    <div class="ux4g-p-xl ux4g-bg-error ux4g-text-center">Error</div>
                    <div class="ux4g-p-xl ux4g-bg-error-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-error-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-error-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-error-strong ux4g-text-white ux4g-text-center">Strong</div>
                    <div class="ux4g-p-xl ux4g-bg-error-stronger ux4g-text-white ux4g-text-center">Stronger</div>
                `, `
<div class="ux4g-bg-error">...</div>
<div class="ux4g-bg-error-soft">...</div>
<div class="ux4g-bg-error-subtle">...</div>
<div class="ux4g-bg-error-emphasis">...</div>
<div class="ux4g-bg-error-strong">...</div>
<div class="ux4g-bg-error-stronger">...</div>
                `)}

                <!-- 7. Warning Backgrounds -->
                ${renderDemoCodeBlock('warning', '7. Warning Backgrounds', 'Cautionary status indicators for potential issues.', `
                    <div class="ux4g-p-xl ux4g-bg-warning ux4g-text-center">Warning</div>
                    <div class="ux4g-p-xl ux4g-bg-warning-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-warning-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-warning-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-warning-strong ux4g-text-center">Strong</div>
                `, `
<div class="ux4g-bg-warning">...</div>
<div class="ux4g-bg-warning-soft">...</div>
<div class="ux4g-bg-warning-subtle">...</div>
<div class="ux4g-bg-warning-emphasis">...</div>
<div class="ux4g-bg-warning-strong">...</div>
                `)}

                <!-- 8. Info Backgrounds -->
                ${renderDemoCodeBlock('info', '8. Info Backgrounds', 'Informational status indicators for general notifications.', `
                    <div class="ux4g-p-xl ux4g-bg-info  ux4g-text-center">Info</div>
                    <div class="ux4g-p-xl ux4g-bg-info-soft ux4g-text-center">Soft</div>
                    <div class="ux4g-p-xl ux4g-bg-info-subtle ux4g-text-center">Subtle</div>
                    <div class="ux4g-p-xl ux4g-bg-info-emphasis ux4g-text-center">Emphasis</div>
                    <div class="ux4g-p-xl ux4g-bg-info-strong ux4g-text-white ux4g-text-center">Strong</div>
                `, `
<div class="ux4g-bg-info">...</div>
<div class="ux4g-bg-info-soft">...</div>
<div class="ux4g-bg-info-subtle">...</div>
<div class="ux4g-bg-info-emphasis">...</div>
<div class="ux4g-bg-info-strong">...</div>
                `)}

                <!-- 9. Functional Backgrounds -->
                ${renderDemoCodeBlock('functional', '9. Functional Backgrounds', 'Overlay, controls, and transparent background utilities.', `
                    <div class="ux4g-p-xl ux4g-bg-overlay ux4g-text-white ux4g-text-center">Overlay</div>
                    <div class="ux4g-p-xl ux4g-control-bg-default ux4g-text-center">Control Default</div>
                    <div class="ux4g-p-xl ux4g-bg-none ux4g-text-center">Transparent (None)</div>
                `, `
<div class="ux4g-bg-overlay">...</div>
<div class="ux4g-control-bg-default">...</div>
<div class="ux4g-bg-none">...</div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};


