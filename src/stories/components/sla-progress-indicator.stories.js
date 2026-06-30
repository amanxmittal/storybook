import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Progress SLA Indicator',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'SLA Progress Indicator communicates urgency through circular and linear progress variants with default, warning, error, and success status mapping.',
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

const renderStorySection = (content) => `
    <section class="ux4g-bg-neutral-soft ux4g-py-2xl">
        <div class="ux4g-px-m">
            ${content}
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'SlaProgressIndicator');

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

const SLA_CIRCULAR_HTML = `
    <div class="ux4g-sla-grid ux4g-sla-grid-circular">
        <article class="ux4g-sla-circle ux4g-sla-status-default ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="62" data-ux-days="8" aria-label="Default SLA progress, 8 days left">
            <div class="ux4g-sla-circle-indicator" aria-hidden="true">
                <span class="ux4g-sla-circle-ring"></span>
                <span class="ux4g-sla-circle-track"></span>
                <div class="ux4g-sla-circle-metric">
                    <span class="ux4g-sla-circle-value">8</span>
                    <span class="ux4g-sla-circle-meta">days left</span>
                </div>
            </div>
            <div class="ux4g-sla-circle-copy">
                <span class="ux4g-label-xl-strong">Label</span>
                <p class="ux4g-sla-circle-description ux4g-body-s-default">Description</p>
                <span class="ux4g-tag-tonal-primary ux4g-tag-s">Label</span>
            </div>
        </article>

        <article class="ux4g-sla-circle ux4g-sla-status-warning ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="72" data-ux-days="8" aria-label="Warning SLA progress, 8 days left">
            <div class="ux4g-sla-circle-indicator" aria-hidden="true">
                <span class="ux4g-sla-circle-ring"></span>
                <span class="ux4g-sla-circle-track"></span>
                <div class="ux4g-sla-circle-metric">
                    <span class="ux4g-sla-circle-value">8</span>
                    <span class="ux4g-sla-circle-meta">days left</span>
                </div>
            </div>
            <div class="ux4g-sla-circle-copy">
                <span class="ux4g-label-xl-strong">Label</span>
                <p class="ux4g-sla-circle-description ux4g-body-s-default">Description</p>
                <span class="ux4g-tag-tonal-warning ux4g-tag-s">Label</span>
            </div>
        </article>

        <article class="ux4g-sla-circle ux4g-sla-status-error ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="86" data-ux-days="8" aria-label="Error SLA progress, 8 days left">
            <div class="ux4g-sla-circle-indicator" aria-hidden="true">
                <span class="ux4g-sla-circle-ring"></span>
                <span class="ux4g-sla-circle-track"></span>
                <div class="ux4g-sla-circle-metric">
                    <span class="ux4g-sla-circle-value">8</span>
                    <span class="ux4g-sla-circle-meta">days left</span>
                </div>
            </div>
            <div class="ux4g-sla-circle-copy">
                <span class="ux4g-label-xl-strong">Label</span>
                <p class="ux4g-sla-circle-description ux4g-body-s-default">Description</p>
                <span class="ux4g-tag-tonal-error ux4g-tag-s">Label</span>
            </div>
        </article>

        <article class="ux4g-sla-circle ux4g-sla-status-success ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="100" data-ux-days="8" aria-label="Success SLA progress, 8 days left">
            <div class="ux4g-sla-circle-indicator" aria-hidden="true">
                <span class="ux4g-sla-circle-ring"></span>
                <span class="ux4g-sla-circle-track"></span>
                <div class="ux4g-sla-circle-metric">
                    <span class="ux4g-sla-circle-value">8</span>
                    <span class="ux4g-sla-circle-meta">days left</span>
                </div>
            </div>
            <div class="ux4g-sla-circle-copy">
                <span class="ux4g-label-xl-strong">Label</span>
                <p class="ux4g-sla-circle-description ux4g-body-s-default">Description</p>
                <span class="ux4g-tag-tonal-success ux4g-tag-s">Label</span>
            </div>
        </article>
    </div>
