/**
 * Fee Waived Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Payment & Transactions/Fee Waived',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Fee waiver confirmation for eligible applicants showing original fee breakdown with waiver applied.',
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

// ==================== HELPERS ====================
const getReactCodeLocal = (html) => htmlToJsx(html, 'FeeWaived');

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

// ==================== FEE WAIVED ====================
const FEE_WAIVED_CARD_HTML = `<section class="ux4g-mb-xl">
    <div class="ux4g-payment ux4g-payment-card">
        <div class="ux4g-payment-wrapper">
            <ul class="ux4g-stepper ux4g-stepper-horizontal ux4g-stepper-center ux4g-mb-xl">
                <li class="ux4g-stepper-step ux4g-stepper-done">
                    <div class="ux4g-stepper-head"><span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span class="ux4g-stepper-head-check"></span></span></div>
                    <span class="ux4g-label-l-default ux4g-stepper-label">Personal info</span>
                </li>
                <li class="ux4g-stepper-step ux4g-stepper-done">
                    <div class="ux4g-stepper-head"><span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span class="ux4g-stepper-head-check"></span></span></div>
                    <span class="ux4g-label-l-default ux4g-stepper-label">Documents</span>
                </li>
                <li class="ux4g-stepper-step ux4g-stepper-done">
                    <div class="ux4g-stepper-head"><span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span class="ux4g-stepper-head-check"></span></span></div>
                    <span class="ux4g-label-l-default ux4g-stepper-label">Review</span>
                </li>
                <li class="ux4g-stepper-step ux4g-stepper-completed">
                    <div class="ux4g-stepper-head"><span class="ux4g-stepper-head-icon ux4g-stepper-head-icon-active"><span class="ux4g-stepper-head-check ux4g-stepper-head-check-active"></span></span></div>
                    <span class="ux4g-label-l-default ux4g-stepper-label">Payment</span>
                </li>
            </ul>
            <div class="ux4g-text-center ux4g-mb-l">
                <button class="ux4g-icon-btn ux4g-bg-success-soft ux4g-icon-btn-lg ux4g-icon-btn-pill ux4g-mb-s">
                    <i class="ux4g-icon-filled ux4g-fs-24 ux4g-text-success">check_circle</i>
                </button>
                <h2 class="ux4g-heading-m-default">Fee Waived</h2>
                <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mt-s">You are eligible for fee waiver as an SC/ST applicant. No payment required.</p>
            </div>
            <div class="ux4g-table-responsive ux4g-table-rounded ux4g-mb-l ux4g-bg-success-soft ux4g-border-success">
                <table class="ux4g-table ux4g-table-m">
                    <tbody class="ux4g-bg-transparent">
                        <tr><td class="ux4g-text-neutral-secondary">Application fee</td><td class="ux4g-text-right"><span class="ux4g-body-m-strong">Rs 30.00</span></td></tr>
                        <tr><td class="ux4g-text-neutral-secondary">Processing charge</td><td class="ux4g-text-right"><span class="ux4g-body-m-strong">Rs 5.00</span></td></tr>
                        <tr><td class="ux4g-text-neutral-secondary">GST (18%)</td><td class="ux4g-text-right"><span class="ux4g-body-m-strong">Rs 6.30</span></td></tr>
                        <tr><td class="ux4g-border-bottom ux4g-text-neutral-secondary">Waiver applied</td><td class="ux4g-text-right ux4g-border-bottom"><span class="ux4g-body-m-strong">- Rs 41.30</span></td></tr>
                        <tr><td><span class="ux4g-text-neutral-secondary">Total payable</span></td><td class="ux4g-text-right"><span class="ux4g-body-m-strong">Rs 0.00</span></td></tr>
                    </tbody>
                </table>
            </div>
            <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-xs">
                <button class="ux4g-btn-primary ux4g-w-100">Proceed without payment</button>
                <button class="ux4g-btn-text-primary ux4g-w-100">Pay anyway</button>
            </div>
        </div>
        <div class="ux4g-payment-footer">
            <span class="ux4g-label-m-default">Powered by -</span>
            <img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo" />
        </div>
    </div>
</section>`;

const FEE_WAIVED_FULL_HTML = FEE_WAIVED_CARD_HTML.replace('ux4g-payment-card', 'ux4g-payment-full');

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Fee Waived', 'Fee waiver confirmation with success icon, fee breakdown with waiver, and action buttons.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('fee-waived-full', 'Fee Waived', 'Full screen layout with success icon, fee breakdown table showing waiver applied, and action buttons.', FEE_WAIVED_FULL_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const FeeWaived = {
    name: 'Fee Waived',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Fee Waived', 'Fee waiver confirmation with success icon, fee breakdown with waiver, and action buttons.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('fee-waived', 'Fee Waived', 'Card layout with success icon, fee breakdown table showing waiver applied, and action buttons.', FEE_WAIVED_CARD_HTML, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
