/**
 * Pending Tasks Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Payment & Transactions/Pending Tasks',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Dashboard pending tasks view with overdue alerts, filter chips, expandable result list items, and action buttons.',
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
const getReactCodeLocal = (html) => htmlToJsx(html, 'PendingTasks');

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

// ==================== PENDING TASKS ====================
const NO_PENDING_TASKS_HTML = `<section class="ux4g-pending-task-main">
    <div>
        <a class="ux4g-text-link-sm ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs" href="#">
            <i class="ux4g-icon-outlined">arrow_back</i>
            Back to home
        </a>
    </div>
    <div class="ux4g-empty-state">
        <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-bg-success-strong ux4g-icon-btn-pill">
            <i class="ux4g-icon-outlined">check</i>
        </button>
        <div class="ux4g-empty-state-content">
            <h3 class="ux4g-title-l-strong">No pending tasks</h3>
            <p class="ux4g-body-m-default">You have no pending tasks right now. All your applications are progressing smoothly.</p>
        </div>
    </div>
</section>`;

export const PendingTasks = {
    name: 'Pending Tasks',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Pending Tasks', 'Dashboard view with overdue alerts, filter chips, and expandable task items requiring user action.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('pending-tasks', 'Pending Tasks Dashboard', 'Full dashboard layout with sidebar navigation, overdue alerts, filter chips, and expandable result list.', `<section class="ux4g-pending-task-main">
    <div class="ux4g-pb-s">
        <h1 class="ux4g-heading-xl-strong">Pending Tasks</h1>
        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">3 tasks need your attention</p>
    </div>
    <div class="ux4g-alert ux4g-alert-error ux4g-alert-wide">
        <i class="ux4g-icon ux4g-alert-icon">error</i>
        <div class="ux4g-alert-content">
            <span class="ux4g-alert-title">1 task is overdue</span>
            <span class="ux4g-alert-message">Upload income proof for your Income Certificate before your application is rejected.</span>
        </div>
        <div class="ux4g-alert-actions">
            <button class="ux4g-alert-close"><i class="ux4g-icon">close</i></button>
        </div>
    </div>
    <div class="ux4g-pb-s">
        <div class="ux4g-d-flex ux4g-inline-gap-s ux4g-stack-gap-s ux4g-wrap">
            <button class="ux4g-choice-chip-group ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">All <span class="ux4g-badge-digit-primary">8</span></button>
            <button class="ux4g-choice-chip-group ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">Pending <span class="ux4g-badge-digit-primary">2</span></button>
            <button class="ux4g-choice-chip-group ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s active">Under Review <span class="ux4g-badge-digit-primary">1</span></button>
            <button class="ux4g-choice-chip-group ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">Approved <span class="ux4g-badge-digit-primary">5</span></button>
            <button class="ux4g-choice-chip-group ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">Rejected <span class="ux4g-badge-digit-primary">0</span></button>
        </div>
    </div>
    <div class="ux4g-pending-result-lists">
        <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <div class="ux4g-result-list-icon ux4g-bg-neutral-soft">
                        <span class="ux4g-icon-outlined ux4g-text-neutral-secondary">cloud_upload</span>
                    </div>
                    <div class="ux4g-result-list-title-group">
                        <h2 class="ux4g-result-list-title ux4g-title-s-strong ux4g-mb-2xs">Upload income proof</h2>
                        <div class="ux4g-result-list-meta">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Income Certificate - INC-2026-MH-04127</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <span class="ux4g-tag-tonal-error">Overdue by 2 days</span>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-primary ux4g-btn-md">Upload now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <div class="ux4g-result-list-icon ux4g-bg-neutral-soft">
                        <span class="ux4g-icon-outlined ux4g-text-neutral-secondary">payments</span>
                    </div>
                    <div class="ux4g-result-list-title-group">
                        <h2 class="ux4g-result-list-title ux4g-title-s-strong ux4g-mb-2xs">Pay application fee</h2>
                        <div class="ux4g-result-list-meta">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Birth Certificate - BC-2026-MH-001</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <span class="ux4g-tag-tonal-warning">Due in 3 days</span>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-primary ux4g-btn-md">Pay now</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <div class="ux4g-result-list-icon ux4g-bg-neutral-soft">
                        <span class="ux4g-icon-outlined ux4g-text-neutral-secondary">event</span>
                    </div>
                    <div class="ux4g-result-list-title-group">
                        <h2 class="ux4g-result-list-title ux4g-title-s-strong ux4g-mb-2xs">Schedule field inspection</h2>
                        <div class="ux4g-result-list-meta">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Property Mutation - PM-2026-MH-089</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <span class="ux4g-tag-tonal-neutral">Due in 7 days</span>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-outline-primary ux4g-btn-md">Schedule</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const NoPendingTasks = {
    name: 'No Pending Tasks',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Pending Tasks', 'Empty state when all tasks are completed and no pending tasks remain.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('no-pending-tasks', 'No Pending Tasks', 'Empty state with back navigation, check icon, and informational message.', NO_PENDING_TASKS_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
