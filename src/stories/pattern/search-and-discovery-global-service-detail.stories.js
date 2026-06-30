/**
 * Detailed service information page with tabbed navigation, document checklist, and application steps.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Service Detail',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Detailed service information page with tabbed navigation, document checklist, and application steps.',
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

const FULLSCREEN_1_HTML = `    <section>
        <nav class="ux4g-navbar ux4g-navbar-right ux4g-shadow-l0">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">UX4G</span>
                            <span class="ux4g-body-xs-default">National Services Portal</span>
                        </div>
                    </div>

                    <!-- Right Group: Nav Links + Actions -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                        <!-- Navigation Links -->
                        <ul class="ux4g-navbar-links">
                            <li><a href="#" class="ux4g-text-link-sm">Home</a></li>
                            <li><a href="#" class="ux4g-text-link-sm">Services</a></li>
                            <li class="ux4g-dropdown ux4g-dropdown-button" data-ux4g-init="true">
                                <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown"
                                    id="ux4g-dropdown-control-6" aria-haspopup="listbox" aria-expanded="false">
                                    <span>Schemes</span>
                                    <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret"
                                        data-ux4g-init="true">arrow_drop_down</span>
                                </a>
                                <div class="ux4g-dropdown-menu" aria-labelledby="ux4g-dropdown-control-6">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                        <li class="ux4g-list-item" role="option" data-ux4g-init="true">
                                            <button class="ux4g-list-item-row" type="button">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Schemes List</span>
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" class="ux4g-text-link-sm">Track</a></li>
                            <li><a href="#" class="ux4g-text-link-sm">Help</a></li>
                        </ul>

                        <!-- Actions -->
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                            <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20" data-ux4g-init="true">search</i>
                            <button class="ux4g-btn-primary ux4g-btn-md">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="ux4g-bg-neutral ux4g-py-2xl">
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
                                    <span>Certificates</span>
                                </a>
                            </li>
                            <li class="ux4g-breadcrumb-item active" aria-current="page">
                                <span>Birth Certificate</span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <!-- Hero Info Card -->
                <div class="ux4g-gsd-detail-hero-card ux4g-mb-xl">
                    <div class="ux4g-gsd-detail-hero-left">
                        <div class="ux4g-gsd-detail-hero-icon-wrap">
                            <i class="ux4g-icon-outlined">health_and_safety</i>
                        </div>
                        <div class="ux4g-gsd-detail-hero-info">
                            <h1 class="ux4g-title-xl-strong ux4g-gsd-detail-hero-title ux4g-mb-3xs">Birth Certificate</h1>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Municipal Corporation &middot; Registration of Births & Deaths</p>
                            <div class="ux4g-gsd-detail-hero-meta-row ux4g-body-s-default">
                                <span class="ux4g-text-neutral-primary ux4g-fw-medium">Free</span>
                                <span class="ux4g-gsd-meta-separator">|</span>
                                <span class="ux4g-text-neutral-secondary">20 mins (online)</span>
                                <span class="ux4g-gsd-meta-separator">|</span>
                                <span class="ux4g-gsd-verified-badge">
                                    <i class="ux4g-icon-outlined ux4g-fs-16">check</i>
                                    <span>Government verified</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <button class="ux4g-btn ux4g-btn-lg ux4g-btn-primary">Apply now</button>
                </div>

                <!-- Underline Tabs -->
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-xl" data-ux4g-tab>
                    <div class="ux4g-tab-list">
                        <button class="ux4g-tab-item active" data-panel="tab-panel-overview">Overview</button>
                        <button class="ux4g-tab-item" data-panel="tab-panel-eligibility">Eligibility</button>
                        <button class="ux4g-tab-item" data-panel="tab-panel-documents">Documents</button>
                        <button class="ux4g-tab-item" data-panel="tab-panel-process">Process</button>
                    </div>

                    <!-- Overview Panel -->
                    <div class="ux4g-tab-panel active" id="tab-panel-overview">
                        <!-- About section -->
                        <div class="ux4g-mb-xl ux4g-pt-m">
                            <h2 class="ux4g-title-m-strong ux4g-mb-s">About this service</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
                                A Birth Certificate is the official record of a child's birth, issued by the local municipal body. It is required for school admission, passport, Aadhaar enrolment and accessing welfare schemes. Apply online with hospital records, or visit your nearest municipal office.
                            </p>
                        </div>

                        <!-- 2x2 Info Grid -->
                        <div class="ux4g-grid ux4g-grid-cols-2 ux4g-mb-2xl ux4g-gsd-info-grid">
                            <!-- Eligibility Card -->
                            <div class="ux4g-gsd-info-card">
                                <h3 class="ux4g-label-l-strong ux4g-gsd-info-card-title ux4g-mb-xs">Eligibility</h3>
                                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Child born within municipal limits. Apply within 21 days of birth; late registration allowed with an affidavit.</p>
                            </div>
                            <!-- Required Documents Card -->
                            <div class="ux4g-gsd-info-card">
                                <h3 class="ux4g-label-l-strong ux4g-gsd-info-card-title ux4g-mb-xs">Required documents</h3>
                                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Hospital discharge summary, both parents&#x2019; Aadhaar, and proof of address.</p>
                            </div>
                            <!-- Fee Card -->
                            <div class="ux4g-gsd-info-card">
                                <h3 class="ux4g-label-l-strong ux4g-gsd-info-card-title ux4g-mb-xs">Fee</h3>
                                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Free within 21 days of birth. &#x20B9;20 late fee applies thereafter.</p>
                            </div>
                            <!-- Processing Time Card -->
                            <div class="ux4g-gsd-info-card">
                                <h3 class="ux4g-label-l-strong ux4g-gsd-info-card-title ux4g-mb-xs">Processing time</h3>
                                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">20 minutes online &middot; up to 7 working days if applied offline.</p>
                            </div>
                        </div>
                    </div>

                    <!-- Eligibility Panel -->
                    <div class="ux4g-tab-panel" id="tab-panel-eligibility">
                        <div class="ux4g-mb-xl ux4g-pt-m">
                            <h2 class="ux4g-title-m-strong ux4g-mb-s">Eligibility</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
                                Child born within municipal limits. Apply within 21 days of birth; late registration allowed with an affidavit.
                            </p>
                        </div>
                    </div>

                    <!-- Documents Panel -->
                    <div class="ux4g-tab-panel" id="tab-panel-documents">
                        <div class="ux4g-mb-xl ux4g-pt-m">
                            <h2 class="ux4g-title-m-strong ux4g-mb-s">Required documents</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
                                Hospital discharge summary, both parents&#x2019; Aadhaar, and proof of address.
                            </p>
                        </div>
                    </div>

                    <!-- Process Panel -->
                    <div class="ux4g-tab-panel" id="tab-panel-process">
                        <div class="ux4g-mb-xl ux4g-pt-m">
                            <h2 class="ux4g-title-m-strong ux4g-mb-s">Process</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
                                Apply online with hospital records, or visit your nearest municipal office. Processing time is 20 minutes online and up to 7 working days if applied offline.
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Related Services Section -->
                <div>
                    <h2 class="ux4g-title-m-strong ux4g-mb-l">Related services</h2>
                    <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-md-3 ux4g-inline-gap-l ux4g-stack-gap-m">
                        <!-- Death Certificate Card -->
                        <div class="ux4g-gsd-recommended-card ux4g-bg-neutral-soft">
                            <div class="ux4g-gsd-recommended-card-body">
                                <div class="ux4g-pos-relative">
                                    <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Death Certificate</h3>
                                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Municipal Corporation</p>
                                </div>
                                <div class="ux4g-gsd-recommended-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                                    <span class="ux4g-text-neutral-tertiary">&middot;</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">20 mins</span>
                                </div>
                            </div>
                            <div class="ux4g-gsd-recommended-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                        <!-- Marriage Certificate Card -->
                        <div class="ux4g-gsd-recommended-card ux4g-bg-neutral-soft">
                            <div class="ux4g-gsd-recommended-card-body">
                                <div class="ux4g-pos-relative">
                                    <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Marriage Certificate</h3>
                                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Registrar of Marriages</p>
                                </div>
                                <div class="ux4g-gsd-recommended-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-neutral-primary">&#x20B9;100</span>
                                    <span class="ux4g-text-neutral-tertiary">&middot;</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">15 days</span>
                                </div>
                            </div>
                            <div class="ux4g-gsd-recommended-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                        <!-- Aadhaar Enrolment Card -->
                        <div class="ux4g-gsd-recommended-card ux4g-bg-neutral-soft">
                            <div class="ux4g-gsd-recommended-card-body">
                                <div class="ux4g-pos-relative">
                                    <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Aadhaar Enrolment</h3>
                                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">UIDAI</p>
                                </div>
                                <div class="ux4g-gsd-recommended-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                                    <span class="ux4g-text-neutral-tertiary">&middot;</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">90 days</span>
                                </div>
                            </div>
                            <div class="ux4g-gsd-recommended-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Service Detail - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('service-detail', 'Service Detail - Full Page', '', FULLSCREEN_1_HTML)}
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
            ${getHeroHeader('Service Detail - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('service-detail-column', 'Service Detail - Full Page', '', COLUMN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

const DESKTOPWORKSPACE_1_HTML = FULLSCREEN_1_HTML;

export const DesktopWorkspace = {
    name: 'Desktop Workspace',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Service Detail - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('service-detail-desktopworkspace', 'Service Detail - Full Page', '', DESKTOPWORKSPACE_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
