/**
 * Radio Component Stories
 *
 * Showcasing Radio states, grouping, sizing, labels, and descriptions.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Radio',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Radio buttons let users choose exactly one option from a related set while pairing choices with labels, descriptions, sizing, and validation feedback.',
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

const getReactCode = (html) => htmlToJsx(html, 'Radio');

const escapeCodeForInlineScript = (code) =>
    code
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$')
        .replace(/<\/script>/gi, '<\\/script>');

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
                    const htmlCode = \`${escapeCodeForInlineScript(displayCode)}\`;
                    const reactCode = \`${escapeCodeForInlineScript(reactCode)}\`;
                    const angularCode = \`${escapeCodeForInlineScript(angularCode)}\`;
                    
                    const initHandlers = () => {
                        const section = document.getElementById('section-' + blockId);
                        if (!section) {
                            setTimeout(initHandlers, 100);
                            return;
                        }
                        
                        const toggleBtn = section.querySelector('.toggle-code') || document.querySelector('[data-target="code-' + blockId + '"]');
                        const codeArea = document.getElementById('code-' + blockId);
                        const output = document.getElementById('output-' + blockId);
                        const tabs = document.querySelectorAll('.tab-trigger[data-id="' + blockId + '"]');
                        const copyBtn = section.querySelector('.copy-code') || document.querySelector('.copy-code[data-id="' + blockId + '"]');
                        
                        if (!toggleBtn || !codeArea || !output) {
                            return;
                        }
                        
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
                    };
                    
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initHandlers);
                    } else {
                        initHandlers();
                    }
                })();
            </script>
        </div>
    `;
};

const renderStoryPage = (title, description, content) => `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100 ux4g-o-hidden">
        ${getHeroHeader(title, description)}

        <div class="ux4g-w-100 ux4g-o-hidden ux4g-p-m">
            <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                ${content}
            </div>
        </div>
    </div>
`;

const annotateSectionComments = (sections) =>
    sections.map(({ label, markup }) => `<!-- ${label} -->\n${markup}`).join('\n\n');

const STATES_MATRIX_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-mb-m ux4g-w-100">
        <div></div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">UNCHECKED</div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">CHECKED</div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-mb-m ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Default</div>
        <div>
            <label class="ux4g-radio ux4g-radio-md">
                <input class="ux4g-radio-input" name="r_def_un" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Unchecked</span></div>
                </div>
            </label>
        </div>
        <div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_def_ch" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Checked</span></div>
                </div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-mb-m ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Hover</div>
        <div>
            <label class="ux4g-radio ux4g-radio-md is-hovered">
                <input class="ux4g-radio-input" name="r_hov_un" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Unchecked</span></div>
                </div>
            </label>
        </div>
        <div>
            <label class="ux4g-radio ux4g-radio-md is-hovered">
                <input checked="" class="ux4g-radio-input" name="r_hov_ch" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Checked</span></div>
                </div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-mb-m ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Active</div>
        <div>
            <label class="ux4g-radio ux4g-radio-md is-active">
                <input class="ux4g-radio-input" name="r_act_un" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Unchecked</span></div>
                </div>
            </label>
        </div>
        <div>
            <label class="ux4g-radio ux4g-radio-md is-active">
                <input checked="" class="ux4g-radio-input" name="r_act_ch" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Checked</span></div>
                </div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-mb-m ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Focused</div>
        <div>
            <label class="ux4g-radio ux4g-radio-md is-focused">
                <input class="ux4g-radio-input" name="r_foc_un" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Unchecked</span></div>
                </div>
            </label>
        </div>
        <div>
            <label class="ux4g-radio ux4g-radio-md is-focused">
                <input checked="" class="ux4g-radio-input" name="r_foc_ch" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Checked</span></div>
                </div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-mb-m ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Disabled</div>
        <div>
            <label class="ux4g-radio ux4g-radio-md">
                <input class="ux4g-radio-input" disabled="" name="r_dis_un" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Unchecked</span></div>
                </div>
            </label>
        </div>
        <div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" disabled="" name="r_dis_ch" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Checked</span></div>
                </div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Error</div>
        <div>
            <label class="ux4g-radio ux4g-radio-md ux4g-radio-error">
                <input class="ux4g-radio-input" name="r_err_un" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Unchecked</span></div>
                </div>
            </label>
        </div>
        <div>
            <label class="ux4g-radio ux4g-radio-md ux4g-radio-error">
                <input checked="" class="ux4g-radio-input" name="r_err_ch" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Checked</span></div>
                </div>
            </label>
        </div>
    </div>
</div>
`.trim();

const RADIO_GROUP_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-w-100">
        <label class="ux4g-radio ux4g-radio-md">
            <input class="ux4g-radio-input group-demo-rb" name="r_group" type="radio" value="option1" />
            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            <div class="ux4g-radio-content">
                <div class="ux4g-radio-header"><span class="ux4g-radio-label">Option One</span></div>
                <div class="ux4g-radio-description">
                    <span class="ux4g-radio-desc-icon">
                        <i class="ux4g-icon ux4g-radio-icon">info</i>
                    </span>
                    First option description
                </div>
            </div>
        </label>
        <label class="ux4g-radio ux4g-radio-md">
            <input class="ux4g-radio-input group-demo-rb" name="r_group" type="radio" value="option2" />
            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            <div class="ux4g-radio-content">
                <div class="ux4g-radio-header"><span class="ux4g-radio-label">Option Two</span></div>
                <div class="ux4g-radio-description">
                    <span class="ux4g-radio-desc-icon">
                        <i class="ux4g-icon ux4g-radio-icon">info</i>
                    </span>
                    Second option description
                </div>
            </div>
        </label>
        <label class="ux4g-radio ux4g-radio-md">
            <input checked="" class="ux4g-radio-input group-demo-rb" name="r_group" type="radio" value="option3" />
            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            <div class="ux4g-radio-content">
                <div class="ux4g-radio-header"><span class="ux4g-radio-label">Option Three</span></div>
                <div class="ux4g-radio-description">
                    <span class="ux4g-radio-desc-icon">
                        <i class="ux4g-icon ux4g-radio-icon">info</i>
                    </span>
                    Third option description
                </div>
            </div>
        </label>
    </div>
    <div class="ux4g-mt-m">
        Selected: <span id="rb-selected-val">option3</span>
    </div>
    <script>
        (function () {
            const groupRbs = document.querySelectorAll('.group-demo-rb');
            const rbResult = document.getElementById('rb-selected-val');

            groupRbs.forEach(rb => {
                rb.addEventListener('change', function () {
                    if (this.checked) {
                        rbResult.textContent = this.value;
                    }
                });
            });
        })();
    </script>
</div>
`.trim();

const SIZES_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Large</div>
            <label class="ux4g-radio ux4g-radio-lg">
                <input class="ux4g-radio-input" name="r_size_lg" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header">
                        <span class="ux4g-radio-label">Label</span>
                        <span class="ux4g-radio-required">*</span>
                        <span class="ux4g-radio-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-radio-description">
                        <span class="ux4g-radio-desc-icon">
                            <i class="ux4g-icon ux4g-radio-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Medium</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_size_md" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header">
                        <span class="ux4g-radio-label">Label</span>
                        <span class="ux4g-radio-required">*</span>
                        <span class="ux4g-radio-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-radio-description">
                        <span class="ux4g-radio-desc-icon">
                            <i class="ux4g-icon ux4g-radio-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Small</div>
            <label class="ux4g-radio ux4g-radio-sm">
                <input class="ux4g-radio-input" name="r_size_sm" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header">
                        <span class="ux4g-radio-label">Label</span>
                        <span class="ux4g-radio-required">*</span>
                        <span class="ux4g-radio-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-radio-description">
                        <span class="ux4g-radio-desc-icon">
                            <i class="ux4g-icon ux4g-radio-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>
`.trim();

const LABEL_VARIANTS_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Full (all elements)</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_lbl_var_1" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header">
                        <span class="ux4g-radio-label">Label</span>
                        <span class="ux4g-radio-required">*</span>
                        <span class="ux4g-radio-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-radio-description">
                        <span class="ux4g-radio-desc-icon">
                            <i class="ux4g-icon ux4g-radio-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Label + required</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_lbl_var_2" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header">
                        <span class="ux4g-radio-label">Label</span>
                        <span class="ux4g-radio-required">*</span>
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Label only</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_lbl_var_3" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header">
                        <span class="ux4g-radio-label">Label</span>
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Control only</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_lbl_var_4" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            </label>
        </div>
    </div>
</div>
`.trim();

const DESCRIPTION_VARIANTS_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Helper</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input class="ux4g-radio-input" name="r_desc_1" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Label</span></div>
                    <div class="ux4g-radio-description ux4g-radio-desc-helper">
                        <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-helper">
                            <i class="ux4g-icon ux4g-radio-icon">info</i>
                        </span>
                        Helper text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Error</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input class="ux4g-radio-input" name="r_desc_2" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Label</span></div>
                    <div class="ux4g-radio-description ux4g-radio-desc-error">
                        <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-error">
                            <i class="ux4g-icon ux4g-radio-icon">error</i>
                        </span>
                        Error text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Warning</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_desc_3" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Label</span></div>
                    <div class="ux4g-radio-description ux4g-radio-desc-warning">
                        <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-warning">
                            <i class="ux4g-icon ux4g-radio-icon">warning</i>
                        </span>
                        Warning text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Success</div>
            <label class="ux4g-radio ux4g-radio-md">
                <input checked="" class="ux4g-radio-input" name="r_desc_4" type="radio" />
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                <div class="ux4g-radio-content">
                    <div class="ux4g-radio-header"><span class="ux4g-radio-label">Label</span></div>
                    <div class="ux4g-radio-description ux4g-radio-desc-success">
                        <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-success">
                            <i class="ux4g-icon ux4g-radio-icon">check_circle</i>
                        </span>
                        Success text
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>
`.trim();

const STATES_MATRIX_CLEAN_CODE = `
/* Variant: Radio State - Default (Unchecked) */
<label class="ux4g-radio ux4g-radio-md">
  <input class="ux4g-radio-input" name="r_def_un" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Unchecked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Default (Checked) */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_def_ch" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Checked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Hover (Unchecked) */
