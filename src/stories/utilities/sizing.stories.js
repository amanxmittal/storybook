/**
 * Sizing.stories.js
 * 
 * Sizing utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Sizing',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the width and height of elements using percentages, pixels, or logical sizing.',
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

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, showTabs = true, manualCode = null) => {
    const displayCode = manualCode ? formatCode(manualCode) : formatCode(htmlContent);
    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-primary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m ux4g-w-100">
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
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">Source Code</span>
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

                    toggleBtn.onclick = () => {
                        const isHidden = codeArea.style.display === 'none';
                        codeArea.style.display = isHidden ? 'block' : 'none';
                        toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
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
        ${getHeroHeader('Sizing Utilities Reference', 'A complete reference for controlling widths, heights, and logical sizing dimensions.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Width Percent -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Width (Percent)</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-w-0', 'WIDTH 0')}
                                        ${createTableRow('ux4g-w-25', 'WIDTH 25%')}
                                        ${createTableRow('ux4g-w-50', 'WIDTH 50%')}
                                        ${createTableRow('ux4g-w-75', 'WIDTH 75%')}
                                        ${createTableRow('ux4g-w-100', 'WIDTH 100%')}
                                        ${createTableRow('ux4g-w-auto', 'WIDTH AUTO')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Width Fixed -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Width (Fixed Pixels)</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-wpx-100', 'WIDTH 100PX')}
                                        ${createTableRow('ux4g-wpx-150', 'WIDTH 150PX')}
                                        ${createTableRow('ux4g-wpx-200', 'WIDTH 200PX')}
                                        ${createTableRow('ux4g-wpx-300', 'WIDTH 300PX')}
                                        ${createTableRow('ux4g-wpx-400', 'WIDTH 400PX')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Special Width -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Special Width</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-w-min', 'WIDTH MIN-CONTENT')}
                                        ${createTableRow('ux4g-w-max', 'WIDTH MAX-CONTENT')}
                                        ${createTableRow('ux4g-w-fit', 'WIDTH FIT-CONTENT')}
                                        ${createTableRow('ux4g-w-screen', 'WIDTH 100VW')}
                                        ${createTableRow('ux4g-max-w-none', 'MAX WIDTH NONE')}
                                        ${createTableRow('ux4g-max-w-full', 'MAX WIDTH 100%')}
                                        ${createTableRow('ux4g-max-w-fit', 'MAX WIDTH FIT')}
                                        ${createTableRow('ux4g-min-w-0', 'MIN WIDTH 0')}
                                        ${createTableRow('ux4g-min-w-full', 'MIN WIDTH 100%')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Height Percent -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Height (Percent)</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-h-0', 'HEIGHT 0')}
                                        ${createTableRow('ux4g-h-25', 'HEIGHT 25%')}
                                        ${createTableRow('ux4g-h-50', 'HEIGHT 50%')}
                                        ${createTableRow('ux4g-h-75', 'HEIGHT 75%')}
                                        ${createTableRow('ux4g-h-100', 'HEIGHT 100%')}
                                        ${createTableRow('ux4g-h-auto', 'HEIGHT AUTO')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Height Fixed -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Height (Fixed Pixels)</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-hpx-100', 'HEIGHT 100PX')}
                                        ${createTableRow('ux4g-hpx-150', 'HEIGHT 150PX')}
                                        ${createTableRow('ux4g-hpx-200', 'HEIGHT 200PX')}
                                        ${createTableRow('ux4g-hpx-300', 'HEIGHT 300PX')}
                                        ${createTableRow('ux4g-hpx-400', 'HEIGHT 400PX')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                         <!-- Special Height -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Special Height</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-h-min', 'HEIGHT MIN-CONTENT')}
                                        ${createTableRow('ux4g-h-max', 'HEIGHT MAX-CONTENT')}
                                        ${createTableRow('ux4g-h-fit', 'HEIGHT FIT-CONTENT')}
                                        ${createTableRow('ux4g-h-screen', 'HEIGHT 100VH')}
                                        ${createTableRow('ux4g-h-dvh', 'HEIGHT 100DVH')}
                                        ${createTableRow('ux4g-max-h-full', 'MAX HEIGHT 100%')}
                                        ${createTableRow('ux4g-max-h-screen', 'MAX HEIGHT 100VH')}
                                        ${createTableRow('ux4g-min-h-0', 'MIN HEIGHT 0')}
                                        ${createTableRow('ux4g-min-h-full', 'MIN HEIGHT 100%')}
                                        ${createTableRow('ux4g-min-h-screen', 'MIN HEIGHT 100VH')}
                                        ${createTableRow('ux4g-min-h-dvh', 'MIN HEIGHT 100DVH')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Logical Inline -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Logical Sizing (Inline)</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-is-auto', 'INLINE SIZE AUTO')}
                                        ${createTableRow('ux4g-is-full', 'INLINE SIZE 100%')}
                                        ${createTableRow('ux4g-is-fit', 'INLINE SIZE FIT')}
                                        ${createTableRow('ux4g-is-screen', 'INLINE SIZE SCREEN')}
                                        ${createTableRow('ux4g-min-is-0', 'MIN INLINE SIZE 0')}
                                        ${createTableRow('ux4g-min-is-full', 'MIN INLINE SIZE 100%')}
                                        ${createTableRow('ux4g-max-is-full', 'MAX INLINE SIZE 100%')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Logical Block -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Logical Sizing (Block)</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-bs-auto', 'BLOCK SIZE AUTO')}
                                        ${createTableRow('ux4g-bs-full', 'BLOCK SIZE 100%')}
                                        ${createTableRow('ux4g-bs-fit', 'BLOCK SIZE FIT')}
                                        ${createTableRow('ux4g-bs-screen', 'BLOCK SIZE SCREEN')}
                                        ${createTableRow('ux4g-min-bs-0', 'MIN BLOCK SIZE 0')}
                                        ${createTableRow('ux4g-min-bs-full', 'MIN BLOCK SIZE 100%')}
                                        ${createTableRow('ux4g-min-bs-screen', 'MIN BLOCK SIZE SCREEN')}
                                        ${createTableRow('ux4g-max-bs-full', 'MAX BLOCK SIZE 100%')}
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

export const SizingShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral ux4g-min-h-screen ux4g-p-l">
            <h1 class="ux4g-text-center ux4g-my-l ux4g-heading-l-strong">UX4G Sizing</h1>

            <div class="ux4g-container">
                <!-- Width Section -->
                <div class="ux4g-p-xl ux4g-radius-l ux4g-bg-neutral ux4g-d-flex ux4g-flex-col ux4g-jc-start ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    <div class="ux4g-fs-20 ux4g-fw-bold ux4g-mb-xl ux4g-text-neutral-primary">Width Utilities</div>

                    <!-- Percent Widths -->
                    <div class="ux4g-mb-2xl">
                        <div class="ux4g-fs-16 ux4g-fw-semibold ux4g-mb-m">Relative to Parent (Percent)</div>
                        ${renderDemoCodeBlock('sw-percent', '', '', `
                            <div class="ux4g-p-m ux4g-bg-neutral ux4g-border ux4g-radius-m ux4g-mb-m">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs ux4g-w-100">
                                    <div class="ux4g-w-25 ux4g-p-m ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold">Width 25%</div>
                                    <div class="ux4g-w-50 ux4g-p-m ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold">Width 50%</div>
                                    <div class="ux4g-w-75 ux4g-p-m ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold">Width 75%</div>
                                    <div class="ux4g-w-100 ux4g-p-m ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold">Width 100%</div>
                                    <div class="ux4g-w-auto ux4g-p-m ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold">Width auto</div>
                                </div>
                            </div>
                        `, false, false, `
                            <div class="ux4g-w-25">Width 25%</div>
                            <div class="ux4g-w-50">Width 50%</div>
                            <div class="ux4g-w-75">Width 75%</div>
                            <div class="ux4g-w-100">Width 100%</div>
                            <div class="ux4g-w-auto">Width auto</div>
                        `)}
                    </div>

                    <!-- Fixed Widths -->
                    <div>
                        <div class="ux4g-fs-16 ux4g-fw-semibold ux4g-mb-m">Fixed Dimensions (Pixels)</div>
                        ${renderDemoCodeBlock('sw-fixed', '', '', `
                            <div class="ux4g-p-m ux4g-bg-neutral ux4g-border ux4g-radius-m ux4g-mb-m">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs ux4g-w-100 ux4g-ai-start">
                                    <div class="ux4g-wpx-100 ux4g-p-m ux4g-bg-secondary-soft ux4g-border ux4g-border-secondary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold ux4g-text-center">100px</div>
                                    <div class="ux4g-wpx-200 ux4g-p-m ux4g-bg-secondary-soft ux4g-border ux4g-border-secondary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold ux4g-text-center">200px</div>
                                    <div class="ux4g-wpx-300 ux4g-p-m ux4g-bg-secondary-soft ux4g-border ux4g-border-secondary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold ux4g-text-center">300px</div>
                                    <div class="ux4g-wpx-400 ux4g-p-m ux4g-bg-secondary-soft ux4g-border ux4g-border-secondary ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-fw-bold ux4g-text-center">400px</div>
                                </div>
                            </div>
                        `, false, false, `
                            <div class="ux4g-wpx-100">100px width</div>
                            <div class="ux4g-wpx-200">200px width</div>
                            <div class="ux4g-wpx-300">300px width</div>
                            <div class="ux4g-wpx-400">400px width</div>
                        `)}
                    </div>
                </div>

                <!-- Height Section -->
                <div class="ux4g-p-xl ux4g-radius-l ux4g-bg-neutral ux4g-d-flex ux4g-flex-col ux4g-jc-start ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    <div class="ux4g-fs-20 ux4g-fw-bold ux4g-mb-xl ux4g-text-neutral-primary">Height Utilities</div>

                    <!-- Percent Heights -->
                    <div class="ux4g-mb-2xl">
                        <div class="ux4g-fs-16 ux4g-fw-semibold ux4g-mb-m">Relative to Parent (Percent)</div>
                        ${renderDemoCodeBlock('sh-percent', '', '', `
                            <div class="ux4g-p-m ux4g-bg-neutral ux4g-border ux4g-radius-m ux4g-mb-m">
                                <div class="ux4g-hpx-200 ux4g-d-flex ux4g-inline-gap-s ux4g-ai-start ux4g-p-m ux4g-bg-neutral-subtle ux4g-radius-s ux4g-jc-center">
                                    <div class="ux4g-h-25 ux4g-wpx-150 ux4g-p-xs ux4g-bg-info-soft ux4g-border ux4g-border-info ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">Height 25%</div>
                                    <div class="ux4g-h-50 ux4g-wpx-150 ux4g-p-xs ux4g-bg-info-soft ux4g-border ux4g-border-info ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">Height 50%</div>
                                    <div class="ux4g-h-75 ux4g-wpx-150 ux4g-p-xs ux4g-bg-info-soft ux4g-border ux4g-border-info ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">Height 75%</div>
                                    <div class="ux4g-h-100 ux4g-wpx-150 ux4g-p-xs ux4g-bg-info-soft ux4g-border ux4g-border-info ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">Height 100%</div>
                                    <div class="ux4g-h-auto ux4g-wpx-150 ux4g-p-xs ux4g-bg-info-soft ux4g-border ux4g-border-info ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">Height auto</div>
                                </div>
                            </div>
                        `, false, false, `
                            <div class="ux4g-hpx-200 ux4g-d-flex">
                              <div class="ux4g-h-25 ux4g-wpx-150">Height 25%</div>
                              <div class="ux4g-h-50 ux4g-wpx-150">Height 50%</div>
                              <div class="ux4g-h-75 ux4g-wpx-150">Height 75%</div>
                              <div class="ux4g-h-100 ux4g-wpx-150">Height 100%</div>
                              <div class="ux4g-h-auto ux4g-wpx-150">Height auto</div>
                            </div>
                        `)}
                    </div>

                    <!-- Fixed Heights -->
                    <div>
                        <div class="ux4g-fs-16 ux4g-fw-semibold ux4g-mb-m">Fixed Dimensions (Pixels)</div>
                        ${renderDemoCodeBlock('sh-fixed', '', '', `
                            <div class="ux4g-p-m ux4g-bg-neutral ux4g-border ux4g-radius-m ux4g-mb-m ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
                                <div class="ux4g-hpx-100 ux4g-wpx-100 ux4g-p-xs ux4g-bg-success-soft ux4g-border ux4g-border-success ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">100px</div>
                                <div class="ux4g-hpx-150 ux4g-wpx-100 ux4g-p-xs ux4g-bg-success-soft ux4g-border ux4g-border-success ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">150px</div>
                                <div class="ux4g-hpx-200 ux4g-wpx-100 ux4g-p-xs ux4g-bg-success-soft ux4g-border ux4g-border-success ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">200px</div>
                                <div class="ux4g-hpx-300 ux4g-wpx-100 ux4g-p-xs ux4g-bg-success-soft ux4g-border ux4g-border-success ux4g-radius-xs ux4g-text-neutral-primary ux4g-fs-12 ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-fw-bold text-center">300px</div>
                            </div>
                        `, false, false, `
                            <div class="ux4g-hpx-100 ux4g-wpx-100">100px height</div>
                            <div class="ux4g-hpx-150 ux4g-wpx-100">150px height</div>
                            <div class="ux4g-hpx-200 ux4g-wpx-100">200px height</div>
                            <div class="ux4g-hpx-300 ux4g-wpx-100">300px height</div>
                        `)}
                    </div>
                </div>
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
