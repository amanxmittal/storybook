/**
 * gap.stories.js
 * 
 * Gap (Section, Stack, and Inline) utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Gap',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling the spacing between grid and flex items.',
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

    return `import React from 'react';\n\nconst GapDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default GapDemo;`;
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null, isInverse = false, showTabs = true) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl" id="section-${id}">
            <div class="ux4g-mb-l">
                 <h2 class="ux4g-fs-24 ux4g-fw-bold ux4g-mb-xs">${title}</h2>
                ${subtitle ? `<p class="ux4g-text-neutral-secondary ux4g-mb-l">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-mb-l">
                ${htmlContent}
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

const gapClasses = ['ux4g-gap-none', 'ux4g-gap-xs', 'ux4g-gap-s', 'ux4g-gap-m', 'ux4g-gap-l', 'ux4g-gap-xl', 'ux4g-gap-2xl'];
const stackGapClasses = ['ux4g-stack-gap-none', 'ux4g-stack-gap-2xs', 'ux4g-stack-gap-xs', 'ux4g-stack-gap-s', 'ux4g-stack-gap-m', 'ux4g-stack-gap-l'];
const inlineGapClasses = ['ux4g-inline-gap-none', 'ux4g-inline-gap-2xs', 'ux4g-inline-gap-xs', 'ux4g-inline-gap-s', 'ux4g-inline-gap-m', 'ux4g-inline-gap-l'];

const responsiveGapClasses = [
    'ux4g-gap-sm-none', 'ux4g-gap-sm-s', 'ux4g-gap-sm-m', 'ux4g-gap-sm-l', 'ux4g-gap-sm-xl', 'ux4g-gap-sm-2xl',
    'ux4g-gap-md-none', 'ux4g-gap-md-s', 'ux4g-gap-md-m', 'ux4g-gap-md-l', 'ux4g-gap-md-xl',
    'ux4g-gap-lg-none', 'ux4g-gap-lg-s', 'ux4g-gap-lg-m', 'ux4g-gap-lg-l', 'ux4g-gap-lg-xl',
    'ux4g-gap-xl-none', 'ux4g-gap-xl-m', 'ux4g-gap-xl-l', 'ux4g-gap-xl-xl', 'ux4g-gap-xl-2xl'
];

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
            ${getHeroHeader('Gap Utilities Reference', 'A complete reference of all gap (section, stack, and inline) utility classes.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div id="class-reference">
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                        </div>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                            
                            <!-- Section Gap -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Section Gap (Layout)</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${gapClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Responsive Section Gap -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Responsive Section Gap</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${responsiveGapClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Stack Gap -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Stack Gap (Vertical)</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${stackGapClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Inline Gap -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Inline Gap (Horizontal)</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${inlineGapClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const GapShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Gap Showcase', 'A visual demonstration of gap, stack-gap, and inline-gap utility classes.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <div class="ux4g-p-xl ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-d-flex ux4g-flex-col ux4g-jc-start ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    <!-- 1.1 Section Gap -->
                    ${renderDemoCodeBlock('section-gap', 'Section Gap (Layout Spacing)', 'Sets both row and column gap based on section layout tokens.', `
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xl">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Gap None</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-none">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Gap XS</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xs">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Gap S</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-s">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Gap M</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-m">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Gap L</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-l">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Gap XL</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xl">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ux4g-border ux4g-border-primary ux4g-radius-s ux4g-text-center ux4g-text-white">2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `, `
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-none">...</div>
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xs">...</div>
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-s">...</div>
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-m">...</div>
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-l">...</div>
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xl">...</div>
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-2xl">...</div>
                    `)}

                    <!-- 1.2 Stack Gap -->
                    ${renderDemoCodeBlock('stack-gap', 'Stack Gap', 'row-gap sets the vertical space between items.', `
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xl">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Stack Gap None</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-none ux4g-ai-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Stack Gap XS</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs ux4g-ai-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Stack Gap M</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m ux4g-ai-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Stack Gap L</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l ux4g-ai-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `, `
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-none">...</div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">...</div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">...</div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">...</div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">...</div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l">...</div>
                    `)}

                    <!-- 1.3 Inline Gap -->
                    ${renderDemoCodeBlock('inline-gap', ' Inline Gap', 'column-gap sets the horizontal space between items.', `
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-xl">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Inline Gap None</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-inline-gap-none ux4g-jc-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Inline Gap XS</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-inline-gap-xs ux4g-jc-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Inline Gap M</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-inline-gap-m ux4g-jc-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                                <div class="ux4g-fs-14 ux4g-fw-bold">Inline Gap L</div>
                                <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral-elevated ux4g-p-m">
                                    <div class="ux4g-d-flex ux4g-inline-gap-l ux4g-jc-center">
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 1</div>
                                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Item 2</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `, `
                        <div class="ux4g-d-flex ux4g-inline-gap-none">...</div>
                        <div class="ux4g-d-flex ux4g-inline-gap-2xs">...</div>
                        <div class="ux4g-d-flex ux4g-inline-gap-xs">...</div>
                        <div class="ux4g-d-flex ux4g-inline-gap-s">...</div>
                        <div class="ux4g-d-flex ux4g-inline-gap-m">...</div>
                        <div class="ux4g-d-flex ux4g-inline-gap-l">...</div>
                    `)}

                    <!-- Responsive Gap Example -->
                    ${renderDemoCodeBlock('responsive-gap', 'Responsive Gaps', 'Adjust gaps based on viewports (Click a breakpoint to see it change).', `
                        <div class="ux4g-p-m ux4g-bg-neutral-subtle ux4g-radius-m">
                            <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-none ux4g-gap-sm-s ux4g-gap-md-m ux4g-gap-lg-l ux4g-gap-xl-xl">
                                <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 1</div>
                                <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 2</div>
                                <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 3</div>
                                <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 4</div>
                            </div>
                        </div>
                    `, `
                        <!-- Responsive Section Gap -->
                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-none ux4g-gap-sm-s ux4g-gap-md-m ux4g-gap-lg-l ux4g-gap-xl-xl">
                            <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 1</div>
                            <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 2</div>
                            <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 3</div>
                            <div class="ux4g-p-m ux4g-bg-primary-strong  ux4g-text-center">Item 4</div>
                        </div>
                    `)}
                </div>

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
