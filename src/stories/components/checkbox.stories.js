/**
 * Checkbox Component Stories
 *
 * Showcasing Checkbox states, grouping, sizing, descriptions, and indeterminate selection patterns.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Checkbox',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Checkboxes let users select one or more options, communicate partial selection, and pair controls with helper, warning, success, or error messaging.',
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

const getReactCode = (html) => htmlToJsx(html, 'Checkbox');

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
                    
                    // Wait for DOM to be available
                    const initHandlers = () => {
                        const section = document.getElementById('section-' + blockId);
                        if (!section) {
                            console.warn('Section not found for', 'section-' + blockId);
                            // Retry
                            setTimeout(initHandlers, 100);
                            return;
                        }
                        
                        const toggleBtn = section.querySelector('.toggle-code') || document.querySelector('[data-target="code-' + blockId + '"]');
                        const codeArea = document.getElementById('code-' + blockId);
                        const output = document.getElementById('output-' + blockId);
                        const tabs = document.querySelectorAll('.tab-trigger[data-id="' + blockId + '"]');
                        const copyBtn = section.querySelector('.copy-code') || document.querySelector('.copy-code[data-id="' + blockId + '"]');
                        
                        if (!toggleBtn || !codeArea || !output) {
                            console.warn('Missing elements for code block', blockId);
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
                    
                    // Try immediately, then retry if needed
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

const STATES_MATRIX_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-mb-m ux4g-w-100">
        <div></div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">UNCHECKED</div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">CHECKED</div>
        <div class="ux4g-fw-bold ux4g-text-neutral-secondary">INDETERMINATE</div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-ai-center ux4g-mb-m ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Default</div>
        <div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input class="ux4g-checkbox-input" data-ux4g-indeterminate type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
    </div>
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-ai-center ux4g-w-100">
        <div class="ux4g-fw-semibold ux4g-text-neutral-secondary">Disabled</div>
        <div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input disabled="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" disabled="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
        <div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input disabled="" class="ux4g-checkbox-input" data-ux4g-indeterminate type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
    </div>
</div>
`.trim();

const CHECKBOX_GROUP_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-w-100">
        <label class="ux4g-checkbox ux4g-checkbox-md">
            <input checked="" class="ux4g-checkbox-input group-demo-cb" type="checkbox" value="Email notifications" />
            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            <div class="ux4g-checkbox-content">
                <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Email notifications</span></div>
            </div>
        </label>
        <label class="ux4g-checkbox ux4g-checkbox-md">
            <input class="ux4g-checkbox-input group-demo-cb" type="checkbox" value="SMS notifications" />
            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            <div class="ux4g-checkbox-content">
                <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">SMS notifications</span></div>
            </div>
        </label>
        <label class="ux4g-checkbox ux4g-checkbox-md">
            <input checked="" class="ux4g-checkbox-input group-demo-cb" type="checkbox" value="Push notifications" />
            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            <div class="ux4g-checkbox-content">
                <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Push notifications</span></div>
            </div>
        </label>
    </div>
    <div class="ux4g-mt-m">
        Selected: <span id="group-demo-output">Email notifications, Push notifications</span>
    </div>
    <script>
        (function () {
            const groupCbs = document.querySelectorAll('.group-demo-cb');
            const output = document.getElementById('group-demo-output');

            function updateOutput() {
                const selected = Array.from(groupCbs)
                    .filter(cb => cb.checked)
                    .map(cb => cb.value)
                    .join(', ');
                output.textContent = selected || 'None';
            }

            groupCbs.forEach(cb => cb.addEventListener('change', updateOutput));
        })();
    </script>
</div>
`.trim();

const SIZES_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Large</div>
            <label class="ux4g-checkbox ux4g-checkbox-lg">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header">
                        <span class="ux4g-checkbox-label">Label</span>
                        <span class="ux4g-checkbox-required">*</span>
                        <span class="ux4g-checkbox-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-checkbox-description">
                        <span class="ux4g-checkbox-desc-icon">
                            <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Medium</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header">
                        <span class="ux4g-checkbox-label">Label</span>
                        <span class="ux4g-checkbox-required">*</span>
                        <span class="ux4g-checkbox-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-checkbox-description">
                        <span class="ux4g-checkbox-desc-icon">
                            <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Small</div>
            <label class="ux4g-checkbox ux4g-checkbox-sm">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header">
                        <span class="ux4g-checkbox-label">Label</span>
                        <span class="ux4g-checkbox-required">*</span>
                        <span class="ux4g-checkbox-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-checkbox-description">
                        <span class="ux4g-checkbox-desc-icon">
                            <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>
`.trim();

const CHECKED_STATES_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ai-center ux4g-w-100">
        <div>
            <div class="ux4g-fw-semibold ux4g-mb-s">Unchecked</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Not selected</span></div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-fw-semibold ux4g-mb-s">Checked</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Selected</span></div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-fw-semibold ux4g-mb-s">Indeterminate</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input class="ux4g-checkbox-input" data-ux4g-indeterminate type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Partially selected</span></div>
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
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header">
                        <span class="ux4g-checkbox-label">Label</span>
                        <span class="ux4g-checkbox-required">*</span>
                        <span class="ux4g-checkbox-icon">
                            <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                        </span>
                    </div>
                    <div class="ux4g-checkbox-description">
                        <span class="ux4g-checkbox-desc-icon">
                            <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                        </span>
                        Description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Label + required</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header">
                        <span class="ux4g-checkbox-label">Label</span>
                        <span class="ux4g-checkbox-required">*</span>
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Label only</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header">
                        <span class="ux4g-checkbox-label">Label</span>
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Control only</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            </label>
        </div>
    </div>
</div>
`.trim();

const DESCRIPTION_VARIANTS_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-d-grid ux4g-grid-cols-4 ux4g-gap-m ux4g-w-100">
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Info / Default</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label</span></div>
                    <div class="ux4g-checkbox-description ux4g-checkbox-desc-helper">
                        <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-helper">
                            <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                        </span>
                        Default description
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Error</div>
            <label class="ux4g-checkbox ux4g-checkbox-md ux4g-checkbox-error">
                <input class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label</span></div>
                    <div class="ux4g-checkbox-description ux4g-checkbox-desc-error">
                        <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-error">
                            <i class="ux4g-icon ux4g-checkbox-icon">error</i>
                        </span>
                        Error text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Warning</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label</span></div>
                    <div class="ux4g-checkbox-description ux4g-checkbox-desc-warning">
                        <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-warning">
                            <i class="ux4g-icon ux4g-checkbox-icon">warning</i>
                        </span>
                        Warning text
                    </div>
                </div>
            </label>
        </div>
        <div>
            <div class="ux4g-mb-s ux4g-fw-semibold">Success</div>
            <label class="ux4g-checkbox ux4g-checkbox-md">
                <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                <div class="ux4g-checkbox-content">
                    <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label</span></div>
                    <div class="ux4g-checkbox-description ux4g-checkbox-desc-success">
                        <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-success">
                            <i class="ux4g-icon ux4g-checkbox-icon">check_circle</i>
                        </span>
                        Success text
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>
`.trim();

const PARENT_CHILD_INDETERMINATE_HTML = `
<div class="ux4g-w-100" data-ux4g-parent-child>
    <label class="ux4g-checkbox ux4g-checkbox-md ux4g-mb-m">
        <input class="ux4g-checkbox-input" data-ux4g-select-all type="checkbox" />
        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
        <div class="ux4g-checkbox-content">
            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Select All</span></div>
        </div>
    </label>
    <div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-ml-m">
        <label class="ux4g-checkbox ux4g-checkbox-md">
            <input checked="" class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            <div class="ux4g-checkbox-content">
                <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Option A</span></div>
            </div>
        </label>
        <label class="ux4g-checkbox ux4g-checkbox-md">
            <input class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            <div class="ux4g-checkbox-content">
                <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Option B</span></div>
            </div>
        </label>
        <label class="ux4g-checkbox ux4g-checkbox-md">
            <input checked="" class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
            <div class="ux4g-checkbox-content">
                <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Option C</span></div>
            </div>
        </label>
    </div>
</div>
`.trim();

const STATES_MATRIX_CLEAN_CODE = `
/* Default (Unchecked) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>

/* Default (Checked) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>

/* Default (Indeterminate: data-ux4g-indeterminate sets indeterminate on init) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input class="ux4g-checkbox-input" data-ux4g-indeterminate type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>

/* Disabled (Unchecked) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input disabled class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>

/* Disabled (Checked) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked disabled class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>

/* Disabled (Indeterminate: data-ux4g-indeterminate sets indeterminate on init) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input disabled class="ux4g-checkbox-input" data-ux4g-indeterminate type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>
`.trim();

const CHECKBOX_GROUP_CLEAN_CODE = `
/* Group Item: Email notifications */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input group-demo-cb" type="checkbox" value="Email notifications" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Email notifications</span>
    </div>
  </div>
