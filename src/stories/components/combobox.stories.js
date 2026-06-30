import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Combobox',
    parameters: {
        layout: 'fullscreen',
    },
};

const getReactCode = (html) => htmlToJsx(html, 'Combobox');
const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const getAngularCode = (html) => {
    return html;
};

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
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                    ${description}
                </p>
            </div>
        </div>
    </section>
`;

const renderDemoCodeBlock = (id, title, description, htmlContent, isInverse = false, showCard = true, customCode = null) => {
    const sourceCode = customCode || htmlContent;
    const displayCode = formatCode(sourceCode);
    const reactCode = getReactCode(sourceCode);
    const angularCode = formatCode(getAngularCode(sourceCode));

    return `
        <div class="ux4g-mb-xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h3 class="ux4g-heading-s-strong ux4g-mb-xs">${title}</h3>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">${description}</p>
            </div>

            ${showCard ? `
            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-mb-m">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-w-100">
                        ${htmlContent}
                    </div>
                </div>
            </div>
            ` : `
            <div class="ux4g-mb-m">
                ${htmlContent}
            </div>
            `}

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

const getSingleSelectListItems = () => `
    <li class="ux4g-list-item" role="option">
        <button class="ux4g-list-item-row ux4g-combobox-single-option" type="button" ux4g-combobox-choice="Label 1">
            <span class="ux4g-list-item-start">Label 1</span>
            <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-combobox-single-check">check</span>
        </button>
    </li>
    <li class="ux4g-list-item" role="option">
        <button class="ux4g-list-item-row ux4g-combobox-single-option" type="button" ux4g-combobox-choice="Label 2">
            <span class="ux4g-list-item-start">Label 2</span>
            <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-combobox-single-check">check</span>
        </button>
    </li>
    <li class="ux4g-list-item" role="option">
        <button class="ux4g-list-item-row ux4g-combobox-single-option" type="button" ux4g-combobox-choice="Label 3">
            <span class="ux4g-list-item-start">Label 3</span>
            <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-combobox-single-check">check</span>
        </button>
    </li>
`;

