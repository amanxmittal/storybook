/**
 * Form Category Details Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Feedback & Communication/Form Category Details',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Category selection form with dropdown, file upload, and validation alerts',
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

// ==================== HELPERS ====================
const getReactCodeLocal = (html) => htmlToJsx(html, 'FormCategoryDetails');

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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Patterns</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, gridClass = 'ux4g-grid-cols-1') => {
    const displayCode = formatCode(htmlContent);
    const reactCode = getReactCodeLocal(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-none ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
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
        </div>
    `;
};

// ==================== INTRODUCTION ====================
export const Introduction = {
    name: 'Introduction',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Form Category Details', 'Category selection form with dropdown, file upload, and validation alerts')}
            <div class="ux4g-container ux4g-py-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-md-grid-cols-2 ux4g-lg-grid-cols-3 ux4g-gap-l">
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">category</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Category Details</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Social category selection dropdown with document upload area and additional document requirement alert.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== CATEGORY DETAILS ====================
export const FormCategoryDetails = {
    name: 'Form Category Details',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Form Category Details', 'Social category selection with dropdown, file upload area, and conditional document alert.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('category-details', 'Category Details - Dropdown with Upload', 'Social category selector with file upload for supporting documents and warning alert for additional requirements.', `<section class="ux4g-feedback-category-section">
    <div class="ux4g-container">
        <div class="ux4g-feedback-category-card">
            <div class="ux4g-feedback-back-wrapper">
                <a href="#" class="ux4g-text-link-sm ux4g-feedback-back-link">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                    Back
                </a>
            </div>
            <div class="ux4g-feedback-header-wrapper">
                <h2 class="ux4g-heading-s-strong ux4g-feedback-title">Category Details</h2>
                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">
                    Select your social category as per government records.
                </p>
            </div>
            <div class="ux4g-relative ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
                <span class="ux4g-label-m-default">Social Category</span>
                <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md">
                    <button aria-label="Single select default medium" class="ux4g-dropdown-control" type="button" id="ux4g-dropdown-control-2" data-ux-toggle="dropdown" aria-haspopup="listbox" aria-expanded="false">
                        <span class="ux4g-dropdown-value">
                            <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Scheduled Caste (SC)" ux4g-dropdown-value="">Scheduled Caste (SC)</span>
                            <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                        </span>
                        <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                    </button>
                    <div class="ux4g-dropdown-menu" role="listbox" aria-labelledby="ux4g-dropdown-control-2">
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m">
                            <li class="ux4g-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-dropdown-single-option" ux4g-dropdown-choice="Label 1">
                                    <span class="ux4g-list-item-start">Label 1</span>
                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                </div>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-dropdown-single-option" ux4g-dropdown-choice="Label 2">
                                    <span class="ux4g-list-item-start">Label 2</span>
                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                </div>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-dropdown-single-option" ux4g-dropdown-choice="Label 3">
                                    <span class="ux4g-list-item-start">Label 3</span>
                                    <span aria-hidden="true" class="ux4g-list-item-end ux4g-icon-outlined ux4g-dropdown-single-check">check</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="ux4g-upload ux4g-upload-state-default" data-ux-upload="" data-ux-max-size="5" data-ux-variant="default" data-upload-demo="default" aria-label="File upload area"><input type="file" class="ux4g-upload-input ux4g-d-none" id="uploadInputDefault" data-ux-upload-input="" multiple="" accept=".pdf,.jpg,.jpeg,.png" data-clicked="true">
                <div class="ux4g-upload-panel" role="presentation" tabindex="0">
                    <div class="ux4g-upload-content">
                        <div class="ux4g-upload-icon-wrap"><span class="ux4g-icon-outlined ux4g-upload-icon" aria-hidden="true" data-ux4g-init="true">cloud_upload</span></div>
                        <div class="ux4g-upload-option">
                            <div class="ux4g-upload-titleblock">
                                <p class="ux4g-title-s-strong ux4g-upload-heading">Drop file here</p>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-upload-hint">File type: PDF JPG PNG Max size: 5 MB</p>
                            </div>
                            <div class="ux4g-upload-divider"><span class="ux4g-upload-divider-line"></span><span class="ux4g-body-s-default ux4g-text-neutral-secondary">Or</span><span class="ux4g-upload-divider-line"></span></div><button type="button" class="ux4g-btn-outline-primary ux4g-upload-btn" data-ux-upload-trigger=""><span class="ux4g-icon-outlined" aria-hidden="true" data-ux4g-init="true">cloud_upload</span>Upload</button>
                        </div>
                    </div>
                </div>
                <p class="ux4g-body-s-default ux4g-upload-error-msg ux4g-d-none" role="alert" aria-live="polite">
                    <span class="ux4g-icon-outlined" aria-hidden="true" data-ux4g-init="true">error_outline</span><span class="ux4g-upload-error-text"></span>
                </p>
                <ul class="ux4g-upload-file-list ux4g-d-none" aria-label="Uploaded files" role="list"></ul><button type="button" class="ux4g-upload-more ux4g-body-m-default ux4g-d-none" data-ux-upload-trigger="">+ Add More files</button>
            </div>
            <div class="ux4g-alert ux4g-alert-warning ux4g-radius-s ux4g-border ux4g-border-warning ux4g-feedback-alert">
                <span class="ux4g-icon-filled ux4g-alert-icon ux4g-icon-warning">info</span>
                <div class="ux4g-alert-content ux4g-d-flex ux4g-flex-column ux4g-stack-gap-2xs">
                    <span class="ux4g-alert-title ux4g-text-warning">Additional Document Required</span>
                    <span class="ux4g-alert-message ux4g-text-warning">
                        Since you selected SC category, please upload your caste certificate in the Documents step.
                    </span>
                </div>
            </div>
            <div class="ux4g-feedback-btn-wrapper">
                <button class="ux4g-btn-primary ux4g-btn-lg ux4g-feedback-submit-btn">Continue</button>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
