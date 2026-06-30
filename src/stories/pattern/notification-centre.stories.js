/**
 * Notification Centre Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Notifications/Notification Centre',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Notification Centre patterns for government services including right-side and left-side drawers with grouped notification items and empty state.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'NotificationCentre');

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

// ==================== NOTIFICATION CENTRE DRAWER ====================
export const NotificationCentreDrawer = {
    name: 'Notification Centre Drawer',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Notification Centre Drawer', 'Right-side drawer with grouped notification items including action required alerts, status updates, reminders, and info messages.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('notification-centre-drawer', 'Notification Centre Drawer', 'Right-side drawer with grouped notifications showing today, yesterday, and earlier this week sections.', `<section>
    <header class="ux4g-topbar ux4g-topbar-wide" role="banner">
        <div class="ux4g-container">
            <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                <div>
                    <a aria-label="Government of India (opens in new tab)" class="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
                        <span class="india-flag"></span>
                        <span class="ux4g-label-m-default">Government of India</span>
                        <sup class="ux4g-icon-outlined">open_in_new</sup>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <nav class="ux4g-navbar">
        <div class="ux4g-container">
            <div class="ux4g-navbar-wrap">
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                    <img src="./assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                    <span class="ux4g-divider-vertical"></span>
                    <img src="./assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                    <div class="ux4g-d-flex ux4g-flex-column">
                        <span class="ux4g-label-m-strong">Title</span>
                        <span class="ux4g-body-xs-default">Description</span>
                    </div>
                </div>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                    <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-cursor-pointer" data-drawer="ux4g-drawerRight">notifications</i>
                </div>
            </div>
        </div>
    </nav>
    <div class="ux4g-drawer-overlay">
        <div class="ux4g-drawer ux4g-drawer-right" id="ux4g-drawerRight">
            <div class="ux4g-drawer-header ux4g-notification-drawer-header ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                <span class="ux4g-title-m-default">Notification</span>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                    <a href="#" class="ux4g-text-link-sm">Mark as read</a>
                    <button class="ux4g-drawer-close ux4g-notification-close-btn" data-drawer-close="">
                        <i class="ux4g-icon-outlined">close</i>
                    </button>
                </div>
            </div>
            <div class="ux4g-drawer-body ux4g-notification-drawer-body">
                <div class="ux4g-notification-group-header">
                    <span class="ux4g-body-xs-strong">TODAY</span>
                </div>
                <div class="ux4g-notification-item">
                    <span class="ux4g-badge-dot-danger"></span>
                    <div class="ux4g-notification-content">
                        <div class="ux4g-notification-top-row">
                            <span class="ux4g-body-xs-strong">Action required</span>
                            <span class="ux4g-body-xs-default">10:24 AM</span>
                        </div>
                        <span class="ux4g-body-s-strong">Income Certificate - Action required</span>
                        <span class="ux4g-body-xs-default">Upload your income proof by 15 Apr to avoid rejection.</span>
                        <a class="ux4g-text-link-sm ux4g-notification-action-link" href="#" target="_blank">Upload now</a>
                    </div>
                </div>
                <div class="ux4g-notification-item">
                    <span class="ux4g-badge-dot-primary"></span>
                    <div class="ux4g-notification-content">
                        <div class="ux4g-notification-top-row">
                            <span class="ux4g-body-xs-strong">Status Update</span>
                            <span class="ux4g-body-xs-default">8:03 AM</span>
                        </div>
                        <span class="ux4g-body-s-strong">Income Certificate - Under Review</span>
                        <span class="ux4g-body-xs-default">Your application has moved to officer review stage.</span>
                    </div>
                </div>
                <div class="ux4g-notification-group-header">
                    <span class="ux4g-body-xs-strong">YESTERDAY</span>
                </div>
                <div class="ux4g-notification-item">
                    <span class="ux4g-badge-dot-warning"></span>
                    <div class="ux4g-notification-content">
                        <div class="ux4g-notification-top-row">
                            <span class="ux4g-body-xs-strong">Reminder</span>
                            <span class="ux4g-body-xs-default">8:03 AM</span>
                        </div>
                        <span class="ux4g-body-s-strong">Draft expiring - Income Certificate</span>
                        <span class="ux4g-body-xs-default">Your draft expires in 5 days.</span>
                    </div>
                </div>
                <div class="ux4g-notification-item">
                    <span class="ux4g-badge-dot-info"></span>
                    <div class="ux4g-notification-content">
                        <div class="ux4g-notification-top-row">
                            <span class="ux4g-body-xs-strong">Info</span>
                            <span class="ux4g-body-xs-default">8:03 AM</span>
                        </div>
                        <span class="ux4g-body-s-strong">PAN Correction - Status update</span>
                        <span class="ux4g-body-xs-default">Under review by Income Tax Dept.</span>
                    </div>
                </div>
                <div class="ux4g-notification-group-header">
                    <span class="ux4g-body-xs-strong">EARLIER THIS WEEK</span>
                </div>
                <div class="ux4g-notification-item">
                    <span class="ux4g-badge-dot-info"></span>
                    <div class="ux4g-notification-content">
                        <div class="ux4g-notification-top-row">
                            <span class="ux4g-body-xs-strong">Info</span>
                            <span class="ux4g-body-xs-default">8:03 AM</span>
                        </div>
                        <span class="ux4g-body-s-strong">Birth Certificate - Submitted</span>
                        <span class="ux4g-body-xs-default">Reference: BC-2026-MH-001.</span>
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

// ==================== NOTIFICATION CENTRE EMPTY ====================
export const NotificationCentreEmpty = {
    name: 'Notification Centre Empty',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Notification Centre - Empty State', 'Left-side drawer with empty state showing a notification icon and a friendly message when no notifications are available.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('notification-centre-empty', 'Notification Centre - Empty State', 'Left-side drawer with empty state illustration and no-notifications message.', `<section>
    <header class="ux4g-topbar ux4g-topbar-wide" role="banner">
        <div class="ux4g-container">
            <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                <div>
                    <a aria-label="Government of India (opens in new tab)" class="ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
                        <span class="india-flag"></span>
                        <span class="ux4g-label-m-default">Government of India</span>
                        <sup class="ux4g-icon-outlined">open_in_new</sup>
                    </a>
                </div>
            </div>
        </div>
    </header>
    <nav class="ux4g-navbar">
        <div class="ux4g-container">
            <div class="ux4g-navbar-wrap">
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                    <img src="./assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                    <span class="ux4g-divider-vertical"></span>
                    <img src="./assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                    <div class="ux4g-d-flex ux4g-flex-column">
                        <span class="ux4g-label-m-strong">Title</span>
                        <span class="ux4g-body-xs-default">Description</span>
                    </div>
                </div>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                    <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-cursor-pointer" data-drawer="ux4g-drawerLeft">notifications</i>
                </div>
            </div>
        </div>
    </nav>
    <div class="ux4g-drawer-overlay">
        <div class="ux4g-drawer ux4g-drawer-left" id="ux4g-drawerLeft">
            <div class="ux4g-drawer-header ux4g-notification-drawer-header ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                <span class="ux4g-title-m-default">Notification</span>
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                    <button class="ux4g-drawer-close ux4g-notification-close-btn" data-drawer-close="">
                        <i class="ux4g-icon-outlined">close</i>
                    </button>
                </div>
            </div>
            <div class="ux4g-drawer-body ux4g-notification-drawer-body">
                <div class="ux4g-empty-state">
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-pill ux4g-bg-primary-soft">
                        <i class="ux4g-icon-outlined ux4g-text-primary">notifications</i>
                    </button>
                    <div class="ux4g-empty-state-content">
                        <h3 class="ux4g-title-l-strong">No notifications</h3>
                        <p class="ux4g-body-m-default">You're all caught up! New notifications will appear here.</p>
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