<label class="ux4g-radio ux4g-radio-md is-hovered">
  <input class="ux4g-radio-input" name="r_hov_un" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Unchecked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Hover (Checked) */
<label class="ux4g-radio ux4g-radio-md is-hovered">
  <input checked class="ux4g-radio-input" name="r_hov_ch" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Checked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Active (Unchecked) */
<label class="ux4g-radio ux4g-radio-md is-active">
  <input class="ux4g-radio-input" name="r_act_un" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Unchecked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Active (Checked) */
<label class="ux4g-radio ux4g-radio-md is-active">
  <input checked class="ux4g-radio-input" name="r_act_ch" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Checked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Focused (Unchecked) */
<label class="ux4g-radio ux4g-radio-md is-focused">
  <input class="ux4g-radio-input" name="r_foc_un" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Unchecked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Focused (Checked) */
<label class="ux4g-radio ux4g-radio-md is-focused">
  <input checked class="ux4g-radio-input" name="r_foc_ch" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Checked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Disabled (Unchecked) */
<label class="ux4g-radio ux4g-radio-md">
  <input class="ux4g-radio-input" disabled name="r_dis_un" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Unchecked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Disabled (Checked) */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" disabled name="r_dis_ch" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Checked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Error (Unchecked) */
<label class="ux4g-radio ux4g-radio-md ux4g-radio-error">
  <input class="ux4g-radio-input" name="r_err_un" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Unchecked</span>
    </div>
  </div>
