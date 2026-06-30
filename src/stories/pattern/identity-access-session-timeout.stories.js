import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Identity & Access/Session Timeout',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Session timeout modal patterns showing expiring, expiring soon, and session ended states with countdown timers and progress indicators.',
            },
            source: { code: null },
            canvas: { sourceState: 'none', withToolbar: true },
            story: { inline: false },
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


const getReactCode = (html) => htmlToJsx(html, 'IdentityAccess');


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


const SESSION_EXPIRING_HTML = `    <!-- Screen 1: Your session is expiring -->
    <section>
        <div class="ux4g-session-timeout-wrapper ux4g-relative ux4g-w-100 ux4g-o-hidden">
            <!-- Reusable: Mock Dashboard Backdrop (Blurred) -->
            <div class="ux4g-w-100 ux4g-h-100 ux4g-blur-3 ux4g-opacity-40 ux4g-pointer-events-none ux4g-select-none">
                <div class="ux4g-bg-neutral-elevated ux4g-bb ux4g-border-neutral-subtle ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-px-xl ux4g-py-m"
                    style="height: 60px;">
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 120px; height: 24px;"></div>
                    <div class="ux4g-d-flex ux4g-gap-m">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                    </div>
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-full" style="width: 32px; height: 32px;"></div>
                </div>
                <div class="ux4g-d-flex ux4g-gap-xl ux4g-p-xl" style="height: calc(100% - 60px);">
                    <div
                        class="ux4g-flex-1 ux4g-bg-neutral-elevated ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 200px; height: 24px;"></div>
                        <div class="ux4g-flex-1 ux4g-bg-neutral-soft ux4g-radius-s" style="min-height: 180px;"></div>
                        <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-2xs">
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="width: 60%; height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                        </div>
                    </div>
                    <div class="ux4g-d-none ux4g-sm-d-flex ux4g-flex-column ux4g-gap-l" style="width: 260px;">
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                    </div>
                </div>
            </div>

            <!-- Overlay & Centered Modal Card -->
            <div
                class="ux4g-absolute ux4g-top-0 ux4g-bottom-0 ux4g-start-0 ux4g-end-0 session-out-bg ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-p-xl ux4g-z-1">
                <!-- Session Modal Card Component -->
                <div
                    class="ux4g-session-card ux4g-bg-neutral-elevated ux4g-radius-l ux4g-shadow-l3 ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-text-center ux4g-z-2">
                    <!-- Purple Lock Status Badge -->
                    <div class="ux4g-session-badge-outer ux4g-session-badge-primary">
                        <div class="ux4g-session-badge-inner">
                            <span class="ux4g-icon-outlined ux4g-text-white">lock</span>
                        </div>
                    </div>

                    <!-- Heading -->
                    <h2 class="ux4g-heading-m-default ux4g-text-neutral-primary"
                        style="margin-block: var(--ux4g-margin-m) var(--ux4g-margin-xs);">Your session is expiring</h2>

                    <!-- Countdown Timer (Purple) -->
                    <div class="ux4g-session-timer ux4g-text-primary ux4g-mb-m" style="line-height: 1;"
                        aria-live="polite">04:47</div>

                    <!-- Description -->
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-xl" style="max-width: 340px;">
                        You've been inactive for a while. For your security, we'll sign you out automatically.</p>

                    <!-- Progress Bar (50% filled, Purple) -->
                    <div class="ux4g-w-100 ux4g-radius-full ux4g-bg-neutral-subtle ux4g-o-hidden ux4g-mb-2xl"
                        style="height: 8px;" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="ux4g-session-progress-fill ux4g-bg-primary-strong ux4g-h-100 ux4g-radius-full"
                            style="width: 50%;"></div>
                    </div>

                    <!-- Actions -->
                    <div class="ux4g-session-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="button">Stay signed in</button>
                        <button class="ux4g-btn ux4g-btn-outline-neutral ux4g-btn-lg" type="button">Sign out
                            now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Screen 2: Your session is expiring soon -->`;

