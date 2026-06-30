/**
 * Empty State Component Stories
 * 
 * Showcasing various Empty State patterns for Search, Application, Development, and Error states.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Empty State',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Empty States are used when there is no content to display, such as search results, empty inboxes, or errors.',
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

const getReactCode = (html) => htmlToJsx(html, 'EmptyState');
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

// --- Empty State HTML Content ---

const EMPTY_STATE_SEARCH_HTML = `
<div class="ux4g-empty-state">
    <span class="ux4g-icon-outlined ux4g-empty-state-icon ux4g-text-primary">search</span>
    <div class="ux4g-empty-state-content">
        <h3 class="ux4g-title-l-strong">No results found</h3>
        <p class="ux4g-body-m-default">Did you mean:</p>
    </div>
    <button class="ux4g-btn-tonal-primary ux4g-btn-md">Clear all filters</button>
</div>`;

const EMPTY_STATE_APPLICATION_HTML = `
<div class="ux4g-empty-state">
    <span class="ux4g-icon-outlined ux4g-empty-state-icon ux4g-text-primary">inbox</span>
    <div class="ux4g-empty-state-content">
        <h3 class="ux4g-title-l-strong">No active applications</h3>
        <p class="ux4g-body-m-default">Start your application easily by clicking on the button below.</p>
    </div>
    <button class="ux4g-btn-tonal-primary ux4g-btn-md">Start application</button>
</div>`;

const EMPTY_STATE_COMING_SOON_HTML = `
<div class="ux4g-empty-state">
    <span class="ux4g-icon-outlined ux4g-empty-state-icon ux4g-text-primary">rocket_launch</span>
    <div class="ux4g-empty-state-content">
        <h3 class="ux4g-title-l-strong">Coming soon</h3>
        <p class="ux4g-body-m-default">This feature is under development</p>
    </div>
    <button class="ux4g-btn-tonal-primary ux4g-btn-md">Go Back</button>
</div>`;

const EMPTY_STATE_ERROR_HTML = `
<div class="ux4g-empty-state">
    <span class="ux4g-icon-outlined ux4g-empty-state-icon ux4g-text-primary">error_outline</span>
    <div class="ux4g-empty-state-content">
        <h3 class="ux4g-title-l-strong">Could not load data</h3>
        <p class="ux4g-body-m-default">Last updated: 4 minutes ago</p>
    </div>
    <button class="ux4g-btn-tonal-primary ux4g-btn-md">Refresh</button>
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Empty State</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Empty states provide guidance and reassurance when there is no data to display. They help users understand why a space is empty and what actions they can take.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
            <div class="ux4g-my-xl">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various Empty State patterns for search, applications, development, and errors.</p>
                
                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Search & Results</h3>
                    <div class="ux4g-mb-l">
                        ${EMPTY_STATE_SEARCH_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Applications & Inboxes</h3>
                    <div class="ux4g-mb-l">
                        ${EMPTY_STATE_APPLICATION_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Coming Soon</h3>
                    <div class="ux4g-mb-l">
                        ${EMPTY_STATE_COMING_SOON_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Error States</h3>
                    <div class="ux4g-mb-l">
                        ${EMPTY_STATE_ERROR_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

            <div id="class-reference">
                <div class="ux4g-my-l">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and typography classes for Empty States.</p>
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
                                            { class: 'ux4g-empty-state', label: 'Base Container' },
                                            { class: 'ux4g-empty-state-icon', label: 'Icon Styling' },
                                            { class: 'ux4g-empty-state-content', label: 'Content Wrapper' }
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

                    <!-- Typography Classes -->
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Typography Classes</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${[
                                            { class: 'ux4g-title-l-strong', label: 'Primary Title' },
                                            { class: 'ux4g-body-m-default', label: 'Secondary Body' }
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

export const EmptyStateType = {
    name: 'Empty State Type',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Empty State Types', 'Showcasing various contexts for empty states like Search, Application, and Errors.')}
            <div class="ux4g-p-m ux4g-bg-white">
                ${renderDemoCodeBlock('empty-search', 'No results found', 'Context: Search filters returning zero matches.', EMPTY_STATE_SEARCH_HTML, false, getSnippetCode([{ label: 'Empty State - No Results Found', html: EMPTY_STATE_SEARCH_HTML }]))}
                ${renderDemoCodeBlock('empty-application', 'No active applications', 'Context: Dashboard with no user data.', EMPTY_STATE_APPLICATION_HTML, false, getSnippetCode([{ label: 'Empty State - No Active Applications', html: EMPTY_STATE_APPLICATION_HTML }]))}
                ${renderDemoCodeBlock('empty-coming-soon', 'Coming soon', 'Context: Placeholder for future features.', EMPTY_STATE_COMING_SOON_HTML, false, getSnippetCode([{ label: 'Empty State - Coming Soon', html: EMPTY_STATE_COMING_SOON_HTML }]))}
                ${renderDemoCodeBlock('empty-error', 'Could not load data', 'Context: Server failure or offline state.', EMPTY_STATE_ERROR_HTML, false, getSnippetCode([{ label: 'Empty State - Could Not Load Data', html: EMPTY_STATE_ERROR_HTML }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
