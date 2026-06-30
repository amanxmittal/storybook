/**
 * Link Component Stories
 * 
 * Showcasing different types of text links: Default and Neutral, with size and icon variants.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Link',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Text links with support for multiple sizes, semantic colors, and integrated icons.',
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

const getReactCode = (html) => htmlToJsx(html, 'Link');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, gridClass = 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3', customCode = null) => {
    // Clean up template literal indentation
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
                    <div class="ux4g-d-grid ux4g-ai-center ${gridClass} ux4g-gap-l ux4g-w-100">
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Link</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Interactive text elements for navigation. Supports semantic variants, multiple sizes, and integrated iconography for enhanced affordance.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various link sizes and color types.</p>
                    
                    <!-- Default Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Default Examples</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xl ux4g-flex-wrap">
                                    <a href="#" class="ux4g-text-link-md">Medium Link</a>
                                    <a href="#" class="ux4g-text-link-sm">Small Link</a>
                                    <a href="#" class="ux4g-text-link-md"><i class="ux4g-icon ux4g-mr-xs">open_in_new</i>Leading Icon</a>
                                    <a href="#" class="ux4g-text-link-md">Trailing Icon<i class="ux4g-icon ux4g-ml-xs">open_in_new</i></a>
                                    <a aria-disabled="true" class="ux4g-text-link-md ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Neutral Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Neutral Examples</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xl ux4g-flex-wrap">
                                    <a href="#" class="ux4g-text-link-neutral-md">Neutral Medium</a>
                                    <a href="#" class="ux4g-text-link-neutral-sm">Neutral Small</a>
                                    <a href="#" class="ux4g-text-link-neutral-md"><i class="ux4g-icon ux4g-mr-xs">open_in_new</i>Leading Icon</a>
                                    <a href="#" class="ux4g-text-link-neutral-md">Trailing Icon<i class="ux4g-icon ux4g-ml-xs">open_in_new</i></a>
                                    <a aria-disabled="true" class="ux4g-text-link-neutral-md ux4g-opacity-50 ux4g-pe-none">Disabled Neutral</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for text links.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Default Variants -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Default Link Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-text-link-sm', label: 'Default Link Small (14px)' },
                                                { class: 'ux4g-text-link-md', label: 'Default Link Medium (16px)' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${r.label}</span>
                                                            <code class="ux4g-text-primary">${r.class}</code>
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

                        <!-- Neutral Variants -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Neutral Link Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-text-link-neutral-sm', label: 'Neutral Link Small (14px)' },
                                                { class: 'ux4g-text-link-neutral-md', label: 'Neutral Link Medium (16px)' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${t.label}</span>
                                                            <code class="ux4g-text-primary">${t.class}</code>
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

export const DefaultLinks = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Default Text / Link', 'Primary semantic links used for standard navigation and actions.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('def-sm', 'Small Variant', 'Standard 14px link size for dense UI elements.', `
                    <a class="ux4g-text-link-sm" href="https://google.com" target="_blank">Default Link Small</a>
                    <a class="ux4g-text-link-sm" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>
                    <a class="ux4g-text-link-sm" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>
                    <a aria-disabled="true" class="ux4g-text-link-sm ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>
                `, false, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3', getSnippetCode([
                    { label: 'Default Link Small - Text Only', html: '<a class="ux4g-text-link-sm" href="https://google.com" target="_blank">Default Link Small</a>' },
                    { label: 'Default Link Small - Leading Icon', html: '<a class="ux4g-text-link-sm" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>' },
                    { label: 'Default Link Small - Trailing Icon', html: '<a class="ux4g-text-link-sm" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>' },
                    { label: 'Default Link Small - Disabled', html: '<a aria-disabled="true" class="ux4g-text-link-sm ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>' },
                ]))}
                
                ${renderDemoCodeBlock('def-md', 'Medium Variant', 'Standard 16px link size for primary content and body text.', `
                    <a class="ux4g-text-link-md" href="https://google.com" target="_blank">Default Link Medium</a>
                    <a class="ux4g-text-link-md" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>
                    <a class="ux4g-text-link-md" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>
                    <a aria-disabled="true" class="ux4g-text-link-md ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>
                `, false, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3', getSnippetCode([
                    { label: 'Default Link Medium - Text Only', html: '<a class="ux4g-text-link-md" href="https://google.com" target="_blank">Default Link Medium</a>' },
                    { label: 'Default Link Medium - Leading Icon', html: '<a class="ux4g-text-link-md" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>' },
                    { label: 'Default Link Medium - Trailing Icon', html: '<a class="ux4g-text-link-md" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>' },
                    { label: 'Default Link Medium - Disabled', html: '<a aria-disabled="true" class="ux4g-text-link-md ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const NeutralLinks = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Neutral Text / Link', 'Neutral semantic links used for secondary actions or subtle navigation.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('neu-sm', 'Small Variant (Neutral)', 'Subtle 14px link size for secondary UI elements.', `
                    <a class="ux4g-text-link-neutral-sm" href="https://google.com" target="_blank">Neutral Link Small</a>
                    <a class="ux4g-text-link-neutral-sm" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>
                    <a class="ux4g-text-link-neutral-sm" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>
                    <a aria-disabled="true" class="ux4g-text-link-neutral-sm ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>
                `, false, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3', getSnippetCode([
                    { label: 'Neutral Link Small - Text Only', html: '<a class="ux4g-text-link-neutral-sm" href="https://google.com" target="_blank">Neutral Link Small</a>' },
                    { label: 'Neutral Link Small - Leading Icon', html: '<a class="ux4g-text-link-neutral-sm" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>' },
                    { label: 'Neutral Link Small - Trailing Icon', html: '<a class="ux4g-text-link-neutral-sm" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>' },
                    { label: 'Neutral Link Small - Disabled', html: '<a aria-disabled="true" class="ux4g-text-link-neutral-sm ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>' },
                ]))}
                
                ${renderDemoCodeBlock('neu-md', 'Medium Variant (Neutral)', 'Subtle 16px link size for secondary body content.', `
                    <a class="ux4g-text-link-neutral-md" href="https://google.com" target="_blank">Neutral Link Medium</a>
                    <a class="ux4g-text-link-neutral-md" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>
                    <a class="ux4g-text-link-neutral-md" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>
                    <a aria-disabled="true" class="ux4g-text-link-neutral-md ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>
                `, false, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3', getSnippetCode([
                    { label: 'Neutral Link Medium - Text Only', html: '<a class="ux4g-text-link-neutral-md" href="https://google.com" target="_blank">Neutral Link Medium</a>' },
                    { label: 'Neutral Link Medium - Leading Icon', html: '<a class="ux4g-text-link-neutral-md" href="https://google.com" target="_blank"><i class="ux4g-icon">open_in_new</i> Link</a>' },
                    { label: 'Neutral Link Medium - Trailing Icon', html: '<a class="ux4g-text-link-neutral-md" href="https://google.com" target="_blank">Link <i class="ux4g-icon">open_in_new</i></a>' },
                    { label: 'Neutral Link Medium - Disabled', html: '<a aria-disabled="true" class="ux4g-text-link-neutral-md ux4g-opacity-50 ux4g-pe-none">Disabled Link</a>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
