/**
 * container.stories.js
 * 
 * Container system for the UX4G Design System.
 */

import { formatCode } from '../utils/formatCode.js';

export default {
    title: 'UX4G/Layout/Container',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Containers are the most basic layout element in UX4G and are required when using our default grid system. Containers are used to contain, pad, and (sometimes) center the content within them.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Layout</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, customCode = null) => {
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
                <div class="ux4g-bg-neutral-stronger  ux4g-o-hidden ux4g-w-100">
                    <div class="ux4g-card-header ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-py-s ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis ux4g-w-100">
                        <span class="ux4g-label-s-strong ux4g-text-neutral-subtle">Source Code</span>
                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-code" data-id="${id}">
                            <span class="ux4g-icon-outlined ux4g-fs-18 ux4g-mr-xs">content_copy</span>
                            <span class="">Copy Code</span>
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
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-mr-xs">check</span> <span class="">Copied</span>';
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

const containerClasses = [
    'ux4g-container', 'ux4g-container-fluid', 'ux4g-container-sm',
    'ux4g-container-md', 'ux4g-container-lg', 'ux4g-container-xl', 'ux4g-container-2xl'
];

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100" id="intro-container">
            ${getHeroHeader('Container System', 'Containers are the building blocks of layout in UX4G, providing a way to contain, pad, and center content.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <div class="ux4g-mb-3xl">
                        <h2 class="ux4g-fs-24 ux4g-fw-bold ux4g-mb-m">How it works</h2>
                        <p class="ux4g-text-neutral-secondary ux4g-mb-m ux4g-max-w-800">
                            Containers are the most basic layout element in UX4G and are <strong>required when using our default grid system</strong>. 
                            Choose from a responsive, fixed-width container (meaning its max-width changes at each breakpoint) or fluid-width (meaning it’s always 100% wide).
                        </p>
                    </div>

                    <div id="class-reference" class="ux4g-mb-3xl">
                        <div class="ux4g-mb-l">
                            <h2 class="ux4g-fs-24 ux4g-fw-bold ux4g-mb-xs">Responsive Breakpoints</h2>
                            <p class="ux4g-text-neutral-secondary ux4g-mb-l">Breakdown of container widths across different breakpoints.</p>
                        </div>

                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none ux4g-w-100 ux4g-text-left">
                                    <thead>
                                        <tr class="ux4g-bg-neutral-soft">
                                            <th class="ux4g-p-m ux4g-fw-bold">Class</th>
                                            <th class="ux4g-p-m ux4g-fw-bold">&lt;576px</th>
                                            <th class="ux4g-p-m ux4g-fw-bold">≥576px</th>
                                            <th class="ux4g-p-m ux4g-fw-bold">≥768px</th>
                                            <th class="ux4g-p-m ux4g-fw-bold">≥992px</th>
                                            <th class="ux4g-p-m ux4g-fw-bold">≥1200px</th>
                                            <th class="ux4g-p-m ux4g-fw-bold">≥1400px</th>
                                        </tr>
                                    </thead>
                                    <tbody class="ux4g-text-neutral-secondary">
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">540px</td>
                                            <td class="ux4g-p-m">720px</td>
                                            <td class="ux4g-p-m">960px</td>
                                            <td class="ux4g-p-m">1140px</td>
                                            <td class="ux4g-p-m">1320px</td>
                                        </tr>
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container-sm</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">540px</td>
                                            <td class="ux4g-p-m">720px</td>
                                            <td class="ux4g-p-m">960px</td>
                                            <td class="ux4g-p-m">1140px</td>
                                            <td class="ux4g-p-m">1320px</td>
                                        </tr>
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container-md</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">720px</td>
                                            <td class="ux4g-p-m">960px</td>
                                            <td class="ux4g-p-m">1140px</td>
                                            <td class="ux4g-p-m">1320px</td>
                                        </tr>
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container-lg</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">960px</td>
                                            <td class="ux4g-p-m">1140px</td>
                                            <td class="ux4g-p-m">1320px</td>
                                        </tr>
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container-xl</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">1140px</td>
                                            <td class="ux4g-p-m">1320px</td>
                                        </tr>
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container-2xl</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">1320px</td>
                                        </tr>
                                        <tr>
                                            <td class="ux4g-p-m ux4g-fw-bold ux4g-text-primary">.ux4g-container-fluid</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                            <td class="ux4g-p-m">100%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <!-- All Container Classes -->
                    <div>
                        <div class="ux4g-my-l">
                            <h2 class="ux4g-fs-24 ux4g-fw-bold ux4g-mb-xs">Comprehensive Class Reference</h2>
                            <p class="ux4g-text-neutral-secondary ux4g-mb-l">All container-related utility classes.</p>
                        </div>

                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong">Container Classes</h4>
                            </div>
                            <div class="ux4g-p-none ux4g-hpx-400 ux4g-o-auto">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none ux4g-w-100">
                                    <tbody class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2">
                                        ${containerClasses.map(cls => createTableRow(cls, cls.replace('ux4g-', '').replace('-', ' ').toUpperCase())).join('')}
                                    </tbody>
                                </table>
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

export const Showcase = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Container Showcase', 'Practical examples of container variants and centering layouts.')}
            <div class="ux4g-p-m">
                
                <div class="ux4g-p-l ux4g-radius-l ux4g-bg-neutral-elevated ux4g-shadow-l1 ux4g-border ux4g-border-neutral-subtle ux4g-mb-2xl">
                    
                    <!-- 1. Container Variants -->
                    ${renderDemoCodeBlock('variants', '1. Container Variants', 'UX4G provides different types of containers: fixed width and fluid width.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                            <!-- Fixed Container -->
                            <div class="ux4g-container ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">
                                <span >Default Container</span>
                            </div>
                            
                            <!-- Fluid Container -->
                            <div class="ux4g-container-fluid ux4g-bg-primary-soft ux4g-p-m ux4g-text-center">
                                <span >Fluid Container</span>
                            </div>
                        </div>
                    `)}

                    <!-- 2. Responsive Containers -->
                    ${renderDemoCodeBlock('responsive', '2. Responsive Containers', 'Specify a class that is 100% wide until a specified breakpoint is reached.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
                            <div class="ux4g-container-sm ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center">Container sm</div>
                            <div class="ux4g-container-md ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center">Container md</div>
                            <div class="ux4g-container-lg ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center">Container lg</div>
                            <div class="ux4g-container-xl ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center">Container xl</div>
                            <div class="ux4g-container-2xl ux4g-bg-primary-soft ux4g-p-m  ux4g-text-center">Container 2xl</div>
                        </div>
                    `)}

                    <!-- 3. Centering Layout -->
                    <div class="ux4g-mb-xl">
                        <h2 class="ux4g-fs-32 ux4g-fw-bold ux4g-mb-m ux4g-mt-2xl">Centering Layout</h2>
                        <p class="ux4g-text-neutral-secondary ux4g-mb-xl">Multiple ways to achieve perfectly centered layouts in the UX4G Design System.</p>
                    </div>

                    <!-- Container Centering -->
                    ${renderDemoCodeBlock('center-container', 'Container Centering', 'Uses ux4g-container to center content based on current breakpoint width.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-container ux4g-bg-primary-soft ux4g-p-xl  ux4g-text-center  ">
                                 (Centered Layout)
                            </div>
                        </div>
                    `)}

                    <!-- Margin Auto Centering -->
                    ${renderDemoCodeBlock('center-margin', 'Margin Auto Centering', 'Uses ux4g-mx-auto to center fixed-width elements horizontally.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-py-xl">
                            <div class="ux4g-mx-auto ux4g-bg-primary-soft ux4g-p-xl  ux4g-text-center   ux4g-w-50">
                                (Centered with Width)
                            </div>
                        </div>
                    `)}

                    <!-- Flex Centering -->
                    ${renderDemoCodeBlock('center-flex', 'Flexbox Centering', 'Uses ux4g-jc-center and ux4g-ai-center for both horizontal and vertical alignment.', `
                        <div class="ux4g-border ux4g-radius-l ux4g-bg-neutral ux4g-p-xl">
                            <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-hpx-150 ux4g-bg-neutral-subtle  ">
                                <div class="ux4g-bg-primary-soft ux4g-p-m  ">
                                    Centered Content (Flexbox)
                                </div>
                            </div>
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