</label>

/* Group Item: SMS notifications */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input class="ux4g-checkbox-input group-demo-cb" type="checkbox" value="SMS notifications" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">SMS notifications</span>
    </div>
  </div>
</label>

/* Group Item: Push notifications */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input group-demo-cb" type="checkbox" value="Push notifications" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Push notifications</span>
    </div>
  </div>
</label>

/* Selected Summary Target */
<span id="group-demo-output">Email notifications, Push notifications</span>
`.trim();

const SIZES_CLEAN_CODE = `
/* Size: Large */
<label class="ux4g-checkbox ux4g-checkbox-lg">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
      <span class="ux4g-checkbox-required">*</span>
      <span class="ux4g-checkbox-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-checkbox-description">
      <span class="ux4g-checkbox-desc-icon">
        <i class="ux4g-icon ux4g-checkbox-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Size: Medium */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
      <span class="ux4g-checkbox-required">*</span>
      <span class="ux4g-checkbox-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-checkbox-description">
      <span class="ux4g-checkbox-desc-icon">
        <i class="ux4g-icon ux4g-checkbox-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Size: Small */
<label class="ux4g-checkbox ux4g-checkbox-sm">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
      <span class="ux4g-checkbox-required">*</span>
      <span class="ux4g-checkbox-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-checkbox-description">
      <span class="ux4g-checkbox-desc-icon">
        <i class="ux4g-icon ux4g-checkbox-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>
