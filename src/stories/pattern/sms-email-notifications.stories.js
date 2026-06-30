/**
 * SMS & Email Notifications Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Notifications/SMS & Email Notifications',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'SMS and Email notification patterns for government services including submission confirmation, action required, and status update email templates.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'SmsEmail');

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

// ==================== EMAIL SUBMISSION CONFIRMATION ====================
export const EmailSubmissionConfirmation = {
    name: 'Email Submission Confirmation',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Email Submission Confirmation', 'Email template confirming application submission with department branding and journey timeline.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('email-submission-confirmation', 'Submission Confirmation Email', 'Confirmation email with department branding, application details, and processing timeline.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-sms-email-notification">
        <div class="ux4g-sms-email-notification-header">
            <h2 class="ux4g-title-m-strong">Your Income Certificate application has been submitted</h2>
            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                <span class="ux4g-body-s-default">From: revenue@maharashtra.gov.in</span>
                <span class="ux4g-body-s-default">To: ramesh.kumar@gmail.com</span>
                <span class="ux4g-body-s-default">Date: 7 Apr 2026, 10:24 AM</span>
            </div>
        </div>
        <div class="ux4g-p-m ux4g-bg-primary-soft ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
            <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                <input class="ux4g-radio-input" name="dept_radio" type="radio" checked>
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            </label>
            <div class="ux4g-d-flex ux4g-flex-column">
                <span class="ux4g-body-m-strong ux4g-text-primary">Revenue Department</span>
                <span class="ux4g-body-s-default ux4g-text-primary" style="opacity: 0.8;">Government of Maharashtra - Government of India</span>
            </div>
        </div>
        <div class="ux4g-p-l">
            <h2 class="ux4g-title-m-strong">Your Income Certificate application has been submitted</h2>
            <p class="ux4g-body-m-default ux4g-py-m">Dear Ramesh Kumar,</p>
            <p class="ux4g-body-m-default ux4g-pb-m">We have received your application. The Revenue Department will review and notify you of the decision. The processing time is typically 7-10 working days.</p>
            <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-radius-m ux4g-mb-l">
                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s">
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Application reference</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">INC-2026-MH-04127</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Submitted on</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">7 Apr 2026, 10:24 AM</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Department</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">Revenue Dept, Maharashtra Govt</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Expected by</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">22 Apr 2026 (Est)</span>
                    </div>
                </div>
            </div>
            <h3 class="ux4g-title-s-strong ux4g-pb-m">What happens next</h3>
            <div class="journey-timeline-card journey-timeline-card-vertical ux4g-mb-xl ux4g-d-flex">
                <div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
                    <div class="ux4g-journey-step ux4g-journey-step-completed">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Submitted</span>
                                    <span class="ux4g-journey-date">Today, 10:24 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step ux4g-journey-step-active">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card active">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Documents Verified</span>
                                    <span class="ux4g-journey-date">Est. 10 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Officer Review</span>
                                    <span class="ux4g-journey-date">Est. 13 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Issued</span>
                                    <span class="ux4g-journey-date">Est. 22 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button class="ux4g-btn-primary" type="button">
                    <span class="ux4g-btn-content">Track your application</span>
                </button>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== EMAIL ACTION REQUIRED ====================
export const EmailActionRequired = {
    name: 'Email Action Required',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Email Action Required', 'Urgent email requesting updated documents with deadline and next-steps.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('email-action-required', 'Action Required Email', 'Urgent email with deadline alert, document requirements, and processing timeline.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-sms-email-notification">
        <div class="ux4g-sms-email-notification-header">
            <h2 class="ux4g-title-m-strong">Action required on your Income Certificate application</h2>
            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                <span class="ux4g-body-s-default">From: revenue@maharashtra.gov.in</span>
                <span class="ux4g-body-s-default">To: ramesh.kumar@gmail.com</span>
                <span class="ux4g-body-s-default">Date: 7 Apr 2026, 10:24 AM</span>
            </div>
        </div>
        <div class="ux4g-alert ux4g-alert-error">
            <div class="ux4g-alert-content">
                <span class="ux4g-alert-title ux4g-text-error">Action required by 15 Apr 2026</span>
            </div>
        </div>
        <div class="ux4g-p-m ux4g-bg-primary-soft ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
            <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                <input class="ux4g-radio-input" name="dept_radio" type="radio" checked>
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            </label>
            <div class="ux4g-d-flex ux4g-flex-column">
                <span class="ux4g-body-m-strong ux4g-text-primary">Revenue Department</span>
                <span class="ux4g-body-s-default ux4g-text-primary" style="opacity: 0.8;">Government of Maharashtra - Government of India</span>
            </div>
        </div>
        <div class="ux4g-p-l">
            <h2 class="ux4g-title-m-strong">Action required on your Income Certificate application</h2>
            <p class="ux4g-body-m-default ux4g-py-m">Dear Ramesh Kumar,</p>
            <p class="ux4g-body-m-default ux4g-pb-m">To continue processing your application, we need an updated income proof. Please upload a clearer copy by the deadline below. If you do not respond, your application may be rejected.</p>
            <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-radius-m ux4g-mb-l">
                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s">
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Application reference</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">INC-2026-MH-04127</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Required document</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">Updated income proof (PDF, JPG · max 5 MB)</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Deadline</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">15 Apr 2026</span>
                    </div>
                </div>
            </div>
            <h3 class="ux4g-title-s-strong ux4g-pb-m">What happens next</h3>
            <div class="journey-timeline-card journey-timeline-card-vertical ux4g-mb-xl ux4g-d-flex">
                <div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
                    <div class="ux4g-journey-step ux4g-journey-step-completed">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Submitted</span>
                                    <span class="ux4g-journey-date">Today, 10:24 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step ux4g-journey-step-active">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card active">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Documents Verified</span>
                                    <span class="ux4g-journey-date">Est. 10 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Officer Review</span>
                                    <span class="ux4g-journey-date">Est. 13 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Decision</span>
                                    <span class="ux4g-journey-date">Est. 18 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Issued</span>
                                    <span class="ux4g-journey-date">Est. 22 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button class="ux4g-btn-primary" type="button">
                    <span class="ux4g-btn-content">Update now</span>
                </button>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== EMAIL STATUS UPDATE ====================
export const EmailStatusUpdate = {
    name: 'Email Status Update',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Email Status Update', 'Status change notification email with application tracking timeline.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('email-status-update', 'Status Update Email', 'Status change notification with success alert, updated application details, and processing timeline.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-sms-email-notification">
        <div class="ux4g-sms-email-notification-header">
            <h2 class="ux4g-title-m-strong">Your application status has been updated</h2>
            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                <span class="ux4g-body-s-default">From: revenue@maharashtra.gov.in</span>
                <span class="ux4g-body-s-default">To: ramesh.kumar@gmail.com</span>
                <span class="ux4g-body-s-default">Date: 7 Apr 2026, 10:24 AM</span>
            </div>
        </div>
        <div class="ux4g-alert ux4g-alert-success">
            <div class="ux4g-alert-content">
                <span class="ux4g-alert-title ux4g-text-success">Status updated to Under Review</span>
            </div>
        </div>
        <div class="ux4g-p-m ux4g-bg-primary-soft ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
            <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                <input class="ux4g-radio-input" name="dept_radio" type="radio" checked>
                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
            </label>
            <div class="ux4g-d-flex ux4g-flex-column">
                <span class="ux4g-body-m-strong ux4g-text-primary">Revenue Department</span>
                <span class="ux4g-body-s-default ux4g-text-primary" style="opacity: 0.8;">Government of Maharashtra - Government of India</span>
            </div>
        </div>
        <div class="ux4g-p-l">
            <h2 class="ux4g-title-m-strong">Your application status has been updated</h2>
            <p class="ux4g-body-m-default ux4g-py-m">Dear Ramesh Kumar,</p>
            <p class="ux4g-body-m-default ux4g-pb-m">Your Income Certificate application has moved to the Officer Review stage. We will notify you again when a decision is made (typically within 3 working days).</p>
            <div class="ux4g-bg-primary-soft ux4g-p-m ux4g-radius-m ux4g-mb-l">
                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s">
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Application reference</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">INC-2026-MH-04127</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Current Status</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">Under review</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Documents</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">Verified</span>
                    </div>
                    <div class="ux4g-sen-info-row">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Updated on</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-primary">11 Apr 2026, 09:03 AM</span>
                    </div>
                </div>
            </div>
            <h3 class="ux4g-title-s-strong ux4g-pb-m">What happens next</h3>
            <div class="journey-timeline-card journey-timeline-card-vertical ux4g-mb-xl ux4g-d-flex">
                <div class="ux4g-journey-timeline ux4g-journey-timeline--vertical">
                    <div class="ux4g-journey-step ux4g-journey-step-completed">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Submitted</span>
                                    <span class="ux4g-journey-date">Today, 10:24 AM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step ux4g-journey-step-active">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card active">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Documents Verified</span>
                                    <span class="ux4g-journey-date">Est. 10 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Officer Review</span>
                                    <span class="ux4g-journey-date">Est. 13 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Decision</span>
                                    <span class="ux4g-journey-date">Est. 18 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-journey-step">
                        <div class="ux4g-journey-indicator"><span class="ux4g-icon-outlined">check</span></div>
                        <div class="ux4g-journey-card ux4g-journey-card--standard ux4g-sen-timeline-card">
                            <div class="ux4g-journey-info">
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                    <span class="ux4g-journey-title">Issued</span>
                                    <span class="ux4g-journey-date">Est. 22 Apr</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button class="ux4g-btn-primary" type="button">
                    <span class="ux4g-btn-content">View timeline</span>
                </button>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
