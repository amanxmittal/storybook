/**
 * Journey Timeline Component Stories
 * 
 * Showcasing Journey Timeline variants including Vertical and Horizontal.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Journey Timeline',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Journey Timelines visually track the progress of an multi-step process or history of events.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'JourneyTimeline');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, gridClass = 'ux4g-grid-cols-1', customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
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
                    <div class="ux4g-d-grid ${gridClass} ux4g-gap-l ux4g-w-100">
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

// --- HTML Content ---

const VERTICAL_TIMELINE_HTML = `
<div class="journey-timeline-card journey-timeline-card-vertical ux4g-mb-xl ux4g-d-flex">
    <div class=" ux4g-d-flex ux4g-jc-between ">
        <div class="journey-timeline-title ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
            <span class="ux4g-title-m-default">Title</span>
            <span
                class="ux4g-body-m-default ux4g-text-neutral-secondary journey-timeline-description">Description</span>
        </div>
        <span class="ux4g-icon-outlined ux4g-fs-20">token</span>
    </div>
    <div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
        <!-- Step 1: Completed -->
        <div class="ux4g-journey-step ux4g-journey-step-completed">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
            <div class="ux4g-journey-card ux4g-journey-card--standard">
                <div class="ux4g-journey-info">
                    <span class="ux4g-journey-date">Date</span>
                    <span class="ux4g-journey-title">Title</span>
                    <span class="ux4g-tag-tonal-neutral">Tag</span>
                </div>
            </div>
        </div>

        <!-- Step 2: Active -->
        <div class="ux4g-journey-step ux4g-journey-step-active">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
            <div class="ux4g-journey-card ux4g-journey-card--standard">
                <div class="ux4g-journey-info">
                    <span class="ux4g-journey-date">Date</span>
                    <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                        <span class="ux4g-journey-title">Title</span>
                        <span class="ux4g-journey-description">Helping Text</span>
                    </div>
                    <span class="ux4g-tag-tonal-neutral">Tag</span>
                </div>
            </div>
        </div>

        <!-- Step 3: Pending -->
        <div class="ux4g-journey-step">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
            <div class="ux4g-journey-card ux4g-journey-card--standard">
                <div class="ux4g-journey-info">
                    <span class="ux4g-journey-date">Date</span>
                    <div class="ux4g-d-flex ux4g-flex-column  ux4g-stack-gap-xs">
                        <span class="ux4g-journey-title">Title</span>
                        <div class="ux4g-journey-status">
                            <span class="ux4g-journey-status-dot ux4g-journey-status-dot--warning"
                                aria-hidden="true"></span>
                            <span class="ux4g-label-m-default ux4g-text-neutral-primary">2 days
                                remaining</span>
                            <span class="ux4g-divider-vertical"></span>
                            <span class="ux4g-label-s-default ux4g-text-warning">Pending</span>
                        </div>
                    </div>
                    <span class="ux4g-tag-tonal-neutral">Tag</span>
                </div>
            </div>
        </div>
        <div class="ux4g-journey-step">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
            <div class="ux4g-journey-card ux4g-journey-card--standard">
                <div class="ux4g-journey-info">
                    <span class="ux4g-journey-date">Date</span>
                    <div class="ux4g-d-flex ux4g-flex-column  ux4g-stack-gap-xs">
                        <span class="ux4g-journey-title">Title</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2"
                            style="margin-top: 4px; color: var(--ux4g-text-brand-primary-default);">
                            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path>
                        </svg>
                    </div>
                    <span class="ux4g-tag-tonal-neutral">Tag</span>
                </div>
            </div>
        </div>
        <div class="ux4g-journey-step">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
            <div class="ux4g-journey-card ux4g-journey-card--standard">
                <div class="ux4g-journey-info">
                    <span class="ux4g-journey-date">Date</span>
                    <div class="ux4g-d-flex ux4g-flex-column  ux4g-stack-gap-xs">
                        <span class="ux4g-journey-title">Title</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2"
                            style="margin-top: 4px; color: var(--ux4g-text-brand-primary-default);">
                            <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"></path>
                        </svg>
                    </div>
                    <span class="ux4g-tag-tonal-neutral">Tag</span>
                </div>
            </div>
        </div>
    </div>
</div>
`;

const HORIZONTAL_TIMELINE_HTML = `
<div class="journey-timeline-card ux4g-mb-xl ux4g-d-flex">
    <div class=" ux4g-d-flex ux4g-jc-between ">
        <div class="journey-timeline-title ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
            <span class="ux4g-title-m-default">Title</span>
            <span
                class="ux4g-body-m-default ux4g-text-neutral-secondary journey-timeline-description">Description</span>
        </div>
        <span class="ux4g-icon-outlined ux4g-fs-20">token</span>
    </div>
    <div class="ux4g-journey-timeline ux4g-journey-timeline--horizontal">
        <!-- Step 1: Completed -->
        <div class="ux4g-journey-step ux4g-journey-step-completed">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
        </div>

        <!-- Step 2: Active -->
        <div class="ux4g-journey-step ux4g-journey-step-active">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>

            </div>
        </div>

        <!-- Step 3: Pending -->
        <div class="ux4g-journey-step">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
        </div>
        <!-- Step 4: Pending -->
        <div class="ux4g-journey-step">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
        </div>
        <!-- Step 5: Pending -->
        <div class="ux4g-journey-step">
            <div class="ux4g-journey-indicator">
                <span class="ux4g-icon-outlined">check</span>
            </div>
        </div>
    </div>

    <div class="ux4g-journey-horizontal-card-container">
        <div class="ux4g-journey-card ux4g-journey-card--standard">
            <div class="ux4g-journey-info">
                <span class="ux4g-journey-date">Date</span>
                <span class="ux4g-journey-title">Title</span>
                <span class="ux4g-tag-tonal-neutral">Tag</span>
            </div>
        </div>
    </div>
</div>
`;

// --- Stories Content ---

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Journey Timeline</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Journey Timelines visually track the progress of a multi-step process or history of events. They are available in vertical and horizontal layouts, representing steps in completed, active, or pending states.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of Journey Timeline variations.</p>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Journey Timeline Vertical</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${VERTICAL_TIMELINE_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Journey Timeline Horizontal</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${HORIZONTAL_TIMELINE_HTML}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and utility classes for Journey Timelines.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Structural Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structural Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'journey-timeline-card', label: 'Timeline Card Container' },
                                                { class: 'ux4g-journey-timeline', label: 'Timeline Container' },
                                                { class: 'ux4g-journey-step', label: 'Individual Step' },
                                                { class: 'ux4g-journey-indicator', label: 'Step Icon/Dot Indicator' },
                                                { class: 'ux4g-journey-card', label: 'Step Detail Card' },
                                                { class: 'ux4g-journey-info', label: 'Step Information Area' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${r.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${r.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${r.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Variant & State Utilities -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variant & State Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-journey-timeline--vertical', label: 'Vertical Layout' },
                                                { class: 'ux4g-journey-timeline--horizontal', label: 'Horizontal Layout' },
                                                { class: 'ux4g-journey-step-completed', label: 'Completed State' },
                                                { class: 'ux4g-journey-step-active', label: 'Active State' },
                                                { class: 'ux4g-journey-status-dot', label: 'Status Dot Indicator' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${t.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${t.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${t.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const VerticalTimeline = {
    name: 'Vertical Timeline',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Vertical Timeline', 'A vertically aligned progression tracking component.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('vertical-timeline', 'Vertical Timeline', 'Vertical standard timeline presenting events sequentially downwards.', VERTICAL_TIMELINE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Vertical Timeline', html: VERTICAL_TIMELINE_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const HorizontalTimeline = {
    name: 'Horizontal Timeline',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Horizontal Timeline', 'A horizontally aligned progression tracking component.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('horizontal-timeline', 'Horizontal Timeline', 'Horizontal standard timeline presenting steps sequentially across the screen.', HORIZONTAL_TIMELINE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Horizontal Timeline', html: HORIZONTAL_TIMELINE_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
