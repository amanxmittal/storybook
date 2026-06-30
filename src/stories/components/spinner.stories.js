/**
 * Spinner Component Stories
 * 
 * showcasing different types, variants, and sizes of loading indicators.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Spinner',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Spinners inform users that an action or process is in progress and wait time is expected.',
            },
            source: { code: null },
            canvas: {
                sourceState: 'none',
                withToolbar: true,
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
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-3xl ux4g-opacity-80">
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

const getReactCode = (html) => htmlToJsx(html, 'Spinner');

const getSpinnerTypeCode = (variant) => `
<!-- Variant: ${variant.charAt(0).toUpperCase() + variant.slice(1)} Spinner - Full -->
<i class="ux4g-spinner-${variant}-full"></i>
<!-- Variant: ${variant.charAt(0).toUpperCase() + variant.slice(1)} Spinner - Split -->
<i class="ux4g-spinner-${variant}-split"></i>
<!-- Variant: ${variant.charAt(0).toUpperCase() + variant.slice(1)} Spinner - Partial -->
<i class="ux4g-spinner-${variant}-partial"></i>
`.trim();

const getSpinnerSizesCode = (variant) => {
    const label = variant.charAt(0).toUpperCase() + variant.slice(1);

    return `
<!-- Variant: ${label} Spinner - Full - Extra Large -->
<i class="ux4g-spinner-${variant}-full ux4g-spinner-xl"></i>
<!-- Variant: ${label} Spinner - Full - Large -->
<i class="ux4g-spinner-${variant}-full ux4g-spinner-lg"></i>
<!-- Variant: ${label} Spinner - Full - Medium -->
<i class="ux4g-spinner-${variant}-full ux4g-spinner-md"></i>
<!-- Variant: ${label} Spinner - Full - Small -->
<i class="ux4g-spinner-${variant}-full ux4g-spinner-sm"></i>
<!-- Variant: ${label} Spinner - Full - Extra Small -->
<i class="ux4g-spinner-${variant}-full ux4g-spinner-xs"></i>

<!-- Variant: ${label} Spinner - Split - Extra Large -->
<i class="ux4g-spinner-${variant}-split ux4g-spinner-xl"></i>
<!-- Variant: ${label} Spinner - Split - Large -->
<i class="ux4g-spinner-${variant}-split ux4g-spinner-lg"></i>
<!-- Variant: ${label} Spinner - Split - Medium -->
<i class="ux4g-spinner-${variant}-split ux4g-spinner-md"></i>
<!-- Variant: ${label} Spinner - Split - Small -->
<i class="ux4g-spinner-${variant}-split ux4g-spinner-sm"></i>
<!-- Variant: ${label} Spinner - Split - Extra Small -->
<i class="ux4g-spinner-${variant}-split ux4g-spinner-xs"></i>

<!-- Variant: ${label} Spinner - Partial - Extra Large -->
<i class="ux4g-spinner-${variant}-partial ux4g-spinner-xl"></i>
<!-- Variant: ${label} Spinner - Partial - Large -->
<i class="ux4g-spinner-${variant}-partial ux4g-spinner-lg"></i>
<!-- Variant: ${label} Spinner - Partial - Medium -->
<i class="ux4g-spinner-${variant}-partial ux4g-spinner-md"></i>
<!-- Variant: ${label} Spinner - Partial - Small -->
<i class="ux4g-spinner-${variant}-partial ux4g-spinner-sm"></i>
<!-- Variant: ${label} Spinner - Partial - Extra Small -->
<i class="ux4g-spinner-${variant}-partial ux4g-spinner-xs"></i>
`.trim();
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ux4g-d-flex ux4g-jc-center ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-2xl ux4g-w-100">
                        ${htmlContent}
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

// --- Stories ---

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-py-2xl">
            <div class="ux4g-container">
                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-3xl ux4g-opacity-80">
                    <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                        <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                        <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                    </div>
                </div>
                <div class="ux4g-max-w-800">
                    <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Spinner</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        The Spinner component is a visual indicator used to represent loading, processing, or system activity. It provides feedback to users that an operation is in progress and helps prevent confusion when waiting for content to load.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Visual Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Explore the core styles and animation variants available in the design system.</p>
                    
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-w-100">
                        <div class="ux4g-card ux4g-card-outline ux4g-bg-white ux4g-radius-l">
                            <div class="ux4g-card-body ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                                    <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Primary Variants</h3>
                                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-xl">
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <i class="ux4g-spinner-primary-full ux4g-spinner-lg"></i>
                                            <span class="ux4g-label-xs-default">Full</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <i class="ux4g-spinner-primary-split ux4g-spinner-lg"></i>
                                            <span class="ux4g-label-xs-default">Split</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <i class="ux4g-spinner-primary-partial ux4g-spinner-lg"></i>
                                            <span class="ux4g-label-xs-default">Partial</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-card ux4g-card-outline ux4g-bg-white ux4g-radius-l ux4g-bg-neutral-stronger">
                            <div class="ux4g-card-body ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                                    <h3 class="ux4g-label-xl-strong ux4g-text-white">Inverse Variants</h3>
                                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-xl">
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <i class="ux4g-spinner-inverse-full ux4g-spinner-lg"></i>
                                            <span class="ux4g-label-xs-default ux4g-text-white">Full</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <i class="ux4g-spinner-inverse-split ux4g-spinner-lg"></i>
                                            <span class="ux4g-label-xs-default ux4g-text-white">Split</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <i class="ux4g-spinner-inverse-partial ux4g-spinner-lg"></i>
                                            <span class="ux4g-label-xs-default ux4g-text-white">Partial</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy semantic and scale classes for Spinners.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Type & Animation Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Semantic Variant Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <thead>
                                            <tr class="ux4g-bg-neutral-soft">
                                                <th class="ux4g-label-s-strong ux4g-p-l">Intent</th>
                                                <th class="ux4g-label-s-strong ux4g-p-l">Classes</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${['primary', 'inverse', 'danger'].map(variant => `
                                            <tr>
                                                <td class="ux4g-label-s-strong ux4g-p-l ux4g-text-capitalize">${variant}</td>
                                                <td class="ux4g-p-none">
                                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-p-s ux4g-gap-xs">
                                                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-bg-neutral-soft ux4g-p-xs ux4g-radius-s">
                                                            <code class="ux4g-fs-12 ux4g-text-primary">ux4g-spinner-${variant}-full</code>
                                                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-spinner-${variant}-full"><span class="ux4g-icon-outlined ux4g-fs-14">content_copy</span></button>
                                                        </div>
                                                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-bg-neutral-soft ux4g-p-xs ux4g-radius-s">
                                                            <code class="ux4g-fs-12 ux4g-text-primary">ux4g-spinner-${variant}-split</code>
                                                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-spinner-${variant}-split"><span class="ux4g-icon-outlined ux4g-fs-14">content_copy</span></button>
                                                        </div>
                                                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-bg-neutral-soft ux4g-p-xs ux4g-radius-s">
                                                            <code class="ux4g-fs-12 ux4g-text-primary">ux4g-spinner-${variant}-partial</code>
                                                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-spinner-${variant}-partial"><span class="ux4g-icon-outlined ux4g-fs-14">content_copy</span></button>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Scale Utility Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Scale Utility Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <thead>
                                            <tr class="ux4g-bg-neutral-soft">
                                                <th class="ux4g-label-s-strong ux4g-p-l">Size Name</th>
                                                <th class="ux4g-label-s-strong ux4g-p-l">Utility Class</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            ${[
                                                { n: 'Extra Large', v: 'xl' },
                                                { n: 'Large', v: 'lg' },
                                                { n: 'Medium', v: 'md' },
                                                { n: 'Small', v: 'sm' },
                                                { n: 'Extra Small', v: 'xs' }
                                            ].map(s => `
                                            <tr>
                                                <td class="ux4g-label-s-medium ux4g-p-l">${s.n}</td>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <code class="ux4g-text-primary">ux4g-spinner-${s.v}</code>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-spinner-${s.v}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const SpinnerTypes = {
    render: () => {
        const primaryCode = getSpinnerTypeCode('primary');
        const inverseCode = getSpinnerTypeCode('inverse');
        const dangerCode = getSpinnerTypeCode('danger');

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Spinner Types', 'Explore the different visual styles of spinners including Primary, Inverse, and Danger variants, each available in full, split, and partial animations.')}
                
                <div class="ux4g-p-m">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl">
                        ${renderDemoCodeBlock('primary', 'Primary', '', primaryCode)}
                        ${renderDemoCodeBlock('inverse', 'Inverse', '', inverseCode, true)}
                        ${renderDemoCodeBlock('danger', 'Danger', '', dangerCode)}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};

export const SpinnerSizes = {
    render: () => {
        const getSizesSetHTML = (variant) => `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl ux4g-w-100">
                <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-gap-xl">
                    <div class="ux4g-label-s-strong ux4g-text-neutral-tertiary ux4g-min-w-60">Full</div>
                    <i class="ux4g-spinner-${variant}-full ux4g-spinner-xl"></i>
                    <i class="ux4g-spinner-${variant}-full ux4g-spinner-lg"></i>
                    <i class="ux4g-spinner-${variant}-full ux4g-spinner-md"></i>
                    <i class="ux4g-spinner-${variant}-full ux4g-spinner-sm"></i>
                    <i class="ux4g-spinner-${variant}-full ux4g-spinner-xs"></i>
                </div>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-gap-xl">
                    <div class="ux4g-label-s-strong ux4g-text-neutral-tertiary ux4g-min-w-60">Split</div>
                    <i class="ux4g-spinner-${variant}-split ux4g-spinner-xl"></i>
                    <i class="ux4g-spinner-${variant}-split ux4g-spinner-lg"></i>
                    <i class="ux4g-spinner-${variant}-split ux4g-spinner-md"></i>
                    <i class="ux4g-spinner-${variant}-split ux4g-spinner-sm"></i>
                    <i class="ux4g-spinner-${variant}-split ux4g-spinner-xs"></i>
                </div>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-gap-xl">
                    <div class="ux4g-label-s-strong ux4g-text-neutral-tertiary ux4g-min-w-60">Partial</div>
                    <i class="ux4g-spinner-${variant}-partial ux4g-spinner-xl"></i>
                    <i class="ux4g-spinner-${variant}-partial ux4g-spinner-lg"></i>
                    <i class="ux4g-spinner-${variant}-partial ux4g-spinner-md"></i>
                    <i class="ux4g-spinner-${variant}-partial ux4g-spinner-sm"></i>
                    <i class="ux4g-spinner-${variant}-partial ux4g-spinner-xs"></i>
                </div>
            </div>
        `;

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Spinner Sizes', 'Spinners come in five standard sizes to fit any layout requirement, from large full-screen loaders to tiny inline indicators.')}
                
                <div class="ux4g-p-m">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl">
                        ${renderDemoCodeBlock('primary-sizes', 'Primary Sizes', '', getSizesSetHTML('primary'), false, getSpinnerSizesCode('primary'))}
                        ${renderDemoCodeBlock('inverse-sizes', 'Inverse Sizes', '', getSizesSetHTML('inverse'), true, getSpinnerSizesCode('inverse'))}
                        ${renderDemoCodeBlock('danger-sizes', 'Danger Sizes', '', getSizesSetHTML('danger'), false, getSpinnerSizesCode('danger'))}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};