`.trim();

const CHECKED_STATES_CLEAN_CODE = `
/* State: Unchecked */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Not selected</span>
    </div>
  </div>
</label>

/* State: Checked */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Selected</span>
    </div>
  </div>
</label>

/* State: Indeterminate (data-ux4g-indeterminate sets indeterminate on init) */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input class="ux4g-checkbox-input" data-ux4g-indeterminate type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Partially selected</span>
    </div>
  </div>
</label>
`.trim();

const LABEL_VARIANTS_CLEAN_CODE = `
/* Variant: Full */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
      <span class="ux4g-checkbox-required">*</span>
      <span class="ux4g-checkbox-icon">
        <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
      </span>
    </div>
    <div class="ux4g-checkbox-description">
      <span class="ux4g-checkbox-desc-icon">
        <i class="ux4g-icon ux4g-checkbox-icon">info</i>
      </span>
      Description
    </div>
  </div>
</label>

/* Variant: Label + Required */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
      <span class="ux4g-checkbox-required">*</span>
    </div>
  </div>
</label>

/* Variant: Label Only */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
    </div>
  </div>
</label>

/* Variant: Control Only */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
</label>
`.trim();

const DESCRIPTION_VARIANTS_CLEAN_CODE = `
/* Description: Info */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
    </div>
    <div class="ux4g-checkbox-description ux4g-checkbox-desc-helper">
      <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-helper">
        <i class="ux4g-icon ux4g-checkbox-icon">info</i>
      </span>
      Default description
    </div>
  </div>
</label>

/* Description: Error */
<label class="ux4g-checkbox ux4g-checkbox-md ux4g-checkbox-error">
  <input class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
    </div>
    <div class="ux4g-checkbox-description ux4g-checkbox-desc-error">
      <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-error">
        <i class="ux4g-icon ux4g-checkbox-icon">error</i>
      </span>
      Error text
    </div>
  </div>
</label>

/* Description: Warning */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
    </div>
    <div class="ux4g-checkbox-description ux4g-checkbox-desc-warning">
      <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-warning">
        <i class="ux4g-icon ux4g-checkbox-icon">warning</i>
      </span>
      Warning text
    </div>
  </div>
