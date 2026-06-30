/**
 * Reminder Alert Patterns
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Notifications/Reminder Alerts',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Reminder alert patterns for government services including info, success, warning, and error severity levels with timed expiry notifications and action prompts.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'ReminderAlerts');

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

// ==================== REMINDER ALERT - INFO ====================
export const ReminderAlertInfo = {
    name: 'ReminderAlertInfo',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reminder Alert - Info', 'Info-level reminder alert for 30 days before certificate expiry with renewal prompt.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reminder-info', 'Info Reminder Alert', '30 days before expiry info reminder with renewal action link.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-reminder-alert">
        <div class="ux4g-context-alert ux4g-alert-info">
            <i class="ux4g-icon ux4g-alert-icon">info</i>
            <span class="ux4g-alert-title">30 days before expiry</span>
            <div class="ux4g-alert-actions">
                <button class="ux4g-alert-close"><i class="ux4g-icon">close</i></button>
            </div>
            <div class="ux4g-alert-message">Your Income Certificate expires on 15 May 2026 (30 days away). Renew early to avoid a service gap: bit.ly/renew-mh.</div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== REMINDER ALERT - SUCCESS ====================
export const ReminderAlertSuccess = {
    name: 'ReminderAlertSuccess',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reminder Alert - Success', 'Success reminder alert for 1 hour before appointment with confirmation details.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reminder-success', 'Success Reminder Alert', '1 hour before appointment success reminder with time and location.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-reminder-alert">
        <div class="ux4g-context-alert ux4g-alert-success">
            <i class="ux4g-icon ux4g-alert-icon">check_circle</i>
            <span class="ux4g-alert-title">1 hour before: Sent 10:13 AM</span>
            <div class="ux4g-alert-actions">
                <button class="ux4g-alert-close"><i class="ux4g-icon">close</i></button>
            </div>
            <div class="ux4g-alert-message">In 1 hour: Your 11:00 AM field inspection. Revenue Inspector, Sector 12 office. Directions: bit.ly/dir-mh.</div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== REMINDER ALERT - WARNING ====================
export const ReminderAlertWarning = {
    name: 'ReminderAlertWarning',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reminder Alert - Warning', 'Warning reminder alert for 5 days before draft expiry with resume action.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reminder-warning', 'Warning Reminder Alert', '5 days before expiry warning reminder with resume link.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-reminder-alert">
        <div class="ux4g-context-alert ux4g-alert-warning">
            <i class="ux4g-icon ux4g-alert-icon">warning</i>
            <span class="ux4g-alert-title">5 days before expiry</span>
            <div class="ux4g-alert-actions">
                <button class="ux4g-alert-close"><i class="ux4g-icon">close</i></button>
            </div>
            <div class="ux4g-alert-message">Your Income Certificate draft expires in 5 days (16 Apr). Resume now: bit.ly/resume-mh.</div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== REMINDER ALERT - ERROR (2 DAYS BEFORE) ====================
export const ReminderAlertError = {
    name: 'ReminderAlertError',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reminder Alert - Error', 'Error reminder alert for 2 days before expiry with urgent submission prompt.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reminder-error', 'Error Reminder Alert', '2 days before expiry error reminder with urgent action message.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-reminder-alert">
        <div class="ux4g-context-alert ux4g-alert-error">
            <i class="ux4g-icon ux4g-alert-icon">error</i>
            <span class="ux4g-alert-title">2 days before expiry</span>
            <div class="ux4g-alert-actions">
                <button class="ux4g-alert-close"><i class="ux4g-icon">close</i></button>
            </div>
            <div class="ux4g-alert-message">Only 2 days left. Submit your Income Certificate before 16 Apr or your draft will be deleted. Resume: bit.ly/resume-mh.</div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== REMINDER ALERT - EXPIRED (ON EXPIRY DAY) ====================
export const ReminderAlertExpired = {
    name: 'ReminderAlertExpired',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reminder Alert - Expired', 'Error reminder alert on expiry day with action link to start a new application.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('reminder-expired', 'Expired Reminder Alert', 'On expiry day error reminder with footer action link.', `<section class="ux4g-py-xl ux4g-px-m ux4g-bg-neutral">
    <div class="ux4g-reminder-alert">
        <div class="ux4g-context-alert ux4g-alert-error">
            <i class="ux4g-icon ux4g-alert-icon">error</i>
            <span class="ux4g-alert-title">On expiry day</span>
            <div class="ux4g-alert-actions">
                <button class="ux4g-alert-close"><i class="ux4g-icon">close</i></button>
            </div>
            <div class="ux4g-alert-message">Your Income Certificate draft expired on 16 Apr. Your saved data has been removed. Start a new application: bit.ly/apply-mh.</div>
            <div class="ux4g-alert-footer">
                <a href="#" class="ux4g-alert-link">Action</a>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