`;

const SLA_LINEAR_HTML = `
    <div class="ux4g-sla-grid ux4g-sla-grid-linear">
        <div class="ux4g-sla-variant-column">
            <span class="ux4g-label-m-default">Sharp</span>
            <div class="ux4g-sla-variant-stack">
                <article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-default" data-ux-sla-linear data-ux-progress="50" aria-label="Default linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>

                <article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-warning" data-ux-sla-linear data-ux-progress="50" aria-label="Warning linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>

                <article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-error" data-ux-sla-linear data-ux-progress="50" aria-label="Error linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>

                <article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-success" data-ux-sla-linear data-ux-progress="50" aria-label="Success linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>
            </div>
        </div>

        <div class="ux4g-sla-variant-column">
            <span class="ux4g-label-m-default">Rounded</span>
            <div class="ux4g-sla-variant-stack">
                <article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-default" data-ux-sla-linear data-ux-progress="50" aria-label="Default rounded linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>

                <article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-warning" data-ux-sla-linear data-ux-progress="50" aria-label="Warning rounded linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>

                <article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-error" data-ux-sla-linear data-ux-progress="50" aria-label="Error rounded linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>

                <article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-success" data-ux-sla-linear data-ux-progress="50" aria-label="Success rounded linear SLA progress at 50 percent">
                    <span class="ux4g-sla-linear-leading" aria-hidden="true"><span class="ux4g-icon-outlined">token</span></span>
                    <div class="ux4g-sla-linear-body">
                        <div class="ux4g-sla-linear-head">
                            <div class="ux4g-sla-linear-title-wrap">
                                <span class="ux4g-label-l-strong ux4g-sla-linear-title">Label</span>
                            </div>
                            <span class="ux4g-body-xs-default ux4g-sla-linear-hint">Hint</span>
                        </div>
                        <div class="ux4g-sla-linear-track" aria-hidden="true">
                            <div class="ux4g-sla-linear-fill"></div>
                        </div>
                        <div class="ux4g-sla-linear-foot"><span class="ux4g-label-s-default ux4g-sla-linear-value">50%</span></div>
                    </div>
                </article>
            </div>
        </div>
    </div>
`;

const SLA_CIRCULAR_CLEAN_CODE = `
<!-- Variant: SLA Circular - Default -->
<article class="ux4g-sla-circle ux4g-sla-status-default ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="62" data-ux-days="8" aria-label="Default SLA progress, 8 days left"></article>

<!-- Variant: SLA Circular - Warning -->
<article class="ux4g-sla-circle ux4g-sla-status-warning ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="72" data-ux-days="8" aria-label="Warning SLA progress, 8 days left"></article>

<!-- Variant: SLA Circular - Error -->
<article class="ux4g-sla-circle ux4g-sla-status-error ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="86" data-ux-days="8" aria-label="Error SLA progress, 8 days left"></article>

<!-- Variant: SLA Circular - Success -->
<article class="ux4g-sla-circle ux4g-sla-status-success ux4g-sla-circle-demo" data-ux-sla-circle data-ux-progress="100" data-ux-days="8" aria-label="Success SLA progress, 8 days left"></article>
`;

const SLA_LINEAR_CLEAN_CODE = `
<!-- Variant: SLA Linear - Sharp - Default -->
<article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-default" data-ux-sla-linear data-ux-progress="50" aria-label="Default linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Sharp - Warning -->
<article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-warning" data-ux-sla-linear data-ux-progress="50" aria-label="Warning linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Sharp - Error -->
<article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-error" data-ux-sla-linear data-ux-progress="50" aria-label="Error linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Sharp - Success -->
<article class="ux4g-sla-linear ux4g-sla-linear-sharp ux4g-sla-status-success" data-ux-sla-linear data-ux-progress="50" aria-label="Success linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Rounded - Default -->
<article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-default" data-ux-sla-linear data-ux-progress="50" aria-label="Default rounded linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Rounded - Warning -->
<article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-warning" data-ux-sla-linear data-ux-progress="50" aria-label="Warning rounded linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Rounded - Error -->
<article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-error" data-ux-sla-linear data-ux-progress="50" aria-label="Error rounded linear SLA progress at 50 percent"></article>

<!-- Variant: SLA Linear - Rounded - Success -->
<article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-success" data-ux-sla-linear data-ux-progress="50" aria-label="Success rounded linear SLA progress at 50 percent"></article>
`;

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('SLA Progress Indicator', 'SLA Progress Indicator provides urgency-based circular and linear progress patterns with shared default, warning, error, and success state mapping.')}
            ${renderStorySection(`
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-xl ux4g-shadow-l1 ux4g-p-xl">
                    <div class="ux4g-d-grid ux4g-gap-l">
                        <div>
                            <h2 class="ux4g-heading-m-strong ux4g-mb-s">Pattern Summary</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-m-none">The SLA indicator source showcase splits into circular urgency summaries and linear progress tracks, both driven by the shared data-ux progress attributes in ux4g.js.</p>
                        </div>
                        ${SLA_CIRCULAR_HTML}
                    </div>
                </div>
            `)}
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const CircularSlaProgress = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('SLA Circular Progress', 'Circular SLA indicators for default, warning, error, and success urgency states with days-left messaging.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock(
                    'sla-circular-progress',
                    'SLA Circular Progress',
                    'Circular SLA progress cards with urgency-specific ring styling, metric labels, and tonal tags.',
                    SLA_CIRCULAR_HTML,
                    false,
                    SLA_CIRCULAR_CLEAN_CODE
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const LinearSlaProgress = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('SLA Linear Progress', 'Sharp and rounded linear SLA tracks that reuse the same urgency mapping across default, warning, error, and success states.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock(
                    'sla-linear-progress',
                    'SLA Linear Progress',
                    'Linear SLA progress variants in sharp and rounded tracks with a leading icon, title, hint, and percentage label.',
                    SLA_LINEAR_HTML,
                    false,
                    SLA_LINEAR_CLEAN_CODE
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
