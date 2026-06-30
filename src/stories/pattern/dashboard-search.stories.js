import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Dashboard & My Applications/Search & Filter',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Search and filter pattern for citizen applications with a search bar and filtered result list.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'DashboardSearch');

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
        <div class="ux4g-pb-s">
            <h1 class="ux4g-heading-xl-strong">Good morning, Ramesh</h1>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Here's an overview of your applications</p>
        </div>
        <div class="ux4g-search-container ux4g-dashboard-search-container ux4g-py-s">
            <div class="ux4g-search">
                <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                <div class="ux4g-search-actions">
                    <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
                <button class="ux4g-search-btn" type="submit">
                    <span class="ux4g-icon-outlined">search</span>
                </button>
            </div>
        </div>
        <div class="ux4g-dashboard-result-lists">
            <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon"><span class="ux4g-icon-outlined ux4g-text-primary">school</span></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-result-list-meta">
                                <span class="ux4g-result-list-id ux4g-body-xs-default">INC-2026-MH-04127</span>
                                <span class="ux4g-divider-vertical"></span>
                                <span class="ux4g-result-list-dept ux4g-label-m-strong">Social Welfare Department</span>
                            </div>
                            <h2 class="ux4g-result-list-title ux4g-title-s-default">Post-Matric Scholarship</h2>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex">
                        <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error"><span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span><span class="ux4g-label-m-default ux4g-sla-badge-label">2 days overdue </span><span class="ux4g-sla-badge-divider" aria-hidden="true"></span><span class="ux4g-label-s-default ux4g-sla-badge-status">Escalation available</span></span>
                            <span class="ux4g-result-list-date ux4g-label-s-default"><span class="ux4g-result-list-date-label ux4g-text-neutral-tertiary"><span class="ux4g-md-d-none">Last Updated Date</span><span class="ux4g-d-none ux4g-md-d-inline">Last updated:</span></span><span class="ux4g-result-list-last-date">10 Apr 2026</span></span>
                        </div>
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_less</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content">
                    <div class="ux4g-result-list-details">
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Submitted Date</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Assigned Officer</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Next Step</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Documents</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address Proof</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-error ux4g-label-s-default">Escalation</span>
                            <a class="ux4g-text-link-md" href="" target="_blank">Register grievance<i class="ux4g-icon-outlined">arrow_forward</i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon"><span class="ux4g-icon-outlined ux4g-text-primary">payments</span></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-result-list-meta">
                                <span class="ux4g-result-list-id ux4g-body-xs-default">INC-2026-MH-04127</span>
                                <span class="ux4g-divider-vertical"></span>
                                <span class="ux4g-result-list-dept ux4g-label-m-strong">Revenue Department</span>
                            </div>
                            <h2 class="ux4g-result-list-title ux4g-title-s-default">Income Certificate</h2>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex">
                        <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error"><span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span><span class="ux4g-label-m-default ux4g-sla-badge-label">2 days overdue </span><span class="ux4g-sla-badge-divider" aria-hidden="true"></span><span class="ux4g-label-s-default ux4g-sla-badge-status">Action needed</span></span>
                            <span class="ux4g-result-list-date ux4g-label-s-default"><span class="ux4g-result-list-date-label ux4g-text-neutral-tertiary"><span class="ux4g-md-d-none">Last Updated Date</span><span class="ux4g-d-none ux4g-md-d-inline">Last updated:</span></span><span class="ux4g-result-list-last-date">10 Apr 2026</span></span>
                        </div>
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_less</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content">
                    <div class="ux4g-result-list-details">
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Submitted Date</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Assigned Officer</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Next Step</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Documents</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address Proof</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-error ux4g-label-s-default">Action needed</span>
                            <a class="ux4g-text-link-md" href="" target="_blank">Upload document<i class="ux4g-icon-outlined">upload</i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon"><span class="ux4g-icon-outlined ux4g-text-primary">restaurant</span></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-result-list-meta">
                                <span class="ux4g-result-list-id ux4g-body-xs-default">RCR-2026-MH-00917</span>
                                <span class="ux4g-divider-vertical"></span>
                                <div class="ux4g-result-list-dept ux4g-label-m-strong ux4g-d-flex ux4g-flex-column">
                                    <span>Food & Civil Supplies (PDS)</span>
                                </div>
                            </div>
                            <h2 class="ux4g-result-list-title ux4g-title-s-default">Ration Card Renewal</h2>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex">
                        <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error"><span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span><span class="ux4g-label-m-default ux4g-sla-badge-label">2 days overdue </span><span class="ux4g-sla-badge-divider" aria-hidden="true"></span><span class="ux4g-label-s-default ux4g-sla-badge-status">Escalation available</span></span>
                            <span class="ux4g-result-list-date ux4g-label-s-default"><span class="ux4g-result-list-date-label ux4g-text-neutral-tertiary"><span class="ux4g-md-d-none">Last Updated Date</span><span class="ux4g-d-none ux4g-md-d-inline">Last updated:</span></span><span class="ux4g-result-list-last-date">10 Apr 2026</span></span>
                        </div>
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_more</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content"></div>
            </div>
            <div class="ux4g-result-list ux4g-result-list-v4 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon ux4g-bg-success"><i class="ux4g-icon-outlined ux4g-text-primary">volunteer_activism</i></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s ux4g-mb-2xs">
                                <h2 class="ux4g-result-list-title ux4g-title-s-default">Birth Certificate</h2>
                                <span class="ux4g-tag-filled-success ux4g-d-none ux4g-md-d-inline-flex"><i class="ux4g-icon-outlined">check</i> Issued</span>
                                <span class="ux4g-badge-icon-success ux4g-md-d-none"><i class="ux4g-icon">check</i></span>
                            </div>
                            <div class="ux4g-result-list-dept ux4g-label-m-strong ux4g-text-primary ux4g-d-flex ux4g-flex-column"><span>Municipal Corporation</span></div>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Download</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_more</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content">
                    <div class="ux4g-result-list-details">
                        <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Reference Number</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">GRV-2026-04127</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Submitted Date</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Assigned Officer</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Next Step</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Department</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Revenue Department</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-result-list-full-width">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Documents</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address Proof</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>`;

const DESKTOPWORKSPACE_1_HTML = `<section class="ux4g-dashboard-layout-container">
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
        <div class="ux4g-pb-s">
            <h1 class="ux4g-heading-xl-strong">Good morning, Ramesh</h1>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Here's an overview of your applications</p>
        </div>
        <div class="ux4g-search-container ux4g-dashboard-search-container ux4g-py-s">
            <div class="ux4g-search">
                <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                <div class="ux4g-search-actions">
                    <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
                <button class="ux4g-search-btn" type="submit">
                    <span class="ux4g-icon-outlined">search</span>
                </button>
            </div>
        </div>
        <div class="ux4g-dashboard-result-lists">
            <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon"><span class="ux4g-icon-outlined ux4g-text-primary">school</span></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-result-list-meta">
                                <span class="ux4g-result-list-id ux4g-body-xs-default">INC-2026-MH-04127</span>
                                <span class="ux4g-divider-vertical"></span>
                                <span class="ux4g-result-list-dept ux4g-label-m-strong">Social Welfare Department</span>
                            </div>
                            <h2 class="ux4g-result-list-title ux4g-title-s-default">Post-Matric Scholarship</h2>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex">
                        <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error"><span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span><span class="ux4g-label-m-default ux4g-sla-badge-label">2 days overdue </span><span class="ux4g-sla-badge-divider" aria-hidden="true"></span><span class="ux4g-label-s-default ux4g-sla-badge-status">Escalation available</span></span>
                            <span class="ux4g-result-list-date ux4g-label-s-default"><span class="ux4g-result-list-date-label ux4g-text-neutral-tertiary"><span class="ux4g-md-d-none">Last Updated Date</span><span class="ux4g-d-none ux4g-md-d-inline">Last updated:</span></span><span class="ux4g-result-list-last-date">10 Apr 2026</span></span>
                        </div>
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_less</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content">
                    <div class="ux4g-result-list-details">
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Submitted Date</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Assigned Officer</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Next Step</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Documents</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address Proof</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-error ux4g-label-s-default">Escalation</span>
                            <a class="ux4g-text-link-md" href="" target="_blank">Register grievance<i class="ux4g-icon-outlined">arrow_forward</i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon"><span class="ux4g-icon-outlined ux4g-text-primary">payments</span></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-result-list-meta">
                                <span class="ux4g-result-list-id ux4g-body-xs-default">INC-2026-MH-04127</span>
                                <span class="ux4g-divider-vertical"></span>
                                <span class="ux4g-result-list-dept ux4g-label-m-strong">Revenue Department</span>
                            </div>
                            <h2 class="ux4g-result-list-title ux4g-title-s-default">Income Certificate</h2>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex">
                        <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error"><span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span><span class="ux4g-label-m-default ux4g-sla-badge-label">2 days overdue </span><span class="ux4g-sla-badge-divider" aria-hidden="true"></span><span class="ux4g-label-s-default ux4g-sla-badge-status">Action needed</span></span>
                            <span class="ux4g-result-list-date ux4g-label-s-default"><span class="ux4g-result-list-date-label ux4g-text-neutral-tertiary"><span class="ux4g-md-d-none">Last Updated Date</span><span class="ux4g-d-none ux4g-md-d-inline">Last updated:</span></span><span class="ux4g-result-list-last-date">10 Apr 2026</span></span>
                        </div>
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_less</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content">
                    <div class="ux4g-result-list-details">
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Submitted Date</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Assigned Officer</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Next Step</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Documents</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address Proof</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-error ux4g-label-s-default">Action needed</span>
                            <a class="ux4g-text-link-md" href="" target="_blank">Upload document<i class="ux4g-icon-outlined">upload</i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon"><span class="ux4g-icon-outlined ux4g-text-primary">restaurant</span></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-result-list-meta">
                                <span class="ux4g-result-list-id ux4g-body-xs-default">RCR-2026-MH-00917</span>
                                <span class="ux4g-divider-vertical"></span>
                                <div class="ux4g-result-list-dept ux4g-label-m-strong ux4g-d-flex ux4g-flex-column">
                                    <span>Food & Civil Supplies (PDS)</span>
                                </div>
                            </div>
                            <h2 class="ux4g-result-list-title ux4g-title-s-default">Ration Card Renewal</h2>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex">
                        <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error"><span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span><span class="ux4g-label-m-default ux4g-sla-badge-label">2 days overdue </span><span class="ux4g-sla-badge-divider" aria-hidden="true"></span><span class="ux4g-label-s-default ux4g-sla-badge-status">Escalation available</span></span>
                            <span class="ux4g-result-list-date ux4g-label-s-default"><span class="ux4g-result-list-date-label ux4g-text-neutral-tertiary"><span class="ux4g-md-d-none">Last Updated Date</span><span class="ux4g-d-none ux4g-md-d-inline">Last updated:</span></span><span class="ux4g-result-list-last-date">10 Apr 2026</span></span>
                        </div>
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_more</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content"></div>
            </div>
            <div class="ux4g-result-list ux4g-result-list-v4 ux4g-mb-m">
                <div class="ux4g-result-list-header">
                    <div class="ux4g-result-list-info">
                        <div class="ux4g-result-list-icon ux4g-bg-success"><i class="ux4g-icon-outlined ux4g-text-primary">volunteer_activism</i></div>
                        <div class="ux4g-result-list-title-group">
                            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s ux4g-mb-2xs">
                                <h2 class="ux4g-result-list-title ux4g-title-s-default">Birth Certificate</h2>
                                <span class="ux4g-tag-filled-success ux4g-d-none ux4g-md-d-inline-flex"><i class="ux4g-icon-outlined">check</i> Issued</span>
                                <span class="ux4g-badge-icon-success ux4g-md-d-none"><i class="ux4g-icon">check</i></span>
                            </div>
                            <div class="ux4g-result-list-dept ux4g-label-m-strong ux4g-text-primary ux4g-d-flex ux4g-flex-column"><span>Municipal Corporation</span></div>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                        <div class="ux4g-result-list-actions">
                            <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Download</button>
                            <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle" aria-expanded="false">expand_more</span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-result-list-content accordion-content">
                    <div class="ux4g-result-list-details">
                        <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Reference Number</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">GRV-2026-04127</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Submitted Date</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                        </div>
                        <div class="ux4g-result-list-detail-item">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Assigned Officer</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Next Step</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Department</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Revenue Department</span>
                        </div>
                        <div class="ux4g-result-list-detail-item ux4g-result-list-full-width">
                            <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Documents</span>
                            <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address Proof</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</section>`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Search & Filter', 'Search and filter pattern allowing citizens to search their applications by keyword and view filtered results.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('dashboard-search-fullscreen', 'Search - My Applications', 'Dashboard layout with search bar and filtered application results.', FULLSCREEN_1_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const DesktopWorkspace = {
    name: 'Desktop Workspace',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Search & Filter', 'Search and filter pattern allowing citizens to search their applications by keyword and view filtered results.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('dashboard-search-desktopworkspace', 'Search - My Applications', 'Dashboard layout with search bar and filtered application results.', DESKTOPWORKSPACE_1_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

