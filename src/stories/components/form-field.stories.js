/**
 * Form Field Component Stories
 * 
 * Showcasing Form Field variants including Form Group, Dropdowns, Textarea, Checkbox Group, Radio Group, Slider Single, Slider Range, and a full Form Group Example.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Form Field',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Form Fields encompass all the various input elements needed to build complex and responsive forms.',
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

const getReactCode = (html) => htmlToJsx(html, 'FormField');

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

const FORM_GROUP_HTML = `
            <form>
                <div class="ux4g-row ux4g-gutter-xs">
                    <div class="ux4g-col-12">
                        <div class="ux4g-input-container ux4g-input-md ">
                            <label class="ux4g-label-m-default" for="m-full-name">Full Name</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="m-full-name" placeholder="Enter full name"
                                    type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-6 ">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="m-first-name">First Name</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="m-first-name" placeholder="First Name"
                                    type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-6 ">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="m-last-name">Last Name</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="m-last-name" placeholder="Last Name" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-4 ">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="m-day">Day</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="m-day" placeholder="DD" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-4 ">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="m-month">Month</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="m-month" placeholder="MM" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-4 ">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="m-year">Year</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="m-year" placeholder="YYYY" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>

`;

const DROPDOWNS_GROUP_HTML = `

            <form>
                <div class="ux4g-row ux4g-gutter-s">
                    <div class="ux4g-col-12">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">Select domain</span>
                            <div
                                class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select default medium" class="ux4g-dropdown-control"
                                    type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-icon-outlined ux4g-fs-20">token</span>
                                        <span class="ux4g-dropdown-text is-placeholder"
                                            data-placeholder="Please select.." ux4g-dropdown-value="">Please
                                            select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips"
                                            ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true"
                                        class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help">
                                    <span class="ux4g-icon-outlined">info</span>
                                    Description
                                </span>
                            </div>
                        </div>
                    </div>
                    <!-- 50% -->
                    <div class="ux4g-col-6">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">State</span>
                            <div
                                class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select default medium" class="ux4g-dropdown-control"
                                    type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-dropdown-text is-placeholder"
                                            data-placeholder="Please select.." ux4g-dropdown-value="">Please
                                            select..</span>
                                    </span>
                                    <span aria-hidden="true"
                                        class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-6">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">District</span>
                            <div
                                class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select default medium" class="ux4g-dropdown-control"
                                    type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-dropdown-text is-placeholder"
                                            data-placeholder="Please select.." ux4g-dropdown-value="">Please
                                            select..</span>
                                    </span>
                                    <span aria-hidden="true"
                                        class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- 33% -->
                    <div class="ux4g-col-4">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">Day</span>
                            <div
                                class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-dropdown-text"></span>
                                    </span>
                                    <span class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-4">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">Month</span>
                            <div
                                class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-dropdown-text"></span>
                                    </span>
                                    <span class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-4">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">Year</span>
                            <div
                                class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-dropdown-text"></span>
                                    </span>
                                    <span class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

`;

const TEXTAREA_HTML = `
<div class="ux4g-textarea-container ux4g-textarea-md  ux4g-textarea-default">
    <label class="ux4g-label-m-default" for="textareaMd">Label</label>
    <div class="ux4g-textarea">
        <textarea aria-describedby="textareaMdHelp" class="ux4g-textarea-input" id="textareaMd" maxlength="200" placeholder="Placeholder"></textarea>
        <div class="ux4g-textarea-counter">0 / 200</div>
    </div>
    <div class="ux4g-textarea-helper" id="textareaMdHelp">
        <div class="ux4g-textarea-helper-left">
            <span class="ux4g-icon-outlined ux4g-textarea-helper-icon">info</span>
            <span class="ux4g-textarea-helper-text">Description</span>
        </div>
    </div>
</div>
`;

const CHECKBOX_GROUP_HTML = `
<div class="ux4g-form-group">
    <label class="ux4g-checkbox ux4g-checkbox-md">
        <input type="checkbox" class="ux4g-checkbox-input">
        <div class="ux4g-checkbox-control">
            <span class="ux4g-checkmark"></span>
        </div>
        <div class="ux4g-checkbox-content">
            <div class="ux4g-checkbox-header">
                <span class="ux4g-checkbox-label">Accept terms and conditions <span class="ux4g-text-error">*</span></span>
            </div>
            <div class="ux4g-checkbox-description">
                By clicking this checkbox, you agree to the terms and conditions.
            </div>
        </div>
    </label>
</div>

<div class="ux4g-form-group ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
    <label class="ux4g-checkbox ux4g-checkbox-md">
        <input type="checkbox" class="ux4g-checkbox-input">
        <div class="ux4g-checkbox-control">
            <span class="ux4g-checkmark"></span>
        </div>
        <span class="ux4g-checkbox-label">Option 1</span>
    </label>
    <label class="ux4g-checkbox ux4g-checkbox-md">
        <input type="checkbox" class="ux4g-checkbox-input">
        <div class="ux4g-checkbox-control">
            <span class="ux4g-checkmark"></span>
        </div>
        <span class="ux4g-checkbox-label">Option 2</span>
    </label>
    <label class="ux4g-checkbox ux4g-checkbox-md">
        <input type="checkbox" class="ux4g-checkbox-input">
        <div class="ux4g-checkbox-control">
            <span class="ux4g-checkmark"></span>
        </div>
        <span class="ux4g-checkbox-label">Option 3</span>
    </label>
    <label class="ux4g-checkbox ux4g-checkbox-md">
        <input type="checkbox" class="ux4g-checkbox-input">
        <div class="ux4g-checkbox-control">
            <span class="ux4g-checkmark"></span>
        </div>
        <span class="ux4g-checkbox-label">Option 4</span>
    </label>
</div>
`;

const RADIO_GROUP_HTML = `
<div class="ux4g-form-group ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
    <label class="ux4g-radio ux4g-radio-md">
        <input type="radio" name="radio-m" class="ux4g-radio-input">
        <div class="ux4g-radio-control">
            <span class="ux4g-radiomark"></span>
        </div>
        <span class="ux4g-radio-label">Option 1</span>
    </label>
    <label class="ux4g-radio ux4g-radio-md">
        <input type="radio" name="radio-m" class="ux4g-radio-input">
        <div class="ux4g-radio-control">
            <span class="ux4g-radiomark"></span>
        </div>
        <span class="ux4g-radio-label">Option 2</span>
    </label>
    <label class="ux4g-radio ux4g-radio-md">
        <input type="radio" name="radio-m" class="ux4g-radio-input">
        <div class="ux4g-radio-control">
            <span class="ux4g-radiomark"></span>
        </div>
        <span class="ux4g-radio-label">Option 3</span>
    </label>
    <label class="ux4g-radio ux4g-radio-md">
        <input type="radio" name="radio-m" class="ux4g-radio-input">
        <div class="ux4g-radio-control">
            <span class="ux4g-radiomark"></span>
        </div>
        <span class="ux4g-radio-label">Option 4</span>
    </label>
</div>
`;

const SWITCH_HTML = `
<div class="ux4g-form-group">
    <label class="ux4g-switch ux4g-switch-md ux4g-switch-reverse">
        <input type="checkbox" class="ux4g-switch-input">
        <span class="ux4g-switch-label">Enable Notifications</span>
        <div class="ux4g-switch-control">
            <div class="ux4g-switch-track">
                <div class="ux4g-switch-thumb"></div>
            </div>
        </div>
    </label>
</div>
`;

const SLIDER_SINGLE_HTML = `
<div class="ux4g-slider-field ux4g-slider-sm">
    <div class="ux4g-slider-label-row">
        <label class="ux4g-slider-label" for="s-single-s-text">
            Label
            <span class="ux4g-slider-label-required">*</span>
            <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
        </label>
        <span class="ux4g-slider-value-badge">40%</span>
    </div>
    <div class="ux4g-slider ux4g-slider-sm">
        <input type="range" class="ux4g-slider-input" id="s-single-s-text" min="0" max="100" step="10" value="40">
        <div class="ux4g-slider-track">
            <div class="ux4g-slider-fill" style="width: 40%;"></div>
            <div class="ux4g-slider-thumb" style="left: 40%;"></div>
        </div>
        <div class="ux4g-slider-steps"></div>
    </div>
    <span class="ux4g-slider-description">
        <span class="ux4g-icon-outlined ux4g-fs-16">info</span>
        Description
    </span>
</div>
`;

const SLIDER_RANGE_HTML = `
<div class="ux4g-slider-field ux4g-slider-sm">
    <div class="ux4g-slider-label-row">
        <label class="ux4g-slider-label">
            Label
            <span class="ux4g-slider-label-required">*</span>
            <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
        </label>
    </div>
    <div class="ux4g-slider-range-row ux4g-mb-s">
        <span class="ux4g-slider-value-badge">0%</span>
        <span class="ux4g-slider-value-badge">25%</span>
    </div>
    <div class="ux4g-slider ux4g-slider-dual ux4g-slider-sm">
        <input type="range" class="ux4g-slider-input ux4g-slider-input-min" min="0" max="100" step="10" value="0">
        <input type="range" class="ux4g-slider-input ux4g-slider-input-max" min="0" max="100" step="10" value="25">
        <div class="ux4g-slider-track">
            <div class="ux4g-slider-fill" style="left: 0%; width: 25%;"></div>
            <div class="ux4g-slider-thumb ux4g-slider-thumb-min" style="left: 0%;"></div>
            <div class="ux4g-slider-thumb ux4g-slider-thumb-max" style="left: 25%;"></div>
        </div>
        <div class="ux4g-slider-steps"></div>
    </div>
    <span class="ux4g-slider-description">
        <span class="ux4g-icon-outlined ux4g-fs-16">info</span>
        Description
    </span>
</div>
`;

const FORM_FIELD_GROUP_EXAMPLE_HTML = `
<div class="ux4g-p-xl ux4g-radius-m ux4g-border ux4g-border-neutral-subtle">
     <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
                    <h3 class="ux4g-heading-m-strong">Form title</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Description</p>
                    <h4 class="ux4g-heading-xs-default">Field Group Heading</h4>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Description</p>
                    <div class="ux4g-stack-gap-m">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Required fields are marked with
                            asterisk<span class="ux4g-icon-error">*</span></span>
                    </div>
                    <div class="ux4g-py-m">
                        <form>
                            <div class="ux4g-row ux4g-gutter-xs">
                                <!-- Left Column: Medium Sizes (M) -->
                                <!-- 100% -->
                                <div class="ux4g-col-12">
                                    <div class="ux4g-input-container ux4g-input-md ">
                                        <label class="ux4g-label-m-default" for="m-full-name">Full Name</label>
                                        <div class="ux4g-input">
                                            <input class="ux4g-input-input" id="m-full-name"
                                                placeholder="Enter full name" type="text" />
                                        </div>
                                    </div>
                                </div>

                                <!-- 50% -->
                                <div class="ux4g-col-6 ">
                                    <div class="ux4g-input-container ux4g-input-md">
                                        <label class="ux4g-label-m-default" for="m-first-name">First Name</label>
                                        <div class="ux4g-input">
                                            <input class="ux4g-input-input" id="m-first-name" placeholder="First Name"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-col-6 ">
                                    <div class="ux4g-input-container ux4g-input-md">
                                        <label class="ux4g-label-m-default" for="m-last-name">Last Name</label>
                                        <div class="ux4g-input">
                                            <input class="ux4g-input-input" id="m-last-name" placeholder="Last Name"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>

                                <!-- 33% -->
                                <div class="ux4g-col-4 ">
                                    <div class="ux4g-input-container ux4g-input-md">
                                        <label class="ux4g-label-m-default" for="m-day">Day</label>
                                        <div class="ux4g-input">
                                            <input class="ux4g-input-input" id="m-day" placeholder="DD" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-col-4 ">
                                    <div class="ux4g-input-container ux4g-input-md">
                                        <label class="ux4g-label-m-default" for="m-month">Month</label>
                                        <div class="ux4g-input">
                                            <input class="ux4g-input-input" id="m-month" placeholder="MM" type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-col-4 ">
                                    <div class="ux4g-input-container ux4g-input-md">
                                        <label class="ux4g-label-m-default" for="m-year">Year</label>
                                        <div class="ux4g-input">
                                            <input class="ux4g-input-input" id="m-year" placeholder="YYYY"
                                                type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <!-- Error Alert -->
                            <div class="ux4g-alert ux4g-alert-error ux4g-mt-m">
                                <i class="ux4g-icon ux4g-alert-icon">error</i>
                                <div class="ux4g-alert-content">
                                    <span class="ux4g-alert-title ux4g-text-error ">Error message</span>
                                </div>

                            </div>

                            <!-- Actions -->
                            <div class="ux4g-mt-m ux4g-d-flex ux4g-jc-end ux4g-gap-xs">
                                <button class="ux4g-btn-outline-primary">Cancel</button>
                                <button class="ux4g-btn-primary ">Submit</button>
                            </div>
                        </form>
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Form Field</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Form Fields cover various data collection inputs including Text Inputs, Dropdowns, Textareas, Checkboxes, Radios, and Sliders, demonstrating how they scale and group in responsive layouts.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of Form Field variations.</p>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Form Group (Inputs)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">${FORM_GROUP_HTML}</div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Dropdowns Group</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">${DROPDOWNS_GROUP_HTML}</div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Textarea</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">${TEXTAREA_HTML}</div>
                        </div>
                    </div>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Checkbox Group</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">${CHECKBOX_GROUP_HTML}</div>
                        </div>
                    </div>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Radio Group</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">${RADIO_GROUP_HTML}</div>
                        </div>
                    </div>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Sliders & Switches</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${SWITCH_HTML}
                                <hr class="ux4g-my-l" />
                                ${SLIDER_SINGLE_HTML}
                                <hr class="ux4g-my-l" />
                                ${SLIDER_RANGE_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Form Field Group Example</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">${FORM_FIELD_GROUP_EXAMPLE_HTML}</div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and utility classes for Form elements.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Structural Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structural Form Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-form-group', label: 'Form Field Wrapper' },
        { class: 'ux4g-input-container', label: 'Input Container' },
        { class: 'ux4g-dropdown', label: 'Dropdown Container' },
        { class: 'ux4g-textarea-container', label: 'Textarea Container' },
        { class: 'ux4g-checkbox', label: 'Checkbox Wrapper' },
        { class: 'ux4g-radio', label: 'Radio Wrapper' },
        { class: 'ux4g-slider', label: 'Slider Container' }
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

                        <!-- Grid Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Grid Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-row', label: 'Grid Row' },
        { class: 'ux4g-col-12', label: '100% Width Column' },
        { class: 'ux4g-col-6', label: '50% Width Column' },
        { class: 'ux4g-col-4', label: '33% Width Column' },
        { class: 'ux4g-gutter-xl', label: 'Extra Large Gutter' },
        { class: 'ux4g-gutter-m', label: 'Medium Gutter' },
        { class: 'ux4g-gutter-s', label: 'Small Gutter' }
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

export const FormFieldVariants = {
    name: 'Form Field Variants',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Form Field Variants', 'Demonstrating responsive text inputs, dropdowns, textareas, checkboxes, radios, and sliders.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('form-group-inputs', 'Form Group', 'Text inputs spanning different grid columns.', FORM_GROUP_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Form Group', html: FORM_GROUP_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-group-dropdowns', 'Dropdowns Group', 'Select elements mapped to responsive columns.', DROPDOWNS_GROUP_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Dropdowns Group', html: DROPDOWNS_GROUP_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-textarea', 'Textarea', 'A standard textarea component.', TEXTAREA_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Textarea', html: TEXTAREA_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-checkboxes', 'Checkbox Group', 'Standalone and stacked checkboxes.', CHECKBOX_GROUP_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Checkbox Group', html: CHECKBOX_GROUP_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-radios', 'Radio Group', 'Mutually exclusive radio buttons.', RADIO_GROUP_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Radio Group', html: RADIO_GROUP_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-switch', 'Switch', 'A standard toggle switch.', SWITCH_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Switch', html: SWITCH_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-slider-single', 'Slider Single', 'Select a single value from a range.', SLIDER_SINGLE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Slider Single', html: SLIDER_SINGLE_HTML.trim() }]))}
                ${renderDemoCodeBlock('form-slider-range', 'Slider Range', 'Select a span of values.', SLIDER_RANGE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Slider Range', html: SLIDER_RANGE_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const FormFieldGroupExample = {
    name: 'Form Field Group Example',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Form Field Group Example', 'A comprehensive form layout combining multiple fields, alerts, and actions.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('form-group-example', 'Full Form Example', 'A realistic layout combining text inputs in a responsive grid.', FORM_FIELD_GROUP_EXAMPLE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Full Form Example', html: FORM_FIELD_GROUP_EXAMPLE_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
