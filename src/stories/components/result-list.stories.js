/**
 * Result List Component Stories
 * 
 * Showcasing Result List variants including Application, Documents, Service, Grievance, and Payment.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Result List',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Result Lists display structured information in a list format, optimized for various contexts like applications, documents, services, grievances, and payments.',
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

const getReactCode = (html) => htmlToJsx(html, 'ResultList');
const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, gridClass = 'ux4g-grid-cols-1', customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-text-neutral-secondary ux4g-body-m-default ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-grid ${gridClass} ux4g-gap-l ux4g-w-100">
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
                    const htmlCode = \`${displayCode.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$')}\`;
                    const reactCode = \`${reactCode.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$')}\`;
                    const angularCode = \`${angularCode.replace(/`/g, '\\\\`').replace(/\\$/g, '\\\\$')}\`;
                    
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

// --- HTML Content ---

const APPLICATION_HTML = `
<section class="ux4g-mt-xl ux4g-pb-xl">
    <div class="ux4g-container">
        <h1 class="ux4g-heading-m-strong ux4g-mb-l">Result list row</h1>

        <div class="ux4g-result-list ux4g-result-list-v1 ux4g-mb-m">
            <!-- Header -->
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <!-- Icon Placeholder -->
                    <div class="ux4g-result-list-icon"></div>
                    <!-- Titles -->
                    <div class="ux4g-result-list-title-group">
                        <div class="ux4g-result-list-meta">
                            <span class="ux4g-body-xs-default ux4g-result-list-id">
                                <span
                                    class="ux4g-text-neutral-tertiary ux4g-label-s-default ux4g-md-d-none ux4g-mb-2xs">Reference
                                    Number</span>
                                INC-2026-MH-04127
                            </span>
                            <span class="ux4g-divider-vertical"></span>
                            <span class="ux4g-label-m-strong ux4g-result-list-dept">
                                <span
                                    class="ux4g-text-neutral-tertiary ux4g-label-s-default ux4g-md-d-none ux4g-mb-2xs">Department</span>
                                Revenue Department
                            </span>
                        </div>
                        <h2 class="ux4g-title-s-default ux4g-result-list-title">Income Certificate</h2>
                    </div>
                </div>

                <div class="ux4g-result-list-actions-container ux4g-d-flex">
                    <div class="ux4g-result-list-status-date ux4g-d-flex ux4g-flex-column">
                        <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-warning"><span
                                class="ux4g-badge-dot-warning ux4g-badge-s" aria-hidden="true"></span><span
                                class="ux4g-label-m-default ux4g-sla-badge-label">8 days left </span><span
                                class="ux4g-sla-badge-divider" aria-hidden="true"></span><span
                                class="ux4g-label-s-default ux4g-sla-badge-status">Under review</span></span>
                        <span class="ux4g-result-list-date">
                            <span class="ux4g-text-neutral-tertiary ux4g-result-list-date-label">
                                <span class="ux4g-label-s-default ux4g-md-d-none">Last Updated Date</span>
                                <span class="ux4g-label-s-default ux4g-d-none ux4g-md-d-inline">Last updated:</span>
                            </span>
                            <span class="ux4g-label-s-default ux4g-result-list-last-date">10 Apr 2026</span>
                        </span>
                    </div>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                        <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle"
                            aria-expanded="false">expand_more</span>
                    </div>
                </div>
            </div>

            <!-- Expanded Content -->
            <div class="ux4g-result-list-content accordion-content">
                <div class="ux4g-result-list-details">
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Submitted Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Assigned Officer</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Next Step</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Documents</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address
                            Proof</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-error ux4g-label-s-default">Escalation</span>
                        <a class="ux4g-text-link-md" href="" target="_blank">
                            Register grievance
                            <i class="ux4g-icon-outlined">arrow_forward</i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const DOCUMENTS_HTML = `
<section class="ux4g-mt-xl ux4g-pb-xl">
    <div class="ux4g-container">
        <h1 class="ux4g-heading-m-strong ux4g-mb-l">Result list row - Variation 2</h1>

        <div class="ux4g-result-list ux4g-result-list-v2 ux4g-mb-m">
            <!-- Header -->
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <!-- PDF Icon -->
                    <div class="ux4g-result-list-icon">
                        <span class="ux4g-icon-outlined">picture_as_pdf</span>
                    </div>
                    <!-- Titles -->
                    <div class="ux4g-result-list-title-group">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                            <h2 class="ux4g-title-s-default ux4g-result-list-title">Income Certificate</h2>
                            <span class="ux4g-tag-filled-success  ux4g-tag-m">
                                <span class="ux4g-icon-outlined ux4g-fs-16 ux4g-text-white">check</span>
                                <span class="ux4g-tag-text">Issued</span>
                            </span>
                        </div>
                        <div class="ux4g-label-m-strong ux4g-result-list-dept">Revenue Department</div>
                    </div>
                </div>

                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <div class="ux4g-result-list-metadata ux4g-md-d-flex ux4g-d-none">
                        <div class="ux4g-label-s-default ux4g-result-list-meta-item">
                            Issued: <span class="ux4g-result-list-meta-value">05 Mar 2026</span>
                        </div>
                        <div class="ux4g-label-s-default ux4g-result-list-meta-item ux4g-result-list-meta-item2">
                            Valid till: <span class="ux4g-result-list-meta-value">05 Mar 2027</span>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">
                            <span class="ux4g-icon-outlined ux4g-fs-18">download</span>
                            Download
                        </button>
                        <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle"
                            aria-expanded="false">expand_more</span>
                    </div>
                </div>
            </div>

            <!-- Expanded Content -->
            <div class="ux4g-result-list-content accordion-content">
                <div class="ux4g-result-list-details">
                    <!-- Mobile Specific Grid Items -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Issued</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">05 Apr 2026</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Valid till</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">05 Apr 2027</span>
                    </div>

                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Reference Number</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">INC-2026-MH-04127</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Last Updated
                            Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">10 Apr 2026</span>
                    </div>

                    <!-- Common & Desktop Specific Grid Items -->
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Submitted Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Assigned Officer</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Next Step</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                    </div>

                    <!-- Mobile Specific Department -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Department</span>
                        <span class="ux4g-text-primary ux4g-body-s-default">Revenue Department</span>
                    </div>

                    <!-- Documents (Full width on desktop, regular on mobile) -->
                    <div class="ux4g-result-list-detail-item ux4g-result-list-full-width">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Documents</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address
                            Proof</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const SERVICE_HTML = `
<section class="ux4g-mt-xl ux4g-pb-xl">
    <div class="ux4g-container">
        <h1 class="ux4g-heading-m-strong ux4g-mb-l">Result list row - Variation 3</h1>

        <div class="ux4g-result-list ux4g-result-list-v3 ux4g-mb-m">
            <!-- Header -->
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <!-- Placeholder Icon -->
                    <div class="ux4g-result-list-icon">
                    </div>
                    <!-- Titles -->
                    <div class="ux4g-result-list-title-group">
                        <h2 class="ux4g-title-s-default ux4g-result-list-title">Income Certificate</h2>
                        <div class="ux4g-label-m-strong ux4g-result-list-dept">Revenue Department</div>
                    </div>
                </div>

                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <div class="ux4g-label-m-default ux4g-result-list-metadata">
                        <span class="ux4g-tag-tonal-neutral">Paid</span>
                        <div class="ux4g-label-s-default ux4g-result-list-meta-item">
                            <span>₹ 120/-</span>
                        </div>
                        <div class="ux4g-label-s-default ux4g-result-list-meta-item">
                            <span class="ux4g-icon-outlined">schedule</span>
                            <span>20 mins</span>
                        </div>
                    </div>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Apply</button>
                        <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle"
                            aria-expanded="false">expand_more</span>
                    </div>
                </div>
            </div>

            <!-- Expanded Content -->
            <div class="ux4g-result-list-content accordion-content">
                <div class="ux4g-result-list-details">
                    <!-- Mobile Specific Grid Items -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Reference Number</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">INC-2026-MH-04127</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Last Updated
                            Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">10 Apr 2026</span>
                    </div>

                    <!-- Common & Desktop Specific Grid Items -->
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Submitted Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Assigned Officer</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Next Step</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                    </div>

                    <!-- Mobile Specific Department -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Department</span>
                        <span class="ux4g-text-primary ux4g-body-s-default">Revenue Department</span>
                    </div>

                    <!-- Documents -->
                    <div class="ux4g-result-list-detail-item ux4g-result-list-full-width">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Documents</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address
                            Proof</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const GRIEVANCE_HTML = `
<section class="ux4g-mt-xl ux4g-pb-xl">
    <div class="ux4g-container">
        <h1 class="ux4g-heading-m-strong ux4g-mb-l">Result list row - Variation 4</h1>

        <div class="ux4g-result-list ux4g-result-list-v4 ux4g-mb-m">
            <!-- Header -->
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <!-- Placeholder Icon -->
                    <div class="ux4g-result-list-icon">
                    </div>
                    <!-- Titles -->
                    <div class="ux4g-result-list-title-group">
                        <div class="ux4g-body-xs-default ux4g-result-list-id">GRV-2026-04127</div>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                            <h2 class="ux4g-title-s-default ux4g-result-list-title">Income Certificate</h2>
                            <span class="ux4g-tag-filled-primary ux4g-tag-m">Escalated</span>
                        </div>
                    </div>
                </div>

                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <div class="ux4g-result-list-metadata ux4g-md-d-flex ux4g-d-none">
                        <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error">
                            <span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span>
                            <span class="ux4g-label-m-default ux4g-sla-badge-label">3 days overdue</span>
                            <span class="ux4g-sla-badge-divider" aria-hidden="true"></span>
                            <span class="ux4g-label-s-default ux4g-sla-badge-status">Under review</span>
                        </span>
                    </div>
                    <div class="ux4g-result-list-actions">
                        <span class="ux4g-icon-outlined ux4g-result-list-alert-icon ux4g-md-d-none">priority_high</span>
                        <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">Track</button>
                        <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle"
                            aria-expanded="false">expand_more</span>
                    </div>
                </div>
            </div>

            <!-- Expanded Content -->
            <div class="ux4g-result-list-content accordion-content">
                <div class="ux4g-result-list-details">
                    <!-- Mobile Specific (Reference & SLA) -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Reference Number</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">GRV-2026-04127</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">SLA Status</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default ux4g-d-flex ux4g-ai-center ux4g-inline-gap-2xs">
                            <span class="ux4g-sla-badge ux4g-sla-badge-rect ux4g-sla-status-error">
                                <span class="ux4g-badge-dot-danger ux4g-badge-s" aria-hidden="true"></span>
                                <span class="ux4g-label-m-default ux4g-sla-badge-label">3 days overdue</span>
                            </span>
                        </span>
                    </div>

                    <!-- Common & Desktop Specific Grid Items -->
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Submitted Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Assigned Officer</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Next Step</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                    </div>

                    <!-- Mobile Specific Department -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Department</span>
                        <span class="ux4g-text-primary ux4g-body-s-default">Revenue Department</span>
                    </div>

                    <!-- Documents -->
                    <div class="ux4g-result-list-detail-item ux4g-result-list-full-width">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Documents</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address
                            Proof</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

const PAYMENT_HTML = `
<section class="ux4g-mt-xl ux4g-pb-xl">
    <div class="ux4g-container">
        <h1 class="ux4g-heading-m-strong ux4g-mb-l">Result list row - Variation 5</h1>

        <div class="ux4g-result-list ux4g-result-list-v5 ux4g-mb-m">
            <!-- Header -->
            <div class="ux4g-result-list-header">
                <div class="ux4g-result-list-info">
                    <!-- Placeholder Icon -->
                    <div class="ux4g-result-list-icon">
                    </div>
                    <!-- Titles -->
                    <div class="ux4g-result-list-title-group">
                        <div class="ux4g-body-xs-default ux4g-result-list-id">TXN2026041200823</div>
                        <h2 class="ux4g-title-s-default ux4g-result-list-title">Income Certificate</h2>
                    </div>
                </div>

                <div class="ux4g-result-list-actions-container ux4g-d-flex ux4g-ai-center">
                    <div class="ux4g-result-list-metadata ux4g-md-d-flex ux4g-d-none">
                        <div class="ux4g-result-list-meta-row">
                            <span>₹400/-</span>
                            <span class="ux4g-tag-tonal-success">Paid</span>
                        </div>
                        <div class="ux4g-result-list-meta-date">12 Apr 2026</div>
                    </div>
                    <div class="ux4g-result-list-actions">
                        <button class="ux4g-btn-outline-neutral ux4g-btn-sm ux4g-btn">
                            <span class="ux4g-icon-outlined ux4g-fs-18">download</span>
                            Receipt
                        </button>
                        <span class="ux4g-icon-outlined ux4g-cursor-pointer ux4g-result-list-accordion-toggle"
                            aria-expanded="false">expand_more</span>
                    </div>
                </div>
            </div>

            <!-- Expanded Content -->
            <div class="ux4g-result-list-content accordion-content">
                <div class="ux4g-result-list-details">
                    <!-- Mobile Specific (Amount & Paid Date) -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Amount paid</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">₹400/-</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Paid on</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">12 Apr 2026</span>
                    </div>

                    <!-- Common & Desktop Specific Grid Items -->
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Submitted Date</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">1 Apr 2026</span>
                    </div>
                    <div class="ux4g-result-list-detail-item">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Assigned Officer</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Rahul Sharma</span>
                    </div>
                    <div class="ux4g-result-list-detail-item ux4g-d-none ux4g-md-d-flex">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Next Step</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">Verification</span>
                    </div>

                    <!-- Mobile Specific Department -->
                    <div class="ux4g-result-list-detail-item ux4g-md-d-none">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-s-default">Department</span>
                        <span class="ux4g-text-primary ux4g-body-s-default">Revenue Department</span>
                    </div>

                    <!-- Documents -->
                    <div class="ux4g-result-list-detail-item ux4g-result-list-full-width">
                        <span class="ux4g-text-neutral-tertiary ux4g-label-m-default">Documents</span>
                        <span class="ux4g-text-neutral-secondary ux4g-body-s-default">ID Proof, Address
                            Proof</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

// --- Stories Content ---

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-py-2xl">
            <div class="ux4g-container">
                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-3xl ux4g-opacity-80">
                    <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                        <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                        <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                    </div>
                </div>
                <div class="ux4g-max-w-800">
                    <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Result List</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Result Lists display structured information in a list format, optimized for various contexts like applications, documents, services, grievances, and payments. Each variant includes collapsible details and contextual actions.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-text-neutral-secondary ux4g-body-m-default ux4g-mb-xl">Visual demonstration of Result List variations.</p>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Application Variant (v1)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${APPLICATION_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Documents Variant (v2)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${DOCUMENTS_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Service Variant (v3)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${SERVICE_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Grievance Variant (v4)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${GRIEVANCE_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Payment Variant (v5)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${PAYMENT_HTML}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-text-neutral-secondary ux4g-body-m-default">Quickly copy layout and utility classes for Result Lists.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Structural Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structural Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-result-list', label: 'Main Container' },
                                                { class: 'ux4g-result-list-header', label: 'Header Area' },
                                                { class: 'ux4g-result-list-info', label: 'Information Area' },
                                                { class: 'ux4g-result-list-icon', label: 'Icon Placeholder' },
                                                { class: 'ux4g-result-list-title-group', label: 'Title Container' },
                                                { class: 'ux4g-result-list-title', label: 'Main Title' },
                                                { class: 'ux4g-result-list-content', label: 'Expandable Content Area' },
                                                { class: 'ux4g-result-list-details', label: 'Details Grid' },
                                                { class: 'ux4g-result-list-detail-item', label: 'Grid Item' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${r.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${r.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${r.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Variant & Element Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variant & Element Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-result-list-v1', label: 'Application Variant' },
                                                { class: 'ux4g-result-list-v2', label: 'Documents Variant' },
                                                { class: 'ux4g-result-list-v3', label: 'Service Variant' },
                                                { class: 'ux4g-result-list-v4', label: 'Grievance Variant' },
                                                { class: 'ux4g-result-list-v5', label: 'Payment Variant' },
                                                { class: 'ux4g-result-list-actions', label: 'Action Buttons Container' },
                                                { class: 'ux4g-result-list-accordion-toggle', label: 'Expand/Collapse Toggle' },
                                                { class: 'ux4g-result-list-detail-label', label: 'Detail Label Text' },
                                                { class: 'ux4g-result-list-detail-value', label: 'Detail Value Text' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${t.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${t.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${t.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
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
                if (!intro) return;

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

export const Application = {
    name: 'Application (v1)',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Application Variant', 'A result list tailored for application tracking.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('application-result-list', 'Application Result List', 'Used for showing status of user applications with reference numbers and track actions.', APPLICATION_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Application Result List', html: APPLICATION_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Documents = {
    name: 'Documents (v2)',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Documents Variant', 'A result list tailored for document management.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('documents-result-list', 'Documents Result List', 'Used for showing document details with download actions and validity information.', DOCUMENTS_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Documents Result List', html: DOCUMENTS_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Service = {
    name: 'Service (v3)',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Service Variant', 'A result list tailored for services.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('service-result-list', 'Service Result List', 'Used for showing service details including fees, processing time, and apply actions.', SERVICE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Service Result List', html: SERVICE_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Grievance = {
    name: 'Grievance (v4)',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Grievance Variant', 'A result list tailored for grievance tracking.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('grievance-result-list', 'Grievance Result List', 'Used for tracking complaints with escalation status and SLA tracking.', GRIEVANCE_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Grievance Result List', html: GRIEVANCE_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Payment = {
    name: 'Payment (v5)',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Payment Variant', 'A result list tailored for payment transactions.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('payment-result-list', 'Payment Result List', 'Used for showing transaction records, payment statuses, and receipt downloads.', PAYMENT_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([{ label: 'Payment Result List', html: PAYMENT_HTML.trim() }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
