/**
 * TextColors.stories.js
 * 
 * Semantic text color utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Text Colors',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the text color of an element.',
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
        ${getHeroHeader('Text Color Utilities Reference', 'A comprehensive reference of semantic text color tokens and utility classes for the UX4G Design System.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every text color class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Neutral Text -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Neutral</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-text-neutral-primary', 'ux4g-text-neutral-secondary', 'ux4g-text-neutral-tertiary', 'ux4g-text-neutral-inverse'].map(cls => createTableRow(cls, cls.replace('ux4g-text-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Brand Text -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Brand</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-text-primary', 'ux4g-text-secondary', 'ux4g-text-tertiary'].map(cls => createTableRow(cls, cls.replace('ux4g-text-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Status Text -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Status</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-text-success', 'ux4g-text-error', 'ux4g-text-warning', 'ux4g-text-info'].map(cls => createTableRow(cls, cls.replace('ux4g-text-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Icon Colors -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Icon Status</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-300 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-icon-success', 'ux4g-icon-error', 'ux4g-icon-warning', 'ux4g-icon-info'].map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Link Colors -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Links</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-350 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody class="ux4g-d-grid ux4g-grid-cols-2">
                                        ${[
                                            'ux4g-text-link', 'ux4g-text-link-neutral', 'ux4g-text-link-inverse', 'ux4g-text-link-neutral-inverse'
                                        ].map(cls => createTableRow(cls, cls.replace('ux4g-text-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Static Colors -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Static</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-220 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody class="ux4g-d-grid ux4g-grid-cols-2">
                                        ${['ux4g-text-white', 'ux4g-text-black'].map(cls => createTableRow(cls, cls.replace('ux4g-text-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const TextColorsShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Text Color Showcase', 'Visual examples of semantic text color tokens and utility classes.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- 1. Neutral Text -->
                ${renderDemoCodeBlock('neutral', '1. Neutral Text', 'Core text colors for hierarchical content.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-neutral-primary ux4g-fs-20 ux4g-fw-bold">Primary Neutral</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-neutral-secondary ux4g-fs-20 ux4g-fw-bold">Secondary Neutral</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-neutral-tertiary ux4g-fs-20 ux4g-fw-bold">Tertiary Neutral</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-center">
                        <span class="ux4g-text-neutral-inverse ux4g-fs-20 ux4g-fw-bold">Inverse Neutral</span>
                    </div>
                `, `
<span class="ux4g-text-neutral-primary">...</span>
<span class="ux4g-text-neutral-secondary">...</span>
<span class="ux4g-text-neutral-tertiary">...</span>
<!-- Inverse: Use on dark backgrounds -->
<span class="ux4g-text-neutral-inverse">...</span>
                `)}

                <!-- 2. Brand Text -->
                ${renderDemoCodeBlock('brand', '2. Brand Text', 'Brand-themed colors for emphasis and themed elements.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-primary ux4g-fs-20 ux4g-fw-bold">Primary Brand</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-secondary ux4g-fs-20 ux4g-fw-bold">Secondary Brand</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-tertiary ux4g-fs-20 ux4g-fw-bold">Tertiary Brand</span>
                    </div>
                `, `
<span class="ux4g-text-primary">...</span>
<span class="ux4g-text-secondary">...</span>
<span class="ux4g-text-tertiary">...</span>
                `)}

                <!-- 3. Status Text -->
                ${renderDemoCodeBlock('status', '3. Status Text', 'Colors indicating specific semantic states.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-success ux4g-fs-20 ux4g-fw-bold">Success Text</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-error ux4g-fs-20 ux4g-fw-bold">Error Text</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-warning ux4g-fs-20 ux4g-fw-bold">Warning Text</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-info ux4g-fs-20 ux4g-fw-bold">Info Text</span>
                    </div>
                `, `
<span class="ux4g-text-success">...</span>
<span class="ux4g-text-error">...</span>
<span class="ux4g-text-warning">...</span>
<span class="ux4g-text-info">...</span>
                `)}

                <!-- 4. Link Behaviors -->
                ${renderDemoCodeBlock('links', '4. Link Text', 'Default and neutral link styling with inverse alternatives.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <a href="#" class="ux4g-text-link ux4g-fs-18 ux4g-fw-bold">Default Link</a>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <a href="#" class="ux4g-text-link-neutral ux4g-fs-18 ux4g-fw-bold">Neutral Link</a>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-center">
                        <a href="#" class="ux4g-text-link-inverse ux4g-fs-18 ux4g-fw-bold">Inverse Link</a>
                    </div>
                `, `
<a href="#" class="ux4g-text-link">Default Link</a>
<a href="#" class="ux4g-text-link-neutral">Neutral Link</a>
<!-- Inverse link for dark backgrounds -->
<a href="#" class="ux4g-text-link-inverse">Inverse Link</a>
                `)}

                <!-- 5. Icon Status Colors -->
                ${renderDemoCodeBlock('icons', '5. Icon Status Colors', 'Dedicated color tokens for iconography.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-icon-outlined ux4g-icon-success ux4g-fs-32">check_circle</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-icon-outlined ux4g-icon-error ux4g-fs-32">cancel</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-icon-outlined ux4g-icon-warning ux4g-fs-32">warning</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-icon-outlined ux4g-icon-info ux4g-fs-32">info</span>
                    </div>
                `, `
<span class="ux4g-icon-outlined ux4g-icon-success">check_circle</span>
<span class="ux4g-icon-outlined ux4g-icon-error">cancel</span>
<span class="ux4g-icon-outlined ux4g-icon-warning">warning</span>
<span class="ux4g-icon-outlined ux4g-icon-info">info</span>
                `)}

                <!-- 6. Static Colors -->
                ${renderDemoCodeBlock('static', '6. Static Colors', 'Fixed white and black utilities.', `
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-center">
                        <span class="ux4g-text-white ux4g-fs-20 ux4g-fw-bold">Static White</span>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-text-center">
                        <span class="ux4g-text-black ux4g-fs-20 ux4g-fw-bold">Static Black</span>
                    </div>
                `, `
<span class="ux4g-text-white">...</span>
<span class="ux4g-text-black">...</span>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

