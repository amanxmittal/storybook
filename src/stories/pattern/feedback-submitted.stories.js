/**
 * Feedback Submitted Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Feedback & Communication/Feedback Submitted',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Feedback submission success confirmation with reference number and next steps.',
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
const getReactCodeLocal = (html) => htmlToJsx(html, 'FeedbackSubmitted');

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
            ${getHeroHeader('Feedback Submitted', 'Feedback submission success confirmation with reference number and next steps.')}
            <div class="ux4g-container ux4g-py-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-md-grid-cols-2 ux4g-lg-grid-cols-3 ux4g-gap-l">
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">task_alt</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Feedback Submitted</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Feedback submission success screen with reference number and acknowledgement.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== FEEDBACK SUBMITTED ====================
export const FeedbackSubmitted = {
    name: 'Feedback Submitted',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Feedback Submitted', 'Feedback submission success confirmation with reference number and next steps.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('feedback-submitted', 'Feedback Submitted', 'Feedback submission success screen with reference number and acknowledgement.', `<section>
        <nav class="ux4g-navbar ux4g-navbar-right ux4g-shadow-l0">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">UX4G</span>
                            <span class="ux4g-body-xs-default">National Services Portal</span>
                        </div>
                    </div>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                        <ul class="ux4g-navbar-links">
                            <li><a href="#" class="ux4g-text-link-sm">Home</a></li>
                            <li><a href="#" class="ux4g-text-link-sm">Services</a></li>
                            <li class="ux4g-dropdown ux4g-dropdown-button" data-ux4g-init="true">
                                <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown"
                                    id="ux4g-dropdown-control-6" aria-haspopup="listbox" aria-expanded="false">
                                    <span>Schemes</span>
                                    <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret"
                                        data-ux4g-init="true">arrow_drop_down</span>
                                </a>
                                <div class="ux4g-dropdown-menu" aria-labelledby="ux4g-dropdown-control-6">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                        <li class="ux4g-list-item" role="option" data-ux4g-init="true">
                                            <button class="ux4g-list-item-row" type="button">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Schemes List</span>
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" class="ux4g-text-link-sm">Track</a></li>
                            <li><a href="#" class="ux4g-text-link-sm">Help</a></li>
                        </ul>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                            <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20" data-ux4g-init="true">search</i>
                            <button class="ux4g-btn-primary ux4g-btn-md">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </section>

    <section class="ux4g-feedback-completion-section">
        <div class="ux4g-container ux4g-d-flex ux4g-flex-column ux4g-ai-center">
           <div class="ux4g-feedback ux4g-text-center ux4g-feedback ux4g-shadow-l0 ux4g-border-none" data-ux4g-init="true">
                <div class="feedback-submitted-wrapper ux4g-radius-s">
                    <span class="ux4g-icon-outlined ux4g-text-success ux4g-fs-24" data-ux4g-init="true">thumb_up</span>
                    <h3 class="ux4g-heading-s-strong">Feedback submitted</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Thank you for your feedback. This helps
                        improve government services.</p>
                </div>
                <button class="ux4g-btn-outline-neutral">Close</button>
            </div>
        </div>
    </section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
