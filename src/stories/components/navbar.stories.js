/**
 * Navbar Component Stories
 * 
 * Showcasing various Navbar layouts including Default, Right-aligned, Extended, and Mobile variants.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Navbar',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Navbars are essential navigation components that provide branding and primary navigation links.',
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

const getReactCode = (html) => htmlToJsx(html, 'Navbar');
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

            <div class="ux4g-mb-l ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                ${htmlContent}
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

// --- Navbar HTML Content ---

const NAVBAR_TYPE_1_HTML = `
<nav class="ux4g-navbar">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <ul class="ux4g-navbar-links">
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li class="ux4g-dropdown ux4g-dropdown-button">
                    <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                        <span>Label</span>
                        <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                    </a>
                    <div class="ux4g-dropdown-menu">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
            </ul>

            <!-- Actions -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_TYPE_1_1_HTML = `
<nav class="ux4g-navbar">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <ul class="ux4g-navbar-links">
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li class="ux4g-dropdown ux4g-dropdown-button">
                    <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                        <span>Label</span>
                        <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                    </a>
                    <div class="ux4g-dropdown-menu">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
            </ul>

            <!-- Actions -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                <button class="ux4g-btn-outline-primary ux4g-btn-md">Button</button>
                <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_TYPE_1_2_HTML = `
<nav class="ux4g-navbar">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <ul class="ux4g-navbar-links">
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li class="ux4g-dropdown ux4g-dropdown-button">
                    <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                        <span>Label</span>
                        <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                    </a>
                    <div class="ux4g-dropdown-menu">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
            </ul>

            <!-- Actions -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                <div class="ux4g-avatar ux4g-relative">
                    <img src="https://i.pravatar.cc/150?u=s1" alt="avatar">
                    <span class="ux4g-badge-dot-success avatar-badge ux4g-badge-m"></span>
                </div>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_TYPE_1_3_HTML = `
<nav class="ux4g-navbar">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <ul class="ux4g-navbar-links">
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li class="ux4g-dropdown ux4g-dropdown-button">
                    <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                        <span>Label</span>
                        <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                    </a>
                    <div class="ux4g-dropdown-menu">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
            </ul>

            <!-- Actions -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">token</i>
                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                <button class="ux4g-icon-btn ux4g-icon-btn-outline-primary">
                    <i class="ux4g-icon-outlined">menu</i>
                </button>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_PILLS_HTML = `
<nav class="ux4g-navbar ux4g-radius-full">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Navigation Links -->
            <ul class="ux4g-navbar-links">
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
                <li class="ux4g-dropdown ux4g-dropdown-button">
                    <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                        <span>Label</span>
                        <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                    </a>
                    <div class="ux4g-dropdown-menu">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#" class="ux4g-text-link-sm">Label </a></li>
            </ul>

            <!-- Actions -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_TYPE_2_HTML = `
<nav class="ux4g-navbar ux4g-navbar-right">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Right Group -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                <ul class="ux4g-navbar-links">
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                    <li class="ux4g-dropdown ux4g-dropdown-button">
                        <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                            <span>Label</span>
                            <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                        </a>
                        <div class="ux4g-dropdown-menu">
                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                <li class="ux4g-list-item" role="option">
                                    <button class="ux4g-list-item-row" type="button">
                                        <span class="ux4g-list-item-start">
                                            <span aria-hidden="true">Label</span>
                                        </span>
                                    </button>
                                </li>
                                <li class="ux4g-list-item" role="option">
                                    <button class="ux4g-list-item-row" type="button">
                                        <span class="ux4g-list-item-start">
                                            <span aria-hidden="true">Label</span>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                </ul>

                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                    <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                    <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
                </div>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_TYPE_2_1_PILLS_HTML = `
<nav class="ux4g-navbar ux4g-radius-full">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Logo & Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Right Group -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                <ul class="ux4g-navbar-links">
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                    <li class="ux4g-dropdown ux4g-dropdown-button">
                        <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                            <span>Label</span>
                            <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                        </a>
                        <div class="ux4g-dropdown-menu">
                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                <li class="ux4g-list-item" role="option">
                                    <button class="ux4g-list-item-row" type="button">
                                        <span class="ux4g-list-item-start">
                                            <span aria-hidden="true">Label</span>
                                        </span>
                                    </button>
                                </li>
                                <li class="ux4g-list-item" role="option">
                                    <button class="ux4g-list-item-row" type="button">
                                        <span class="ux4g-list-item-start">
                                            <span aria-hidden="true">Label</span>
                                        </span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </li>
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                    <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                </ul>

                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                    <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                    <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
                </div>
            </div>
        </div>
    </div>
</nav>`;

const NAVBAR_EXTENDED_HTML = `
<nav class="ux4g-navbar">
    <div class="ux4g-container">
        <div class="ux4g-navbar-wrap">
            <!-- Brand -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                <span class="ux4g-divider-vertical "></span>
                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                <div class="ux4g-d-flex ux4g-flex-column">
                    <span class="ux4g-label-m-strong">Title</span>
                    <span class="ux4g-body-xs-default">Description</span>
                </div>
            </div>

            <!-- Search -->
            <div class="ux4g-mx-l ux4g-w-100 ux4g-d-none ux4g-md-d-block" style="max-width: 480px;">
                <div class="ux4g-search-container">
                    <div class="ux4g-search">
                        <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                        <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                        <button class="ux4g-search-btn" type="submit">
                            <span class="ux4g-icon-outlined">search</span>
                        </button>
                    </div>
                </div>
            </div>

            <!-- Actions -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
            </div>
        </div>

        <hr class="ux4g-divider-horizontal ux4g-m-none">

        <!-- Navigation -->
        <div class="ux4g-navbar-wrap ux4g-py-xs">
            <ul class="ux4g-navbar-links ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-w-100">
                <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                <li class="ux4g-dropdown ux4g-dropdown-button">
                    <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown">
                        <span>Label</span>
                        <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                    </a>
                    <div class="ux4g-dropdown-menu">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row" type="button">
                                    <span class="ux4g-list-item-start">
                                        <span aria-hidden="true">Label</span>
                                    </span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </li>
                <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
            </ul>
        </div>
    </div>
</nav>`;

const MOBILE_NAVBAR_TYPE_1_HTML = `
<nav class="ux4g-navbar">
    <div class=" ux4g-py-s ux4g-px-m ux4g-shadow-m">
        <div class="ux4g-row ux4g-ai-center">
            <div class="ux4g-col-10">
                <div class="ux4g-d-flex ux4g-ai-baseline ux4g-inline-gap-s">
                    <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                    <span class="ux4g-divider-vertical"></span>
                    <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                </div>
            </div>
            <div class="ux4g-col-2 ux4g-d-flex ux4g-jc-end">
                <button class="ux4g-icon-btn ux4g-icon-btn-outline-primary">
                    <i class="ux4g-icon-outlined">menu</i>
                </button>
            </div>
        </div>
    </div>
</nav>`;

const MOBILE_NAVBAR_TYPE_2_HTML = `
<div class="ux4g-navbar">
    <div class=" ux4g-py-s ux4g-px-m">
        <div class="ux4g-row ux4g-ai-center">
            <div class="ux4g-col-10">
                <div class="ux4g-d-flex ux4g-ai-baseline ux4g-inline-gap-s">
                    <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                    <span class="ux4g-divider-vertical"></span>
                    <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                </div>
            </div>
            <div class="ux4g-col-2 ux4g-d-flex ux4g-jc-end">
                <button class="ux4g-icon-btn ux4g-icon-btn-outline-primary">
                    <i class="ux4g-icon-outlined">menu</i>
                </button>
            </div>
        </div>
    </div>

    <div class=" ux4g-px-m ux4g-pb-m ux4g-shadow-m">
        <hr class="ux4g-divider-horizontal ux4g-mb-m">
        <div class="ux4g-search-container ux4g-search-m">
            <div class="ux4g-search">
                <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                <button class="ux4g-search-btn" type="submit">
                    <span class="ux4g-icon-outlined">search</span>
                </button>
            </div>
        </div>
    </div>
</div>`;

// --- Stories Content ---

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Navbar</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        The Navbar component provides branding, primary navigation, and actions. It supports various layouts including default, right-aligned, and extended views with mobile responsiveness.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various Navbar variants including Default, Pills, Extended, and Mobile styles.</p>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Navbar</h3>
                        <div class="ux4g-mb-l">
                            ${NAVBAR_TYPE_1_HTML}
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Navbar Pills</h3>
                        <div class="ux4g-mb-l">
                            ${NAVBAR_PILLS_HTML}
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Extended Navbar</h3>
                        <div class="ux4g-mb-l">
                            ${NAVBAR_EXTENDED_HTML}
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mobile Navbar</h3>
                        <div class="ux4g-mb-l">
                            ${MOBILE_NAVBAR_TYPE_1_HTML}
                        </div>
                    </div>

                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Extended Mobile Navbar</h3>
                        <div class="ux4g-mb-l">
                            ${MOBILE_NAVBAR_TYPE_2_HTML}
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and utility classes for Navbars.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Structural Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structural Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-navbar', label: 'Base Navbar' },
                                                { class: 'ux4g-navbar-wrap', label: 'Layout Wrapper' },
                                                { class: 'ux4g-navbar-logo', label: 'Logo Height' },
                                                { class: 'ux4g-navbar-links', label: 'Navigation List' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
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

                        <!-- Variant Utilities -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variant Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-navbar-right', label: 'Right Aligned' },
                                                { class: 'ux4g-radius-full', label: 'Pill Shaped' },
                                                { class: 'ux4g-divider-vertical', label: 'Vertical Divider' },
                                                { class: 'ux4g-divider-horizontal', label: 'Horizontal Divider' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${t.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${t.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${t.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

                if (window.ux4g && typeof window.ux4g.init === 'function') {
                    window.ux4g.init(intro);
                }
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

export const NavbarType = {
    name: 'Navbar Type',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Navbar Types', 'Default, Right Aligned, and Extended layouts.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('nav-default', 'Default', '', NAVBAR_TYPE_1_HTML, false, getSnippetCode([{ label: 'Navbar Default', html: NAVBAR_TYPE_1_HTML.trim() }]))}
                ${renderDemoCodeBlock('nav-1-1', 'With Multiple Button', '', NAVBAR_TYPE_1_1_HTML, false, getSnippetCode([{ label: 'Navbar With Multiple Button', html: NAVBAR_TYPE_1_1_HTML.trim() }]))}
                ${renderDemoCodeBlock('nav-1-2', ' Post Login', '', NAVBAR_TYPE_1_2_HTML, false, getSnippetCode([{ label: 'Navbar Post Login', html: NAVBAR_TYPE_1_2_HTML.trim() }]))}
                ${renderDemoCodeBlock('nav-1-3', ' With Hamburger', '', NAVBAR_TYPE_1_3_HTML, false, getSnippetCode([{ label: 'Navbar With Hamburger', html: NAVBAR_TYPE_1_3_HTML.trim() }]))}
                ${renderDemoCodeBlock('nav-extended', 'Extended', '', NAVBAR_EXTENDED_HTML, false, getSnippetCode([{ label: 'Navbar Extended', html: NAVBAR_EXTENDED_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const NavbarPill = {
    name: 'Navbar Pills',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Pill Navbars', 'Navbars with a rounded pill-shaped container.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('nav-pills-default', ' Navbar  Pills', '', NAVBAR_PILLS_HTML, false, getSnippetCode([{ label: 'Navbar Pills', html: NAVBAR_PILLS_HTML.trim() }]))}
                ${renderDemoCodeBlock('nav-pills-right', ' Right Aligned Navbar Pills', '', NAVBAR_TYPE_2_1_PILLS_HTML, false, getSnippetCode([{ label: 'Right Aligned Navbar Pills', html: NAVBAR_TYPE_2_1_PILLS_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const MobileNavbar = {
    name: 'Mobile Navbar',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mobile Navbars', 'Responsive navigation patterns for mobile viewports.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('mobile-nav-1', 'Mobile Web Navbar', '', MOBILE_NAVBAR_TYPE_1_HTML, false, getSnippetCode([{ label: 'Mobile Web Navbar', html: MOBILE_NAVBAR_TYPE_1_HTML.trim() }]))}
                ${renderDemoCodeBlock('mobile-nav-2', 'Extended Mobile Web Navbar', '', MOBILE_NAVBAR_TYPE_2_HTML, false, getSnippetCode([{ label: 'Extended Mobile Web Navbar', html: MOBILE_NAVBAR_TYPE_2_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
