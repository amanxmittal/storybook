/**
 * Status Tracker Patterns overview — application tracking, grievance resolution, and inspection slot scheduling.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Status Tracker/Introduction',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Status Tracker patterns for government services including application status tracking with timeline, grievance tracking with escalation paths, and inspection/test slot scheduling.',
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

const FULLSCREEN_1_HTML = `
        <div class="ux4g-container ux4g-py-2xl">
            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-md-grid-cols-2 ux4g-lg-grid-cols-3 ux4g-gap-l">
                <!-- Application Status Tracker -->
                <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                        <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">track_changes</span>
                        <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Application Tracker</h3>
                    </div>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Track application status with SLA progress bars, vertical journey timelines, action required alerts, and rejection feedback screens.</p>
                </div>
                <!-- Grievance Tracker -->
                <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                        <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">feedback</span>
                        <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Grievance Tracker</h3>
                    </div>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Grievance status overview with escalation paths, timeline tracking, detail cards, and multi-level resolution flow.</p>
                </div>
                <!-- Test Slot Booking -->
                <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                        <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">calendar_month</span>
                        <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Inspection & Test Slot</h3>
                    </div>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Field inspection notification, calendar-based slot selection with availability badges, and confirmation stepper flow.</p>
                </div>
            </div>
        </div>
    `;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Status Tracker', 'Patterns for tracking application status, grievance resolution, and inspection/test slot scheduling in government services.')}
            ${FULLSCREEN_1_HTML}
        </div>
    `,
    parameters: { docs: { disable: true } },
};
