/**
 * Slider Component Stories
 *
 * Showcasing source-backed Slider variants from src/index.html.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Slider',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Sliders allow users to select a single value or a range from a bounded scale.',
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

const getReactCode = (html) => htmlToJsx(html, 'Slider');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-3xl" id="section-${id}">
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

const SINGLE_SLIDER_BADGE_SMALL_HTML = `
    <div class="ux4g-slider-field ux4g-slider-sm">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label" for="s-single-s-text">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
            <span class="ux4g-slider-value-badge">40%</span>
        </div>
        <div class="ux4g-slider ux4g-slider-sm">
            <input type="range" class="ux4g-slider-input" id="s-single-s-text" min="0" max="100" step="10" value="40">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const SINGLE_SLIDER_BADGE_MEDIUM_HTML = `
    <div class="ux4g-slider-field ux4g-slider-md">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label" for="s-single-m-text">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
            <span class="ux4g-slider-value-badge">40%</span>
        </div>
        <div class="ux4g-slider ux4g-slider-md">
            <input type="range" class="ux4g-slider-input" id="s-single-m-text" min="0" max="100" step="10" value="40">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const SINGLE_SLIDER_BOX_SMALL_HTML = `
    <div class="ux4g-slider-field ux4g-slider-sm">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label" for="s-single-s-box">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
            <span class="ux4g-slider-range-box">40</span>
        </div>
        <div class="ux4g-slider ux4g-slider-sm">
            <input type="range" class="ux4g-slider-input" id="s-single-s-box" min="0" max="100" step="10" value="40">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const SINGLE_SLIDER_BOX_MEDIUM_HTML = `
    <div class="ux4g-slider-field ux4g-slider-md">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label" for="s-single-m-box">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
            <span class="ux4g-slider-range-box">40</span>
        </div>
        <div class="ux4g-slider ux4g-slider-md">
            <input type="range" class="ux4g-slider-input" id="s-single-m-box" min="0" max="100" step="10" value="40">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const RANGE_SLIDER_BADGE_SMALL_HTML = `
    <div class="ux4g-slider-field ux4g-slider-sm">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
        </div>
        <div class="ux4g-slider-range-row">
            <span class="ux4g-slider-value-badge">0%</span>
            <span class="ux4g-slider-value-badge">25%</span>
        </div>
        <div class="ux4g-slider ux4g-slider-dual ux4g-slider-sm">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-min" min="0" max="100" step="10" value="0">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-max" min="0" max="100" step="10" value="25">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-min"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-max"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const RANGE_SLIDER_BADGE_MEDIUM_HTML = `
    <div class="ux4g-slider-field ux4g-slider-md">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
        </div>
        <div class="ux4g-slider-range-row">
            <span class="ux4g-slider-value-badge">0%</span>
            <span class="ux4g-slider-value-badge">25%</span>
        </div>
        <div class="ux4g-slider ux4g-slider-dual ux4g-slider-md">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-min" min="0" max="100" step="10" value="0">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-max" min="0" max="100" step="10" value="25">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-min"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-max"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const RANGE_SLIDER_BOX_SMALL_HTML = `
    <div class="ux4g-slider-field ux4g-slider-sm">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
        </div>
        <div class="ux4g-slider-range-row">
            <span class="ux4g-slider-range-box">0%</span>
            <span class="ux4g-slider-range-box">25%</span>
        </div>
        <div class="ux4g-slider ux4g-slider-dual ux4g-slider-sm">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-min" min="0" max="100" step="10" value="0">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-max" min="0" max="100" step="10" value="25">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-min"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-max"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const RANGE_SLIDER_BOX_MEDIUM_HTML = `
    <div class="ux4g-slider-field ux4g-slider-md">
        <div class="ux4g-slider-label-row">
            <label class="ux4g-slider-label">
                Label <span class="ux4g-slider-label-required">*</span>
                <span class="ux4g-slider-label-icon ux4g-icon-outlined" title="More info">info</span>
            </label>
        </div>
        <div class="ux4g-slider-range-row">
            <span class="ux4g-slider-range-box">0%</span>
            <span class="ux4g-slider-range-box">25%</span>
        </div>
        <div class="ux4g-slider ux4g-slider-dual ux4g-slider-md">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-min" min="0" max="100" step="10" value="0">
            <input type="range" class="ux4g-slider-input ux4g-slider-input-max" min="0" max="100" step="10" value="25">
            <div class="ux4g-slider-track">
                <div class="ux4g-slider-fill"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-min"></div>
                <div class="ux4g-slider-thumb ux4g-slider-thumb-max"></div>
            </div>
            <div class="ux4g-slider-steps"></div>
        </div>
        <span class="ux4g-slider-description">
            <span class="ux4g-icon-outlined ux4g-fs-16">info</span> Description
        </span>
    </div>
`;

const SINGLE_SLIDER_BADGE_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${SINGLE_SLIDER_BADGE_SMALL_HTML}
        </div>
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${SINGLE_SLIDER_BADGE_MEDIUM_HTML}
        </div>
    </div>
`;

const SINGLE_SLIDER_BOX_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${SINGLE_SLIDER_BOX_SMALL_HTML}
        </div>
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${SINGLE_SLIDER_BOX_MEDIUM_HTML}
        </div>
    </div>
`;

const RANGE_SLIDER_BADGE_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${RANGE_SLIDER_BADGE_SMALL_HTML}
        </div>
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${RANGE_SLIDER_BADGE_MEDIUM_HTML}
        </div>
    </div>
`;

const RANGE_SLIDER_BOX_DEMO = `
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l">
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Small</div>
            ${RANGE_SLIDER_BOX_SMALL_HTML}
        </div>
        <div class="ux4g-border ux4g-border-neutral-subtle ux4g-radius-m ux4g-p-l">
            <div class="ux4g-label-s-strong ux4g-text-neutral-secondary ux4g-mb-m">Medium</div>
            ${RANGE_SLIDER_BOX_MEDIUM_HTML}
        </div>
    </div>
`;

const SINGLE_SLIDER_BADGE_CLEAN_CODE = formatCode(`
    <!-- Variant: Single Slider with Value Badge - Small -->
    ${SINGLE_SLIDER_BADGE_SMALL_HTML}

    <!-- Variant: Single Slider with Value Badge - Medium -->
    ${SINGLE_SLIDER_BADGE_MEDIUM_HTML}
`);

const SINGLE_SLIDER_BOX_CLEAN_CODE = formatCode(`
    <!-- Variant: Single Slider with Range Box - Small -->
    ${SINGLE_SLIDER_BOX_SMALL_HTML}

    <!-- Variant: Single Slider with Range Box - Medium -->
    ${SINGLE_SLIDER_BOX_MEDIUM_HTML}
`);

const RANGE_SLIDER_BADGE_CLEAN_CODE = formatCode(`
    <!-- Variant: Range Slider with Value Badges - Small -->
    ${RANGE_SLIDER_BADGE_SMALL_HTML}

    <!-- Variant: Range Slider with Value Badges - Medium -->
    ${RANGE_SLIDER_BADGE_MEDIUM_HTML}
`);

const RANGE_SLIDER_BOX_CLEAN_CODE = formatCode(`
    <!-- Variant: Range Slider with Range Boxes - Small -->
    ${RANGE_SLIDER_BOX_SMALL_HTML}

    <!-- Variant: Range Slider with Range Boxes - Medium -->
    ${RANGE_SLIDER_BOX_MEDIUM_HTML}
`);

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
        ${getHeroHeader('Slider', 'Sliders support source-backed single-value and dual-range selection patterns with compact value presentation for small and medium sizes.')}

        <section class="ux4g-p-xl">
            <div class="ux4g-pb-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-mb-xl">
                    <div class="ux4g-card ux4g-card-solid">
                        <div class="ux4g-card-header">
                            <h2 class="ux4g-heading-m-strong">Source-backed variants</h2>
                        </div>
                        <div class="ux4g-card-body ux4g-flex-col">
                            <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Single sliders with value badges in small and medium sizes.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Single sliders with range boxes in small and medium sizes.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Range sliders with paired value badges in small and medium sizes.</li>
                                <li class="ux4g-body-m-default ux4g-text-neutral-primary">Range sliders with paired range boxes in small and medium sizes.</li>
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
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Overview, live previews, and class reference for the Slider showcase.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-info">Single Sliders</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Single-value slider variants with value badge and range box treatments.</div>
                                </div>
                                <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                    <div class="ux4g-label-m-strong ux4g-text-success">Range Sliders</div>
                                    <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Dual-thumb slider variants using badges or range boxes for min and max values.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l ux4g-mb-2xl">
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Single Slider Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Live previews taken directly from the single-slider showcase patterns in <code>src/index.html</code>.</p>
                        </div>
                        <div class="ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Value Badge</div>
                                ${SINGLE_SLIDER_BADGE_DEMO}
                            </div>
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Range Box</div>
                                ${SINGLE_SLIDER_BOX_DEMO}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Range Slider Showcase</h2>
                            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Live previews taken directly from the range-slider showcase patterns in <code>src/index.html</code>.</p>
                        </div>
                        <div class="ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Value Badges</div>
                                ${RANGE_SLIDER_BADGE_DEMO}
                            </div>
                            <div>
                                <div class="ux4g-label-l-strong ux4g-mb-m">Range Boxes</div>
                                ${RANGE_SLIDER_BOX_DEMO}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Classes used by the showcased Slider variants only.</p>
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
        { class: 'ux4g-slider-field', label: 'Slider field wrapper' },
        { class: 'ux4g-slider-label-row', label: 'Label and value row' },
        { class: 'ux4g-slider', label: 'Slider container' },
        { class: 'ux4g-slider-track', label: 'Track wrapper' },
        { class: 'ux4g-slider-fill', label: 'Filled track segment' },
        { class: 'ux4g-slider-thumb', label: 'Single-thumb marker' },
        { class: 'ux4g-slider-steps', label: 'Step marker rail' },
        { class: 'ux4g-slider-description', label: 'Help text row' },
        { class: 'ux4g-slider-range-row', label: 'Range value row' }
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
        { class: 'ux4g-slider-sm', label: 'Small size' },
        { class: 'ux4g-slider-md', label: 'Medium size' },
        { class: 'ux4g-slider-dual', label: 'Dual-thumb range slider' },
        { class: 'ux4g-slider-value-badge', label: 'Badge value display' },
        { class: 'ux4g-slider-range-box', label: 'Boxed value display' },
        { class: 'ux4g-slider-input-min', label: 'Minimum range input' },
        { class: 'ux4g-slider-input-max', label: 'Maximum range input' },
        { class: 'ux4g-slider-thumb-min', label: 'Minimum thumb marker' },
        { class: 'ux4g-slider-thumb-max', label: 'Maximum thumb marker' }
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

export const SingleSliders = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Single Sliders', 'Source-backed single-value slider variants with value badges and range boxes in small and medium sizes.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('single-slider-badge', 'Single Slider with Value Badge', 'Small and medium single sliders with badge-style value indicators.', SINGLE_SLIDER_BADGE_DEMO, false, SINGLE_SLIDER_BADGE_CLEAN_CODE)}
                ${renderDemoCodeBlock('single-slider-box', 'Single Slider with Range Box', 'Small and medium single sliders with boxed value indicators.', SINGLE_SLIDER_BOX_DEMO, false, SINGLE_SLIDER_BOX_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const RangeSliders = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Range Sliders', 'Source-backed dual-thumb slider variants with paired value badges and range boxes in small and medium sizes.')}
            <div class="ux4g-p-l ux4g-py-2xl">
                ${renderDemoCodeBlock('range-slider-badge', 'Range Slider with Value Badges', 'Small and medium dual sliders with badge-based min and max values.', RANGE_SLIDER_BADGE_DEMO, false, RANGE_SLIDER_BADGE_CLEAN_CODE)}
                ${renderDemoCodeBlock('range-slider-box', 'Range Slider with Range Boxes', 'Small and medium dual sliders with boxed min and max values.', RANGE_SLIDER_BOX_DEMO, false, RANGE_SLIDER_BOX_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
