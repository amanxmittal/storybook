/**
 * Text.stories.js
 * 
 * Typography utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Text',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Typography utilities provide a comprehensive set of font sizes, weights, transforms, and alignment for consistent text styling.',
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

    return `import React from 'react';\n\nconst TextDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default TextDemo;`;
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

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Text Utilities Reference', 'A comprehensive reference for typography utilities, including font sizes, line heights, weights, transforms, and more.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Font Size -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Font Size</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-fs-60', 'ux4g-fs-52', 'ux4g-fs-40', 'ux4g-fs-36', 'ux4g-fs-32', 'ux4g-fs-28', 'ux4g-fs-24', 'ux4g-fs-20', 'ux4g-fs-18', 'ux4g-fs-16', 'ux4g-fs-14', 'ux4g-fs-12', 'ux4g-fs-11'].map(cls => createTableRow(cls, cls.split('-').pop() + 'px')).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Line Height -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Line Height</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-lh-80', 'ux4g-lh-72', 'ux4g-lh-52', 'ux4g-lh-44', 'ux4g-lh-36', 'ux4g-lh-32', 'ux4g-lh-28', 'ux4g-lh-24', 'ux4g-lh-20', 'ux4g-lh-18', 'ux4g-lh-16', 'ux4g-lh-14'].map(cls => createTableRow(cls, cls.split('-').pop() + 'px')).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Font Weight -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Font Weight</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-fw-regular', 'Regular')}
                                        ${createTableRow('ux4g-fw-medium', 'Medium')}
                                        ${createTableRow('ux4g-fw-semibold', 'Semibold')}
                                        ${createTableRow('ux4g-fw-bold', 'Bold')}
                                        ${createTableRow('ux4g-fw-d-semibold', 'Display Semibold')}
                                        ${createTableRow('ux4g-fw-d-bold', 'Display Bold')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Font Family -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Font Family</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-ff-base', 'Base')}
                                        ${createTableRow('ux4g-ff-display', 'Display')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Text Alignment -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Text Alignment</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-text-start', 'Text Start')}
                                        ${createTableRow('ux4g-text-center', 'Text Center')}
                                        ${createTableRow('ux4g-text-end', 'Text End')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Text Transform -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Text Transform</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-text-lowercase', 'Lowercase')}
                                        ${createTableRow('ux4g-text-uppercase', 'Uppercase')}
                                        ${createTableRow('ux4g-text-capitalize', 'Capitalize')}
                                        ${createTableRow('ux4g-text-none', 'None')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Text Decoration -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Text Decoration</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-text-underline', 'Underline')}
                                        ${createTableRow('ux4g-text-line-through', 'Line Through')}
                                        ${createTableRow('ux4g-text-no-underline', 'No Underline')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Text Wrapping & Break -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Wrapping & Break</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-text-wrap', 'Text Wrap')}
                                        ${createTableRow('ux4g-text-nowrap', 'Text Nowrap')}
                                        ${createTableRow('ux4g-text-break', 'Word Break')}
                                        ${createTableRow('ux4g-text-truncate', 'Truncate')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- List Styles -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">List Styles</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${createTableRow('ux4g-list-none', 'List None')}
                                        ${createTableRow('ux4g-list-disc', 'List Disc')}
                                        ${createTableRow('ux4g-list-decimal', 'List Decimal')}
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

export const TextShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Text Showcase', 'A visual demonstration of typography scale, transforms, weights, and alignment utilities.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- Typography Scale -->
                ${renderDemoCodeBlock('typography-scale', 'Typography Scale', 'Visual scale for headings and body text.', `
                    <div class="ux4g-fs-60 ux4g-lh-80 ux4g-fw-d-bold">Display 60px</div>
                    <div class="ux4g-fs-40 ux4g-lh-52 ux4g-fw-bold">Heading 40px</div>
                    <div class="ux4g-fs-32 ux4g-lh-36 ux4g-fw-semibold">Heading 32px</div>
                    <div class="ux4g-fs-24 ux4g-lh-32 ux4g-fw-medium">Heading 24px</div>
                    <div class="ux4g-fs-16 ux4g-lh-24 ux4g-fw-regular">Body 16px</div>
                `, false, false)}

                <!-- Text Transforms -->
                ${renderDemoCodeBlock('text-transforms', 'Text Transforms', 'Utilities for text case.', `
                    <div class="ux4g-text-lowercase ux4g-fs-24">LOWERCASE TEXT</div>
                    <div class="ux4g-text-uppercase ux4g-fs-24">uppercase text</div>
                    <div class="ux4g-text-capitalize ux4g-fs-24">capitalize text</div>
                `, false, false)}

                <!-- Weights & Families -->
                ${renderDemoCodeBlock('weights-families', 'Weights & Families', 'Control font weights and families.', `
                    <div class="ux4g-ff-base ux4g-fw-regular ux4g-fs-18">Base regular</div>
                    <div class="ux4g-ff-base ux4g-fw-bold ux4g-fs-18">Base bold</div>
                    <div class="ux4g-ff-display ux4g-fw-d-bold ux4g-fs-18">Display bold</div>
                    <div class="ux4g-ff-display ux4g-fw-d-semibold ux4g-fs-18">Display semibold</div>
                `, false, false)}

                <!-- Alignment -->
                ${renderDemoCodeBlock('text-alignment', 'Text Alignment', 'Align text to the start, center, or end.', `
                    <div class="ux4g-text-start ux4g-fs-18">Text Start</div>
                    <div class="ux4g-text-center ux4g-fs-18">Text Center</div>
                    <div class="ux4g-text-end ux4g-fs-18">Text End</div>
                `, false, false)}

                <!-- Decoration -->
                ${renderDemoCodeBlock('text-decoration', 'Text Decoration', 'Utilities for text decoration.', `
                    <div class="ux4g-text-underline ux4g-fs-18">Underline Text</div>
                    <div class="ux4g-text-line-through ux4g-fs-18">Line Through Text</div>
                    <div class="ux4g-text-no-underline ux4g-fs-18">No Underline Text</div>
                `, false, false)}

                <!-- Wrapping & Truncate -->
                ${renderDemoCodeBlock('text-wrapping', 'Wrapping & Truncate', 'Control how text wraps and overflows.', `
                    <div class="ux4g-text-truncate ux4g-wpx-300 ux4g-fs-18">
                        This is a long text that will eventually be truncated with an ellipsis.
                    </div>
                    <div class="ux4g-text-nowrap ux4g-wpx-100 ux4g-fs-18 ux4g-o-hidden">
                        This text will not wrap.
                    </div>
                `, false, false)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

