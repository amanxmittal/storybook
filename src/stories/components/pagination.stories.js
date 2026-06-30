/**
 * Pagination Component Stories
 * 
 * Showcasing standard pagination with page size selectors.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Pagination',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Pagination allows users to navigate through long sets of content split into multiple pages.',
            },
            source: { code: null },
            canvas: {
                sourceState: 'none',
                withToolbar: true,
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'Pagination');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, noWrapperStyle = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    const wrapperClass = noWrapperStyle 
        ? 'ux4g-mb-l ux4g-relative' 
        : 'ux4g-border ux4g-border-neutral-emphasis ux4g-bg-primary-subtle ux4g-radius-l ux4g-mb-l ux4g-relative';

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="${wrapperClass}">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-w-100">
                        ${displayCode}
                    </div>
                </div>
            </div>


            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Hide Code</button>
            </div>

            <div class="code-area ux4g-mt-m" id="code-${id}" style="display: block;">
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-m">
                    <ul class="ux4g-tab-list">
                        <li class="ux4g-tab-item is-active tab-trigger" data-lang="html" data-id="${id}">HTML</li>
                        <li class="ux4g-tab-item tab-trigger" data-lang="react" data-id="${id}">React</li>
                        <li class="ux4g-tab-item tab-trigger" data-lang="angular" data-id="${id}">Angular</li>
                    </ul>
                </div>
                
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
                    const reactCode = \`${reactCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    const angularCode = \`${angularCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    
                    const section = document.getElementById('section-' + blockId);
                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = document.getElementById('code-' + blockId);
                    const output = document.getElementById('output-' + blockId);
                    const tabs = section.querySelectorAll('.tab-trigger');
                    const copyBtn = section.querySelector('.copy-code');
                    
                    let currentLang = 'html';
                    
                    const highlight = () => {
                        const code = currentLang === 'react' ? reactCode : (currentLang === 'angular' ? angularCode : htmlCode);
                        output.textContent = code;
                        output.className = 'code-output language-' + (currentLang === 'react' ? 'javascript' : 'html') + ' ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap';
                        if (window.Prism) window.Prism.highlightElement(output);
                    };

                    toggleBtn.onclick = () => {
                        const isHidden = codeArea.style.display === 'none';
                        codeArea.style.display = isHidden ? 'block' : 'none';
                        toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                        if (isHidden) highlight();
                    };
                    
                    tabs.forEach(tab => {
                        tab.onclick = () => {
                            tabs.forEach(t => t.classList.remove('is-active'));
                            tab.classList.add('is-active');
                            currentLang = tab.dataset.lang;
                            highlight();
                        };
                    });
                    
                    copyBtn.onclick = () => {
                        navigator.clipboard.writeText(output.textContent).then(() => {
                            const original = copyBtn.innerHTML;
                            copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
                            setTimeout(() => copyBtn.innerHTML = original, 2000);
                        });
                    };

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

// --- Pagination Templates ---

const PAGINATION_BASE_HTML = `
<div class="ux4g-pagination">
    <button class="ux4g-page-nav prev ux4g-icon-outlined" disabled>
        chevron_left
    </button>
    <button class="ux4g-page-number active">1</button>
    <button class="ux4g-page-number">2</button>
    <button class="ux4g-page-number">3</button>
    <button class="ux4g-page-number">4</button>
    <button class="ux4g-page-number">5</button>
    <button class="ux4g-page-number">6</button>
    <button class="ux4g-page-number">7</button>
    <span class="ux4g-page-number ux4g-page-number-more">...</span>
    <button class="ux4g-page-number">60</button>
    <button class="ux4g-page-nav next ux4g-icon-outlined">
        chevron_right
    </button>
</div>
`;

const PAGE_SIZE_HTML = `
<div class="ux4g-page-size">
    <span>Showing</span>
    <div class="ux4g-page-size-select-wrapper">
        <i class="ux4g-icon-outlined">token</i>
        <i class="ux4g-icon-outlined ux4g-select-value-icon">more_horiz</i>
        <select>
            <option>50</option>
            <option selected>200</option>
            <option>500</option>
        </select>
        <i class="ux4g-icon-outlined">keyboard_arrow_down</i>
    </div>
    <span>of 15000 items</span>
</div>
`;

const PAGINATION_LEFT_HTML = `
<div class="ux4g-pagination-wrapper">
    ${PAGINATION_BASE_HTML}
    ${PAGE_SIZE_HTML}
</div>
`;

const PAGINATION_CENTER_HTML = `
<div class="ux4g-pagination-wrapper ux4g-d-flex ux4g-ai-center ux4g-jc-center">
    ${PAGINATION_BASE_HTML}
    ${PAGE_SIZE_HTML}
</div>
`;

const PAGINATION_RIGHT_HTML = `
<div class="ux4g-pagination-wrapper ux4g-d-flex ux4g-ai-center ux4g-jc-end">
    ${PAGINATION_BASE_HTML}
    ${PAGE_SIZE_HTML}
</div>
`;

// --- Dotted Pagination Templates ---

const PAGINATION_DOTS_WITH_CTRL_STR = (extraClasses = '') => `
<div class="ux4g-pagination ux4g-pagination-dotted ${extraClasses}">
    <button class="ux4g-pagination-prev ux4g-icon-outlined" disabled="">chevron_left</button>
    <div class="ux4g-pagination-dots">
        <button aria-label="Go to page 1" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 2" class="ux4g-page-dot"></button>
        <button aria-current="page" aria-label="Page 3 (current)" class="ux4g-page-dot ux4g-active"></button>
        <button aria-label="Go to page 4" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 5" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 6" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 60" class="ux4g-page-dot"></button>
    </div>
    <button class="ux4g-pagination-prev ux4g-icon-outlined">chevron_right</button>
</div>
`;

const DOTS_WITHOUT_CONTROLLER_STR = (extraClasses = '') => `
<div class="ux4g-pagination ux4g-pagination-dotted ${extraClasses}">
    <div class="ux4g-pagination-dots">
        <button aria-label="Go to page 1" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 2" class="ux4g-page-dot"></button>
        <button aria-current="page" aria-label="Page 3 (current)" class="ux4g-page-dot ux4g-active"></button>
        <button aria-label="Go to page 4" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 5" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 6" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 60" class="ux4g-page-dot"></button>
    </div>
</div>
`;

const DOTS_STANDARD_HTML = PAGINATION_DOTS_WITH_CTRL_STR();
const DOTS_SOLID_HTML = PAGINATION_DOTS_WITH_CTRL_STR('ux4g-pagination-solid ux4g-radius-full');
const DOTS_TRANSLUCENT_HTML = PAGINATION_DOTS_WITH_CTRL_STR('ux4g-pagination-translucent ux4g-radius-full');

const DOTS_NO_CTRL_STANDARD_HTML = DOTS_WITHOUT_CONTROLLER_STR();
const DOTS_NO_CTRL_SOLID_HTML = DOTS_WITHOUT_CONTROLLER_STR('ux4g-pagination-solid ux4g-radius-full');
const DOTS_NO_CTRL_TRANSLUCENT_HTML = DOTS_WITHOUT_CONTROLLER_STR('ux4g-pagination-translucent ux4g-radius-full');

const DOTS_FLEX_STANDARD_HTML = `
<div class="ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-gap-xs ux4g-w-100">
    <div class="ux4g-pagination-dots ux4g-pagination ux4g-pagination-dotted">
        <button aria-label="Go to page 1" class="ux4g-page-dot ux4g-active"></button>
        <button aria-label="Go to page 2" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 3" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 4" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 5" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 6" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 60" class="ux4g-page-dot"></button>
    </div>
    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs ux4g-px-xs">
        <button class="ux4g-pagination-prev ux4g-icon-outlined ux4g-pagination-prev-right">chevron_left</button>
        <button class="ux4g-pagination-next ux4g-icon-outlined ux4g-pagination-next-right">chevron_right</button>
    </div>
</div>
`;

const DOTS_FLEX_SOLID_HTML = `
<div class="ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-gap-xs ux4g-w-100">                                
    <div class="ux4g-pagination-dots ux4g-pagination ux4g-pagination-solid ux4g-pagination-dotted ux4g-radius-full">
        <button aria-label="Go to page 1" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 2" class="ux4g-page-dot"></button>
        <button aria-current="page" aria-label="Page 3 (current)" class="ux4g-page-dot ux4g-active"></button>
        <button aria-label="Go to page 4" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 5" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 6" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 60" class="ux4g-page-dot"></button>
    </div>
    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs ux4g-px-xs">
        <button class="ux4g-pagination-prev ux4g-icon-outlined ux4g-pagination-prev-right">chevron_left</button>
        <button class="ux4g-pagination-next ux4g-icon-outlined ux4g-pagination-next-right">chevron_right</button>
    </div>
</div>
`;

const DOTS_FLEX_TRANSLUCENT_HTML = `
<div class="ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-gap-xs ux4g-w-100">
    <div class="ux4g-pagination-dots ux4g-pagination ux4g-pagination-translucent ux4g-pagination-dotted ux4g-radius-full">
        <button aria-label="Go to page 1" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 2" class="ux4g-page-dot"></button>
        <button aria-current="page" aria-label="Page 3 (current)" class="ux4g-page-dot ux4g-active"></button>
        <button aria-label="Go to page 4" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 5" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 6" class="ux4g-page-dot"></button>
        <button aria-label="Go to page 60" class="ux4g-page-dot"></button>
    </div>
    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs ux4g-px-xs">
        <button class="ux4g-pagination-prev ux4g-icon-outlined ux4g-pagination-prev-right">chevron_left</button>
        <button class="ux4g-pagination-next ux4g-icon-outlined ux4g-pagination-next-right">chevron_right</button>
    </div>
</div>
`;

const PAGINATION_LEFT_CODE = getSnippetCode([{ label: 'Pagination - Left Aligned', html: PAGINATION_LEFT_HTML }]);
const PAGINATION_CENTER_CODE = getSnippetCode([{ label: 'Pagination - Center Aligned', html: PAGINATION_CENTER_HTML }]);
const PAGINATION_RIGHT_CODE = getSnippetCode([{ label: 'Pagination - Right Aligned', html: PAGINATION_RIGHT_HTML }]);
const DOTS_STANDARD_CODE = getSnippetCode([{ label: 'Pagination Dots - With Controller', html: DOTS_STANDARD_HTML }]);
const DOTS_SOLID_CODE = getSnippetCode([{ label: 'Pagination Dots - Solid With Controller', html: DOTS_SOLID_HTML }]);
const DOTS_TRANSLUCENT_CODE = getSnippetCode([{ label: 'Pagination Dots - Translucent With Controller', html: DOTS_TRANSLUCENT_HTML }]);
const DOTS_NO_CTRL_STANDARD_CODE = getSnippetCode([{ label: 'Pagination Dots - Without Controller', html: DOTS_NO_CTRL_STANDARD_HTML }]);
const DOTS_NO_CTRL_SOLID_CODE = getSnippetCode([{ label: 'Pagination Dots - Solid Without Controller', html: DOTS_NO_CTRL_SOLID_HTML }]);
const DOTS_NO_CTRL_TRANSLUCENT_CODE = getSnippetCode([{ label: 'Pagination Dots - Translucent Without Controller', html: DOTS_NO_CTRL_TRANSLUCENT_HTML }]);
const DOTS_FLEX_STANDARD_CODE = getSnippetCode([{ label: 'Pagination Dots - Flex Layout', html: DOTS_FLEX_STANDARD_HTML }]);
const DOTS_FLEX_SOLID_CODE = getSnippetCode([{ label: 'Pagination Dots - Flex Solid Layout', html: DOTS_FLEX_SOLID_HTML }]);
const DOTS_FLEX_TRANSLUCENT_CODE = getSnippetCode([{ label: 'Pagination Dots - Flex Translucent Layout', html: DOTS_FLEX_TRANSLUCENT_HTML }]);


const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-py-2xl">
            <div class="ux4g-container">
                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l ux4g-opacity-80">
                    <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                        <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                        <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                    </div>
                </div>
                <div class="ux4g-max-w-800">
                    <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Pagination</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Pagination divides large amounts of content into discrete pages, making it easier for users to digest and browse large datasets.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Pagination Left</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${PAGINATION_LEFT_HTML}
                        </div>
                    </div>
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Pagination Center</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${PAGINATION_CENTER_HTML}
                        </div>
                    </div>
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Pagination Right</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${PAGINATION_RIGHT_HTML}
                        </div>
                    </div>
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Pagination Dots</h3>
                        <div class="ux4g-p-xl ux4g-radius-l ux4g-border">
                            ${DOTS_STANDARD_HTML}
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-l"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Utility classes for pagination layout and container styling.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Structural Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-primary-subtle ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structure</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-pagination-wrapper', label: 'Main Container' },
        { class: 'ux4g-pagination', label: 'Page Numbers List' },
        { class: 'ux4g-page-size', label: 'Page Size Selector Group' },
        { class: 'ux4g-page-size-select-wrapper', label: 'Select Control Wrapper' },
        { class: 'ux4g-border ux4g-border-neutral-emphasis ux4g-bg-primary-subtle ux4g-radius-l ux4g-mb-l ux4g-relative', label: 'Standard Demo Wrapper' }
    ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${r.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${r.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${r.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>


                        <!-- Visual Utility Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-primary-subtle ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Visual Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-border', label: 'Border' },
        { class: 'ux4g-border-neutral-emphasis', label: 'Neutral Emphasis Border' },
        { class: 'ux4g-bg-primary-subtle', label: 'Primary Subtle Background' },
        { class: 'ux4g-radius-l', label: 'Large Radius' },
        { class: 'ux4g-mb-l', label: 'Large Margin Bottom' },
        { class: 'ux4g-relative', label: 'Relative Positioning' }
    ].map(u => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${u.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${u.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${u.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
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

export const PaginationVariants = {
    name: 'Pagination Variants',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-bg-primary">
            ${getHeroHeader('Pagination Variants', 'Showcasing Left, Center, and Right alignment options for pagination components.')}
            <div class="ux4g-container ux4g-p-l">
                ${renderDemoCodeBlock('pag-left', 'Pagination Left', 'Standard left-aligned pagination with page size selector.', PAGINATION_LEFT_HTML, false, false, PAGINATION_LEFT_CODE)}
                ${renderDemoCodeBlock('pag-center', 'Pagination Center', 'Center-aligned pagination for balanced layouts.', PAGINATION_CENTER_HTML, false, false, PAGINATION_CENTER_CODE)}
                ${renderDemoCodeBlock('pag-right', 'Pagination Right', 'Right-aligned pagination for ending sections.', PAGINATION_RIGHT_HTML, false, false, PAGINATION_RIGHT_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const PaginationDotsVariants = {
    name: 'Pagination Dots Variants',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Pagination Dots Variants', 'Small-footprint pagination using dots instead of numbers, ideal for carousels or compact lists.')}
            <div class="ux4g-container ux4g-p-l">
                ${renderDemoCodeBlock('dots-with-ctrl', 'Pagination Doted With Controller', 'Standard dotted pagination with directional arrows.', DOTS_STANDARD_HTML, false, false, DOTS_STANDARD_CODE)}
                ${renderDemoCodeBlock('dots-solid', 'Pagination Doted Solid', 'Dotted pagination with a solid background and rounded corners.', DOTS_SOLID_HTML, false, false, DOTS_SOLID_CODE)}
                ${renderDemoCodeBlock('dots-trans', 'Pagination Doted Translucent', 'Dotted pagination with a translucent background.', DOTS_TRANSLUCENT_HTML, false, false, DOTS_TRANSLUCENT_CODE)}

                ${renderDemoCodeBlock('dots-no-ctrl', 'Pagination Doted Without Controller', 'Pure dot navigation without directional arrows.', DOTS_NO_CTRL_STANDARD_HTML, false, false, DOTS_NO_CTRL_STANDARD_CODE)}
                ${renderDemoCodeBlock('dots-no-solid', 'Pagination Doted Solid Without Controller', 'Solid background variant without arrows.', DOTS_NO_CTRL_SOLID_HTML, false, false, DOTS_NO_CTRL_SOLID_CODE)}
                ${renderDemoCodeBlock('dots-no-trans', 'Pagination Doted Translucent Without Controller', 'Translucent background variant without arrows.', DOTS_NO_CTRL_TRANSLUCENT_HTML, false, false, DOTS_NO_CTRL_TRANSLUCENT_CODE)}

                ${renderDemoCodeBlock('dots-flex', 'Pagination Doted', 'Dotted pagination with controllers aligned separately via flexbox.', DOTS_FLEX_STANDARD_HTML, false, false, DOTS_FLEX_STANDARD_CODE)}
                ${renderDemoCodeBlock('dots-flex-solid', 'Pagination Doted Solid', 'Solid variant with flex-aligned controllers.', DOTS_FLEX_SOLID_HTML, false, false, DOTS_FLEX_SOLID_CODE)}
                ${renderDemoCodeBlock('dots-flex-translucent', 'Pagination Doted Translucent', 'Translucent variant with flex-aligned controllers.', DOTS_FLEX_TRANSLUCENT_HTML, false, false, DOTS_FLEX_TRANSLUCENT_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
