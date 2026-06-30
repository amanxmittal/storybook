import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/File Upload',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'File Upload supports default and VLE flows, drag-over selection, scanning, uploaded files, and error recovery using the source-backed UX4G upload runtime.',
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

const getReactCode = (html) => htmlToJsx(html, 'FileUpload');
const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

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

const UPLOAD_DEFAULT_HTML = `
    <div class="ux4g-upload ux4g-upload-state-default" data-ux-upload data-ux-max-size="5" data-ux-variant="default" data-upload-demo="default" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputDefaultStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true">cloud_upload</span></div>
                <div class="ux4g-upload-option">
                    <div class="ux4g-upload-titleblock">
                        <p class="ux4g-title-s-strong ux4g-upload-heading">Drop file here</p>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-upload-hint">File type: PDF JPG PNG Max size: 5 MB</p>
                    </div>
                    <div class="ux4g-upload-divider">
                        <span class="ux4g-upload-divider-line"></span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Or</span>
                        <span class="ux4g-upload-divider-line"></span>
                    </div>
                    <button type="button" class="ux4g-btn-outline-primary ux4g-upload-btn" data-ux-upload-trigger>
                        <span class="ux4g-icon-outlined" aria-hidden="true">cloud_upload</span>Upload
                    </button>
                </div>
            </div>
        </div>
        <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
            <span class="ux4g-icon-outlined" aria-hidden="true">error_outline</span>
            <span class="ux4g-upload-error-text"></span>
        </p>
        <ul class="ux4g-upload-file-list ux4g-d-none" aria-label="Uploaded files" role="list"></ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default ux4g-d-none" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_VLE_DEFAULT_HTML = `
    <div class="ux4g-upload ux4g-upload-state-default-vle" data-ux-upload data-ux-max-size="5" data-ux-variant="default-vle" data-upload-demo="default-vle" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputVleDefaultStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true">cloud_upload</span></div>
                <div class="ux4g-upload-option">
                    <div class="ux4g-upload-titleblock">
                        <p class="ux4g-title-s-strong ux4g-upload-heading">Upload or scan document</p>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-upload-hint">File type: PDF JPG PNG Max size: 5 MB</p>
                    </div>
                    <div class="ux4g-upload-actions">
                        <button type="button" class="ux4g-btn-outline-primary ux4g-upload-btn" data-ux-upload-trigger>
                            <span class="ux4g-icon-outlined" aria-hidden="true">cloud_upload</span>Upload
                        </button>
                        <button type="button" class="ux4g-btn-primary ux4g-upload-btn">
                            <span class="ux4g-icon-outlined" aria-hidden="true">center_focus_strong</span>Scan
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
            <span class="ux4g-icon-outlined" aria-hidden="true">error_outline</span>
            <span class="ux4g-upload-error-text"></span>
        </p>
        <ul class="ux4g-upload-file-list ux4g-d-none" aria-label="Uploaded files" role="list"></ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default ux4g-d-none" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_SELECTING_HTML = `
    <div class="ux4g-upload ux4g-upload-state-selecting" data-ux-upload data-ux-max-size="5" data-ux-variant="default" data-upload-demo="active" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputSelectingStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true">cloud_upload</span></div>
                <div class="ux4g-upload-titleblock">
                    <p class="ux4g-title-s-strong ux4g-upload-heading">Drop file here</p>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-upload-hint">File type: PDF JPG PNG Max size: 5 MB</p>
                </div>
            </div>
        </div>
        <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
            <span class="ux4g-icon-outlined" aria-hidden="true">error_outline</span>
            <span class="ux4g-upload-error-text"></span>
        </p>
        <ul class="ux4g-upload-file-list ux4g-d-none" aria-label="Uploaded files" role="list"></ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default ux4g-d-none" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_SCANNING_HTML = `
    <div class="ux4g-upload ux4g-upload-state-scanning" data-ux-upload data-ux-max-size="5" data-ux-variant="scanning" data-upload-demo="scanning" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputScanningStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><i class="ux4g-spinner-primary-split ux4g-spinner-md ux4g-upload-spinner" aria-hidden="true"></i></div>
                <div class="ux4g-upload-titleblock">
                    <p class="ux4g-title-s-strong ux4g-upload-heading">Scanning</p>
                </div>
            </div>
        </div>
        <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
            <span class="ux4g-icon-outlined" aria-hidden="true">error_outline</span>
            <span class="ux4g-upload-error-text"></span>
        </p>
        <ul class="ux4g-upload-file-list ux4g-d-none" aria-label="Uploaded files" role="list"></ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default ux4g-d-none" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_WITH_FILES_HTML = `
    <div class="ux4g-upload ux4g-upload-state-uploaded" data-ux-upload data-ux-max-size="5" data-ux-variant="default" data-upload-demo="has-files" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputFilesStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true">cloud_upload</span></div>
                <div class="ux4g-upload-option">
                    <div class="ux4g-upload-titleblock">
                        <p class="ux4g-title-s-strong ux4g-upload-heading">Drop file here</p>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-upload-hint">File type: PDF JPG PNG Max size: 5 MB</p>
                    </div>
                    <div class="ux4g-upload-divider">
                        <span class="ux4g-upload-divider-line"></span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Or</span>
                        <span class="ux4g-upload-divider-line"></span>
                    </div>
                    <button type="button" class="ux4g-btn-outline-primary ux4g-upload-btn" data-ux-upload-trigger>
                        <span class="ux4g-icon-outlined" aria-hidden="true">cloud_upload</span>Upload
                    </button>
                </div>
            </div>
        </div>
        <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
            <span class="ux4g-icon-outlined" aria-hidden="true">error_outline</span>
            <span class="ux4g-upload-error-text"></span>
        </p>
        <ul class="ux4g-upload-file-list" aria-label="Uploaded files" role="list">
            <li class="ux4g-upload-file-item" role="listitem" data-file-name="Document_name.pdf">
                <div class="ux4g-upload-file-row">
                    <span class="ux4g-upload-file-leading" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-icon">token</span></span>
                    <span class="ux4g-upload-file-copy"><span class="ux4g-body-m-strong ux4g-upload-file-name">Document_name.pdf</span><span class="ux4g-body-s-default ux4g-upload-file-description">Description</span></span>
                    <span class="ux4g-upload-file-statusbox" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-status ux4g-text-white">done</span></span>
                    <button type="button" class="ux4g-upload-file-remove" aria-label="Remove Document_name.pdf"><span class="ux4g-icon-outlined" aria-hidden="true">close</span></button>
                </div>
            </li>
        </ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_WITH_FILES_VLE_HTML = `
    <div class="ux4g-upload ux4g-upload-state-uploaded-vle" data-ux-upload data-ux-max-size="5" data-ux-variant="default-vle" data-upload-demo="has-files-vle" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputFilesVleStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true">cloud_upload</span></div>
                <div class="ux4g-upload-option">
                    <div class="ux4g-upload-titleblock">
                        <p class="ux4g-title-s-strong ux4g-upload-heading">Upload or scan document</p>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-upload-hint">File type: PDF JPG PNG Max size: 5 MB</p>
                    </div>
                    <div class="ux4g-upload-actions">
                        <button type="button" class="ux4g-btn-outline-primary ux4g-upload-btn" data-ux-upload-trigger>
                            <span class="ux4g-icon-outlined" aria-hidden="true">cloud_upload</span>Upload
                        </button>
                        <button type="button" class="ux4g-btn-primary ux4g-upload-btn">
                            <span class="ux4g-icon-outlined" aria-hidden="true">center_focus_strong</span>Scan
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
            <span class="ux4g-icon-outlined" aria-hidden="true">error_outline</span>
            <span class="ux4g-upload-error-text"></span>
        </p>
        <ul class="ux4g-upload-file-list" aria-label="Uploaded files" role="list">
            <li class="ux4g-upload-file-item" role="listitem" data-file-name="Document_name.pdf">
                <div class="ux4g-upload-file-row">
                    <span class="ux4g-upload-file-leading" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-icon">token</span></span>
                    <span class="ux4g-upload-file-copy"><span class="ux4g-body-m-strong ux4g-upload-file-name">Document_name.pdf</span><span class="ux4g-body-s-default ux4g-upload-file-description">Description</span></span>
                    <span class="ux4g-upload-file-statusbox" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-status ux4g-text-white">done</span></span>
                    <button type="button" class="ux4g-upload-file-remove" aria-label="Remove Document_name.pdf"><span class="ux4g-icon-outlined" aria-hidden="true">close</span></button>
                </div>
            </li>
        </ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_ERROR_VLE_HTML = `
    <div class="ux4g-upload ux4g-upload-state-error" data-ux-upload data-ux-max-size="5" data-ux-variant="default-vle" data-upload-demo="error" aria-label="File upload area">
        <input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputErrorStory" data-ux-upload-input multiple accept=".pdf,.jpg,.jpeg,.png" />
        <div class="ux4g-upload-panel" role="presentation" tabindex="0">
            <div class="ux4g-upload-content">
                <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true">error_outline</span></div>
                <div class="ux4g-upload-option">
                    <div class="ux4g-upload-titleblock">
                        <p class="ux4g-title-s-strong ux4g-upload-heading">Could not scan</p>
                        <p class="ux4g-body-s-default ux4g-upload-hint">[File Name] exceeds the 5MB upload limit. Please compress it or select a smaller file.</p>
                    </div>
                    <div class="ux4g-upload-actions">
                        <button type="button" class="ux4g-btn-outline-primary ux4g-upload-btn" data-ux-upload-trigger>
                            <span class="ux4g-icon-outlined" aria-hidden="true">cloud_upload</span>Upload
                        </button>
                        <button type="button" class="ux4g-btn-primary ux4g-upload-btn">
                            <span class="ux4g-icon-outlined" aria-hidden="true">center_focus_strong</span>Scan again
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <ul class="ux4g-upload-file-list" aria-label="Uploaded files" role="list">
            <li class="ux4g-upload-file-item ux4g-upload-file-item-error" role="listitem" data-ux-upload-error-row="true">
                <div class="ux4g-upload-file-row">
                    <span class="ux4g-upload-file-leading" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-icon">error_outline</span></span>
                    <span class="ux4g-upload-file-copy"><span class="ux4g-body-m-strong ux4g-upload-file-name">Document_name.pdf</span><span class="ux4g-body-s-default ux4g-upload-file-description">File type not allowed: .docx</span></span>
                    <button type="button" class="ux4g-upload-file-retry" aria-label="Retry upload"><span class="ux4g-icon-outlined" aria-hidden="true">replay</span><span class="ux4g-label-l-default">Retry</span></button>
                </div>
            </li>
        </ul>
        <button type="button" class="ux4g-upload-more ux4g-body-m-default ux4g-d-none" data-ux-upload-trigger>+ Add More files</button>
    </div>
