/**
 * Alert Component Stories
 * 
 * showcasing different types of alerts: Context, Toast, and layout-based alerts.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Alert',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Alerts provide feedback to users, such as confirmation, information, or errors.',
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

// --- Helper Functions ---

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

const getReactCode = (html) => htmlToJsx(html, 'Alert');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-w-100">
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
                        <pre class="ux4g-m-none ux4g-p-l ux4g-w-100"><code class="code-output language-html ux4g-w-100 ux4g-fs-14 ux4g-lh-base ux4g-d-block ux4g-text-wrap" id="output-${id}">${displayCode.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</code></pre>
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

// --- Stories ---

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-py-2xl">
            <div class="ux4g-container">
                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l ux4g-opacity-80">
                    <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                        <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                        <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                    </div>
                </div>
                <div class="ux4g-max-w-800">
                    <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Alert</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Alerts are used to communicate important messages and feedback to users. They provide contextual information, warnings, and error statuses to ensure a smooth and informed user journey.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-my-xl">
                    <!-- Key Behaviors Card -->
                    <div class="ux4g-card ux4g-card-solid">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Key behaviors</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Provides immediate, high-impact feedback for user actions or system states.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports four semantic intents: Info, Success, Warning, and Error for consistent messaging.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Offers interactive Toast notifications for transient feedback that doesn't block the UI.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Includes flexible layout utilities (Fluid, Center, Wide) to adapt to different page structures.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Available Stories Card -->
                    <div class="ux4g-card ux4g-card-outline">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Available stories</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-primary-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-primary">Introduction</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Component description, usage guidance, and visual overview.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-info">Context Alerts</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Rich inline status messages with icons and progress indicators.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-success">Toast Notifications</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Floating corner alerts for transient feedback logic.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-warning">System Alerts</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Structural variants including Fluid, Center, and Wide layouts.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>




        <script>
            (function() {
                const intro = document.getElementById('intro-container');
                const copyBtns = intro.querySelectorAll('.copy-text');
                copyBtns.forEach(btn => {
                    btn.onclick = () => {
                        const text = btn.dataset.text;
                        navigator.clipboard.writeText(text).then(() => {
                            const original = btn.innerHTML;
                            btn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-success">check</span>';
                            setTimeout(() => btn.innerHTML = original, 2000);
                        });
                    };
                });
            })();
        </script>
    </div>
`;

export const Introduction = {
    render: () => INTRODUCTION_CONTENT,
    parameters: {
        docs: { disable: true },
    },
};

export const ContextAlerts = {
    render: () => {
        const getAlertHTML = (variant, icon, title, progress) => `
<div class="ux4g-context-alert ux4g-alert-${variant}">
    <i class="ux4g-icon ux4g-alert-icon">${icon}</i>
    <span class="ux4g-alert-title">${title} Title</span>
    <div class="ux4g-alert-actions">
        <p class="ux4g-body-m-default ux4g-text-neutral-tertiary ux4g-m-none">12:30PM</p>
        <a href="#" class="ux4g-alert-link">Action</a>
        <button class="ux4g-alert-close">
            <i class="ux4g-icon">close</i>
        </button>
    </div>
    <div class="ux4g-alert-message">
        Detailed information regarding the ${variant} status message.
    </div>
    <div class="ux4g-alert-progress-wrapper">
        <div class="ux4g-alert-progress">
            <div class="ux4g-alert-progress-inner ux4g-bg-${variant}-strong" style="width: ${progress}%;"></div>
        </div>
        <span class="ux4g-alert-progress-text">${progress}%</span>
    </div>
    <div class="ux4g-alert-footer">
        <a href="#" class="ux4g-alert-link">Primary Action</a>
        <a href="#" class="ux4g-alert-link">Secondary</a>
    </div>
</div>`.trim();

        const infoCode = getAlertHTML('info', 'info', 'Information', 5);
        const successCode = getAlertHTML('success', 'check_circle', 'Success', 100);
        const warningCode = getAlertHTML('warning', 'warning', 'Warning', 60);
        const errorCode = getAlertHTML('error', 'error', 'Error', 25);

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Context Alerts', 'Context alerts are designed for high-impact inline feedback. They support detailed content, icons, progress indicators, and multiple action points.')}
                
                <div class="ux4g-container ux4g-p-s">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                        ${renderDemoCodeBlock('info-context', 'Information Alert', 'Neutral status updates and informative messages.', infoCode)}
                        ${renderDemoCodeBlock('success-context', 'Success Alert', 'Confirmation of completed actions.', successCode)}
                        ${renderDemoCodeBlock('warning-context', 'Warning Alert', 'Alerts requiring user attention or caution.', warningCode)}
                        ${renderDemoCodeBlock('error-context', 'Error Alert', 'Critical failures and error reports.', errorCode)}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};

export const ToastAlerts = {
    render: () => {
        const topLeftCode = `
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux4g-toggle="toast"
    data-ux4g-position="top-left" data-ux4g-variant="info" data-ux4g-title="Info Toast"
    data-ux4g-body="Message for top-left info notification.">
    <i class="ux4g-icon">north_west</i> Top Left
</button>`.trim();

        const topRightCode = `
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux4g-toggle="toast"
    data-ux4g-position="top-right" data-ux4g-variant="success"
    data-ux4g-title="Success Toast" data-ux4g-body="Message for top-right success notification.">
    <i class="ux4g-icon">north_east</i> Top Right
</button>`.trim();

        const bottomLeftCode = `
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux4g-toggle="toast"
    data-ux4g-position="bottom-left" data-ux4g-variant="warning"
    data-ux4g-title="Warning Toast" data-ux4g-body="Message for bottom-left warning notification.">
    <i class="ux4g-icon">south_west</i> Bottom Left
</button>`.trim();

        const bottomRightCode = `
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux4g-toggle="toast"
    data-ux4g-position="bottom-right" data-ux4g-variant="error"
    data-ux4g-title="Error Toast" data-ux4g-body="Message for bottom-right error notification.">
    <i class="ux4g-icon">south_east</i> Bottom Right
</button>`.trim();

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Toast Notifications', 'Transient global alerts that appear in corners. Toasts are best for non-disruptive feedback like success confirmations or background task updates.')}
                
                <div class="ux4g-container ux4g-p-s">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                        ${renderDemoCodeBlock('toast-tl', 'Top Left Position', 'Triggers a toast in the top-left corner.', topLeftCode)}
                        ${renderDemoCodeBlock('toast-tr', 'Top Right Position', 'Triggers a toast in the top-right corner.', topRightCode)}
                        ${renderDemoCodeBlock('toast-bl', 'Bottom Left Position', 'Triggers a toast in the bottom-left corner.', bottomLeftCode)}
                        ${renderDemoCodeBlock('toast-br', 'Bottom Right Position', 'Triggers a toast in the bottom-right corner.', bottomRightCode)}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};

export const SystemAlerts = {
    render: () => {
        const getLayoutHTML = (layoutClass, isCenter = false) => `
    ${['info', 'warning', 'error', 'success'].map(variant => {
        const icon = variant === 'success' ? 'check_circle' : (variant === 'info' ? 'info' : variant);
        const title = variant.charAt(0).toUpperCase() + variant.slice(1);
        
        if (isCenter) {
            return `
    <div class="ux4g-alert ux4g-alert-${variant} ux4g-alert-center">
        <div class="ux4g-alert-content">
            <i class="ux4g-icon ux4g-alert-icon">${icon}</i>
            <span class="ux4g-alert-title">${title}</span>
            <span class="ux4g-alert-message">Write your ${variant} text here</span>
            <a href="#" class="ux4g-alert-link">Action</a>
        </div>
        <button class="ux4g-alert-close">
            <i class="ux4g-icon">close</i>
        </button>
    </div>`;
        }
        
        return `
    <div class="ux4g-alert ux4g-alert-${variant}${layoutClass ? ` ${layoutClass}` : ''}">
        <i class="ux4g-icon ux4g-alert-icon">${icon}</i>
        <div class="ux4g-alert-content">
            <span class="ux4g-alert-title">${title}</span>
            <span class="ux4g-alert-message">Write your ${variant} text here</span>
        </div>
        <div class="ux4g-alert-actions">
            <a href="#" class="ux4g-alert-link">Action</a>
            <button class="ux4g-alert-close">
                <i class="ux4g-icon">close</i>
            </button>
        </div>
    </div>`;
    }).join('\n')}`.trim();

        const getLayoutCode = (layoutLabel, layoutClass, isCenter = false) => getSnippetCode(['info', 'warning', 'error', 'success'].map((variant) => {
            const icon = variant === 'success' ? 'check_circle' : (variant === 'info' ? 'info' : variant);
            const title = variant.charAt(0).toUpperCase() + variant.slice(1);

            if (isCenter) {
                return {
                    label: `${layoutLabel} - ${title}`,
                    html: `
<div class="ux4g-alert ux4g-alert-${variant} ux4g-alert-center">
    <div class="ux4g-alert-content">
        <i class="ux4g-icon ux4g-alert-icon">${icon}</i>
        <span class="ux4g-alert-title">${title}</span>
        <span class="ux4g-alert-message">Write your ${variant} text here</span>
        <a href="#" class="ux4g-alert-link">Action</a>
    </div>
    <button class="ux4g-alert-close">
        <i class="ux4g-icon">close</i>
    </button>
</div>`.trim(),
                };
            }

            return {
                label: `${layoutLabel} - ${title}`,
                html: `
<div class="ux4g-alert ux4g-alert-${variant}${layoutClass ? ` ${layoutClass}` : ''}">
    <i class="ux4g-icon ux4g-alert-icon">${icon}</i>
    <div class="ux4g-alert-content">
        <span class="ux4g-alert-title">${title}</span>
        <span class="ux4g-alert-message">Write your ${variant} text here</span>
    </div>
    <div class="ux4g-alert-actions">
        <a href="#" class="ux4g-alert-link">Action</a>
        <button class="ux4g-alert-close">
            <i class="ux4g-icon">close</i>
        </button>
    </div>
</div>`.trim(),
            };
        }));

        const fluidCode = getLayoutHTML('');
        const centerCode = getLayoutHTML('ux4g-alert-center', true);
        const wideCode = getLayoutHTML('ux4g-alert-wide');
        const fluidSnippetCode = getLayoutCode('Fluid Layout', '', false);
        const centerSnippetCode = getLayoutCode('Center Layout', 'ux4g-alert-center', true);
        const wideSnippetCode = getLayoutCode('Wide Layout', 'ux4g-alert-wide', false);

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('System Alerts', 'System alerts are layout-based variants designed to adapt to different UI structures using Fluid, Center, and Wide utilities.')}
                
                <div class="ux4g-container ux4g-p-s">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                        ${renderDemoCodeBlock('layout-fluid', 'Fluid Layout (All Variants)', 'Default full-width layout for all semantic intents.', fluidCode, false, fluidSnippetCode)}
                        ${renderDemoCodeBlock('layout-center', 'Center Layout (All Variants)', 'Compact horizontal alignment for focused messaging.', centerCode, false, centerSnippetCode)}
                        ${renderDemoCodeBlock('layout-wide', 'Wide Layout (All Variants)', 'Optimized horizontal layout for container-based page shells.', wideCode, false, wideSnippetCode)}
                    </div>
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};