const SESSION_EXPIRING_SOON_HTML = `    <!-- Screen 2: Your session is expiring soon -->
    <section>
        <div class="ux4g-session-timeout-wrapper ux4g-relative ux4g-w-100 t ux4g-o-hidden">
            <!-- Reusable: Mock Dashboard Backdrop (Blurred) -->
            <div class="ux4g-w-100 ux4g-h-100 ux4g-blur-3 ux4g-opacity-40 ux4g-pointer-events-none ux4g-select-none">
                <div class="ux4g-bg-neutral-elevated ux4g-bb ux4g-border-neutral-subtle ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-px-xl ux4g-py-m"
                    style="height: 60px;">
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 120px; height: 24px;"></div>
                    <div class="ux4g-d-flex ux4g-gap-m">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                    </div>
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-full" style="width: 32px; height: 32px;"></div>
                </div>
                <div class="ux4g-d-flex ux4g-gap-xl ux4g-p-xl" style="height: calc(100% - 60px);">
                    <div
                        class="ux4g-flex-1 ux4g-bg-neutral-elevated ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 200px; height: 24px;"></div>
                        <div class="ux4g-flex-1 ux4g-bg-neutral-soft ux4g-radius-s" style="min-height: 180px;"></div>
                        <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-2xs">
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="width: 60%; height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                        </div>
                    </div>
                    <div class="ux4g-d-none ux4g-sm-d-flex ux4g-flex-column ux4g-gap-l" style="width: 260px;">
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                    </div>
                </div>
            </div>

            <!-- Overlay & Centered Modal Card -->
            <div
                class="ux4g-absolute ux4g-top-0 ux4g-bottom-0 ux4g-start-0 ux4g-end-0 session-out-bg ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-p-xl ux4g-z-1">
                <!-- Session Modal Card Component -->
                <div
                    class="ux4g-session-card ux4g-bg-neutral-elevated ux4g-radius-l ux4g-shadow-l3 ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-text-center ux4g-z-2">
                    <!-- Amber Warning Status Badge -->
                    <div class="ux4g-session-badge-outer ux4g-session-badge-warning">
                        <div class="ux4g-session-badge-inner">
                            <span class="ux4g-icon-outlined ux4g-text-white">warning</span>
                        </div>
                    </div>

                    <!-- Heading -->
                    <h2 class="ux4g-heading-m-default ux4g-text-neutral-primary"
                        style="margin-block: var(--ux4g-margin-m) var(--ux4g-margin-xs);">Your session is expiring soon
                    </h2>

                    <!-- Countdown Timer (Amber/Orange) -->
                    <div class="ux4g-session-timer ux4g-text-warning ux4g-mb-m" style="line-height: 1;"
                        aria-live="polite">00:57</div>

                    <!-- Description -->
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-xl" style="max-width: 340px;">
                        You'll be signed out in less than a minute</p>

                    <!-- Progress Bar (15% filled, Amber/Orange) -->
                    <div class="ux4g-w-100 ux4g-radius-full ux4g-bg-neutral-subtle ux4g-o-hidden ux4g-mb-2xl"
                        style="height: 8px;" role="progressbar" aria-valuenow="15" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="ux4g-session-progress-fill ux4g-bg-warning-strong ux4g-h-100 ux4g-radius-full"
                            style="width: 15%;"></div>
                    </div>

                    <!-- Actions -->
                    <div class="ux4g-session-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="button">Stay signed in</button>
                        <button class="ux4g-btn ux4g-btn-outline-neutral ux4g-btn-lg" type="button">Sign out
                            now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Screen 3: Session ended -->`;

const SESSION_ENDED_HTML = `<!-- Screen 3: Session ended -->
    <section>
        <div class="ux4g-session-timeout-wrapper ux4g-relative ux4g-w-100 ux4g-o-hidden">
            <!-- Reusable: Mock Dashboard Backdrop (Blurred) -->
            <div class="ux4g-w-100 ux4g-h-100 ux4g-blur-3 ux4g-opacity-40 ux4g-pointer-events-none ux4g-select-none">
                <div class="ux4g-bg-neutral-elevated ux4g-bb ux4g-border-neutral-subtle ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-px-xl ux4g-py-m"
                    style="height: 60px;">
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 120px; height: 24px;"></div>
                    <div class="ux4g-d-flex ux4g-gap-m">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                    </div>
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-full" style="width: 32px; height: 32px;"></div>
                </div>
                <div class="ux4g-d-flex ux4g-gap-xl ux4g-p-xl" style="height: calc(100% - 60px);">
                    <div
                        class="ux4g-flex-1 ux4g-bg-neutral-elevated ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 200px; height: 24px;"></div>
                        <div class="ux4g-flex-1 ux4g-bg-neutral-soft ux4g-radius-s" style="min-height: 180px;"></div>
                        <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-2xs">
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="width: 60%; height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                        </div>
                    </div>
                    <div class="ux4g-d-none ux4g-sm-d-flex ux4g-flex-column ux4g-gap-l" style="width: 260px;">
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                    </div>
                </div>
            </div>

            <!-- Overlay & Centered Modal Card -->
            <div
                class="ux4g-absolute ux4g-top-0 ux4g-bottom-0 ux4g-start-0 ux4g-end-0 session-out-bg ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-p-xl ux4g-z-1">
                <!-- Session Modal Card Component -->
                <div
                    class="ux4g-session-card ux4g-bg-neutral-elevated ux4g-radius-l ux4g-shadow-l3 ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-text-center ux4g-z-2">
                    <!-- Neutral Clock Status Badge -->
                    <div class="ux4g-session-badge-outer ux4g-session-badge-neutral">
                        <div class="ux4g-session-badge-inner">
                            <span class="ux4g-icon-outlined ux4g-text-white">schedule</span>
                        </div>
                    </div>

                    <!-- Heading -->
                    <h2 class="ux4g-heading-s-strong ux4g-text-neutral-primary"
                        style="margin-block: var(--ux4g-margin-m) var(--ux4g-margin-2xl);">Session ended</h2>

                    <!-- Description -->
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xl" style="max-width: 340px;">
                        Your form progress has been saved. Sign in again to continue where you left off.</p>

                    <!-- Actions -->
                    <div class="ux4g-session-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="button">Sign in to
                            continue</button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export const SessionTimeout = {
    name: 'Session Timeout',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Session Timeout Modals', 'Session timeout patterns with countdown timers and progress indicators.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('session-1', 'Your Session is Expiring', 'User has been inactive. 5 minutes remaining with 50% progress.', SESSION_EXPIRING_HTML)}
                ${renderDemoCodeBlock('session-2', 'Your Session is Expiring Soon', 'Less than 1 minute remaining with 15% progress.', SESSION_EXPIRING_SOON_HTML)}
                ${renderDemoCodeBlock('session-3', 'Session Ended', 'Session has expired. User must sign in again.', SESSION_ENDED_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
