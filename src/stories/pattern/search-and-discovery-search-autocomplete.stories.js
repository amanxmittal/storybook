/**
 * Search Autocomplete — Smart search with autocomplete suggestions, popular searches, and curated categories.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Search Autocomplete',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Smart search with autocomplete suggestions, popular searches, and curated categories.',
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
                <!-- Mobile Header -->
                <div class="ux4g-sb-navbar-mobile ux4g-d-flex ux4g-md-d-none ux4g-ai-center ux4g-inline-gap-s">
                    <a href="#" class="ux4g-text-white"><i class="ux4g-icon-outlined ux4g-fs-24">arrow_back</i></a>
                    <span class="ux4g-title-s-strong ux4g-text-white">National Services Portal</span>
                </div>
                <!-- Desktop Header -->
                <div class="ux4g-navbar-wrap ux4g-d-none ux4g-md-d-flex">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <!-- Right Group: Nav Links + Actions -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-l">
                        <!-- Navigation Links -->
                        <ul class="ux4g-navbar-links">
                            <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                            <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                            <li class="ux4g-dropdown ux4g-dropdown-button" data-ux4g-init="true">
                                <a href="#" class="ux4g-text-link-sm ux4g-dropdown-control " data-ux-toggle="dropdown"
                                    id="ux4g-dropdown-control-6" aria-haspopup="listbox" aria-expanded="false">
                                    <span>Label</span>
                                    <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20 ux4g-dropdown-caret"
                                        data-ux4g-init="true">arrow_drop_down</span>
                                </a>
                                <div class="ux4g-dropdown-menu" aria-labelledby="ux4g-dropdown-control-6">
                                    <ul class="ux4g-list ux4g-list-default ux4g-list-s">
                                        <li class="ux4g-list-item" role="option" data-ux4g-init="true">
                                            <button class="ux4g-list-item-row" type="button">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Label</span>
                                                </span>
                                            </button>
                                        </li>
                                        <li class="ux4g-list-item" role="option" data-ux4g-init="true">
                                            <button class="ux4g-list-item-row" type="button">
                                                <span class="ux4g-list-item-start">
                                                    <span aria-hidden="true">Label</span>
                                                </span>
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                            <li><a href="#" class="ux4g-text-link-sm">Label</a></li>
                        </ul>

                        <!-- Actions -->
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
                            <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20" data-ux4g-init="true">search</i>
                            <button class="ux4g-btn-primary ux4g-btn-md">Button</button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <!-- Top Search Section with Lavender/Primary background on mobile, styled responsively -->
        <div class="ux4g-search-hero-container ux4g-bg-neutral ux4g-py-xl">
            <div class="ux4g-container">
                <div class="ux4g-sb-search-browse-75 ux4g-m-auto ux4g-text-center">
                    <!-- Title and Subtitle -->
                    <h1 class="ux4g-heading-l-strong ux4g-mb-2xs">Find any government service</h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-l">Search 3,000+ services & schemes</p>

                    <!-- Search Input Bar -->
                    <div class="ux4g-search-container ux4g-search-lg" ux4g-search-filter="contains">
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" id="ux4g-searchContain" placeholder="Search for services..."
                                type="text" value="income" />
                            <div class="ux4g-search-actions">
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button">
                                    <span class="ux4g-icon-outlined">mic</span>
                                </button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear"
                                    type="button">
                                    <span class="ux4g-icon-outlined">close</span>
                                </button>
                            </div>
                            <button class="ux4g-search-btn" type="button">
                                <span class="ux4g-icon-outlined">search</span>
                            </button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                            <li class="ux4g-sb-search-header-item ux4g-px-m ux4g-py-xs ux4g-body-s-default ux4g-text-neutral-secondary">
                                Searching for '<strong>income</strong>'
                            </li>
                            <li class="ux4g-list-item">
                                <div class="ux4g-list-item-row">
                                    <span class="ux4g-list-item-start">
                                        <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-18">manage_search</i>
                                        <span>Income Certificate</span>
                                    </span>
                                    <span class="ux4g-list-item-end ux4g-body-s-default ux4g-text-neutral-tertiary">Revenue Dept</span>
                                </div>
                            </li>
                            <li class="ux4g-list-item">
                                <div class="ux4g-list-item-row">
                                    <span class="ux4g-list-item-start">
                                        <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-18">manage_search</i>
                                        <span>Income Tax Return...</span>
                                    </span>
                                    <span class="ux4g-list-item-end ux4g-body-s-default ux4g-text-neutral-tertiary">Income Tax Dept</span>
                                </div>
                            </li>
                            <li class="ux4g-list-item">
                                <div class="ux4g-list-item-row">
                                    <span class="ux4g-list-item-start">
                                        <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-18">manage_search</i>
                                        <span>Low Income Group...</span>
                                    </span>
                                    <span class="ux4g-list-item-end ux4g-body-s-default ux4g-text-neutral-tertiary">Social Welfare</span>
                                </div>
                            </li>
                            <li class="ux4g-list-item">
                                <div class="ux4g-list-item-row">
                                    <span class="ux4g-list-item-start">
                                        <i class="ux4g-icon-outlined ux4g-text-neutral-secondary ux4g-fs-18">manage_search</i>
                                        <span>Income & Asset Cer...</span>
                                    </span>
                                    <span class="ux4g-list-item-end ux4g-body-s-default ux4g-text-neutral-tertiary">Revenue Dept</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main Content Area -->
        <div class="ux4g-bg-neutral ux4g-sb-search-discovery-main-2">
            <!-- Category Browse Section -->
            <section class="category-browse-section ux4g-pb-xl">
                <div class="ux4g-container">
                    <h2 class="ux4g-heading-m-strong">Browse by category</h2>
                    <div class="ux4g-grid ux4g-grid-auto-fit-250 ux4g-mt-m ux4g-sb-card-category">
                        <!-- Card 1: Health -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">local_hospital</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Health</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">24 services</p>
                        </div>
                        <!-- Card 2: Agriculture -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">agriculture</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Agriculture</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">18 services</p>
                        </div>
                        <!-- Card 3: Education -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">school</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Education</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">31 services</p>
                        </div>
                        <!-- Card 4: Land Records -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">terrain</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Land Records</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">12 services</p>
                        </div>
                        <!-- Card 5: Transport -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">directions_bus</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Transport</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">15 services</p>
                        </div>
                        <!-- Card 6: Social Welfare -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">volunteer_activism</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Social Welfare</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">27 services</p>
                        </div>
                        <!-- Card 7: Utilities -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">bolt</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Utilities</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">9 services</p>
                        </div>
                        <!-- Card 8: Finance -->
                        <div class="ux4g-p-l ux4g-sb-category-card">
                            <div class="ux4g-sb-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                                <span class="ux4g-icon-outlined ux4g-text-primary ux4g-sb-category-card-icon">account_balance</span>
                            </div>
                            <h3 class="ux4g-label-xl-strong">Finance</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">21 services</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Popular Services Section -->
            <section class="ux4g-popular-services-section ux4g-bg-neutral ux4g-pt-xl ux4g-pb-2xl">
                <div class="ux4g-container">
                    <h2 class="ux4g-heading-m-strong ux4g-mb-m">Popular services</h2>
                    <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-md-4 ux4g-inline-gap-l ux4g-stack-gap-m">
                        <!-- Card 1: Income Certificate -->
                        <div class="ux4g-sb-popular-service-card">
                            <div class="ux4g-sb-popular-service-card-body">
                                <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Income Certificate</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Revenue Department</p>
                                <div class="ux4g-sb-popular-service-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                                    <span class="ux4g-text-neutral-tertiary">·</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">20 mins</span>
                                </div>
                            </div>
                            <div class="ux4g-sb-popular-service-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                        <!-- Card 2: Caste Certificate -->
                        <div class="ux4g-sb-popular-service-card">
                            <div class="ux4g-sb-popular-service-card-body">
                                <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Caste Certificate</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Social Welfare Dept</p>
                                <div class="ux4g-sb-popular-service-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                                    <span class="ux4g-text-neutral-tertiary">·</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">15 mins</span>
                                </div>
                            </div>
                            <div class="ux4g-sb-popular-service-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                        <!-- Card 3: Driving Licence -->
                        <div class="ux4g-sb-popular-service-card">
                            <div class="ux4g-sb-popular-service-card-body">
                                <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Driving Licence</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Transport Department</p>
                                <div class="ux4g-sb-popular-service-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-neutral-primary">₹200</span>
                                    <span class="ux4g-text-neutral-tertiary">·</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">30 days</span>
                                </div>
                            </div>
                            <div class="ux4g-sb-popular-service-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                        <!-- Card 4: PAN Card -->
                        <div class="ux4g-sb-popular-service-card">
                            <div class="ux4g-sb-popular-service-card-body">
                                <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">PAN Card</h3>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Income Tax Dept</p>
                                <div class="ux4g-sb-popular-service-meta">
                                    <span class="ux4g-body-s-strong ux4g-text-neutral-primary">₹107</span>
                                    <span class="ux4g-text-neutral-tertiary">·</span>
                                    <span class="ux4g-body-s-default ux4g-text-neutral-secondary">15 days</span>
                                </div>
                            </div>
                            <div class="ux4g-sb-popular-service-card-footer">
                                <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </section>
`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Search Autocomplete - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('search-autocomplete', 'Search Autocomplete - Full Page', '', FULLSCREEN_1_HTML)}
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
            ${getHeroHeader('Search Autocomplete - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('search-autocomplete-column', 'Search Autocomplete - Full Page', '', COLUMN_1_HTML)}
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
            ${getHeroHeader('Search Autocomplete - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('search-autocomplete-desktopworkspace', 'Search Autocomplete - Full Page', '', DESKTOPWORKSPACE_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
