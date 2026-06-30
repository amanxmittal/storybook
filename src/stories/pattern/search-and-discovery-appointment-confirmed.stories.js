/**
 * Success screen showing confirmed appointment with booking reference and next-step instructions.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Appointment Confirmed',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Success screen showing confirmed appointment with booking reference and next-step instructions.',
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

const getReactCode = (html) => htmlToJsx(html, 'SearchDiscovery');

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

const COLUMN_1_HTML = `    <section class="ux4g-bg-neutral ux4g-py-2xl ux4g-csb-center-wrapper">
        <div class="ux4g-container">
            <div class="ux4g-csb-confirm-container">
                <!-- Header -->
                <div class="ux4g-csb-confirm-header ux4g-d-flex ux4g-flex-column ux4g-ai-center">
                    <div class="ux4g-csb-success-icon-wrap">
                        <i class="ux4g-icon-outlined ux4g-icon-success">check_circle</i>
                    </div>
                    <h1 class="ux4g-heading-xl-strong ux4g-mb-3xs">Appointment confirmed</h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-3xs">Reference <strong class="ux4g-text-neutral-primary">APPT-2026-04127</strong></p>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">We've sent your appointment details to your email and SMS.</p>
                </div>

                <!-- Card -->
                <div class="ux4g-csb-confirm-card">
                    <div class="ux4g-csb-confirm-grid">
                        <div class="ux4g-label-l-strong">Date & time</div>
                        <div class="ux4g-body-m-default">Thu, 18 Apr 2026 &middot; 11:00 &ndash; 11:30 AM</div>

                        <div class="ux4g-label-l-strong">Advocate</div>
                        <div class="ux4g-body-m-default">Adv. M. Sharma &middot; Family Law</div>

                        <div class="ux4g-label-l-strong">Office</div>
                        <div class="ux4g-body-m-default">Block C, Room 12, District Legal Services Authority, Pune</div>

                        <div class="ux4g-label-l-strong">Documents to carry</div>
                        <div class="ux4g-body-m-default">Aadhaar, case papers, ID proof</div>
                    </div>
                </div>

                <!-- Actions -->
                <div class="ux4g-csb-confirm-actions">
                    <button class="ux4g-btn ux4g-btn-md ux4g-btn-outline-primary">
                        <i class="ux4g-icon-outlined">calendar_today</i>
                        <span>Add to calendar</span>
                    </button>
                    <button class="ux4g-btn ux4g-btn-md ux4g-btn-outline-primary">
                        <i class="ux4g-icon-outlined">near_me</i>
                        <span>Get directions</span>
                    </button>
                </div>
            </div>
        </div>
    </section>
`;

export const Column = {
    name: 'Column',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Appointment Confirmed - Column', 'Column layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('appointment-confirmed', 'Appointment Confirmed - Full Page', '', COLUMN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
const FULLSCREEN_1_HTML = COLUMN_1_HTML;

export const FullScreen = {
    name: 'FullScreen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Appointment Confirmed - Column', 'Column layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('appointment-confirmed-fullscreen', 'Appointment Confirmed - Full Page', '', FULLSCREEN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

const CARD_1_HTML = COLUMN_1_HTML;

export const Card = {
    name: 'Card',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Appointment Confirmed - Column', 'Column layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('appointment-confirmed-card', 'Appointment Confirmed - Full Page', '', CARD_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
