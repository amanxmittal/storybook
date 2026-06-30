/**
 * Weekly calendar view for selecting available consultation time slots with visual availability indicators.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Time Slot Selection',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Weekly calendar view for selecting available consultation time slots with visual availability indicators.',
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

const FULLSCREEN_1_HTML = `    <section class="ux4g-bg-neutral ux4g-py-2xl">
        <div class="ux4g-container">
            <!-- Breadcrumbs -->
            <div class="ux4g-pb-m">
                <nav class="ux4g-breadcrumb ux4g-breadcrumb-divider" aria-label="breadcrumb">
                    <ol class="ux4g-breadcrumb-list ux4g-d-flex ux4g-ai-center">
                        <li class="ux4g-breadcrumb-item">
                            <a href="#" class="ux4g-breadcrumb-link ux4g-d-flex ux4g-ai-center ux4g-inline-gap-3xs">
                                <i class="ux4g-icon-outlined ux4g-fs-16">home</i>
                                <span>Home</span>
                            </a>
                        </li>
                        <li class="ux4g-breadcrumb-item">
                            <a href="#" class="ux4g-breadcrumb-link">
                                <span>Legal Aid</span>
                            </a>
                        </li>
                        <li class="ux4g-breadcrumb-item">
                            <a href="#" class="ux4g-breadcrumb-link">
                                <span>Advocates</span>
                            </a>
                        </li>
                        <li class="ux4g-breadcrumb-item active" aria-current="page">
                            <span>Adv. M. Sharma</span>
                        </li>
                    </ol>
                </nav>
            </div>

            <!-- Header -->
            <div class="ux4g-mb-xl">
                <h1 class="ux4g-heading-xl-strong ux4g-mb-3xs">Select appointment time with Adv. M. Sharma</h1>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Choose a date and 30-minute slot. Your booking is not reserved until confirmed.</p>
            </div>

            <!-- Weekly Slots Container -->
            <div class="ux4g-time-slot-weekly-container">
                <!-- Mobile Navigation Header (Hidden on Desktop) -->
                <div class="ux4g-time-slot-mobile-nav">
                    <button class="ux4g-btn-icon ux4g-btn-text-neutral">
                        <span class="ux4g-icon-outlined">arrow_back</span>
                    </button>
                    <div class="ux4g-time-slot-mobile-date">
                        <strong>Mon 14 Apr</strong>
                        <span class="ux4g-text-success-600">Today</span>
                    </div>
                    <button class="ux4g-btn-icon ux4g-btn-text-neutral">
                        <span class="ux4g-icon-outlined">arrow_forward</span>
                    </button>
                </div>

                <div class="ux4g-time-slot-weekly-grid" data-active-day="0">
                    <!-- Headers -->
                    <div class="ux4g-time-slot-time-col"></div>
                    <div class="ux4g-time-slot-day-header" data-day="0">
                        <strong>Mon</strong><span>14 Apr</span>
                    </div>
                    <div class="ux4g-time-slot-day-header" data-day="1">
                        <strong>Tue</strong><span>15 Apr</span>
                    </div>
                    <div class="ux4g-time-slot-day-header" data-day="2">
                        <strong>Wed</strong><span>16 Apr</span>
                    </div>
                    <div class="ux4g-time-slot-day-header holiday" data-day="3">
                        <strong>Thu</strong><span>17 Apr</span>
                    </div>
                    <div class="ux4g-time-slot-day-header" data-day="4">
                        <strong>Fri</strong><span>18 Apr</span>
                    </div>
                    <div class="ux4g-time-slot-day-header weekly-off" data-day="5">
                        <strong>Sat</strong><span>19 Apr</span>
                    </div>
                    <div class="ux4g-time-slot-day-header weekly-off" data-day="6">
                        <strong>Sun</strong><span>20 Apr</span>
                    </div>

                    <!-- 9:00 AM -->
                    <div class="ux4g-time-slot-time-col">9:00 AM</div>
                    <button class="ux4g-time-slot-cell available" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
                        <span class="ux4g-time-slot-slots">4 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
                        <span class="ux4g-time-slot-slots">5 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
                        <span class="ux4g-time-slot-slots">6 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell available" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
                        <span class="ux4g-time-slot-slots">7 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 9:30 AM -->
                    <div class="ux4g-time-slot-time-col">9:30 AM</div>
                    <button class="ux4g-time-slot-cell available" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">9:30 AM</span>
                        <span class="ux4g-time-slot-slots">6 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="1">No slots available</button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">9:30 AM</span>
                        <span class="ux4g-time-slot-slots">6 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell limited" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">9:30 AM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 10:00 AM -->
                    <div class="ux4g-time-slot-time-col">10:00 AM</div>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="0">No slots available</button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">10:00 AM</span>
                        <span class="ux4g-time-slot-slots">9 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">10:00 AM</span>
                        <span class="ux4g-time-slot-slots">10 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell limited" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">10:00 AM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 10:30 AM -->
                    <div class="ux4g-time-slot-time-col">10:30 AM</div>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="0">No slots available</button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">10:30 AM</span>
                        <span class="ux4g-time-slot-slots">5 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">10:30 AM</span>
                        <span class="ux4g-time-slot-slots">8 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell available" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">10:30 AM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 11:00 AM -->
                    <div class="ux4g-time-slot-time-col">11:00 AM</div>
                    <button class="ux4g-time-slot-cell available" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">11:00 AM</span>
                        <span class="ux4g-time-slot-slots">10 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell limited" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">11:00 AM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">11:00 AM</span>
                        <span class="ux4g-time-slot-slots">10 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3">
                        <strong>Public Holiday</strong>
                        <span>Gandhi Jayanti</span>
                    </div>
                    <button class="ux4g-time-slot-cell available" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">11:00 AM</span>
                        <span class="ux4g-time-slot-slots">3 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5">Weekly off</div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6">Weekly off</div>

                    <!-- 11:30 AM -->
                    <div class="ux4g-time-slot-time-col">11:30 AM</div>
                    <button class="ux4g-time-slot-cell available" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">11:30 AM</span>
                        <span class="ux4g-time-slot-slots">5 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">11:30 AM</span>
                        <span class="ux4g-time-slot-slots">6 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">11:30 AM</span>
                        <span class="ux4g-time-slot-slots">7 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="4">No slots available</button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 12:00 PM -->
                    <div class="ux4g-time-slot-time-col">12:00 PM</div>
                    <button class="ux4g-time-slot-cell available" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">12:00 PM</span>
                        <span class="ux4g-time-slot-slots">5 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">12:00 PM</span>
                        <span class="ux4g-time-slot-slots">10 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell limited" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">12:00 PM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="4">No slots available</button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 12:30 PM -->
                    <div class="ux4g-time-slot-time-col">12:30 PM</div>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="0">No slots available</button>
                    <button class="ux4g-time-slot-cell disabled" disabled="" data-day="1">No slots available</button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">12:30 PM</span>
                        <span class="ux4g-time-slot-slots">8 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell available" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">12:30 PM</span>
                        <span class="ux4g-time-slot-slots">10 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 1:00 PM -->
                    <div class="ux4g-time-slot-time-col">1:00 PM</div>
                    <button class="ux4g-time-slot-cell limited" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">1:00 PM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">1:00 PM</span>
                        <span class="ux4g-time-slot-slots">3 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">1:00 PM</span>
                        <span class="ux4g-time-slot-slots">5 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell available" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">1:00 PM</span>
                        <span class="ux4g-time-slot-slots">4 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

                    <!-- 1:30 PM -->
                    <div class="ux4g-time-slot-time-col">1:30 PM</div>
                    <button class="ux4g-time-slot-cell available" data-day="0">
                        <span class="ux4g-time-slot-mobile-time">1:30 PM</span>
                        <span class="ux4g-time-slot-slots">6 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell available" data-day="1">
                        <span class="ux4g-time-slot-mobile-time">1:30 PM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <button class="ux4g-time-slot-cell limited" data-day="2">
                        <span class="ux4g-time-slot-mobile-time">1:30 PM</span>
                        <span class="ux4g-time-slot-slots">2 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
                    <button class="ux4g-time-slot-cell available" data-day="4">
                        <span class="ux4g-time-slot-mobile-time">1:30 PM</span>
                        <span class="ux4g-time-slot-slots">3 slots</span>
                    </button>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
                    <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>
                </div>

                <div class="ux4g-time-slot-weekly-legend">
                    <div class="ux4g-time-slot-legend-item">
                        <span class="ux4g-legend-box bordered"></span> Available
                    </div>
                    <div class="ux4g-time-slot-legend-item">
                        <span class="ux4g-legend-box check-purple"><span class="ux4g-icon-filled">check_circle</span></span> Selected
                    </div>
                    <div class="ux4g-time-slot-legend-item">
                        <span class="ux4g-legend-box disabled"></span> No slots
                    </div>
                    <div class="ux4g-time-slot-legend-item">
                        <span class="ux4g-legend-box border-yellow"></span> Limited slots
                    </div>
                    <div class="ux4g-time-slot-legend-item">
                        <span class="ux4g-legend-box holiday"></span> Public holiday
                    </div>
                    <div class="ux4g-time-slot-legend-item">
                        <span class="ux4g-legend-box weekly-off"></span> Weekly off
                    </div>
                </div>
                <div class="ux4g-time-slot-weekly-actions">
                    <button class="ux4g-btn ux4g-btn-outline-neutral">Cancel</button>
                    <button class="ux4g-btn ux4g-btn-primary" disabled="">Confirm</button>
                </div>
            </div>
        </div>
    </section>
`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Time Slot Selection - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('time-slot-selection', 'Time Slot Selection - Full Page', '', FULLSCREEN_1_HTML)}
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
            ${getHeroHeader('Time Slot Selection - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('time-slot-selection-column', 'Time Slot Selection - Full Page', '', COLUMN_1_HTML)}
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
            ${getHeroHeader('Time Slot Selection - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('time-slot-selection-card', 'Time Slot Selection - Full Page', '', CARD_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
