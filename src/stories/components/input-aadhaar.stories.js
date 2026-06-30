import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Input Aadhaar',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Input field for 12-digit Aadhaar number with auto-formatting.',
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

const getReactCode = (html) => htmlToJsx(html, 'Input');

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

const AADHAAR_INPUT_HTML = `
<div class="ux4g-input-container ux4g-input-md ux4g-w-50">
    <label class="ux4g-label-m-strong" for="aadhaarInput">Aadhaar Number <span class="ux4g-text-warning">*</span></label>
    <div class="ux4g-input">
        <input class="ux4g-input-input" id="aadhaarInput" placeholder="XXXX XXXX XXXX" type="text"
            inputmode="numeric" minlength="12" maxlength="14"
            pattern="^(?:[0-9]{12}|[0-9]{4}\\s[0-9]{4}\\s[0-9]{4})$"
            oninput="this.value = this.value.replace(/[^0-9]/g, '').substring(0, 12).replace(/(\\d{4})(?=\\d)/g, '$1 ')" />
    </div>
    <div class="ux4g-input-helper" style="display: none;">
        <span class="ux4g-icon-outlined ux4g-input-helper-icon">error</span>
        <span class="ux4g-input-helper-text">Please enter a valid 12-digit Aadhaar number.</span>
    </div>
</div>
`;

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen" id="intro-container">
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
                        <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Input Aadhaar</h1>
                        <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                            Input field for 12-digit Aadhaar number with auto-formatting using the UX4G design system.
                        </p>
                    </div>
                </div>
            </section>
            <section class="ux4g-p-xl">
                <div class="ux4g-p-m">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l">
                                <div>
                                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Input Aadhaar Showcase</h2>
                                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Source-backed examples covering standard Aadhaar input sizing and supporting actions.</p>
                                </div>
                            </div>
                            ${AADHAAR_INPUT_HTML}
                        </div>

                        <div id="class-reference">
                            <div class="ux4g-my-l">
                                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy source-backed utility classes for input structure and state patterns.</p>
                            </div>

                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Input Structure</h4>
                                    </div>
                                    <div class="ux4g-p-none">
                                        <div class="ux4g-table-container">
                                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                                <tbody>
                                                    ${[
            { class: 'ux4g-input-container', label: 'Input Container' },
            { class: 'ux4g-input', label: 'Field Shell' },
            { class: 'ux4g-input-input', label: 'Native Input' }
        ].map((row) => `
                                                    <tr>
                                                        <td class="ux4g-p-l">
                                                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                                <div class="ux4g-d-flex ux4g-flex-col">
                                                                    <span class="ux4g-label-s-strong">${row.label}</span>
                                                                    <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                                </div>
                                                                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">State Classes</h4>
                                    </div>
                                    <div class="ux4g-p-none">
                                        <div class="ux4g-table-container">
                                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                                <tbody>
                                                    ${[
            { class: 'ux4g-input-default', label: 'Default State' },
            { class: 'ux4g-input-error', label: 'Error State' },
            { class: 'ux4g-input-success', label: 'Success State' },
            { class: 'ux4g-input-warning', label: 'Warning State' },
            { class: 'ux4g-input-is-disabled', label: 'Disabled State' }
        ].map((row) => `
                                                    <tr>
                                                        <td class="ux4g-p-l">
                                                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                                <div class="ux4g-d-flex ux4g-flex-col">
                                                                    <span class="ux4g-label-s-strong">${row.label}</span>
                                                                    <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                                </div>
                                                                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    `).join('')}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Size Classes</h4>
                                    </div>
                                    <div class="ux4g-p-none">
                                        <div class="ux4g-table-container">
                                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                                <tbody>
                                                    ${[
            { class: 'ux4g-input-sm', label: 'Small Input' },
            { class: 'ux4g-input-md', label: 'Medium Input' },
            { class: 'ux4g-input-lg', label: 'Large Input' },
            { class: 'ux4g-input-xl', label: 'Extra Large Input' }
        ].map((row) => `
                                                    <tr>
                                                        <td class="ux4g-p-l">
                                                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                                <div class="ux4g-d-flex ux4g-flex-col">
                                                                    <span class="ux4g-label-s-strong">${row.label}</span>
                                                                    <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                                </div>
                                                                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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
                </div>
            </section>

            <script>
                (function() {
                    const intro = document.getElementById('intro-container');
                    if (!intro) return;
                    const copyBtns = intro.querySelectorAll('.copy-text');
                    copyBtns.forEach((btn) => {
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
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const AadhaarInput = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Input Aadhaar', 'Input field for 12-digit Aadhaar number with auto-formatting.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('aadhaar-input', 'Aadhaar Number Input', 'Aadhaar number input field.', AADHAAR_INPUT_HTML, false, AADHAAR_INPUT_HTML)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
