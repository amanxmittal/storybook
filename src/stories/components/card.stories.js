/**
 * Card Component Stories
 * 
 * Showcasing different types of Cards: Vertical and Horizontal with various styles (Solid, Outline, No Fill) and states.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Card',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Cards are surfaces that display content and actions on a single topic.',
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

const getReactCode = (html) => htmlToJsx(html, 'Card');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
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
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-w-100 ux4g-flex-wrap">
                        ${displayCode}
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
const LOREM_TEXT = `Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.`;
const LOREM_LONG = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit.`;

const VERTICAL_CARD_HTML = (variant, disabled = false) => `
                <div class="ux4g-card ux4g-o-hidden ux4g-card-${variant} ux4g-card-vertical" ${disabled ? 'disabled' : ''}>
                    <div class="ux4g-card-header ux4g-pb-none">
                        <div class="ux4g-card-header-img ux4g-radius-l">
                            <img alt="" class="ux4g-radius-l ux4g-card-header-image" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g-card.svg">
                            <div class="ux4g-card-header-tag">
                                <span
                                    class="ux4g-bg-neutral-elevateder ux4g-border-none ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                    <i class="ux4g-icon-outlined">token</i>
                                    Label
                                </span>
                                <span class="ux4g-card-token ux4g-radius-full">
                                    <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-card-body">
                        <div class="ux4g-avatar ux4g-avatar-l">
                            <img alt="avatar" src="https://i.pravatar.cc/150?u=1">
                        </div>
                        <div class="ux4g-card-body-inner ux4g-flex-1 ">
                            <div
                                class="card-tag-first ux4g-flex-wrap ux4g-d-flex ux4g-ai-center ux4g-pb-xs ux4g-inline-gap-s ux4g-stack-gap-s">
                                <span
                                    class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                    <i class="ux4g-icon-outlined">token</i> Label
                                </span>
                                <div class="ux4g-divider-vertical"></div>
                                <span
                                    class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                    <i class="ux4g-icon-outlined">token</i> Label
                                </span>
                                <div class="ux4g-divider-vertical"></div>
                                <span
                                    class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                    <i class="ux4g-icon-outlined">token</i> Label
                                </span>
                            </div>

                            <div class="ux4g-d-flex ux4g-flex-col">
                                <div class="card-group ux4g-d-flex ux4g-ai-center ux4g-pt-xs">
                                    <div class="ux4g-pb-none ux4g-pt-none ux4g-flex-1">
                                        <h5 class="ux4g-card-title ux4g-pb-2xs">Card Title</h5>
                                        <h5 class="ux4g-card-sub-title">Card Sub Title</h5>
                                    </div>
                                    <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-24">token</i>
                                </div>
                                <div class="ux4g-relative ux4g-card-body-group">
                                    <div
                                        class="ux4g-flex-wrap ux4g-d-flex ux4g-ai-center ux4g-pb-xs ux4g-pt-xs ux4g-inline-gap-s ux4g-stack-gap-s">
                                        <button
                                            class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                            <i class="ux4g-icon-outlined">token</i>
                                            Label
                                        </button>
                                        <div class="ux4g-divider-vertical"></div>
                                        <button
                                            class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                            <i class="ux4g-icon-outlined">token</i>
                                            Label
                                        </button>
                                        <div class="ux4g-divider-vertical"></div>
                                        <button
                                            class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                            <i class="ux4g-icon-outlined">token</i>
                                            Label
                                        </button>
                                    </div>
                                    <p class="ux4g-pt-xs">${LOREM_TEXT}</p>
                                    <div
                                        class="ux4g-flex-wrap ux4g-d-flex ux4g-ai-center ux4g-pt-s ux4g-inline-gap-s ux4g-stack-gap-s">
                                        <span
                                            class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                            <i class="ux4g-icon-outlined">token</i> Label
                                        </span>
                                        <div class="ux4g-divider-vertical"></div>
                                        <span
                                            class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                            <i class="ux4g-icon-outlined">token</i> Label
                                        </span>
                                        <div class="ux4g-divider-vertical"></div>
                                        <span
                                            class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                            <i class="ux4g-icon-outlined">token</i> Label
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-card-footer">
                        <button class="ux4g-btn-primary ux4g-btn-md ux4g-w-100">Button</button>
                    </div>
                </div>
`;

const HORIZONTAL_CARD_HTML = (variant, disabled = false, alternativeText = null) => `
            <div class="ux4g-card ux4g-card-${variant} ux4g-card-horizontal" ${disabled ? 'disabled' : ''}>
                <div class="ux4g-card-header">
                    <div class="ux4g-card-header-img ux4g-radius-l">
                        <img alt="" class="ux4g-card-header-image ux4g-radius-l" src="https://cdn.ux4g.gov.in/UX4G@3.0.16/assets/images/ux4g-card-h.png">
                        <div class="ux4g-card-header-tag">
                            <span
                                class="ux4g-bg-neutral-elevateder ux4g-border-none ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                <i class="ux4g-icon-outlined">token</i>
                                Label
                            </span>
                            <span class="ux4g-card-token ux4g-radius-full">
                                <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="ux4g-flex-3">
                    <div class="ux4g-card-body">
                        <div class="ux4g-d-flex ux4g-flex-col">
                            <div class="card-group ux4g-d-flex ux4g-ai-center">
                                <div class="ux4g-avatar ux4g-avatar-l">
                                    <img alt="avatar" src="https://i.pravatar.cc/150?u=1">
                                </div>
                                <div class="ux4g-pb-none ux4g-pt-none ux4g-flex-1">
                                    <h5 class="ux4g-card-title ux4g-pb-2xs">Card Title</h5>
                                    <h5 class="ux4g-card-sub-title">Card Sub Title</h5>
                                </div>
                                <i class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-24">token</i>
                            </div>
                            <div class="ux4g-relative ux4g-card-body-group">
                                <div
                                    class="ux4g-flex-wrap ux4g-d-flex ux4g-ai-center ux4g-pb-xs ux4g-pt-xs ux4g-inline-gap-s ux4g-stack-gap-s">
                                    <button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i>
                                        Label
                                    </button>
                                    <div class="ux4g-divider-vertical"></div>
                                    <button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i>
                                        Label
                                    </button>
                                    <div class="ux4g-divider-vertical"></div>
                                    <button class="ux4g-choice-chip-sm ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i>
                                        Label
                                    </button>
                                </div>
                                <p class="ux4g-pt-xs">${alternativeText || LOREM_TEXT}</p>
                                <div
                                    class="ux4g-flex-wrap ux4g-d-flex ux4g-ai-center ux4g-pt-s ux4g-inline-gap-s ux4g-stack-gap-s">
                                    <span
                                        class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i> Label
                                    </span>
                                    <div class="ux4g-divider-vertical"></div>
                                    <span
                                        class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i> Label
                                    </span>
                                    <div class="ux4g-divider-vertical"></div>
                                    <span
                                        class="ux4g-tag-tonal-neutral ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs">
                                        <i class="ux4g-icon-outlined">token</i> Label
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-card-footer ux4g-d-flex ux4g-inline-gap-l">
                        <button class="ux4g-btn-outline-primary ux4g-btn-md ux4g-w-100">Button</button>
                        <button class="ux4g-btn-primary ux4g-btn-md ux4g-w-100">Button</button>
                    </div>
                </div>
            </div>
`;

const VERTICAL_FILLED_CARD_CODE = getSnippetCode([
    { label: 'Vertical Card - Filled', html: VERTICAL_CARD_HTML('solid') },
]);

const VERTICAL_OUTLINE_CARD_CODE = getSnippetCode([
    { label: 'Vertical Card - Outline', html: VERTICAL_CARD_HTML('outline') },
]);

const VERTICAL_NO_FILL_CARD_CODE = getSnippetCode([
    { label: 'Vertical Card - No Fill', html: VERTICAL_CARD_HTML('no-fill') },
]);

const VERTICAL_DISABLED_CARD_CODE = getSnippetCode([
    { label: 'Vertical Card - Disabled', html: VERTICAL_CARD_HTML('solid', true) },
]);

const HORIZONTAL_FILLED_CARD_CODE = getSnippetCode([
    { label: 'Horizontal Card - Filled', html: HORIZONTAL_CARD_HTML('solid', false, LOREM_LONG) },
]);

const HORIZONTAL_OUTLINE_CARD_CODE = getSnippetCode([
    { label: 'Horizontal Card - Outline', html: HORIZONTAL_CARD_HTML('outline', false, LOREM_LONG) },
]);

const HORIZONTAL_NO_FILL_CARD_CODE = getSnippetCode([
    { label: 'Horizontal Card - No Fill', html: HORIZONTAL_CARD_HTML('no-fill', false, LOREM_LONG) },
]);

const HORIZONTAL_DISABLED_CARD_CODE = getSnippetCode([
    { label: 'Horizontal Card - Disabled', html: HORIZONTAL_CARD_HTML('solid', true, LOREM_LONG) },
]);

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Cards</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Cards are flexible and extensible content containers. They include options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
            <div class="">
                <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Veritcal card</h2>
                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-l">
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-24 ux4g-fw-semibold ux4g-mb-xl">Card filled</h3>
                        ${VERTICAL_CARD_HTML('solid')}
                    </div>
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-24 ux4g-fw-semibold ux4g-mb-xl">Card outline</h3>
                        ${VERTICAL_CARD_HTML('outline')}
                    </div>
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-24 ux4g-fw-semibold ux4g-mb-xl">Card no fill</h3>
                        ${VERTICAL_CARD_HTML('no-fill')}
                    </div>
                </div>
                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-xl">
                    <div class="ux4g-relative">
                        <h3 class="ux4g-fs-24 ux4g-fw-semibold ux4g-mb-xl">Card Disabled</h3>
                        ${VERTICAL_CARD_HTML('solid', true)}
                    </div>
                </div>

                <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl ux4g-mt-3xl">Horizontal card</h2>
                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-l">
                    <!-- Horizontal card -->
                    ${HORIZONTAL_CARD_HTML('solid')}
                    ${HORIZONTAL_CARD_HTML('outline')}
                </div>
                <div class="ux4g-d-grid ux4g-grid-auto-fit-250 ux4g-gap-xs ux4g-mb-l">
                    ${HORIZONTAL_CARD_HTML('no-fill')}
                    ${HORIZONTAL_CARD_HTML('solid', true)}
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy variant utility classes for Cards.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Orientation Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Orientation</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-card-vertical', label: 'Vertical Layout' },
        { class: 'ux4g-card-horizontal', label: 'Horizontal Layout' }
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

                        <!-- Variant Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Card Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-card-solid', label: 'Filled' },
        { class: 'ux4g-card-outline', label: 'Outline' },
        { class: 'ux4g-card-no-fill', label: 'No Fill' }
    ].map(s => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${s.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${s.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${s.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const VerticalCards = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Vertical Cards', 'Standard vertical card variants including Solid, Outline, No Fill, and Disabled states.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('vertical-filled', 'Card Filled', 'Card with background fill.', VERTICAL_CARD_HTML('solid'), false, VERTICAL_FILLED_CARD_CODE)}
                ${renderDemoCodeBlock('vertical-outline', 'Card Outline', 'Card with border outline and no background fill.', VERTICAL_CARD_HTML('outline'), false, VERTICAL_OUTLINE_CARD_CODE)}
                ${renderDemoCodeBlock('vertical-no-fill', 'Card No Fill', 'Card without border or background fill.', VERTICAL_CARD_HTML('no-fill'), false, VERTICAL_NO_FILL_CARD_CODE)}
                ${renderDemoCodeBlock('vertical-disabled', 'Card Disabled', 'Card in disabled state.', VERTICAL_CARD_HTML('solid', true), false, VERTICAL_DISABLED_CARD_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const HorizontalCards = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Horizontal Cards', 'Horizontal layout cards for side-by-side content.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('horizontal-filled', 'Card Filled', 'Horizontal card with background fill.', HORIZONTAL_CARD_HTML('solid', false, LOREM_LONG), false, HORIZONTAL_FILLED_CARD_CODE)}
                ${renderDemoCodeBlock('horizontal-outline', 'Card Outline', 'Horizontal card with border outline.', HORIZONTAL_CARD_HTML('outline', false, LOREM_LONG), false, HORIZONTAL_OUTLINE_CARD_CODE)}
                ${renderDemoCodeBlock('horizontal-no-fill', 'Card No Fill', 'Horizontal card without border or background fill.', HORIZONTAL_CARD_HTML('no-fill', false, LOREM_LONG), false, HORIZONTAL_NO_FILL_CARD_CODE)}
                ${renderDemoCodeBlock('horizontal-disabled', 'Card Disabled', 'Horizontal card in disabled state.', HORIZONTAL_CARD_HTML('solid', true, LOREM_LONG), false, HORIZONTAL_DISABLED_CARD_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
