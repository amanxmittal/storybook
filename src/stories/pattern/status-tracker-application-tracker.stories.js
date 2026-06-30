/**
 * Full-screen application tracker with SLA progress bar and vertical journey timeline showing completed, active, and pending steps.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Status Tracker/Application Tracker',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Track application status with SLA progress bars, vertical journey timelines, action required alerts, and rejection feedback screens.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Patterns</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'StatusTracker');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false) => {
    const displayCode = formatCode(htmlContent);
    const reactCode = getReactCode(displayCode);
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

const FULLSCREEN_1_HTML = `    <section class="status-tracker-container">
    <div class="ux4g-status-tracker-main">
        <div class="ux4g-py-l">
            <a class="ux4g-text-link-md" href="#">
                <i class="ux4g-icon">arrow_back</i> Back
            </a>
        </div>
        <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <div class="ux4g-result-list-title-group">
                        <h2 class="ux4g-result-list-title ux4g-title-m-strong">Income Certificate</h2>
                        <div class="ux4g-result-list-meta">
                            <span class="ux4g-result-list-id ux4g-body-s-default ux4g-text-neutral-secondary ux4g-text-nowrap">
                                Application ID &middot; INC-2026-MH-04127
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-actions-container ux4g-d-flex">
                    <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                        <span class="ux4g-tag-tonal-neutral">Under review</span>
                    </div>
                </div>
            </div>
            <article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-default" data-ux-sla-linear data-ux-progress="50" aria-label="SLA progress at 50 percent">
                <div class="ux4g-sla-linear-body">
                    <div class="ux4g-sla-linear-head">
                        <div class="ux4g-sla-linear-title-wrap">
                            <span class="ux4g-label-l-strong ux4g-sla-linear-title">8 days left</span>
                        </div>
                    </div>
                    <div class="ux4g-sla-linear-track" aria-hidden="true">
                        <div class="ux4g-sla-linear-fill"></div>
                    </div>
                </div>
            </article>
        </div>
        <div class="journey-timeline-card journey-timeline-card-vertical ux4g-mb-xl ux4g-d-flex">
            <div class="ux4g-d-flex ux4g-jc-between">
                <div class="journey-timeline-title ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                    <span class="ux4g-title-m-default">Application journey</span>
                    <span class="journey-timeline-description">Every step from submission to issuance</span>
                </div>
            </div>
            <div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
                <div class="ux4g-journey-step ux4g-journey-step-completed">
                    <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">07 Apr 2026, 10:24 AM</span>
                            <span class="ux4g-journey-title">Application Submitted</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-journey-step ux4g-journey-step-active">
                    <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">10 Apr 2026, 02:15 PM</span>
                            <span class="ux4g-journey-title">Documents Verified</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-journey-step">
                    <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">Est. 11 Apr 2026, 09:03 AM</span>
                            <span class="ux4g-journey-title">Officer Review</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-journey-step">
                    <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">Est. Expected 22 Apr 2026</span>
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-journey-title">Certificate Will Be Issued</span>
                                <div class="ux4g-journey-status">
                                    <span class="ux4g-journey-status-dot ux4g-journey-status-dot--warning" aria-hidden="true"></span>
                                    <span class="ux4g-label-m-default">11 days remaining</span>
                                    <span class="ux4g-divider-vertical"></span>
                                    <span class="ux4g-label-s-default ux4g-text-warning">Pending</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="ux4g-consent-footer">
        <span class="ux4g-label-m-default">Powered by -</span>
        <img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo" />
    </div>
</section>`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Application Status Tracker', 'Full-screen application tracker with SLA progress bar and vertical journey timeline showing completed, active, and pending steps.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('application-tracker', 'Application Tracker - Under Review', 'Application status with SLA countdown, progress bar, and vertical journey timeline.', FULLSCREEN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
const CARD_1_HTML = FULLSCREEN_1_HTML;

export const Card = {
    name: 'Card',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Application Status Tracker', 'Full-screen application tracker with SLA progress bar and vertical journey timeline showing completed, active, and pending steps.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('application-tracker-card', 'Application Tracker - Under Review', 'Application status with SLA countdown, progress bar, and vertical journey timeline.', CARD_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

const COLUMN_1_HTML = FULLSCREEN_1_HTML;

export const Column = {
    name: 'Column',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Application Status Tracker', 'Full-screen application tracker with SLA progress bar and vertical journey timeline showing completed, active, and pending steps.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('application-tracker-column', 'Application Tracker - Under Review', 'Application status with SLA countdown, progress bar, and vertical journey timeline.', COLUMN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
