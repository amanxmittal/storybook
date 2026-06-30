/**
 * Carousel Component Stories
 *
 * Showcasing default and image-based Carousel patterns sourced from src/pattern.html.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Carousel',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Carousels present sequential banners, promotions, or editorial highlights within a compact surface.',
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

const getReactCode = (html) => htmlToJsx(html, 'Carousel');
const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const getCarouselSetupScript = (scopeVarName) => `
                    const initCarousels = (scope) => {
                        if (!scope) return;

                        scope.querySelectorAll('.ux4g-carousel').forEach((carousel) => {
                            if (carousel.dataset.ux4gStoryCarouselReady === 'true') {
                                return;
                            }

                            carousel.dataset.ux4gStoryCarouselReady = 'true';

                            const slidesContainer = carousel.querySelector('.ux4g-carousel-slides');
                            const slides = Array.from(carousel.querySelectorAll('.ux4g-carousel-slide'));
                            const prevBtn = carousel.querySelector('.ux4g-carousel-arrow-prev');
                            const nextBtn = carousel.querySelector('.ux4g-carousel-arrow-next');
                            const dots = Array.from(carousel.querySelectorAll('.ux4g-carousel-dot'));

                            if (!slides.length) return;

                            let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
                            currentIndex = currentIndex >= 0 ? currentIndex : 0;

                            const updateCarousel = (nextIndex) => {
                                if (nextIndex < 0) {
                                    nextIndex = slides.length - 1;
                                } else if (nextIndex >= slides.length) {
                                    nextIndex = 0;
                                }

                                currentIndex = nextIndex;

                                if (slidesContainer) {
                                    slidesContainer.style.transform = 'translateX(-' + (currentIndex * 100) + '%)';
                                }

                                slides.forEach((slide, index) => {
                                    const isActive = index === currentIndex;
                                    slide.classList.toggle('is-active', isActive);
                                    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
                                });

                                dots.forEach((dot, index) => {
                                    const isActive = index === currentIndex;
                                    dot.classList.toggle('is-active', isActive);
                                    dot.setAttribute('aria-current', isActive ? 'true' : 'false');
                                });
                            };

                            if (prevBtn) {
                                prevBtn.addEventListener('click', (event) => {
                                    event.preventDefault();
                                    updateCarousel(currentIndex - 1);
                                });
                            }

                            if (nextBtn) {
                                nextBtn.addEventListener('click', (event) => {
                                    event.preventDefault();
                                    updateCarousel(currentIndex + 1);
                                });
                            }

                            dots.forEach((dot, index) => {
                                dot.setAttribute('role', 'button');
                                dot.setAttribute('tabindex', '0');

                                dot.addEventListener('click', (event) => {
                                    event.preventDefault();
                                    updateCarousel(index);
                                });

                                dot.addEventListener('keydown', (event) => {
                                    if (event.key === 'Enter' || event.key === ' ') {
                                        event.preventDefault();
                                        updateCarousel(index);
                                    }
                                });
                            });

                            updateCarousel(currentIndex);
                        });
                    };

                    initCarousels(${scopeVarName});
`;

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

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-mb-l">
                <div class="${isInverse ? 'ux4g-bg-neutral-stronger' : 'ux4g-bg-white'} ux4g-p-l">
                    ${htmlContent}
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
                    if (!section) return;

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

                    if (toggleBtn) {
                        toggleBtn.onclick = () => {
                            const isHidden = codeArea.style.display === 'none';
                            codeArea.style.display = isHidden ? 'block' : 'none';
                            toggleBtn.textContent = isHidden ? 'Hide Code' : 'Show Code';
                            if (isHidden) highlight();
                        };
                    }

                    tabs.forEach((tab) => {
                        tab.onclick = () => {
                            tabs.forEach((item) => item.classList.remove('is-active'));
                            tab.classList.add('is-active');
                            currentLang = tab.dataset.lang;
                            highlight();
                        };
                    });

                    if (copyBtn) {
                        copyBtn.onclick = () => {
                            navigator.clipboard.writeText(output.textContent).then(() => {
                                const original = copyBtn.innerHTML;
                                copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
                                setTimeout(() => {
                                    copyBtn.innerHTML = original;
                                }, 2000);
                            });
                        };
                    }

${getCarouselSetupScript('section')}

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

// --- Carousel HTML Content ---

const CAROUSEL_DEFAULT_HTML = `
<div class="ux4g-carousel ux4g-bg-primary" aria-label="Default announcement carousel" aria-roledescription="carousel">
    <div class="ux4g-carousel-viewport">
        <div class="ux4g-carousel-slides">
            <div class="ux4g-carousel-slide is-active">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs">Slide 1</h2>
                <p class="ux4g-title-s-default">(Replace with desired banner content)</p>
            </div>
            <div class="ux4g-carousel-slide">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs">Slide 2</h2>
                <p class="ux4g-title-s-default">(Replace with desired banner content)</p>
            </div>
            <div class="ux4g-carousel-slide">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs">Slide 3</h2>
                <p class="ux4g-title-s-default">(Replace with desired banner content)</p>
            </div>
            <div class="ux4g-carousel-slide">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs">Slide 4</h2>
                <p class="ux4g-title-s-default">(Replace with desired banner content)</p>
            </div>
        </div>
    </div>

    <div class="ux4g-carousel-controls">
        <button type="button" class="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
            <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
        </button>
        <div class="ux4g-carousel-pagination" aria-label="Carousel pagination">
            <div class="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
            <div class="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
            <div class="ux4g-carousel-dot" aria-label="Go to slide 3"></div>
            <div class="ux4g-carousel-dot" aria-label="Go to slide 4"></div>
        </div>
        <button type="button" class="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
            <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
        </button>
    </div>
</div>
`;

const CAROUSEL_WITH_IMAGES_HTML = `
<div class="ux4g-carousel ux4g-bg-primary" aria-label="Editorial image carousel" aria-roledescription="carousel">
    <div class="ux4g-carousel-viewport">
        <div class="ux4g-carousel-slides">
            <div class="ux4g-carousel-slide is-active">
                <img src="https://picsum.photos/id/1018/1200/600" alt="Mountain sunset landscape">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs ux4g-text-white">Scenic Mountains</h2>
                <p class="ux4g-title-s-default ux4g-text-white">Experience the serenity of nature at dusk.</p>
            </div>
            <div class="ux4g-carousel-slide">
                <img src="https://picsum.photos/id/1015/1200/600" alt="City skyline at night">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs ux4g-text-white">Urban Nightlife</h2>
                <p class="ux4g-title-s-default ux4g-text-white">The vibrant pulse of the city after dark.</p>
            </div>
            <div class="ux4g-carousel-slide">
                <img src="https://picsum.photos/id/1019/1200/600" alt="Lush green forest">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs ux4g-text-white">Deep Forest</h2>
                <p class="ux4g-title-s-default ux4g-text-white">Breathe in the freshness of the ancient woods.</p>
            </div>
            <div class="ux4g-carousel-slide">
                <img src="https://picsum.photos/id/1020/1200/600" alt="Abstract geometric background">
                <h2 class="ux4g-heading-l-strong ux4g-mb-xs ux4g-text-white">Abstract Art</h2>
                <p class="ux4g-title-s-default ux4g-text-white">Modern geometric shapes and soft colors.</p>
            </div>
        </div>
    </div>

    <div class="ux4g-carousel-controls ux4g-carousel-filled">
        <button type="button" class="ux4g-carousel-arrow ux4g-carousel-arrow-prev" aria-label="Previous slide">
            <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_left</span>
        </button>
        <div class="ux4g-carousel-pagination" aria-label="Carousel pagination">
            <div class="ux4g-carousel-dot is-active" aria-label="Go to slide 1"></div>
            <div class="ux4g-carousel-dot" aria-label="Go to slide 2"></div>
            <div class="ux4g-carousel-dot" aria-label="Go to slide 3"></div>
            <div class="ux4g-carousel-dot" aria-label="Go to slide 4"></div>
        </div>
        <button type="button" class="ux4g-carousel-arrow ux4g-carousel-arrow-next" aria-label="Next slide">
            <span class="ux4g-icon-outlined ux4g-text-primary ux4g-fs-20">chevron_right</span>
        </button>
    </div>
</div>
`;

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="carousel-intro-container">
        ${getHeroHeader('Carousel', 'Carousel patterns support rotating hero messages, campaigns, and visual highlights while preserving a compact layout.')}

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Two common carousel layouts are included here: a text-first promotional banner and an image-led storytelling surface.</p>

                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Default Carousel</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            ${CAROUSEL_DEFAULT_HTML}
                        </div>
                    </div>

                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Carousel With Images</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            ${CAROUSEL_WITH_IMAGES_HTML}
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-3xl">
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-s">When To Use</h3>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-m">Use the text-first variant for service notices, product updates, or featured announcements where copy leads the message.</p>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-m-none">Use the image variant for campaigns, editorial stories, or destination highlights where photography sets the tone.</p>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-s">Authoring Guidance</h3>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-m">Keep slide counts concise so users can scan quickly, and make every slide title meaningful when read in isolation.</p>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-m-none">For image slides, choose high-contrast visuals because the overlay is designed to support white text without additional utility overrides.</p>
                    </div>
                </div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy the base classes used to build the carousel structure and controls.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structural Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-carousel', label: 'Base Carousel' },
        { class: 'ux4g-carousel-viewport', label: 'Viewport Mask' },
        { class: 'ux4g-carousel-slides', label: 'Sliding Track' },
        { class: 'ux4g-carousel-slide', label: 'Single Slide' }
    ].map((row) => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${row.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}">
                                                            <span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span>
                                                        </button>
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
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Control Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-carousel-controls', label: 'Controls Wrapper' },
        { class: 'ux4g-carousel-arrow', label: 'Arrow Button' },
        { class: 'ux4g-carousel-pagination', label: 'Pagination Wrapper' },
        { class: 'ux4g-carousel-dot', label: 'Pagination Dot' },
        { class: 'ux4g-carousel-filled', label: 'Filled Mobile Controls' }
    ].map((row) => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-column">
                                                            <span class="ux4g-label-s-strong">${row.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}">
                                                            <span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span>
                                                        </button>
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
                const intro = document.getElementById('carousel-intro-container');
                if (!intro) return;

${getCarouselSetupScript('intro')}

                const copyBtns = intro.querySelectorAll('.copy-text');
                copyBtns.forEach((btn) => {
                    btn.onclick = () => {
                        const text = btn.dataset.text;
                        navigator.clipboard.writeText(text).then(() => {
                            const original = btn.innerHTML;
                            btn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-success">check</span>';
                            setTimeout(() => {
                                btn.innerHTML = original;
                            }, 2000);
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

export const DefaultCarousel = {
    name: 'Default Carousel',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Default Carousel', 'A text-led banner carousel for announcements, highlights, and rotating messaging.')}
            <div class="ux4g-container ux4g-p-l">
                ${renderDemoCodeBlock('carousel-default', 'Default Example', 'Matches the text-only carousel pattern from the pattern library.', CAROUSEL_DEFAULT_HTML, false, getSnippetCode([{ label: 'Carousel - Default Example', html: CAROUSEL_DEFAULT_HTML }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const CarouselWithImages = {
    name: 'Carousel With Images',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Carousel With Images', 'An image-led storytelling carousel with filled controls for mobile presentation.')}
            <div class="ux4g-container ux4g-p-l">
                ${renderDemoCodeBlock('carousel-images', 'Image Example', 'Matches the image carousel pattern from the pattern library using local assets.', CAROUSEL_WITH_IMAGES_HTML, false, getSnippetCode([{ label: 'Carousel - Image Example', html: CAROUSEL_WITH_IMAGES_HTML }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
