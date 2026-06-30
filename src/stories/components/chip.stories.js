/**
 * Chip Component Stories
 * 
 * Showcasing different types of Chips: Filter, Choice, and Input chips with size and state variants.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Chips',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Chips are compact elements that represent an input, attribute, or action.',
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

const getReactCode = (html) => htmlToJsx(html, 'Chip');

const getSnippetCode = (entries) => entries.map(({ label, markup }) => `<!-- Variant: ${label} -->\n${markup}`).join('\n\n');

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
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-l ux4g-w-100 ux4g-flex-wrap">
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Chips</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Interactive elements that represent an input, attribute, or action. Supports multiple types including Filter, Choice, and Input chips with various sizes and states.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various chip types, sizes, and states.</p>
                    
                    <!-- Filter Chips Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Filter Chips</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xl ux4g-flex-wrap">
                                    <button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i> Label
                                    </button>
                                    <button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active">
                                        <i class="ux4g-icon-outlined">token</i> Active
                                    </button>
                                    <button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                                        <i class="ux4g-icon-outlined">token</i> Disabled
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Choice Chips Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Choice Chips</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xl ux4g-flex-wrap">
                                    <button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i> Label
                                    </button>
                                    <button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active">
                                        <i class="ux4g-icon-outlined">token</i> Active
                                    </button>
                                    <button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                                        <i class="ux4g-icon-outlined">token</i> Disabled
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Input Chips Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Input Chips</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xl ux4g-flex-wrap">
                                    <button class="ux4g-input-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i>
                                    </button>
                                    <button class="ux4g-input-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                                        <i class="ux4g-icon-outlined">token</i> Disabled <i class="ux4g-icon-outlined">close</i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Chips.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Filter Chip Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Filter Chip Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-filter-chip-md', label: 'Filter Chip Medium' },
                                                { class: 'ux4g-filter-chip-sm', label: 'Filter Chip Small' }
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

                        <!-- Choice Chip Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Choice Chip Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-choice-chip-md', label: 'Choice Chip Medium' },
                                                { class: 'ux4g-choice-chip-sm', label: 'Choice Chip Small' }
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

                        <!-- Input Chip Classes -->
                         <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Input Chip Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-input-chip-md', label: 'Input Chip Medium' },
                                                { class: 'ux4g-input-chip-sm', label: 'Input Chip Small' },
                                                { class: 'ux4g-input-chip-xs', label: 'Input Chip Extra Small' }
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

                        <!-- State Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Common States</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'active', label: 'Active State' },
                                                { class: 'disabled', label: 'Disabled State (Attribute)' }
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

export const FilterChips = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Filter Chips', 'Used for multiple selection and filtering content.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('filter-md', 'Medium Size', 'Standard medium filter chips.', `
                    <button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label
                    </button>
                    <button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active">
                        <i class="ux4g-icon-outlined">token</i> Active Label
                    </button>
                    <button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label
                    </button>
                `, false, getSnippetCode([
                    { label: 'Filter Chip - Medium - Default', markup: '<button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label</button>' },
                    { label: 'Filter Chip - Medium - Active', markup: '<button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active"><i class="ux4g-icon-outlined">token</i> Active Label</button>' },
                    { label: 'Filter Chip - Medium - Disabled', markup: '<button class="ux4g-filter-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label</button>' },
                ]))}
                
                ${renderDemoCodeBlock('filter-sm', 'Small Size', 'Small filter chips for dense layouts.', `
                    <button class="ux4g-filter-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label
                    </button>
                    <button class="ux4g-filter-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active">
                        <i class="ux4g-icon-outlined">token</i> Active Label
                    </button>
                    <button class="ux4g-filter-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label
                    </button>
                `, false, getSnippetCode([
                    { label: 'Filter Chip - Small - Default', markup: '<button class="ux4g-filter-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label</button>' },
                    { label: 'Filter Chip - Small - Active', markup: '<button class="ux4g-filter-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active"><i class="ux4g-icon-outlined">token</i> Active Label</button>' },
                    { label: 'Filter Chip - Small - Disabled', markup: '<button class="ux4g-filter-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label</button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const ChoiceChips = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Choice Chips', 'Used for single selection from a set of options.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('choice-md', 'Medium Size', 'Standard medium choice chips.', `
                    <button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label
                    </button>
                    <button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active">
                        <i class="ux4g-icon-outlined">token</i> Active Label
                    </button>
                    <button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label
                    </button>
                `, false, getSnippetCode([
                    { label: 'Choice Chip - Medium - Default', markup: '<button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label</button>' },
                    { label: 'Choice Chip - Medium - Active', markup: '<button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active"><i class="ux4g-icon-outlined">token</i> Active Label</button>' },
                    { label: 'Choice Chip - Medium - Disabled', markup: '<button class="ux4g-choice-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label</button>' },
                ]))}
                
                ${renderDemoCodeBlock('choice-sm', 'Small Size', 'Small choice chips for dense layouts.', `
                    <button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label
                    </button>
                    <button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active">
                        <i class="ux4g-icon-outlined">token</i> Active Label
                    </button>
                    <button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label
                    </button>
                `, false, getSnippetCode([
                    { label: 'Choice Chip - Small - Default', markup: '<button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label</button>' },
                    { label: 'Choice Chip - Small - Active', markup: '<button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs active"><i class="ux4g-icon-outlined">token</i> Active Label</button>' },
                    { label: 'Choice Chip - Small - Disabled', markup: '<button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label</button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const InputChips = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Input Chips', 'Used to represent information used in fields, such as entities or different attributes.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('input-md', 'Medium Size', 'Standard medium input chips with close icon.', `
                    <button class="ux4g-input-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i>
                    </button>
                    <button class="ux4g-input-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label <i class="ux4g-icon-outlined">close</i>
                    </button>
                `, false, getSnippetCode([
                    { label: 'Input Chip - Medium - Default', markup: '<button class="ux4g-input-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i></button>' },
                    { label: 'Input Chip - Medium - Disabled', markup: '<button class="ux4g-input-chip-md ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label <i class="ux4g-icon-outlined">close</i></button>' },
                ]))}
                
                ${renderDemoCodeBlock('input-sm', 'Small Size', 'Small input chips with close icon.', `
                    <button class="ux4g-input-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i>
                    </button>
                    <button class="ux4g-input-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label <i class="ux4g-icon-outlined">close</i>
                    </button>
                `, false, getSnippetCode([
                    { label: 'Input Chip - Small - Default', markup: '<button class="ux4g-input-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i></button>' },
                    { label: 'Input Chip - Small - Disabled', markup: '<button class="ux4g-input-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label <i class="ux4g-icon-outlined">close</i></button>' },
                ]))}

                ${renderDemoCodeBlock('input-xs', 'Extra Small Size', 'Extra Small input chips with close icon.', `
                    <button class="ux4g-input-chip-xs ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i>
                    </button>
                    <button class="ux4g-input-chip-xs ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled>
                        <i class="ux4g-icon-outlined">token</i> Disabled Label <i class="ux4g-icon-outlined">close</i>
                    </button>
                `, false, getSnippetCode([
                    { label: 'Input Chip - Extra Small - Default', markup: '<button class="ux4g-input-chip-xs ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">token</i> Label <i class="ux4g-icon-outlined">close</i></button>' },
                    { label: 'Input Chip - Extra Small - Disabled', markup: '<button class="ux4g-input-chip-xs ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs" disabled><i class="ux4g-icon-outlined">token</i> Disabled Label <i class="ux4g-icon-outlined">close</i></button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
