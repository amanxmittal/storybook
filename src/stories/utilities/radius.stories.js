/**
 * Radius.stories.js
 * 
 * Border radius utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Radius',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the border radius of an element. Includes support for sides, corners, and various sizes.',
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
                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-grid-cols-md-4 ux4g-grid-cols-lg-5 ux4g-gap-m ux4g-w-100">
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
        ${getHeroHeader('Radius Utilities Reference', 'A comprehensive reference of all border radius utility classes, including side-specific and corner-specific variants.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Base Radius -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">All Corners</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-radius-none', 'ux4g-radius-s', 'ux4g-radius-m', 'ux4g-radius-l', 'ux4g-radius-full'].map(cls => createTableRow(cls, cls.split('-').pop().replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Top Corners -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Top Corners</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-radius-top-none', 'ux4g-radius-top-s', 'ux4g-radius-top-m', 'ux4g-radius-top-l', 'ux4g-radius-top-full'].map(cls => createTableRow(cls, 'Top ' + cls.split('-').pop().replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Bottom Corners -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Bottom Corners</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-radius-bottom-none', 'ux4g-radius-bottom-s', 'ux4g-radius-bottom-m', 'ux4g-radius-bottom-l', 'ux4g-radius-bottom-full'].map(cls => createTableRow(cls, 'Bottom ' + cls.split('-').pop().replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Left Corners -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Left Corners</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-radius-left-none', 'ux4g-radius-left-s', 'ux4g-radius-left-m', 'ux4g-radius-left-l', 'ux4g-radius-left-full'].map(cls => createTableRow(cls, 'Left ' + cls.split('-').pop().replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Right Corners -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Right Corners</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-radius-right-none', 'ux4g-radius-right-s', 'ux4g-radius-right-m', 'ux4g-radius-right-l', 'ux4g-radius-right-full'].map(cls => createTableRow(cls, 'Right ' + cls.split('-').pop().replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Individual Corners -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Individual Corners</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${[
        'ux4g-radius-tl-s', 'ux4g-radius-tr-s', 'ux4g-radius-bl-s', 'ux4g-radius-br-s',
        'ux4g-radius-tl-m', 'ux4g-radius-tr-m', 'ux4g-radius-bl-m', 'ux4g-radius-br-m',
        'ux4g-radius-tl-l', 'ux4g-radius-tr-l', 'ux4g-radius-bl-l', 'ux4g-radius-br-l',
        'ux4g-radius-tl-full', 'ux4g-radius-tr-full', 'ux4g-radius-bl-full', 'ux4g-radius-br-full'
    ].map(cls => createTableRow(cls, cls.replace('ux4g-radius-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const RadiusShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Radius Showcase', 'A complete visual demonstration of every border radius utility class.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- Simple Radius -->
                ${renderDemoCodeBlock('simple-radius', 'Basic Radius (All Corners)', 'Uniform radius applied to all corners in all sizes.', `
                    <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-white ux4g-text-center ux4g-radius-none">None</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-white ux4g-text-center ux4g-radius-s">Small (S)</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-white ux4g-text-center ux4g-radius-m">Medium (M)</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-white ux4g-text-center ux4g-radius-l">Large (L)</div>
                    <div class="ux4g-p-xl ux4g-bg-primary-strong ux4g-text-white ux4g-text-center ux4g-radius-full">Full</div>
                `, `
<!-- ux4g-radius-none: No radius -->
<div class="ux4g-radius-none">...</div>

<!-- ux4g-radius-s: Small radius -->
<div class="ux4g-radius-s">...</div>

<!-- ux4g-radius-m: Medium radius -->
<div class="ux4g-radius-m">...</div>

<!-- ux4g-radius-l: Large radius -->
<div class="ux4g-radius-l">...</div>

<!-- ux4g-radius-full: Full radius (pill/circle) -->
<div class="ux4g-radius-full">...</div>
                `)}

                <!-- Top Side -->
                ${renderDemoCodeBlock('top-radius', 'Top Side Radius', 'Radius applied to top corners only.', `
                    <div class="ux4g-p-xl ux4g-bg-secondary-strong ux4g-text-white ux4g-text-center ux4g-radius-top-none">Top None</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-strong ux4g-text-white ux4g-text-center ux4g-radius-top-s">Top S</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-strong ux4g-text-white ux4g-text-center ux4g-radius-top-m">Top M</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-strong ux4g-text-white ux4g-text-center ux4g-radius-top-l">Top L</div>
                    <div class="ux4g-p-xl ux4g-bg-secondary-strong ux4g-text-white ux4g-text-center ux4g-radius-top-full">Top Full</div>
                `, `
<!-- ux4g-radius-top-none: Top Side No radius -->
<div class="ux4g-radius-top-none">...</div>

<!-- ux4g-radius-top-s: Top Side Small radius -->
<div class="ux4g-radius-top-s">...</div>

<!-- ux4g-radius-top-m: Top Side Medium radius -->
<div class="ux4g-radius-top-m">...</div>

<!-- ux4g-radius-top-l: Top Side Large radius -->
<div class="ux4g-radius-top-l">...</div>

<!-- ux4g-radius-top-full: Top Side Full radius -->
<div class="ux4g-radius-top-full">...</div>
                `)}

                <!-- Bottom Side -->
                ${renderDemoCodeBlock('bottom-radius', 'Bottom Side Radius', 'Radius applied to bottom corners only.', `
                    <div class="ux4g-p-xl ux4g-bg-tertiary-strong ux4g-text-white ux4g-text-center ux4g-radius-bottom-none">Bottom None</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-strong ux4g-text-white ux4g-text-center ux4g-radius-bottom-s">Bottom S</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-strong ux4g-text-white ux4g-text-center ux4g-radius-bottom-m">Bottom M</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-strong ux4g-text-white ux4g-text-center ux4g-radius-bottom-l">Bottom L</div>
                    <div class="ux4g-p-xl ux4g-bg-tertiary-strong ux4g-text-white ux4g-text-center ux4g-radius-bottom-full">Bottom Full</div>
                `, `
<!-- ux4g-radius-bottom-none: Bottom Side No radius -->
<div class="ux4g-radius-bottom-none">...</div>

<!-- ux4g-radius-bottom-s: Bottom Side Small radius -->
<div class="ux4g-radius-bottom-s">...</div>

<!-- ux4g-radius-bottom-m: Bottom Side Medium radius -->
<div class="ux4g-radius-bottom-m">...</div>

<!-- ux4g-radius-bottom-l: Bottom Side Large radius -->
<div class="ux4g-radius-bottom-l">...</div>

<!-- ux4g-radius-bottom-full: Bottom Side Full radius -->
<div class="ux4g-radius-bottom-full">...</div>
                `)}

                <!-- Left Side -->
                ${renderDemoCodeBlock('left-radius', 'Left Side Radius', 'Radius applied to left corners only.', `
                    <div class="ux4g-p-xl ux4g-bg-success-strong ux4g-text-white ux4g-text-center ux4g-radius-left-none">Left None</div>
                    <div class="ux4g-p-xl ux4g-bg-success-strong ux4g-text-white ux4g-text-center ux4g-radius-left-s">Left S</div>
                    <div class="ux4g-p-xl ux4g-bg-success-strong ux4g-text-white ux4g-text-center ux4g-radius-left-m">Left M</div>
                    <div class="ux4g-p-xl ux4g-bg-success-strong ux4g-text-white ux4g-text-center ux4g-radius-left-l">Left L</div>
                    <div class="ux4g-p-xl ux4g-bg-success-strong ux4g-text-white ux4g-text-center ux4g-radius-left-full">Left Full</div>
                `, `
<!-- ux4g-radius-left-none: Left Side No radius -->
<div class="ux4g-radius-left-none">...</div>

<!-- ux4g-radius-left-s: Left Side Small radius -->
<div class="ux4g-radius-left-s">...</div>

<!-- ux4g-radius-left-m: Left Side Medium radius -->
<div class="ux4g-radius-left-m">...</div>

<!-- ux4g-radius-left-l: Left Side Large radius -->
<div class="ux4g-radius-left-l">...</div>

<!-- ux4g-radius-left-full: Left Side Full radius -->
<div class="ux4g-radius-left-full">...</div>
                `)}

                <!-- Right Side -->
                ${renderDemoCodeBlock('right-radius', 'Right Side Radius', 'Radius applied to right corners only.', `
                    <div class="ux4g-p-xl ux4g-bg-error-strong ux4g-text-white ux4g-text-center ux4g-radius-right-none">Right None</div>
                    <div class="ux4g-p-xl ux4g-bg-error-strong ux4g-text-white ux4g-text-center ux4g-radius-right-s">Right S</div>
                    <div class="ux4g-p-xl ux4g-bg-error-strong ux4g-text-white ux4g-text-center ux4g-radius-right-m">Right M</div>
                    <div class="ux4g-p-xl ux4g-bg-error-strong ux4g-text-white ux4g-text-center ux4g-radius-right-l">Right L</div>
                    <div class="ux4g-p-xl ux4g-bg-error-strong ux4g-text-white ux4g-text-center ux4g-radius-right-full">Right Full</div>
                `, `
<!-- ux4g-radius-right-none: Right Side No radius -->
<div class="ux4g-radius-right-none">...</div>

<!-- ux4g-radius-right-s: Right Side Small radius -->
<div class="ux4g-radius-right-s">...</div>

<!-- ux4g-radius-right-m: Right Side Medium radius -->
<div class="ux4g-radius-right-m">...</div>

<!-- ux4g-radius-right-l: Right Side Large radius -->
<div class="ux4g-radius-right-l">...</div>

<!-- ux4g-radius-right-full: Right Side Full radius -->
<div class="ux4g-radius-right-full">...</div>
                `)}

                <!-- Individual Corners (Large) -->
                ${renderDemoCodeBlock('corners-large', 'Individual Corners (Large)', 'Demonstrating each corner independently (Large variant).', `
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-tl-l">TL Large</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-tr-l">TR Large</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-bl-l">BL Large</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-br-l">BR Large</div>
                `, `
<!-- ux4g-radius-tl-l: Top Left Large radius -->
<div class="ux4g-radius-tl-l">...</div>

<!-- ux4g-radius-tr-l: Top Right Large radius -->
<div class="ux4g-radius-tr-l">...</div>

<!-- ux4g-radius-bl-l: Bottom Left Large radius -->
<div class="ux4g-radius-bl-l">...</div>

<!-- ux4g-radius-br-l: Bottom Right Large radius -->
<div class="ux4g-radius-br-l">...</div>
                `)}

                <!-- Individual Corners (Full) -->
                ${renderDemoCodeBlock('corners-full', 'Individual Corners (Full)', 'Demonstrating each corner independently (Full variant).', `
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-tl-full">TL Full</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-tr-full">TR Full</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-bl-full">BL Full</div>
                    <div class="ux4g-p-xl ux4g-bg-neutral-stronger ux4g-text-white ux4g-text-center ux4g-radius-br-full">BR Full</div>
                `, `
<!-- ux4g-radius-tl-full: Top Left Full radius -->
<div class="ux4g-radius-tl-full">...</div>

<!-- ux4g-radius-tr-full: Top Right Full radius -->
<div class="ux4g-radius-tr-full">...</div>

<!-- ux4g-radius-bl-full: Bottom Left Full radius -->
<div class="ux4g-radius-bl-full">...</div>

<!-- ux4g-radius-br-full: Bottom Right Full radius -->
<div class="ux4g-radius-br-full">...</div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