</label>

/* Variant: Radio State - Error (Checked) */
<label class="ux4g-radio ux4g-radio-md ux4g-radio-error">
  <input checked class="ux4g-radio-input" name="r_err_ch" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Checked</span>
    </div>
  </div>
</label>
`.trim();

const RADIO_GROUP_CLEAN_CODE = `
/* Variant: Radio Group - Option One */
<label class="ux4g-radio ux4g-radio-md">
  <input class="ux4g-radio-input group-demo-rb" name="r_group" type="radio" value="option1" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Option One</span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      First option description
    </div>
  </div>
</label>

/* Variant: Radio Group - Option Two */
<label class="ux4g-radio ux4g-radio-md">
  <input class="ux4g-radio-input group-demo-rb" name="r_group" type="radio" value="option2" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Option Two</span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Second option description
    </div>
  </div>
</label>

/* Variant: Radio Group - Option Three */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input group-demo-rb" name="r_group" type="radio" value="option3" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Option Three</span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Third option description
    </div>
  </div>
</label>
`.trim();

const SIZES_CLEAN_CODE = `
/* Variant: Radio Size - Large */
<label class="ux4g-radio ux4g-radio-lg">
  <input class="ux4g-radio-input" name="r_size_lg" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
      <span class="ux4g-radio-required">*</span>
      <span class="ux4g-radio-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Variant: Radio Size - Medium */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_size_md" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
      <span class="ux4g-radio-required">*</span>
      <span class="ux4g-radio-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Variant: Radio Size - Small */