`;

const UPLOAD_ROW_UPLOADING_HTML = `
    <div class="ux4g-upload">
        <ul class="ux4g-upload-file-list" aria-label="Uploaded files" role="list">
            <li class="ux4g-upload-file-item ux4g-upload-file-item-uploading" role="listitem">
                <div class="ux4g-upload-file-row">
                    <span class="ux4g-upload-file-leading" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-icon">token</span></span>
                    <span class="ux4g-upload-file-copy"><span class="ux4g-body-m-strong ux4g-upload-file-name">Document_name.pdf</span><span class="ux4g-body-s-default ux4g-upload-file-description">Description</span></span>
                    <button type="button" class="ux4g-upload-file-remove" aria-label="Cancel upload"><span class="ux4g-icon-outlined" aria-hidden="true">close</span></button>
                </div>
                <div class="ux4g-upload-file-progress">
                    <div class="ux4g-upload-file-progressbar">
                        <div class="ux4g-upload-file-progressvalue"></div>
                    </div>
                    <span class="ux4g-upload-file-progresslabel">0%</span>
                </div>
            </li>
        </ul>
    </div>
`;

const UPLOAD_ROW_ERROR_HTML = `
    <div class="ux4g-upload">
        <ul class="ux4g-upload-file-list" aria-label="Uploaded files" role="list">
            <li class="ux4g-upload-file-item ux4g-upload-file-item-error" role="listitem">
                <div class="ux4g-upload-file-row">
                    <span class="ux4g-upload-file-leading" aria-hidden="true"><span class="ux4g-icon-outlined ux4g-upload-file-icon">error_outline</span></span>
                    <span class="ux4g-upload-file-copy"><span class="ux4g-body-m-strong ux4g-upload-file-name">Document_name.pdf</span><span class="ux4g-body-s-default ux4g-upload-file-description">File type not allowed: .docx</span></span>
                    <button type="button" class="ux4g-upload-file-retry" aria-label="Retry upload"><span class="ux4g-icon-outlined" aria-hidden="true">replay</span><span class="ux4g-label-l-default">Retry</span></button>
                </div>
            </li>
        </ul>
    </div>