</label>

/* Description: Success */
<label class="ux4g-checkbox ux4g-checkbox-md">
  <input checked class="ux4g-checkbox-input" type="checkbox" />
  <div class="ux4g-checkbox-control">
    <span class="ux4g-checkmark"></span>
  </div>
  <div class="ux4g-checkbox-content">
    <div class="ux4g-checkbox-header">
      <span class="ux4g-checkbox-label">Label</span>
    </div>
    <div class="ux4g-checkbox-description ux4g-checkbox-desc-success">
      <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-success">
        <i class="ux4g-icon ux4g-checkbox-icon">check_circle</i>
      </span>
      Success text
    </div>
  </div>
</label>
`.trim();

const PARENT_CHILD_INDETERMINATE_CLEAN_CODE = `
/* Wrap the group in data-ux4g-parent-child. Mark the select-all input with
   data-ux4g-select-all. Mark each child input with data-ux4g-child. */

/* Parent Checkbox */
<div data-ux4g-parent-child>
  <label class="ux4g-checkbox ux4g-checkbox-md">
    <input class="ux4g-checkbox-input" data-ux4g-select-all type="checkbox" />
    <div class="ux4g-checkbox-control">
      <span class="ux4g-checkmark"></span>
    </div>
    <div class="ux4g-checkbox-content">
      <div class="ux4g-checkbox-header">
        <span class="ux4g-checkbox-label">Select All</span>
      </div>
    </div>
  </label>

  /* Child Option: Option A */
  <label class="ux4g-checkbox ux4g-checkbox-md">
    <input checked class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
    <div class="ux4g-checkbox-control">
      <span class="ux4g-checkmark"></span>
    </div>
    <div class="ux4g-checkbox-content">
      <div class="ux4g-checkbox-header">
        <span class="ux4g-checkbox-label">Option A</span>
      </div>
    </div>
  </label>

  /* Child Option: Option B */
  <label class="ux4g-checkbox ux4g-checkbox-md">
    <input class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
    <div class="ux4g-checkbox-control">
      <span class="ux4g-checkmark"></span>
    </div>
    <div class="ux4g-checkbox-content">
      <div class="ux4g-checkbox-header">
        <span class="ux4g-checkbox-label">Option B</span>
      </div>
    </div>
  </label>

  /* Child Option: Option C */
  <label class="ux4g-checkbox ux4g-checkbox-md">
    <input checked class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
    <div class="ux4g-checkbox-control">
      <span class="ux4g-checkmark"></span>
    </div>
    <div class="ux4g-checkbox-content">
      <div class="ux4g-checkbox-header">
        <span class="ux4g-checkbox-label">Option C</span>
      </div>
    </div>
  </label>
