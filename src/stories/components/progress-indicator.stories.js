/**
 * Progress Indicator Component Stories
 * 
 * Showcasing linear bars, circular indicators, and half-circle indicators.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Progress Indicator',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Progress Indicator covers linear bars, circular indicators, and half-circle indicators with sharp and rounded treatments across supported sizes and label placements.',
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

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);

    const reactCode = htmlToJsx(displayCode, 'ProgressIndicator');
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
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
                    const htmlCode = \`${displayCode.replace(/\`/g, '\\\\\`').replace(/\\$/g, '\\\\$')}\`;
                    const reactCode = \`${reactCode.replace(/\`/g, '\\\\\`').replace(/\\$/g, '\\\\$')}\`;
                    const angularCode = \`${angularCode.replace(/\`/g, '\\\\\`').replace(/\\$/g, '\\\\$')}\`;
                    
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

const PROGRESS_BAR_SHARP_OUTSIDE_HTML = `<div class="ux4g-progress-variant-stack-compact">
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="outside" data-ux-progress="0" role="progressbar" aria-label="sharp outside bar 0 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 0%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>0%</span>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="outside" data-ux-progress="10" role="progressbar" aria-label="sharp outside bar 10 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 10%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>10%</span>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="outside" data-ux-progress="50" role="progressbar" aria-label="sharp outside bar 50 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 50%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>50%</span>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="outside" data-ux-progress="100" role="progressbar" aria-label="sharp outside bar 100 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 100%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>100%</span>
    </article>
</div>`;
const PROGRESS_BAR_SHARP_INSIDE_HTML = `<div class="ux4g-progress-variant-stack-compact">
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="inside" data-ux-progress="0" role="progressbar" aria-label="sharp inside bar 0 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 0%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>0%</span></div>
        </div>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="inside" data-ux-progress="10" role="progressbar" aria-label="sharp inside bar 10 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 10%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>10%</span></div>
        </div>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="inside" data-ux-progress="50" role="progressbar" aria-label="sharp inside bar 50 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 50%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>50%</span></div>
        </div>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="sharp" data-ux-label-placement="inside" data-ux-progress="100" role="progressbar" aria-label="sharp inside bar 100 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 100%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>100%</span></div>
        </div>
    </article>
</div>`;
const PROGRESS_BAR_ROUNDED_OUTSIDE_HTML = `<div class="ux4g-progress-variant-stack-compact">
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="outside" data-ux-progress="0" role="progressbar" aria-label="rounded outside bar 0 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 0%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>0%</span>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="outside" data-ux-progress="10" role="progressbar" aria-label="rounded outside bar 10 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 10%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>10%</span>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="outside" data-ux-progress="50" role="progressbar" aria-label="rounded outside bar 50 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 50%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>50%</span>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="outside" data-ux-progress="100" role="progressbar" aria-label="rounded outside bar 100 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 100%"></div>
        </div><span class="ux4g-label-s-strong" data-ux-progress-label>100%</span>
    </article>
</div>`;
const PROGRESS_BAR_ROUNDED_INSIDE_HTML = `<div class="ux4g-progress-variant-stack-compact">
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="inside" data-ux-progress="0" role="progressbar" aria-label="rounded inside bar 0 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 0%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>0%</span></div>
        </div>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="inside" data-ux-progress="10" role="progressbar" aria-label="rounded inside bar 10 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 10%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>10%</span></div>
        </div>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="inside" data-ux-progress="50" role="progressbar" aria-label="rounded inside bar 50 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 50%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>50%</span></div>
        </div>
    </article>
    <article class="ux4g-progress-bar" data-ux-progress-bar data-ux-shape="rounded" data-ux-label-placement="inside" data-ux-progress="100" role="progressbar" aria-label="rounded inside bar 100 percent">
        <div class="ux4g-progress-bar-track">
            <div class="ux4g-progress-bar-fill" style="width: 100%"><span class="ux4g-label-s-strong ux4g-text-white" data-ux-progress-label>100%</span></div>
        </div>
    </article>
</div>`;

const PROGRESS_CIRCLE_INSIDE_HTML = `<div class="ux4g-progress-circle-size-row">
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">XS</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="xs" data-ux-label-placement="inside" data-ux-progress="50" role="progressbar" aria-label="xs sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                  <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-l-strong" data-ux-progress-label>50%</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">S</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="s" data-ux-label-placement="inside" data-ux-progress="50" role="progressbar" aria-label="s sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                  <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">M</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="m" data-ux-label-placement="inside" data-ux-progress="50" role="progressbar" aria-label="m sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                  <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">L</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="l" data-ux-label-placement="inside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="l sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">XL</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="xl" data-ux-label-placement="inside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="xl sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">2XL</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="2xl" data-ux-label-placement="inside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="2xl sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <span class="ux4g-progress-size-label ux4g-label-m-default">3XL</span>
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="3xl" data-ux-label-placement="inside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="3xl sharp circle inside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                                <div class="ux4g-progress-circle-value-wrap">
                                    <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                                </div>
                            </div>
                        </article>
                    </div>
                    </div>`;
const PROGRESS_CIRCLE_OUTSIDE_HTML = `<div class="ux4g-progress-circle-size-row">
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="xs" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="xs sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="s" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="s sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="m" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="m sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="l" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="l sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="xl" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="xl sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="2xl" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="2xl sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    <div class="ux4g-progress-size-demo">
                        <article class="ux4g-progress-circle" data-ux-progress-circle data-ux-shape="sharp" data-ux-size="3xl" data-ux-label-placement="outside" data-ux-progress="50" data-ux-description="Description" role="progressbar" aria-label="3xl sharp circle outside 50 percent">
                            <div class="ux4g-progress-circle-indicator">
                                <span class="ux4g-progress-circle-ring"></span>
                            </div>
                            <div class="ux4g-progress-circle-copy">
                                <span class="ux4g-label-xl-strong" data-ux-progress-label>50%</span>
                                <p class="ux4g-body-s-default ux4g-text-neutral-tertiary" data-ux-progress-desc>Description</p>
                            </div>
                        </article>
                    </div>
                    </div>`;
const PROGRESS_HALF_CIRCLE_SHARP_HTML = `<div class="ux4g-progress-variant-stack">
                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size S</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="sharp"
                                    data-ux-size="s" data-ux-progress="50" data-ux-description="Description"
                                    role="progressbar" aria-label="sharp half circle size s 50 percent"></article>
                            </div>

                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size M</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="sharp"
                                    data-ux-size="m" data-ux-progress="50" data-ux-description="Description"
                                    data-ux-start-label="0%" data-ux-end-label="100%" role="progressbar"
                                    aria-label="sharp half circle size m 50 percent"></article>
                            </div>

                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size L</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="sharp"
                                    data-ux-size="l" data-ux-progress="50" data-ux-description="Description"
                                    data-ux-start-label="0%" data-ux-end-label="100%" role="progressbar"
                                    aria-label="sharp half circle size l 50 percent"></article>
                            </div>

                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size XL</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="sharp"
                                    data-ux-size="xl" data-ux-progress="50" data-ux-description="Description"
                                    data-ux-start-label="0%" data-ux-end-label="100%" role="progressbar"
                                    aria-label="sharp half circle size xl 50 percent"></article>
                            </div>
                        </div>`;
const PROGRESS_HALF_CIRCLE_ROUNDED_HTML = `<div class="ux4g-progress-variant-stack">
                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size S</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="rounded"
                                    data-ux-size="s" data-ux-progress="50" data-ux-description="Description"
                                    role="progressbar" aria-label="rounded half circle size s 50 percent"></article>
                            </div>

                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size M</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="rounded"
                                    data-ux-size="m" data-ux-progress="50" data-ux-description="Description"
                                    data-ux-start-label="0%" data-ux-end-label="100%" role="progressbar"
                                    aria-label="rounded half circle size m 50 percent"></article>
                            </div>

                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size L</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="rounded"
                                    data-ux-size="l" data-ux-progress="50" data-ux-description="Description"
                                    data-ux-start-label="0%" data-ux-end-label="100%" role="progressbar"
                                    aria-label="rounded half circle size l 50 percent"></article>
                            </div>

                            <div class="ux4g-progress-size-demo">
                                <span class="ux4g-progress-size-label ux4g-label-m-default">Size XL</span>
                                <article class="ux4g-progress-half" data-ux-progress-half data-ux-shape="rounded"
                                    data-ux-size="xl" data-ux-progress="50" data-ux-description="Description"
                                    data-ux-start-label="0%" data-ux-end-label="100%" role="progressbar"
                                    aria-label="rounded half circle size xl 50 percent"></article>
                            </div>
                        </div>`;

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Progress Indicators</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Progress Indicators display the length of a process or convey an indeterminate state. They come in linear bars, full circles, and half circles with sharp and rounded variants.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various progress indicators including bars, circles, and half circles.</p>
                    
                    <div class="ux4g-progress-showcase">
                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Bar (Sharp) - Outside</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Sharp bars with outside label placement.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_BAR_SHARP_OUTSIDE_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Bar (Sharp) - Inside</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Sharp bars with inside label placement.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_BAR_SHARP_INSIDE_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Bar (Rounded) - Outside</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Rounded bars with outside label placement.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_BAR_ROUNDED_OUTSIDE_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Bar (Rounded) - Inside</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Rounded bars with inside label placement.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_BAR_ROUNDED_INSIDE_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Circle (Inside)</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Rings across all Figma sizes with inside label placement.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_CIRCLE_INSIDE_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Circle (Outside)</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Rings across all Figma sizes with outside label placement.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_CIRCLE_OUTSIDE_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Half Circle (Sharp)</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Half-circle indicators with sharp treatment.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_HALF_CIRCLE_SHARP_HTML}
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-progress-group ux4g-mb-2xl">
                            <div class="ux4g-mb-m">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">Progress Half Circle (Rounded)</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-m-none">Half-circle indicators with rounded treatment.</p>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    ${PROGRESS_HALF_CIRCLE_ROUNDED_HTML}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class & Data Attributes Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant data attributes for Progress Indicators.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Variant Attributes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Component Roles</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Progress Bar</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-progress-bar</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="data-ux-progress-bar"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Progress Circle</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-progress-circle</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="data-ux-progress-circle"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Progress Half Circle</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-progress-half</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="data-ux-progress-half"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                              <tr>
                                                  <td class="ux4g-p-l">
                                                      <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                          <div class="ux4g-d-flex ux4g-flex-col">
                                                              <span class="ux4g-label-s-strong">Progress Value</span>
                                                              <code class="ux4g-text-primary ux4g-fs-12">data-ux-progress="0-100"</code>
                                                          </div>
                                                          <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text='data-ux-progress="0-100"'><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                      </div>
                                                  </td>
                                              </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Shapes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Shapes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Sharp</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-shape="sharp"</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text='data-ux-shape="sharp"'><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Rounded</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-shape="rounded"</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text='data-ux-shape="rounded"'><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Label Placement -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Label Placement</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Outside</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-label-placement="outside"</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text='data-ux-label-placement="outside"'><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">Inside</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">data-ux-label-placement="inside"</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text='data-ux-label-placement="inside"'><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
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
    parameters: { docs: { disable: true } },
};

export const ProgressBars = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Progress Bars', 'Linear bars with inside and outside label placement.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('progress-bars-sharp-outside', 'Progress Bars (Sharp) - Outside', 'Linear bar variants with sharp corners and label placement outside the fill.', PROGRESS_BAR_SHARP_OUTSIDE_HTML)}
                ${renderDemoCodeBlock('progress-bars-sharp-inside', 'Progress Bars (Sharp) - Inside', 'Linear bar variants with sharp corners and label placement inside the fill.', PROGRESS_BAR_SHARP_INSIDE_HTML)}
                ${renderDemoCodeBlock('progress-bars-rounded-outside', 'Progress Bars (Rounded) - Outside', 'Linear bar variants with rounded corners and label placement outside the fill.', PROGRESS_BAR_ROUNDED_OUTSIDE_HTML)}
                ${renderDemoCodeBlock('progress-bars-rounded-inside', 'Progress Bars (Rounded) - Inside', 'Linear bar variants with rounded corners and label placement inside the fill.', PROGRESS_BAR_ROUNDED_INSIDE_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const ProgressCircles = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Progress Circles', 'Full-circle indicators across all supported sizes with both inside and outside label placement.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('progress-circles-inside', 'Progress Circles (Inside Label)', 'Circular progress indicators with inside label placement.', PROGRESS_CIRCLE_INSIDE_HTML)}
                ${renderDemoCodeBlock('progress-circles-outside', 'Progress Circles (Outside Label)', 'Circular progress indicators with outside label placement.', PROGRESS_CIRCLE_OUTSIDE_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const ProgressHalfCircles = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Progress Half Circles', 'Half-circle indicators with centered value copy, and endpoint labels on larger sizes.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('progress-half-circles-sharp', 'Progress Half Circles (Sharp)', 'Half-circle progress indicators with sharp treatment.', PROGRESS_HALF_CIRCLE_SHARP_HTML)}
                ${renderDemoCodeBlock('progress-half-circles-rounded', 'Progress Half Circles (Rounded)', 'Half-circle progress indicators with rounded treatment.', PROGRESS_HALF_CIRCLE_ROUNDED_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