`;

const INTRO_SHOWCASE_HTML = `
    <div class="ux4g-d-grid ux4g-gap-xl">
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Default</h3>
            ${UPLOAD_DEFAULT_HTML}
        </div>
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Default VLE</h3>
            ${UPLOAD_VLE_DEFAULT_HTML}
        </div>
    </div>
`;

const DEFAULT_STATES_CLEAN_CODE = getSnippetCode([
    { label: 'File Upload - Default', html: UPLOAD_DEFAULT_HTML },
    { label: 'File Upload - Default VLE', html: UPLOAD_VLE_DEFAULT_HTML },
    { label: 'File Upload - Selecting File', html: UPLOAD_SELECTING_HTML },
    { label: 'File Upload - Scanning VLE', html: UPLOAD_SCANNING_HTML },
]);

const FILES_AND_ERRORS_CLEAN_CODE = getSnippetCode([
    { label: 'File Upload - With Uploaded Files', html: UPLOAD_WITH_FILES_HTML },
    { label: 'File Upload - With Uploaded Files VLE', html: UPLOAD_WITH_FILES_VLE_HTML },
    { label: 'File Upload - Error VLE', html: UPLOAD_ERROR_VLE_HTML },
    { label: 'File Upload - Uploading Row', html: UPLOAD_ROW_UPLOADING_HTML },
    { label: 'File Upload - Error Row', html: UPLOAD_ROW_ERROR_HTML },
]);

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('File Upload', 'File Upload covers standard and VLE entry points, active drag states, scan workflows, uploaded file rows, and retry-oriented error handling.')}
            ${renderStorySection(`
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-xl ux4g-shadow-l1 ux4g-p-xl">
                    ${INTRO_SHOWCASE_HTML}
                </div>
            `)}
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const EntryStates = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('File Upload Entry States', 'Default, VLE, selecting, and scanning variants sourced directly from the upload showcase in pattern.html.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock(
                    'file-upload-entry-states',
                    'Entry States',
                    'Initial and in-progress upload surfaces for standard and VLE flows, including drag-over selection and scanning.',
                    `<div class="ux4g-d-grid ux4g-gap-xl">
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Default</h3>
                            ${UPLOAD_DEFAULT_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Default VLE</h3>
                            ${UPLOAD_VLE_DEFAULT_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Selecting File</h3>
                            ${UPLOAD_SELECTING_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Scanning VLE</h3>
                            ${UPLOAD_SCANNING_HTML}
                        </div>
                    </div>`,
                    false,
                    DEFAULT_STATES_CLEAN_CODE
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const UploadedAndErrorStates = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('File Upload File States', 'Uploaded, error, and row-level status patterns using the exact file list markup from the source showcase.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock(
                    'file-upload-file-states',
                    'Uploaded And Error States',
                    'Success, VLE success, VLE error recovery, and standalone file-row patterns for uploading and failed files.',
                    `<div class="ux4g-d-grid ux4g-gap-xl">
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">With Uploaded Files</h3>
                            ${UPLOAD_WITH_FILES_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">With Uploaded Files VLE</h3>
                            ${UPLOAD_WITH_FILES_VLE_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Error VLE</h3>
                            ${UPLOAD_ERROR_VLE_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Uploading Row</h3>
                            ${UPLOAD_ROW_UPLOADING_HTML}
                        </div>
                        <div>
                            <h3 class="ux4g-body-l-strong ux4g-mb-s">Error Row</h3>
                            ${UPLOAD_ROW_ERROR_HTML}
                        </div>
                    </div>`,
                    false,
                    FILES_AND_ERRORS_CLEAN_CODE
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
