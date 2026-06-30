/**
 * Tab Component Stories
 *
 * Showcasing source-backed Tab variants from src/index.html.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Tab',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Tabs organize related content into navigable sections with horizontal and vertical layouts.',
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

const getReactCode = (html) => htmlToJsx(html, 'Tab');

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
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-w-100">
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
                        <pre class="ux4g-m-none ux4g-p-l ux4g-w-100"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
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

const TAB_MORE_ICON_SMALL = `
    <span class="ux4g-tab-more-icon">
        <svg viewBox="0 0 16 16" width="14" height="14" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="3" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="8" cy="13" r="1.5" />
        </svg>
    </span>
`;

const TAB_MORE_ICON_MEDIUM = `
    <span class="ux4g-tab-more-icon">
        <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="3" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="8" cy="13" r="1.5" />
        </svg>
    </span>
`;

const TAB_MORE_ICON_LARGE = `
    <span class="ux4g-tab-more-icon">
        <svg viewBox="0 0 16 16" width="18" height="18" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="8" cy="3" r="1.5" />
            <circle cx="8" cy="8" r="1.5" />
            <circle cx="8" cy="13" r="1.5" />
        </svg>
    </span>
`;

const TAB_DROPDOWN_LIST = `
    <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-tab-dropdown-list ux4g-z-1">
        <li class="ux4g-list-item" role="option">
            <button type="button" class="ux4g-list-item-row">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-list-item-icon" aria-hidden="true">Label</span>
                </span>
            </button>
        </li>
        <li class="ux4g-list-item" role="option">
            <button type="button" class="ux4g-list-item-row">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-list-item-icon" aria-hidden="true">Label</span>
                </span>
            </button>
        </li>
        <li class="ux4g-list-item" role="option">
            <button type="button" class="ux4g-list-item-row">
                <span class="ux4g-list-item-start">
                    <span class="ux4g-list-item-icon" aria-hidden="true">Label</span>
                </span>
            </button>
        </li>
    </ul>
`;

const HORIZONTAL_UNDERLINE_SMALL_HTML = `
    <div class="ux4g-tab ux4g-tab-underline ux4g-tab-sm" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item ux4g-tab-more is-active" role="tab" tabindex="0" data-more="ul-sm-d2">
                More
                ${TAB_MORE_ICON_SMALL}
                ${TAB_DROPDOWN_LIST}
            </li>
        </ul>
    </div>
`;

const HORIZONTAL_UNDERLINE_MEDIUM_HTML = `
    <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item ux4g-tab-more is-active" role="tab" tabindex="0" data-more="ul-md-d2">
                More
                ${TAB_MORE_ICON_MEDIUM}
                ${TAB_DROPDOWN_LIST}
            </li>
        </ul>
    </div>
`;

const HORIZONTAL_UNDERLINE_LARGE_HTML = `
    <div class="ux4g-tab ux4g-tab-underline ux4g-tab-lg" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item ux4g-tab-more is-active" role="tab" tabindex="0" data-more="ul-lg-d2">
                More
                ${TAB_MORE_ICON_LARGE}
                ${TAB_DROPDOWN_LIST}
            </li>
        </ul>
    </div>
`;

const HORIZONTAL_PILL_SMALL_HTML = `
    <div class="ux4g-tab ux4g-tab-pill ux4g-tab-sm" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item ux4g-tab-more is-active" role="tab" tabindex="0" data-more="pill-sm-d2">
                More
                ${TAB_MORE_ICON_SMALL}
                ${TAB_DROPDOWN_LIST}
            </li>
        </ul>
    </div>
`;

const HORIZONTAL_PILL_MEDIUM_HTML = `
    <div class="ux4g-tab ux4g-tab-pill ux4g-tab-md" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item ux4g-tab-more is-active" role="tab" tabindex="0" data-more="pill-md-d2">
                More
                ${TAB_MORE_ICON_MEDIUM}
                ${TAB_DROPDOWN_LIST}
            </li>
        </ul>
    </div>
`;

const HORIZONTAL_PILL_LARGE_HTML = `
    <div class="ux4g-tab ux4g-tab-pill ux4g-tab-lg" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1">Label</li>
            <li class="ux4g-tab-item ux4g-tab-more is-active" role="tab" tabindex="0" data-more="pill-lg-d2">
                More
                ${TAB_MORE_ICON_LARGE}
                ${TAB_DROPDOWN_LIST}
            </li>
        </ul>
    </div>
`;

const INTERACTIVE_TABS_HTML = `
    <div id="demoTab" class="ux4g-tab ux4g-tab-underline ux4g-tab-md" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="dp1">Overview</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="dp2">Details</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="dp3">Settings</li>
            <li class="ux4g-tab-item ux4g-tab-more" role="tab" tabindex="0" data-more="demo-more">
                More
                ${TAB_MORE_ICON_MEDIUM}
                <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-tab-dropdown-list ux4g-z-1" id="demo-more">
                    <li class="ux4g-list-item ux4g-tab-dropdown-item" data-panel="dp4" role="option">
                        <button type="button" class="ux4g-list-item-row">
                            <span class="ux4g-list-item-start">
                                <span class="ux4g-list-item-icon" aria-hidden="true">Label</span>
                            </span>
                        </button>
                    </li>
                    <li class="ux4g-list-item ux4g-tab-dropdown-item" data-panel="dp5" role="option">
                        <button type="button" class="ux4g-list-item-row">
                            <span class="ux4g-list-item-start">
                                <span class="ux4g-list-item-icon" aria-hidden="true">Label</span>
                            </span>
                        </button>
                    </li>
                    <li class="ux4g-list-item ux4g-tab-dropdown-item" data-panel="dp6" role="option">
                        <button type="button" class="ux4g-list-item-row">
                            <span class="ux4g-list-item-start">
                                <span class="ux4g-list-item-icon" aria-hidden="true">Label</span>
                            </span>
                        </button>
                    </li>
                </ul>
            </li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="dp1">
            <strong>Overview</strong> — Summary of all content across the system.
        </div>
        <div class="ux4g-tab-panel" id="dp2">
            <strong>Details</strong> — Comprehensive information about the selected item.
        </div>
        <div class="ux4g-tab-panel" id="dp3">
            <strong>Settings</strong> — Manage your preferences and configuration.
        </div>
        <div class="ux4g-tab-panel" id="dp4">
            <strong>Analytics</strong> — Charts, KPIs and usage metrics.
        </div>
        <div class="ux4g-tab-panel" id="dp5">
            <strong>Reports</strong> — Export and view generated reports.
        </div>
        <div class="ux4g-tab-panel" id="dp6">
            <strong>History</strong> — Past activity and audit log.
        </div>
    </div>
`;

const VERTICAL_UNDERLINE_SMALL_HTML = `
    <div class="ux4g-tab ux4g-tab-vertical ux4g-tab-underline ux4g-tab-sm" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="ul-sm-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-sm-2">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-sm-3">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-sm-4">Label</li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="ul-sm-1">Panel 1 content</div>
        <div class="ux4g-tab-panel" id="ul-sm-2">Panel 2 content</div>
        <div class="ux4g-tab-panel" id="ul-sm-3">Panel 3 content</div>
        <div class="ux4g-tab-panel" id="ul-sm-4">Panel 4 content</div>
    </div>
`;

const VERTICAL_UNDERLINE_MEDIUM_HTML = `
    <div class="ux4g-tab ux4g-tab-vertical ux4g-tab-underline ux4g-tab-md" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="ul-md-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-md-2">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-md-3">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-md-4">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-md-5">Label</li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="ul-md-1">Panel 1 content</div>
        <div class="ux4g-tab-panel" id="ul-md-2">Panel 2 content</div>
        <div class="ux4g-tab-panel" id="ul-md-3">Panel 3 content</div>
        <div class="ux4g-tab-panel" id="ul-md-4">Panel 4 content</div>
        <div class="ux4g-tab-panel" id="ul-md-5">Panel 5 content</div>
    </div>
`;

const VERTICAL_UNDERLINE_LARGE_HTML = `
    <div class="ux4g-tab ux4g-tab-vertical ux4g-tab-underline ux4g-tab-lg" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="ul-lg-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-lg-2">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-lg-3">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-lg-4">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-lg-5">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="ul-lg-6">Label</li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="ul-lg-1">Panel 1 content</div>
        <div class="ux4g-tab-panel" id="ul-lg-2">Panel 2 content</div>
        <div class="ux4g-tab-panel" id="ul-lg-3">Panel 3 content</div>
        <div class="ux4g-tab-panel" id="ul-lg-4">Panel 4 content</div>
        <div class="ux4g-tab-panel" id="ul-lg-5">Panel 5 content</div>
        <div class="ux4g-tab-panel" id="ul-lg-6">Panel 6 content</div>
    </div>
`;

const VERTICAL_PILL_SMALL_HTML = `
    <div class="ux4g-tab ux4g-tab-vertical ux4g-tab-pill ux4g-tab-sm" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="pill-sm-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-sm-2">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-sm-3">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-sm-4">Label</li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="pill-sm-1">Panel 1 content</div>
        <div class="ux4g-tab-panel" id="pill-sm-2">Panel 2 content</div>
        <div class="ux4g-tab-panel" id="pill-sm-3">Panel 3 content</div>
        <div class="ux4g-tab-panel" id="pill-sm-4">Panel 4 content</div>
    </div>
`;

const VERTICAL_PILL_MEDIUM_HTML = `
    <div class="ux4g-tab ux4g-tab-vertical ux4g-tab-pill ux4g-tab-md" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="pill-md-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-2">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-3">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-4">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-5">Label</li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="pill-md-1">Panel 1 content</div>
        <div class="ux4g-tab-panel" id="pill-md-2">Panel 2 content</div>
        <div class="ux4g-tab-panel" id="pill-md-3">Panel 3 content</div>
        <div class="ux4g-tab-panel" id="pill-md-4">Panel 4 content</div>
        <div class="ux4g-tab-panel" id="pill-md-5">Panel 5 content</div>
    </div>
`;

const VERTICAL_PILL_LARGE_HTML = `
    <div class="ux4g-tab ux4g-tab-vertical ux4g-tab-pill ux4g-tab-lg" data-ux4g-tab>
        <ul class="ux4g-tab-list" role="tablist">
            <li class="ux4g-tab-item is-active" role="tab" tabindex="0" data-panel="pill-lg-1">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-lg-2">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-lg-3">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-lg-4">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-lg-5">Label</li>
            <li class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-lg-6">Label</li>
        </ul>
        <div class="ux4g-tab-panel is-active" id="pill-lg-1">Panel 1 content</div>
        <div class="ux4g-tab-panel" id="pill-lg-2">Panel 2 content</div>
        <div class="ux4g-tab-panel" id="pill-lg-3">Panel 3 content</div>
        <div class="ux4g-tab-panel" id="pill-lg-4">Panel 4 content</div>
        <div class="ux4g-tab-panel" id="pill-lg-5">Panel 5 content</div>
        <div class="ux4g-tab-panel" id="pill-lg-6">Panel 6 content</div>
    </div>
`;

const HORIZONTAL_UNDERLINE_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-gap-l">
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${HORIZONTAL_UNDERLINE_SMALL_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${HORIZONTAL_UNDERLINE_MEDIUM_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Large</div>
            ${HORIZONTAL_UNDERLINE_LARGE_HTML}
        </div>
    </div>
`;

const HORIZONTAL_PILL_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-gap-l">
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${HORIZONTAL_PILL_SMALL_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${HORIZONTAL_PILL_MEDIUM_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Large</div>
            ${HORIZONTAL_PILL_LARGE_HTML}
        </div>
    </div>
`;

const VERTICAL_UNDERLINE_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-gap-l">
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${VERTICAL_UNDERLINE_SMALL_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${VERTICAL_UNDERLINE_MEDIUM_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Large</div>
            ${VERTICAL_UNDERLINE_LARGE_HTML}
        </div>
    </div>
`;

const VERTICAL_PILL_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-gap-l">
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${VERTICAL_PILL_SMALL_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${VERTICAL_PILL_MEDIUM_HTML}
        </div>
        <div>
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Large</div>
            ${VERTICAL_PILL_LARGE_HTML}
        </div>
    </div>
`;

const HORIZONTAL_UNDERLINE_CLEAN_CODE = formatCode(`
    <!-- Variant: Horizontal Underline Tabs - Small -->
    ${HORIZONTAL_UNDERLINE_SMALL_HTML}

    <!-- Variant: Horizontal Underline Tabs - Medium -->
    ${HORIZONTAL_UNDERLINE_MEDIUM_HTML}

    <!-- Variant: Horizontal Underline Tabs - Large -->
    ${HORIZONTAL_UNDERLINE_LARGE_HTML}
`);

const HORIZONTAL_PILL_CLEAN_CODE = formatCode(`
    <!-- Variant: Horizontal Pill Tabs - Small -->
    ${HORIZONTAL_PILL_SMALL_HTML}

    <!-- Variant: Horizontal Pill Tabs - Medium -->
    ${HORIZONTAL_PILL_MEDIUM_HTML}

    <!-- Variant: Horizontal Pill Tabs - Large -->
    ${HORIZONTAL_PILL_LARGE_HTML}
`);

const INTERACTIVE_TABS_CLEAN_CODE = formatCode(`
    <!-- Variant: Interactive Tabs - Linked Panels -->
    ${INTERACTIVE_TABS_HTML}
`);

const VERTICAL_UNDERLINE_CLEAN_CODE = formatCode(`
    <!-- Variant: Vertical Underline Tabs - Small -->
    ${VERTICAL_UNDERLINE_SMALL_HTML}

    <!-- Variant: Vertical Underline Tabs - Medium -->
    ${VERTICAL_UNDERLINE_MEDIUM_HTML}

    <!-- Variant: Vertical Underline Tabs - Large -->
    ${VERTICAL_UNDERLINE_LARGE_HTML}
`);

const VERTICAL_PILL_CLEAN_CODE = formatCode(`
    <!-- Variant: Vertical Pill Tabs - Small -->
    ${VERTICAL_PILL_SMALL_HTML}

    <!-- Variant: Vertical Pill Tabs - Medium -->
    ${VERTICAL_PILL_MEDIUM_HTML}

    <!-- Variant: Vertical Pill Tabs - Large -->
    ${VERTICAL_PILL_LARGE_HTML}
`);

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Tab', 'Tabs support source-backed horizontal and vertical navigation patterns across underline and pill treatments, including overflow and linked panel layouts.')}

        <section class="ux4g-p-xl">
            <div class="ux4g-pb-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-mb-xl">
                    <div class="ux4g-card ux4g-card-solid">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Source-backed variants</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Horizontal underline tabs with overflow across small, medium, and large sizes.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Horizontal pill tabs with overflow across small, medium, and large sizes.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">An interactive horizontal tab example with linked tab panels.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Vertical underline and pill tabs with linked panels across small, medium, and large sizes.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ux4g-card ux4g-card-outline">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Available stories</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-primary-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-primary">Introduction</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Overview, live previews, and a compact class reference for real Tab variants.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-info">Horizontal Tabs</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Underline and pill tabs with size variants and overflow handling.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-success">Interactive Tabs</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Source-backed tab navigation with linked content panels.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-warning">Vertical Tabs</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Vertical underline and pill tab layouts with panel content.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-mb-2xl">
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Horizontal Tabs Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Live previews taken directly from the horizontal Tab showcase blocks in <code>src/index.html</code>.</p>
                        </div>
                        <div class="ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Underline</div>
                                ${HORIZONTAL_UNDERLINE_DEMO}
                            </div>
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Pill</div>
                                ${HORIZONTAL_PILL_DEMO}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Interactive Panels Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">The linked tab-panel demo is preserved as-is from the source showcase.</p>
                        </div>
                        <div class="ux4g-p-xl">
                            ${INTERACTIVE_TABS_HTML}
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Vertical Tabs Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Live previews taken directly from the vertical Tab showcase blocks in <code>src/index.html</code>.</p>
                        </div>
                        <div class="ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Underline</div>
                                ${VERTICAL_UNDERLINE_DEMO}
                            </div>
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Pill</div>
                                ${VERTICAL_PILL_DEMO}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Classes used by the showcased Tab variants only.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Layout</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-tab', label: 'Tab container' },
        { class: 'ux4g-tab-list', label: 'Tab list wrapper' },
        { class: 'ux4g-tab-item', label: 'Tab trigger item' },
        { class: 'ux4g-tab-panel', label: 'Tab panel content' },
        { class: 'ux4g-tab-more', label: 'Overflow trigger tab' },
        { class: 'ux4g-tab-more-icon', label: 'Overflow icon wrapper' },
        { class: 'ux4g-tab-dropdown-list', label: 'Overflow dropdown list' },
        { class: 'ux4g-tab-dropdown-item', label: 'Dropdown item with panel target' },
        { class: 'ux4g-tab-vertical', label: 'Vertical tab layout' }
    ].map(item => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${item.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${item.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${item.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-tab-underline', label: 'Underline tab style' },
        { class: 'ux4g-tab-pill', label: 'Pill tab style' },
        { class: 'ux4g-tab-sm', label: 'Small size' },
        { class: 'ux4g-tab-md', label: 'Medium size' },
        { class: 'ux4g-tab-lg', label: 'Large size' },
        { class: 'is-active', label: 'Active tab or panel state' }
    ].map(item => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${item.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${item.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${item.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const HorizontalTabs = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Horizontal Tabs', 'Source-backed horizontal Tab variants using underline and pill styles with overflow handling in small, medium, and large sizes.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('horizontal-underline', 'Horizontal Underline Tabs', 'Small, medium, and large underline tabs with the source overflow pattern.', HORIZONTAL_UNDERLINE_DEMO, false, HORIZONTAL_UNDERLINE_CLEAN_CODE)}
                ${renderDemoCodeBlock('horizontal-pill', 'Horizontal Pill Tabs', 'Small, medium, and large pill tabs with the source overflow pattern.', HORIZONTAL_PILL_DEMO, false, HORIZONTAL_PILL_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const InteractiveTabs = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Interactive Tabs', 'A source-backed horizontal Tab example with linked panels and overflow items mapped to content sections.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('interactive-tabs', 'Interactive Tab Panels', 'The exact medium underline Tab demo with mapped panels from src/index.html.', INTERACTIVE_TABS_HTML, false, INTERACTIVE_TABS_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const VerticalTabs = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Vertical Tabs', 'Source-backed vertical Tab variants using underline and pill styles with linked panel content in small, medium, and large sizes.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('vertical-underline', 'Vertical Underline Tabs', 'Small, medium, and large vertical underline tabs with source-backed panel markup.', VERTICAL_UNDERLINE_DEMO, false, VERTICAL_UNDERLINE_CLEAN_CODE)}
                ${renderDemoCodeBlock('vertical-pill', 'Vertical Pill Tabs', 'Small, medium, and large vertical pill tabs with source-backed panel markup.', VERTICAL_PILL_DEMO, false, VERTICAL_PILL_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
