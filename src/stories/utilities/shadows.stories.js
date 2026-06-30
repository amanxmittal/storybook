/**
 * Shadows.stories.js
 * 
 * Elevation and shadow utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Shadows',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the elevation and shadow of an element.',
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
                 <div class="ux4g-bg-neutral-soft">
                    <div class="ux4g-p-xl">
                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-m ux4g-w-100">
                            ${htmlContent}
                        </div>
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

const shadowClasses = ['ux4g-shadow-l0', 'ux4g-shadow-l1', 'ux4g-shadow-l2', 'ux4g-shadow-l3', 'ux4g-shadow-l4'];

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Shadow Utilities Reference', 'A comprehensive reference of elevation levels and shadow utility classes for the UX4G Design System.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every shadow class from the utility library, categorized by elevation level.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-1 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Shadow Table -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Elevation Levels</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${shadowClasses.map((cls, index) => {
    const labels = ['None', 'Layer 1 (Subtle)', 'Layer 2 (Regular)', 'Layer 3 (Large)', 'Layer 4 (Strong)'];
    return createTableRow(cls, labels[index]);
}).join('')}
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

export const ShadowShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral ux4g-min-h-screen">
            ${getHeroHeader('Shadow Showcase', 'A visual demonstration of elevation and shadow utility classes.')}
            <div class="ux4g-container  ux4g-py-2xl">
                
                <!-- 1. Elevation Levels -->
                ${renderDemoCodeBlock('levels', '1. Elevation Levels', 'Progressive shadow intensities for depth and hierarchy.', `
                    <div class="ux4g-p-xl  ux4g-shadow-l0 ux4g-text-center ux4g-radius-m ux4g-border   ux4g-span-3">L0 (None)</div>
                    <div class="ux4g-p-xl  ux4g-shadow-l1 ux4g-text-center ux4g-radius-m ux4g-border   ux4g-span-3">L1 (Subtle)</div>
                    <div class="ux4g-p-xl  ux4g-shadow-l2 ux4g-text-center ux4g-radius-m   ux4g-span-3">L2 (Regular)</div>
                    <div class="ux4g-p-xl  ux4g-shadow-l3 ux4g-text-center ux4g-radius-m   ux4g-span-3">L3 (Large)</div>
                    <div class="ux4g-p-xl  ux4g-shadow-l4 ux4g-text-center ux4g-radius-m   ux4g-span-3">L4 (Strong)</div>
                `, `
<div class="ux4g-shadow-l0">...</div>
<div class="ux4g-shadow-l1">...</div>
<div class="ux4g-shadow-l2">...</div>
<div class="ux4g-shadow-l3">...</div>
<div class="ux4g-shadow-l4">...</div>
                `)}

                <!-- 2. Interactive States -->
                ${renderDemoCodeBlock('interactive', '2. Usage Context', 'Shadows applied to cards and interactive elements.', `
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-shadow-l1 ux4g-radius-l ux4g-border ux4g-span-1">
                        <h4 class="ux4g-heading-s-strong ux4g-mb-xs text-neutral-strong">Subtle Card</h4>
                        <p class="ux4g-body-s-default">Uses L1 shadow and border.</p>
                    </div>
                    <div class="ux4g-p-xl ux4g-bg-white ux4g-shadow-l2 ux4g-radius-l ux4g-span-2">
                        <h4 class="ux4g-heading-s-strong ux4g-mb-xs text-neutral-strong">Elevated Surface</h4>
                        <p class="ux4g-body-m-default">Uses L2 shadow for distinct separation from background without a border.</p>
                    </div>
                `, `
<!-- Card with subtle shadow -->
<div class="ux4g-shadow-l1">...</div>

<!-- Surface with regular shadow -->
<div class="ux4g-shadow-l2">...</div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
