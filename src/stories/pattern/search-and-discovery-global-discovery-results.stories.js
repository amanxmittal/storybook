/**
 * Comprehensive search results across government departments with faceted filters and service cards.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Global Service Discovery Results',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Comprehensive search results across government departments with faceted filters and service cards.',
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

const DESKTOPWORKSPACE_1_HTML = `    <section>
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
        <div class="ux4g-bg-neutral ">
            <div class="ux4g-container">

                <!-- Breadcrumbs -->
                <div class="ux4g-pt-l ux4g-pb-m">
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
                                    <span>Services</span>
                                </a>
                            </li>
                            <li class="ux4g-breadcrumb-item active" aria-current="page">
                                <span>Health</span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <!-- Health Services Title Section -->
                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m ux4g-mb-xl ux4g-gsd-health-services-header-card ux4g-pt-s">
                    <div class="ux4g-gsd-health-header-icon-wrap">
                        <i class="ux4g-icon-outlined">health_and_safety</i>
                    </div>
                    <div class="ux4g-d-flex ux4g-flex-column">
                        <h1 class="ux4g-heading-xl-strong ux4g-mb-3xs">Health services</h1>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Hospitals, certificates, insurance and disability services &middot; 48 services</p>
                    </div>
                </div>

                <!-- Search Results Section -->
                <div class="ux4g-search-results-section">

                    <!-- Mobile Header only (to toggle filters on mobile) -->
                    <div class="ux4g-gsd-results-header ux4g-mb-xl ux4g-d-flex ux4g-md-d-none ux4g-ai-center ux4g-jc-space-between ux4g-w-100">
                        <span class="ux4g-title-s-strong">48 results</span>
                        <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-neutral ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                            <i class="ux4g-icon-outlined ux4g-fs-18">tune</i>
                            <span>Filters</span>
                        </button>
                    </div>

                    <!-- Filter Chips/Tabs -->
                    <div class="ux4g-d-flex ux4g-inline-gap-s ux4g-mb-2xl ux4g-choice-chips-container">
                        <button class="ux4g-choice-chip-md active">All &middot; 48</button>
                        <button class="ux4g-choice-chip-md">Hospitals &middot; 12</button>
                        <button class="ux4g-choice-chip-md">Certificates &middot; 18</button>
                        <button class="ux4g-choice-chip-md">Insurance &middot; 9</button>
                        <button class="ux4g-choice-chip-md">Disability &middot; 9</button>
                    </div>

                    <!-- Main Grid Layout -->
                    <div class="ux4g-gsd-search-results-layout">

                        <!-- Left Sidebar: Filters Panel -->
                        <div class="ux4g-gsd-filter-panel">
                            <div class="ux4g-gsd-filter-header">
                                <h2 class="ux4g-title-s-default">Filters</h2>
                                <a href="#" class="ux4g-text-link ux4g-body-s-strong ux4g-fw-medium">Clear all</a>
                            </div>

                            <!-- State Filter -->
                            <div class="ux4g-gsd-filter-section">
                                <span class="ux4g-label-l-strong ux4g-text-neutral-secondary">State</span>
                                <div class="ux4g-dropdown ux4g-dropdown-md ux4g-w-100">
                                    <div class="ux4g-dropdown-control">
                                        <div class="ux4g-dropdown-value">
                                            <span class="ux4g-dropdown-text">Maharashtra</span>
                                        </div>
                                        <span class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                    </div>
                                </div>
                            </div>

                            <!-- Department Filter -->
                            <div class="ux4g-gsd-filter-section">
                                <span class="ux4g-label-l-strong ux4g-text-neutral-secondary">Department</span>
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s">
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input type="checkbox" class="ux4g-checkbox-input" checked />
                                        <span class="ux4g-checkbox-control">
                                            <span class="ux4g-checkmark"></span>
                                        </span>
                                        <span class="ux4g-checkbox-content">
                                            <span class="ux4g-checkbox-label">Health & Family Welfare</span>
                                        </span>
                                    </label>
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input type="checkbox" class="ux4g-checkbox-input" />
                                        <span class="ux4g-checkbox-control">
                                            <span class="ux4g-checkmark"></span>
                                        </span>
                                        <span class="ux4g-checkbox-content">
                                            <span class="ux4g-checkbox-label">National Health Authority</span>
                                        </span>
                                    </label>
                                    <label class="ux4g-checkbox ux4g-checkbox-md">
                                        <input type="checkbox" class="ux4g-checkbox-input" />
                                        <span class="ux4g-checkbox-control">
                                            <span class="ux4g-checkmark"></span>
                                        </span>
                                        <span class="ux4g-checkbox-content">
                                            <span class="ux4g-checkbox-label">Social Justice Dept</span>
                                        </span>
                                    </label>
                                </div>
                            </div>

                            <!-- Fee Filter -->
                            <div class="ux4g-gsd-filter-section">
                                <span class="ux4g-label-l-strong ux4g-text-neutral-secondary">Fee</span>
                                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s">
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input type="radio" name="fee" class="ux4g-radio-input" />
                                        <span class="ux4g-radio-control">
                                            <span class="ux4g-radiomark"></span>
                                        </span>
                                        <span class="ux4g-radio-content">
                                            <span class="ux4g-radio-label">All fees</span>
                                        </span>
                                    </label>
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input type="radio" name="fee" class="ux4g-radio-input" checked />
                                        <span class="ux4g-radio-control">
                                            <span class="ux4g-radiomark"></span>
                                        </span>
                                        <span class="ux4g-radio-content">
                                            <span class="ux4g-radio-label">Free only</span>
                                        </span>
                                    </label>
                                    <label class="ux4g-radio ux4g-radio-md">
                                        <input type="radio" name="fee" class="ux4g-radio-input" />
                                        <span class="ux4g-radio-control">
                                            <span class="ux4g-radiomark"></span>
                                        </span>
                                        <span class="ux4g-radio-content">
                                            <span class="ux4g-radio-label">Paid only</span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <!-- Right Content: Results List -->
                        <div class="ux4g-gsd-results-list">

                            <!-- Row 1: Ayushman Bharat Health Card -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">health_and_safety</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Ayushman Bharat Health Card</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">Health & Family Welfare</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 7 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 7 days
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 2: Hospital Empanelment -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">local_hospital</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Hospital Empanelment</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">National Health Authority</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 30 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 30 days
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 3: Birth Certificate -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">cake</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Birth Certificate</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">Municipal Corporation</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 20 mins
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 20 mins
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 4: Disability Certificate (UDID) -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">accessibility_new</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Disability Certificate (UDID)</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">Social Justice Department</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 15 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 15 days
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 5: Health Insurance Claim -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">medical_services</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Health Insurance Claim</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">State Health Agency</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 10 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 10 days
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 6: Vaccination Certificate -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">vaccines</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Vaccination Certificate</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">CoWIN - Health Ministry</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> Instant
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> Instant
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 7: Medical Reimbursement -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">payments</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Medical Reimbursement</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">Health Department</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Paid</span>
                                            <span class="ux4g-body-s-default ux4g-text-neutral-primary">&#x20B9; 50/-</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 21 days
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Paid</span>
                                        <span class="ux4g-body-s-default ux4g-text-neutral-primary ux4g-mr-s">&#x20B9; 50/-</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> 21 days
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Row 8: Janani Suraksha Yojana -->
                            <div class="ux4g-gsd-result-row">
                                <div class="ux4g-gsd-result-left">
                                    <div class="ux4g-gsd-result-icon-wrap ux4g-d-none ux4g-md-d-flex">
                                        <i class="ux4g-icon-outlined">pregnant_woman</i>
                                    </div>
                                    <div class="ux4g-gsd-result-content">
                                        <h3 class="ux4g-title-s-default">Janani Suraksha Yojana</h3>
                                        <span class="ux4g-label-m-strong ux4g-text-primary ux4g-d-none ux4g-md-d-inline">Health & Family Welfare</span>
                                        <div class="ux4g-gsd-result-meta ux4g-d-flex ux4g-md-d-none ux4g-mt-xs">
                                            <span class="ux4g-gsd-service-badge">Free</span>
                                            <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                                <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> On delivery
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="ux4g-gsd-result-right">
                                    <div class="ux4g-gsd-result-meta ux4g-d-none ux4g-md-d-flex">
                                        <span class="ux4g-gsd-service-badge">Free</span>
                                        <span class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                            <i class="ux4g-icon-outlined ux4g-fs-16">schedule</i> On delivery
                                        </span>
                                    </div>
                                    <button class="ux4g-btn ux4g-btn-sm ux4g-btn-outline-primary">Apply</button>
                                    <div class="ux4g-dropdown ux4g-dropdown-button ux4g-gsd-result-dropdown">
                                        <button class="ux4g-dropdown-control" type="button" aria-haspopup="listbox" aria-expanded="false" data-ux-toggle="dropdown">
                                            <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-20 ux4g-dropdown-caret">expand_more</i>
                                        </button>
                                        <div class="ux4g-dropdown-menu">
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>Apply Service</span>
                                                        </span>
                                                    </button>
                                                </li>
                                                <li class="ux4g-list-item" role="option">
                                                    <button class="ux4g-list-item-row" type="button">
                                                        <span class="ux4g-list-item-start">
                                                            <span>View Details</span>
                                                        </span>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <!-- Numbered Pagination Block (outside grid, full width below it) -->
                             
                             <div class="ux4g-pagination-wrapper ux4g-w-100 ux4g-jc-center ux4g-ai-center ux4g-mt-xl ux4g-mb-xl ux4g-d-none ux4g-md-d-flex">
                                 <div class="ux4g-pagination">
                                     <button class="ux4g-page-nav prev disabled" disabled>
                                         <span class="ux4g-icon-outlined">chevron_left</span>
                                     </button>
                                     <button class="ux4g-page-number active">1</button>
                                     <button class="ux4g-page-number">2</button>
                                     <button class="ux4g-page-number">3</button>
                                     <button class="ux4g-page-number">4</button>
                                     <button class="ux4g-page-number">5</button>
                                     <button class="ux4g-page-nav next">
                                         <span class="ux4g-icon-outlined">chevron_right</span>
                                     </button>
                                 </div>
                                 <div class="ux4g-page-size">
                                     <span>Showing</span>
                                     <div class="ux4g-page-size-select-wrapper has-value">
                                         <select class="ux4g-select">
                                             <option value="10" selected>10</option>
                                             <option value="20">20</option>
                                             <option value="50">50</option>
                                         </select>
                                         <i class="ux4g-icon-outlined">expand_more</i>
                                     </div>
                                     <span>of 48 items</span>
                                 </div>
                             </div>

                             <!-- Mobile Pagination Block -->
                             <div class="ux4g-pagination ux4g-pagination-dotted ux4g-d-flex ux4g-md-d-none ux4g-jc-center ux4g-ai-center ux4g-w-100 ux4g-mt-xl">
                                 <button class="ux4g-pagination-prev ux4g-icon-outlined">chevron_left</button>
                                 <div class="ux4g-pagination-dots">
                                     <span class="ux4g-page-dot ux4g-active"></span>
                                     <span class="ux4g-page-dot"></span>
                                     <span class="ux4g-page-dot"></span>
                                     <span class="ux4g-page-dot"></span>
                                     <span class="ux4g-page-dot"></span>
                                     <span class="ux4g-page-dot"></span>
                                     <span class="ux4g-page-dot"></span>
                                 </div>
                                 <button class="ux4g-pagination-next ux4g-icon-outlined">chevron_right</button>
                             </div>
                            </div>
                        

                    </div>

                   

                </div>
            </div>
        </div>
    </section>
`;

export const DesktopWorkspace = {
    name: 'Desktop Workspace',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Global Service Discovery Results - Desktop Workspace', 'Desktop Workspace layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('global-discovery-results', 'Global Service Discovery Results - Full Page', '', DESKTOPWORKSPACE_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
const FULLSCREEN_1_HTML = DESKTOPWORKSPACE_1_HTML;

export const FullScreen = {
    name: 'FullScreen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Global Service Discovery Results - Desktop Workspace', 'Desktop Workspace layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('global-discovery-results-fullscreen', 'Global Service Discovery Results - Full Page', '', FULLSCREEN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

const COLUMN_1_HTML = DESKTOPWORKSPACE_1_HTML;

export const Column = {
    name: 'Column',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Global Service Discovery Results - Desktop Workspace', 'Desktop Workspace layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('global-discovery-results-column', 'Global Service Discovery Results - Full Page', '', COLUMN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
