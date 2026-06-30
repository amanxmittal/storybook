/**
 * overflow.stories.js
 * 
 * Overflow utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Overflow',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling how content is handled when it exceeds its container\'s boundaries.',
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

    return `import React from 'react';\n\nconst OverflowDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default OverflowDemo;`;
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null, isInverse = false, showTabs = true) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl" id="section-${id}">
            <div class="ux4g-mb-l">
                 <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-primary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    ${htmlContent}
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

const globalClasses = ['ux4g-o-auto', 'ux4g-o-hidden', 'ux4g-o-visible', 'ux4g-o-scroll'];
const overflowXClasses = ['ux4g-o-x-auto', 'ux4g-o-x-hidden', 'ux4g-o-x-visible', 'ux4g-o-x-scroll'];
const overflowYClasses = ['ux4g-o-y-auto', 'ux4g-o-y-hidden', 'ux4g-o-y-visible', 'ux4g-o-y-scroll'];

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
            ${getHeroHeader('Overflow Utilities Reference', 'A complete reference of all overflow utility classes for controlling container clipping and scrolling.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div id="class-reference">
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                        </div>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-xl ux4g-mb-xl">
                            
                            <!-- Global Overflow -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Global Overflow</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${globalClasses.map(cls => createTableRow(cls, cls.replace('ux4g-o-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Overflow X -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Overflow X</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${overflowXClasses.map(cls => createTableRow(cls, cls.replace('ux4g-o-x-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Overflow Y -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Overflow Y</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${overflowYClasses.map(cls => createTableRow(cls, cls.replace('ux4g-o-y-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const OverflowShowcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Overflow Showcase', 'A visual demonstration of overflow utility classes for global, horizontal, and vertical control.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <!-- 1.1 Overflow Auto -->
                ${renderDemoCodeBlock('overflow-auto', 'Overflow Auto', 'Scrollbars appear automatically when content exceeds dimensions.', `
                    <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m ux4g-max-w-400">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-auto ux4g-hpx-100">
                            <div class="ux4g-p-s ux4g-wpx-200 ux4g-hpx-150 ux4g-fs-12 ux4g-text-neutral-secondary">
                                This container has <code>ux4g-o-auto</code>. Scrollbars will appear only if this content exceeds the bounding box. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non sapien vitae erat.
                            </div>
                        </div>
                    </div>
                `, null, false, false)}

                <!-- 1.2 Overflow Hidden -->
                ${renderDemoCodeBlock('overflow-hidden', 'Overflow Hidden', 'Extra content is clipped and hidden from view.', `
                    <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m ux4g-max-w-400">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-hidden ux4g-hpx-100">
                            <div class="ux4g-p-s ux4g-wpx-200 ux4g-hpx-150 ux4g-fs-12 ux4g-text-neutral-secondary">
                                This container has <code>ux4g-o-hidden</code>. Any content that exceeds the 100px height is clipped and not accessible via scroll.
                            </div>
                        </div>
                    </div>
                `, null, false, false)}

                <!-- 1.3 Overflow Visible -->
                ${renderDemoCodeBlock('overflow-visible', 'Overflow Visible', 'Content flows outside container boundaries without clipping.', `
                    <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m ux4g-max-w-400 ux4g-mb-2xl">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-visible ux4g-hpx-100">
                            <div class="ux4g-p-s ux4g-wpx-200 ux4g-hpx-150 ux4g-fs-12 ux4g-bg-primary-subtle ux4g-text-neutral-secondary">
                                This container has <code>ux4g-o-visible</code>. Notice how the blue area spills out of the gray bounding box.
                            </div>
                        </div>
                    </div>
                `, null, false, false)}

                <!-- 1.4 Overflow Scroll -->
                ${renderDemoCodeBlock('overflow-scroll', 'Overflow Scroll', 'Scrollbars are always visible, regardless of content size.', `
                    <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m ux4g-max-w-400">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-scroll ux4g-hpx-100">
                            <div class="ux4g-p-s ux4g-wpx-200 ux4g-hpx-150 ux4g-fs-12 ux4g-text-neutral-secondary">
                                This container has <code>ux4g-o-scroll</code>. Scrollbars stay visible even if they aren't strictly needed for the content.
                            </div>
                        </div>
                    </div>
                `, null, false, false)}

                <!-- 2. Horizontal Overflow -->
                ${renderDemoCodeBlock('overflow-x', 'Horizontal Overflow', 'Control horizontal clipping and scrolling behavior.', `
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
                         <!-- Auto -->
                         <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-s">Horizontal Overflow Auto</div>
                            <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-x-auto ux4g-hpx-100">
                                <div class="ux4g-p-s ux4g-wpx-300 ux4g-fs-12 ux4g-text-neutral-secondary ux4g-text-nowrap">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                            </div>
                        </div>
                        <!-- Hidden -->
                        <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-s">Horizontal Overflow Hidden</div>
                            <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-x-hidden ux4g-hpx-100">
                                <div class="ux4g-p-s ux4g-wpx-300 ux4g-fs-12 ux4g-text-neutral-secondary ux4g-text-nowrap">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                            </div>
                        </div>
                        <!-- Scroll -->
                        <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-s">Horizontal Overflow Scroll</div>
                            <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-x-scroll ux4g-hpx-100">
                                <div class="ux4g-p-s ux4g-wpx-300 ux4g-fs-12 ux4g-text-neutral-secondary ux4g-text-nowrap">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </div>
                            </div>
                        </div>
                    </div>
                `, `
                    <div class="ux4g-o-x-auto">...</div>
                    <div class="ux4g-o-x-hidden">...</div>
                    <div class="ux4g-o-x-scroll">...</div>
                `, false, false)}

                <!-- 3. Vertical Overflow -->
                ${renderDemoCodeBlock('overflow-y', 'Vertical Overflow', 'Control vertical clipping and scrolling behavior.', `
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
                         <!-- Auto -->
                         <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-s">Vertical Overflow Auto</div>
                            <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-y-auto ux4g-hpx-100">
                                <div class="ux4g-p-s ux4g-fs-12 ux4g-text-neutral-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                        <!-- Hidden -->
                        <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-s">Vertical Overflow Hidden</div>
                            <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-y-hidden ux4g-hpx-100">
                                <div class="ux4g-p-s ux4g-fs-12 ux4g-text-neutral-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                        <!-- Scroll -->
                        <div class="ux4g-border ux4g-radius-m ux4g-bg-neutral ux4g-p-m">
                            <div class="ux4g-fs-14 ux4g-fw-semibold ux4g-mb-s">Vertical Overflow Scroll</div>
                            <div class="ux4g-bg-neutral-subtle ux4g-radius-s ux4g-border ux4g-border-neutral-subtle ux4g-o-y-scroll ux4g-hpx-100">
                                <div class="ux4g-p-s ux4g-fs-12 ux4g-text-neutral-secondary">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </div>
                            </div>
                        </div>
                    </div>
                `, `
                    <div class="ux4g-o-y-auto">...</div>
                    <div class="ux4g-o-y-hidden">...</div>
                    <div class="ux4g-o-y-scroll">...</div>
                `, false, false)}

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