</div>
`.trim();

const getStoryParameters = (code) => ({
    docs: {
        disable: true,
        source: { code: formatCode(code) },
    },
});

const CHECKBOX_INTRO_CLASS_ROWS = [
    ['Base', 'ux4g-checkbox'],
    ['Input', 'ux4g-checkbox-input'],
    ['Control', 'ux4g-checkbox-control'],
    ['Mark', 'ux4g-checkmark'],
    ['Content', 'ux4g-checkbox-content'],
    ['Header', 'ux4g-checkbox-header'],
    ['Label', 'ux4g-checkbox-label'],
    ['Description', 'ux4g-checkbox-description'],
    ['Required', 'ux4g-checkbox-required'],
    ['Icon', 'ux4g-checkbox-icon'],
    ['Helper', 'ux4g-checkbox-desc-helper'],
    ['Error', 'ux4g-checkbox-desc-error'],
    ['Warning', 'ux4g-checkbox-desc-warning'],
    ['Success', 'ux4g-checkbox-desc-success'],
    ['State', 'ux4g-checkbox-error'],
];

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
        ${getHeroHeader('Checkbox', 'Checkboxes support single and multiple selection, indeterminate states, and contextual metadata such as helper text, required markers, and validation feedback.')}

        <div class="ux4g-p-m">
            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-mb-2xl">
                <div class="ux4g-card ux4g-card-solid">
                    <div class="ux4g-card-header">
                        <h2 class="ux4g-heading-m-strong">Key Behaviors</h2>
                    </div>
                    <div class="ux4g-card-body ux4g-flex-col">
                        <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports unchecked, checked, and indeterminate selection without changing the component shell.</li>
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Pairs the control with optional labels, required markers, trailing icons, and descriptions.</li>
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Handles helper, warning, success, and error propagation through dedicated checkbox description styles.</li>
                            <li class="ux4g-body-m-default ux4g-text-neutral-primary">Scales from standalone inputs to grouped and parent-child selection patterns.</li>
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
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Default, hover, active, focused, and disabled permutations across unchecked, checked, and indeterminate states.</div>
                            </div>
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                <div class="ux4g-label-m-strong ux4g-text-info">Checkbox Group</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Grouped preference selection with helper copy and a live selected-summary output.</div>
                            </div>
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                <div class="ux4g-label-m-strong ux4g-text-success">Sizes and Labels</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Large, medium, and small controls plus label-density variants from full metadata to control-only.</div>
                            </div>
                            <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                <div class="ux4g-label-m-strong ux4g-text-warning">Descriptions and Indeterminate</div>
                                <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Status descriptions and parent-child selection flows that keep partial states visible.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="ux4g-my-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Visual Showcase</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">A compact tour of the checkbox patterns used across the source-backed stories.</p>
            </div>

            <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-w-100">
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-p-xl">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">States</h3>
                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-l">
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                    <div class="ux4g-checkbox-content">
                                        <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Unchecked</span></div>
                                    </div>
                                </label>
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                    <div class="ux4g-checkbox-content">
                                        <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Checked</span></div>
                                    </div>
                                </label>
                                <label class="ux4g-checkbox ux4g-checkbox-md ux4g-checkbox-error">
                                    <input class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                    <div class="ux4g-checkbox-content">
                                        <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Error</span></div>
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
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                    <div class="ux4g-checkbox-content">
                                        <div class="ux4g-checkbox-header">
                                            <span class="ux4g-checkbox-label">Label</span>
                                            <span class="ux4g-checkbox-required">*</span>
                                            <span class="ux4g-checkbox-icon">
                                                <i class="ux4g-icon-outlined ux4g-radio-icon">token</i>
                                            </span>
                                        </div>
                                        <div class="ux4g-checkbox-description">
                                            <span class="ux4g-checkbox-desc-icon">
                                                <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                                            </span>
                                            Description
                                        </div>
                                    </div>
                                </label>
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m">
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        <div class="ux4g-checkbox-content">
                                            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label only</span></div>
                                        </div>
                                    </label>
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-p-xl">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <h3 class="ux4g-label-xl-strong ux4g-text-neutral-secondary">Descriptions and Indeterminate</h3>
                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l" data-ux4g-parent-child>
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m">
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input checked="" class="ux4g-checkbox-input" type="checkbox" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        <div class="ux4g-checkbox-content">
                                            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Helper</span></div>
                                            <div class="ux4g-checkbox-description ux4g-checkbox-desc-helper">
                                                <span class="ux4g-checkbox-desc-icon ux4g-checkbox-desc-icon-helper">
                                                    <i class="ux4g-icon ux4g-checkbox-icon">info</i>
                                                </span>
                                                Default description
                                            </div>
                                        </div>
                                    </label>
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input checked="" class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        <div class="ux4g-checkbox-content">
                                            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Option A</span></div>
                                        </div>
                                    </label>
                                </div>
                                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-m">
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input class="ux4g-checkbox-input" data-ux4g-select-all type="checkbox" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        <div class="ux4g-checkbox-content">
                                            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Select All</span></div>
                                        </div>
                                    </label>
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input class="ux4g-checkbox-input" data-ux4g-child type="checkbox" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        <div class="ux4g-checkbox-content">
                                            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Option B</span></div>
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
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy the checkbox classes used by the showcased source-backed variants.</p>
                </div>

                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                    <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Checkbox Classes</h4>
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
                                    ${CHECKBOX_INTRO_CLASS_ROWS.map(([label, className]) => `
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
        'Checkbox States Matrix',
        'Reference every core checkbox interaction state across unchecked, checked, and indeterminate columns.',
        renderDemoCodeBlock(
            'checkbox-states-matrix',
            'States Matrix',
            'A compact matrix for default, hover, active, focused, and disabled behavior.',
            STATES_MATRIX_HTML,
            false,
            STATES_MATRIX_CLEAN_CODE
        )
    );
};

