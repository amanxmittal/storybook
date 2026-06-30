/**
 * object-fit.stories.js
 * 
 * Object Fit and Object Position utility classes for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Utilities/Object Fit',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Utilities for controlling how replaced content (like images) is fitted and positioned inside its container.',
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

    return `import React from 'react';\n\nconst ObjectFitDemo = () => (\n  <>\n${formattedJsx}\n  </>\n);\n\nexport default ObjectFitDemo;`;
};

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null, isInverse = false) => {
    const displayCode = formatCode(customCode || htmlContent);

    return `
        <div class="ux4g-mb-3xl ux4g-w-100 ux4g-o-hidden" id="section-${id}" style="min-width: 0;">
            <div class="ux4g-mb-l">
                 <h2 class="ux4g-fs-24 ux4g-fw-bold ux4g-mb-xs">${title}</h2>
                ${subtitle ? `<p class="ux4g-text-neutral-secondary ux4g-mb-l">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-mb-l ux4g-w-100 ux4g-o-hidden">
                ${htmlContent}
            </div>

            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Hide Code</button>
            </div>

            <div class="code-area ux4g-mt-m ux4g-w-100 ux4g-o-hidden" id="code-${id}" style="display: block;">
                <div class="ux4g-bg-neutral-stronger ux4g-radius-m ux4g-o-hidden ux4g-w-100">
                    <div class="ux4g-card-header ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-py-s ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis ux4g-w-100">
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">Source Code</span>
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm ux4g-text-white copy-code" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">content_copy</span>
                            <span class="ux4g-text-white">Copy</span>
                        </button>
                    </div>
                    <div class="ux4g-card-body ux4g-p-none ux4g-w-100 ux4g-o-auto">
                        <pre class="ux4g-m-none ux4g-p-l ux4g-bg-neutral-stronger ux4g-w-100" style="white-space: pre; overflow-x: auto;"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
                    </div>
                </div>
            </div>
            
            <script>
                (function() {
                    const blockId = "${id}";
                    const displayCode = \`${displayCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    
                    const section = document.getElementById('section-' + blockId);
                    if (!section) return;
                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = document.getElementById('code-' + blockId);
                    const output = document.getElementById('output-' + blockId);
                    const copyBtn = section.querySelector('.copy-code');
                    
                    const highlight = () => {
                        output.textContent = displayCode;
                        output.className = 'code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block';
                        if (window.Prism) window.Prism.highlightElement(output);
                    };

                    toggleBtn.onclick = () => {
                        const isHidden = codeArea.style.display === 'none';
                        codeArea.style.display = isHidden ? 'block' : 'none';
                        toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                        if (isHidden) highlight();
                    };
                    
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

const objectFitClasses = [
    'ux4g-of-cover',
    'ux4g-of-contain',
    'ux4g-of-fill',
    'ux4g-of-none',
    'ux4g-of-scale-down'
];

const responsiveObjectFitClasses = [
    'ux4g-sm-of-cover', 'ux4g-sm-of-contain', 'ux4g-sm-of-fill', 'ux4g-sm-of-none', 'ux4g-sm-of-scale-down',
    'ux4g-md-of-cover', 'ux4g-md-of-contain', 'ux4g-md-of-fill', 'ux4g-md-of-none', 'ux4g-md-of-scale-down',
    'ux4g-lg-of-cover', 'ux4g-lg-of-contain', 'ux4g-lg-of-fill', 'ux4g-lg-of-none', 'ux4g-lg-of-scale-down',
    'ux4g-xl-of-cover', 'ux4g-xl-of-contain', 'ux4g-xl-of-fill', 'ux4g-xl-of-none', 'ux4g-xl-of-scale-down',
    'ux4g-2xl-of-cover', 'ux4g-2xl-of-contain', 'ux4g-2xl-of-fill', 'ux4g-2xl-of-none', 'ux4g-2xl-of-scale-down'
];

const objectPositionClasses = [
    'ux4g-op',
    'ux4g-op-center',
    'ux4g-op-top',
    'ux4g-op-bottom',
    'ux4g-op-left',
    'ux4g-op-right',
    'ux4g-op-top-left',
    'ux4g-op-top-right',
    'ux4g-op-bottom-left',
    'ux4g-op-bottom-right'
];

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100" id="intro-container">
            ${getHeroHeader('Object Fit & Position Utilities', 'A complete reference of all object-fit and object-position utility classes.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div id="class-reference">
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Comprehensive CSS Class Reference</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-primary">Every class from the utility library, categorized for easy access.</p>
                        </div>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                            
                            <!-- Object Fit -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Object Fit</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${objectFitClasses.map(cls => createTableRow(cls, cls.replace('ux4g-of-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Object Position -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Object Position</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${objectPositionClasses.map(cls => createTableRow(cls, cls.replace('ux4g-op-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Responsive Object Fit -->
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-span-2">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ">Responsive Object Fit</h4>
                                </div>
                                <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-grid-cols-lg-3">
                                            ${responsiveObjectFitClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()))).join('')}
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

export const ObjectFit = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Object Fit Showcase', 'Define how an image or video should be resized to fit its container.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <div class="ux4g-p-xl ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                    
                    <!-- Cover -->
                    ${renderDemoCodeBlock('of-cover', 'Object Fit: Cover', 'Fills the container, cropping edges if necessary.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-200 ux4g-w-100">
                            <img alt="of-cover" class="ux4g-of-cover ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-cover" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Contain -->
                    ${renderDemoCodeBlock('of-contain', 'Object Fit: Contain', 'Shows the full image, letterboxed to fit.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-200 ux4g-w-100">
                            <img alt="of-contain" class="ux4g-of-contain ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-contain" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Fill -->
                    ${renderDemoCodeBlock('of-fill', 'Object Fit: Fill', 'Stretches the image to fill the container completely.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-200 ux4g-w-100">
                            <img alt="of-fill" class="ux4g-of-fill ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-fill" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- None -->
                    ${renderDemoCodeBlock('of-none', 'Object Fit: None', 'Maintains the original size of the image, no scaling.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-200 ux4g-w-100">
                            <img alt="of-none" class="ux4g-of-none ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Scale Down -->
                    ${renderDemoCodeBlock('of-scale-down', 'Object Fit: Scale Down', 'Reduces size only if larger than container.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-200 ux4g-w-100">
                            <img alt="of-scale-down" class="ux4g-of-scale-down ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-scale-down" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                </div>

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const ObjectPosition = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Object Position Showcase', 'Define the positioning of the image within its container.')}
            <div class="ux4g-container ux4g-p-l ux4g-py-2xl">
                
                <div class="ux4g-p-xl ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                    
                    <!-- Center -->
                    ${renderDemoCodeBlock('op-center', 'Object Position: Center', 'Aligns the image to the center of its container.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-center" class="ux4g-of-none ux4g-op ux4g-op-center ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-center" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Top -->
                    ${renderDemoCodeBlock('op-top', 'Object Position: Top', 'Aligns the image to the top edge.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-top" class="ux4g-of-none ux4g-op ux4g-op-top ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-top" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Bottom -->
                    ${renderDemoCodeBlock('op-bottom', 'Object Position: Bottom', 'Aligns the image to the bottom edge.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-bottom" class="ux4g-of-none ux4g-op ux4g-op-bottom ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-bottom" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Left -->
                    ${renderDemoCodeBlock('op-left', 'Object Position: Left', 'Aligns the image to the left edge.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-left" class="ux4g-of-none ux4g-op ux4g-op-left ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-left" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Right -->
                    ${renderDemoCodeBlock('op-right', 'Object Position: Right', 'Aligns the image to the right edge.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-right" class="ux4g-of-none ux4g-op ux4g-op-right ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-right" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Top Left -->
                    ${renderDemoCodeBlock('op-top-left', 'Object Position: Top Left', 'Aligns the image to the top-left corner.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-top-left" class="ux4g-of-none ux4g-op ux4g-op-top-left ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-top-left" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                    <!-- Bottom Right -->
                    ${renderDemoCodeBlock('op-bottom-right', 'Object Position: Bottom Right', 'Aligns the image to the bottom-right corner.', `
                        <div class="ux4g-border ux4g-radius-m ux4g-o-hidden ux4g-bg-neutral-subtle ux4g-hpx-150 ux4g-w-100">
                            <img alt="op-bottom-right" class="ux4g-of-none ux4g-op ux4g-op-bottom-right ux4g-w-100 ux4g-h-full" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">
                        </div>
                    `, `<img class="ux4g-of-none ux4g-op ux4g-op-bottom-right" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g_of_demo.png">`)}

                </div>

            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
