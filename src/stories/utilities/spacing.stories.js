/**
 * Spacing.stories.js
 * 
 * Spacing (Padding and Margin) utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Spacing',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the margin and padding of an element.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Utilities</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => {
    let jsx = formatCode(html)
        .replace(/class=/g, 'className=')
        .replace(/for=/g, 'htmlFor=')
        .replace(/onclick=/g, 'onClick=')
        .replace(/tabindex=/g, 'tabIndex=')
        .replace(/style="([^"]*)"/g, (match, p1) => {
            const styleObj = p1.split(';').filter(s => s.trim()).reduce((acc, curr) => {
                const [key, val] = curr.split(':');
                if (key && val) acc[key.trim()] = val.trim();
                return acc;
            }, {});
            const reactStyle = Object.entries(styleObj)
                .map(([k, v]) => `${k.replace(/-([a-z])/g, g => g[1].toUpperCase())}: '${v}'`)
                .join(', ');
            return `style={{ ${reactStyle} }}`;
        });

    jsx = jsx.replace(/<(img|br|hr|input|i)([^>]*?)>/g, (match, p1, p2) => {
        if (p1 === 'i' && !p2.includes('/')) return `<${p1}${p2}>`;
        if (p2.endsWith('/')) return `<${p1}${p2}>`;
        return `<${p1}${p2} />`;
    });
    const formattedJsx = jsx
        .split('\n')
        .map((line) => (line ? "    " + line : line))
        .join('\n');

    return `import React from 'react';\n\nconst SpacingDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default SpacingDemo;`;
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null, isInverse = false, showTabs = true) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-primary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m ux4g-w-100">
                        ${htmlContent}
                    </div>
                </div>
            </div>

            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Hide Code</button>
            </div>

            <div class="code-area ux4g-mt-m" id="code-${id}" style="display: block;">
                ${showTabs ? `
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-m">
                    <ul class="ux4g-tab-list">
                        <li class="ux4g-tab-item is-active tab-trigger" data-lang="html" data-id="${id}">HTML</li>
                        <li class="ux4g-tab-item tab-trigger" data-lang="react" data-id="${id}">React</li>
                        <li class="ux4g-tab-item tab-trigger" data-lang="angular" data-id="${id}">Angular</li>
                    </ul>
                </div>
                ` : ''}
                
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
                    if (!section) return;
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
                    
                    if (tabs) {
                        tabs.forEach(tab => {
                            tab.onclick = () => {
                                tabs.forEach(t => t.classList.remove('is-active'));
                                tab.classList.add('is-active');
                                currentLang = tab.dataset.lang;
                                highlight();
                            };
                        });
                    }
                    
                    if (copyBtn) {
                        copyBtn.onclick = () => {
                            navigator.clipboard.writeText(output.textContent).then(() => {
                                const original = copyBtn.innerHTML;
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
                                setTimeout(() => copyBtn.innerHTML = original, 2000);
                            });
                        };
                    }

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

const createTableRow = (className, label) => `
    <tr>
        <td class="ux4g-p-l">
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                <div class="ux4g-d-flex ux4g-flex-col">
                    <span class="ux4g-label-s-strong">${label}</span>
                    <code class="ux4g-text-primary ux4g-fs-12">${className}</code>
                </div>
                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${className}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
            </div>
        </td>
    </tr>
`;

const breakpoints = ['sm', 'md', 'lg', 'xl', '2xl'];

const generateResponsiveRows = (baseClasses, exclude = []) => {
    let html = baseClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('');
    breakpoints.forEach(bp => {
        baseClasses.forEach(cls => {
            if (exclude.includes(bp)) return;
            const resCls = cls.replace('ux4g-', `ux4g-${bp}-`);
            html += createTableRow(resCls, resCls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()));
        });
    });
    return html;
};

const paddingClasses = ['ux4g-p-none', 'ux4g-p-2xs', 'ux4g-p-xs', 'ux4g-p-s', 'ux4g-p-m', 'ux4g-p-l', 'ux4g-p-xl', 'ux4g-p-2xl'];
const paddingAxisClasses = [
    'ux4g-px-none', 'ux4g-px-2xs', 'ux4g-px-xs', 'ux4g-px-s', 'ux4g-px-m', 'ux4g-px-l', 'ux4g-px-xl', 'ux4g-px-2xl',
    'ux4g-py-none', 'ux4g-py-2xs', 'ux4g-py-xs', 'ux4g-py-s', 'ux4g-py-m', 'ux4g-py-l', 'ux4g-py-xl', 'ux4g-py-2xl'
];
const paddingDirectionalClasses = [
    'ux4g-pt-none', 'ux4g-pt-2xs', 'ux4g-pt-xs', 'ux4g-pt-s', 'ux4g-pt-m', 'ux4g-pt-l', 'ux4g-pt-xl', 'ux4g-pt-2xl',
    'ux4g-pb-none', 'ux4g-pb-2xs', 'ux4g-pb-xs', 'ux4g-pb-s', 'ux4g-pb-m', 'ux4g-pb-l', 'ux4g-pb-xl', 'ux4g-pb-2xl',
    'ux4g-pl-none', 'ux4g-pl-2xs', 'ux4g-pl-xs', 'ux4g-pl-s', 'ux4g-pl-m', 'ux4g-pl-l', 'ux4g-pl-xl', 'ux4g-pl-2xl',
    'ux4g-pr-none', 'ux4g-pr-2xs', 'ux4g-pr-xs', 'ux4g-pr-s', 'ux4g-pr-m', 'ux4g-pr-l', 'ux4g-pr-xl', 'ux4g-pr-2xl'
];

const marginClasses = ['ux4g-m-none', 'ux4g-m-2xs', 'ux4g-m-xs', 'ux4g-m-s', 'ux4g-m-m', 'ux4g-m-l', 'ux4g-m-xl', 'ux4g-m-2xl', 'ux4g-m-auto'];
const marginAxisClasses = [
    'ux4g-mx-none', 'ux4g-mx-2xs', 'ux4g-mx-xs', 'ux4g-mx-s', 'ux4g-mx-m', 'ux4g-mx-l', 'ux4g-mx-xl', 'ux4g-mx-2xl', 'ux4g-mx-auto',
    'ux4g-my-none', 'ux4g-my-2xs', 'ux4g-my-xs', 'ux4g-my-s', 'ux4g-my-m', 'ux4g-my-l', 'ux4g-my-xl', 'ux4g-my-2xl', 'ux4g-my-auto'
];
const marginDirectionalClasses = [
    'ux4g-mt-none', 'ux4g-mt-2xs', 'ux4g-mt-xs', 'ux4g-mt-s', 'ux4g-mt-m', 'ux4g-mt-l', 'ux4g-mt-xl', 'ux4g-mt-2xl', 'ux4g-mt-auto',
    'ux4g-mb-none', 'ux4g-mb-2xs', 'ux4g-mb-xs', 'ux4g-mb-s', 'ux4g-mb-m', 'ux4g-mb-l', 'ux4g-mb-xl', 'ux4g-mb-2xl', 'ux4g-mb-auto',
    'ux4g-ml-none', 'ux4g-ml-2xs', 'ux4g-ml-xs', 'ux4g-ml-s', 'ux4g-ml-m', 'ux4g-ml-l', 'ux4g-ml-xl', 'ux4g-ml-2xl', 'ux4g-ml-auto',
    'ux4g-mr-none', 'ux4g-mr-2xs', 'ux4g-mr-xs', 'ux4g-mr-s', 'ux4g-mr-m', 'ux4g-mr-l', 'ux4g-mr-xl', 'ux4g-mr-2xl', 'ux4g-mr-auto'
];

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Spacing Utilities Reference', 'A complete reference of all spacing (padding and margin) utility classes, including every responsive variant.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Padding All -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Padding (All Sides)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(paddingClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Margin All -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Margin (All Sides)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(marginClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Padding Axis -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Padding Axis (Horizontal/Vertical)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(paddingAxisClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Margin Axis -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Margin Axis (Horizontal/Vertical)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(marginAxisClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Directional Padding -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-grid-col-md-2">
                             <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Directional Padding (Top, Bottom, Left, Right)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(paddingDirectionalClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Directional Margin -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-grid-col-md-2">
                             <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Directional Margin (Top, Bottom, Left, Right)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(marginDirectionalClasses)}
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
                            btn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-primary">check</span>';
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

export const SpacingShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Spacing Showcase', 'A visual demonstration of padding and margin utility classes.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- Padding All -->
                ${renderDemoCodeBlock('padding-all', 'Padding (All Sides)', 'Applies padding to all four sides of an element.', `
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-stack-gap-m ux4g-flex-wrap">
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-none ux4g-radius-s">p-none</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-2xs ux4g-radius-s">p-2xs</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-xs ux4g-radius-s">p-xs</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-s ux4g-radius-s">p-s</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-m ux4g-radius-s">p-m</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-l ux4g-radius-s">p-l</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-xl ux4g-radius-s">p-xl</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-p-2xl ux4g-radius-s">p-2xl</div>
                    </div>
                `, `
                    <div class="ux4g-p-none">p-none</div>
                    <div class="ux4g-p-2xs">p-2xs</div>
                    <div class="ux4g-p-xs">p-xs</div>
                    <div class="ux4g-p-s">p-s</div>
                    <div class="ux4g-p-m">p-m</div>
                    <div class="ux4g-p-l">p-l</div>
                    <div class="ux4g-p-xl">p-xl</div>
                    <div class="ux4g-p-2xl">p-2xl</div>
                `, false, false)}

                <!-- Margin All -->
                ${renderDemoCodeBlock('margin-all', 'Margin (All Sides)', 'Applies margin to all four sides of an element.', `
                    <div class="ux4g-bg-neutral ux4g-p-m ux4g-radius-m ux4g-d-flex ux4g-flex-wrap ux4g-jc-start ux4g-ai-center">
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-none ux4g-p-xs ux4g-radius-s">m-none</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-2xs ux4g-p-xs ux4g-radius-s">m-2xs</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-xs ux4g-p-xs ux4g-radius-s">m-xs</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-s ux4g-p-xs ux4g-radius-s">m-s</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-m ux4g-p-xs ux4g-radius-s">m-m</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-l ux4g-p-xs ux4g-radius-s">m-l</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-xl ux4g-p-xs ux4g-radius-s">m-xl</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-m-2xl ux4g-p-xs ux4g-radius-s">m-2xl</div>
                    </div>
                `, `
                    <div class="ux4g-m-none">m-none</div>
                    <div class="ux4g-m-2xs">m-2xs</div>
                    <div class="ux4g-m-xs">m-xs</div>
                    <div class="ux4g-m-s">m-s</div>
                    <div class="ux4g-m-m">m-m</div>
                    <div class="ux4g-m-l">m-l</div>
                    <div class="ux4g-m-xl">m-xl</div>
                    <div class="ux4g-m-2xl">m-2xl</div>
                `, false, false)}

                <!-- Horizontal Padding -->
                ${renderDemoCodeBlock('padding-horizontal', 'Horizontal Padding', 'Applies padding to the left and right sides.', `
                    <div class="ux4g-p-m ux4g-bg-neutral-subtle ux4g-radius-l">
                        <div class="ux4g-d-flex ux4g-jc-start ux4g-ai-center ux4g-flex-wrap ux4g-gap-s">
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-none ux4g-radius-s">px-none</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-2xs ux4g-radius-s">px-2xs</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-xs ux4g-radius-s">px-xs</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-s ux4g-radius-s">px-s</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-m ux4g-radius-s">px-m</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-l ux4g-radius-s">px-l</div>
                            <div class="ux4g-bg-primary-soft ux4g-border  ux4g-border-primary ux4g-px-xl ux4g-radius-s">px-xl</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-px-2xl ux4g-radius-s">px-2xl</div>
                        </div>
                    </div>
                `, `
                    <div class="ux4g-px-none">px-none</div>
                    <div class="ux4g-px-2xs">px-2xs</div>
                    <div class="ux4g-px-xs">px-xs</div>
                    <div class="ux4g-px-s">px-s</div>
                    <div class="ux4g-px-m">px-m</div>
                    <div class="ux4g-px-l">px-l</div>
                    <div class="ux4g-px-xl">px-xl</div>
                    <div class="ux4g-px-2xl">px-2xl</div>
                `, false, false)}

                <!-- Vertical Padding -->
                ${renderDemoCodeBlock('padding-vertical', 'Vertical Padding', 'Applies padding to the top and bottom sides.', `
                    <div class="ux4g-p-m ux4g-bg-neutral-subtle ux4g-radius-l">
                        <div class="ux4g-d-flex ux4g-jc-start ux4g-ai-end ux4g-flex-wrap ux4g-gap-s">
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-none ux4g-radius-s">py-none</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-2xs ux4g-radius-s">py-2xs</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-xs ux4g-radius-s">py-xs</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-s ux4g-radius-s">py-s</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-m ux4g-radius-s">py-m</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-l ux4g-radius-s">py-l</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-xl ux4g-radius-s">py-xl</div>
                            <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-py-2xl ux4g-radius-s">py-2xl</div>
                        </div>
                    </div>
                `, `
                    <div class="ux4g-py-none">py-none</div>
                    <div class="ux4g-py-2xs">py-2xs</div>
                    <div class="ux4g-py-xs">py-xs</div>
                    <div class="ux4g-py-s">py-s</div>
                    <div class="ux4g-py-m">py-m</div>
                    <div class="ux4g-py-l">py-l</div>
                    <div class="ux4g-py-xl">py-xl</div>
                    <div class="ux4g-py-2xl">py-2xl</div>
                `, false, false)}

                <!-- Horizontal Margin -->
                ${renderDemoCodeBlock('margin-horizontal', 'Horizontal Margin ', 'Applies margin to the left and right sides.', `
                    <div class="ux4g-bg-neutral ux4g-p-m ux4g-radius-l ux4g-d-flex ux4g-jc-start ux4g-ai-center ux4g-flex-wrap">
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-none ux4g-p-xs ux4g-radius-s">mx-none</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-2xs ux4g-p-xs ux4g-radius-s">mx-2xs</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-xs ux4g-p-xs ux4g-radius-s">mx-xs</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-s ux4g-p-xs ux4g-radius-s">mx-s</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-m ux4g-p-xs ux4g-radius-s">mx-m</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-l ux4g-p-xs ux4g-radius-s">mx-l</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-xl ux4g-p-xs ux4g-radius-s">mx-xl</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-mx-2xl ux4g-p-xs ux4g-radius-s">mx-2xl</div>
                    </div>
                `, `
                    <div class="ux4g-mx-none">mx-none</div>
                    <div class="ux4g-mx-2xs">mx-2xs</div>
                    <div class="ux4g-mx-xs">mx-xs</div>
                    <div class="ux4g-mx-s">mx-s</div>
                    <div class="ux4g-mx-m">mx-m</div>
                    <div class="ux4g-mx-l">mx-l</div>
                    <div class="ux4g-mx-xl">mx-xl</div>
                    <div class="ux4g-mx-2xl">mx-2xl</div>
                `, false, false)}

                <!-- Vertical Margin -->
                ${renderDemoCodeBlock('margin-vertical', 'Vertical Margin ', 'Applies margin to the top and bottom sides.', `
                    <div class="ux4g-bg-neutral ux4g-p-m ux4g-radius-l ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-stack-gap-xs">
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-none ux4g-p-xs ux4g-radius-s">my-none</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-2xs ux4g-p-xs ux4g-radius-s">my-2xs</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-xs ux4g-p-xs ux4g-radius-s">my-xs</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-s ux4g-p-xs ux4g-radius-s">my-s</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-m ux4g-p-xs ux4g-radius-s">my-m</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-l ux4g-p-xs ux4g-radius-s">my-l</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-xl ux4g-p-xs ux4g-radius-s">my-xl</div>
                        <div class="ux4g-bg-primary-soft ux4g-border ux4g-border-primary ux4g-my-2xl ux4g-p-xs ux4g-radius-s">my-2xl</div>
                    </div>
                `, `
                    <div class="ux4g-my-none">my-none</div>
                    <div class="ux4g-my-2xs">my-2xs</div>
                    <div class="ux4g-my-xs">my-xs</div>
                    <div class="ux4g-my-s">my-s</div>
                    <div class="ux4g-my-m">my-m</div>
                    <div class="ux4g-my-l">my-l</div>
                    <div class="ux4g-my-xl">my-xl</div>
                    <div class="ux4g-my-2xl">my-2xl</div>
                `, false, false)}

                <!-- Auto Margins -->
                ${renderDemoCodeBlock('auto-margins', 'Auto Margins (Alignment)', 'Flexbox alignment strategies using auto margins.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- mx-auto -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-mb-xs ux4g-text-neutral-primary">Horizontal Center</div>
                            <div class="ux4g-d-flex ux4g-bg-neutral ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-bg-primary-strong ux4g-text-white ux4g-p-xs ux4g-radius-s ux4g-mx-auto">mx-auto</div>
                            </div>
                        </div>
                        <!-- ml-auto -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-mb-xs ux4g-text-neutral-secondary">Push to End</div>
                            <div class="ux4g-d-flex ux4g-bg-neutral ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-bg-primary-strong ux4g-text-white ux4g-p-xs ux4g-radius-s">Start</div>
                                <div class="ux4g-bg-primary-strong ux4g-text-white ux4g-p-xs ux4g-radius-s ux4g-ml-auto">ml-auto</div>
                            </div>
                        </div>
                        <!-- mr-auto -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-mb-xs ux4g-text-neutral-secondary ux4g-text-end">Push to Start</div>
                            <div class="ux4g-d-flex ux4g-bg-neutral ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-bg-primary-strong ux4g-text-white ux4g-p-xs ux4g-radius-s ux4g-mr-auto">mr-auto</div>
                                <div class="ux4g-bg-primary-strong ux4g-text-white ux4g-p-xs ux4g-radius-s">End</div>
                            </div>
                        </div>
                    </div>
                `, `
                    <!-- Horizontal Centering -->
                    <div class="ux4g-d-flex">
                        <div class="ux4g-mx-auto">mx-auto</div>
                    </div>

                    <!-- Push to End -->
                    <div class="ux4g-d-flex">
                        <div>Start</div>
                        <div class="ux4g-ml-auto">ml-auto</div>
                    </div>

                    <!-- Push to Start -->
                    <div class="ux4g-d-flex">
                        <div class="ux4g-mr-auto">mr-auto</div>
                        <div>End</div>
                    </div>
                `, false, false)}

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
