/**
 * Cross-departmental service discovery with category cards, featured services, recommendations, and an interactive quiz.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Global Service Discovery',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Cross-departmental service discovery with category cards, featured services, recommendations, and an interactive quiz.',
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
        <div class="ux4g-bg-primary-soft ux4g-gsd-search-hero-section">
            <div class="ux4g-container">
                <div class="ux4g-gsd-search-hero-section-inner">
                    <!-- Title using standard typescale utilities -->
                    <h1 class="ux4g-heading-xl-strong ux4g-mb-l">Find any government service</h1>

                    <!-- Subtitle using standard typescale and semantic text colors -->
                    <p class="ux4g-body-l-default ux4g-mb-l ux4g-text-neutral-secondary">
                        Search 3,000+ services, schemes and certificates</p>

                    <!-- Center Search input bar styled with semantic component class overridden with utilities -->
                    <div class="ux4g-search-container ux4g-search-lg" ux4g-search-filter="contains">
                    <div class="ux4g-search">
                        <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                        <input class="ux4g-search-input" id="ux4g-searchContain" placeholder="Search for a service, scheme or certificate"
                            type="text" />
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
                        <li class="ux4g-list-item">
                            <div class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></div>
                        </li>
                        <li class="ux4g-list-item">
                            <div class="ux4g-list-item-row"><span class="ux4g-list-item-start">Pineapple</span></div>
                        </li>
                        <li class="ux4g-list-item">
                            <div class="ux4g-list-item-row"><span class="ux4g-list-item-start">Banana</span></div>
                        </li>
                        <li class="ux4g-list-item">
                            <div class="ux4g-list-item-row"><span class="ux4g-list-item-start">Grapefruit</span></div>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </div>

    </section>

    <!-- Category Browse Section matching mockup -->
    <section class="category-browse-section ux4g-bg-neutral ux4g-pt-2xl">
        <div class="ux4g-container">
            <!-- Title -->
            <h2 class="ux4g-heading-m-strong ">Browse by category</h2>

            <!-- Grid of Cards (2 rows of 4 columns on large devices, responsive) -->
            <div class="ux4g-grid ux4g-grid-auto-fit-250 ux4g-mt-m ux4g-gsd-card-category">
                <!-- Card 1: Health -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-health">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">local_hospital</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Health</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">24 services</p>
                </div>

                <!-- Card 2: Education -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-education">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">school</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Education</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">31 services</p>
                </div>

                <!-- Card 3: Agriculture -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-agriculture">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">agriculture</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Agriculture</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">18 services</p>
                </div>

                <!-- Card 4: Land Records -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-land-records">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">terrain</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Land Records</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">12 services</p>
                </div>

                <!-- Card 5: Transport -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-transport">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">directions_bus</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Transport</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">15 services</p>
                </div>

                <!-- Card 6: Social Welfare -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-social-welfare">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">volunteer_activism</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Social Welfare</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">27 services</p>
                </div>

                <!-- Card 7: Utilities -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-utilities">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">bolt</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Utilities</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">9 services</p>
                </div>

                <!-- Card 8: Finance -->
                <div class="ux4g-p-l ux4g-gsd-category-card ux4g-gsd-category-finance">
                    <div class="ux4g-gsd-category-icon-wrap ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-icon-outlined ux4g-gsd-category-card-icon">account_balance</span>
                    </div>
                    <h3 class="ux4g-label-xl-strong">Finance</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">21 services</p>
                </div>

            </div>

        </div>
    </section>

    <!-- Featured Scheme Section matching mockup -->
    <section class="ux4g-gsd-featured-scheme-section ux4g-bg-neutral ux4g-pt-2xl">
        <div class="ux4g-container">
            <div class="ux4g-gsd-featured-scheme-card ux4g-p-2xl">
                <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-s ux4g-ai-center">

                    <!-- Left Content Column -->
                    <div class="ux4g-gsd-featured-scheme-content">
                        <span class="ux4g-label-m-strong ux4g-text-primary">FEATURED SCHEME</span>
                        <h2 class="ux4g-heading-l-strong featured-scheme-title">PM Awas Yojana (Urban)</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Subsidised housing loans for eligible
                            families &mdash; interest subsidy up to &#x20B9;2.67 lakh.</p>
                        <button class="ux4g-btn-primary ux4g-btn-md ux4g-gsd-featured-scheme-btn">Check eligibility</button>
                    </div>

                    <!-- Right Graphic Column -->
                    <div class="ux4g-gsd-featured-scheme-graphic-wrap">
                        <div class="ux4g-gsd-featured-scheme-graphic"></div>
                    </div>

                </div>
            </div>
        </div>
    </section>

    <!-- Popular Services Section -->
    <section class="ux4g-popular-services-section ux4g-bg-neutral ux4g-pt-2xl">
        <div class="ux4g-container">
            <!-- Title -->
            <h2 class="ux4g-heading-m-strong ux4g-mb-m">Popular services</h2>

            <!-- Grid of Cards (1 column on mobile, 2 columns on tablet, 4 columns on desktop) -->
            <div class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-md-4 ux4g-inline-gap-l ux4g-stack-gap-m">

                <!-- Card 1: Income Certificate -->
                <div class="ux4g-gsd-popular-service-card">
                    <div class="ux4g-gsd-popular-service-card-body">
                        <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Income Certificate</h3>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Revenue Department</p>

                        <div class="ux4g-gsd-popular-service-meta">
                            <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">20 mins</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-popular-service-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

                <!-- Card 2: Caste Certificate -->
                <div class="ux4g-gsd-popular-service-card">
                    <div class="ux4g-gsd-popular-service-card-body">
                        <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Caste Certificate</h3>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Social Welfare Dept</p>

                        <div class="ux4g-gsd-popular-service-meta">
                            <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">15 mins</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-popular-service-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

                <!-- Card 3: Driving Licence -->
                <div class="ux4g-gsd-popular-service-card">
                    <div class="ux4g-gsd-popular-service-card-body">
                        <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Driving Licence</h3>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Transport Department</p>

                        <div class="ux4g-gsd-popular-service-meta">
                            <span class="ux4g-body-s-strong ux4g-text-neutral-primary">&#x20B9;200</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">30 days</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-popular-service-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

                <!-- Card 4: PAN Card -->
                <div class="ux4g-gsd-popular-service-card">
                    <div class="ux4g-gsd-popular-service-card-body">
                        <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">PAN Card</h3>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Income Tax Dept</p>

                        <div class="ux4g-gsd-popular-service-meta">
                            <span class="ux4g-body-s-strong ux4g-text-neutral-primary">&#x20B9;107</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">15 days</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-popular-service-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Recommended Section -->
    <section class="ux4g-gsd-recommended-section  ux4g-bg-neutral ux4g-pt-2xl">
        <div class="ux4g-container">
            <!-- Title & Subtitle -->
            <h2 class="ux4g-heading-l-strong ux4g-mb-2xs">Recommended for Ramesh Kumar</h2>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-m">Based on your profile, location and
                category</p>

            <!-- Grid of Cards (1 column on mobile, 2 columns on tablet, 3 columns on desktop) -->
            <div
                class="ux4g-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-md-3 ux4g-inline-gap-l ux4g-stack-gap-m">

                <!-- Card 1: PM Kisan Samman Nidhi -->
                <div class="ux4g-gsd-recommended-card ux4g-bg-neutral-soft">
                    <div class="ux4g-gsd-recommended-card-body">
                        <div class="ux4g-pos-relative">
                            <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">PM Kisan Samman Nidhi</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Agriculture Department</p>
                        </div>

                        <div class="ux4g-gsd-recommended-meta">
                            <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">&#x20B9;6,000/yr</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-recommended-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

                <!-- Card 2: Ayushman Bharat (PM-JAY) -->
                <div class="ux4g-gsd-recommended-card ux4g-bg-neutral-soft">
                    <div class="ux4g-gsd-recommended-card-body">
                        <div class="ux4g-pos-relative">

                            <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">Ayushman Bharat (PM-JAY)</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Health & Family Welfare</p>
                        </div>

                        <div class="ux4g-gsd-recommended-meta">
                            <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">&#x20B9;5L cover</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-recommended-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

                <!-- Card 3: National Pension Scheme -->
                <div class="ux4g-gsd-recommended-card ux4g-bg-neutral-soft">
                    <div class="ux4g-gsd-recommended-card-body">
                        <div class="ux4g-pos-relative">

                            <h3 class="ux4g-title-s-strong ux4g-text-neutral-primary">National Pension Scheme</h3>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Finance Ministry</p>
                        </div>

                        <div class="ux4g-gsd-recommended-meta">
                            <span class="ux4g-body-s-strong ux4g-text-success">Free</span>
                            <span class="ux4g-text-neutral-tertiary">&middot;</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Tax benefit</span>
                        </div>
                    </div>
                    <div class="ux4g-gsd-recommended-card-footer">
                        <button class="ux4g-btn ux4g-btn-outline-primary">Apply</button>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Quiz Section -->
    <section class="ux4g-gsd-quiz-section ux4g-bg-neutral">
        <div class="ux4g-container">
            <div class="ux4g-gsd-quiz-banner">
                <div class="ux4g-gsd-quiz-banner-body">
                    <h3 class="ux4g-title-m-strong">Not sure what you're eligible for?</h3>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Take a 2-minute quiz and we'll find the
                        schemes you qualify for.</p>
                </div>
                <div class="ux4g-gsd-quiz-banner-footer">
                    <button class="ux4g-btn ux4g-btn-tonal-primary">Find my schemes</button>
                </div>
            </div>
        </div>
    </section>
`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Global Service Discovery - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('global-discovery', 'Global Service Discovery - Full Page', '', FULLSCREEN_1_HTML)}
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
            ${getHeroHeader('Global Service Discovery - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('global-discovery-desktopworkspace', 'Global Service Discovery - Full Page', '', DESKTOPWORKSPACE_1_HTML)}
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
            ${getHeroHeader('Global Service Discovery - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('global-discovery-column', 'Global Service Discovery - Full Page', '', COLUMN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
