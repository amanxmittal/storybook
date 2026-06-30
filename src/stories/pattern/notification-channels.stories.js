/**
 * Notification Channels Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Notifications/Notification Channels',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Notification channel preferences for government service portals including channel toggles, frequency settings, per-service fine-tuning, mandatory notifications, WhatsApp opt-in, and subscription management.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'NotificationChannels');

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

// ==================== NOTIFICATION PREFERENCES ====================
export const NotificationPreferences = {
    name: 'Notification Preferences',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Notification Preferences', 'Full tabbed panel for managing notification channels, frequency, per-service preferences, mandatory notifications, WhatsApp opt-in, and subscription management.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('notification-preferences', 'Notification Preferences', 'Complete notification preferences panel with 6 tabs for channel toggles, frequency, per-service, mandatory, WhatsApp, and subscription management.', `<section class="noti-channel">
    <div class="noti-channel-container">
        <div class="noti-channel-header ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
            <h1 class="ux4g-title-l-strong">Notification Preferences</h1>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Control how and when the portal contacts you. Changes are saved automatically.</p>
        </div>
        <div class="noti-channel-layout ux4g-tab ux4g-tab-vertical ux4g-tab-pill ux4g-tab-md" data-ux4g-tab>
            <div class="noti-channel-sidebar ux4g-py-m">
                <div class="ux4g-tab-list" role="tablist">
                    <button class="ux4g-tab-item active" role="tab" tabindex="0" data-panel="pill-md-1">Notification Channels</button>
                    <button class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-2">Update Frequency</button>
                    <button class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-3">Per Service Preferences</button>
                    <button class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-4">Mandatory Notifications</button>
                    <button class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-5">Whatsapp Notifications</button>
                    <button class="ux4g-tab-item" role="tab" tabindex="-1" data-panel="pill-md-6">Manage all Subscriptions</button>
                </div>
            </div>
            <div class="noti-channel-content">
                <!-- Tab 1: Notification Channels -->
                <div class="ux4g-tab-panel active" id="pill-md-1">
                    <div class="noti-channel-panel">
                        <div class="ux4g-pb-m">
                            <h2 class="ux4g-heading-s-strong ux4g-pb-xs">Notification channels</h2>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Choose which channels the portal can use to reach you.</p>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <span class="ux4g-body-m-strong">SMS</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary noti-channel-nowrap">+91 98765 43210</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <span class="ux4g-body-m-strong">Email</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary noti-channel-nowrap">r*****h@gmail.com</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <span class="ux4g-body-m-strong">App notifications</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Push alerts on this device</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <span class="ux4g-body-m-strong">WhatsApp</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Opt-in required</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Tab 2: Update Frequency -->
                <div class="ux4g-tab-panel" id="pill-md-2">
                    <div class="noti-channel-panel">
                        <div class="ux4g-mb-xl">
                            <h2 class="ux4g-heading-s-strong ux4g-pb-xs">Update frequency</h2>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Decide how often the portal batches and sends your notifications.</p>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-l">
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <div class="ux4g-list-item-start">
                                        <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                                            <input class="ux4g-radio-input" name="radio_single_tab" type="radio">
                                            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        </label>
                                        <span class="ux4g-d-flex ux4g-flex-column">
                                            <span class="ux4g-body-m-strong">Immediately</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Get each notification the moment it happens.</span>
                                        </span>
                                    </div>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <div class="ux4g-list-item-start">
                                        <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                                            <input class="ux4g-radio-input" name="radio_single_tab" type="radio">
                                            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        </label>
                                        <span class="ux4g-d-flex ux4g-flex-column">
                                            <span class="ux4g-body-m-strong">Daily Summary</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Get a single email with all updates at the end of the day.</span>
                                        </span>
                                    </div>
                                </button>
                            </li>
                            <li class="ux4g-list-item" role="option">
                                <button class="ux4g-list-item-row ux4g-list-select-item" type="button">
                                    <div class="ux4g-list-item-start">
                                        <label class="ux4g-radio ux4g-radio-md ux4g-w-auto">
                                            <input class="ux4g-radio-input" name="radio_single_tab" type="radio">
                                            <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                        </label>
                                        <span class="ux4g-d-flex ux4g-flex-column">
                                            <span class="ux4g-body-m-strong">Weekly Digest</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Get a summary of all notifications once a week.</span>
                                        </span>
                                    </div>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Tab 3: Per Service Preferences -->
                <div class="ux4g-tab-panel" id="pill-md-3">
                    <div class="noti-channel-panel">
                        <div class="ux4g-mb-xl">
                            <h2 class="ux4g-heading-s-strong ux4g-pb-xs">Per-service preferences</h2>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Fine-tune which notifications you receive for each service you use.</p>
                        </div>
                        <div class="ux4g-accordion ux4g-accordion-arrow-right" id="accordionPerService">
                            <div class="ux4g-accordion__item">
                                <h3 class="ux4g-accordion__header">
                                    <button aria-controls="perServiceOne" aria-expanded="true" class="ux4g-accordion__button" type="button" ux4g-target="#perServiceOne" ux4g-toggle="collapse">
                                        <span class="ux4g-accordion__button-content ux4g-d-flex ux4g-flex-column ux4g-ai-start">
                                            <span class="ux4g-accordion__title ux4g-body-m-strong ux4g-text-neutral-secondary">Income Certificate</span>
                                        </span>
                                    </button>
                                </h3>
                                <div class="ux4g-accordion__collapse collapse show" id="perServiceOne" ux4g-parent="#accordionPerService">
                                    <div class="ux4g-accordion__body">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                                <div class="ux4g-list-item-row ux4g-toggles">
                                                    <div class="ux4g-list-item-start">
                                                        <span class="ux4g-body-m-strong">Status updates</span>
                                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">When your application changes stage</span>
                                                    </div>
                                                    <div class="ux4g-list-item-end">
                                                        <label class="ux4g-switch ux4g-switch-md">
                                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                                <div class="ux4g-list-item-row ux4g-toggles">
                                                    <div class="ux4g-list-item-start">
                                                        <span class="ux4g-body-m-strong">Action reminders</span>
                                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">When you need to upload or pay</span>
                                                    </div>
                                                    <div class="ux4g-list-item-end">
                                                        <label class="ux4g-switch ux4g-switch-md">
                                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                                <div class="ux4g-list-item-row ux4g-toggles">
                                                    <div class="ux4g-list-item-start">
                                                        <span class="ux4g-body-m-strong">Certificate expiry</span>
                                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Renewal reminders before expiry</span>
                                                    </div>
                                                    <div class="ux4g-list-item-end">
                                                        <label class="ux4g-switch ux4g-switch-md">
                                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-accordion__item">
                                <h3 class="ux4g-accordion__header">
                                    <button aria-controls="perServiceTwo" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#perServiceTwo" ux4g-toggle="collapse">
                                        <span class="ux4g-accordion__button-content ux4g-d-flex ux4g-flex-column ux4g-ai-start">
                                            <span class="ux4g-accordion__title ux4g-body-m-strong ux4g-text-neutral-secondary">Ration Card Renewal</span>
                                        </span>
                                    </button>
                                </h3>
                                <div class="ux4g-accordion__collapse collapse" id="perServiceTwo" ux4g-parent="#accordionPerService">
                                    <div class="ux4g-accordion__body">
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                                <div class="ux4g-list-item-row ux4g-toggles">
                                                    <div class="ux4g-list-item-start">
                                                        <span class="ux4g-body-m-strong">Status updates</span>
                                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">When your application changes stage</span>
                                                    </div>
                                                    <div class="ux4g-list-item-end">
                                                        <label class="ux4g-switch ux4g-switch-md">
                                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                                <div class="ux4g-list-item-row ux4g-toggles">
                                                    <div class="ux4g-list-item-start">
                                                        <span class="ux4g-body-m-strong">Action reminders</span>
                                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">When you need to upload or pay</span>
                                                    </div>
                                                    <div class="ux4g-list-item-end">
                                                        <label class="ux4g-switch ux4g-switch-md">
                                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                                <div class="ux4g-list-item-row ux4g-toggles">
                                                    <div class="ux4g-list-item-start">
                                                        <span class="ux4g-body-m-strong">Certificate expiry</span>
                                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Renewal reminders before expiry</span>
                                                    </div>
                                                    <div class="ux4g-list-item-end">
                                                        <label class="ux4g-switch ux4g-switch-md">
                                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Tab 4: Mandatory Notifications -->
                <div class="ux4g-tab-panel" id="pill-md-4">
                    <div class="noti-channel-panel">
                        <div class="ux4g-mb-xl">
                            <h2 class="ux4g-heading-s-strong ux4g-pb-xs">Mandatory notifications</h2>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">These critical alerts keep you informed of legal and time-sensitive actions. Government policy requires that they stay on.</p>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                                <span class="ux4g-body-m-strong">SLA breach alerts</span>
                                                <span class="ux4g-tag-tonal-neutral ux4g-tag-s">Locked</span>
                                            </div>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Sent when an application crosses its service guarantee deadline.</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input disabled class="ux4g-switch-input" type="checkbox" checked />
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                                <span class="ux4g-body-m-strong">Rejection notices</span>
                                                <span class="ux4g-tag-tonal-neutral ux4g-tag-s">Locked</span>
                                            </div>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Sent if an application is rejected, with the reason and next steps.</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input disabled class="ux4g-switch-input" type="checkbox" checked />
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                                <span class="ux4g-body-m-strong">Legal & payment deadlines</span>
                                                <span class="ux4g-tag-tonal-neutral ux4g-tag-s">Locked</span>
                                            </div>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Sent for statutory deadlines and fee payment due dates.</span>
                                        </div>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input disabled class="ux4g-switch-input" type="checkbox" checked />
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Tab 5: WhatsApp Notifications -->
                <div class="ux4g-tab-panel" id="pill-md-5">
                    <div class="noti-channel-panel">
                        <div class="ux4g-mb-xl">
                            <h2 class="ux4g-heading-s-strong ux4g-pb-xs">WhatsApp notifications</h2>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Receive updates on WhatsApp. This channel is strictly opt-in and needs your explicit consent.</p>
                        </div>
                        <div class="ux4g-p-l ux4g-radius-m ux4g-mb-xl ux4g-bg-success-soft noti-channel-success-box">
                            <h3 class="ux4g-body-m-strong ux4g-mb-m">What you will receive on WhatsApp</h3>
                            <ul class="ux4g-list ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s">
                                <li class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                    <span class="ux4g-icon-outlined">check</span>
                                    <span class="ux4g-body-s-default">Application status changes</span>
                                </li>
                                <li class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                    <span class="ux4g-icon-outlined">check</span>
                                    <span class="ux4g-body-s-default">Appointment reminders (D-1 and H-1)</span>
                                </li>
                                <li class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                    <span class="ux4g-icon-outlined">check</span>
                                    <span class="ux4g-body-s-default">Action-required alerts with quick links</span>
                                </li>
                            </ul>
                        </div>
                        <label class="ux4g-checkbox ux4g-checkbox-md">
                            <input id="whatsapp-consent-checkbox" data-ux4g-toggle-disable="#whatsapp-enable-btn" class="ux4g-checkbox-input" type="checkbox" />
                            <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                            <div class="ux4g-checkbox-content">
                                <div class="ux4g-checkbox-header">
                                    <span class="ux4g-checkbox-label">I consent to receiving notifications on WhatsApp at +91 98765 43210. <sup class="ux4g-text-error-default">*</sup></span>
                                </div>
                                <div class="ux4g-checkbox-description">You can withdraw this consent at any time. This checkbox is never pre-ticked (DPDP Act 2023).</div>
                            </div>
                        </label>
                        <button id="whatsapp-enable-btn" class="ux4g-btn-primary ux4g-my-xl" disabled>
                            <span class="ux4g-btn-content">Enable WhatsApp notifications</span>
                        </button>
                    </div>
                </div>
                <!-- Tab 6: Manage all Subscriptions -->
                <div class="ux4g-tab-panel" id="pill-md-6">
                    <div class="noti-channel-panel">
                        <div class="ux4g-mb-xl">
                            <h2 class="ux4g-heading-s-strong ux4g-pb-xs">Manage all subscriptions</h2>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">A complete overview of every notification type and a quick way to opt out of optional ones.</p>
                        </div>
                        <div class="ux4g-mb-m">
                            <span class="ux4g-body-xs-strong ux4g-text-neutral-secondary ux4g-tt-uppercase">Optional — You can turn these off</span>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch ux4g-mb-xl">
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <span class="ux4g-body-m-strong">Status updates</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Stage changes across all your applications</span>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <span class="ux4g-body-m-strong">Action reminders</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Upload and payment reminders</span>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <span class="ux4g-body-m-strong">Certificate expiry</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Renewal reminders before documents expire</span>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row ux4g-toggles">
                                    <div class="ux4g-list-item-start">
                                        <span class="ux4g-body-m-strong">Promotional updates</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">New services and scheme announcements</span>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <label class="ux4g-switch ux4g-switch-md">
                                            <input class="ux4g-switch-input" type="checkbox" role="switch">
                                            <div class="ux4g-switch-control"><span class="ux4g-switch-track"><span class="ux4g-switch-thumb"></span></span></div>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div class="ux4g-mb-m">
                            <span class="ux4g-body-xs-strong ux4g-text-neutral-secondary ux4g-tt-uppercase">Mandatory — Required by government policy</span>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-mb-xl">
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row">
                                    <div class="ux4g-list-item-start">
                                        <span class="ux4g-body-m-strong">SLA breach alerts</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Service guarantee deadline notifications</span>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <span class="ux4g-tag-tonal-neutral ux4g-tag-s">Always on</span>
                                    </div>
                                </div>
                            </li>
                            <li class="ux4g-list-item noti-channel-list-item" role="option">
                                <div class="ux4g-list-item-row">
                                    <div class="ux4g-list-item-start">
                                        <span class="ux4g-body-m-strong">Rejection notices</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Application rejection with reasons</span>
                                    </div>
                                    <div class="ux4g-list-item-end">
                                        <span class="ux4g-tag-tonal-neutral ux4g-tag-s">Always on</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <button class="ux4g-btn ux4g-btn-outline-danger">
                            <span class="ux4g-btn-content">Turn off all optional notifications</span>
                        </button>
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

// ==================== NOTIFICATION STATUS UPDATE ====================
export const NotificationStatusUpdate = {
    name: 'Notification Status Update',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Notification Status Update', 'Application status change view with auto-dismiss alert, result list with SLA tracking, and vertical timeline shown after clicking a notification.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('notification-status-update', 'Status Update', 'Info alert, application result list with SLA, and vertical timeline for application journey tracking.', `<section>
    <h1 class="ux4g-text-center ux4g-bg-error-strong ux4g-p-l">Notification Channels</h1>
    <div class="ux4g-alert ux4g-alert-info" data-auto-dismiss="5000">
        <i class="ux4g-icon ux4g-alert-icon">info</i>
        <div class="ux4g-alert-content">
            <span class="ux4g-alert-title">Status updated just now</span>
            <span class="ux4g-alert-message">Your application moved to Under Review. This banner auto-dismisses in 5 seconds.</span>
        </div>
        <div class="ux4g-alert-actions">
            <button class="ux4g-alert-close">
                <i class="ux4g-icon">close</i>
            </button>
        </div>
    </div>
    <div class="ux4g-application-main">
        <div class="ux4g-py-l">
            <a class="ux4g-text-link-md" href="" target="_blank">
                <i class="ux4g-icon">arrow_back</i> Back
            </a>
        </div>
        <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <div class="ux4g-result-list-title-group">
                        <h2 class="ux4g-result-list-title ux4g-title-s-default">Income Certificate</h2>
                        <div class="ux4g-result-list-meta">
                            <span class="ux4g-result-list-id ux4g-body-s-default ux4g-text-neutral-secondary">
                                Application ID &middot;
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">INC-2026-MH-04127</span>
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
            <article class="ux4g-sla-linear ux4g-sla-linear-rounded ux4g-sla-status-warning" data-ux-sla-linear data-ux-progress="50" aria-label="Warning rounded linear SLA progress at 50 percent">
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
                    <div class="ux4g-journey-indicator">
                        <span class="ux4g-icon-outlined">check</span>
                    </div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">07 Apr 2026, 10:24 AM</span>
                            <span class="ux4g-journey-title">Application Submitted</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-journey-step ux4g-journey-step-completed">
                    <div class="ux4g-journey-indicator">
                        <span class="ux4g-icon-outlined">check</span>
                    </div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">08 Apr 2026, 11:33 AM</span>
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-journey-title">Documents Verified</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ux4g-journey-step ux4g-journey-step-active">
                    <div class="ux4g-journey-indicator">
                        <span class="ux4g-icon-outlined">check</span>
                    </div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">10 Apr 2026, 11:33 AM</span>
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-journey-title">Officer Review</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="ux4g-journey-step">
                    <div class="ux4g-journey-indicator">
                        <span class="ux4g-icon-outlined">check</span>
                    </div>
                    <div class="ux4g-journey-card ux4g-journey-card--standard">
                        <div class="ux4g-journey-info">
                            <span class="ux4g-journey-date">11 Apr 2026 (Est)</span>
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-journey-title">Certificate Will Be Issued</span>
                                <div class="ux4g-journey-status">
                                    <span class="ux4g-journey-status-dot ux4g-journey-status-dot--warning" aria-hidden="true"></span>
                                    <span class="ux4g-label-m-default ux4g-text-neutral-primary">11 days remaining</span>
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
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
