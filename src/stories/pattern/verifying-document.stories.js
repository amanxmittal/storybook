/**
 * Verifying Document Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Feedback & Communication/Verifying Document',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Document verification progress with real-time timeline tracking and status updates.',
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
const getReactCodeLocal = (html) => htmlToJsx(html, 'VerifyingDocument');

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
            ${getHeroHeader('Verifying Document', 'Document verification progress with real-time timeline tracking and status updates.')}
            <div class="ux4g-container ux4g-py-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-md-grid-cols-2 ux4g-lg-grid-cols-3 ux4g-gap-l">
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">description</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Verifying Document</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Document verification progress with real-time timeline tracking and status updates.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== VERIFYING DOCUMENT ====================
export const VerifyingDocument = {
    name: 'Verifying Document',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Verifying Document', 'Document verification progress with real-time timeline tracking and status updates.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('verifying-document', 'Verifying Document', 'Real-time document verification progress with timeline status tracking.', `<section>
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
                            <li class="ux4g-dropdown ux4g-dropdown-button">
                                <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown"
                                    id="ux4g-dropdown-control-6" aria-haspopup="listbox" aria-expanded="false">
                                    <span>Schemes</span>
                                    <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret">arrow_drop_down</span>
                                </a>
                                <div class="ux4g-dropdown-menu" aria-labelledby="ux4g-dropdown-control-6">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                        <li class="ux4g-list-item" role="option">
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
                            <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">search</i>
                            <button class="ux4g-btn-primary ux4g-btn-md">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    <section class="ux4g-feedback-verification-section">
        <div class="ux4g-container">
            <div class="ux4g-feedback-verification-card">
                <div class="ux4g-feedback-back-wrapper">
                    <a href="../../feedback-communication-5.html" class="ux4g-text-link-sm ux4g-feedback-back-link">
                        <span class="ux4g-icon-outlined">arrow_back</span>
                        Back
                    </a>
                </div>
                <div class="ux4g-feedback-header-wrapper">
                    <h2 class="ux4g-heading-s-strong ux4g-feedback-title">Verifying your Income Certificate document</h2>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">
                        We are checking your uploaded PDF in real time. Each step below updates as the system completes it — keep this page open until all checks finish.
                    </p>
                </div>
                <div class="ux4g-feedback-doc-status-card">
                    <div class="ux4g-feedback-doc-header-row">
                        <div class="ux4g-feedback-doc-info">
                            <h3 class="ux4g-title-s-strong ux4g-feedback-doc-title">Income Certificate</h3>
                            <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">PDF document · 1.2 MB</p>
                        </div>
                        <span class="ux4g-tag-tonal-warning ux4g-tag-s">Verifying</span>
                    </div>
                    <article class="ux4g-progress-bar ux4g-feedback-progress-bar" data-ux-progress-bar="" data-ux-shape="rounded" data-ux-label-placement="none" data-ux-progress="40" role="progressbar" aria-label="Income Certificate verification progress">
                        <div class="ux4g-progress-bar-track">
                            <div class="ux4g-progress-bar-fill"></div>
                        </div>
                    </article>
                </div>
                <div class="ux4g-feedback-timeline-container">
                    <div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
                        <div class="ux4g-journey-step ux4g-journey-step-completed">
                            <div class="ux4g-journey-indicator">
                                <span class="ux4g-icon-outlined">check</span>
                            </div>
                            <div class="ux4g-journey-card ux4g-journey-card--standard">
                                <div class="ux4g-journey-info">
                                    <span class="ux4g-journey-date">22 June 2026</span>
                                    <span class="ux4g-journey-title">File format and size within limits</span>
                                    <span class="ux4g-tag-tonal-success ux4g-tag-s">Passed</span>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-journey-step ux4g-journey-step-completed">
                            <div class="ux4g-journey-indicator">
                                <span class="ux4g-icon-outlined">check</span>
                            </div>
                            <div class="ux4g-journey-card ux4g-journey-card--standard">
                                <div class="ux4g-journey-info">
                                    <span class="ux4g-journey-date">25 June 2026</span>
                                    <span class="ux4g-journey-title">Document is readable and not blurred</span>
                                    <span class="ux4g-tag-tonal-success ux4g-tag-s">Passed</span>
                                </div>
                            </div>
                        </div>
                        <div class="ux4g-journey-step ux4g-journey-step-active">
                            <div class="ux4g-journey-indicator"></div>
                            <div class="ux4g-journey-card ux4g-journey-card--standard">
                                <div class="ux4g-journey-info">
                                    <span class="ux4g-journey-date">31 June 2026</span>
                                    <span class="ux4g-journey-title">Figures match the declared income</span>
                                    <span class="ux4g-tag-tonal-warning ux4g-tag-s">Checking</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ux4g-feedback-btn-wrapper">
                    <button onclick="window.location.href=\'#\';" class="ux4g-btn-primary ux4g-btn-lg ux4g-feedback-submit-btn">Track Status</button>
                </div>
            </div>
        </div>
    </section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
