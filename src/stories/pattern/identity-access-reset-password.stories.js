/**
 * Identity & Access - Reset Password
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Identity & Access/Reset Password',
    tags: ['hidden'],
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Reset Password patterns.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'IdentityAccess');

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
            
            <script>
                (function() {
                    const blockId = "${id}";
                    const htmlCode = \`${displayCode.replace(/\\x60/g, '\\`').replace(/\\$/g, '\\$')}\`;
                    const reactCode = \`${reactCode.replace(/\\x60/g, '\\`').replace(/\\$/g, '\\$')}\`;
                    const angularCode = \`${angularCode.replace(/\\x60/g, '\\`').replace(/\\$/g, '\\$')}\`;
                    
                    const section = document.getElementById('section-' + blockId);
                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = document.getElementById('code-' + blockId);
                    const output = document.getElementById('output-' + blockId);
                    const tabs = section.querySelectorAll('.tab-trigger');
                    const copyBtn = section.querySelector('.copy-code');
                    
                    let currentLang = 'html';
                    
                    const highlight = () => {
                        const code = currentLang === 'react' ? reactCode : (currentLang === 'angular' ? angularCode : htmlCode);
                        output.textContent = code;
                        output.className = 'code-output language-' + (currentLang === 'react' ? 'javascript' : 'html') + ' ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap';
                        if (window.Prism) window.Prism.highlightElement(output);
                    };

                    toggleBtn.onclick = () => {
                        const isHidden = codeArea.style.display === 'none';
                        codeArea.style.display = isHidden ? 'block' : 'none';
                        toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                        if (isHidden) highlight();
                    };
                    
                    tabs.forEach(tab => {
                        tab.onclick = () => {
                            tabs.forEach(t => t.classList.remove('is-active'));
                            tab.classList.add('is-active');
                            currentLang = tab.dataset.lang;
                            highlight();
                        };
                    });
                    
                    copyBtn.onclick = () => {
                        navigator.clipboard.writeText(output.textContent).then(() => {
                            const original = copyBtn.innerHTML;
                            copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
                            setTimeout(() => copyBtn.innerHTML = original, 2000);
                        });
                    };

                    if (!document.getElementById('prism-core')) {
                        const link = document.createElement('link');
                        link.rel = 'stylesheet';
                        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
                        document.head.appendChild(link);
                        const script = document.createElement('script');
                        script.id = 'prism-core';
                        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
                        script.onload = highlight;
                        document.head.appendChild(script);
                    } else {
                        highlight();
                    }
                })();
            </script>
        </div>
    `;
};

export const Column = {
    name: 'Column',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reset Password - Column', 'Column layout for Reset Password.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('column', 'Column', '', "<section class=\"ux4g-identity-access-container ux4g-mb-4xl\">\n\n        <nav class=\"ux4g-navbar\">\n            <div class=\"ux4g-container\">\n                <div class=\"ux4g-navbar-wrap\">\n                    <div class=\"ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s\">\n                        <img src=\"./assets/images/national_emblem.svg\" alt=\"National Emblem\" class=\"ux4g-navbar-logo\">\n                        <span class=\"ux4g-divider-vertical \"></span>\n                        <img src=\"./assets/images/navbar-logo.svg\" alt=\"Logo\" class=\"ux4g-navbar-logo\">\n                        <div class=\"ux4g-d-flex ux4g-flex-column\">\n                            <span class=\"ux4g-label-m-strong\">Title</span>\n                            <span class=\"ux4g-body-xs-default\">Description</span>\n                        </div>\n                    </div>\n                    <a href=\"\" class=\"ux4g-label-l-default ux4g-text-link-md\">Help & Support</a>\n                </div>\n            </div>\n        </nav>\n\n        <div class=\"ux4g-identity-access-layout\">\n            <div class=\"ux4g-form-box \">\n\n                <a href=\"#\" class=\"ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block\"><span\n                        class=\"ux4g-icon-outlined ux4g-fs-14\">arrow_back</span> Back to Sign in</a>\n\n                <h2 class=\"ux4g-heading-xl-strong ux4g-text-neutral-primary ux4g-mb-xs\">Reset Password</h2>\n                <p class=\"ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xl\">Enter your registered mobile\n                    number to receive a verification code</p>\n\n                <form class=\"ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m\" onsubmit=\"return false;\">\n                    <div class=\"ux4g-input-container ux4g-input-lg\">\n                        <label class=\"ux4g-label-l-default ux4g-mb-2xs\" for=\"mobileNumberFP_card_0\">Mobile\n                            Number</label>\n                        <div class=\"ux4g-input\">\n                            <span class=\"ux4g-input-prefix\">+91</span>\n                            <input class=\"ux4g-input-input\" id=\"mobileNumberFP_card_0\" placeholder=\"Enter mobile number\"\n                                type=\"text\" inputmode=\"numeric\" maxlength=\"10\"\n                                oninput=\"this.value = this.value.replace(/[^0-9]/g, '')\">\n                        </div>\n                    </div>\n\n                    <div class=\"ux4g-form-actions ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s\">\n                        <div class=\"ux4g-d-flex ux4g-flex-column ux4g-gap-xs\">\n                            <button class=\"ux4g-btn-primary ux4g-btn-lg ux4g-w-100\" type=\"submit\">Send OTP</button>\n                            <div class=\"ux4g-text-center ux4g-mt-s\">\n                                <a href=\"#\"\n                                    class=\"ux4g-text-link ux4g-label-m-strong ux4g-d-inline-flex ux4g-ai-center\">Recover\n                                    account using Aadhaar Number <span\n                                        class=\"ux4g-icon-outlined ux4g-ml-2xs ux4g-fs-16\">arrow_forward</span></a>\n                            </div>\n                        </div>\n\n                        <div class=\"ux4g-divider-horizontal-text ux4g-text-center ux4g-my-s\">\n                            <span class=\"ux4g-divider-label ux4g-body-xs-medium ux4g-text-neutral-secondary\">OR</span>\n                        </div>\n\n                        <button type=\"button\" class=\"ux4g-btn-outline-primary ux4g-btn-lg ux4g-w-100\">\n                            Sign in with OTP instead\n                        </button>\n\n                        <div class=\"ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mt-m\">\n                            <i class=\"ux4g-icon-outlined ux4g-alert-icon\">error_outline</i>\n                            <div class=\"ux4g-form-alert-body\">\n                                <span class=\"ux4g-alert-message ux4g-body-s-default ux4g-text-warning\">Most services use\n                                    OTP login so you may not need a password.</span>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n\n\n\n            </div>\n            <!-- Footer Branding -->\n            <div class=\"ux4g-form-footer ux4g-mt-l ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s\">\n                <span class=\"ux4g-label-m-default\">Powered by -</span>\n                <img src=\"./assets/images/dic.svg\" alt=\"Digital India\" class=\"ux4g-dept-logo\">\n            </div>\n        </div>\n    </section>", false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reset Password - Full Screen', 'Full Screen layout for Reset Password.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('fullscreen', 'Full Screen', '', "<section class=\"ux4g-identity-access-container ux4g-mb-4xl\">\n\n        <nav class=\"ux4g-navbar\">\n            <div class=\"ux4g-container\">\n                <div class=\"ux4g-navbar-wrap\">\n                    <div class=\"ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s\">\n                        <img src=\"./assets/images/national_emblem.svg\" alt=\"National Emblem\" class=\"ux4g-navbar-logo\">\n                        <span class=\"ux4g-divider-vertical \"></span>\n                        <img src=\"./assets/images/navbar-logo.svg\" alt=\"Logo\" class=\"ux4g-navbar-logo\">\n                        <div class=\"ux4g-d-flex ux4g-flex-column\">\n                            <span class=\"ux4g-label-m-strong\">Title</span>\n                            <span class=\"ux4g-body-xs-default\">Description</span>\n                        </div>\n                    </div>\n                    <a href=\"\" class=\"ux4g-label-l-default ux4g-text-link-md\">Help & Support</a>\n                </div>\n            </div>\n        </nav>\n\n        <div class=\"ux4g-identity-access-layout ux4g-jc-center\">\n            <div class=\"ux4g-form-box \">\n\n                <a href=\"#\" class=\"ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block\"><span\n                        class=\"ux4g-icon-outlined ux4g-fs-14\">arrow_back</span> Back to Sign in</a>\n\n                <h2 class=\"ux4g-heading-xl-strong ux4g-text-neutral-primary ux4g-mb-xs\">Reset Password</h2>\n                <p class=\"ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xl\">Enter your registered mobile\n                    number to receive a verification code</p>\n\n                <form class=\"ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m\" onsubmit=\"return false;\">\n                    <div class=\"ux4g-input-container ux4g-input-lg\">\n                        <label class=\"ux4g-label-l-default ux4g-mb-2xs\" for=\"mobileNumberFP_card_0\">Mobile\n                            Number</label>\n                        <div class=\"ux4g-input\">\n                            <span class=\"ux4g-input-prefix\">+91</span>\n                            <input class=\"ux4g-input-input\" id=\"mobileNumberFP_card_0\" placeholder=\"Enter mobile number\"\n                                type=\"text\" inputmode=\"numeric\" maxlength=\"10\"\n                                oninput=\"this.value = this.value.replace(/[^0-9]/g, '')\">\n                        </div>\n                    </div>\n\n                    <div class=\"ux4g-form-actions ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s\">\n                        <div class=\"ux4g-d-flex ux4g-flex-column ux4g-gap-xs\">\n                            <button class=\"ux4g-btn-primary ux4g-btn-lg ux4g-w-100\" type=\"submit\">Send OTP</button>\n                            <div class=\"ux4g-text-center ux4g-mt-s\">\n                                <a href=\"#\"\n                                    class=\"ux4g-text-link ux4g-label-m-strong ux4g-d-inline-flex ux4g-ai-center\">Recover\n                                    account using Aadhaar Number <span\n                                        class=\"ux4g-icon-outlined ux4g-ml-2xs ux4g-fs-16\">arrow_forward</span></a>\n                            </div>\n                        </div>\n\n                        <div class=\"ux4g-divider-horizontal-text ux4g-text-center ux4g-my-s\">\n                            <span class=\"ux4g-divider-label ux4g-body-xs-medium ux4g-text-neutral-secondary\">OR</span>\n                        </div>\n\n                        <button type=\"button\" class=\"ux4g-btn-outline-primary ux4g-btn-lg ux4g-w-100\">\n                            Sign in with OTP instead\n                        </button>\n\n                        <div class=\"ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mt-m\">\n                            <i class=\"ux4g-icon-outlined ux4g-alert-icon\">error_outline</i>\n                            <div class=\"ux4g-form-alert-body\">\n                                <span class=\"ux4g-alert-message ux4g-body-s-default ux4g-text-warning\">Most services use\n                                    OTP login so you may not need a password.</span>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n\n\n\n            </div>\n            <!-- Footer Branding -->\n            <div class=\"ux4g-form-footer ux4g-mt-l ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s\">\n                <span class=\"ux4g-label-m-default\">Powered by -</span>\n                <img src=\"./assets/images/dic.svg\" alt=\"Digital India\" class=\"ux4g-dept-logo\">\n            </div>\n        </div>\n    </section>", false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const Card = {
    name: 'Card',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Reset Password - Card', 'Card layout for Reset Password.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('card', 'Card', '', "<section class=\"ux4g-identity-access-container ux4g-mb-4xl\">\n\n        <nav class=\"ux4g-navbar\">\n            <div class=\"ux4g-container\">\n                <div class=\"ux4g-navbar-wrap\">\n                    <div class=\"ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s\">\n                        <img src=\"./assets/images/national_emblem.svg\" alt=\"National Emblem\" class=\"ux4g-navbar-logo\">\n                        <span class=\"ux4g-divider-vertical \"></span>\n                        <img src=\"./assets/images/navbar-logo.svg\" alt=\"Logo\" class=\"ux4g-navbar-logo\">\n                        <div class=\"ux4g-d-flex ux4g-flex-column\">\n                            <span class=\"ux4g-label-m-strong\">Title</span>\n                            <span class=\"ux4g-body-xs-default\">Description</span>\n                        </div>\n                    </div>\n                    <a href=\"\" class=\"ux4g-label-l-default ux4g-text-link-md\">Help & Support</a>\n                </div>\n            </div>\n        </nav>\n\n        <div class=\"ux4g-identity-access-layout-brand-bg\">\n            <div class=\"ux4g-form-box \">\n\n                <a href=\"#\" class=\"ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block\"><span\n                        class=\"ux4g-icon-outlined ux4g-fs-14\">arrow_back</span> Back to Sign in</a>\n\n                <h2 class=\"ux4g-heading-xl-strong ux4g-text-neutral-primary ux4g-mb-xs\">Reset Password</h2>\n                <p class=\"ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xl\">Enter your registered mobile\n                    number to receive a verification code</p>\n\n                <form class=\"ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m\" onsubmit=\"return false;\">\n                    <div class=\"ux4g-input-container ux4g-input-lg\">\n                        <label class=\"ux4g-label-l-default ux4g-mb-2xs\" for=\"mobileNumberFP_card_0\">Mobile\n                            Number</label>\n                        <div class=\"ux4g-input\">\n                            <span class=\"ux4g-input-prefix\">+91</span>\n                            <input class=\"ux4g-input-input\" id=\"mobileNumberFP_card_0\" placeholder=\"Enter mobile number\"\n                                type=\"text\" inputmode=\"numeric\" maxlength=\"10\"\n                                oninput=\"this.value = this.value.replace(/[^0-9]/g, '')\">\n                        </div>\n                    </div>\n\n                    <div class=\"ux4g-form-actions ux4g-d-flex ux4g-flex-column ux4g-stack-gap-s\">\n                        <div class=\"ux4g-d-flex ux4g-flex-column ux4g-gap-xs\">\n                            <button class=\"ux4g-btn-primary ux4g-btn-lg ux4g-w-100\" type=\"submit\">Send OTP</button>\n                            <div class=\"ux4g-text-center ux4g-mt-s\">\n                                <a href=\"#\"\n                                    class=\"ux4g-text-link ux4g-label-m-strong ux4g-d-inline-flex ux4g-ai-center\">Recover\n                                    account using Aadhaar Number <span\n                                        class=\"ux4g-icon-outlined ux4g-ml-2xs ux4g-fs-16\">arrow_forward</span></a>\n                            </div>\n                        </div>\n\n                        <div class=\"ux4g-divider-horizontal-text ux4g-text-center ux4g-my-s\">\n                            <span class=\"ux4g-divider-label ux4g-body-xs-medium ux4g-text-neutral-secondary\">OR</span>\n                        </div>\n\n                        <button type=\"button\" class=\"ux4g-btn-outline-primary ux4g-btn-lg ux4g-w-100\">\n                            Sign in with OTP instead\n                        </button>\n\n                        <div class=\"ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mt-m\">\n                            <i class=\"ux4g-icon-outlined ux4g-alert-icon\">error_outline</i>\n                            <div class=\"ux4g-form-alert-body\">\n                                <span class=\"ux4g-alert-message ux4g-body-s-default ux4g-text-warning\">Most services use\n                                    OTP login so you may not need a password.</span>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n\n\n\n\n            </div>\n            <!-- Footer Branding -->\n            <div class=\"ux4g-form-footer ux4g-mt-l ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s\">\n                <span class=\"ux4g-label-m-default\">Powered by -</span>\n                <img src=\"./assets/images/dic.svg\" alt=\"Digital India\" class=\"ux4g-dept-logo\">\n            </div>\n        </div>\n    </section>", false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
