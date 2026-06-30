/**
 * Tooltip Component Stories
 * 
 * showcasing different sizes and placements of contextual information.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Tooltip',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Tooltips display informative text when users hover over, focus on, or tap an element.',
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

const getReactCode = (html) => htmlToJsx(html, 'Tooltip');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const rawContent = customCode || htmlContent;
    const lines = rawContent.split('\n');
    const nonBlankLines = lines.filter(line => line.trim().length > 0);
    const minIndent = nonBlankLines.length > 0 
        ? Math.min(...nonBlankLines.map(line => line.match(/^\s*/)[0].length))
        : 0;
    const displayCode = lines.map(line => line.substring(minIndent)).join('\n').trim();

    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl ux4g-pb-xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ux4g-d-flex ux4g-jc-center ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-grid-cols-md-4 ux4g-gap-xl ux4g-justify-items-center ux4g-w-100">
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Tooltip</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Tooltips are contextual popups that provide additional information when users hover over or focus on an element. They are designed to be brief, helpful, and non-intrusive.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Explore interactive tooltips with various placements and sizes.</p>
                    
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-xl">
                        <div class="ux4g-p-xl">
                            <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-grid-cols-md-4 ux4g-gap-xl ux4g-justify-items-center ux4g-ai-center">
                                ${[
                                    { pos: 'top-left', label: 'Top Left' },
                                    { pos: 'top-center', label: 'Top Center' },
                                    { pos: 'top-right', label: 'Top Right' },
                                    { pos: 'left-center', label: 'Left Center' },
                                    { pos: 'bottom-left', label: 'Bottom Left' },
                                    { pos: 'bottom-center', label: 'Bottom Center' },
                                    { pos: 'bottom-right', label: 'Bottom Right' },
                                    { pos: 'right-center', label: 'Right Center' }
                                ].map(p => `
                                    <div class="ux4g-tooltip-wrapper">
                                        <button class="ux4g-btn-outline-primary ux4g-btn-sm ux4g-radius-full ux4g-px-l">${p.label}</button>
                                        <div class="ux4g-tooltip ux4g-tooltip-${p.pos} ux4g-tooltip-s">
                                            Tooltip text on ${p.label}
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy placement and size utilities for tooltips.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Placement Utilities (Column 6) -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Placement Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${['top-left', 'top-center', 'top-right', 'left-center', 'bottom-left', 'bottom-center', 'bottom-right', 'right-center'].map(p => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <code class="ux4g-text-primary">ux4g-tooltip-${p}</code>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-tooltip-${p}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Size Utilities (Column 6) -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Size Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Small (S)</span>
                                                            <code class="ux4g-text-primary">ux4g-tooltip-s</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-tooltip-s"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Extra Small (XS)</span>
                                                            <code class="ux4g-text-primary">ux4g-tooltip-xs</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-tooltip-xs"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
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

export const Tooltips = {
    render: () => {
        const pSource = [
            { id: 'top-left', label: 'Top Left' },
            { id: 'top-center', label: 'Top Center' },
            { id: 'top-right', label: 'Top Right' },
            { id: 'left-center', label: 'Left Center' },
            { id: 'bottom-left', label: 'Bottom Left' },
            { id: 'bottom-center', label: 'Bottom Center' },
            { id: 'bottom-right', label: 'Bottom Right' },
            { id: 'right-center', label: 'Right Center' }
        ];

        const getGridHTML = (size, btnClass = 'ux4g-btn-primary', contents = {}) => pSource.map(p => `
<div class="ux4g-tooltip-wrapper">
    <button class="${btnClass} ux4g-btn-sm ux4g-radius-full ux4g-px-l">${p.label}</button>
    <div class="ux4g-tooltip ux4g-tooltip-${p.id} ux4g-tooltip-${size}">
        ${contents[p.id] || `This is a ${size.toUpperCase()} tooltip on ${p.label}.`}
    </div>
</div>`).join('\n');

        const xsContent = {
            'top-left': 'Lorem ipsum dolor sit amet consectetur adipisicing',
            'top-center': 'Lorem ipsum dolor sit amet consectetur adipisicing',
            'top-right': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur sequi, consequuntur perspiciatis esse fugiat, sit possimus quibusdam ipsam repellat.',
            'left-center': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum molestias praesentium cumque autem numquam rerum quia exercitationem facilis eaque.',
            'bottom-left': 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis quasi eum eaque cumque ut officiis explicabo reprehenderit, magni culpa voluptate modi.',
            'bottom-center': 'nik',
            'bottom-right': 'nitesh',
            'right-center': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, quaerat fuga magnam facilis illum animi veniam vel mollitia, iusto ratione doloribus nisi?'
        };

        const smallCode = getGridHTML('s');
        const xsCode = getGridHTML('xs', 'ux4g-btn-danger', xsContent);
        const smallSnippetCode = getSnippetCode(pSource.map((p) => ({
            label: `Small Tooltip - ${p.label}`,
            html: `
<div class="ux4g-tooltip-wrapper">
    <button class="ux4g-btn-primary ux4g-btn-sm ux4g-radius-full ux4g-px-l">${p.label}</button>
    <div class="ux4g-tooltip ux4g-tooltip-${p.id} ux4g-tooltip-s">
        This is a S tooltip on ${p.label}.
    </div>
</div>`.trim(),
        })));
        const xsSnippetCode = getSnippetCode(pSource.map((p) => ({
            label: `Extra Small Tooltip - ${p.label}`,
            html: `
<div class="ux4g-tooltip-wrapper">
    <button class="ux4g-btn-danger ux4g-btn-sm ux4g-radius-full ux4g-px-l">${p.label}</button>
    <div class="ux4g-tooltip ux4g-tooltip-${p.id} ux4g-tooltip-xs">
        ${xsContent[p.id] || `This is a XS tooltip on ${p.label}.`}
    </div>
</div>`.trim(),
        })));

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Tooltip Variants', 'Discover the full range of tooltips, categorized by size (Small and Extra Small) and covering all 8 cardinal placements.')}
                
                <div class="ux4g-p-m">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl">
                        ${renderDemoCodeBlock('small', 'Small Tooltips (ux4g-tooltip-s)', 'Standard size tooltips for general contextual information.', smallCode, false, smallSnippetCode)}
                        ${renderDemoCodeBlock('xs', 'Extra Small Tooltips (ux4g-tooltip-xs)', 'Compact tooltips designed for tight spaces or minimal content.', xsCode, false, xsSnippetCode)}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};