const getMultiSelectListItems = (size = 'md') => `
    <label class="ux4g-checkbox ux4g-checkbox-${size} ux4g-combobox-option">
        <input class="ux4g-checkbox-input ux4g-combobox-option-input" type="checkbox" value="Label 1" />
        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
        <div class="ux4g-checkbox-content">
            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label 1</span></div>
        </div>
    </label>
    <label class="ux4g-checkbox ux4g-checkbox-${size} ux4g-combobox-option">
        <input class="ux4g-checkbox-input ux4g-combobox-option-input" type="checkbox" value="Label 2" />
        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
        <div class="ux4g-checkbox-content">
            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label 2</span></div>
        </div>
    </label>
    <label class="ux4g-checkbox ux4g-checkbox-${size} ux4g-combobox-option">
        <input class="ux4g-checkbox-input ux4g-combobox-option-input" type="checkbox" value="Label 3" />
        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
        <div class="ux4g-checkbox-content">
            <div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label 3</span></div>
        </div>
    </label>
`;

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Combobox</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Comboboxes provide a searchable and selectable list of options. They are useful for situations where a user has to choose from a long list, with filtering built right in.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mb-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of the primary Combobox selection modes.</p>
                    
                    <div class="ux4g-d-grid ux4g-grid-auto-fit-300 ux4g-gap-xl ux4g-mb-2xl">
                        <div class="ux4g-relative">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Single Select Combobox</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-p-xl ux4g-bg-white">
                                <div class="ux4g-d-flex ux4g-jc-center">
                                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-w-100">
                                        <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="contains">
                                            <button aria-label="Single select default medium" class="ux4g-combobox-control" type="button">
                                                <span class="ux4g-combobox-value">
                                                    <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                                    <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                                    <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                                </span>
                                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                            </button>
                                            <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                            <div class="ux4g-combobox-menu" role="listbox">
                                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                                    ${getSingleSelectListItems()}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-relative">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Multi Select Combobox</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-p-xl ux4g-bg-white">
                                <div class="ux4g-d-flex ux4g-jc-center">
                                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-w-100">
                                        <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md">
                                            <button aria-label="Multi select combobox medium" class="ux4g-combobox-control" type="button">
                                                <span class="ux4g-combobox-value">
                                                    <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                                    <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="">
                                                    <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                                </span>
                                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                            </button>
                                            <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                            <div class="ux4g-combobox-menu" role="listbox">
                                                ${getMultiSelectListItems('md')}
                                            </div>
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
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Comboboxes.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Variant Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Selection Types</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-combobox-single', label: 'Single Choice Logic' },
                                                { class: 'ux4g-combobox-multi', label: 'Multi Choice Logic' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
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

                        <!-- Size Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Combobox Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-combobox-lg', label: 'Large' },
                                                { class: 'ux4g-combobox-md', label: 'Medium' },
                                                { class: 'ux4g-combobox-sm', label: 'Small' }
                                            ].map(s => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${s.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${s.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${s.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const ComboboxSize = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Combobox Size', 'Support for Small (S), Medium (M), and Large (L) combobox selection variants.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('cb-size-single', 'Single Select', 'Support for various sizes in single select mode.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-sm" ux4g-combobox-filter="contains">
                                    <button aria-label="Single select default small" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="contains">
                                    <button aria-label="Single select default medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-lg" ux4g-combobox-filter="contains">
                                    <button aria-label="Single select default large" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Combobox Size - Single Select', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-lg"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-sm"></div>' },
                ]))}

                ${renderDemoCodeBlock('cb-size-multi', 'Multi Select', 'Support for various sizes in multi select mode.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-sm">
                                    <button aria-label="Multi select combobox small" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        ${getMultiSelectListItems('sm')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M) [Default]</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md">
                                    <button aria-label="Multi select combobox medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="">
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        ${getMultiSelectListItems('md')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-lg">
                                    <button aria-label="Multi select combobox large" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="">
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        ${getMultiSelectListItems('lg')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Combobox Size - Multi Select', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-lg"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-sm"></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const FilterMode = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Filter Mode', 'Combobox filtering modes: contains, starts-with, starts-with-term.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('filter-mode-single', 'Single Selection Filter Mode', 'Filter logic variants for single select.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Contains</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="contains">
                                    <button aria-label="Single select default medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Starts With</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="starts-with">
                                    <button aria-label="Single select default medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Starts With Term</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="starts-with-term">
                                    <button aria-label="Single select default medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Combobox Filter Mode - Single Select', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="contains"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="starts-with"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md" ux4g-combobox-filter="starts-with-term"></div>' },
                ]))}

                ${renderDemoCodeBlock('filter-mode-multi', 'Multi Selection Filter Mode', 'Filter logic variants for multi select.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Contains</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md" ux4g-combobox-filter="contains">
                                    <button aria-label="Multi select combobox medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="">
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        ${getMultiSelectListItems('md')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Starts With</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md" ux4g-combobox-filter="starts-with">
                                    <button aria-label="Multi select combobox medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="">
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        ${getMultiSelectListItems('md')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Starts With Term</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md" ux4g-combobox-filter="starts-with-term">
                                    <button aria-label="Multi select combobox medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="">
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips" ux4g-combobox-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        ${getMultiSelectListItems('md')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Combobox Filter Mode - Multi Select', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md" ux4g-combobox-filter="contains"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md" ux4g-combobox-filter="starts-with"></div>\n<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-multi ux4g-combobox-md" ux4g-combobox-filter="starts-with-term"></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const StatusVariant = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Status Variant', 'Validation and state-based combobox variants.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('status-disabled', '1. Disabled', 'Combobox in a disabled state.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-sm">
                                    <button aria-disabled="true" aria-label="Single select disabled small" class="ux4g-combobox-control" disabled type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md">
                                    <button aria-disabled="true" aria-label="Single select disabled medium" class="ux4g-combobox-control" disabled type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-lg">
                                    <button aria-disabled="true" aria-label="Single select disabled large" class="ux4g-combobox-control" disabled type="button">
                                        <span class="ux4g-combobox-value">
                                            <i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" />
                                            <span aria-live="polite" class="ux4g-combobox-selected-chips"></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([{ label: 'Combobox Status - Disabled', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md ux4g-combobox-disabled"></div>' }]))}

                ${renderDemoCodeBlock('status-error', '2. Error', 'Combobox indicating a validation error.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-sm ux4g-combobox-error">
                                    <button aria-label="Single select error small" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined ux4g-icon-error">error</span>Error message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-md ux4g-combobox-error">
                                    <button aria-label="Single select error medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined ux4g-icon-error">error</span>Error message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-lg ux4g-combobox-error">
                                    <button aria-label="Single select error large" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined ux4g-icon-error">error</span>Error message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([{ label: 'Combobox Status - Error', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md ux4g-combobox-error"></div>' }]))}

                ${renderDemoCodeBlock('status-success', '3. Success', 'Combobox indicating a successful validation.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-sm ux4g-combobox-success">
                                    <button aria-label="Single select success small" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined">check_circle</span>Success message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-md ux4g-combobox-success">
                                    <button aria-label="Single select success medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined">check_circle</span>Success message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-lg ux4g-combobox-success">
                                    <button aria-label="Single select success large" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined">check_circle</span>Success message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([{ label: 'Combobox Status - Success', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md ux4g-combobox-success"></div>' }]))}

                ${renderDemoCodeBlock('status-warning', '4. Warning', 'Combobox indicating a potential issue or warning.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-sm ux4g-combobox-warning">
                                    <button aria-label="Single select warning small" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help ux4g-text-warning"><span class="ux4g-icon-outlined ux4g-icon-warning">warning</span>Warning message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-md ux4g-combobox-warning">
                                    <button aria-label="Single select warning medium" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined">warning</span>Warning message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-combobox ux4g-combobox-single ux4g-combobox-lg ux4g-combobox-warning">
                                    <button aria-label="Single select warning large" class="ux4g-combobox-control" type="button">
                                        <span class="ux4g-combobox-value"><i aria-hidden="true" class="ux4g-icon-outlined ux4g-fs-20">token</i><input autocomplete="off" class="ux4g-combobox-input" placeholder="Start typing.." type="text" ux4g-combobox-search="" /><span aria-live="polite" class="ux4g-combobox-selected-chips"></span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-combobox-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-combobox-help"><span aria-hidden="true" class="ux4g-icon-outlined">warning</span>Warning message</span>
                                    <div class="ux4g-combobox-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            ${getSingleSelectListItems()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([{ label: 'Combobox Status - Warning', html: '<div class="ux4g-combobox ux4g-combobox-default ux4g-combobox-single ux4g-combobox-md ux4g-combobox-warning"></div>' }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
