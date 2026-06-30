/**
 * Image Component Stories
 * 
 * Showcasing different types of image treatments: Sharp, Rounded, and Overlays.
 * Version: 3.0.1 (Fixed duplicate exports)
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Image',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Images with utility-first aspect ratios and overlay capabilities.',
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

const getReactCode = (html) => htmlToJsx(html, 'Image');
const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null, gridClass = 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-4') => {
    const rawContent = customCode || htmlContent;
    const lines = rawContent.split('\n');
    const nonBlankLines = lines.filter(line => line.trim().length > 0);
    const minIndent = nonBlankLines.length > 0 
        ? Math.min(...nonBlankLines.map(line => line.match(/^\s*/)[0].length))
        : 0;
    const displayCode = lines.map(line => line.substring(minIndent)).join('\n').trim();

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Image</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Utility-first images with support for consistent aspect ratios, corner treatments, and rich content overlays. Designed for professional portal layouts.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various aspect ratios and semantic overlays.</p>
                    
                    <!-- Sharp Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Sharp & Overlays</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-4 ux4g-gap-l">
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center">
                                        <img class="ux4g-img ux4g-ratio-1-1" src="https://picsum.photos/seed/img1/1200/800" />
                                        <span class="ux4g-mt-s ux4g-fs-14">Sharp 1:1</span>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center">
                                        <img class="ux4g-img ux4g-ratio-16-9" src="https://picsum.photos/seed/img2/1200/800" />
                                        <span class="ux4g-mt-s ux4g-fs-14">Sharp 16:9</span>
                                    </div>
                                    <div class="ux4g-img-overlay ux4g-ratio-1-1">
                                        <img class="ux4g-img" src="https://picsum.photos/seed/img3/1200/800" />
                                        <div class="ux4g-img-overlay-bottom">
                                            <div class="ux4g-img-overlay-content">
                                                <div class="ux4g-heading-xs-default ux4g-mb-xs">Bottom Title</div>
                                                <div class="ux4g-body-xs-default ux4g-opacity-80">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ux4g-img-overlay ux4g-ratio-1-1">
                                        <img class="ux4g-img" src="https://picsum.photos/seed/img4/1200/800" />
                                        <div class="ux4g-img-overlay-top">
                                            <div class="ux4g-img-overlay-content">
                                                <div class="ux4g-heading-xs-default ux4g-mb-xs">Top Title</div>
                                                <div class="ux4g-body-xs-default ux4g-opacity-80">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Rounded Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Rounded & Full Height</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-4 ux4g-gap-l">
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center">
                                        <img class="ux4g-img ux4g-img-rounded ux4g-ratio-1-1" src="https://picsum.photos/seed/img5/1200/800" />
                                        <span class="ux4g-mt-s ux4g-fs-14">Rounded 1:1</span>
                                    </div>
                                    <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center">
                                        <img class="ux4g-img ux4g-img-rounded ux4g-ratio-16-9" src="https://picsum.photos/seed/img6/1200/800" />
                                        <span class="ux4g-mt-s ux4g-fs-14">Rounded 16:9</span>
                                    </div>
                                    <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-1-1">
                                        <img class="ux4g-img" src="https://picsum.photos/seed/img7/1200/800" />
                                        <div class="ux4g-img-overlay-bottom ux4g-h-100">
                                            <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                                                <div class="ux4g-heading-xs-default ux4g-mb-xs">Full Height Overlay</div>
                                                <div class="ux4g-body-xs-default ux4g-opacity-80">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-3-4">
                                        <img class="ux4g-img" src="https://picsum.photos/seed/img8/1200/800" />
                                        <div class="ux4g-img-overlay-bottom">
                                            <div class="ux4g-img-overlay-content">
                                                <div class="ux4g-heading-xs-default ux4g-mb-xs">Descriptive Label</div>
                                                <div class="ux4g-body-xs-default ux4g-opacity-80">Sunt in culpa qui officia deserunt mollit anim id est laborum. Nam libero tempore, cum soluta nobis est eligendi optio cumque.</div>
                                            </div>
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
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy aspect ratio and treatment utilities for images.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Ratio Utilities -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Aspect Ratio Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${['1-1', '4-3', '3-2', '16-10', '16-9', '2-1', '5-2', '3-1', '2-3', '3-4'].map(r => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <code class="ux4g-text-primary">ux4g-ratio-${r}</code>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="ux4g-ratio-${r}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
                                                    </div>
                                                </td>
                                            </tr>
                                            `).join('')}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <!-- Treatment Utilities -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Treatment & Overlay Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-img-rounded', label: 'Rounded Corners (12px)' },
                                                { class: 'ux4g-img-overlay', label: 'Overlay Container' },
                                                { class: 'ux4g-img-overlay-top', label: 'Overlay Position Top' },
                                                { class: 'ux4g-img-overlay-bottom', label: 'Overlay Position Bottom' },
                                                { class: 'ux4g-h-100', label: 'Full Height Overlay (on position)' }
                                            ].map(t => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${t.label}</span>
                                                            <code class="ux4g-text-primary">${t.class}</code>
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

export const SharpRatios = {
    render: () => {
        const baseRatios = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="1:1" class="ux4g-img ux4g-ratio-1-1" src="https://picsum.photos/seed/s1/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="4:3" class="ux4g-img ux4g-ratio-4-3" src="https://picsum.photos/seed/s2/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="3:2" class="ux4g-img ux4g-ratio-3-2" src="https://picsum.photos/seed/s3/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:2</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="16:10" class="ux4g-img ux4g-ratio-16-10" src="https://picsum.photos/seed/s4/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">16:10</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="16:9" class="ux4g-img ux4g-ratio-16-9" src="https://picsum.photos/seed/s5/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">16:9</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="2:1" class="ux4g-img ux4g-ratio-2-1" src="https://picsum.photos/seed/s6/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">2:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="5:2" class="ux4g-img ux4g-ratio-5-2" src="https://picsum.photos/seed/s7/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">5:2</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="3:1" class="ux4g-img ux4g-ratio-3-1" src="https://picsum.photos/seed/s8/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="1:1.6" class="ux4g-img ux4g-ratio-1-16" src="https://picsum.photos/seed/s9/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1.6</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="2:3" class="ux4g-img ux4g-ratio-2-3" src="https://picsum.photos/seed/s10/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">2:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="3:4" class="ux4g-img ux4g-ratio-3-4" src="https://picsum.photos/seed/s11/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:4</span>
            </div>
        `;

        const bottomOverlayHtml = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-1-1">
                    <img alt="1:1" class="ux4g-img" src="https://picsum.photos/seed/ob1/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-4-3">
                    <img alt="4:3" class="ux4g-img" src="https://picsum.photos/seed/ob2/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-3-1">
                    <img alt="3:1" class="ux4g-img" src="https://picsum.photos/seed/ob3/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-5-2">
                    <img alt="5:2" class="ux4g-img" src="https://picsum.photos/seed/ob4/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">5:2</span>
            </div>
        `;

        const topOverlayHtml = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-1-1">
                    <img alt="1:1" class="ux4g-img" src="https://picsum.photos/seed/ot1/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-4-3">
                    <img alt="4:3" class="ux4g-img" src="https://picsum.photos/seed/ot2/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-3-1">
                    <img alt="3:1" class="ux4g-img" src="https://picsum.photos/seed/ot3/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-5-2">
                    <img alt="5:2" class="ux4g-img" src="https://picsum.photos/seed/ot4/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">5:2</span>
            </div>
        `;

        const fullHeightHtml = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-1-1">
                    <img alt="1:1" class="ux4g-img" src="https://picsum.photos/seed/of1/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-4-3">
                    <img alt="4:3" class="ux4g-img" src="https://picsum.photos/seed/of2/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-3-4">
                    <img alt="3:4" class="ux4g-img" src="https://picsum.photos/seed/of3/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:4</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-ratio-16-9">
                    <img alt="16:9" class="ux4g-img" src="https://picsum.photos/seed/of4/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">16:9</span>
            </div>
        `;

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Sharp Ratios', 'Clean, square-edged image ratios with 0px border radius.')}
                <div class="ux4g-p-m">
                    ${renderDemoCodeBlock('sharp-base', 'Sharp Aspect Ratios', 'Predefined utility classes for consistent sharp image containers.', baseRatios, false, getSnippetCode([
                        { label: 'Sharp Image Ratio - 1:1', html: '<img alt="1:1" class="ux4g-img ux4g-ratio-1-1" src="https://picsum.photos/seed/sr1/1200/800" />' },
                        { label: 'Sharp Image Ratio - 4:3', html: '<img alt="4:3" class="ux4g-img ux4g-ratio-4-3" src="https://picsum.photos/seed/sr2/1200/800" />' },
                        { label: 'Sharp Image Ratio - 3:2', html: '<img alt="3:2" class="ux4g-img ux4g-ratio-3-2" src="https://picsum.photos/seed/sr3/1200/800" />' },
                        { label: 'Sharp Image Ratio - 16:10', html: '<img alt="16:10" class="ux4g-img ux4g-ratio-16-10" src="https://picsum.photos/seed/sr4/1200/800" />' },
                        { label: 'Sharp Image Ratio - 16:9', html: '<img alt="16:9" class="ux4g-img ux4g-ratio-16-9" src="https://picsum.photos/seed/sr5/1200/800" />' },
                        { label: 'Sharp Image Ratio - 2:1', html: '<img alt="2:1" class="ux4g-img ux4g-ratio-2-1" src="https://picsum.photos/seed/sr6/1200/800" />' },
                        { label: 'Sharp Image Ratio - 5:2', html: '<img alt="5:2" class="ux4g-img ux4g-ratio-5-2" src="https://picsum.photos/seed/sr7/1200/800" />' },
                        { label: 'Sharp Image Ratio - 3:1', html: '<img alt="3:1" class="ux4g-img ux4g-ratio-3-1" src="https://picsum.photos/seed/sr8/1200/800" />' },
                        { label: 'Sharp Image Ratio - 1:1.6', html: '<img alt="1:1.6" class="ux4g-img ux4g-ratio-1-16" src="https://picsum.photos/seed/sr9/1200/800" />' },
                        { label: 'Sharp Image Ratio - 2:3', html: '<img alt="2:3" class="ux4g-img ux4g-ratio-2-3" src="https://picsum.photos/seed/sr10/1200/800" />' },
                        { label: 'Sharp Image Ratio - 3:4', html: '<img alt="3:4" class="ux4g-img ux4g-ratio-3-4" src="https://picsum.photos/seed/sr11/1200/800" />' },
                    ]))}
                    ${renderDemoCodeBlock('sharp-bottom', 'Overlay Bottom (Sharp)', 'Bottom-aligned overlays with integrated icons and descriptions.', bottomOverlayHtml, false, null, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-2')}
                    ${renderDemoCodeBlock('sharp-top', 'Overlay Top (Sharp)', 'Top-aligned overlays with integrated icons and descriptions.', topOverlayHtml, false, null, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-2')}
                    ${renderDemoCodeBlock('sharp-full', 'Full Height Overlay (Sharp)', 'Full-height overlays using the ux4g-h-100 utility in a grid.', fullHeightHtml, false, null, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-2')}
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};

export const RoundedRatios = {
    render: () => {
        const baseRatios = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="1:1" class="ux4g-img ux4g-img-rounded ux4g-ratio-1-1" src="https://picsum.photos/seed/rs1/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="4:3" class="ux4g-img ux4g-img-rounded ux4g-ratio-4-3" src="https://picsum.photos/seed/rs2/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="3:2" class="ux4g-img ux4g-img-rounded ux4g-ratio-3-2" src="https://picsum.photos/seed/rs3/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:2</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="16:10" class="ux4g-img ux4g-img-rounded ux4g-ratio-16-10" src="https://picsum.photos/seed/rs4/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">16:10</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="16:9" class="ux4g-img ux4g-img-rounded ux4g-ratio-16-9" src="https://picsum.photos/seed/rs5/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">16:9</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="2:1" class="ux4g-img ux4g-img-rounded ux4g-ratio-2-1" src="https://picsum.photos/seed/rs6/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">2:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="5:2" class="ux4g-img ux4g-img-rounded ux4g-ratio-5-2" src="https://picsum.photos/seed/rs7/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">5:2</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="3:1" class="ux4g-img ux4g-img-rounded ux4g-ratio-3-1" src="https://picsum.photos/seed/rs8/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="1:1.6" class="ux4g-img ux4g-img-rounded ux4g-ratio-1-16" src="https://picsum.photos/seed/rs9/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1.6</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="2:3" class="ux4g-img ux4g-img-rounded ux4g-ratio-2-3" src="https://picsum.photos/seed/rs10/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">2:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <img alt="3:4" class="ux4g-img ux4g-img-rounded ux4g-ratio-3-4" src="https://picsum.photos/seed/rs11/1200/800" />
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:4</span>
            </div>
        `;

        const bottomOverlayHtml = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-1-1">
                    <img alt="1:1" class="ux4g-img" src="https://picsum.photos/seed/rob1/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-4-3">
                    <img alt="4:3" class="ux4g-img" src="https://picsum.photos/seed/rob2/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-3-1">
                    <img alt="3:1" class="ux4g-img" src="https://picsum.photos/seed/rob3/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-5-2">
                    <img alt="5:2" class="ux4g-img" src="https://picsum.photos/seed/rob4/1200/800" />
                    <div class="ux4g-img-overlay-bottom">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">5:2</span>
            </div>
        `;

        const topOverlayHtml = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-1-1">
                    <img alt="1:1" class="ux4g-img" src="https://picsum.photos/seed/rot1/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-4-3">
                    <img alt="4:3" class="ux4g-img" src="https://picsum.photos/seed/rot2/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-3-1">
                    <img alt="3:1" class="ux4g-img" src="https://picsum.photos/seed/rot3/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-5-2">
                    <img alt="5:2" class="ux4g-img" src="https://picsum.photos/seed/rot4/1200/800" />
                    <div class="ux4g-img-overlay-top">
                        <div class="ux4g-img-overlay-content">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-xs-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">5:2</span>
            </div>
        `;

        const fullHeightHtml = `
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-1-1">
                    <img alt="1:1" class="ux4g-img" src="https://picsum.photos/seed/rof1/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">1:1</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-4-3">
                    <img alt="4:3" class="ux4g-img" src="https://picsum.photos/seed/rof2/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">4:3</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-3-4">
                    <img alt="3:4" class="ux4g-img" src="https://picsum.photos/seed/rof3/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">3:4</span>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-w-100">
                <div class="ux4g-img-overlay ux4g-img-rounded ux4g-ratio-16-9">
                    <img alt="16:9" class="ux4g-img" src="https://picsum.photos/seed/rof4/1200/800" />
                    <div class="ux4g-img-overlay-top ux4g-h-100">
                        <div class="ux4g-img-overlay-content ux4g-d-flex ux4g-flex-col ux4g-jc-center">
                            <div class="ux4g-heading-xs-default">Title</div>
                            <div class="ux4g-body-s-default">
                                Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development.
                            </div>
                        </div>
                        <i class="ux4g-icon-outlined ux4g-fs-20">token</i>
                    </div>
                </div>
                <span class="ux4g-mt-s ux4g-fs-14 ux4g-text-neutral-secondary">16:9</span>
            </div>
        `;

        return `
            <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
                ${getHeroHeader('Rounded Ratios', 'Modern corner treatments (12px radius) applied to aspect ratio containers.')}
                <div class="ux4g-p-m">
                    ${renderDemoCodeBlock('rounded-base', 'Rounded Aspect Ratios', 'Predefined utility classes with soft 12px corners.', baseRatios, false, getSnippetCode([
                        { label: 'Rounded Image Ratio - 1:1', html: '<img alt="1:1" class="ux4g-img ux4g-img-rounded ux4g-ratio-1-1" src="https://picsum.photos/seed/rs1/1200/800" />' },
                        { label: 'Rounded Image Ratio - 4:3', html: '<img alt="4:3" class="ux4g-img ux4g-img-rounded ux4g-ratio-4-3" src="https://picsum.photos/seed/rs2/1200/800" />' },
                        { label: 'Rounded Image Ratio - 3:2', html: '<img alt="3:2" class="ux4g-img ux4g-img-rounded ux4g-ratio-3-2" src="https://picsum.photos/seed/rs3/1200/800" />' },
                        { label: 'Rounded Image Ratio - 16:10', html: '<img alt="16:10" class="ux4g-img ux4g-img-rounded ux4g-ratio-16-10" src="https://picsum.photos/seed/rs4/1200/800" />' },
                        { label: 'Rounded Image Ratio - 16:9', html: '<img alt="16:9" class="ux4g-img ux4g-img-rounded ux4g-ratio-16-9" src="https://picsum.photos/seed/rs5/1200/800" />' },
                        { label: 'Rounded Image Ratio - 2:1', html: '<img alt="2:1" class="ux4g-img ux4g-img-rounded ux4g-ratio-2-1" src="https://picsum.photos/seed/rs6/1200/800" />' },
                        { label: 'Rounded Image Ratio - 5:2', html: '<img alt="5:2" class="ux4g-img ux4g-img-rounded ux4g-ratio-5-2" src="https://picsum.photos/seed/rs7/1200/800" />' },
                        { label: 'Rounded Image Ratio - 3:1', html: '<img alt="3:1" class="ux4g-img ux4g-img-rounded ux4g-ratio-3-1" src="https://picsum.photos/seed/rs8/1200/800" />' },
                        { label: 'Rounded Image Ratio - 1:1.6', html: '<img alt="1:1.6" class="ux4g-img ux4g-img-rounded ux4g-ratio-1-16" src="https://picsum.photos/seed/rs9/1200/800" />' },
                        { label: 'Rounded Image Ratio - 2:3', html: '<img alt="2:3" class="ux4g-img ux4g-img-rounded ux4g-ratio-2-3" src="https://picsum.photos/seed/rs10/1200/800" />' },
                        { label: 'Rounded Image Ratio - 3:4', html: '<img alt="3:4" class="ux4g-img ux4g-img-rounded ux4g-ratio-3-4" src="https://picsum.photos/seed/rs11/1200/800" />' },
                    ]))}
                    ${renderDemoCodeBlock('rounded-bottom', 'Overlay Bottom (Rounded)', 'Bottom-aligned overlays with integrated icons and rounded treatments.', bottomOverlayHtml, false, null, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-2')}
                    ${renderDemoCodeBlock('rounded-top', 'Overlay Top (Rounded)', 'Top-aligned overlays with integrated icons and rounded treatments.', topOverlayHtml, false, null, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-2')}
                    ${renderDemoCodeBlock('rounded-full', 'Full Height Overlay (Rounded)', 'Full-height overlays on rounded images using ux4g-h-100 in a grid.', fullHeightHtml, false, null, 'ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-2')}
                </div>
            </div>
        `;
    },
    parameters: {
        docs: { disable: true },
    },
};
