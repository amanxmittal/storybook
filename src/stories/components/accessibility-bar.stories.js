/**
 * Accessibility Bar (Top Bar) Component Stories
 * 
 * Clean, production-ready variants with framework switching.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
  title: 'UX4G/Components/Accessibility Bar',
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'The Accessibility Bar (Top Bar) provides essential accessibility utilities and identity indicators for public digital services.',
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

// --- Hero Header Helper ---
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
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                    ${description}
                </p>
            </div>
        </div>
    </section>
`;

// --- Helper for generating Code Snippets ---
const getReactCode = (html) => htmlToJsx(html, 'AccessibilityBar');
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

const INTRODUCTION_CONTENT = `
    <div class="">
        ${getHeroHeader('Accessibility Bar', 'The Accessibility Bar is a utility-first header used at the top of public service pages to improve reach, readability, and multilingual access before users interact with the rest of the interface.')}
        
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
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Keeps trust and identity visible with the Government of India link.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Surfaces skip navigation and text resizing actions ahead of the main header.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports accessibility shortcuts and language switching in a predictable location.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Collapses secondary utilities on smaller widths while preserving the essential first touchpoints.</li>
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
                                    <div class="ux4g-label-m-strong ux4g-text-info">Desktop Wide</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Container-based layout for standard page shells.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-success">Desktop Fluid</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Fluid container behavior for edge-to-edge layouts.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Component Specifications Section -->
        <section class="ux4g-px-xl ux4g-pb-2xl">
            <div class="ux4g-container">
                <div class="ux4g-divider-horizontal ux4g-mb-l"></div>
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mb-l">Component Specifications</h2>
                </div>

                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-l">
                    <!-- Identity detail -->
                    <div class="ux4g-card ux4g-card-outline ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-primary-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-primary">1. Identity & Trust</h4>
                        </div>
                        <div class="ux4g-card-body ux4g-p-l">
                            <ul class="ux4g-list ux4g-list-disc ux4g-body-s-default ux4g-text-neutral-secondary ux4g-stack-gap-xs">
                                <li><strong>National Flag</strong>: Consistent visual indicator for official services.</li>
                                <li><strong>Global Reach</strong>: Link to National Portal (India.gov.in) with external icon.</li>
                                <li><strong>Standard Labels</strong>: Predictable "Government of India" naming convention.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Tools Detail -->
                    <div class="ux4g-card ux4g-card-outline ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-info-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-info">2. Accessibility Tools</h4>
                        </div>
                        <div class="ux4g-card-body ux4g-p-l">
                            <ul class="ux4g-list ux4g-list-disc ux4g-body-s-default ux4g-text-neutral-secondary ux4g-stack-gap-xs">
                                <li><strong>Text Controls</strong>: Direct Increase/Reset/Decrease actions.</li>
                                <li><strong>Shortcuts</strong>: Immediate "Skip to Main Content" link functionality.</li>
                                <li><strong>Rich Icons</strong>: Semantic material icons for language and access.</li>
                            </ul>
                        </div>
                    </div>

                    <!-- Containers Detail -->
                    <div class="ux4g-card ux4g-card-outline ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-success-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-success">3. Layout Containers</h4>
                        </div>
                        <div class="ux4g-card-body ux4g-p-l">
                            <ul class="ux4g-list ux4g-list-disc ux4g-body-s-default ux4g-text-neutral-secondary ux4g-stack-gap-xs">
                                <li><strong>Wide</strong>: Bound to standard 1320px bootstrap containers.</li>
                                <li><strong>Fluid</strong>: Full 100% width for edge-to-edge portal designs.</li>
                                <li><strong>Responsive</strong>: Automatic tool collapse on mobile viewports.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
`;

export const Introduction = {
  render: () => INTRODUCTION_CONTENT,
  parameters: {
    docs: {
      disable: true,
      source: { code: null },
      canvas: { sourceState: 'none' },
    },
  },
};

const HTML_WIDE = `
<header class="ux4g-topbar ux4g-topbar-wide" role="banner">
    <div class="ux4g-container">
        <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
            <div>
                <a aria-label="Government of India (opens in new tab)" class=" ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
                    <span class="india-flag"></span>
                    <span class="ux4g-label-m-default">Government of India</span>
                    <sup class="ux4g-icon-outlined">open_in_new</sup>
                </a>
            </div>
            <nav aria-label="Top utilities" class="ux4g-d-none ux4g-md-d-flex ux4g-ai-center">
                <a class="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
                <span class="ux4g-bl acc-top-divider"></span>
                <div aria-label="Text size controls" class="ux4g-topbar__group ux4g-d-flex ux4g-ai-center" role="group">
                    <button aria-label="Decrease text size" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">text_decrease</span></button>
                    <button aria-label="Reset text size" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">font_download</span></button>
                    <button aria-label="Increase text size" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">text_increase</span></button>
                </div>
                <span class="ux4g-bl acc-top-divider"></span>
                <span aria-label="Accessibility options" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-icon ux4g-fs-20" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">accessibility_new</span></span>
                <span class="ux4g-bl acc-top-divider"></span>
                <div class="ux4g-topbar__select">
                    <button aria-expanded="false" aria-haspopup="listbox" class="ux4g-topbar__selectbtn ux4g-d-inline-flex ux4g-ai-center" type="button">
                        <span class="ux4g-icon-outlined ux4g-top-bar-icon icon-language"> language </span>
                        <span class="ux4g-label-m-default">English</span>
                        <span class="ux4g-icon-outlined">arrow_drop_down</span>
                    </button>
                </div>
            </nav>
        </div>
    </div>
</header>`.trim();

const HTML_FLUID = `
<header class="ux4g-topbar ux4g-topbar-wide" role="banner">
    <div class="ux4g-container-fluid">
        <div class="ux4g-topbar__wrap ux4g-d-flex ux4g-jc-between ux4g-ai-center">
            <div>
                <a aria-label="Government of India (opens in new tab)" class=" ux4g-d-flex ux4g-ai-center" href="https://www.india.gov.in/" target="_blank" rel="noopener">
                    <span class="india-flag"></span>
                    <span class="ux4g-label-m-default">Government of India</span>
                    <sup class="ux4g-icon-outlined">open_in_new</sup>
                </a>
            </div>
            <nav aria-label="Top utilities" class="ux4g-d-flex ux4g-ai-center">
                <a class="ux4g-label-m-default ux4g-topbar__skip" href="#main-content">Skip to Main Content</a>
                <span class="ux4g-bl acc-top-divider ux4g-d-none ux4g-md-d-flex "></span>
                <div aria-label="Text size controls" class="ux4g-topbar__group ux4g-d-none ux4g-md-d-flex ux4g-ai-center" role="group">
                    <button aria-label="Decrease text size" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">text_decrease</span></button>
                    <button aria-label="Reset text size" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">font_download</span></button>
                    <button aria-label="Increase text size" class="ux4g-topbar__iconbtn ux4g-d-flex ux4g-jc-center ux4g-ai-center" type="button"><span class="ux4g-icon-outlined ux4g-top-bar-icon">text_increase</span></button>
                </div>
                <span class="ux4g-bl acc-top-divider ux4g-d-none ux4g-md-d-flex "></span>
                <span aria-label="Accessibility options" class="ux4g-topbar__iconbtn ux4g-d-none ux4g-md-d-flex ux4g-jc-center ux4g-ai-center ux4g-icon ux4g-fs-20"><span class="ux4g-icon-outlined ux4g-top-bar-icon">accessibility_new</span></span>
                <span class="ux4g-bl acc-top-divider ux4g-d-none ux4g-md-d-flex "></span>
                <div class="ux4g-topbar__select ux4g-d-none ux4g-md-d-flex ">
                    <button aria-expanded="false" aria-haspopup="listbox" class="ux4g-topbar__selectbtn ux4g-d-inline-flex ux4g-ai-center" type="button">
                        <span class="ux4g-icon-outlined ux4g-top-bar-icon icon-language"> language </span>
                        <span class="ux4g-label-m-default">English</span>
                        <span class="ux4g-icon-outlined">arrow_drop_down</span>
                    </button>
                </div>
            </nav>
        </div>
    </div>
</header>`.trim();

export const DesktopWide = {
  render: () => `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
        ${getHeroHeader('Desktop Wide', 'The wide container layout limits the Top Bar width to the standard page grid (max 1320px). This is recommended for standard website designs.')}
        <div class="ux4g-p-l ux4g-py-2xl">
            ${renderDemoCodeBlock('accessibility-wide', 'Desktop Wide Layout', 'Standard wide top bar layout with Government of India identity and trust options.', HTML_WIDE, false, getSnippetCode([
                { label: 'Accessibility Bar - Desktop Wide Layout', html: HTML_WIDE },
            ]))}
        </div>
    </div>`,
  parameters: {
    docs: { disable: true },
  },
};

export const DesktopFluid = {
  render: () => `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
        ${getHeroHeader('Desktop Fluid', 'The fluid layout allows the Top Bar to span the full width of the viewport. Ideal for edge-to-edge dashboard or portal headers.')}
        <div class="ux4g-p-l ux4g-py-2xl">
            ${renderDemoCodeBlock('accessibility-fluid', 'Desktop Fluid Layout', 'Fluid top bar layout wrapping full width for edge-to-edge service portals.', HTML_FLUID, false, getSnippetCode([
                { label: 'Accessibility Bar - Desktop Fluid Layout', html: HTML_FLUID },
            ]))}
        </div>
    </div>`,
  parameters: {
    docs: { disable: true },
  },
};