export const CheckboxGroup = () => {
    return renderStoryPage(
        'Checkbox Group',
        'Show how multiple related choices can share presentation while still surfacing a concise selection summary.',
        renderDemoCodeBlock(
            'checkbox-group',
            'Checkbox Group',
            'Three notification preferences grouped together with helper descriptions and a synced selected-state readout.',
            CHECKBOX_GROUP_HTML,
            false,
            CHECKBOX_GROUP_CLEAN_CODE
        )
    );
};

export const Sizes = () => {
    return renderStoryPage(
        'Checkbox Sizes',
        'Compare the large, medium, and small checkbox scales while keeping the same content structure.',
        renderDemoCodeBlock(
            'checkbox-sizes',
            'Sizes',
            'All three size variants use the same checkbox anatomy and supporting content.',
            SIZES_HTML,
            false,
            SIZES_CLEAN_CODE
        )
    );
};

export const CheckedStates = () => {
    return renderStoryPage(
        'Checked States',
        'Highlight the three most common selection outputs users need to recognize at a glance.',
        renderDemoCodeBlock(
            'checkbox-checked-states',
            'Checked States',
            'Unchecked, checked, and indeterminate examples using the medium checkbox size.',
            CHECKED_STATES_HTML,
            false,
            CHECKED_STATES_CLEAN_CODE
        )
    );
};

export const LabelVariants = () => {
    return renderStoryPage(
        'Checkbox Label Variants',
        'Review how the component behaves as supporting metadata is progressively removed.',
        renderDemoCodeBlock(
            'checkbox-label-variants',
            'Label Variants',
            'From the full content stack to control-only, each variant is sourced directly from the component showcase.',
            LABEL_VARIANTS_HTML,
            false,
            LABEL_VARIANTS_CLEAN_CODE
        )
    );
};

export const DescriptionVariants = () => {
    return renderStoryPage(
        'Checkbox Description Variants',
        'Use semantic description treatments to communicate neutral guidance, warnings, success, or validation errors.',
        renderDemoCodeBlock(
            'checkbox-description-variants',
            'Description Variants (Propagation)',
            'Helper, error, warning, and success descriptions using the checkbox-specific description classes.',
            DESCRIPTION_VARIANTS_HTML,
            false,
            DESCRIPTION_VARIANTS_CLEAN_CODE
        )
    );
};

export const ParentChildIndeterminate = () => {
    return renderStoryPage(
        'Parent-Child Indeterminate',
        'Demonstrate how a parent checkbox reflects partial selection across related child options.',
        renderDemoCodeBlock(
            'checkbox-parent-child-indeterminate',
            'Indeterminate (Parent-Child)',
            'A select-all parent checkbox that becomes indeterminate when only some child choices are selected.',
            PARENT_CHILD_INDETERMINATE_HTML,
            false,
            PARENT_CHILD_INDETERMINATE_CLEAN_CODE
        )
    );
};

StatesMatrix.parameters = {
    ...getStoryParameters(STATES_MATRIX_CLEAN_CODE),
};

CheckboxGroup.parameters = {
    ...getStoryParameters(CHECKBOX_GROUP_CLEAN_CODE),
};

Sizes.parameters = {
    ...getStoryParameters(SIZES_CLEAN_CODE),
};

CheckedStates.parameters = {
    ...getStoryParameters(CHECKED_STATES_CLEAN_CODE),
};

LabelVariants.parameters = {
    ...getStoryParameters(LABEL_VARIANTS_CLEAN_CODE),
};

DescriptionVariants.parameters = {
    ...getStoryParameters(DESCRIPTION_VARIANTS_CLEAN_CODE),
};

ParentChildIndeterminate.parameters = {
    ...getStoryParameters(PARENT_CHILD_INDETERMINATE_CLEAN_CODE),
};
