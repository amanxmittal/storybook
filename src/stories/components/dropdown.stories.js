import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Dropdown',
    parameters: {
        layout: 'fullscreen',
    },
};

const getReactCode = (html) => htmlToJsx(html, 'Dropdown');

const getAngularCode = (html) => {
    return html;
};

const getSnippetCode = (entries) => entries.map(({ label, markup }) => `<!-- Variant: ${label} -->\n${markup}`).join('\n\n');

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

const renderDemoCodeBlock = (id, title, description, htmlContent, isInverse = false, showCard = true, codeContent = null) => {
    const displayCode = formatCode(codeContent || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = formatCode(getAngularCode(codeContent || htmlContent));

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

const SELECTION_HTML = `
    <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
        <button aria-label="Single select default medium" class="ux4g-dropdown-control" type="button">
            <span class="ux4g-dropdown-value">
                <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
            </span>
            <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
        </button>
        <div class="ux4g-dropdown-menu" role="listbox">
            <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                <li class="ux4g-list-item" role="option">
                    <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Option 1">
                        <span class="ux4g-list-item-start">Option 1</span>
                        <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                    </button>
                </li>
                <li class="ux4g-list-item" role="option">
                    <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Option 2">
                        <span class="ux4g-list-item-start">Option 2</span>
                        <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                    </button>
                </li>
            </ul>
        </div>
    </div>
`;

const BUTTON_HTML = `
    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-dropdown-md ux4g-w-100">
        <button class="ux4g-dropdown-control ux4g-btn-primary" type="button">
            <span class="ux4g-dropdown-button-content">
                <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                <span>Button Trigger</span>
            </span>
            <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
        </button>
        <div class="ux4g-dropdown-menu" role="menu">
            <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
            </ul>
        </div>
    </div>
`;

const OVERFLOW_HTML = `
    <div class="ux4g-dropdown ux4g-dropdown-overflow ux4g-dropdown-md ux4g-w-100">
        <button class="ux4g-dropdown-control ux4g-btn-outline-primary" type="button">
            <span class="ux4g-icon-outlined">more_vert</span>
        </button>
        <div class="ux4g-dropdown-menu" role="menu">
            <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
            </ul>
        </div>
    </div>
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Dropdowns</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Dropdowns provide a list of options or actions toggleable from a trigger element. They allow users to make selections, switch states, or trigger contextual commands while conserving screen space.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mb-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various dropdown variants including Selection, Button, and Overflow styles.</p>
                    
                    <div class="ux4g-d-grid ux4g-grid-auto-fit-300 ux4g-gap-xl ux4g-mb-2xl">
                        <div class="ux4g-relative">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Selection Dropdown</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-p-xl ux4g-bg-white">
                                ${SELECTION_HTML}
                            </div>
                        </div>
                        <div class="ux4g-relative">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Button Dropdown</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-p-xl ux4g-bg-white">
                                ${BUTTON_HTML}
                            </div>
                        </div>
                        <div class="ux4g-relative">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Overflow Dropdown</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-radius-l ux4g-p-xl ux4g-bg-white">
                                ${OVERFLOW_HTML}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Dropdowns.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Variant Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Trigger Types</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-dropdown-selection', label: 'Form Selection Style' },
                                                { class: 'ux4g-dropdown-button', label: 'Action Button Style' },
                                                { class: 'ux4g-dropdown-overflow', label: 'Icon Overflow Style' },
                                                { class: 'ux4g-dropdown-single', label: 'Single Choice Logic' },
                                                { class: 'ux4g-dropdown-multi', label: 'Multi Choice Logic' }
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
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Dropdown Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-dropdown-lg', label: 'Large' },
                                                { class: 'ux4g-dropdown-md', label: 'Medium' },
                                                { class: 'ux4g-dropdown-sm', label: 'Small' }
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

export const DropdownSize = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Dropdown Size', 'Support for Small (S), Medium (M), and Large (L) dropdown selection variants.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('dropdown-size-selection', 'Dropdown Size', 'Support for various sizes with icons and help descriptions.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small (S)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-sm">
                                    <button aria-label="Single select default small" class="ux4g-dropdown-control" type="button">
                                        <span class="ux4g-dropdown-value">
                                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                            <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-dropdown-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            <li class="ux4g-list-item" role="option">
                                                <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label 1">
                                                    <span class="ux4g-list-item-start">Label 1</span>
                                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                                </button>
                                            </li>
                                            <li class="ux4g-list-item" role="option">
                                                <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label 2">
                                                    <span class="ux4g-list-item-start">Label 2</span>
                                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium (M)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md">
                                    <button aria-label="Single select default medium" class="ux4g-dropdown-control" type="button">
                                        <span class="ux4g-dropdown-value">
                                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                            <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-dropdown-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            <li class="ux4g-list-item" role="option">
                                                <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label 1">
                                                    <span class="ux4g-list-item-start">Label 1</span>
                                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large (L)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-lg">
                                    <button aria-label="Single select default large" class="ux4g-dropdown-control" type="button">
                                        <span class="ux4g-dropdown-value">
                                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                            <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                            <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                        </span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                    </button>
                                    <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                    <div class="ux4g-dropdown-menu" role="listbox">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            <li class="ux4g-list-item" role="option">
                                                <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label 1">
                                                    <span class="ux4g-list-item-start">Label 1</span>
                                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Selection Dropdown - Single Select - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">...</div>' },
                ]))}

                ${renderDemoCodeBlock('dropdown-size-button', 'Dropdown Button', 'Support for various sizes of action-driven button triggers.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small(S)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-button ux4g-dropdown-sm">
                                    <button class="ux4g-dropdown-control ux4g-btn-primary ux4g-btn-sm" type="button">
                                        <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Small</span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                                    </button>
                                    <div class="ux4g-dropdown-menu" role="menu">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium(M)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-button ux4g-dropdown-md">
                                    <button class="ux4g-dropdown-control ux4g-btn-primary" type="button">
                                        <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Medium</span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                                    </button>
                                    <div class="ux4g-dropdown-menu" role="menu">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large(L)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-button ux4g-dropdown-lg">
                                    <button class="ux4g-dropdown-control ux4g-btn-primary ux4g-btn-lg" type="button">
                                        <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Large</span></span>
                                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                                    </button>
                                    <div class="ux4g-dropdown-menu" role="menu">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Button Dropdown - Text - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md"><button aria-label="Action dropdown default text button medium" class="ux4g-dropdown-control ux4g-btn-text-primary" type="button">...</button></div>' },
                ]))}

                ${renderDemoCodeBlock('dropdown-size-overflow', 'Dropdown Overflow', 'Support for various sizes of compact icon-only overflow triggers.', `
                    <div class="ux4g-row ux4g-gutter-m">
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Small(S)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-overflow ux4g-dropdown-sm">
                                    <button class="ux4g-dropdown-control ux4g-btn-primary ux4g-btn-sm" type="button">
                                        <span class="ux4g-icon-outlined">more_vert</span>
                                    </button>
                                    <div class="ux4g-dropdown-menu" role="menu">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Medium(M)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-overflow ux4g-dropdown-md">
                                    <button class="ux4g-dropdown-control ux4g-btn-primary" type="button">
                                        <span class="ux4g-icon-outlined">more_vert</span>
                                    </button>
                                    <div class="ux4g-dropdown-menu" role="menu">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-col-md-4">
                            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                                <span class="ux4g-label-m-default">Large(L)</span>
                                <div class="ux4g-dropdown ux4g-dropdown-overflow ux4g-dropdown-lg">
                                    <button class="ux4g-dropdown-control ux4g-btn-primary ux4g-btn-lg" type="button">
                                        <span class="ux4g-icon-outlined">more_vert</span>
                                    </button>
                                    <div class="ux4g-dropdown-menu" role="menu">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l">
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                            <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Button Dropdown - Outline - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md"><button aria-label="Action dropdown outlined button medium" class="ux4g-dropdown-control ux4g-btn-outline-primary" type="button">...</button></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const StatusVarient = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Status Varient', 'Validation and state-based dropdown selection variants.')}
            <div class="ux4g-p-m">
                <!-- Disabled -->
                ${renderDemoCodeBlock('status-disabled', '1. Disabled', 'Dropdown selection in a disabled state.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md">
                            <button aria-disabled="true" aria-label="Single select disabled medium" class="ux4g-dropdown-control" disabled="" type="button">
                                <span class="ux4g-dropdown-value">
                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                    <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                    <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                </span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                            </button>
                            <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Button Dropdown - Tonal - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md"><button aria-label="Action dropdown tonal button medium" class="ux4g-dropdown-control ux4g-btn-tonal-primary" type="button">...</button></div>' },
                ]))}

                <!-- Error -->
                ${renderDemoCodeBlock('status-error', '2. Error', 'Dropdown selection indicating a validation error.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-dropdown-error">
                            <button aria-label="Single select error medium" class="ux4g-dropdown-control" type="button">
                                <span class="ux4g-dropdown-value">
                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                    <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                    <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                </span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                            </button>
                            <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">error</span>Error message</span>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Button Dropdown - Filled - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md"><button aria-label="Action dropdown primary button medium" class="ux4g-dropdown-control ux4g-btn-primary" type="button">...</button></div>' },
                ]))}

                <!-- Success -->
                ${renderDemoCodeBlock('status-success', '3. Success', 'Dropdown selection indicating a successful validation.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-dropdown-success">
                            <button aria-label="Single select success medium" class="ux4g-dropdown-control" type="button">
                                <span class="ux4g-dropdown-value">
                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                    <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                    <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                </span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                            </button>
                            <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">check_circle</span>Success message</span>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Overflow Dropdown - Text - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md"><button aria-label="Overflow dropdown default medium" class="ux4g-dropdown-control ux4g-btn-text-primary" type="button"><span class="ux4g-icon-outlined">more_vert</span></button></div>' },
                ]))}

                <!-- Warning -->
                ${renderDemoCodeBlock('status-warning', '4. Warning', 'Dropdown selection indicating a potential issue.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-dropdown-warning">
                            <button aria-label="Single select warning medium" class="ux4g-dropdown-control" type="button">
                                <span class="ux4g-dropdown-value">
                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                    <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                    <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                </span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                            </button>
                            <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">warning</span>Warning message</span>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Overflow Dropdown - Outline - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md"><button aria-label="Overflow dropdown outlined medium" class="ux4g-dropdown-control ux4g-btn-outline-primary" type="button"><span class="ux4g-icon-outlined">more_vert</span></button></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const SelectionTypes = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen" id="dropdown-selection-types-container">
            ${getHeroHeader('Selection Types', 'Single and Multi-select dropdown variants.')}
            <div class="ux4g-container ux4g-py-2xl">
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-xl">
                    <ul class="ux4g-tab-list">
                        <li class="ux4g-tab-item is-active selection-tab-trigger ux4g-fw-semibold" data-target="single">Single Selection</li>
                        <li class="ux4g-tab-item selection-tab-trigger ux4g-fw-semibold" data-target="multi">Multi Selection</li>
                    </ul>
                </div>

                <div id="selection-tab-single" class="selection-tab-content">
                    <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Single Selection</h2>

                    ${renderDemoCodeBlock('type-single-1', '1. Selection checkbox', 'Single-select dropdown using checkbox-style options inside the menu.', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select dropdown with checkbox options" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label Single Selection">
                                                <span class="ux4g-list-item-start">
                                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                                        <input class="ux4g-checkbox-input" type="checkbox">
                                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                                    </label>
                                                    <span aria-hidden="true">Label Single Selection</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-single-2', '2. Selection Trailing Checkmarks', 'Single-select dropdown with trailing selected-state checkmarks.', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select dropdown with trailing checkmarks" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label Single Selection">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Label Single Selection</span>
                                                </span>
                                                <span class="ux4g-list-item-end">
                                                    <span class="ux4g-check-icon ux4g-icon-outlined ux4g-fs-20">check</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-single-3', '3. Selection No Trailing Checkmarks', 'Single-select dropdown variant without trailing selected-state icons.', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select dropdown without trailing checkmarks" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label Single Selection">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Label Single Selection</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-single-4', '4. Selection With Supporting Text', 'Single-select dropdown with supporting text inside each option row.', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select dropdown with supporting text" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label Single Selection">
                                                <span class="ux4g-list-item-start">
                                                    <span class="ux4g-icon-outlined ux4g-fs-20">token</span>
                                                    <span aria-hidden="true">Label Single Selection</span>
                                                </span>
                                                <span class="ux4g-list-item-end">
                                                    <span>Supporting text</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-single-5', '5. Selection Radio Buttons', 'Single-select dropdown using radio-button style options.', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select dropdown with radio options" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-single-option" type="button" ux4g-dropdown-choice="Label Single Selection">
                                                <span class="ux4g-list-item-start">
                                                    <label class="ux4g-radio ux4g-radio-md">
                                                        <input class="ux4g-radio-input" name="dropdown_selection_radio" type="radio">
                                                        <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                                    </label>
                                                    <span aria-hidden="true">Label Single Selection</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}
                </div>

                <div id="selection-tab-multi" class="selection-tab-content ux4g-d-none">
                    <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Multi Selection</h2>

                    ${renderDemoCodeBlock('type-multi-1', '1. Selection checkbox', '', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-multi ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Multi select dropdown with checkbox options" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    ${Array(4).fill(`
                                    <label class="ux4g-checkbox ux4g-checkbox-md ux4g-dropdown-option">
                                        <input class="ux4g-checkbox-input ux4g-dropdown-option-input" type="checkbox" value="Label Multi Selection" />
                                        <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                        <div class="ux4g-checkbox-content"><div class="ux4g-checkbox-header"><span class="ux4g-checkbox-label">Label Multi Selection</span></div></div>
                                    </label>`).join('')}
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-multi-2', '2. Selection Trailing Checkmarks', '', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-multi ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Multi select dropdown with trailing checkmarks" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-multiselect">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-multi-option" type="button" data-choice-label="Label Multi Selection">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Label Multi Selection</span>
                                                </span>
                                                <span class="ux4g-list-item-end">
                                                    <span class="ux4g-check-icon ux4g-icon-outlined ux4g-fs-20">check</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-multi-3', '3. Selection No Trailing Checkmarks', '', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-multi ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Multi select dropdown without trailing checkmarks" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-option ux4g-dropdown-multi-option" type="button" data-choice-label="Label Multi Selection">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Label Multi Selection</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}

                    ${renderDemoCodeBlock('type-multi-4', '4. Selection With Supporting Text', '', `
                        <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-multi ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Multi select dropdown with supporting text" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                                <span class="ux4g-dropdown-help"><span class="ux4g-icon-outlined">info</span>Description</span>
                                <div class="ux4g-dropdown-menu" role="listbox">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                        ${Array(4).fill(`
                                        <li class="ux4g-list-item" role="option">
                                            <button class="ux4g-list-item-row ux4g-dropdown-option ux4g-dropdown-multi-option" type="button" data-choice-label="Label Multi Selection">
                                                <span class="ux4g-list-item-start">
                                                    <span class="ux4g-icon-outlined ux4g-fs-20">token</span>
                                                    <span aria-hidden="true">Label Multi Selection</span>
                                                </span>
                                                <span class="ux4g-list-item-end">
                                                    <span>Supporting text</span>
                                                </span>
                                            </button>
                                        </li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    `, false, false)}
                </div>
            </div>

            <script>
                (function() {
                    const container = document.getElementById('dropdown-selection-types-container');
                    if (!container) return;

                    const triggers = container.querySelectorAll('.selection-tab-trigger');
                    const contents = container.querySelectorAll('.selection-tab-content');

                    triggers.forEach(trigger => {
                        trigger.onclick = () => {
                            const target = trigger.dataset.target;

                            triggers.forEach(tab => tab.classList.remove('is-active'));
                            trigger.classList.add('is-active');

                            contents.forEach(content => {
                                if (content.id === 'selection-tab-' + target) {
                                    content.classList.remove('ux4g-d-none');
                                } else {
                                    content.classList.add('ux4g-d-none');
                                }
                            });
                        };
                    });

                    if (window.ux4g && typeof window.ux4g.init === 'function') {
                        window.ux4g.init(container);
                    }

                    const getChoiceLabel = (row) => {
                        const explicit = row.getAttribute('ux4g-dropdown-choice') || row.getAttribute('data-choice-label');
                        if (explicit) return explicit.trim();

                        const checkboxLabel = row.querySelector('.ux4g-checkbox-label');
                        if (checkboxLabel) return checkboxLabel.textContent.trim();

                        const start = row.querySelector('.ux4g-list-item-start');
                        if (!start) return '';

                        const textNodes = Array.from(start.querySelectorAll('span'))
                            .map((node) => node.textContent.trim())
                            .filter((text) => text && text !== 'token');

                        return textNodes[textNodes.length - 1] || start.textContent.trim();
                    };

                    const updateSingleTrigger = (dropdown, value) => {
                        const text = dropdown.querySelector('[ux4g-dropdown-value]');
                        const chips = dropdown.querySelector('[ux4g-dropdown-chips]');
                        if (!text) return;
                        if (chips) chips.innerHTML = '';
                        dropdown.classList.add('has-selection');
                        text.textContent = value;
                        text.classList.remove('is-placeholder');
                    };

                    const escapeHtml = (value) => value
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;');

                    const updateMultiTrigger = (dropdown) => {
                        const text = dropdown.querySelector('[ux4g-dropdown-value]');
                        const chips = dropdown.querySelector('[ux4g-dropdown-chips]');
                        if (!text) return;

                        dropdown.querySelectorAll('.ux4g-dropdown-multi-option').forEach((row) => {
                            const isSelected = row.classList.contains('is-selected');
                            row.classList.toggle('active', isSelected);
                            row.setAttribute('aria-selected', String(isSelected));
                        });

                        const selected = Array.from(dropdown.querySelectorAll('.ux4g-dropdown-menu .is-selected, .ux4g-dropdown-menu .ux4g-checkbox-input:checked'))
                            .map((node) => node.closest('.ux4g-list-item-row') || node.closest('label'))
                            .filter(Boolean)
                            .map((node) => getChoiceLabel(node))
                            .filter(Boolean);

                        if (selected.length) {
                            if (chips) {
                                let chipSizeClass = 'ux4g-input-chip-sm';
                                if (dropdown.classList.contains('ux4g-dropdown-sm')) chipSizeClass = 'ux4g-input-chip-xs';
                                if (dropdown.classList.contains('ux4g-dropdown-lg')) chipSizeClass = 'ux4g-input-chip';

                                chips.innerHTML = selected.map((label) =>
                                    '<span class="' + chipSizeClass + ' ux4g-dropdown-chip" role="button" tabindex="-1">' +
                                    '<span class="ux4g-icon-outlined" aria-hidden="true">token</span>' +
                                    '<span>' + escapeHtml(label) + '</span>' +
                                    '<span class="ux4g-icon-outlined" aria-hidden="true">close</span>' +
                                    '</span>'
                                ).join('');
                            }
                            dropdown.classList.add('has-selection');
                            text.textContent = '';
                            text.classList.add('is-placeholder');

                            if (chips) {
                                chips.querySelectorAll('.ux4g-dropdown-chip').forEach((chip) => {
                                    chip.addEventListener('mousedown', (event) => {
                                        event.preventDefault();
                                        event.stopPropagation();
                                    });

                                    const closeBtn = chip.querySelector('.ux4g-icon-outlined:last-child');
                                    const labelNode = chip.querySelector('span:not(.ux4g-icon-outlined)');
                                    if (!closeBtn || !labelNode) return;

                                    const clearSelection = (event) => {
                                        event.preventDefault();
                                        event.stopPropagation();

                                        const label = labelNode.textContent.trim();
                                        const matchingRow = Array.from(dropdown.querySelectorAll('.ux4g-dropdown-multi-option'))
                                            .find((row) => getChoiceLabel(row) === label && row.classList.contains('is-selected'));
                                        if (matchingRow) {
                                            matchingRow.classList.remove('is-selected', 'active');
                                            matchingRow.setAttribute('aria-selected', 'false');
                                        }

                                        const matchingInput = Array.from(dropdown.querySelectorAll('.ux4g-dropdown-option-input:checked'))
                                            .find((input) => getChoiceLabel(input.closest('label')) === label);
                                        if (matchingInput) matchingInput.checked = false;

                                        updateMultiTrigger(dropdown);
                                    };

                                    closeBtn.addEventListener('click', clearSelection);
                                });
                            }
                        } else {
                            if (chips) chips.innerHTML = '';
                            dropdown.classList.remove('has-selection');
                            text.textContent = text.dataset.placeholder || 'Please select..';
                            text.classList.add('is-placeholder');
                        }
                    };

                    container.querySelectorAll('.ux4g-dropdown-single .ux4g-dropdown-single-option').forEach((option) => {
                        option.addEventListener('click', () => {
                            const dropdown = option.closest('.ux4g-dropdown');
                            if (!dropdown) return;

                            dropdown.querySelectorAll('.ux4g-dropdown-single-option').forEach((item) => {
                                item.classList.remove('is-selected');
                                const input = item.querySelector('.ux4g-radio-input, .ux4g-checkbox-input');
                                if (input) input.checked = false;
                            });
                            option.classList.add('is-selected');
                            const selectedInput = option.querySelector('.ux4g-radio-input, .ux4g-checkbox-input');
                            if (selectedInput) selectedInput.checked = true;
                            updateSingleTrigger(dropdown, getChoiceLabel(option));
                        });
                    });

                    container.querySelectorAll('.ux4g-dropdown-multi').forEach((dropdown) => {
                        dropdown.querySelectorAll('.ux4g-dropdown-multi-option').forEach((row) => {
                            row.addEventListener('click', (event) => {
                                event.preventDefault();
                                event.stopPropagation();
                                const input = row.querySelector('.ux4g-checkbox-input');
                                if (input) {
                                    if (event.target !== input) input.checked = !input.checked;
                                    row.classList.toggle('is-selected', input.checked);
                                } else {
                                    row.classList.toggle('is-selected');
                                }
                                updateMultiTrigger(dropdown);
                            });
                        });

                        dropdown.querySelectorAll('.ux4g-checkbox-input').forEach((input) => {
                            input.addEventListener('change', () => {
                                const row = input.closest('.ux4g-list-item-row');
                                if (row) row.classList.toggle('is-selected', input.checked);
                                updateMultiTrigger(dropdown);
                            });
                        });
                    });
                })();
            </script>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const DropdownButton = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Dropdown Button', 'Actionable dropdown triggers using various button styles.')}
            <div class="ux4g-p-m">
                <h3 class="ux4g-body-l-strong ux4g-mb-l">Dropdown Button Variants (Size Medium)</h3>
                
                ${renderDemoCodeBlock('btn-text', 'Dropdown Button (Text)', 'Default button type with text style and icon in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md">
                            <button aria-label="Action dropdown default text button medium" class="ux4g-dropdown-control ux4g-btn-text-primary" type="button">
                                <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Placeholder</span></span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Overflow Dropdown - Tonal - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md"><button aria-label="Overflow dropdown tonal medium" class="ux4g-dropdown-control ux4g-btn-tonal-primary" type="button"><span class="ux4g-icon-outlined">more_vert</span></button></div>' },
                ]))}

                ${renderDemoCodeBlock('btn-outline', 'Dropdown Button (Outline)', 'Outlined button style variant in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md">
                            <button aria-label="Action dropdown outlined button medium" class="ux4g-dropdown-control ux4g-btn-outline-primary" type="button">
                                <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Placeholder</span></span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `, false, true, getSnippetCode([
                    { label: 'Overflow Dropdown - Filled - Medium', markup: '<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md"><button aria-label="Overflow dropdown primary medium" class="ux4g-dropdown-control ux4g-btn-primary" type="button"><span class="ux4g-icon-outlined">more_vert</span></button></div>' },
                ]))}

                ${renderDemoCodeBlock('btn-tonal', 'Dropdown Button (Tonal)', 'Tonal button style variant in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md">
                            <button aria-label="Action dropdown tonal button medium" class="ux4g-dropdown-control ux4g-btn-tonal-primary" type="button">
                                <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Placeholder</span></span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)}

                ${renderDemoCodeBlock('btn-filled', 'Dropdown Button (Filled)', 'Primary filled button style variant in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-button ux4g-dropdown-md">
                            <button aria-label="Action dropdown primary button medium" class="ux4g-dropdown-control ux4g-btn-primary" type="button">
                                <span class="ux4g-dropdown-button-content"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><span>Placeholder</span></span>
                                <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">arrow_drop_down</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="View"><span class="ux4g-list-item-start"><span>View</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Edit"><span class="ux4g-list-item-start"><span>Edit</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Delete"><span class="ux4g-list-item-start"><span>Delete</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const DropdownOverflow = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Dropdown Overflow', 'Dropdown menus triggered by icon buttons.')}
            <div class="ux4g-p-m">
                <h3 class="ux4g-body-l-strong ux4g-mb-l">Dropdown Overflow Variants (Size Medium)</h3>
                
                ${renderDemoCodeBlock('ovf-text', 'Dropdown Overflow (Text)', 'Default icon-only trigger with text style background in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md">
                            <button aria-label="Overflow dropdown default medium" class="ux4g-dropdown-control ux4g-btn-text-primary" type="button">
                                <span class="ux4g-icon-outlined">more_vert</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)}

                ${renderDemoCodeBlock('ovf-outline', 'Dropdown Overflow (Outline)', 'Outlined icon-only trigger style variant in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md">
                            <button aria-label="Overflow dropdown outlined medium" class="ux4g-dropdown-control ux4g-btn-outline-primary" type="button">
                                <span class="ux4g-icon-outlined">more_vert</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)}

                ${renderDemoCodeBlock('ovf-tonal', 'Dropdown Overflow (Tonal)', 'Tonal icon-only trigger style variant in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md">
                            <button aria-label="Overflow dropdown tonal medium" class="ux4g-dropdown-control ux4g-btn-tonal-primary" type="button">
                                <span class="ux4g-icon-outlined">more_vert</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)}

                ${renderDemoCodeBlock('ovf-filled', 'Dropdown Overflow (Filled)', 'Primary filled icon-only trigger style variant in Medium size.', `
                    <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                        <span class="ux4g-label-m-default">Medium(M)</span>
                        <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md">
                            <button aria-label="Overflow dropdown primary medium" class="ux4g-dropdown-control ux4g-btn-primary" type="button">
                                <span class="ux4g-icon-outlined">more_vert</span>
                            </button>
                            <div class="ux4g-dropdown-menu" role="menu">
                                <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Share"><span class="ux4g-list-item-start"><span>Share</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Duplicate"><span class="ux4g-list-item-start"><span>Duplicate</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                    <li class="ux4g-list-item" role="menuitem"><button class="ux4g-list-item-row" type="button" ux4g-dropdown-choice="Archive"><span class="ux4g-list-item-start"><span>Archive</span></span><span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span></button></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
