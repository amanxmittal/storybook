/**
 * Request reschedule interface with calendar picker and reason for rescheduling.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Reschedule Booking',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Request reschedule interface with calendar picker and reason for rescheduling.',
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
            <div class="ux4g-csb-reschedule-card">
                <!-- Header -->
                <h1 class="ux4g-heading-xl-strong ux4g-mb-3xs">Request reschedule</h1>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Original: Thu, 18 Apr 2026 &middot; 11:00 &ndash; 11:30 AM with Adv. M. Sharma</p>

                <!-- Dropdown -->
                <div class="ux4g-csb-reschedule-select-container">
                    <span class="ux4g-label-l-strong ux4g-mb-xs ux4g-d-block">Reason for reschedule</span>
                    <div class="ux4g-csb-reschedule-select-wrapper">
                        <select class="ux4g-csb-reschedule-select">
                            <option value="conflict" selected>Schedule conflict</option>
                            <option value="personal">Personal emergency</option>
                            <option value="other">Other reason</option>
                        </select>
                    </div>
                </div>

                <!-- Select a new slot title -->
                <h2 class="ux4g-title-l-strong ux4g-mb-m">Select a new slot</h2>

                <!-- Compact Calendar Component -->
                <div class="ux4g-time-slot-compact-container">
                    <!-- Left Pane: Calendar -->
                    <div class="ux4g-time-slot-compact-calendar">
                        <div class="ux4g-time-slot-compact-header">
                            <button class="ux4g-btn-icon ux4g-btn-text-neutral ux4g-btn-sm"><span class="ux4g-icon-outlined">arrow_back</span></button>
                            <span class="ux4g-time-slot-compact-month">April 2026</span>
                            <button class="ux4g-btn-icon ux4g-btn-text-neutral ux4g-btn-sm"><span class="ux4g-icon-outlined">arrow_forward</span></button>
                        </div>
                        <div class="ux4g-time-slot-compact-grid">
                            <div class="ux4g-time-slot-day-name">Mo</div>
                            <div class="ux4g-time-slot-day-name">Tu</div>
                            <div class="ux4g-time-slot-day-name">We</div>
                            <div class="ux4g-time-slot-day-name">Th</div>
                            <div class="ux4g-time-slot-day-name">Fr</div>
                            <div class="ux4g-time-slot-day-name">Sa</div>
                            <div class="ux4g-time-slot-day-name">Su</div>
                            <div class="ux4g-time-slot-date muted">29</div>
                            <div class="ux4g-time-slot-date muted">30</div>
                            <div class="ux4g-time-slot-date" data-date="1">1</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="2">2</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="3">3</div>
                            <div class="ux4g-time-slot-date" data-date="4">4</div>
                            <div class="ux4g-time-slot-date" data-date="5">5</div>
                            <div class="ux4g-time-slot-date" data-date="6">6</div>
                            <div class="ux4g-time-slot-date" data-date="7">7</div>
                            <div class="ux4g-time-slot-date" data-date="8">8</div>
                            <div class="ux4g-time-slot-date holiday" data-date="9">9</div>
                            <div class="ux4g-time-slot-date" data-date="10">10</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="11">11</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="12">12</div>
                            <div class="ux4g-time-slot-date" data-date="13">13</div>
                            <div class="ux4g-time-slot-date" data-date="14">14</div>
                            <div class="ux4g-time-slot-date today" data-date="15">15</div>
                            <div class="ux4g-time-slot-date" data-date="16">16</div>
                            <div class="ux4g-time-slot-date" data-date="17">17</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="18">18</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="19">19</div>
                            <div class="ux4g-time-slot-date" data-date="20">20</div>
                            <div class="ux4g-time-slot-date holiday" data-date="21">21</div>
                            <div class="ux4g-time-slot-date" data-date="22">22</div>
                            <div class="ux4g-time-slot-date selected" data-date="23">23</div>
                            <div class="ux4g-time-slot-date" data-date="24">24</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="25">25</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="26">26</div>
                            <div class="ux4g-time-slot-date" data-date="27">27</div>
                            <div class="ux4g-time-slot-date" data-date="28">28</div>
                            <div class="ux4g-time-slot-date" data-date="29">29</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="30">30</div>
                            <div class="ux4g-time-slot-date weekly-off" data-date="31">31</div>
                            <div class="ux4g-time-slot-date muted">1</div>
                            <div class="ux4g-time-slot-date muted">2</div>
                            <div class="ux4g-time-slot-date muted">3</div>
                        </div>

                        <div class="ux4g-time-slot-compact-legend">
                            <div class="ux4g-time-slot-legend-item"><span class="ux4g-legend-box no-slots"></span> No slots</div>
                            <div class="ux4g-time-slot-legend-item"><span class="ux4g-legend-box holiday"></span> Public holiday</div>
                            <div class="ux4g-time-slot-legend-item"><span class="ux4g-legend-box weekly-off"></span> Weekly off</div>
                        </div>
                    </div>

                    <!-- Right Pane: Slots -->
                    <div class="ux4g-time-slot-compact-slots">
                        <div class="ux4g-time-slot-compact-desktop-header">23rd April 2026</div>
                        <div class="ux4g-time-slot-compact-list grid-2">
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>9:00 AM</span><span class="ux4g-slot-badge success">6</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>9:30 AM</span><span class="ux4g-slot-badge success">7</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>10:00 AM</span><span class="ux4g-slot-badge warning">1</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>10:30 AM</span><span class="ux4g-slot-badge success">9</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item disabled">
                                <span>11:00 AM</span><span class="ux4g-slot-badge ux4g-slot-badge-neutral">0</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>11:30 AM</span><span class="ux4g-slot-badge warning">2</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>12:00 PM</span><span class="ux4g-slot-badge warning">2</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item selected" style="background-color: var(--ux4g-bg-neutral-subtle);">
                                <span>12:30 PM</span><span class="ux4g-icon-filled" style="color: var(--ux4g-bg-primary-strong); font-size: 16px;">check_circle</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item disabled">
                                <span>1:00 PM</span><span class="ux4g-slot-badge ux4g-slot-badge-neutral">0</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>1:30 PM</span><span class="ux4g-slot-badge success">7</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>2:00 PM</span><span class="ux4g-slot-badge success">3</span>
                            </div>
                            <div class="ux4g-time-slot-compact-slot-item">
                                <span>2:30 PM</span><span class="ux4g-slot-badge warning">2</span>
                            </div>
                        </div>

                        <div class="ux4g-time-slot-compact-actions">
                            <button class="ux4g-btn ux4g-btn-outline-neutral">Cancel</button>
                            <button class="ux4g-btn ux4g-btn-primary">Confirm</button>
                        </div>
                    </div>
                </div>

                <!-- Page Footer Actions -->
                <div class="ux4g-csb-reschedule-actions">
                    <button class="ux4g-btn ux4g-btn-md ux4g-btn-outline-primary">Cancel</button>
                    <button class="ux4g-btn ux4g-btn-md ux4g-btn-primary">Request reschedule</button>
                </div>
            </div>
        </div>
    </section>
`;

export const Column = {
    name: 'Column',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reschedule Booking - Column', 'Column layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reschedule-booking', 'Reschedule Booking - Full Page', '', COLUMN_1_HTML)}
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
            ${getHeroHeader('Reschedule Booking - Column', 'Column layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reschedule-booking-fullscreen', 'Reschedule Booking - Full Page', '', FULLSCREEN_1_HTML)}
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
            ${getHeroHeader('Reschedule Booking - Column', 'Column layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reschedule-booking-card', 'Reschedule Booking - Full Page', '', CARD_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
