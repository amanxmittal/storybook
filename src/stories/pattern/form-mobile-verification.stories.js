/**
 * Form Mobile Verification Pattern
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Feedback & Communication/Form Mobile Verification',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Mobile number verification form with input validation feedback',
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
const getReactCodeLocal = (html) => htmlToJsx(html, 'FormMobileVerification');

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

// ==================== INTRODUCTION ====================
export const Introduction = {
    name: 'Introduction',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Form Mobile Verification', 'Mobile number verification form with input validation feedback')}
            <div class="ux4g-container ux4g-py-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-md-grid-cols-2 ux4g-lg-grid-cols-3 ux4g-gap-l">
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">phone_android</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Mobile Number Verification</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Error state validation for mobile number entry with 10-digit format requirement and inline error messaging.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

// ==================== MOBILE VERIFICATION ====================
export const FormMobileVerification = {
    name: 'Form Mobile Verification',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Form Mobile Verification', 'Error state validation for mobile number entry with inline error messaging.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('mobile-verification', 'Mobile Number - Error State', 'Mobile number input showing error validation for incomplete 10-digit number.', `<section class="ux4g-feedback-mobile-section">
    <div class="ux4g-container">
        <div class="ux4g-feedback-mobile-card">
            <div class="ux4g-feedback-back-wrapper">
                <a href="#" class="ux4g-text-link-sm ux4g-feedback-back-link">
                    <span class="ux4g-icon-outlined">arrow_back</span>
                    Back
                </a>
            </div>
            <div class="ux4g-feedback-header-wrapper">
                <h2 class="ux4g-heading-s-strong ux4g-feedback-title">Enter your Mobile Number</h2>
                <p class="ux4g-body-s-default ux4g-text-neutral-secondary">
                    Provide your mobile number for OTP verification and updates.
                </p>
            </div>
            <div class="ux4g-input-container ux4g-input-lg ux4g-input-error ux4g-feedback-input-container">
                <label class="ux4g-label-m-default" for="ux4g-mobile-field">Mobile Number</label>
                <div class="ux4g-input ux4g-feedback-input-wrapper">
                    <input class="ux4g-input-input ux4g-feedback-input" type="text" id="ux4g-mobile-field" value="9876543" pattern="[0-9]{10}" maxlength="10" minlength="10" inputmode="numeric" required />
                </div>
                <div class="ux4g-input-helper">
                    <span class="ux4g-icon-outlined ux4g-input-helper-icon">error</span>
                    <span class="ux4g-input-helper-text">Enter a valid 10-digit number</span>
                </div>
            </div>
            <div class="ux4g-feedback-btn-wrapper">
                <button class="ux4g-btn-primary ux4g-btn-lg ux4g-feedback-submit-btn">Verify</button>
            </div>
        </div>
    </div>
</section>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
