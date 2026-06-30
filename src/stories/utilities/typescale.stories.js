/**
 * Typescale.stories.js
 * 
 * Semantic typography tokens and utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Typescale',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Typography utilities provide a comprehensive set of font sizes, weights, and line heights for consistent text styling.',
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

    return `import React from 'react';\n\nconst TypescaleDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default TypescaleDemo;`;
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false) => {
    const displayCode = formatCode(htmlContent);

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
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m ux4g-w-100">
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

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Typescale Showcase', 'Detailed reference of typography utilities covering all standard font sizes and weights in the design system.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Overview</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">
                        The typographic scale is structured into distinct groups: Display, Heading, Title, Body, and Label. This modular approach allows you to establish a strong visual hierarchy while maintaining perfect consistency across your interfaces.
                    </p>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy utility classes for standard typography elements.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Display -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Display Styles</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${createTableRow('ux4g-display-l-default', 'Display Large Default')}
                                            ${createTableRow('ux4g-display-m-default', 'Display Medium Default')}
                                            ${createTableRow('ux4g-display-s-default', 'Display Small Default')}
                                            ${createTableRow('ux4g-display-xs-default', 'Display Extra Small Default')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Heading -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Heading Styles</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${createTableRow('ux4g-heading-2xl-default', 'Heading 2XL Default')}
                                            ${createTableRow('ux4g-heading-xl-default', 'Heading XL Default')}
                                            ${createTableRow('ux4g-heading-l-default', 'Heading L Default')}
                                            ${createTableRow('ux4g-heading-m-default', 'Heading M Default')}
                                            ${createTableRow('ux4g-heading-s-default', 'Heading S Default')}
                                            ${createTableRow('ux4g-heading-xs-default', 'Heading XS Default')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        
                        <!-- Body -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Body Styles</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${createTableRow('ux4g-body-l-default', 'Body Large Default')}
                                            ${createTableRow('ux4g-body-m-default', 'Body Medium Default')}
                                            ${createTableRow('ux4g-body-s-default', 'Body Small Default')}
                                            ${createTableRow('ux4g-body-xs-default', 'Body Extra Small Default')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Label / Strong Variants -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Label Styles</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${createTableRow('ux4g-label-xl-default', 'Label Extra Large Default')}
                                            ${createTableRow('ux4g-label-l-default', 'Label Large Default')}
                                            ${createTableRow('ux4g-label-m-default', 'Label Medium Default')}
                                            ${createTableRow('ux4g-label-s-default', 'Label Small Default')}
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

export const TypescaleShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Typescale Showcase', 'A visual demonstration of our Display, Heading, Title, Body, and Label scale tokens.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                <!-- 1. Display Styles -->
                ${renderDemoCodeBlock('display-styles', '1. Display Styles', 'Reserved for the largest text on the screen, typically used for hero sections.', `
                    <div class="ux4g-display-l-default">Display Large Default</div>
                    <div class="ux4g-display-l-strong">Display Large Strong</div>
                    <div class="ux4g-display-m-default">Display Medium Default</div>
                    <div class="ux4g-display-m-strong">Display Medium Strong</div>
                    <div class="ux4g-display-s-default">Display Small Default</div>
                    <div class="ux4g-display-s-strong">Display Small Strong</div>
                    <div class="ux4g-display-xs-default">Display Extra Small Default</div>
                    <div class="ux4g-display-xs-strong">Display Extra Small Strong</div>
                `)}

                <!-- 2. Heading Styles -->
                ${renderDemoCodeBlock('heading-styles', '2. Heading Styles', 'Used for page headers, modal titles, and card headers.', `
                    <div class="ux4g-heading-2xl-default">Heading 2XL Default</div>
                    <div class="ux4g-heading-2xl-strong">Heading 2XL Strong</div>
                    <div class="ux4g-heading-xl-default">Heading XL Default</div>
                    <div class="ux4g-heading-xl-strong">Heading XL Strong</div>
                    <div class="ux4g-heading-l-default">Heading L Default</div>
                    <div class="ux4g-heading-l-strong">Heading L Strong</div>
                    <div class="ux4g-heading-m-default">Heading M Default</div>
                    <div class="ux4g-heading-m-strong">Heading M Strong</div>
                    <div class="ux4g-heading-s-default">Heading S Default</div>
                    <div class="ux4g-heading-s-strong">Heading S Strong</div>
                    <div class="ux4g-heading-xs-default">Heading XS Default</div>
                    <div class="ux4g-heading-xs-strong">Heading XS Strong</div>
                    <div class="ux4g-heading-2xs-default">Heading 2XS Default</div>
                    <div class="ux4g-heading-2xs-strong">Heading 2XS Strong</div>
                `)}

                <!-- 3. Title Styles -->
                ${renderDemoCodeBlock('title-styles', '3. Title Styles', 'Used for smaller titles and section subdivisions.', `
                    <div class="ux4g-title-l-default">Title Large Default</div>
                    <div class="ux4g-title-l-strong">Title Large Strong</div>
                    <div class="ux4g-title-m-default">Title Medium Default</div>
                    <div class="ux4g-title-m-strong">Title Medium Strong</div>
                    <div class="ux4g-title-s-default">Title Small Default</div>
                    <div class="ux4g-title-s-strong">Title Small Strong</div>
                `)}

                <!-- 4. Body Styles -->
                ${renderDemoCodeBlock('body-styles', '4. Body Styles', 'Used for all main paragraph and descriptive text.', `
                    <div class="ux4g-body-l-default">Body Large Default</div>
                    <div class="ux4g-body-l-strong">Body Large Strong</div>
                    <div class="ux4g-body-m-default">Body Medium Default</div>
                    <div class="ux4g-body-m-strong">Body Medium Strong</div>
                    <div class="ux4g-body-s-default">Body Small Default</div>
                    <div class="ux4g-body-s-strong">Body Small Strong</div>
                    <div class="ux4g-body-xs-default">Body Extra Small Default</div>
                    <div class="ux4g-body-xs-strong">Body Extra Small Strong</div>
                `)}

                <!-- 5. Label Styles -->
                ${renderDemoCodeBlock('label-styles', '5. Label Styles', 'Used for form labels, captions, and fine print.', `
                    <div class="ux4g-label-xl-default">Label Extra Large Default</div>
                    <div class="ux4g-label-xl-strong">Label Extra Large Strong</div>
                    <div class="ux4g-label-l-default">Label Large Default</div>
                    <div class="ux4g-label-l-strong">Label Large Strong</div>
                    <div class="ux4g-label-m-default">Label Medium Default</div>
                    <div class="ux4g-label-m-strong">Label Medium Strong</div>
                    <div class="ux4g-label-s-default">Label Small Default</div>
                    <div class="ux4g-label-s-strong">Label Small Strong</div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
