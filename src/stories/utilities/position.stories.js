/**
 * Position.stories.js
 * 
 * Position utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Position',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for configuring the positioning behavior of elements, particularly useful for headers, footers, and sticky components.',
            },
            story: {
                inline: false,
            },
        },
    },
};

// --- Helper Functions ---

const getHeroHeader = (title, description) => `
    <section class="ux4g-bg-primary-strong ux4g-py-2xl">
        <div class="ux4g-container">
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

    return `import React from 'react';\n\nconst PositionDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default PositionDemo;`;
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
                <div class="${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <!-- Note: Demo bounding box applied for visualization -->
                    <div class="ux4g-p-xl">
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
                
                <div class="ux4g-bg-neutral-stronger  ux4g-o-hidden">
                    <div class="ux4g-card-header ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-py-s ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">Source Code</span>
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-code" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18 ux4g-mr-xs">content_copy</span>
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
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
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

const positionClasses = ['ux4g-static', 'ux4g-relative', 'ux4g-absolute', 'ux4g-fixed', 'ux4g-sticky'];
const topClasses = ['ux4g-top-0', 'ux4g-top-50', 'ux4g-top-100'];
const bottomClasses = ['ux4g-bottom-0', 'ux4g-bottom-50', 'ux4g-bottom-100'];
const startClasses = ['ux4g-start-0', 'ux4g-start-50', 'ux4g-start-100'];
const endClasses = ['ux4g-end-0', 'ux4g-end-50', 'ux4g-end-100'];
const translateClasses = ['ux4g-translate-middle', 'ux4g-translate-middle-x', 'ux4g-translate-middle-y'];
const helperClasses = ['ux4g-fixed-top', 'ux4g-fixed-bottom', 'ux4g-sticky-top', 'ux4g-sticky-bottom'];

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Position Utilities Reference', 'A complete reference of all position utility classes, including every responsive variant.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        
                        <!-- Position Values -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Position Values</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(positionClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Top / Bottom -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Top / Bottom Placement</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows([...topClasses, ...bottomClasses])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Start / End -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Start / End Placement</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows([...startClasses, ...endClasses])}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Translate / Centers -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Centering (Translate)</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${generateResponsiveRows(translateClasses)}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Fixed/Sticky Helpers -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                             <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Fixed & Sticky Helpers</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${helperClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- Offsets & Overlays -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                             <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ">Offsets & Overlays</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${['ux4g-bottom-xs', 'ux4g-bottom-sm', 'ux4g-end-overflow-xs', 'ux4g-end-overflow-sm', 'ux4g-end-overflow-md'].map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const PositionShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Position Showcase', 'A visual demonstration of position, placement, and centering utility classes.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- Fixed Positioning -->
                ${renderDemoCodeBlock('fixed-positioning', 'Fixed Positioning', 'Locks elements to the viewport, regardless of scrolling.', `
                    <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                        <!-- Fixed Top Demo -->
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-l">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-m ux4g-text-center">Fixed Top</div>
                            <div class="ux4g-relative ux4g-w-100 ux4g-hpx-150 ux4g-bg-neutral-subtle  ux4g-o-hidden ux4g-border ux4g-border-neutral-subtle">
                                <div class="ux4g-absolute ux4g-top-0 ux4g-start-0 ux4g-w-100 ux4g-bg-primary-strong ux4g-p-s ux4g-text-center ux4g-fs-12 ux4g-fw-bold ux4g-z-1">
                                    Fixed-Top
                                </div>
                                <div class="ux4g-p-m ux4g-pt-2xl ux4g-fs-12 ux4g-text-neutral-primary">
                                    Simulated: Content flows behind the fixed element.
                                </div>
                            </div>
                        </div>

                        <!-- Fixed Bottom Demo -->
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-l">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-m ux4g-text-center">Fixed Bottom</div>
                            <div class="ux4g-relative ux4g-w-100 ux4g-hpx-150 ux4g-bg-neutral-subtle  ux4g-o-hidden ux4g-border ux4g-border-neutral-subtle">
                                <div class="ux4g-p-m ux4g-fs-12 ux4g-text-neutral-primary">
                                    Simulated: Lower content area for persistent actions.
                                </div>
                                <div class="ux4g-absolute ux4g-bottom-0 ux4g-start-0 ux4g-w-100 ux4g-bg-primary-strong ux4g-p-s ux4g-text-center ux4g-fs-12 ux4g-fw-bold ux4g-z-1">
                                    Fixed-Bottom
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Sticky Positioning -->
                ${renderDemoCodeBlock('sticky-positioning', 'Sticky Positioning', 'Keeps elements visible within their container during scrolling.', `
                    <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                        <!-- Sticky Top -->
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-l">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-m ux4g-text-center">Sticky Top</div>
                            <div class="ux4g-bg-neutral-elevated  ux4g-border ux4g-border-neutral-subtle ux4g-o-auto ux4g-hpx-150">
                                <div class="ux4g-sticky-top ux4g-bg-primary-strong ux4g-p-s ux4g-text-center ux4g-fs-12 ux4g-fw-bold">
                                    Sticky-Top
                                </div>
                                <div class="ux4g-p-m ux4g-fs-12 ux4g-text-neutral-primary ux4g-hpx-300">
                                    Scroll down to see this element stick to the top edge of this container.
                                    <div class="ux4g-hpx-80 ux4g-bg-neutral-subtle ux4g-mt-s "></div>
                                    <div class="ux4g-hpx-80 ux4g-bg-neutral-subtle ux4g-mt-s "></div>
                                </div>
                            </div>
                        </div>

                        <!-- Sticky Bottom -->
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-l">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-m ux4g-text-center">Sticky Bottom</div>
                            <div class="ux4g-bg-neutral-elevated  ux4g-border ux4g-border-neutral-subtle ux4g-o-auto ux4g-hpx-150">
                                <div class="ux4g-p-m ux4g-fs-12 ux4g-text-neutral-primary">
                                    This footer stays visible as long as its parent is in view.
                                    <div class="ux4g-hpx-300"></div>
                                </div>
                                <div class="ux4g-sticky-bottom ux4g-bg-primary-strong ux4g-p-s ux4g-text-center ux4g-fs-12 ux4g-fw-bold">
                                    Sticky-Bottom
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, false)}

                <!-- Absolute Placement -->
                ${renderDemoCodeBlock('absolute-placement', 'Absolute Placement', 'Positioning elements at specific corners of a relative container.', `
                    <div class="ux4g-relative ux4g-bg-neutral-subtle ux4g-radius-l ux4g-border ux4g-border-neutral-emphasis" style="height: 300px">
                        <!-- Top Start -->
                        <div class="ux4g-absolute ux4g-top-0 ux4g-start-0 ux4g-bg-primary-strong ux4g-p-xs">Top-0 Start-0</div>
                        <!-- Top Center -->
                        <div class="ux4g-absolute ux4g-top-0 ux4g-start-50 ux4g-translate-middle-x ux4g-bg-primary-strong ux4g-p-xs">Top-0 Start-50</div>
                        <!-- Top End -->
                        <div class="ux4g-absolute ux4g-top-0 ux4g-end-0 ux4g-bg-primary-strong ux4g-p-xs">Top-0 End-0</div>
                        
                        <!-- Middle Start -->
                        <div class="ux4g-absolute ux4g-top-50 ux4g-translate-middle-y ux4g-start-0 ux4g-bg-primary-strong ux4g-p-xs">Top-50 Start-0</div>
                        <!-- Center Center -->
                        <div class="ux4g-absolute ux4g-top-50 ux4g-start-50 ux4g-translate-middle ux4g-bg-error-strong ux4g-p-s  ux4g-fs-12 ux4g-fw-bold ux4g-shadow-l1">Center</div>
                        <!-- Middle End -->
                        <div class="ux4g-absolute ux4g-top-50 ux4g-translate-middle-y ux4g-end-0 ux4g-bg-primary-strong ux4g-p-xs">Top-50 End-0</div>

                        <!-- Bottom Start -->
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-start-0 ux4g-bg-primary-strong ux4g-p-xs">Bottom-0 Start-0</div>
                        <!-- Bottom Center -->
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-start-50 ux4g-translate-middle-x ux4g-bg-primary-strong ux4g-p-xs">Bottom-0 Start-50</div>
                        <!-- Bottom End -->
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-end-0 ux4g-bg-primary-strong ux4g-p-xs">Bottom-0 End-0</div>
                    </div>
                `, false, false)}

                <!-- Position Corners -->
                ${renderDemoCodeBlock('position-corners', 'Position / Corners', 'Demonstrates corner placement using absolute positioning within a relative container.', `
                    <div class="ux4g-relative ux4g-border  ux4g-bg-neutral-subtle" style="height: 180px">
                        <div class="ux4g-absolute ux4g-top-0 ux4g-start-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-top-0 ux4g-end-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-start-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-end-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                    </div>
                `, false, false)}

                <!-- Mixed Placement -->
                ${renderDemoCodeBlock('mixed-placement', 'Position / Mixed Placement', 'Advanced placement examples including mid-points and centering transforms.', `
                    <div class="ux4g-relative ux4g-border  ux4g-bg-neutral-subtle" style="min-height: 180px">
                        <div class="ux4g-absolute ux4g-top-0 ux4g-start-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-top-0 ux4g-end-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-top-50 ux4g-start-50 ux4g-translate-middle ux4g-bg-primary-strong " style="width: 36px; height: 36px"></div>
                        <div class="ux4g-absolute ux4g-bottom-50 ux4g-end-50 ux4g-bg-info-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-start-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                        <div class="ux4g-absolute ux4g-bottom-0 ux4g-end-0 ux4g-bg-primary-strong " style="width: 32px; height: 32px"></div>
                    </div>
                `, false, false)}

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
