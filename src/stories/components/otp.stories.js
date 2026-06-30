import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Input-OTP',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Input OTP captures one-time passwords with auto-generated digit slots, timer messaging, validation feedback, and locked-out handling.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'InputOtp');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, cleanCode = htmlContent) => {
    const displayCode = formatCode(cleanCode);
    const reactCode = getReactCode(cleanCode);
    const angularCode = formatCode(cleanCode);

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-shadow-l1 ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
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
                    const htmlCode = \`${displayCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    const reactCode = \`${reactCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;
                    const angularCode = \`${angularCode.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`;

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

                    tabs.forEach((tab) => {
                        tab.onclick = () => {
                            tabs.forEach((item) => item.classList.remove('is-active'));
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

const renderStorySection = (content) => `
    <section class="ux4g-bg-neutral-soft ux4g-py-2xl">
        <div class="ux4g-px-m">
            ${content}
        </div>
    </section>
`;
 
const OTP_DEFAULT_HTML = `
    <div class="ux4g-otp ux4g-otp-default" data-ux-otp data-ux-state="default" data-ux-count="4" data-ux-demo-error-on-complete="true" role="group" aria-labelledby="ux4g-otp-default-label" aria-describedby="ux4g-otp-default-meta">
        <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-default-label">Enter OTP</div>
        <div class="ux4g-otp-group">
            <input class="ux4g-otp-source" type="hidden" value="" placeholder="—" />
        </div>
        <div class="ux4g-otp-meta ux4g-body-s-default ux4g-otp-meta-between" id="ux4g-otp-default-meta">
            <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
            <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
        </div>
    </div>
`;

const OTP_INPUT_STATES_HTML = `
    <div class="ux4g-d-grid ux4g-gap-xl">
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Default</h3>
            ${OTP_DEFAULT_HTML}
        </div>
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Partially Filled</h3>
            <div class="ux4g-otp ux4g-otp-partial-filled" data-ux-otp data-ux-state="partial-filled" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-partial-label" aria-describedby="ux4g-otp-partial-meta">
                <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-partial-label">Enter OTP</div>
                <div class="ux4g-otp-group">
                    <input class="ux4g-otp-source" type="hidden" value="555" placeholder="—" />
                </div>
                <div class="ux4g-otp-meta ux4g-body-s-default ux4g-otp-meta-between" id="ux4g-otp-partial-meta">
                    <span class="ux4g-otp-helper">Didn't receive OTP?</span>
                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                </div>
            </div>
        </div>
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">All Filled</h3>
            <div class="ux4g-otp ux4g-otp-all-filled" data-ux-otp data-ux-state="all-filled" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-filled-label" aria-describedby="ux4g-otp-filled-meta">
                <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-filled-label">Enter OTP</div>
                <div class="ux4g-otp-group">
                    <input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—" />
                </div>
                <div class="ux4g-otp-meta ux4g-body-s-default ux4g-otp-meta-between" id="ux4g-otp-filled-meta">
                    <span class="ux4g-otp-helper">Didn't receive OTP?</span>
                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                </div>
            </div>
        </div>
    </div>
`;

const OTP_INPUT_STATES_CLEAN_CODE = `
<!-- Variant: OTP Input State - Default -->
<div class="ux4g-otp ux4g-otp-default" data-ux-otp data-ux-state="default" data-ux-count="4" data-ux-demo-error-on-complete="true" role="group" aria-labelledby="ux4g-otp-default-label" aria-describedby="ux4g-otp-default-meta">
  <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-default-label">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-body-s-default ux4g-otp-meta-between" id="ux4g-otp-default-meta">
    <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
  </div>
</div>

<!-- Variant: OTP Input State - Partially Filled -->
<div class="ux4g-otp ux4g-otp-partial-filled" data-ux-otp data-ux-state="partial-filled" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-partial-label" aria-describedby="ux4g-otp-partial-meta">
  <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-partial-label">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="555" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-body-s-default ux4g-otp-meta-between" id="ux4g-otp-partial-meta">
    <span class="ux4g-otp-helper">Didn't receive OTP?</span>
    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
  </div>
</div>

<!-- Variant: OTP Input State - All Filled -->
<div class="ux4g-otp ux4g-otp-all-filled" data-ux-otp data-ux-state="all-filled" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-filled-label" aria-describedby="ux4g-otp-filled-meta">
  <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-filled-label">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-body-s-default ux4g-otp-meta-between" id="ux4g-otp-filled-meta">
    <span class="ux4g-otp-helper">Didn't receive OTP?</span>
    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
  </div>
</div>
`;

const OTP_FEEDBACK_STATES_HTML = `
    <div class="ux4g-d-grid ux4g-gap-xl">
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Success</h3>
            <div class="ux4g-otp ux4g-otp-success" data-ux-otp data-ux-state="success" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-success-label" aria-describedby="ux4g-otp-success-meta">
                <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-success-label">Enter OTP</div>
                <div class="ux4g-otp-group">
                    <input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—" />
                </div>
                <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-success-meta">
                    <span class="ux4g-otp-status" data-ux-otp-status>
                        <span class="ux4g-icon-outlined" aria-hidden="true">done</span>
                        <span>Verification successful</span>
                    </span>
                </div>
            </div>
        </div>
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Error</h3>
            <div class="ux4g-otp ux4g-otp-error" data-ux-otp data-ux-state="error" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-error-label" aria-describedby="ux4g-otp-error-meta" aria-invalid="true">
                <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-error-label">Enter OTP</div>
                <div class="ux4g-otp-group">
                    <input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—" />
                </div>
                <div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" id="ux4g-otp-error-meta" aria-live="assertive">
                    <span class="ux4g-otp-status" data-ux-otp-status>
                        <span class="ux4g-icon-outlined" aria-hidden="true">error</span>
                        <span>Attempt 2 of 3</span>
                    </span>
                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in 00:17</span>
                </div>
            </div>
        </div>
        <div>
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Locked Out</h3>
            <div class="ux4g-otp ux4g-otp-locked" data-ux-otp data-ux-state="locked-out" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-locked-label" aria-describedby="ux4g-otp-locked-meta">
                <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-locked-label">Enter OTP</div>
                <div class="ux4g-otp-group" aria-disabled="true">
                    <input class="ux4g-otp-source" type="hidden" value="" placeholder="—" />
                </div>
                <div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" id="ux4g-otp-locked-meta">
                    <span class="ux4g-otp-status" data-ux-otp-status>
                        <span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
                        <span data-ux-otp-timer data-ux-otp-prefix="Locked for " data-ux-otp-seconds="1723">Locked for 28:43</span>
                    </span>
                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled">Resend OTP</span>
                </div>
            </div>
        </div>
    </div>
`;

const OTP_FEEDBACK_STATES_CLEAN_CODE = `
<!-- Variant: OTP Feedback State - Success -->
<div class="ux4g-otp ux4g-otp-success" data-ux-otp data-ux-state="success" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-success-label" aria-describedby="ux4g-otp-success-meta">
  <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-success-label">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-success-meta">
    <span class="ux4g-otp-status" data-ux-otp-status>
      <span class="ux4g-icon-outlined" aria-hidden="true">done</span>
      <span>Verification successful</span>
    </span>
  </div>
</div>

<!-- Variant: OTP Feedback State - Error -->
<div class="ux4g-otp ux4g-otp-error" data-ux-otp data-ux-state="error" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-error-label" aria-describedby="ux4g-otp-error-meta" aria-invalid="true">
  <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-error-label">Enter OTP</div>
  <div class="ux4g-otp-group">
    <input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" id="ux4g-otp-error-meta" aria-live="assertive">
    <span class="ux4g-otp-status" data-ux-otp-status>
      <span class="ux4g-icon-outlined" aria-hidden="true">error</span>
      <span>Attempt 2 of 3</span>
    </span>
    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in 00:17</span>
  </div>
</div>

<!-- Variant: OTP Feedback State - Locked Out -->
<div class="ux4g-otp ux4g-otp-locked" data-ux-otp data-ux-state="locked-out" data-ux-count="6" role="group" aria-labelledby="ux4g-otp-locked-label" aria-describedby="ux4g-otp-locked-meta">
  <div class="ux4g-otp-label ux4g-label-l-default" id="ux4g-otp-locked-label">Enter OTP</div>
  <div class="ux4g-otp-group" aria-disabled="true">
    <input class="ux4g-otp-source" type="hidden" value="" placeholder="—" />
  </div>
  <div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" id="ux4g-otp-locked-meta">
    <span class="ux4g-otp-status" data-ux-otp-status>
      <span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
      <span data-ux-otp-timer data-ux-otp-prefix="Locked for " data-ux-otp-seconds="1723">Locked for 28:43</span>
    </span>
    <span class="ux4g-otp-resend ux4g-otp-resend-disabled">Resend OTP</span>
  </div>
</div>
`;

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Input OTP', 'Input OTP provides source-backed one-time password entry with four-digit and six-digit flows, feedback messaging, and timed recovery states.')}
            ${renderStorySection(`
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-xl ux4g-shadow-l1 ux4g-p-xl">
                    <div class="ux4g-d-grid ux4g-gap-l">
                        <div class="ux4g-max-w-800">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mb-s">Pattern Summary</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-m-none">The OTP pattern auto-builds digit slots from a hidden source input, applies focus management, advances on numeric entry, and uses state classes for success, error, and locked-out feedback.</p>
                        </div>
                        ${OTP_DEFAULT_HTML}
                    </div>
                </div>
            `)}
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const InputStates = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Input OTP States', 'Default, partially filled, and completed OTP flows using the exact markup and state names from the source showcase.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('otp-input-states', 'Input States', 'Four-digit and six-digit entry patterns that demonstrate empty, in-progress, and fully completed OTP entry.', OTP_INPUT_STATES_HTML, false, OTP_INPUT_STATES_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const FeedbackStates = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Input OTP Feedback', 'Success, error, and locked-out OTP responses with timer and status messaging built from the source implementation.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('otp-feedback-states', 'Feedback States', 'Terminal OTP states covering successful verification, invalid attempts, and lockout handling.', OTP_FEEDBACK_STATES_HTML, false, OTP_FEEDBACK_STATES_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
