/**
 * Blur.stories.js
 * 
 * Filter blur utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Blur',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for applying Gaussian blur filters to elements.',
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
        ${getHeroHeader('Blur Utilities Reference', 'A reference for applying Gaussian blur filters to elements within the UX4G Design System.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">All available blur intensity classes.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Blur Levels -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Blur Intensity Levels</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody class="ux4g-d-grid ux4g-grid-cols-2">
                                        ${['ux4g-blur-0', 'ux4g-blur-1', 'ux4g-blur-2', 'ux4g-blur-3', 'ux4g-blur-4'].map((cls, index) => {
                                            const labels = ['None', 'Subtle', 'Soft', 'Medium', 'Strong'];
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

export const BlurShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Blur Showcase', 'Visual examples of the various blur intensities on themed background elements.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- Blur Examples -->
                ${renderDemoCodeBlock('blur-levels', 'Blur Intensity Levels', 'Demonstrating the progression from no blur to strong blur.', `
                    <div class="ux4g-p-none ux4g-bg-white ux4g-radius-m ux4g-o-hidden ux4g-border ux4g-text-center">
                        <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-primary  ux4g-blur-0">
                            <span class="ux4g-fs-16 ux4g-fw-bold">No Blur (0)</span>
                        </div>
                    </div>
                    <div class="ux4g-p-none ux4g-bg-white ux4g-radius-m ux4g-o-hidden ux4g-border ux4g-text-center">
                        <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-primary ux4g-blur-1">
                            <span class="ux4g-fs-16 ux4g-fw-bold">Blur (1)</span>
                        </div>
                    </div>
                    <div class="ux4g-p-none ux4g-bg-white ux4g-radius-m ux4g-o-hidden ux4g-border ux4g-text-center">
                        <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-primary ux4g-blur-2">
                            <span class="ux4g-fs-16 ux4g-fw-bold">Blur (2)</span>
                        </div>
                    </div>
                    <div class="ux4g-p-none ux4g-bg-white ux4g-radius-m ux4g-o-hidden ux4g-border ux4g-text-center">
                        <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-primary ux4g-blur-3">
                            <span class="ux4g-fs-16 ux4g-fw-bold">Blur (3)</span>
                        </div>
                    </div>
                    <div class="ux4g-p-none ux4g-bg-white ux4g-radius-m ux4g-o-hidden ux4g-border ux4g-text-center">
                        <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-primary ux4g-blur-4">
                            <span class="ux4g-fs-16 ux4g-fw-bold">Blur (4)</span>
                        </div>
                    </div>
                `, `
<div class="ux4g-blur-0">No Blur</div>
<div class="ux4g-blur-1">Subtle Blur</div>
<div class="ux4g-blur-2">Soft Blur</div>
<div class="ux4g-blur-3">Medium Blur</div>
<div class="ux4g-blur-4">Strong Blur</div>
                `)}

                <!-- Abstract Visual Demo -->
                ${renderDemoCodeBlock('visual-demo', 'Visual Context Demo', 'Applying blur to complex visual components or container backgrounds.', `
                    <div class="ux4g-radius-m ux4g-o-hidden ux4g-position-relative ux4g-hpx-200 ux4g-span-3">
                        <div class="ux4g-position-absolute ux4g-inset-0 ux4g-bg-primary ux4g-opacity-40"></div>
                        <div class="ux4g-position-absolute ux4g-inset-0 ux4g-d-flex ux4g-jc-center ux4g-ai-center">
                            <div class="ux4g-bg-white ux4g-p-xl ux4g-radius-l ux4g-shadow-l1 ux4g-blur-2">
                                <span class="ux4g-text-primary ux4g-fs-18 ux4g-fw-bold">Blurred Background Card</span>
                            </div>
                        </div>
                    </div>
                `, `
<!-- Glassmorphism-style blurred container -->
<div class="ux4g-radius-m ux4g-o-hidden ux4g-position-relative">
  <div class="ux4g-position-absolute ux4g-inset-0 ux4g-bg-white ux4g-blur-2 ux4g-opacity-80"></div>
  <div class="ux4g-position-relative ux4g-p-xl">
    Content over blurred background
  </div>
</div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

