/**
 * Flex.stories.js
 * 
 * Flexbox utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Flex',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Quickly manage the layout, alignment, and sizing of grid columns, navigation, components, and more with a full suite of responsive flexbox utilities.',
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

    return `import React from 'react';\n\nconst FlexDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default FlexDemo;`;
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, showTabs = true) => {
    const displayCode = formatCode(htmlContent);
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

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Flex Utilities Reference', 'A complete reference of all flexbox utility classes, including every responsive variant.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Flex Direction -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Flex Direction</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-flex-row', 'ux4g-flex-col', 'ux4g-flex-column', 'ux4g-flex-row-reverse', 'ux4g-flex-col-reverse', 'ux4g-flex-column-reverse'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Justify Content -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Justify Content</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-jc-start', 'ux4g-jc-end', 'ux4g-jc-center', 'ux4g-jc-between', 'ux4g-jc-around', 'ux4g-jc-evenly'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Align Items -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Align Items</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-ai-start', 'ux4g-ai-center', 'ux4g-ai-end', 'ux4g-ai-stretch', 'ux4g-ai-baseline'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Align Self -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Align Self</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-as-start', 'ux4g-as-end', 'ux4g-as-center', 'ux4g-as-baseline', 'ux4g-as-stretch'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Align Content -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Align Content</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-ac-start', 'ux4g-ac-end', 'ux4g-ac-center', 'ux4g-ac-between', 'ux4g-ac-around', 'ux4g-ac-stretch'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Justify Items -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Justify Items</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-ji-start', 'ux4g-ji-end', 'ux4g-ji-center', 'ux4g-ji-stretch', 'ux4g-ji-normal', 'ux4g-ji-center-safe', 'ux4g-ji-end-safe'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Justify Self -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Justify Self</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-js-auto', 'ux4g-js-start', 'ux4g-js-end', 'ux4g-js-center', 'ux4g-js-stretch', 'ux4g-js-center-safe', 'ux4g-js-end-safe'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Visual Order -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Visual Order</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-order-first', 'ux4g-order-last', 'ux4g-order-0', 'ux4g-order-1', 'ux4g-order-2', 'ux4g-order-3', 'ux4g-order-4', 'ux4g-order-5'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Wrap, Fill, Grow & Shrink -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Wrap, Fill & Grow</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(['ux4g-wrap', 'ux4g-nowrap', 'ux4g-wrap-reverse', 'ux4g-flex-fill', 'ux4g-grow', 'ux4g-grow-0', 'ux4g-shrink', 'ux4g-shrink-0'])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Flex Shorthands (Non-responsive) -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Flex Shorthands</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-flex-1', 'Flex 1')}
                                        ${createTableRow('ux4g-flex-2', 'Flex 2')}
                                        ${createTableRow('ux4g-flex-3', 'Flex 3')}
                                        ${createTableRow('ux4g-flex-auto', 'Flex Auto')}
                                        ${createTableRow('ux4g-flex-none', 'Flex None')}
                                        ${createTableRow('ux4g-d-flex', 'Display Flex')}
                                        ${createTableRow('ux4g-d-inline-flex', 'Display Inline Flex')}
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

export const FlexShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Flex Showcase', 'A visual demonstration of flex behavior, direction, justification, and alignment utilities.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- Flex Display -->
                ${renderDemoCodeBlock('flex-display', 'Flex Display', 'Standard flex container with gap.', `
                    <div class="ux4g-d-flex ux4g-inline-gap-s ux4g-p-s ux4g-radius-m">
                        <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-radius-s">item 1</div>
                        <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-radius-s">item 2</div>
                        <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-radius-s">item 3</div>
                    </div>
                `, false, false)}

                <!-- Flex Direction -->
                ${renderDemoCodeBlock('flex-direction', 'Flex Direction', 'Control the direction of flex items.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Row -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Row (ux4g-flex-row)</div>
                            <div class="ux4g-d-flex ux4g-flex-row ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 2</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 3</div>
                            </div>
                        </div>
                        <!-- Row Reverse -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Row Reverse (ux4g-flex-row-reverse)</div>
                            <div class="ux4g-d-flex ux4g-flex-row-reverse ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 2</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 3</div>
                            </div>
                        </div>
                        <!-- Column -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Column (ux4g-flex-col)</div>
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 2</div>
                            </div>
                        </div>
                        <!-- Column Reverse -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Column Reverse (ux4g-flex-col-reverse)</div>
                            <div class="ux4g-d-flex ux4g-flex-col-reverse ux4g-stack-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item 2</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Justify Content -->
                ${renderDemoCodeBlock('justify-content', 'Justify Content', 'Align items on the main axis.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Start -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Justify Content Start</div>
                            <div class="ux4g-d-flex ux4g-jc-start  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Justify</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Content</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Start</div>
                            </div>
                        </div>
                        <!-- End -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Justify Content End</div>
                            <div class="ux4g-d-flex ux4g-jc-end  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Justify</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Content</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">End</div>
                            </div>
                        </div>
                        <!-- Center -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Justify Content Center</div>
                            <div class="ux4g-d-flex ux4g-jc-center  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Justify</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Content</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Center</div>
                            </div>
                        </div>
                        <!-- Between -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Justify Content Between</div>
                            <div class="ux4g-d-flex ux4g-jc-between  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Justify</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Content</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Between</div>
                            </div>
                        </div>
                        <!-- Around -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Justify Content Around</div>
                            <div class="ux4g-d-flex ux4g-jc-around  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Justify</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Content</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Around</div>
                            </div>
                        </div>
                        <!-- Evenly -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Justify Content Evenly</div>
                            <div class="ux4g-d-flex ux4g-jc-evenly  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Justify</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Content</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Evenly</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Align Items -->
                ${renderDemoCodeBlock('align-items', 'Align Items', 'Align items on the cross axis.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Start -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Items Start</div>
                            <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-80">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- End -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Items End</div>
                            <div class="ux4g-d-flex ux4g-ai-end ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-80">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- Center -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Items Center</div>
                            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-80">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- Baseline -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Items Baseline</div>
                            <div class="ux4g-d-flex ux4g-ai-baseline ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-80">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-pt-20">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- Stretch -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Items Stretch</div>
                            <div class="ux4g-d-flex ux4g-ai-stretch ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-80">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Align Self -->
                ${renderDemoCodeBlock('align-self', 'Align Self', 'Individual item alignment on the cross axis.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Start -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Self Start</div>
                            <div class="ux4g-d-flex ux4g-ai-stretch ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-100">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-as-start">Align Self Start</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- End -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Self End</div>
                            <div class="ux4g-d-flex ux4g-ai-stretch ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-100">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-as-end">Align Self End</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- Center -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Self Center</div>
                            <div class="ux4g-d-flex ux4g-ai-stretch ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-100">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-as-center">Align Self Center</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- Baseline -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Self Baseline</div>
                            <div class="ux4g-d-flex ux4g-ai-stretch ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-100">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-as-baseline">Align Self Baseline</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                        <!-- Stretch -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Self Stretch</div>
                            <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-min-h-100">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-as-stretch">Align Self Stretch</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">Flex Item</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Flex Wrap -->
                ${renderDemoCodeBlock('flex-wrap', 'Flex Wrap', 'How flex items wrap.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- No Wrap -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">No Wrap</div>
                            <div class="ux4g-d-flex ux4g-nowrap ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m ux4g-o-hidden">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-none ux4g-w-50">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-none ux4g-w-50">item 2</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-none ux4g-w-50">item 3</div>
                            </div>
                        </div>
                        <!-- Wrap -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Wrap</div>
                            <div class="ux4g-d-flex ux4g-wrap ux4g-inline-gap-s ux4g-stack-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-w-50">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-w-50">item 2</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-w-50">item 3</div>
                            </div>
                        </div>
                        <!-- Wrap Reverse -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Wrap Reverse</div>
                            <div class="ux4g-d-flex ux4g-wrap-reverse ux4g-inline-gap-s ux4g-stack-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-w-50">item 1</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-w-50">item 2</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-w-50">item 3</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Responsive Flex -->
                ${renderDemoCodeBlock('responsive-flex', 'Responsive Flex Direction', 'Breakpoint specific behavior.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-md-flex-row ux4g-gap-s  ux4g-p-s ux4g-radius-m">
                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Mobile: Col</div>
                        <div class="ux4g-p-s ux4g-bg-primary-strong ">Desktop: Row</div>
                    </div>
                    <div class="ux4g-text-neutral-primary ux4g-mt-s">Column on mobile, Row on MD+ screens.</div>
                `, false, false)}

                <!-- Flex Sizing & Shorthands -->
                ${renderDemoCodeBlock('flex-sizing', 'Flex Sizing & Shorthands', 'Utilities for sizing flex items.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Flex Fill -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Flex Fill )</div>
                            <div class="ux4g-d-flex ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-fill">filled</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-fill">filled</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-fill">filled</div>
                            </div>
                        </div>
                        <!-- Flex Grow / Shrink -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Grow & Shrink </div>
                            <div class="ux4g-d-flex ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-grow ux4g-shrink">grows to fill</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-grow-0 ux4g-shrink-0">flat</div>
                            </div>
                        </div>
                        <!-- Flex Ratios -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Flex Ratios </div>
                            <div class="ux4g-d-flex ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-2">ratio 2</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-1">ratio 1</div>
                            </div>
                        </div>
                        <!-- Flex Auto/None -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Flex Control </div>
                            <div class="ux4g-d-flex ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-auto">auto size</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-flex-none ux4g-w-100p">none (100px)</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Align Content -->
                ${renderDemoCodeBlock('align-content', 'Align Content', 'Align flex lines together.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Start -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Content Start </div>
                            <div class="ux4g-d-flex ux4g-ac-start ux4g-wrap ux4g-inline-gap-xs ux4g-stack-gap-xs  ux4g-p-s ux4g-radius-m ux4g-min-h-180">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                            </div>
                        </div>
                        <!-- Center -->
                        <div>
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">Align Content Center </div>
                            <div class="ux4g-d-flex ux4g-ac-center ux4g-wrap ux4g-inline-gap-xs ux4g-stack-gap-xs  ux4g-p-xs ux4g-radius-m ux4g-min-h-180">
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong ">item</div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Flex Order -->
                ${renderDemoCodeBlock('flex-order', 'Flex Visual Ordering', 'Control the visual order of items.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                        <!-- Order First/Last -->
                            <div class="ux4g-fs-14 ux4g-fw-bold ux4g-mb-xs">First & Last Order</div>
                            <div class="ux4g-d-flex ux4g-inline-gap-s  ux4g-p-s ux4g-radius-m">
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-order-last">1 (Last)</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-order-2">2 (Middle)</div>
                                <div class="ux4g-p-s ux4g-bg-primary-strong  ux4g-order-first">3 (First)</div>
                            </div>
                    </div>
                `, false, false)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
