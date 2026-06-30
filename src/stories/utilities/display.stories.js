/**
 * display.stories.js
 * 
 * Display utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Display',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Quickly and responsively toggle the display value of components and more with our display utilities.',
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
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm  copy-code" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18  ux4g-mr-xs">content_copy</span>
                            <span class="">Copy</span>
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

const displayClasses = [
    'ux4g-d-none', 'ux4g-d-inline', 'ux4g-d-inline-block', 'ux4g-d-block', 'ux4g-d-table',
    'ux4g-d-table-row', 'ux4g-d-table-cell', 'ux4g-d-flex', 'ux4g-d-inline-flex', 'ux4g-d-contents', 'ux4g-d-list-item'
];

const responsiveDisplayClasses = [
    'ux4g-d-sm-none', 'ux4g-d-sm-inline', 'ux4g-d-sm-inline-block', 'ux4g-d-sm-block', 'ux4g-d-sm-grid', 'ux4g-d-sm-table', 'ux4g-d-sm-flex',
    'ux4g-d-md-none', 'ux4g-d-md-inline', 'ux4g-d-md-inline-block', 'ux4g-d-md-block', 'ux4g-d-md-grid', 'ux4g-d-md-table', 'ux4g-d-md-flex',
    'ux4g-d-lg-none', 'ux4g-d-lg-inline', 'ux4g-d-lg-inline-block', 'ux4g-d-lg-block', 'ux4g-d-lg-grid', 'ux4g-d-lg-table', 'ux4g-d-lg-flex',
    'ux4g-d-xl-none', 'ux4g-d-xl-inline', 'ux4g-d-xl-inline-block', 'ux4g-d-xl-block', 'ux4g-d-xl-grid', 'ux4g-d-xl-table', 'ux4g-d-xl-flex',
    'ux4g-d-2xl-none', 'ux4g-d-2xl-inline', 'ux4g-d-2xl-inline-block', 'ux4g-d-2xl-block', 'ux4g-d-2xl-grid', 'ux4g-d-2xl-table', 'ux4g-d-2xl-flex'
];

const printDisplayClasses = [
    'ux4g-d-print-none', 'ux4g-d-print-inline', 'ux4g-d-print-inline-block', 'ux4g-d-print-block', 'ux4g-d-print-table', 'ux4g-d-print-flex'
];

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100" id="intro-container">
            ${getHeroHeader('Display Utilities', 'Quickly and responsively toggle the display value of components and more with our display utilities.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div id="class-reference">
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                        </div>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                            
                            <!-- Base Display -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Base Display</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${displayClasses.map(cls => createTableRow(cls, cls.replace('ux4g-d-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Print Display -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Print Display</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${printDisplayClasses.map(cls => createTableRow(cls, cls.replace('ux4g-d-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Responsive Display -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Responsive Display</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-grid-cols-lg-3">
                                            ${responsiveDisplayClasses.map(cls => createTableRow(cls, cls.replace('ux4g-d-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const DisplayShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Display Showcase', 'Individual examples of various display behavior classes.')}
            <div class="ux4g-p-m">
                
                <div class="ux4g-p-l ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    
                    <!-- 1. Display None -->
                    ${renderDemoCodeBlock('d-none', 'Display None', 'Hides the element and takes it out of the document flow.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-bg-neutral-subtle ux4g-p-l ux4g-text-center">
                                <div class="ux4g-d-none ux4g-bg-error-strong ux4g-p-m  ux4g-radius-s">
                                    This element is hidden with .ux4g-d-none
                                </div>
                                <span class="ux4g-text-neutral-secondary ux4g-fs-12 italic">The element is here but hidden.</span>
                            </div>
                        </div>
                    `)}

                    <!-- 2. Display Inline -->
                    ${renderDemoCodeBlock('d-inline', 'Display Inline', 'Displays an element as an inline element. Height and width properties will have no effect.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-p-m ux4g-bg-neutral-subtle">
                                <div class="ux4g-d-inline ux4g-bg-primary-strong ux4g-p-s  ">Inline Item 1</div>
                                <div class="ux4g-d-inline ux4g-bg-primary-strong ux4g-p-s  ">Inline Item 2</div>
                            </div>
                        </div>
                    `)}

                    <!-- 3. Display Inline-Block -->
                    ${renderDemoCodeBlock('d-inline-block', 'Display Inline-Block', 'Displays an element as an inline-level block container.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-p-m ux4g-bg-neutral-subtle">
                                <div class="ux4g-d-inline-block ux4g-wpx-150 ux4g-hpx-50 ux4g-bg-primary-strong ux4g-p-s   ux4g-text-center ux4g-ai-center ux4g-d-flex ux4g-jc-center">Inline Block 1</div>
                                <div class="ux4g-d-inline-block ux4g-wpx-150 ux4g-hpx-50 ux4g-bg-secondary-strong ux4g-p-s   ux4g-text-center ux4g-ai-center ux4g-d-flex ux4g-jc-center">Inline Block 2</div>
                            </div>
                        </div>
                    `)}

                    <!-- 4. Display Block -->
                    ${renderDemoCodeBlock('d-block', 'Display Block', 'Displays an element as a block element. It starts on a new line and takes up the whole width.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-p-m ux4g-bg-neutral-subtle">
                                <div class="ux4g-d-block ux4g-bg-primary-strong ux4g-p-m ux4g-text-black  ux4g-mb-s">Block Item 1</div>
                                <div class="ux4g-d-block ux4g-bg-primary-strong ux4g-p-m  ">Block Item 2</div>
                            </div>
                        </div>
                    `)}

                    <!-- 5. Display Table System -->
                    ${renderDemoCodeBlock('d-table', 'Display Table System', 'Utilities to make elements behave like table elements.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-d-table ux4g-w-100 ux4g-o-hidden">
                                <div class="ux4g-d-table-row ux4g-bg-neutral-subtle">
                                    <div class="ux4g-d-table-cell ux4g-p-m ux4g-border ux4g-fw-bold">Header 1</div>
                                    <div class="ux4g-d-table-cell ux4g-p-m ux4g-border ux4g-fw-bold">Header 2</div>
                                </div>
                                <div class="ux4g-d-table-row">
                                    <div class="ux4g-d-table-cell ux4g-p-m ux4g-border">Cell 1.1</div>
                                    <div class="ux4g-d-table-cell ux4g-p-m ux4g-border">Cell 1.2</div>
                                </div>
                                <div class="ux4g-d-table-row">
                                    <div class="ux4g-d-table-cell ux4g-p-m ux4g-border">Cell 2.1</div>
                                    <div class="ux4g-d-table-cell ux4g-p-m ux4g-border">Cell 2.2</div>
                                </div>
                            </div>
                        </div>
                    `)}

                    <!-- 6. Display Flex -->
                    ${renderDemoCodeBlock('d-flex', 'Display Flex', 'Displays an element as a block-level flex container.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-d-flex ux4g-jc-between ux4g-bg-neutral-subtle ux4g-p-m">
                                <div class="ux4g-p-m ux4g-bg-primary-strong">Flex Item 1</div>
                                <div class="ux4g-p-m ux4g-bg-primary-strong">Flex Item 2</div>
                                <div class="ux4g-p-m ux4g-bg-primary-strong">Flex Item 3</div>
                            </div>
                        </div>
                    `)}

                    <!-- 7. Display Inline-Flex -->
                    ${renderDemoCodeBlock('d-inline-flex', 'Display Inline-Flex', 'Displays an element as an inline-level flex container.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-d-inline-flex ux4g-bg-neutral-subtle ux4g-p-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-mr-s">Inline-Flex 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Inline-Flex 2</div>
                            </div>
                        </div>
                    `)}

                    <!-- 8. Display Contents -->
                    ${renderDemoCodeBlock('d-contents', 'Display Contents', 'Makes children behave as if they were direct children of the parent.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-d-flex ux4g-jc-around ux4g-bg-neutral-subtle ux4g-p-m">
                                <div class="ux4g-d-contents">
                                    <div class="ux4g-p-m ux4g-bg-primary-soft ">Child 1</div>
                                    <div class="ux4g-p-m ux4g-bg-primary-soft ">Child 2</div>
                                </div>
                            </div>
                        </div>
                    `)}

                    <!-- 9. Display List-Item -->
                    ${renderDemoCodeBlock('d-list-item', 'Display List-Item', 'Displays an element as a list-item.', `
                        <div class="ux4g-p-xl ux4g-bg-neutral">
                            <div class="ux4g-ml-xl">
                                <div class="ux4g-d-list-item ux4g-mb-xs">Custom List Item 1</div>
                                <div class="ux4g-d-list-item ux4g-mb-xs">Custom List Item 2</div>
                                <div class="ux4g-d-list-item">Custom List Item 3</div>
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
