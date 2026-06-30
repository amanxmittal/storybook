/**
 * Browse and filter advocates with consultation fees, experience, languages, and bookable slots.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Search & Discovery/Consultation Slot Booking',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Browse and filter advocates with consultation fees, experience, languages, and bookable slots.',
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

const FULLSCREEN_1_HTML = `    <section class="ux4g-bg-neutral ux4g-py-2xl">
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
                                    <span>Legal Aid</span>
                                </a>
                            </li>
                            <li class="ux4g-breadcrumb-item">
                                <a href="#" class="ux4g-breadcrumb-link">
                                    <span>Consultation</span>
                                </a>
                            </li>
                            <li class="ux4g-breadcrumb-item active" aria-current="page">
                                <span>Advocates</span>
                            </li>
                        </ol>
                    </nav>
                </div>

                <!-- Header -->
                <div class="ux4g-mb-xl">
                    <h1 class="ux4g-heading-xl-strong ux4g-mb-3xs">Select an advocate</h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">District Legal Services Authority, Pune &middot; 12 advocates available</p>
                </div>

                <!-- Advocates Stack -->
                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m">
                    <!-- Adv. M. Sharma Card -->
                    <div class="ux4g-csb-advocate-card">
                        <div class="ux4g-csb-advocate-left">
                            <div class="ux4g-csb-advocate-icon-wrap">
                                <i class="ux4g-icon-outlined">gavel</i>
                            </div>
                            <div class="ux4g-csb-advocate-info">
                                <div class="ux4g-csb-advocate-header-row ux4g-mb-2xs">
                                    <h3 class="ux4g-title-m-strong ux4g-text-neutral-primary">Adv. M. Sharma</h3>
                                    <span class="ux4g-tag ux4g-tag-tonal-success ux4g-tag-s">8 slots</span>
                                </div>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xs">Family Law &middot; 12 yrs experience</p>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Languages: Hindi, Marathi, English</p>
                            </div>
                        </div>
                        <button class="ux4g-btn ux4g-btn-md ux4g-btn-primary ux4g-csb-select-btn">Select</button>
                    </div>

                    <!-- Adv. R. Iyer Card -->
                    <div class="ux4g-csb-advocate-card">
                        <div class="ux4g-csb-advocate-left">
                            <div class="ux4g-csb-advocate-icon-wrap">
                                <i class="ux4g-icon-outlined">gavel</i>
                            </div>
                            <div class="ux4g-csb-advocate-info">
                                <div class="ux4g-csb-advocate-header-row ux4g-mb-2xs">
                                    <h3 class="ux4g-title-m-strong ux4g-text-neutral-primary ux4g-mb-2xs">Adv. R. Iyer</h3>
                                    <span class="ux4g-tag ux4g-tag-tonal-success ux4g-tag-s">5 slots</span>
                                </div>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xs">Civil & Property Law &middot; 18 yrs experience</p>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Languages: English, Marathi, Tamil</p>
                            </div>
                        </div>
                        <button class="ux4g-btn ux4g-btn-md ux4g-btn-primary ux4g-csb-select-btn">Select</button>
                    </div>

                    <!-- Adv. P. Nair Card -->
                    <div class="ux4g-csb-advocate-card">
                        <div class="ux4g-csb-advocate-left">
                            <div class="ux4g-csb-advocate-icon-wrap">
                                <i class="ux4g-icon-outlined">gavel</i>
                            </div>
                            <div class="ux4g-csb-advocate-info">
                                <div class="ux4g-csb-advocate-header-row ux4g-mb-2xs">
                                    <h3 class="ux4g-title-m-strong ux4g-text-neutral-primary ux4g-mb-2xs">Adv. P. Nair</h3>
                                    <span class="ux4g-tag ux4g-tag-tonal-success ux4g-tag-s">3 slots</span>
                                </div>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xs">Labour & Employment Law &middot; 9 yrs experience</p>
                                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Languages: Hindi, Malayalam, English</p>
                            </div>
                        </div>
                        <button class="ux4g-btn ux4g-btn-md ux4g-btn-primary ux4g-csb-select-btn">Select</button>
                    </div>
                </div>

            </div>
        </section>
`;

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Consultation Slot Booking - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('consultation-booking', 'Consultation Slot Booking - Full Page', '', FULLSCREEN_1_HTML)}
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
            ${getHeroHeader('Consultation Slot Booking - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('consultation-booking-column', 'Consultation Slot Booking - Full Page', '', COLUMN_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

const CARD_1_HTML = FULLSCREEN_1_HTML;

export const Card = {
    name: 'Card',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Consultation Slot Booking - Full Screen', 'Full Screen layout variant for search and discovery patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('consultation-booking-card', 'Consultation Slot Booking - Full Page', '', CARD_1_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
