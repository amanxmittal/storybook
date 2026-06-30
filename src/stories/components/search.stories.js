/**
 * Search Component Stories
 * 
 * Showcasing Search variants: Sizing (Small, Medium, Large) and 
 * Filtering Modes (Contains, Starts-with, Starts-with-term).
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Search',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Search allows users to find specific content or items within a system using keywords, filters and autocomplete suggestions.',
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

const getReactCode = (html) => htmlToJsx(html, 'Search');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, displayClass = "ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l", customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="${displayClass} ux4g-w-100">
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Search</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Search allows users to find specific content or items within a system using keywords, filters and autocomplete suggestions.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of search sizing and filtering modes.</p>
                    
                    <!-- Small Sizing Showcase -->
                    <div class="ux4g-mb-2xl">
                         <h3 class="ux4g-body-l-strong ux4g-mb-s">Search Small</h3>
                         <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs">
                                    <div class="ux4g-search-container ux4g-search-s">
                                        <label class="ux4g-label-m-default">Label (Search With List)</label>
                                        <div class="ux4g-search">
                                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                                            <div class="ux4g-search-actions">
                                                <i class="ux4g-spinner-primary-partial ux4g-spinner-xs"></i>
                                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                            </div>
                                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                                        </div>
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-s ux4g-search-list">
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Account</span></button></li>
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Settings</span></button></li>
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Profile</span></button></li>
                                        </ul>
                                    </div>
                                    <div class="ux4g-search-container ux4g-search-s">
                                        <label class="ux4g-label-m-default">Label (Search Input Only)</label>
                                        <div class="ux4g-search">
                                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                                            <div class="ux4g-search-actions">
                                                <i class="ux4g-spinner-primary-partial ux4g-spinner-xs"></i>
                                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                            </div>
                                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Medium Sizing Showcase -->
                    <div class="ux4g-mb-2xl">
                         <h3 class="ux4g-body-l-strong ux4g-mb-s">Search Medium (Default)</h3>
                         <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs">
                                    <div class="ux4g-search-container">
                                        <label class="ux4g-label-m-default">Label</label>
                                        <div class="ux4g-search">
                                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                                            <div class="ux4g-search-actions">
                                                <i class="ux4g-spinner-primary-partial ux4g-spinner-sm"></i>
                                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                            </div>
                                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                                        </div>
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Dashboard</span></button></li>
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Reports</span></button></li>
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Analytics</span></button></li>
                                        </ul>
                                    </div>
                                    <div class="ux4g-search-container">
                                        <label class="ux4g-label-m-default">Label</label>
                                        <div class="ux4g-search">
                                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                                            <div class="ux4g-search-actions">
                                                <i class="ux4g-spinner-primary-partial ux4g-spinner-sm"></i>
                                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                            </div>
                                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Large Sizing Showcase -->
                    <div class="ux4g-mb-2xl">
                         <h3 class="ux4g-body-l-strong ux4g-mb-s">Search Large</h3>
                         <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs">
                                    <div class="ux4g-search-container ux4g-search-lg">
                                        <label class="ux4g-label-l-default">Label</label>
                                        <div class="ux4g-search">
                                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                                            <div class="ux4g-search-actions">
                                                <i class="ux4g-spinner-primary-partial"></i>
                                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                            </div>
                                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                                        </div>
                                        <ul class="ux4g-list ux4g-list-default ux4g-list-l ux4g-search-list">
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Enterprise Solution</span></button></li>
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Global Infrastructure</span></button></li>
                                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Security Protocol</span></button></li>
                                        </ul>
                                    </div>
                                    <div class="ux4g-search-container ux4g-search-lg">
                                        <label class="ux4g-label-m-default" for="searchLg2-intro">Search Large Only</label>
                                        <div class="ux4g-search">
                                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                            <input class="ux4g-search-input" id="searchLg2-intro" placeholder="Search for..." type="text" />
                                            <div class="ux4g-search-actions">
                                                <i class="ux4g-spinner-primary-partial"></i>
                                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                            </div>
                                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Modes Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Ux4g Search Modes</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-row ux4g-gutter-m">
                                    <div class="ux4g-col-md-4">
                                        <p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Contain</p>
                                        <div class="ux4g-search-container" ux4g-search-filter="contains">
                                            <div class="ux4g-search">
                                                <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                                <input class="ux4g-search-input" id="ux4g-searchContain-intro" placeholder="Search for fruits..." type="text" />
                                                <div class="ux4g-search-actions">
                                                    <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                    <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                                </div>
                                                <button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button>
                                            </div>
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                                                <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></button></li>
                                                <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Pineapple</span></button></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="ux4g-col-md-4">
                                        <p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Starts With</p>
                                        <div class="ux4g-search-container" ux4g-search-filter="starts-with">
                                            <div class="ux4g-search">
                                                <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                                <input class="ux4g-search-input" id="ux4g-searchStartsWith-intro" placeholder="Search for fruits..." type="text" />
                                                <div class="ux4g-search-actions">
                                                    <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                    <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                                </div>
                                                <button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button>
                                            </div>
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                                                <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></button></li>
                                                <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apricot</span></button></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div class="ux4g-col-md-4">
                                        <p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Starts With Term</p>
                                        <div class="ux4g-search-container" ux4g-search-filter="starts-with-term">
                                            <div class="ux4g-search">
                                                <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                                                <input class="ux4g-search-input" id="ux4g-searchStartsWithTerm-intro" placeholder="Search for fruits..." type="text" />
                                                <div class="ux4g-search-actions">
                                                    <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                                    <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                                                </div>
                                                <button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button>
                                            </div>
                                            <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                                                <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Green Apple</span></button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Search.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Sizing Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Sizing Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-search-lg', label: 'Large Size' },
                                                { class: 'ux4g-search-s', label: 'Small Size' },
                                                { class: 'ux4g-spinner-sm', label: 'Medium Spinner' },
                                                { class: 'ux4g-spinner-xs', label: 'Small Spinner' }
                                            ].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
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

                        <!-- Filter Modes Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Filter Mode Attributes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-search-filter="contains"', label: 'Contains (Default)' },
                                                { class: 'ux4g-search-filter="starts-with"', label: 'Starts With' },
                                                { class: 'ux4g-search-filter="starts-with-term"', label: 'Starts With Term' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
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

export const Sizing = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Search Sizing', 'Different sizes of search component to fit various layout contexts.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('size-small', 'Small Size', 'Compact search variant for tight spaces.', `
                    <div class="ux4g-search-container ux4g-search-s">
                        <label class="ux4g-label-m-default">Label (Search With List)</label>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                            <div class="ux4g-search-actions">
                                <i class="ux4g-spinner-primary-partial ux4g-spinner-xs"></i>
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-s ux4g-search-list">
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Account</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Settings</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Profile</span></button></li>
                        </ul>
                    </div>
                    <div class="ux4g-search-container ux4g-search-s">
                        <label class="ux4g-label-m-default">Label (Search Input Only)</label>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                            <div class="ux4g-search-actions">
                                <i class="ux4g-spinner-primary-partial ux4g-spinner-xs"></i>
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                    </div>
                `, false, "ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l", getSnippetCode([
                    { label: 'Search Small - With List', html: '<div class="ux4g-search-container ux4g-search-s"><label class="ux4g-label-m-default">Label (Search With List)</label><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" placeholder="Search for..." type="text" /><div class="ux4g-search-actions"><i class="ux4g-spinner-primary-partial ux4g-spinner-xs"></i><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button></div><ul class="ux4g-list ux4g-list-default ux4g-list-s ux4g-search-list"><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Account</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Settings</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Profile</span></button></li></ul></div>' },
                    { label: 'Search Small - Input Only', html: '<div class="ux4g-search-container ux4g-search-s"><label class="ux4g-label-m-default">Label (Search Input Only)</label><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" placeholder="Search for..." type="text" /><div class="ux4g-search-actions"><i class="ux4g-spinner-primary-partial ux4g-spinner-xs"></i><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button></div></div>' },
                ]))}

                ${renderDemoCodeBlock('size-medium', 'Medium Size (Default)', 'Standard search variant.', `
                    <div class="ux4g-search-container">
                        <label class="ux4g-label-m-default">Label (Search With List)</label>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                            <div class="ux4g-search-actions">
                                <i class="ux4g-spinner-primary-partial ux4g-spinner-sm"></i>
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Dashboard</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Reports</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Analytics</span></button></li>
                        </ul>
                    </div>
                    <div class="ux4g-search-container">
                        <label class="ux4g-label-m-default">Label (Search Input Only)</label>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                            <div class="ux4g-search-actions">
                                <i class="ux4g-spinner-primary-partial ux4g-spinner-sm"></i>
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                    </div>
                `, false, "ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l", getSnippetCode([
                    { label: 'Search Medium - With List', html: '<div class="ux4g-search-container"><label class="ux4g-label-m-default">Label (Search With List)</label><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" placeholder="Search for..." type="text" /><div class="ux4g-search-actions"><i class="ux4g-spinner-primary-partial ux4g-spinner-sm"></i><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button></div><ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list"><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Dashboard</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Reports</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Analytics</span></button></li></ul></div>' },
                    { label: 'Search Medium - Input Only', html: '<div class="ux4g-search-container"><label class="ux4g-label-m-default">Label (Search Input Only)</label><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" placeholder="Search for..." type="text" /><div class="ux4g-search-actions"><i class="ux4g-spinner-primary-partial ux4g-spinner-sm"></i><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button></div></div>' },
                ]))}

                ${renderDemoCodeBlock('size-large', 'Large Size', 'Highly visible search variant for hero sections.', `
                    <div class="ux4g-search-container ux4g-search-lg">
                        <label class="ux4g-label-l-default">Label (Search With List)</label>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" placeholder="Search for..." type="text" />
                            <div class="ux4g-search-actions">
                                <i class="ux4g-spinner-primary-partial"></i>
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-l ux4g-search-list">
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Enterprise Solution</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Global Infrastructure</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Security Protocol</span></button></li>
                        </ul>
                    </div>
                    <div class="ux4g-search-container ux4g-search-lg">
                        <label class="ux4g-label-m-default" for="searchLg2">Search Large Only</label>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" id="searchLg2" placeholder="Search for..." type="text" />
                            <div class="ux4g-search-actions">
                                <i class="ux4g-spinner-primary-partial"></i>
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                    </div>
                `, false, "ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l", getSnippetCode([
                    { label: 'Search Large - With List', html: '<div class="ux4g-search-container ux4g-search-lg"><label class="ux4g-label-l-default">Label (Search With List)</label><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" placeholder="Search for..." type="text" /><div class="ux4g-search-actions"><i class="ux4g-spinner-primary-partial"></i><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button></div><ul class="ux4g-list ux4g-list-default ux4g-list-l ux4g-search-list"><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Enterprise Solution</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Global Infrastructure</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Security Protocol</span></button></li></ul></div>' },
                    { label: 'Search Large - Input Only', html: '<div class="ux4g-search-container ux4g-search-lg"><label class="ux4g-label-m-default" for="searchLg2">Search Large Only</label><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" id="searchLg2" placeholder="Search for..." type="text" /><div class="ux4g-search-actions"><i class="ux4g-spinner-primary-partial"></i><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="submit"><span class="ux4g-icon-outlined">search</span></button></div></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const FilterModes = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Filter Modes', 'Different logic for filtering the suggestion list.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('mode-contains', 'Contains (Default)', 'Filters suggestions that contain the search term anywhere.', `
                    <div class="ux4g-search-container" ux4g-search-filter="contains">
                        <p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Contain</p>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" id="ux4g-searchContain" placeholder="Search for fruits..." type="text" />
                            <div class="ux4g-search-actions">
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Pineapple</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Banana</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Grapefruit</span></button></li>
                        </ul>
                    </div>
                `, false, "ux4g-row ux4g-gutter-m", getSnippetCode([
                    { label: 'Search Filter Mode - Contains', html: '<div class="ux4g-search-container" ux4g-search-filter="contains"><p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Contain</p><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" id="ux4g-searchContain" placeholder="Search for fruits..." type="text" /><div class="ux4g-search-actions"><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button></div><ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list"><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Pineapple</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Banana</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Grapefruit</span></button></li></ul></div>' },
                ]))}

                ${renderDemoCodeBlock('mode-starts-with', 'Starts With', 'Filters suggestions that start with the search term.', `
                    <div class="ux4g-search-container" ux4g-search-filter="starts-with">
                        <p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Starts With</p>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" id="ux4g-searchStartsWith" placeholder="Search for fruits..." type="text" />
                            <div class="ux4g-search-actions">
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apricot</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Avocado</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Banana</span></button></li>
                        </ul>
                    </div>
                `, false, "ux4g-row ux4g-gutter-m", getSnippetCode([
                    { label: 'Search Filter Mode - Starts With', html: '<div class="ux4g-search-container" ux4g-search-filter="starts-with"><p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Starts With</p><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" id="ux4g-searchStartsWith" placeholder="Search for fruits..." type="text" /><div class="ux4g-search-actions"><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button></div><ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list"><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apple</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Apricot</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Avocado</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Banana</span></button></li></ul></div>' },
                ]))}

                ${renderDemoCodeBlock('mode-starts-with-term', 'Starts With Term', 'Filters suggestions where a term within the string starts with the search term.', `
                    <div class="ux4g-search-container" ux4g-search-filter="starts-with-term">
                        <p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Starts With Term</p>
                        <div class="ux4g-search">
                            <span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span>
                            <input class="ux4g-search-input" id="ux4g-searchStartsWithTerm" placeholder="Search for fruits..." type="text" />
                            <div class="ux4g-search-actions">
                                <button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button>
                                <button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button>
                            </div>
                            <button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button>
                        </div>
                        <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list">
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Green Apple</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Golden Delicious</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Red Delicious</span></button></li>
                            <li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Honeycrisp Apple</span></button></li>
                        </ul>
                    </div>
                `, false, "ux4g-row ux4g-gutter-m", getSnippetCode([
                    { label: 'Search Filter Mode - Starts With Term', html: '<div class="ux4g-search-container" ux4g-search-filter="starts-with-term"><p class="ux4g-label-m-default ux4g-mb-xs">Search Mode Starts With Term</p><div class="ux4g-search"><span class="ux4g-icon-outlined ux4g-search-leading-icon">search</span><input class="ux4g-search-input" id="ux4g-searchStartsWithTerm" placeholder="Search for fruits..." type="text" /><div class="ux4g-search-actions"><button aria-label="Voice search" class="ux4g-search-action-btn" type="button"><span class="ux4g-icon-outlined">mic</span></button><button aria-label="Clear search" class="ux4g-search-action-btn ux4g-search-clear" type="button"><span class="ux4g-icon-outlined">close</span></button></div><button class="ux4g-search-btn" type="button"><span class="ux4g-icon-outlined">search</span></button></div><ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-search-list"><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Green Apple</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Golden Delicious</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Red Delicious</span></button></li><li class="ux4g-list-item"><button class="ux4g-list-item-row"><span class="ux4g-list-item-start">Honeycrisp Apple</span></button></li></ul></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
