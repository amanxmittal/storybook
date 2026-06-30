/**
 * Badge Component Stories
 * 
 * showcasing different types of badges: Dot, Icon, and Digit variants.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Badge',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Badges are small status descriptors used to highlight important information or counts.',
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

const getReactCode = (html) => htmlToJsx(html, 'Badge');

const getBadgeSnippet = (entries) => entries.map(({ label, markup }) => `<!-- Variant: ${label} -->\n${markup}`).join('\n\n');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl ux4g-pb-xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-mb-l">
                <div class="ux4g-p-l ux4g-d-flex ux4g-jc-center ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-2xl ux4g-w-100 ux4g-flex-wrap">
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
                        <pre class="ux4g-m-none ux4g-p-l ux4g-w-100"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Badge</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Badges are small status descriptors used to highlight important information, status, or numerical counts. They provide immediate visual feedback and categorize items effectively.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mb-l">Visual Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Explore the core styles and animation variants available in the design system.</p>
                    
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-w-100">
                        <!-- Dot Showcase -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                                    <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Dot Badges</h3>
                                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-xl">
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-dot-primary"></span>
                                            <span class="ux4g-label-xs-default">Primary</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-dot-success"></span>
                                            <span class="ux4g-label-xs-default">Success</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-dot-danger"></span>
                                            <span class="ux4g-label-xs-default">Danger</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Icon Showcase -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                                    <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Icon Badges</h3>
                                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-xl">
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-icon-primary"><i class="ux4g-icon">check</i></span>
                                            <span class="ux4g-label-xs-default">Check</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-icon-warning"><i class="ux4g-icon">warning</i></span>
                                            <span class="ux4g-label-xs-default">Warning</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-icon-danger"><i class="ux4g-icon">close</i></span>
                                            <span class="ux4g-label-xs-default">Error</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Digit Showcase -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                                    <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Digit Badges</h3>
                                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-xl">
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-digit-primary">1</span>
                                            <span class="ux4g-label-xs-default">Single</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-digit-info">11</span>
                                            <span class="ux4g-label-xs-default">Double</span>
                                        </div>
                                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                                            <span class="ux4g-badge-digit-danger">99+</span>
                                            <span class="ux4g-label-xs-default">Overflow</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy the necessary utility classes to implement badges in your project.</p>
                    </div>

                    <div class="ux4g-row ux4g-gap-l">
                        <!-- Variant Classes (Grid) -->
                        <div class="ux4g-col-12 ux4g-mb-3xl">
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Badge Variant Classes</h4>
                                </div>
                                <div class=" ux4g-p-none">
                                    <div class="ux4g-table-container">
                                        <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                            <thead>
                                                <tr class="ux4g-bg-neutral-soft">
                                                    <th class="ux4g-label-s-strong ux4g-p-l">Semantic Variant</th>
                                                    <th class="ux4g-label-s-strong ux4g-p-l">Dot Class</th>
                                                    <th class="ux4g-label-s-strong ux4g-p-l">Icon Class</th>
                                                    <th class="ux4g-label-s-strong ux4g-p-l">Digit Class</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                ${['primary', 'secondary', 'tertiary', 'success', 'warning', 'danger', 'info', 'neutral'].map(variant => `
                                                <tr>
                                                    <td class="ux4g-label-s-strong ux4g-p-l ux4g-text-capitalize">${variant}</td>
                                                    <td class="ux4g-p-l">
                                                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                            <code class="ux4g-text-primary">ux4g-badge-dot-${variant}</code>
                                                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-badge-dot-${variant}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                        </div>
                                                    </td>
                                                    <td class="ux4g-p-l">
                                                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                            <code class="ux4g-text-primary">ux4g-badge-icon-${variant}</code>
                                                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-badge-icon-${variant}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                        </div>
                                                    </td>
                                                    <td class="ux4g-p-l">
                                                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                            <code class="ux4g-text-primary">ux4g-badge-digit-${variant}</code>
                                                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-badge-digit-${variant}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                        </div>
                                                    </td>
                                                </tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
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

export const Badges = {
    render: () => {
        const dotCode = getBadgeSnippet([
            { label: 'Dot Badge - Primary', markup: '<span class="ux4g-badge-dot-primary"></span>' },
            { label: 'Dot Badge - Success', markup: '<span class="ux4g-badge-dot-success"></span>' },
            { label: 'Dot Badge - Warning', markup: '<span class="ux4g-badge-dot-warning"></span>' },
            { label: 'Dot Badge - Danger', markup: '<span class="ux4g-badge-dot-danger"></span>' },
            { label: 'Dot Badge - Info', markup: '<span class="ux4g-badge-dot-info"></span>' },
            { label: 'Dot Badge - Tertiary', markup: '<span class="ux4g-badge-dot-tertiary"></span>' },
            { label: 'Dot Badge - Neutral', markup: '<span class="ux4g-badge-dot-neutral"></span>' },
            { label: 'Dot Badge - Secondary', markup: '<span class="ux4g-badge-dot-secondary"></span>' },
        ]);

        const iconCode = getBadgeSnippet([
            { label: 'Icon Badge - Primary Check', markup: '<span class="ux4g-badge-icon-primary"><i class="ux4g-icon">check</i></span>' },
            { label: 'Icon Badge - Secondary Notifications', markup: '<span class="ux4g-badge-icon-secondary"><i class="ux4g-icon">notifications</i></span>' },
            { label: 'Icon Badge - Success Star', markup: '<span class="ux4g-badge-icon-success"><i class="ux4g-icon">star</i></span>' },
            { label: 'Icon Badge - Warning', markup: '<span class="ux4g-badge-icon-warning"><i class="ux4g-icon">warning</i></span>' },
            { label: 'Icon Badge - Danger Close', markup: '<span class="ux4g-badge-icon-danger"><i class="ux4g-icon">close</i></span>' },
            { label: 'Icon Badge - Info', markup: '<span class="ux4g-badge-icon-info"><i class="ux4g-icon">info</i></span>' },
        ]);

        const digitCode = getBadgeSnippet([
            { label: 'Digit Badge - Primary - Single', markup: '<span class="ux4g-badge-digit-primary">1</span>' },
            { label: 'Digit Badge - Neutral - Single', markup: '<span class="ux4g-badge-digit-neutral">3</span>' },
            { label: 'Digit Badge - Info - Double', markup: '<span class="ux4g-badge-digit-info">11</span>' },
            { label: 'Digit Badge - Success - Double', markup: '<span class="ux4g-badge-digit-success">22</span>' },
            { label: 'Digit Badge - Danger - Overflow', markup: '<span class="ux4g-badge-digit-danger">99+</span>' },
            { label: 'Digit Badge - Warning - Triple', markup: '<span class="ux4g-badge-digit-warning">100</span>' },
        ]);

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Badge Variants', 'Explore the different visual styles of badges: Dot, Icon, and Digit, each available in multiple semantic variants.')}
                
                <div class="ux4g-p-m">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl">
                        ${renderDemoCodeBlock('dot', 'Dot Badges', 'Small indicator dots for status or notification presence.', dotCode)}
                        ${renderDemoCodeBlock('icon', 'Icon Badges', 'Badges featuring icons to represent specific statuses or actions.', iconCode)}
                        ${renderDemoCodeBlock('digit', 'Digit Badges', 'Numerical badges for showing counts, messages, or updates.', digitCode)}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};
