import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Dashboard & My Applications/Empty State',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Empty state pattern for when a citizen has no active applications, featuring a call-to-action and popular service suggestions.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'DashboardEmptyState');

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

const FULLSCREEN_1_HTML = `<section class="ux4g-dashboard-layout-container">
    <aside class="ux4g-dashboard-sidebar ux4g-d-none ux4g-lg-d-flex">
        <div class="ux4g-dashboard-sidebar-profile">
            <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                <img src="https://i.pravatar.cc/150?u=54" alt="avatar">
            </div>
            <div class="ux4g-title-m-strong ux4g-pt-m">Ramesh Kumar</div>
        </div>
        <div class="ux4g-w-100 ux4g-pb-s">
            <hr class="ux4g-divider-horizontal">
        </div>
        <nav class="ux4g-dashboard-sidebar-nav ux4g-w-100">
            <button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">grid_view</span>
                My Applications
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">task_alt</span>
                Pending Tasks
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">notifications</span>
                Notifications
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">person</span>
                Profile
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">help_outline</span>
                Help
            </button>
        </nav>
        <div class="ux4g-dashboard-sidebar-footer ux4g-w-100">
            <hr class="ux4g-divider-horizontal ux4g-mb-m">
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">logout</span>
                Sign Out
            </button>
        </div>
    </aside>
    <section class="ux4g-dashboard-main-content">
        <div class="ux4g-empty-state ux4g-my-2xl">
            <span class="ux4g-icon-outlined ux4g-empty-state-icon ux4g-text-primary">inbox</span>
            <div class="ux4g-empty-state-content">
                <h3 class="ux4g-title-l-strong">No active applications</h3>
                <p class="ux4g-body-m-default">Start your application easily by clicking on the button below.</p>
            </div>
            <button class="ux4g-btn-tonal-primary ux4g-btn-md">Start application</button>
        </div>
        <div class="ux4g-mt-xl">
            <h3 class="ux4g-title-s-strong ux4g-text-center ux4g-mb-m">Popular services to get started</h3>
            <div class="ux4g-dashboard-service-grid">
                <div class="ux4g-dashboard-service-card">
                    <h4 class="ux4g-title-s-strong">Income Certificate</h4>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">Proof of annual family income</p>
                    <a class="ux4g-text-link-md ux4g-mt-2xs" href="" target="_blank">
                        Start now
                        <i class="ux4g-icon-outlined">arrow_forward</i>
                    </a>
                </div>
                <div class="ux4g-dashboard-service-card">
                    <h4 class="ux4g-title-s-strong">Caste Certificate</h4>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">SC / ST / OBC category proof</p>
                    <a class="ux4g-text-link-md ux4g-mt-2xs" href="" target="_blank">
                        Start now
                        <i class="ux4g-icon-outlined">arrow_forward</i>
                    </a>
                </div>
                <div class="ux4g-dashboard-service-card">
                    <h4 class="ux4g-title-s-strong">Domicile Certificate</h4>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">Proof of residence in the state</p>
                    <a class="ux4g-text-link-md ux4g-mt-2xs" href="" target="_blank">
                        Start now
                        <i class="ux4g-icon-outlined">arrow_forward</i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</section>`;

const CARD_1_HTML = `<section class="ux4g-dashboard-layout-container">
    <aside class="ux4g-dashboard-sidebar ux4g-d-none ux4g-lg-d-flex">
        <div class="ux4g-dashboard-sidebar-profile">
            <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                <img src="https://i.pravatar.cc/150?u=54" alt="avatar">
            </div>
            <div class="ux4g-title-m-strong ux4g-pt-m">Ramesh Kumar</div>
        </div>
        <div class="ux4g-w-100 ux4g-pb-s">
            <hr class="ux4g-divider-horizontal">
        </div>
        <nav class="ux4g-dashboard-sidebar-nav ux4g-w-100">
            <button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">grid_view</span>
                My Applications
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">task_alt</span>
                Pending Tasks
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">notifications</span>
                Notifications
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">person</span>
                Profile
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">help_outline</span>
                Help
            </button>
        </nav>
        <div class="ux4g-dashboard-sidebar-footer ux4g-w-100">
            <hr class="ux4g-divider-horizontal ux4g-mb-m">
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">logout</span>
                Sign Out
            </button>
        </div>
    </aside>
    <section class="ux4g-dashboard-main-content">
        <div class="ux4g-empty-state ux4g-my-2xl">
            <span class="ux4g-icon-outlined ux4g-empty-state-icon ux4g-text-primary">inbox</span>
            <div class="ux4g-empty-state-content">
                <h3 class="ux4g-title-l-strong">No active applications</h3>
                <p class="ux4g-body-m-default">Start your application easily by clicking on the button below.</p>
            </div>
            <button class="ux4g-btn-tonal-primary ux4g-btn-md">Start application</button>
        </div>
        <div class="ux4g-mt-xl">
            <h3 class="ux4g-title-s-strong ux4g-text-center ux4g-mb-m">Popular services to get started</h3>
            <div class="ux4g-dashboard-service-grid">
                <div class="ux4g-dashboard-service-card">
                    <h4 class="ux4g-title-s-strong">Income Certificate</h4>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">Proof of annual family income</p>
                    <a class="ux4g-text-link-md ux4g-mt-2xs" href="" target="_blank">
                        Start now
                        <i class="ux4g-icon-outlined">arrow_forward</i>
                    </a>
                </div>
                <div class="ux4g-dashboard-service-card">
                    <h4 class="ux4g-title-s-strong">Caste Certificate</h4>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">SC / ST / OBC category proof</p>
                    <a class="ux4g-text-link-md ux4g-mt-2xs" href="" target="_blank">
                        Start now
                        <i class="ux4g-icon-outlined">arrow_forward</i>
                    </a>
                </div>
                <div class="ux4g-dashboard-service-card">
                    <h4 class="ux4g-title-s-strong">Domicile Certificate</h4>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-secondary">Proof of residence in the state</p>
                    <a class="ux4g-text-link-md ux4g-mt-2xs" href="" target="_blank">
                        Start now
                        <i class="ux4g-icon-outlined">arrow_forward</i>
                    </a>
                </div>
            </div>
        </div>
    </section>
</section>`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Empty State', 'Empty state pattern shown when a citizen has no active applications, with a prompt to start a new application and popular service suggestions.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('empty-state-fullscreen', 'Empty State - No Active Applications', 'Dashboard empty state with call-to-action and popular service suggestions.', FULLSCREEN_1_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const Card = {
    name: 'Card',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Empty State', 'Empty state pattern shown when a citizen has no active applications, with a prompt to start a new application and popular service suggestions.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('empty-state-card', 'Empty State - No Active Applications', 'Dashboard empty state with call-to-action and popular service suggestions.', CARD_1_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

