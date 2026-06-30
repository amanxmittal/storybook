import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Stepper',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Steppers communicate sequential progress using horizontal, aligned, bottom-line, and vertical variants.',
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

const getHeroHeader = (title, description) => `
    <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-py-2xl"> 
        <div class="ux4g-container">
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

const renderStorySection = (content) => `
    <section class="ux4g-bg-neutral-soft ux4g-py-2xl">
        <div class="ux4g-px-m">
            ${content}
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'Stepper');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, cleanCode = htmlContent) => {
    const displayCode = formatCode(cleanCode);
    const reactCode = getReactCode(cleanCode);
    const angularCode = formatCode(cleanCode);

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-shadow-l1 ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-w-100">
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

                    tabs.forEach((tab) => {
                        tab.onclick = () => {
                            tabs.forEach((item) => item.classList.remove('is-active'));
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

const STEPPER_SMALL_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small">
        <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
            <span class="ux4g-stepper-head-icon">1</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
            </span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon">
                <span class="ux4g-stepper-head-check">3</span>
            </span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                <span class="ux4g-stepper-head-check">4</span>
            </span>
        </li>
    </ul>
`;

const STEPPER_NO_LABEL_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal">
        <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
            <span class="ux4g-stepper-head-icon">1</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
            </span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon">
                <span class="ux4g-stepper-head-check">3</span>
            </span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                <span class="ux4g-stepper-head-check">4</span>
            </span>
        </li>
    </ul>
`;

const STEPPER_DEFAULT_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal">
        <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
            <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">1</span>
            <div class="ux4g-stepper-head">
                <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                <span class="ux4g-stepper-description">Write description here</span>
                <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
            </div>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
            </span>
            <div class="ux4g-stepper-head">
                <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                <span class="ux4g-stepper-description">Write description here</span>
                <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">Inprogress</span>
            </div>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon">3</span>
            <div class="ux4g-stepper-head">
                <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                <span class="ux4g-stepper-description">Write description here</span>
                <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
            </div>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">4</span>
            <div class="ux4g-stepper-head">
                <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
                <span class="ux4g-label-l-default ux4g-stepper-warning ux4g-stepper-status">Label</span>
            </div>
        </li>
    </ul>
`;

const STEPPER_CENTER_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center">
        <li class="ux4g-stepper-step ux4g-stepper-done">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">In progress</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon">
                    <span class="ux4g-stepper-head-check">3</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                    <span class="ux4g-stepper-head-check">4</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-warning ux4g-stepper-status">Label</span>
        </li>
    </ul>
`;

const STEPPER_LEFT_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-left">
        <li class="ux4g-stepper-step ux4g-stepper-done">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">In progress</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon">
                    <span class="ux4g-stepper-head-check">3</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                    <span class="ux4g-stepper-head-check">4</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-warning ux4g-stepper-status">Label</span>
        </li>
    </ul>
`;

const STEPPER_BOTTOM_LINE_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center ux4g-stepper-bottom-line">
        <li class="ux4g-stepper-step ux4g-stepper-done">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-inprogress">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">In progress</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon">
                    <span class="ux4g-stepper-head-check">3</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                    <span class="ux4g-stepper-head-check">4</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-warning ux4g-stepper-status">Label</span>
        </li>
    </ul>
`;

const STEPPER_FILL_BOTTOM_LINE_HTML = `
    <ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center ux4g-stepper-bottom-line ux4g-stepper-bottom-line-fill">
        <li class="ux4g-stepper-step ux4g-stepper-done">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-inprogress">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                    <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">In progress</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon">
                    <span class="ux4g-stepper-head-check">3</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
        </li>
        <li class="ux4g-stepper-step ux4g-stepper-completed">
            <div class="ux4g-stepper-head">
                <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                    <span class="ux4g-stepper-head-check">4</span>
                </span>
            </div>
            <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
            <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
            <span class="ux4g-label-l-default ux4g-stepper-warning ux4g-stepper-status">Label</span>
        </li>
    </ul>
`;

const STEPPER_VERTICAL_HTML = `
    <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-l" style="display: flex; gap: 40px;">
        <!-- Medium Outline -->
        <ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-vertical-o-lebel">
            <li class="ux4g-stepper-step ux4g-stepper-done">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check">1</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon">
                        <span class="ux4g-stepper-head-check">3</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                        <span class="ux4g-stepper-head-check">4</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
        </ul>
        <!-- Small Outline! Notice we just add ux4g-stepper-s -->
        <ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-s ux4g-stepper-vertical-o-lebel">
            <li class="ux4g-stepper-step ux4g-stepper-done">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check">1</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon">
                        <span class="ux4g-stepper-head-check">3</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                        <span class="ux4g-stepper-head-check">4</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                </div>
            </li>
        </ul>
    </div>
`;

const STEPPER_VERTICAL_DESCRIPTION_HTML = `
    <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-l" style="display: flex; gap: 40px;">
        <!-- Medium Outline -->
        <ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-vertical-ld">
            <li class="ux4g-stepper-step ux4g-stepper-done">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check">1</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon">
                        <span class="ux4g-stepper-head-check">3</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                        <span class="ux4g-stepper-head-check">4</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
                </div>
            </li>
        </ul>
        <!-- Small Outline! Notice we just add ux4g-stepper-s -->
        <ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-s ux4g-stepper-vertical-ld">
            <li class="ux4g-stepper-step ux4g-stepper-done">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check">1</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon">
                        <span class="ux4g-stepper-head-check">3</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                        <span class="ux4g-stepper-head-check">4</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
                </div>
            </li>
        </ul>
    </div>
`;

const STEPPER_VERTICAL_STATUS_HTML = `
    <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-l" style="display: flex; gap: 40px;">
        <!-- Medium Outline -->
        <ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-vertical-ld">
            <li class="ux4g-stepper-step ux4g-stepper-done">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check">1</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-label-success">Completed</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-label-inprogress">In progress</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon">
                        <span class="ux4g-stepper-head-check">3</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                        <span class="ux4g-stepper-head-check">4</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-warning">Label</span>
                </div>
            </li>
        </ul>
        <!-- Small Outline! Notice we just add ux4g-stepper-s -->
        <ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-s ux4g-stepper-vertical-ld">
            <li class="ux4g-stepper-step ux4g-stepper-done">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check">1</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-label-success">Completed</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
                        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-label-inprogress">In progress</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon">
                        <span class="ux4g-stepper-head-check">3</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
                </div>
            </li>
            <li class="ux4g-stepper-step ux4g-stepper-completed">
                <div class="ux4g-stepper-head">
                    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
                        <span class="ux4g-stepper-head-check">4</span>
                    </span>
                </div>
                <div class="ux4g-relative ux4g-vertical-content-group">
                    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
                    <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
                    <span class="ux4g-label-l-default ux4g-stepper-warning">Label</span>
                </div>
            </li>
        </ul>
    </div>
`;

const STEPPER_PAGINATION_HTML = `
    <div class="ux4g-d-grid ux4g-gap-m" style="gap: 48px;">
        <!-- ==============================================     VARIATION 1: Left Aligned    =================================================== -->
        <div class="ux4g-stepper-progress">
            <!-- Track & Top Actions -->
            <div class="ux4g-stepper-progress-header">
                <button class="ux4g-stepper-progress-btn" disabled="">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                </button>
                <div class="ux4g-stepper-progress-track">
                    <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
                    <!-- Add 11 more empty segments here -->
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                </div>
                <button class="ux4g-stepper-progress-btn">
                    <span class="ux4g-icon-outlined">arrow_forward</span>
                </button>
            </div>
            <!-- Content -->
            <div>
                <span class="ux4g-stepper-progress-count">Step 1 of 12</span>
                <span class="ux4g-stepper-progress-label">Step label</span>
                <span class="ux4g-stepper-progress-desc">Description</span>
            </div>
        </div>
        <!-- ==============================================     VARIATION 1: Left Aligned    =================================================== -->
        <div class="ux4g-stepper-progress">
            <!-- Track & Top Actions -->
            <div class="ux4g-stepper-progress-header">
                <button class="ux4g-stepper-progress-btn" disabled="">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                </button>
                <div class="ux4g-stepper-progress-track">
                    <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
                    <!-- Add 11 more empty segments here -->
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                </div>
                <button class="ux4g-stepper-progress-btn">
                    <span class="ux4g-icon-outlined">arrow_forward</span>
                </button>
            </div>
            <!-- Content -->
            <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-between">
                <span class="ux4g-stepper-progress-count">Step 1 of 12</span>
                <div class="ux4g-relative">
                    <span class="ux4g-stepper-progress-label">Step label</span>
                    <span class="ux4g-stepper-progress-desc">Description</span>
                </div>
            </div>
        </div>
        <!-- ==============================================        VARIATION 2: Split Content (Count Left, Title Right)    =================================================== -->
        <div class="ux4g-stepper-progress ux4g-d-none">
            <div class="ux4g-stepper-progress-header">
                <button class="ux4g-stepper-progress-btn" disabled="">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                </button>
                <div class="ux4g-stepper-progress-track">
                    <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
                    <!-- Segments... -->
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                </div>
                <button class="ux4g-stepper-progress-btn">
                    <span class="ux4g-icon-outlined">arrow_forward</span>
                </button>
            </div>
            <div class="ux4g-stepper-progress-split">
                <span class="ux4g-stepper-progress-count">Step 1 of 12</span>
                <div class="ux4g-stepper-progress-text-right">
                    <span class="ux4g-stepper-progress-label">Step label</span>
                    <span class="ux4g-stepper-progress-desc">Description</span>
                </div>
            </div>
        </div>
        <!-- ==============================================        VARIATION 3: Space Between Center    =================================================== -->
        <div class="ux4g-stepper-progress">
            <div class="ux4g-stepper-progress-header">
                <div class="ux4g-stepper-progress-track">
                    <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
                    <!-- Segments... -->
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                </div>
            </div>
            <div class="ux4g-stepper-progress-actions-between">
                <button class="ux4g-stepper-progress-btn" disabled="">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                </button>
                <span class="ux4g-stepper-progress-count ux4g-mb-none">Step 1 of 12</span>
                <button class="ux4g-stepper-progress-btn">
                    <span class="ux4g-icon-outlined">arrow_forward</span>
                </button>
            </div>
            <div class="ux4g-stepper-progress-text-center">
                <span class="ux4g-stepper-progress-label">Step label</span>
                <span class="ux4g-stepper-progress-desc">Description</span>
            </div>
        </div>
        <!-- ==============================================         VARIATION 4: Tight Center    =================================================== -->
        <div class="ux4g-stepper-progress">
            <div class="ux4g-stepper-progress-header">
                <div class="ux4g-stepper-progress-track">
                    <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
                    <!-- Segments... -->
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                </div>
            </div>
            <div class="ux4g-stepper-progress-actions-center">
                <button class="ux4g-stepper-progress-btn" disabled="">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                </button>
                <span class="ux4g-stepper-progress-count ux4g-mb-none">Step 1 of 12</span>
                <button class="ux4g-stepper-progress-btn">
                    <span class="ux4g-icon-outlined">arrow_forward</span>
                </button>
            </div>
            <div class="ux4g-stepper-progress-text-center">
                <span class="ux4g-stepper-progress-label">Step label</span>
                <span class="ux4g-stepper-progress-desc">Description</span>
            </div>
        </div>
        <!-- ==============================================         VARIATION 5: Split Bottom Actions    =================================================== -->
        <div class="ux4g-stepper-progress">
            <div class="ux4g-stepper-progress-header">
                <div class="ux4g-stepper-progress-track">
                    <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
                    <!-- Segments... -->
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                    <div class="ux4g-stepper-progress-segment"></div>
                </div>
            </div>
            <!-- Align bottom to ensure buttons rest perfectly on baseline -->
            <div class="ux4g-stepper-progress-split ux4g-align-end">
                <div>
                    <span class="ux4g-stepper-progress-label">Step label</span>
                    <span class="ux4g-stepper-progress-desc">Description</span>
                </div>
                <div class="ux4g-stepper-progress-controls-end">
                    <span class="ux4g-stepper-progress-count">Step 1 of 12</span>
                    <div class="ux4g-stepper-progress-btn-group">
                        <button class="ux4g-stepper-progress-btn" disabled="">
                            <span class="ux4g-icon-outlined">arrow_back</span>
                        </button>
                        <button class="ux4g-stepper-progress-btn">
                            <span class="ux4g-icon-outlined">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

const STEPPER_SMALL_CLEAN_CODE = `
<!-- Variant: Stepper - Horizontal Small -->
<ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-small">
  <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
    <span class="ux4g-stepper-head-icon">1</span>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
      <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
    </span>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <span class="ux4g-stepper-head-icon">
      <span class="ux4g-stepper-head-check">3</span>
    </span>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">
      <span class="ux4g-stepper-head-check">4</span>
    </span>
  </li>
</ul>
`;

const STEPPER_DEFAULT_CLEAN_CODE = `
<!-- Variant: Stepper - Horizontal Default -->
<ul class="ux4g-stepper ux4g-stepper-horizontal">
  <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-done">
    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">1</span>
    <div class="ux4g-stepper-head">
      <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
      <span class="ux4g-stepper-description">Write description here</span>
      <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
    </div>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
      <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
    </span>
    <div class="ux4g-stepper-head">
      <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
      <span class="ux4g-stepper-description">Write description here</span>
      <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">Inprogress</span>
    </div>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-step-pending ux4g-stepper-completed">
    <span class="ux4g-stepper-head-icon">3</span>
    <div class="ux4g-stepper-head">
      <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
      <span class="ux4g-stepper-description">Write description here</span>
      <span class="ux4g-label-l-default ux4g-stepper-status">Label</span>
    </div>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <span class="ux4g-stepper-head-icon ux4g-stepper-warning-icon">4</span>
    <div class="ux4g-stepper-head">
      <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
      <span class="ux4g-stepper-description ux4g-stepper-warning">Write description here</span>
      <span class="ux4g-label-l-default ux4g-stepper-warning ux4g-stepper-status">Label</span>
    </div>
  </li>
</ul>
`;

const STEPPER_ALIGNED_CLEAN_CODE = `
<!-- Variant: Stepper - Horizontal Center Aligned -->
<ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center">
  <li class="ux4g-stepper-step ux4g-stepper-done">
    <div class="ux4g-stepper-head">
      <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
        <span class="ux4g-stepper-head-check"></span>
      </span>
    </div>
    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
    <span class="ux4g-stepper-description">Write description here</span>
    <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <div class="ux4g-stepper-head">
      <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span>
      </span>
    </div>
    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
    <span class="ux4g-stepper-description">Write description here</span>
    <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">In progress</span>
  </li>
</ul>
`;

const STEPPER_BOTTOM_LINE_CLEAN_CODE = `
<!-- Variant: Stepper - Bottom Line -->
<ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center ux4g-stepper-bottom-line ux4g-stepper-bottom-line-fill">
  <li class="ux4g-stepper-step ux4g-stepper-done">
    <div class="ux4g-stepper-head">
      <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
        <span class="ux4g-stepper-head-check"></span>
      </span>
    </div>
    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
    <span class="ux4g-stepper-description">Write description here</span>
    <span class="ux4g-label-l-default ux4g-stepper-label-success ux4g-stepper-status">Completed</span>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed ux4g-stepper-inprogress">
    <div class="ux4g-stepper-head">
      <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span>
      </span>
    </div>
    <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
    <span class="ux4g-stepper-description">Write description here</span>
    <span class="ux4g-label-l-default ux4g-stepper-label-inprogress ux4g-stepper-status">In progress</span>
  </li>
</ul>
`;

const STEPPER_VERTICAL_CLEAN_CODE = `
<!-- Variant: Stepper - Vertical -->
<ul class="ux4g-stepper ux4g-stepper-vertical ux4g-stepper-vertical-ld">
  <li class="ux4g-stepper-step ux4g-stepper-done">
    <div class="ux4g-stepper-head">
      <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
        <span class="ux4g-stepper-head-check">1</span>
      </span>
    </div>
    <div class="ux4g-relative ux4g-vertical-content-group">
      <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
      <span class="ux4g-stepper-description">Write description here</span>
      <span class="ux4g-label-l-default ux4g-stepper-label-success">Completed</span>
    </div>
  </li>
  <li class="ux4g-stepper-step ux4g-stepper-completed">
    <div class="ux4g-stepper-head">
      <span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active">
        <span class="ux4g-stepper-head-check ux4g-stepper-head-check-active">2</span>
      </span>
    </div>
    <div class="ux4g-relative ux4g-vertical-content-group">
      <span class="ux4g-label-l-default ux4g-stepper-label">Label</span>
      <span class="ux4g-stepper-description">Write description here</span>
      <span class="ux4g-label-l-default ux4g-stepper-label-inprogress">In progress</span>
    </div>
  </li>
</ul>
`;

const STEPPER_PAGINATION_CLEAN_CODE = `
<!-- Variant: Stepper - Pagination Progress -->
<div class="ux4g-stepper-progress">
  <div class="ux4g-stepper-progress-header">
    <button class="ux4g-stepper-progress-btn" disabled="">
      <span class="ux4g-icon-outlined">arrow_back</span>
    </button>
    <div class="ux4g-stepper-progress-track">
      <div class="ux4g-stepper-progress-segment ux4g-stepper-progress-segment-active"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
      <div class="ux4g-stepper-progress-segment"></div>
    </div>
    <button class="ux4g-stepper-progress-btn">
      <span class="ux4g-icon-outlined">arrow_forward</span>
    </button>
  </div>
  <div>
    <span class="ux4g-stepper-progress-count">Step 1 of 12</span>
    <span class="ux4g-stepper-progress-label">Step label</span>
    <span class="ux4g-stepper-progress-desc">Description</span>
  </div>
</div>
`;

const INTRO_SHOWCASE_HTML = `
    <div class="ux4g-d-grid ux4g-gap-l">
        <div>
            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Stepper Showcase</h3>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-l">A quick side-by-side view of the primary horizontal, bottom-line, and vertical stepper patterns.</p>
            <div class="ux4g-d-grid ux4g-gap-l">
                ${STEPPER_DEFAULT_HTML}
                ${STEPPER_FILL_BOTTOM_LINE_HTML}
                ${STEPPER_VERTICAL_STATUS_HTML}
            </div>
        </div>
        <div id="class-reference">
            <div class="ux4g-mb-l">
                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">CSS Class Reference</h3>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Core layout and state classes used to compose the showcased Stepper variants.</p>
            </div>
            <div class="ux4g-d-grid ux4g-grid-auto-fit-300 ux4g-gap-l">
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-bg-neutral-soft ux4g-p-m ux4g-bb ux4g-border-neutral-emphasis">
                        <span class="ux4g-label-m-strong ux4g-text-neutral-primary">Layout Classes</span>
                    </div>
                    <div class="ux4g-bg-white">
                        <table class="ux4g-table ux4g-table-divider">
                            <tbody>
                                <tr>
                                    <td><code>ux4g-stepper</code></td>
                                    <td>Main stepper wrapper</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-horizontal</code></td>
                                    <td>Horizontal layout</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-horizontal">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-vertical</code></td>
                                    <td>Vertical layout</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-vertical">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-small</code></td>
                                    <td>Small horizontal size</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-small">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-s</code></td>
                                    <td>Small vertical size</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-s">Copy</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-bg-neutral-soft ux4g-p-m ux4g-bb ux4g-border-neutral-emphasis">
                        <span class="ux4g-label-m-strong ux4g-text-neutral-primary">State Classes</span>
                    </div>
                    <div class="ux4g-bg-white">
                        <table class="ux4g-table ux4g-table-divider">
                            <tbody>
                                <tr>
                                    <td><code>ux4g-stepper-done</code></td>
                                    <td>Completed step connector state</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-done">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-completed</code></td>
                                    <td>Completed step styling</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-completed">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-step-pending</code></td>
                                    <td>Pending step styling</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-step-pending">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-warning-icon</code></td>
                                    <td>Warning icon treatment</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-warning-icon">Copy</button></td>
                                </tr>
                                <tr>
                                    <td><code>ux4g-stepper-bottom-line-fill</code></td>
                                    <td>Filled bottom line progress</td>
                                    <td class="ux4g-text-right"><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-xs copy-class-btn" data-copy="ux4g-stepper-bottom-line-fill">Copy</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <script>
                (function() {
                    const container = document.getElementById('class-reference');
                    if (!container) return;
                    container.querySelectorAll('.copy-class-btn').forEach((button) => {
                        button.onclick = () => {
                            const value = button.getAttribute('data-copy');
                            navigator.clipboard.writeText(value).then(() => {
                                const original = button.textContent;
                                button.textContent = 'Copied';
                                setTimeout(() => {
                                    button.textContent = original;
                                }, 2000);
                            });
                        };
                    });
                })();
            </script>
        </div>
    </div>
`;

export const Introduction = () => `
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
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Stepper</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                    Steppers are flexible and extensible components for indicating progress across multi-step journeys. They include options for horizontal, aligned, bottom-line, vertical, and pagination patterns.
                </p>
            </div>
        </div>
    </section>
    <section class="ux4g-bg-neutral-soft ux4g-py-2xl">
        <div class="ux4g-px-m">
            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-xl ux4g-shadow-l1 ux4g-p-xl">
            ${INTRO_SHOWCASE_HTML}
            </div>
        </div>
    </section>
`;

export const HorizontalSteppers = () => `
    ${getHeroHeader('Stepper', 'Horizontal stepper patterns for compact progress summaries and detailed step-by-step flows.')}
    ${renderStorySection(renderDemoCodeBlock(
            'stepper-horizontal',
            'Horizontal Steppers',
            'Small, compact, and detailed horizontal steppers for simple status tracking and fuller journey guidance.',
            `<div class="ux4g-d-grid ux4g-gap-xl">
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Compact Progress</h3>
                    ${STEPPER_SMALL_HTML}
                </div>
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">No Label Variant</h3>
                    ${STEPPER_NO_LABEL_HTML}
                </div>
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Detailed Journey</h3>
                    ${STEPPER_DEFAULT_HTML}
                </div>
            </div>`,
            false,
            `${STEPPER_SMALL_CLEAN_CODE}\n\n${STEPPER_DEFAULT_CLEAN_CODE}`
        ))}
`;

export const AlignedHorizontalSteppers = () => `
    ${getHeroHeader('Stepper', 'Aligned horizontal steppers that emphasize balance, labels, and scan-friendly connectors.')}
    ${renderStorySection(renderDemoCodeBlock(
            'stepper-aligned',
            'Aligned Horizontal Steppers',
            'Center-line and left-line compositions for layouts where label alignment matters as much as progress state.',
            `<div class="ux4g-d-grid ux4g-gap-xl">
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Center Line Layout</h3>
                    ${STEPPER_CENTER_HTML}
                </div>
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Left Line Layout</h3>
                    ${STEPPER_LEFT_HTML}
                </div>
            </div>`,
            false,
            STEPPER_ALIGNED_CLEAN_CODE
        ))}
`;

export const BottomLineSteppers = () => `
    ${getHeroHeader('Stepper', 'Bottom-line stepper variants for progress-heavy interfaces with stronger linear emphasis.')}
    ${renderStorySection(renderDemoCodeBlock(
            'stepper-bottom-line',
            'Bottom Line Steppers',
            'Bottom-line steppers with standard and filled progress treatments for denser workflow surfaces.',
            `<div class="ux4g-d-grid ux4g-gap-xl">
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Center Bottom Line</h3>
                    ${STEPPER_BOTTOM_LINE_HTML}
                </div>
                <div>
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Filled Bottom Line</h3>
                    ${STEPPER_FILL_BOTTOM_LINE_HTML}
                </div>
            </div>`,
            false,
            STEPPER_BOTTOM_LINE_CLEAN_CODE
        ))}
`;

export const VerticalSteppers = () => `
    ${getHeroHeader('Stepper', 'Vertical steppers for longer task flows where supporting context and status need more room.')}
    ${renderStorySection(renderDemoCodeBlock(
            'stepper-vertical',
            'Vertical Steppers',
            'Vertical patterns ranging from minimal labels to full label, description, and status stacks.',
            `<div class="ux4g-d-grid ux4g-gap-xl">
                    <div>
                        <h3 class="ux4g-body-l-strong ux4g-mb-s">Label Only</h3>
                        ${STEPPER_VERTICAL_HTML}
                    </div>
                    <div>
                        <h3 class="ux4g-body-l-strong ux4g-mb-s">Label With Description</h3>
                        ${STEPPER_VERTICAL_DESCRIPTION_HTML}
                    </div>
                    <div>
                        <h3 class="ux4g-body-l-strong ux4g-mb-s">Label, Description, And Status</h3>
                        ${STEPPER_VERTICAL_STATUS_HTML}
                    </div>
                </div>`,
                false,
                STEPPER_VERTICAL_CLEAN_CODE
        ))}
`;

export const PaginationSteppers = () => `
    ${getHeroHeader('Stepper', 'Pagination-style progress variants for guided flows, forms, and compact step tracking.')}
    ${renderStorySection(renderDemoCodeBlock(
            'stepper-pagination',
            'Stepper Pagination',
            'Pagination-style progress bars for compact, action-driven step flows.',
            STEPPER_PAGINATION_HTML,
            false,
            STEPPER_PAGINATION_CLEAN_CODE
        ))}
`;
