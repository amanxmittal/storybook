/**
 * Accordion Component Stories
 *
 * Showcasing source-backed Accordion variants from src/index.html.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Accordion',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Accordions progressively disclose related content in collapsible sections.',
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

const getReactCode = (html) => htmlToJsx(html, 'Accordion');

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

const SIMPLE_RIGHT_HTML = `
    <div class="ux4g-accordion ux4g-accordion-arrow-right ux4g-mb-xl" id="accordionSimpleRight">
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="simpleRightOne" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#simpleRightOne" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Accordion Item</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="simpleRightOne" ux4g-parent="#accordionSimpleRight">
                <div class="ux4g-accordion__body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada, justo eget pretium posuere, massa nulla malesuada nibh, in dictum urna odio et tortor. Fusce suscipit nunc sed eros sollicitudin, ac feugiat risus aliquam. Nulla facilisi.
                    </p>
                </div>
            </div>
        </div>
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="simpleRightTwo" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#simpleRightTwo" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Accordion Item</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="simpleRightTwo" ux4g-parent="#accordionSimpleRight">
                <div class="ux4g-accordion__body">
                    <p>
                        Donec porta turpis ut ipsum tincidunt, sit amet aliquam leo laoreet. Nunc suscipit ligula non arcu convallis, at interdum turpis tincidunt. Cras a turpis eu ipsum dictum lacinia.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;

const SIMPLE_LEFT_HTML = `
    <div class="ux4g-accordion ux4g-accordion-arrow-left" id="accordionSimpleLeft">
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="simpleLeftOne" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#simpleLeftOne" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Accordion Item</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="simpleLeftOne" ux4g-parent="#accordionSimpleLeft">
                <div class="ux4g-accordion__body">
                    <p>
                        Donec porta turpis ut ipsum tincidunt, sit amet aliquam leo laoreet. Nunc suscipit ligula non arcu convallis, at interdum turpis tincidunt. Cras a turpis eu ipsum dictum lacinia.
                    </p>
                </div>
            </div>
        </div>
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="simpleLeftTwo" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#simpleLeftTwo" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Accordion Item</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="simpleLeftTwo" ux4g-parent="#accordionSimpleLeft">
                <div class="ux4g-accordion__body">
                    <p>
                        Donec porta turpis ut ipsum tincidunt, sit amet aliquam leo laoreet. Nunc suscipit ligula non arcu convallis, at interdum turpis tincidunt. Cras a turpis eu ipsum dictum lacinia.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;

const TYPE3_HTML = `
    <div class="ux4g-accordion ux4g-bg-neutral" id="accordionType3">
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="type3One" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#type3One" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Accordion Item</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="type3One" ux4g-parent="#accordionType3">
                <div class="ux4g-accordion__body ux4g-bg-neutral-soft">
                    <p>
                        Donec porta turpis ut ipsum tincidunt, sit amet aliquam leo laoreet. Nunc suscipit ligula non arcu convallis, at interdum turpis tincidunt. Cras a turpis eu ipsum dictum lacinia.
                    </p>
                </div>
            </div>
        </div>
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="type3Two" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#type3Two" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Accordion Item</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="type3Two" ux4g-parent="#accordionType3">
                <div class="ux4g-accordion__body ux4g-bg-neutral-soft">
                    <p>
                        Donec porta turpis ut ipsum tincidunt, sit amet aliquam leo laoreet. Nunc suscipit ligula non arcu convallis, at interdum turpis tincidunt. Cras a turpis eu ipsum dictum lacinia.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;

const TYPE4_HTML = `
    <div class="ux4g-accordion ux4g-accordion-bordered" id="accordionType4">
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="type4One" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#type4One" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Eligibility Criteria</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="type4One" ux4g-parent="#accordionType4">
                <div class="ux4g-accordion__body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et euismod nulla. Curabitur faucibus, quam negotium tincidunt, magna urna elementum lorem, in porta eros nibh in justo.
                    </p>
                </div>
            </div>
        </div>
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="type4Two" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#type4Two" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Benefits</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="type4Two" ux4g-parent="#accordionType4">
                <div class="ux4g-accordion__body">
                    <p>
                        Aenean feugiat tellus et eros aliquam, et elementum ex fermentum. Sed interdum velit quis dui cursus, sit amet iaculis odio eleifend.
                    </p>
                </div>
            </div>
        </div>
        <div class="ux4g-accordion__item">
            <h3 class="ux4g-accordion__header">
                <button aria-controls="type4Three" aria-expanded="false" class="ux4g-accordion__button collapsed" type="button" ux4g-target="#type4Three" ux4g-toggle="collapse">
                    <span class="ux4g-accordion__button-content">
                        <span class="ux4g-accordion__title">Required Documents</span>
                    </span>
                </button>
            </h3>
            <div class="ux4g-accordion__collapse collapse" id="type4Three" ux4g-parent="#accordionType4">
                <div class="ux4g-accordion__body">
                    <p>
                        In hac habitasse platea dictumst. Curabitur vel urna non turpis efficitur condimentum. Nam consequat, est sit amet pharetra volutpat, elit lacus varius eros, eu pellentesque.
                    </p>
                </div>
            </div>
        </div>
    </div>
`;

const ACCORDION_ARROW_RIGHT_CLEAN_CODE = formatCode(`
    <!-- Variant: Accordion - Title Left, Arrow Right -->
    ${SIMPLE_RIGHT_HTML}
`);

const ACCORDION_ARROW_LEFT_CLEAN_CODE = formatCode(`
    <!-- Variant: Accordion - Arrow Left + Title -->
    ${SIMPLE_LEFT_HTML}
`);

const ACCORDION_BG_CLEAN_CODE = formatCode(`
    <!-- Variant: Accordion - Background Header & Body -->
    ${TYPE3_HTML}
`);

const ACCORDION_BORDERED_CLEAN_CODE = formatCode(`
    <!-- Variant: Accordion - With Container -->
    ${TYPE4_HTML}
`);

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Accordion', 'Accordions support source-backed disclosure patterns ranging from simple arrow placements to neutral-background and bordered container variants.')}

        <section class="ux4g-p-xl">
            <div class="ux4g-pb-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-mb-xl">
                    <div class="ux4g-card ux4g-card-solid">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Source-backed variants</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Simple accordion with title-left and arrow-right alignment.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Simple accordion with arrow-left and title alignment.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Neutral-background accordion with background body treatment.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Bordered accordion container for structured informational sections.</li>
                            </ul>
                        </div>
                    </div>

                    <div class="ux4g-card ux4g-card-outline">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Available stories</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-primary-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-primary">Introduction</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Overview, live previews, and a compact class reference for Accordion patterns.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-info">Simple Variants</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Arrow-right and arrow-left disclosure patterns from the source showcase.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-success">Background Variant</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Accordion with neutral background header and body treatment.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-warning">Container Variant</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Bordered informational accordion with titled content sections.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-mb-2xl">
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Simple Accordion Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Live previews taken directly from the simple Accordion showcase blocks in <code>src/index.html</code>.</p>
                        </div>
                        <div class="ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Title Left, Arrow Right</div>
                                ${SIMPLE_RIGHT_HTML}
                            </div>
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Arrow Left + Title</div>
                                ${SIMPLE_LEFT_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Structured Variants Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Background and bordered accordion variants preserved from the source showcase.</p>
                        </div>
                        <div class="ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Background Header & Body</div>
                                ${TYPE3_HTML}
                            </div>
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">With Container</div>
                                ${TYPE4_HTML}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Classes used by the showcased Accordion variants only.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structure</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-accordion', label: 'Accordion wrapper' },
        { class: 'ux4g-accordion__item', label: 'Accordion item' },
        { class: 'ux4g-accordion__header', label: 'Item header' },
        { class: 'ux4g-accordion__button', label: 'Accordion trigger button' },
        { class: 'ux4g-accordion__button-content', label: 'Button content wrapper' },
        { class: 'ux4g-accordion__title', label: 'Accordion title text' },
        { class: 'ux4g-accordion__collapse', label: 'Collapsible panel wrapper' },
        { class: 'ux4g-accordion__body', label: 'Accordion body content' }
    ].map(item => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${item.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${item.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${item.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-accordion-arrow-right', label: 'Arrow right alignment' },
        { class: 'ux4g-accordion-arrow-left', label: 'Arrow left alignment' },
        { class: 'ux4g-bg-neutral', label: 'Neutral accordion wrapper' },
        { class: 'ux4g-bg-neutral-soft', label: 'Neutral soft background body' },
        { class: 'ux4g-accordion-bordered', label: 'Bordered container variant' },
        { class: 'collapsed', label: 'Collapsed trigger state' },
        { class: 'collapse', label: 'Collapsed panel utility' }
    ].map(item => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${item.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${item.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${item.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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

export const SimpleAccordions = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Simple Accordions', 'Source-backed simple Accordion variants using arrow-right and arrow-left header alignment patterns.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('accordion-arrow-right', 'Title Left, Arrow Right', 'Simple accordion with title-left and arrow-right alignment from the source showcase.', SIMPLE_RIGHT_HTML, false, ACCORDION_ARROW_RIGHT_CLEAN_CODE)}
                ${renderDemoCodeBlock('accordion-arrow-left', 'Arrow Left + Title', 'Simple accordion with arrow-left and title alignment from the source showcase.', SIMPLE_LEFT_HTML, false, ACCORDION_ARROW_LEFT_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const StructuredAccordions = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Structured Accordions', 'Source-backed structured Accordion variants with background and bordered container treatments.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('accordion-background', 'Background Header & Body', 'Accordion variant with neutral wrapper and soft background body treatment.', TYPE3_HTML, false, ACCORDION_BG_CLEAN_CODE)}
                ${renderDemoCodeBlock('accordion-bordered', 'With Container', 'Bordered accordion container variant with titled informational sections.', TYPE4_HTML, false, ACCORDION_BORDERED_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