<label class="ux4g-radio ux4g-radio-sm">
  <input class="ux4g-radio-input" name="r_size_sm" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
      <span class="ux4g-radio-required">*</span>
      <span class="ux4g-radio-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>
`.trim();

const LABEL_VARIANTS_CLEAN_CODE = `
/* Variant: Radio Label - Full (label + icon + description) */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_lbl_var_1" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
      <span class="ux4g-radio-required">*</span>
      <span class="ux4g-radio-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-radio-description">
      <span class="ux4g-radio-desc-icon">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Variant: Radio Label - Label + required */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_lbl_var_2" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
      <span class="ux4g-radio-required">*</span>
    </div>
  </div>
</label>

/* Variant: Radio Label - Label only */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_lbl_var_3" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
    </div>
  </div>
</label>

/* Variant: Radio Label - Control only */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_lbl_var_4" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
</label>
`.trim();

const DESCRIPTION_VARIANTS_CLEAN_CODE = `
/* Variant: Radio Description - Helper */
<label class="ux4g-radio ux4g-radio-md">
  <input class="ux4g-radio-input" name="r_desc_1" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
    </div>
    <div class="ux4g-radio-description ux4g-radio-desc-helper">
      <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-helper">
        <i class="ux4g-icon ux4g-radio-icon">info</i>
      </span>
      Helper text
    </div>
  </div>
</label>

/* Variant: Radio Description - Error */
<label class="ux4g-radio ux4g-radio-md">
  <input class="ux4g-radio-input" name="r_desc_2" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
    </div>
    <div class="ux4g-radio-description ux4g-radio-desc-error">
      <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-error">
        <i class="ux4g-icon ux4g-radio-icon">error</i>
      </span>
      Error text
    </div>
  </div>
</label>

/* Warning */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_desc_3" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
    </div>
    <div class="ux4g-radio-description ux4g-radio-desc-warning">
      <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-warning">
        <i class="ux4g-icon ux4g-radio-icon">warning</i>
      </span>
      Warning text
    </div>
  </div>
</label>

