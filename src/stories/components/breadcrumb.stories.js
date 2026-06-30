/**
 * Breadcrumb Component Stories
 * 
 * Showcasing different types of Breadcrumbs: Standard and Dropdown with various dividers (Chevron, Slash).
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Breadcrumb',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Breadcrumbs help users understand their current location within a website and provide easy navigation back to previous levels.',
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

const getReactCode = (html) => htmlToJsx(html, 'Breadcrumb');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-w-100 ux4g-flex-wrap">
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

// --- Breadcrumb Templates ---

const CHEVRON_BREADCRUMB_HTML = `
<nav aria-label="Breadcrumb" class="ux4g-breadcrumb ux4g-breadcrumb-divider">
    <ol class="ux4g-breadcrumb-list ux4g-d-flex ux4g-ai-center ux4g-flex-wrap">
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" href="/">
                <span class="ux4g-icon-outlined">home</span>
                Home
            </a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link" href="/products">Products</a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link" href="/products">Products</a>
        </li>
        <li class="ux4g-breadcrumb-item active">
            MacBook Pro
        </li>
    </ol>
</nav>
`;

const SLASH_BREADCRUMB_HTML = `
<nav aria-label="Breadcrumb" class="ux4g-breadcrumb ux4g-breadcrumb-icon">
    <ol class="ux4g-breadcrumb-list ux4g-d-flex ux4g-ai-center ux4g-flex-wrap">
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" href="/">
                <span class="ux4g-icon-outlined">home</span>
                Home
            </a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link" href="/products">Products</a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link" href="/products/laptops">Laptops</a>
        </li>
        <li aria-current="page" class="ux4g-breadcrumb-item active">
            MacBook Pro
        </li>
    </ol>
</nav>
`;

const DROPDOWN_CHEVRON_HTML = `
<nav aria-label="Breadcrumb" class="ux4g-breadcrumb ux4g-breadcrumb-divider">
    <ol class="ux4g-breadcrumb-list  ux4g-d-flex ux4g-ai-center ux4g-flex-wrap">
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" href="/">
                <span class="ux4g-icon-outlined">home</span>
                Home
            </a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link" href="/products">Products</a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-breadcrumb-dropdown ux4g-d-flex ux4g-ai-center ux4g-relative">
            <button aria-expanded="false" aria-label="More breadcrumb items"
                class="ux4g-breadcrumb-toggle ux4g-d-flex ux4g-ai-center" data-bs-display="static"
                data-bs-toggle="dropdown" type="button">
                <span class="ux4g-icon-outlined">more_horiz</span>
                <span class="ux4g-icon">arrow_drop_down</span>
            </button>
            <ul class="ux4g-breadcrumb-menu ux4g-d-flex" data-popper-placement="top-start" role="menu">
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p1" role="menuitem">Page</a></li>
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p2" role="menuitem">Page</a></li>
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p3" role="menuitem">Page</a></li>
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p3" role="menuitem">Page</a></li>
            </ul>
        </li>
        <li aria-current="page" class="ux4g-breadcrumb-item active">
            MacBook Pro
        </li>
    </ol>
</nav>
`;

const DROPDOWN_SLASH_HTML = `
<nav aria-label="Breadcrumb" class="ux4g-breadcrumb ux4g-breadcrumb-icon">
    <ol class="ux4g-breadcrumb-list  ux4g-d-flex ux4g-ai-center ux4g-flex-wrap">
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" href="/">
                <span class="ux4g-icon-outlined">home</span>
                Home
            </a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-d-flex ux4g-ai-center">
            <a class="ux4g-breadcrumb-link" href="/products">Products</a>
        </li>
        <li class="ux4g-breadcrumb-item ux4g-breadcrumb-dropdown ux4g-d-flex ux4g-ai-center ux4g-relative">
            <button aria-expanded="false" aria-label="More breadcrumb items"
                class="ux4g-breadcrumb-toggle ux4g-d-flex ux4g-ai-center" data-bs-display="static"
                data-bs-toggle="dropdown" type="button">
                <span class="ux4g-icon-outlined">more_horiz</span>
                <span class="ux4g-icon">arrow_drop_down</span>
            </button>
            <ul class="ux4g-breadcrumb-menu ux4g-d-flex" data-popper-placement="top-start" role="menu">
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p1" role="menuitem">Page</a></li>
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p2" role="menuitem">Page</a></li>
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p3" role="menuitem">Page</a></li>
                <li role="none"><a class="ux4g-breadcrumb-menuitem" href="/p3" role="menuitem">Page</a></li>
            </ul>
        </li>
        <li aria-current="page" class="ux4g-breadcrumb-item active">
            MacBook Pro
        </li>
    </ol>
</nav>
`;

const STANDARD_CHEVRON_CODE = getSnippetCode([
    { label: 'Standard Breadcrumb - Chevron Divider', html: CHEVRON_BREADCRUMB_HTML },
]);

const STANDARD_SLASH_CODE = getSnippetCode([
    { label: 'Standard Breadcrumb - Slash Divider', html: SLASH_BREADCRUMB_HTML },
]);

const DROPDOWN_CHEVRON_CODE = getSnippetCode([
    { label: 'Dropdown Breadcrumb - Chevron Divider', html: DROPDOWN_CHEVRON_HTML },
]);

const DROPDOWN_SLASH_CODE = getSnippetCode([
    { label: 'Dropdown Breadcrumb - Slash Divider', html: DROPDOWN_SLASH_HTML },
]);

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Breadcrumbs</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Breadcrumbs provide a secondary navigation scheme that allows users to keep track of their locations within programs, documents, or websites.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
            <div class="">
                <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Breadcrumb Variants</h2>
                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl ux4g-mb-l">
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Breadcrumb With Chevron Icon</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${CHEVRON_BREADCRUMB_HTML}
                        </div>
                    </div>
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Breadcrumb With Forword Slash Divider</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${SLASH_BREADCRUMB_HTML}
                        </div>
                    </div>
                     <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Chevron Breadcrumb with dropdown</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${DROPDOWN_CHEVRON_HTML}
                        </div>
                    </div>
                     <div class="ux4g-relative">
                        <h3 class="ux4g-fs-20 ux4g-fw-semibold ux4g-mb-l">Forward slash Breadcrumb with dropdown</h3>
                        <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border">
                            ${DROPDOWN_SLASH_HTML}
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Utility classes for breadcrumb dividers and structure.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Divider Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Dividers</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-breadcrumb-divider', label: 'Chevron Divider (›)' },
        { class: 'ux4g-breadcrumb-icon', label: 'Slash Divider (/)' }
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

                        <!-- Dropdown Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Dropdown Layout</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-breadcrumb-dropdown', label: 'Dropdown Container' },
        { class: 'ux4g-breadcrumb-toggle', label: 'Dropdown Toggle' },
        { class: 'ux4g-breadcrumb-menu', label: 'Dropdown Menu (UL)' },
        { class: 'ux4g-breadcrumb-menuitem', label: 'Menu Link (A)' }
    ].map(s => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${s.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${s.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${s.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const StandardBreadcrumbs = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Standard Breadcrumbs', 'Standard breadcrumb variants using different dividers and including icons.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('standard-chevron', 'Breadcrumb With Chevron Icon', 'The default breadcrumb variant using a chevron divider.', CHEVRON_BREADCRUMB_HTML, false, STANDARD_CHEVRON_CODE)}
                ${renderDemoCodeBlock('standard-slash', 'Breadcrumb With Forword Slash Divider', 'A variant using a forward slash divider and icons in links.', SLASH_BREADCRUMB_HTML, false, STANDARD_SLASH_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const DropdownBreadcrumbs = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Dropdown Breadcrumbs', 'Breadcrumbs with dropdown menus for handling deep hierarchies or collapsed items.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('dropdown-chevron', 'Chevron Breadcrumb with dropdown', 'Breadcrumb with a dropdown menu and chevron dividers.', DROPDOWN_CHEVRON_HTML, false, DROPDOWN_CHEVRON_CODE)}
                ${renderDemoCodeBlock('dropdown-slash', 'Forward slash Breadcrumb with dropdown', 'Breadcrumb with a dropdown menu and forward slash dividers.', DROPDOWN_SLASH_HTML, false, DROPDOWN_SLASH_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
