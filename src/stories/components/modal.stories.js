/**
 * Modal Component Stories
 * 
 * Showcasing different sizes, positions, types, and styles of modals.
 * Version: 1.9.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Modal',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.',
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
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-3xl ux4g-opacity-80">
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

const getReactCode = (html) => htmlToJsx(html, 'Modal');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null, gridClass = 'ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l') => {
    const displayCode = formatCode(customCode || htmlContent);

    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l ux4g-o-hidden">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-w-100 ${gridClass}">
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

                    if(toggleBtn) {
                        toggleBtn.onclick = () => {
                            const isHidden = codeArea.style.display === 'none';
                            codeArea.style.display = isHidden ? 'block' : 'none';
                            toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                            if (isHidden) highlight();
                        };
                    }
                    
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
                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-3xl ux4g-opacity-80">
                    <span class="ux4g-label-s-medium">UX4G Design System 3.0</span>
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                        <span class="ux4g-icon-outlined ux4g-fs-16">public</span>
                        <span class="ux4g-label-s-medium">ux4g.gov.in</span>
                    </div>
                </div>
                <div class="ux4g-max-w-800">
                    <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Components</span>
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Modal</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Modals are focused surfaces that appear in front of app content to provide critical information or ask for a decision. Supported variants include sizes (S, M, L), positions, and media integration.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    
                    <!-- 1. Modal (Regular & Image) -->
                    <div class="ux4g-mb-3xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">1. Modal (Regular & Image)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l ux4g-w-100 ux4g-ai-start">
                                    <div class="ux4g-modal ux4g-relative ux4g-h-auto ux4g-jc-start">
                                        <div class="ux4g-modal-box ux4g-modal-s">
                                            <header class="ux4g-modal-header">
                                                <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
                                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                                    <div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">Header</h2><h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3></div>
                                                </div>
                                                <button class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                                            </header>
                                            <div class="ux4g-modal-body"><h5 class="ux4g-modal-body-title">Subtitle</h5><p>A modal demands the user’s attention by temporarily disabling interaction with the rest of the page.</p></div>
                                            <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-outline-primary">Close</button><button class="ux4g-btn ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                                        </div>
                                    </div>
                                    <div class="ux4g-modal ux4g-relative ux4g-h-auto ux4g-jc-start">
                                        <div class="ux4g-modal-box ux4g-modal-s ux4g-o-hidden">
                                            <div class="ux4g-modal-image ux4g-relative">
                                                <button class="ux4g-modal-close-two ux4g-icon-btn ux4g-icon-btn-pill ux4g-icon-btn-tonal-primary ux4g-icon-btn-xs"><i class="ux4g-icon-outlined">close</i></button>
                                                <img src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g-card.svg" alt="" class="ux4g-modal-header-image">
                                            </div>
                                            <header class="ux4g-modal-header">
                                                <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s"><i class="ux4g-icon-outlined ux4g-fs-20">token</i><div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">Image Header</h2></div></div>
                                            </header>
                                            <div class="ux4g-modal-body"><p>A visually engaging modal variant with hero imagery.</p></div>
                                            <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-primary ux4g-btn-sm">Save</button></footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 2. Modal (Danger) -->
                    <div class="ux4g-my-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">2. Modal (Danger)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l ux4g-w-100 ux4g-ai-start">
                                    <div class="ux4g-modal ux4g-relative ux4g-h-auto ux4g-jc-start">
                                        <div class="ux4g-modal-box ux4g-modal-s ux4g-border-error ux4g-border">
                                            <header class="ux4g-modal-header">
                                                <div class=" ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                                                    <i class="ux4g-icon-outlined ux4g-fs-20 ux4g-icon-error">token</i>
                                                    <div class="ux4g-d-block">
                                                        <h2 class="ux4g-modal-header-title">Header</h2>
                                                        <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                                                    </div>
                                                </div>
                                                <button aria-label="Close" class="ux4g-modal-close">
                                                    <span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span>
                                                </button>
                                            </header>
                                            <div class="ux4g-modal-body">
                                                <h5 class="ux4g-modal-body-title">Subtitle</h5>
                                                <p>A modal is a design element that pops up over the main content of a webpage.</p>
                                            </div>
                                            <footer class="ux4g-modal-actions">
                                                <button class="ux4g-btn-outline-primary">Close</button>
                                                <button class="ux4g-btn-danger">Save</button>
                                            </footer>
                                        </div>
                                    </div>
                                    <div class="ux4g-modal ux4g-relative ux4g-h-auto ux4g-jc-start">
                                        <div class="ux4g-modal-box ux4g-modal-s ux4g-o-hidden ux4g-border-error ux4g-border">
                                            <div class="ux4g-modal-image ux4g-relative">
                                                <button aria-label="Close" class="ux4g-modal-close-two ux4g-icon-btn ux4g-icon-btn-pill ux4g-icon-btn-tonal-primary ux4g-icon-btn-xs"><i class="ux4g-icon-outlined">close</i></button>
                                                <img alt="" class="ux4g-modal-header-image" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g-card.svg">
                                            </div>
                                            <header class="ux4g-modal-header">
                                                <div class=" ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                                                    <i class="ux4g-icon-outlined ux4g-fs-20 ux4g-icon-error">token</i>
                                                    <div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">Header</h2><h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3></div>
                                                </div>
                                            </header>
                                            <div class="ux4g-modal-body"><h5 class="ux4g-modal-body-title">Subtitle</h5><p>A danger modal variant with hero imagery.</p></div>
                                            <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-danger">Save</button></footer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 3. Modal (Center) -->
                    <div class="ux4g-my-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">3. Modal (Center)</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-l ux4g-w-100 ux4g-ai-start">
                                    <div class="ux4g-modal ux4g-relative ux4g-h-auto ux4g-jc-start">
                                        <div class="ux4g-modal-box ux4g-modal-s ux4g-modal-center-content">
                                            <header class="ux4g-modal-header">
                                                <div class=" ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                                    <div class="ux4g-d-block">
                                                        <h2 class="ux4g-modal-header-title">Header</h2>
                                                        <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                                                    </div>
                                                </div>
                                                <button aria-label="Close" class="ux4g-modal-close">
                                                    <span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span>
                                                </button>
                                            </header>
                                            <div class="ux4g-modal-body">
                                                <h5 class="ux4g-modal-body-title">Subtitle</h5>
                                                <p>The content within this modal is horizontally centered for maximum focus.</p>
                                            </div>
                                            <footer class="ux4g-modal-actions">
                                                <button class="ux4g-btn-outline-primary">Close</button>
                                                <button class="ux4g-btn-primary ux4g-btn-md">Save</button>
                                            </footer>
                                        </div>
                                    </div>
                                    <div class="ux4g-modal ux4g-relative ux4g-h-auto ux4g-jc-start">
                                        <div class="ux4g-modal-box ux4g-modal-s ux4g-o-hidden ux4g-modal-center-content">
                                            <div class="ux4g-modal-image ux4g-relative">
                                                <button aria-label="Close" class="ux4g-modal-close-two ux4g-icon-btn ux4g-icon-btn-pill ux4g-icon-btn-tonal-primary ux4g-icon-btn-xs"><i class="ux4g-icon-outlined">close</i></button>
                                                <img alt="" class="ux4g-modal-header-image" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g-card.svg">
                                            </div>
                                            <header class="ux4g-modal-header">
                                                <div class=" ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                                    <div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">Header</h2><h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3></div>
                                                </div>
                                            </header>
                                            <div class="ux4g-modal-body"><h5 class="ux4g-modal-body-title">Subtitle</h5><p>Centered content variant with hero imagery.</p></div>
                                            <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
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
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy modal size, layout, and backdrop utilities.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-xl">
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Size Utilities</h4>
                                </div>
                                <div class="ux4g-p-none">
                                    <div class="ux4g-table-container">
                                        <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                            <tbody>
                                                ${['ux4g-modal-s', 'ux4g-modal-m', 'ux4g-modal-l'].map(c => `
                                                <tr><td class="ux4g-p-l"><div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center"><code class="ux4g-text-primary">${c}</code><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${c}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button></div></td></tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                    <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Position & Type Utilities</h4>
                                </div>
                                 <div class="ux4g-p-none">
                                    <div class="ux4g-table-container">
                                        <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                            <tbody>
                                                ${[
                                                    { c: 'ux4g-modal-center-content', l: 'Centered content' },
                                                    { c: 'ux4g-border-error', l: 'Danger border' },
                                                    { c: 'ux4g-btn-danger', l: 'Danger action' }
                                                ].map(t => `
                                                <tr><td class="ux4g-p-l"><div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center"><div class="ux4g-d-flex ux4g-flex-col"><span class="ux4g-label-s-strong">${t.l}</span><code class="ux4g-text-primary">${t.c}</code></div><button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${t.c}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button></div></td></tr>
                                                `).join('')}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Backdrop Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { c: 'ux4g-modal-backdrop-25', l: '25% Opacity Background' },
                                                { c: 'ux4g-modal-backdrop-50', l: '50% Opacity Background' },
                                                { c: 'ux4g-modal-backdrop-75', l: '75% Opacity Background' },
                                                { c: 'ux4g-modal-backdrop-blur', l: '8px Backdrop Blur' }
                                            ].map(b => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${b.l}</span>
                                                            <code class="ux4g-text-primary">${b.c}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${b.c}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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
    parameters: { docs: { disable: true } },
};

// --- Stories: Categorized ---

export const StandardModals = {
    render: () => {
        const smallSection = `
            <div aria-labelledby="modalTwoLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalTwo-s" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-s">
                    <header class="ux4g-modal-header">
                        <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                </div>
            </div>
        `;

        const dangerSection = `
            <div aria-labelledby="modalThreeLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalThree-s" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-s ux4g-border-error ux4g-border">
                    <header class="ux4g-modal-header">
                        <div class=" ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20 ux4g-icon-error">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-danger">Save</button></footer>
                </div>
            </div>
        `;

        const mediumSection = `
             <div aria-labelledby="modalTwoLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalTwo-m" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-m">
                    <header class="ux4g-modal-header">
                        <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                </div>
            </div>
        `;

        const largeSection = `
             <div aria-labelledby="modalTwoLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalTwo-l" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-l">
                    <header class="ux4g-modal-header">
                        <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                </div>
            </div>
        `;

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Standard Modals', 'Formal visual collection of small, medium, and large modal surfaces.')}
                <div class="ux4g-p-m">
                    ${renderDemoCodeBlock('m-small', 'Modal Small', '360px wide surface.', smallSection, false, getSnippetCode([
                        { label: 'Modal Small', html: smallSection.trim() },
                    ]), 'ux4g-d-grid ux4g-grid-cols-1')}
                    ${renderDemoCodeBlock('m-danger', 'Modal Small Danger', 'Critical action variants with error treatments.', dangerSection, false, getSnippetCode([
                        { label: 'Modal Small Danger Variants', html: dangerSection.trim() },
                    ]))}
                    ${renderDemoCodeBlock('m-medium', 'Modal Medium', '500px wide surface.', mediumSection, false, getSnippetCode([
                        { label: 'Modal Medium', html: mediumSection.trim() },
                    ]), 'ux4g-d-grid ux4g-grid-cols-1')}
                    ${renderDemoCodeBlock('m-large', 'Modal Large', '800px wide surface.', largeSection, false, getSnippetCode([
                        { label: 'Modal Large', html: largeSection.trim() },
                    ]), 'ux4g-d-grid ux4g-grid-cols-1')}
                </div>
            </div>
        `;
    },
    parameters: { docs: { disable: true } },
};

export const ModalCenter = {
    render: () => {
        const smallHTML = `
            <div aria-labelledby="modalFourLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalFour-s" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-s ux4g-modal-center-content">
                    <header class="ux4g-modal-header">
                        <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                </div>
            </div>
        `;

        const mediumHTML = `
            <div aria-labelledby="modalFourLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalFour-m" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-m ux4g-modal-center-content">
                    <header class="ux4g-modal-header">
                        <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                </div>
            </div>
        `;

        const largeHTML = `
            <div aria-labelledby="modalFiveLabel" class="ux4g-modal ux4g-relative ux4g-h-auto" id="modalFive-l" role="dialog">
                <div class="ux4g-modal-box ux4g-modal-l ux4g-modal-center-content">
                    <header class="ux4g-modal-header">
                        <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s ">
                            <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            <div class="ux4g-d-block">
                                <h2 class="ux4g-modal-header-title">Header</h2>
                                <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                            </div>
                        </div>
                        <button aria-label="Close" class="ux4g-modal-close"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                    </header>
                    <div class="ux4g-modal-body">
                        <h5 class="ux4g-modal-body-title">Subtitle</h5>
                        <p>A modal is a design element that pops up over the main content of a webpage. It demands the user’s attention by temporarily disabling interaction with the rest of the page until the user addresses the content within the modal.</p>
                    </div>
                    <footer class="ux4g-modal-actions"><button class="ux4g-btn-outline-primary">Close</button><button class="ux4g-btn-primary ux4g-btn-md">Save</button></footer>
                </div>
            </div>
        `;

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Modal Center', 'Specific reference for modals with centered text and content.')}
                <div class="ux4g-p-m">
                    <h3 class="ux4g-body-l-strong ux4g-mb-s">Modal Center Position</h3>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Center content alignment for Small, Medium, and Large surfaces.</p>
                    
                    ${renderDemoCodeBlock('c-small', 'Modal Small Center', 'Compact centered layout.', smallHTML, false, getSnippetCode([
                        { label: 'Modal Small Center', html: smallHTML.trim() },
                    ]), 'ux4g-d-grid ux4g-grid-cols-1')}
                    ${renderDemoCodeBlock('c-medium', 'Modal Medium Center', 'Balanced centered layout.', mediumHTML, false, getSnippetCode([
                        { label: 'Modal Medium Center', html: mediumHTML.trim() },
                    ]), 'ux4g-d-grid ux4g-grid-cols-1')}
                    ${renderDemoCodeBlock('c-large', 'Modal Large Center', 'Wide centered layout.', largeHTML, false, getSnippetCode([
                        { label: 'Modal Large Center', html: largeHTML.trim() },
                    ]), 'ux4g-d-grid ux4g-grid-cols-1')}
                </div>
            </div>
        `;
    },
    parameters: { docs: { disable: true } },
};



export const ModalBackdrops = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Modal Backdrops', 'Four distinct system overlays including opacity and blur effects.')}
            <div class="ux4g-p-m" id="backdrop-demo-container">
                
                <!-- Demo 1: 25% Opacity -->
                ${renderDemoCodeBlock('b-25', '25% Opacity Backdrop', 'The system default overlay.', `
                    <button class="ux4g-btn-primary ux4g-btn-md open-modal-btn" data-target="m-25">Open Primary Modal</button>
                    <div class="ux4g-modal-backdrop ux4g-modal-backdrop-25" id="m-25">
                        <div class="ux4g-modal" role="dialog">
                            <div class="ux4g-modal-box ux4g-modal-s">
                               <header class="ux4g-modal-header">
                                    <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s" id="exampleModalLiveLabel">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <div class="ux4g-d-block">
                                            <h2 class="ux4g-modal-header-title">25% Backdrop</h2>
                                            <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                                        </div>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-inline-gap-xs ux4g-ai-center">
                                        <span class="ux4g-modal-sub-heading">Action</span>
                                        <button class="ux4g-modal-close close-modal-btn"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                                    </div>
                                </header>
                                <div class="ux4g-modal-body"><p>Standard system overlay with 25% opacity.</p></div>
                                <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-outline-primary close-modal-btn">Close</button><button class="ux4g-btn ux4g-btn-primary ux4g-btn-md close-modal-btn">Save</button></footer>
                            </div>
                        </div>
                    </div>
                `, false, getSnippetCode([
                    { label: 'Modal Trigger - 25% Opacity Backdrop', html: '<button class="ux4g-btn-primary ux4g-btn-md open-modal-btn" data-target="m-25">Open Primary Modal</button>' },
                    { label: 'Modal Backdrop - 25% Opacity', html: `<div class="ux4g-modal-backdrop ux4g-modal-backdrop-25" id="m-25">
                        <div class="ux4g-modal" role="dialog">
                            <div class="ux4g-modal-box ux4g-modal-s">
                               <header class="ux4g-modal-header">
                                    <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s" id="exampleModalLiveLabel">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <div class="ux4g-d-block">
                                            <h2 class="ux4g-modal-header-title">25% Backdrop</h2>
                                            <h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3>
                                        </div>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-inline-gap-xs ux4g-ai-center">
                                        <span class="ux4g-modal-sub-heading">Action</span>
                                        <button class="ux4g-modal-close close-modal-btn"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button>
                                    </div>
                                </header>
                                <div class="ux4g-modal-body"><p>Standard system overlay with 25% opacity.</p></div>
                                <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-outline-primary close-modal-btn">Close</button><button class="ux4g-btn ux4g-btn-primary ux4g-btn-md close-modal-btn">Save</button></footer>
                            </div>
                        </div>
                    </div>` },
                ]), 'ux4g-d-grid ux4g-grid-cols-1')}

                <!-- Demo 2: 50% Opacity -->
                ${renderDemoCodeBlock('b-50', '50% Opacity Backdrop', 'Medium contrast overlay.', `
                    <button class="ux4g-btn-primary ux4g-btn-md open-modal-btn" data-target="m-50">Open 50% Overlay</button>
                    <div class="ux4g-modal-backdrop ux4g-modal-backdrop-50" id="m-50">
                        <div class="ux4g-modal" role="dialog">
                            <div class="ux4g-modal-box ux4g-modal-s">
                                <header class="ux4g-modal-header">
                                    <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s" id="exampleModalLiveLabel">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">50% Backdrop</h2><h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3></div>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-inline-gap-xs ux4g-ai-center"><span class="ux4g-modal-sub-heading">Action</span><button class="ux4g-modal-close close-modal-btn"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button></div>
                                </header>
                                <div class="ux4g-modal-body"><p>Increased contrast for higher focus.</p></div>
                                <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-outline-primary close-modal-btn">Close</button><button class="ux4g-btn ux4g-btn-primary ux4g-btn-md close-modal-btn">Save</button></footer>
                            </div>
                        </div>
                    </div>
                `, false, null, 'ux4g-d-grid ux4g-grid-cols-1')}

                <!-- Demo 3: 75% Opacity -->
                ${renderDemoCodeBlock('b-75', '75% Opacity Backdrop', 'High contrast dark overlay.', `
                    <button class="ux4g-btn-primary ux4g-btn-md open-modal-btn" data-target="m-75">Open Darkness</button>
                    <div class="ux4g-modal-backdrop ux4g-modal-backdrop-75" id="m-75">
                        <div class="ux4g-modal" role="dialog">
                            <div class="ux4g-modal-box ux4g-modal-s">
                                <header class="ux4g-modal-header">
                                    <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s" id="exampleModalLiveLabel">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">75% Backdrop</h2><h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3></div>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-inline-gap-xs ux4g-ai-center"><span class="ux4g-modal-sub-heading">Action</span><button class="ux4g-modal-close close-modal-btn"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button></div>
                                </header>
                                <div class="ux4g-modal-body"><p>Strongest focus level with near-black backdrop.</p></div>
                                <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-outline-primary close-modal-btn">Close</button><button class="ux4g-btn ux4g-btn-primary ux4g-btn-md close-modal-btn">Save</button></footer>
                            </div>
                        </div>
                    </div>
                `, false, null, 'ux4g-d-grid ux4g-grid-cols-1')}

                <!-- Demo 4: Blur Backdrop -->
                ${renderDemoCodeBlock('b-blur', 'Blur Backdrop', 'Premium glassmorphism effect using backdrop-filter.', `
                    <button class="ux4g-btn-primary ux4g-btn-md open-modal-btn" data-target="m-blur">Open Blur Modal</button>
                    <div class="ux4g-modal-backdrop ux4g-modal-backdrop-25 ux4g-modal-backdrop-blur" id="m-blur">
                        <div class="ux4g-modal" role="dialog">
                            <div class="ux4g-modal-box ux4g-modal-s">
                               <header class="ux4g-modal-header">
                                    <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s" id="exampleModalLiveLabel">
                                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                        <div class="ux4g-d-block"><h2 class="ux4g-modal-header-title">Blur Header</h2><h3 class="ux4g-modal-header-sub-heading ux4g-d-block ux4g-mt-2xs">Write description here</h3></div>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-inline-gap-xs ux4g-ai-center"><span class="ux4g-modal-sub-heading">Action</span><button class="ux4g-modal-close close-modal-btn"><span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span></button></div>
                                </header>
                                <div class="ux4g-modal-body"><p>Gaussian blur effect applied to the content underneath.</p></div>
                                <footer class="ux4g-modal-actions"><button class="ux4g-btn ux4g-btn-outline-primary close-modal-btn">Close</button><button class="ux4g-btn ux4g-btn-primary ux4g-btn-md close-modal-btn">Save</button></footer>
                            </div>
                        </div>
                    </div>
                `, false, null, 'ux4g-d-grid ux4g-grid-cols-1')}

                <script>
                    (function() {
                        const container = document.getElementById('backdrop-demo-container');
                        if (!container) return;
                        
                        const openBtns = container.querySelectorAll('.open-modal-btn');
                        const closeBtns = container.querySelectorAll('.close-modal-btn');
                        
                        openBtns.forEach(btn => {
                            btn.onclick = () => {
                                const targetId = btn.dataset.target;
                                const modal = document.getElementById(targetId);
                                if (modal) modal.classList.add('is-open');
                            };
                        });
                        
                        closeBtns.forEach(btn => {
                            btn.onclick = () => {
                                const modals = container.querySelectorAll('.ux4g-modal-backdrop');
                                modals.forEach(m => m.classList.remove('is-open'));
                            };
                        });
                    })();
                </script>
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