/* Success */
<label class="ux4g-radio ux4g-radio-md">
  <input checked class="ux4g-radio-input" name="r_desc_4" type="radio" />
  <div class="ux4g-radio-control">
    <span class="ux4g-radiomark"></span>
  </div>
  <div class="ux4g-radio-content">
    <div class="ux4g-radio-header">
      <span class="ux4g-radio-label">Label</span>
    </div>
    <div class="ux4g-radio-description ux4g-radio-desc-success">
      <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-success">
        <i class="ux4g-icon ux4g-radio-icon">check_circle</i>
      </span>
      Success text
    </div>
  </div>
</label>
`.trim();

const getStoryParameters = (code) => ({
    docs: {
        disable: true,
        source: { code: formatCode(code) },
    },
});

const RADIO_INTRO_CLASS_ROWS = [
    ['Base', 'ux4g-radio'],
    ['Input', 'ux4g-radio-input'],
    ['Control', 'ux4g-radio-control'],
    ['Mark', 'ux4g-radiomark'],
    ['Content', 'ux4g-radio-content'],
    ['Header', 'ux4g-radio-header'],
    ['Label', 'ux4g-radio-label'],
    ['Description', 'ux4g-radio-description'],
    ['Required', 'ux4g-radio-required'],
    ['Icon', 'ux4g-radio-icon'],
    ['Helper', 'ux4g-radio-desc-helper'],
    ['Error', 'ux4g-radio-desc-error'],
    ['Warning', 'ux4g-radio-desc-warning'],
    ['Success', 'ux4g-radio-desc-success'],
    ['State', 'ux4g-radio-error'],
];

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
        ${getHeroHeader('Radio', 'Radio buttons support single-choice selection, validation feedback, descriptive content, and grouped options for forms and service flows.')}

        <div class="ux4g-p-l ux4g-py-2xl">
            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-mb-2xl">
                <div class="ux4g-card ux4g-card-solid">
                    <div class="ux4g-card-header">
                        <h2 class="ux4g-heading-m-strong">Key Behaviors</h2>
                    </div>
                    <div class="ux4g-card-body ux4g-flex-col">
                        <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports exclusive selection within a related set of options.</li>
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Pairs the control with labels, required markers, trailing icons, and descriptive guidance.</li>
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Handles hover, active, focused, disabled, and error states without changing the component anatomy.</li>
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Scales from standalone radios to descriptive groups used in preference and settings flows.</li>
                        </ul>
                    </div>
                </div>

                <div class="ux4g-card ux4g-card-outline">
                    <div class="ux4g-card-header">
                        <h2 class="ux4g-heading-m-strong">Available Stories</h2>
                    </div>
                    <div class="ux4g-card-body ux4g-flex-col">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-primary-soft">
                                <div class="ux4g-label-m-strong ux4g-text-primary">States Matrix</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Default, hover, active, focused, disabled, and error permutations across unchecked and checked radios.</div>
                            </div>
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                <div class="ux4g-label-m-strong ux4g-text-info">Radio Group</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Three related options with descriptions and a synced selected-value readout.</div>
                            </div>
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                <div class="ux4g-label-m-strong ux4g-text-success">Sizes and Labels</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Large, medium, and small controls plus label-density variants from full metadata to control-only.</div>
                            </div>
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                <div class="ux4g-label-m-strong ux4g-text-warning">Descriptions</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Helper, error, warning, and success message treatments using radio-specific description classes.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ux4g-my-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Visual Showcase</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">A compact tour of the radio patterns used across the source-backed stories.</p>
            </div>

            <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-w-100">
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-p-xl">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">States</h3>
                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-l">
                                <label class="ux4g-radio ux4g-radio-md">
                                    <input class="ux4g-radio-input" name="intro-radio-state" type="radio" />
                                    <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                    <div class="ux4g-radio-content">
                                        <div class="ux4g-radio-header"><span class="ux4g-radio-label">Default</span></div>
                                    </div>
                                </label>
                                <label class="ux4g-radio ux4g-radio-md is-hovered">
                                    <input checked="" class="ux4g-radio-input" name="intro-radio-state" type="radio" />
                                    <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                    <div class="ux4g-radio-content">
                                        <div class="ux4g-radio-header"><span class="ux4g-radio-label">Hover checked</span></div>
                                    </div>
                                </label>
                                <label class="ux4g-radio ux4g-radio-md ux4g-radio-error">
                                    <input class="ux4g-radio-input" name="intro-radio-error" type="radio" />
                                    <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                    <div class="ux4g-radio-content">
                                        <div class="ux4g-radio-header"><span class="ux4g-radio-label">Error</span></div>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-p-xl">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Label Variants</h3>
                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
                                <label class="ux4g-radio ux4g-radio-md">
                                    <input checked="" class="ux4g-radio-input" name="intro-radio-density" type="radio" />
                                    <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                    <div class="ux4g-radio-content">
                                        <div class="ux4g-radio-header">
                                            <span class="ux4g-radio-label">Label</span>
                                            <span class="ux4g-radio-required">*</span>
                                            <span class="ux4g-radio-icon">
                                                <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                                            </span>
                                        </div>
                                        <div class="ux4g-radio-description">
                                            <span class="ux4g-radio-desc-icon">
                                                <i class="ux4g-icon ux4g-radio-icon">info</i>
                                            </span>
                                            Description
                                        </div>
                                    </div>
                                </label>
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m">
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input class="ux4g-radio-input" name="intro-radio-density" type="radio" />
                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        <div class="ux4g-radio-content">
                                            <div class="ux4g-radio-header"><span class="ux4g-radio-label">Label only</span></div>
                                        </div>
                                    </label>
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input class="ux4g-radio-input" name="intro-radio-density-control" type="radio" />
                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-p-xl">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Descriptions and Group Usage</h3>
                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m">
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input class="ux4g-radio-input" name="intro-radio-message" type="radio" />
                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        <div class="ux4g-radio-content">
                                            <div class="ux4g-radio-header"><span class="ux4g-radio-label">Helper</span></div>
                                            <div class="ux4g-radio-description ux4g-radio-desc-helper">
                                                <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-helper">
                                                    <i class="ux4g-icon ux4g-radio-icon">info</i>
                                                </span>
                                                Helper text
                                            </div>
                                        </div>
                                    </label>
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input checked="" class="ux4g-radio-input" name="intro-radio-message" type="radio" />
                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        <div class="ux4g-radio-content">
                                            <div class="ux4g-radio-header"><span class="ux4g-radio-label">Success</span></div>
                                            <div class="ux4g-radio-description ux4g-radio-desc-success">
                                                <span class="ux4g-radio-desc-icon ux4g-radio-desc-icon-success">
                                                    <i class="ux4g-icon ux4g-radio-icon">check_circle</i>
                                                </span>
                                                Success text
                                            </div>
                                        </div>
                                    </label>
                                </div>
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m">
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input class="ux4g-radio-input" name="intro-radio-group" type="radio" value="option1" />
                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        <div class="ux4g-radio-content">
                                            <div class="ux4g-radio-header"><span class="ux4g-radio-label">Option One</span></div>
                                            <div class="ux4g-radio-description">
                                                <span class="ux4g-radio-desc-icon">
                                                    <i class="ux4g-icon ux4g-radio-icon">info</i>
                                                </span>
                                                First option description
                                            </div>
                                        </div>
                                    </label>
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input checked="" class="ux4g-radio-input" name="intro-radio-group" type="radio" value="option3" />
                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        <div class="ux4g-radio-content">
                                            <div class="ux4g-radio-header"><span class="ux4g-radio-label">Option Three</span></div>
                                            <div class="ux4g-radio-description">
                                                <span class="ux4g-radio-desc-icon">
                                                    <i class="ux4g-icon ux4g-radio-icon">info</i>
                                                </span>
                                                Third option description
                                            </div>
                                        </div>
                                    </label>
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
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy the radio classes used by the showcased source-backed variants.</p>
                </div>

                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Radio Classes</h4>
                    </div>
                    <div class="ux4g-p-none">
                        <div class="ux4g-table-container">
                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                <thead>
                                    <tr class="ux4g-bg-neutral-soft">
                                        <th class="ux4g-label-s-strong ux4g-p-l">Purpose</th>
                                        <th class="ux4g-label-s-strong ux4g-p-l">Class</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    ${RADIO_INTRO_CLASS_ROWS.map(([label, className]) => `
                                        <tr>
                                            <td class="ux4g-p-l ux4g-label-s-default">${label}</td>
                                            <td class="ux4g-p-l">
                                                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                    <code class="ux4g-text-primary">${className}</code>
                                                    <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm" onclick="navigator.clipboard.writeText('.${className}')">
                                                        <span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span>
                                                    </button>
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
`;

export const Introduction = {
    render: () => INTRODUCTION_CONTENT,
    parameters: {
        docs: { disable: true },
    },
};

export const StatesMatrix = () => {
    return renderStoryPage(
        'Radio States Matrix',
        'Reference every core radio interaction state across unchecked and checked combinations.',
        renderDemoCodeBlock(
            'radio-states-matrix',
            'States Matrix',
            'A compact matrix for default, hover, active, focused, disabled, and error behavior.',
            STATES_MATRIX_HTML,
            false,
            STATES_MATRIX_CLEAN_CODE
        )
    );
};

export const RadioGroup = () => {
    return renderStoryPage(
        'Radio Group',
        'Show how mutually exclusive choices can present descriptions while surfacing the currently selected value.',
        renderDemoCodeBlock(
            'radio-group',
            'Radio Group',
            'Three related options with supporting descriptions and a synced selection summary.',
            RADIO_GROUP_HTML,
            false,
            RADIO_GROUP_CLEAN_CODE
        )
    );
};

export const Sizes = () => {
    return renderStoryPage(
        'Radio Sizes',
        'Compare the large, medium, and small radio scales while keeping the same content structure.',
        renderDemoCodeBlock(
            'radio-sizes',
            'Sizes',
            'All three size variants share the same radio anatomy and supporting metadata.',
            SIZES_HTML,
            false,
            SIZES_CLEAN_CODE
        )
    );
};

export const LabelVariants = () => {
    return renderStoryPage(
        'Radio Label Variants',
        'Review how the radio behaves as supporting metadata is progressively removed.',
        renderDemoCodeBlock(
            'radio-label-variants',
            'Label Variants',
            'From the full content stack to control-only, each variant is sourced directly from the radio showcase.',
            LABEL_VARIANTS_HTML,
            false,
            LABEL_VARIANTS_CLEAN_CODE
        )
    );
};

export const DescriptionVariants = () => {
    return renderStoryPage(
        'Radio Description Variants',
        'Use semantic description treatments to communicate helper text, warnings, success states, or validation errors.',
        renderDemoCodeBlock(
            'radio-description-variants',
            'Description Variants',
            'Helper, error, warning, and success descriptions using the radio-specific description classes.',
            DESCRIPTION_VARIANTS_HTML,
            false,
            DESCRIPTION_VARIANTS_CLEAN_CODE
        )
    );
};

StatesMatrix.parameters = {
    ...getStoryParameters(STATES_MATRIX_CLEAN_CODE),
};

RadioGroup.parameters = {
    ...getStoryParameters(RADIO_GROUP_CLEAN_CODE),
};

Sizes.parameters = {
    ...getStoryParameters(SIZES_CLEAN_CODE),
};

LabelVariants.parameters = {
    ...getStoryParameters(LABEL_VARIANTS_CLEAN_CODE),
};

DescriptionVariants.parameters = {
    ...getStoryParameters(DESCRIPTION_VARIANTS_CLEAN_CODE),
};
