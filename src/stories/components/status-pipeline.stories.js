/**
 * Status Pipeline Component Stories
 * 
 * Showcasing Status Pipeline variants including Horizontal and Vertical with sizing options.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Status Pipeline',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Status Pipelines visually track the progress of a multi-step process. They are available in horizontal and vertical layouts with multiple states and sizes.',
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

const getReactCode = (html) => htmlToJsx(html, 'StatusPipeline');
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

// HORIZONTAL
const HORIZONTAL_DEFAULT = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed ux4g-status-pipeline-done">
        <span class="ux4g-status-pipeline-head-icon ">1</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
            <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
        </span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">
            <span class="ux4g-status-pipeline-head-check">3</span>
        </span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">
            <span class="ux4g-status-pipeline-head-check">4</span>
        </span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">
            <span class="ux4g-status-pipeline-head-check">5</span>
        </span>
    </li>
</ul>
`;

const HORIZONTAL_WITH_LABEL = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed ux4g-status-pipeline-done">
        <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">1</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-success ux4g-status-pipeline-status">30 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
            <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
        </span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-inprogress ux4g-status-pipeline-status">Inprogress</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">3</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 10 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">4</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Decision</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 18 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">5</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Issued</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 20 Apr</span>
        </div>
    </li>
</ul>
`;

const HORIZONTAL_BELOW_LABEL = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check"></span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-label-success ux4g-status-pipeline-status">30 Apr</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active"></span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-label-inprogress ux4g-status-pipeline-status">In progress</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 10 Apr</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Decision</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 18 Apr</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-warning-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-warning">Issued</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-warning">Est. 20 Apr</span>
    </li>
</ul>
`;

const HORIZONTAL_SMALL_DEFAULT = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal ux4g-status-pipeline-s">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed ux4g-status-pipeline-done">
        <span class="ux4g-status-pipeline-head-icon "></span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
            <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
        </span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">
            <span class="ux4g-status-pipeline-head-check">3</span>
        </span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">
            <span class="ux4g-status-pipeline-head-check">4</span>
        </span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">
            <span class="ux4g-status-pipeline-head-check">5</span>
        </span>
    </li>
</ul>
`;

const HORIZONTAL_SMALL_WITH_LABEL = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal ux4g-status-pipeline-s">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed ux4g-status-pipeline-done">
        <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active"></span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-success ux4g-status-pipeline-status">30 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
            <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
        </span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-inprogress ux4g-status-pipeline-status">Inprogress</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">3</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 10 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">4</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Decision</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 18 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <span class="ux4g-status-pipeline-head-icon">5</span>
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Issued</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 20 Apr</span>
        </div>
    </li>
</ul>
`;

const HORIZONTAL_SMALL_BELOW_LABEL = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-horizontal ux4g-status-pipeline-s">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check"></span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-label-success ux4g-status-pipeline-status">30 Apr</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active"></span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-label-inprogress ux4g-status-pipeline-status">In progress</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 10 Apr</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Decision</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 18 Apr</span>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Issued</span>
        <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 20 Apr</span>
    </li>
</ul>
`;

// VERTICAL
const VERTICAL_DEFAULT = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical ux4g-status-pipeline-vertical-o-lebel">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check">1</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
</ul>
`;

const VERTICAL_SMALL_DEFAULT = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical ux4g-status-pipeline-s ux4g-status-pipeline-vertical-o-lebel">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check">1</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
        </div>
    </li>
</ul>
`;

const VERTICAL_WITH_LABEL = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical ux4g-status-pipeline-vertical-ld">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check">1</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Descision</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Issued</span>
        </div>
    </li>
</ul>
`;

const VERTICAL_SMALL_WITH_LABEL = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical ux4g-status-pipeline-s ux4g-status-pipeline-vertical-ld">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check">1</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Descision</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Issued</span>
        </div>
    </li>
</ul>
`;

const VERTICAL_WITH_LABEL_DESC = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical ux4g-status-pipeline-vertical-ld">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check">1</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-success">5 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-inprogress">In progress</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 10 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Descision</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 16 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-warning-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-warning">Issues</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-warning">Est. 20 Apr</span>
        </div>
    </li>
</ul>
`;

const VERTICAL_SMALL_WITH_LABEL_DESC = `
<ul class="ux4g-status-pipeline-stepper ux4g-status-pipeline-vertical ux4g-status-pipeline-s ux4g-status-pipeline-vertical-ld">
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-done">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check">1</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Submitted</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-success">5 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon ux4g-status-pipeline-head-icon-active">
                <span class="ux4g-status-pipeline-head-check ux4g-status-pipeline-head-check-active">2</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Verification</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-label-inprogress">In progress</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">3</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Inspection</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 10 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">4</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Decision</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 16 Apr</span>
        </div>
    </li>
    <li class="ux4g-status-pipeline-step ux4g-status-pipeline-step-pending ux4g-status-pipeline-completed">
        <div class="ux4g-status-pipeline-head">
            <span class="ux4g-status-pipeline-head-icon">
                <span class="ux4g-status-pipeline-head-check">5</span>
            </span>
        </div>
        <div class="ux4g-relative ux4g-status-pipeline-vertical-content-group">
            <span class="ux4g-label-l-strong ux4g-status-pipeline-label">Issues</span>
            <span class="ux4g-body-s-default ux4g-status-pipeline-status">Est. 20 Apr</span>
        </div>
    </li>
</ul>
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Status Pipeline</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Status Pipelines visually track the progress of a multi-step process. They are available in horizontal and vertical layouts with multiple states and sizes.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of Status Pipeline variations.</p>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Status Pipeline Horizontal</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-3xl">
                                    <div class="ux4g-mb-l">
                                        <h4 class="ux4g-label-m-strong ux4g-mb-l ux4g-text-neutral-secondary">Default</h4>
                                        ${HORIZONTAL_DEFAULT}
                                    </div>
                                    <div class="ux4g-mb-3xl">
                                        <h4 class="ux4g-label-m-strong ux4g-mb-l ux4g-text-neutral-secondary">With Label</h4>
                                        ${HORIZONTAL_WITH_LABEL}
                                    </div>
                                    <div>
                                        <h4 class="ux4g-label-m-strong ux4g-mb-l ux4g-text-neutral-secondary">Below Label</h4>
                                        ${HORIZONTAL_BELOW_LABEL}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl ux4g-mt-3xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Status Pipeline Vertical</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-mb-m">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-xl">
                                    <div>
                                        <h4 class="ux4g-label-m-strong ux4g-mb-l ux4g-text-neutral-secondary">Default</h4>
                                        ${VERTICAL_DEFAULT}
                                    </div>
                                    <div>
                                        <h4 class="ux4g-label-m-strong ux4g-mb-l ux4g-text-neutral-secondary">With Label</h4>
                                        ${VERTICAL_WITH_LABEL}
                                    </div>
                                    <div>
                                        <h4 class="ux4g-label-m-strong ux4g-mb-l ux4g-text-neutral-secondary">With Label & Description</h4>
                                        ${VERTICAL_WITH_LABEL_DESC}
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
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and utility classes for Status Pipelines.</p>
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
                                                { class: 'ux4g-status-pipeline-stepper', label: 'Primary Wrapper Class' },
                                                { class: 'ux4g-status-pipeline-step', label: 'Individual Step Wrapper' },
                                                { class: 'ux4g-status-pipeline-head', label: 'Step Indicator Wrapper' },
                                                { class: 'ux4g-status-pipeline-head-icon', label: 'Step Icon Container' },
                                                { class: 'ux4g-status-pipeline-head-check', label: 'Step Checkmark/Number' },
                                                { class: 'ux4g-status-pipeline-label', label: 'Step Label Text' },
                                                { class: 'ux4g-status-pipeline-status', label: 'Step Status Text' }
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
                                                { class: 'ux4g-status-pipeline-horizontal', label: 'Horizontal Layout' },
                                                { class: 'ux4g-status-pipeline-vertical', label: 'Vertical Layout' },
                                                { class: 'ux4g-status-pipeline-s', label: 'Small Size Modifier' },
                                                { class: 'ux4g-status-pipeline-done', label: 'Completed Step' },
                                                { class: 'ux4g-status-pipeline-step-pending', label: 'Pending Step' },
                                                { class: 'ux4g-status-pipeline-head-icon-active', label: 'Active Step Icon' }
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

export const Horizontal = {
    name: 'Status Pipeline Horizontal',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Horizontal Pipeline', 'Horizontal status pipelines to track sequential progression across a wide layout.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('hz-default', 'Status pipeline default', 'Standard horizontal pipeline without labels.', HORIZONTAL_DEFAULT, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Horizontal Default', html: HORIZONTAL_DEFAULT.trim() }]))}
                
                ${renderDemoCodeBlock('hz-label', 'Status pipeline with Label', 'Horizontal pipeline featuring labels alongside the step markers.', HORIZONTAL_WITH_LABEL, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Horizontal With Label', html: HORIZONTAL_WITH_LABEL.trim() }]))}
                
                ${renderDemoCodeBlock('hz-below-label', 'Status pipeline with below Label', 'Horizontal pipeline with labels centered below the step markers.', HORIZONTAL_BELOW_LABEL, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Horizontal Below Label', html: HORIZONTAL_BELOW_LABEL.trim() }]))}
                
                ${renderDemoCodeBlock('hz-s-default', 'Status pipeline default (Size S)', 'Small-sized standard horizontal pipeline.', HORIZONTAL_SMALL_DEFAULT, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Horizontal Default Size S', html: HORIZONTAL_SMALL_DEFAULT.trim() }]))}
                
                ${renderDemoCodeBlock('hz-s-label', 'Status pipeline with Label (Size S)', 'Small-sized horizontal pipeline featuring labels.', HORIZONTAL_SMALL_WITH_LABEL, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Horizontal With Label Size S', html: HORIZONTAL_SMALL_WITH_LABEL.trim() }]))}
                
                ${renderDemoCodeBlock('hz-s-below-label', 'Status pipeline with below Label (Size S)', 'Small-sized horizontal pipeline with labels centered below.', HORIZONTAL_SMALL_BELOW_LABEL, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Horizontal Below Label Size S', html: HORIZONTAL_SMALL_BELOW_LABEL.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Vertical = {
    name: 'Status Pipeline Vertical',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Vertical Pipeline', 'Vertical status pipelines to track progression downwards, ideal for detailed steps or sidebar navigation.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('vt-default', 'Status pipeline Default', 'Medium-sized standard vertical pipeline without text labels.', VERTICAL_DEFAULT, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Vertical Default', html: VERTICAL_DEFAULT.trim() }]))}
                
                ${renderDemoCodeBlock('vt-s-default', 'Status pipeline Default (Size S)', 'Small-sized standard vertical pipeline without text labels.', VERTICAL_SMALL_DEFAULT, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Vertical Default Size S', html: VERTICAL_SMALL_DEFAULT.trim() }]))}
                
                ${renderDemoCodeBlock('vt-label', 'Status pipeline vertical with label', 'Medium-sized vertical pipeline featuring step labels.', VERTICAL_WITH_LABEL, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Vertical With Label', html: VERTICAL_WITH_LABEL.trim() }]))}
                
                ${renderDemoCodeBlock('vt-s-label', 'Status pipeline vertical with label (Size S)', 'Small-sized vertical pipeline featuring step labels.', VERTICAL_SMALL_WITH_LABEL, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Vertical With Label Size S', html: VERTICAL_SMALL_WITH_LABEL.trim() }]))}
                
                ${renderDemoCodeBlock('vt-label-desc', 'Status pipeline vertical with label and description', 'Medium-sized vertical pipeline with comprehensive label and description text.', VERTICAL_WITH_LABEL_DESC, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Vertical With Label And Description', html: VERTICAL_WITH_LABEL_DESC.trim() }]))}
                
                ${renderDemoCodeBlock('vt-s-label-desc', 'Status pipeline vertical with label and description (Size S)', 'Small-sized vertical pipeline with comprehensive label and description text.', VERTICAL_SMALL_WITH_LABEL_DESC, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Status Pipeline Vertical With Label And Description Size S', html: VERTICAL_SMALL_WITH_LABEL_DESC.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
