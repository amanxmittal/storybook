/**
 * Draft Status Component Stories
 * 
 * Showcasing various draft and status indicators for progress and state representation.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Draft Status',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Draft Status Bars provide feedback on the status of a form or application draft, including saving states and expiration warnings.',
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

const getReactCode = (html) => htmlToJsx(html, 'DraftStatus');
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

// --- Draft Status HTML Content ---

const DRAFT_TYPE_1_HTML = `
<!-- Draft In Progress -->
<div class="ux4g-draft-status-bar ux4g-bg-warning">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
        <button class="ux4g-icon-btn ux4g-bg-warning-subtle ux4g-icon-btn-pill">
            <i class="ux4g-icon-outlined ux4g-text-warning">token</i>
        </button>
        <div class="ux4g-d-flex ux4g-flex-column">
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                <span class="ux4g-title-s-default">Income Certificate Application</span>
                <span class="ux4g-tag-tonal-warning">Step 3 of 5 Document Upload</span>
            </div>
            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Last saved: 10 Apr 2026</span>
        </div>
    </div>
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <button class="ux4g-btn-text-danger ux4g-btn-md">Discard</button>
        <button class="ux4g-btn-primary ux4g-btn-md">Resume</button>
    </div>
</div>`;

const DRAFT_TYPE_2_HTML = `
<!-- Expiring Soon -->
<div class="ux4g-draft-status-bar ux4g-bg-warning">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
        <button class="ux4g-icon-btn ux4g-bg-warning-subtle ux4g-icon-btn-pill">
            <i class="ux4g-icon-outlined ux4g-text-warning">token</i>
        </button>
        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
            <span class="ux4g-body-s-strong">Your draft expires in 5 days</span>
            <span class="ux4g-tag-tonal-warning">16 Apr</span>
        </div>
    </div>
</div>`;

const DRAFT_TYPE_3_HTML = `
<!-- Urgent Expiry -->
<div class="ux4g-draft-status-bar ux4g-bg-warning-strong">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
        <button class="ux4g-icon-btn ux4g-bg-neutral-elevated ux4g-icon-btn-pill">
            <i class="ux4g-icon-outlined ux4g-text-warning">token</i>
        </button>
        <span class="ux4g-body-s-strong ux4g-text-white">Your draft expires tomorrow. Submit today</span>
    </div>
</div>`;

const DRAFT_TYPE_4_HTML = `
<!-- Expired -->
<div class="ux4g-draft-status-bar ux4g-bg-error-soft">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
        <span class="ux4g-icon-outlined ux4g-icon-error ux4g-fs-20">error_outline</span>
        <span class="ux4g-body-s-default">Draft expired on 9 April 2026</span>
    </div>
    <button class="ux4g-btn-text-danger ux4g-btn-md">Action</button>
</div>`;

const DRAFT_AUTO_SAVING_HTML = `
<!-- Auto Saving -->
<div class="ux4g-auto-draft-status-bar ux4g-bg-warning">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <span class="ux4g-spinner-primary-full ux4g-spinner-sm" aria-hidden="true"></span>
        <span class="ux4g-body-xs-default ux4g-text-neutral-secondary">Saving</span>
    </div>
</div>`;

const DRAFT_AUTO_SAVED_HTML = `
<!-- Auto Saved -->
<div class="ux4g-auto-draft-status-bar ux4g-bg-success">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
        <span class="ux4g-icon-outlined ux4g-icon-success ux4g-fs-20">check_circle</span>
        <span class="ux4g-body-xs-default ux4g-text-neutral-secondary">Saved 3:14 PM</span>
    </div>
</div>`;

const DRAFT_SUCCESS_HTML = `
<!-- Draft Saved Successfully -->
<div class="ux4g-success-draft-status-bar ux4g-bg-success">
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
        <span class="ux4g-icon-outlined ux4g-icon-success ux4g-fs-20">check_circle</span>
        <span class="ux4g-body-s-default ux4g-text-success">Draft saved successfully at 3:14 PM</span>
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Draft Status Bar</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        The Draft Status Bar provides visual feedback on the state of a user's work, including active drafts, expiration warnings, and auto-save confirmations.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-m ux4g-bg-neutral-emphasis">
            <div class="ux4g-my-xl">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various Draft Status Bar types and save states.</p>
                
                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m">General Draft Status</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        ${DRAFT_TYPE_1_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m">Expiration Warnings</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        ${DRAFT_TYPE_2_HTML}
                        ${DRAFT_TYPE_3_HTML}
                        ${DRAFT_TYPE_4_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m">Auto-save States</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        ${DRAFT_AUTO_SAVING_HTML}
                        ${DRAFT_AUTO_SAVED_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m">Success State</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        ${DRAFT_SUCCESS_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

            <div id="class-reference">
                <div class="ux4g-my-l">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Draft Status Bars.</p>
                </div>

                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                    <!-- Component Classes -->
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Component Classes</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${[
                                            { class: 'ux4g-draft-status-bar', label: 'Draft Progress Bar' },
                                            { class: 'ux4g-auto-draft-status-bar', label: 'Compact Save Bar' },
                                            { class: 'ux4g-success-draft-status-bar', label: 'Success Bar' }
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

                    <!-- Background Variants -->
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Background Variants</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${[
                                            { class: 'ux4g-bg-warning', label: 'Warning Background' },
                                            { class: 'ux4g-bg-warning-strong', label: 'Urgent Warning' },
                                            { class: 'ux4g-bg-error-soft', label: 'Soft Error' },
                                            { class: 'ux4g-bg-success', label: 'Success Background' }
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

export const DraftStatusType = {
    name: 'Draft Status Type',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Draft Status Types', 'Full range of draft states including progress, expiry, and auto-save.')}
            <div class="ux4g-p-m ux4g-bg-neutral-emphasis">
                ${renderDemoCodeBlock('draft-progress', 'Draft In Progress', 'Standard bar with actions.', DRAFT_TYPE_1_HTML, false, getSnippetCode([{ label: 'Draft Status - Draft In Progress', html: DRAFT_TYPE_1_HTML }]))}
                ${renderDemoCodeBlock('draft-expiring', 'Expiring Soon', 'Warning for upcoming draft expiration.', DRAFT_TYPE_2_HTML, false, getSnippetCode([{ label: 'Draft Status - Expiring Soon', html: DRAFT_TYPE_2_HTML }]))}
                ${renderDemoCodeBlock('draft-urgent', 'Urgent Expiry', 'High-contrast warning for immediate expiration.', DRAFT_TYPE_3_HTML, false, getSnippetCode([{ label: 'Draft Status - Urgent Expiry', html: DRAFT_TYPE_3_HTML }]))}
                ${renderDemoCodeBlock('draft-expired', 'Expired Draft', 'Error state for drafts that have passed expiration.', DRAFT_TYPE_4_HTML, false, getSnippetCode([{ label: 'Draft Status - Expired Draft', html: DRAFT_TYPE_4_HTML }]))}
                ${renderDemoCodeBlock('draft-saving', 'Auto Saving', 'Compact loading state during draft saving.', DRAFT_AUTO_SAVING_HTML, false, getSnippetCode([{ label: 'Draft Status - Auto Saving', html: DRAFT_AUTO_SAVING_HTML }]))}
                ${renderDemoCodeBlock('draft-saved', 'Auto Saved', 'Compact confirmation of successful auto-save.', DRAFT_AUTO_SAVED_HTML, false, getSnippetCode([{ label: 'Draft Status - Auto Saved', html: DRAFT_AUTO_SAVED_HTML }]))}
                ${renderDemoCodeBlock('draft-success', 'Saved Successfully', 'Prominent success confirmation.', DRAFT_SUCCESS_HTML, false, getSnippetCode([{ label: 'Draft Status - Saved Successfully', html: DRAFT_SUCCESS_HTML }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
