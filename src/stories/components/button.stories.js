/**
 * Button Component Stories
 * 
 * Showcasing different types of Buttons: Primary, Danger, and Icon Buttons with various styles and states.
 * Version: 1.0.0
 */

export default {
    title: 'UX4G/Components/Buttons',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Buttons allow users to take actions, and make choices, with a single tap.',
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

import { formatCode, htmlToJsx } from '../utils/formatCode';

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

const getReactCode = (html) => htmlToJsx(html, 'Button');

const getSnippetCode = (entries) => entries.map(({ label, markup }) => `<!-- Variant: ${label} -->\n${markup}`).join('\n\n');

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Buttons</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Buttons are essential UI elements that trigger actions or navigation. They come in various styles, sizes, and states to provide clear visual cues and affordance for user interaction.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various button variants including Primary, Danger, and Icon styles.</p>
                    
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                        <!-- Primary Variants Showcase -->
                        <div class="ux4g-mb-2xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Button Variants</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                        <button class="ux4g-btn-primary">Filled</button>
                                        <button class="ux4g-btn-outline-primary">Outline</button>
                                        <button class="ux4g-btn-tonal-primary">Tonal</button>
                                        <button class="ux4g-btn-text-primary">Text</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Button Sizes Showcase -->
                        <div class="ux4g-mb-2xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Button Sizes</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-d-flex ux4g-ai-end ux4g-gap-m ux4g-flex-wrap">
                                        <button class="ux4g-btn-primary ux4g-btn-xl">XL</button>
                                        <button class="ux4g-btn-primary ux4g-btn-lg">L</button>
                                        <button class="ux4g-btn-primary">MD</button>
                                        <button class="ux4g-btn-primary ux4g-btn-sm">SM</button>
                                        <button class="ux4g-btn-primary ux4g-btn-xs">XS</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Icon Button Variants Showcase -->
                        <div class="ux4g-mb-2xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Icon Variants</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                        <button class="ux4g-icon-btn ux4g-icon-btn-primary"><i class="ux4g-icon-outlined">home</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-outline-primary"><i class="ux4g-icon-outlined">search</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-tonal-primary"><i class="ux4g-icon-outlined">edit</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-text-primary"><i class="ux4g-icon-outlined">settings</i></button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Icon Button Sizes Showcase -->
                        <div class="ux4g-mb-2xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Icon Sizes</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-d-flex ux4g-ai-end ux4g-gap-m ux4g-flex-wrap">
                                        <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-xl"><i class="ux4g-icon-outlined ux4g-fs-24">home</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-lg"><i class="ux4g-icon-outlined ux4g-fs-20">home</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-primary"><i class="ux4g-icon-outlined ux4g-fs-18">home</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-sm"><i class="ux4g-icon-outlined ux4g-fs-16">home</i></button>
                                        <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-xs"><i class="ux4g-icon-outlined ux4g-fs-14">home</i></button>
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
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Buttons.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Variant Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Button Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-btn-primary', label: 'Primary (Filled)' },
                                                { class: 'ux4g-btn-outline-primary', label: 'Primary Outline' },
                                                { class: 'ux4g-btn-tonal-primary', label: 'Primary Tonal' },
                                                { class: 'ux4g-btn-text-primary', label: 'Primary Text' },
                                                { class: 'ux4g-btn-danger', label: 'Danger (Filled)' },
                                                { class: 'ux4g-btn-outline-danger', label: 'Danger Outline' },
                                                { class: 'ux4g-btn-text-danger', label: 'Danger Text' },
                                                { class: 'ux4g-btn-outline-neutral', label: 'Neutral Outline' },
                                                { class: 'ux4g-btn-text-neutral', label: 'Neutral Text' },
                                                { class: 'ux4g-radius-full', label: 'Pill Shape' }
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

                        <!-- Size Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Button Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-btn-xl', label: 'Extra Large ' },
                                                { class: 'ux4g-btn-lg', label: 'Large ' },
                                                { class: 'ux4g-btn-md', label: 'Medium  [Default]' },
                                                { class: 'ux4g-btn-sm', label: 'Small ' },
                                                { class: 'ux4g-btn-xs', label: 'Extra Small' }
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

                        <!-- Icon Button Variants -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Icon Button Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-icon-btn', label: 'Base Icon Button' },
                                                { class: 'ux4g-icon-btn-primary', label: 'Filled Variant' },
                                                { class: 'ux4g-icon-btn-outline-primary', label: 'Outline Variant' },
                                                { class: 'ux4g-icon-btn-tonal-primary', label: 'Tonal Variant' },
                                                { class: 'ux4g-icon-btn-text-primary', label: 'Text Variant' },
                                                { class: 'ux4g-icon-btn-pill', label: 'Circular (Pill)' }
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

                        <!-- Icon Button Sizes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Icon Button Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-icon-btn-xl', label: 'Extra Large ' },
                                                { class: 'ux4g-icon-btn-lg', label: 'Large ' },
                                                { class: 'ux4g-icon-btn-md', label: 'Medium  [Default]' },
                                                { class: 'ux4g-icon-btn-sm', label: 'Small ' },
                                                { class: 'ux4g-icon-btn-xs', label: 'Extra Small' }
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

export const PrimaryButtons = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Primary Buttons', 'The main call-to-action buttons for the interface.')}
            <div class="ux4g-p-m">
                <!-- 1. Rectangle Buttons -->
                ${renderDemoCodeBlock('primary-rectangle', '1. Rectangle Buttons', 'Standard rectangular primary buttons with variant styles and disabled state.', `
                    <button class="ux4g-btn-primary">Filled</button>
                    <button class="ux4g-btn-outline-primary">Outline</button>
                    <button class="ux4g-btn-tonal-primary">Tonal</button>
                    <button class="ux4g-btn-text-primary">Text</button>
                    <button class="ux4g-btn-primary" disabled>Disabled</button>
                `, false, getSnippetCode([
                    { label: 'Primary Button - Filled', markup: '<button class="ux4g-btn-primary">Filled</button>' },
                    { label: 'Primary Button - Outline', markup: '<button class="ux4g-btn-outline-primary">Outline</button>' },
                    { label: 'Primary Button - Tonal', markup: '<button class="ux4g-btn-tonal-primary">Tonal</button>' },
                    { label: 'Primary Button - Text', markup: '<button class="ux4g-btn-text-primary">Text</button>' },
                    { label: 'Primary Button - Disabled', markup: '<button class="ux4g-btn-primary" disabled>Disabled</button>' },
                ]))}

                <!-- 2. Pill Buttons -->
                ${renderDemoCodeBlock('primary-pill', '2. Pill Buttons', 'Rounded pill-shaped primary buttons with variant styles and disabled state.', `
                    <button class="ux4g-btn-primary ux4g-radius-full">Solid</button>
                    <button class="ux4g-btn-outline-primary ux4g-radius-full">Outline</button>
                    <button class="ux4g-btn-tonal-primary ux4g-radius-full">Tonal</button>
                    <button class="ux4g-btn-text-primary ux4g-radius-full">Text</button>
                    <button class="ux4g-btn-primary ux4g-radius-full" disabled>Disabled</button>
                `, false, getSnippetCode([
                    { label: 'Primary Pill Button - Filled', markup: '<button class="ux4g-btn-primary ux4g-radius-full">Solid</button>' },
                    { label: 'Primary Pill Button - Outline', markup: '<button class="ux4g-btn-outline-primary ux4g-radius-full">Outline</button>' },
                    { label: 'Primary Pill Button - Tonal', markup: '<button class="ux4g-btn-tonal-primary ux4g-radius-full">Tonal</button>' },
                    { label: 'Primary Pill Button - Text', markup: '<button class="ux4g-btn-text-primary ux4g-radius-full">Text</button>' },
                    { label: 'Primary Pill Button - Disabled', markup: '<button class="ux4g-btn-primary ux4g-radius-full" disabled>Disabled</button>' },
                ]))}

                <!-- 3. Size -->
                ${renderDemoCodeBlock('primary-sizes', '3. Size', 'Primary buttons available in standard sizes.', `
                    <button class="ux4g-btn-primary ux4g-btn-xl">Primary XL</button>
                    <button class="ux4g-btn-primary ux4g-btn-lg">Primary L</button>
                    <button class="ux4g-btn-primary">Primary MD</button>
                    <button class="ux4g-btn-primary ux4g-btn-sm">Primary SM</button>
                    <button class="ux4g-btn-primary ux4g-btn-xs">Primary XS</button>
                `, false, getSnippetCode([
                    { label: 'Primary Button - Extra Large', markup: '<button class="ux4g-btn-primary ux4g-btn-xl">Primary XL</button>' },
                    { label: 'Primary Button - Large', markup: '<button class="ux4g-btn-primary ux4g-btn-lg">Primary L</button>' },
                    { label: 'Primary Button - Medium', markup: '<button class="ux4g-btn-primary">Primary MD</button>' },
                    { label: 'Primary Button - Small', markup: '<button class="ux4g-btn-primary ux4g-btn-sm">Primary SM</button>' },
                    { label: 'Primary Button - Extra Small', markup: '<button class="ux4g-btn-primary ux4g-btn-xs">Primary XS</button>' },
                ]))}

                <!-- 4. Buttons with Spinner -->
                ${renderDemoCodeBlock('primary-spinner', '4. Buttons with Spinner', 'Buttons showing an active loading state across all styles.', `
                    <button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-inverse-full ux4g-spinner-xs"></i>Filled
                    </button>
                    <button class="ux4g-btn-outline-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-primary-full ux4g-spinner-xs"></i>Outline
                    </button>
                    <button class="ux4g-btn-tonal-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-primary-full ux4g-spinner-xs"></i>Tonal
                    </button>
                    <button class="ux4g-btn-text-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-primary-full ux4g-spinner-xs"></i>Text
                    </button>
                `, false, getSnippetCode([
                    { label: 'Primary Button with Spinner - Filled', markup: '<button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-inverse-full ux4g-spinner-xs"></i>Filled</button>' },
                    { label: 'Primary Button with Spinner - Outline', markup: '<button class="ux4g-btn-outline-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-primary-full ux4g-spinner-xs"></i>Outline</button>' },
                    { label: 'Primary Button with Spinner - Tonal', markup: '<button class="ux4g-btn-tonal-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-primary-full ux4g-spinner-xs"></i>Tonal</button>' },
                    { label: 'Primary Button with Spinner - Text', markup: '<button class="ux4g-btn-text-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-primary-full ux4g-spinner-xs"></i>Text</button>' },
                ]))}

                <!-- 5. Buttons with Icon -->
                ${renderDemoCodeBlock('primary-icons', '5. Buttons with Icon', 'Buttons with leading or trailing icons for improved affordance.', `
                    <button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">check</i>Filled
                    </button>
                    <button class="ux4g-btn-outline-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        Outline<i class="ux4g-icon-outlined">arrow_forward</i>
                    </button>
                    <button class="ux4g-btn-tonal-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">edit</i>Tonal
                    </button>
                    <button class="ux4g-btn-text-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        Text<i class="ux4g-icon-outlined">settings</i>
                    </button>
                `, false, getSnippetCode([
                    { label: 'Primary Button with Icon - Filled', markup: '<button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">check</i>Filled</button>' },
                    { label: 'Primary Button with Icon - Outline', markup: '<button class="ux4g-btn-outline-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">Outline<i class="ux4g-icon-outlined">arrow_forward</i></button>' },
                    { label: 'Primary Button with Icon - Tonal', markup: '<button class="ux4g-btn-tonal-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">edit</i>Tonal</button>' },
                    { label: 'Primary Button with Icon - Text', markup: '<button class="ux4g-btn-text-primary ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">Text<i class="ux4g-icon-outlined">settings</i></button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const DangerButtons = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Danger Buttons', 'Buttons used for destructive or critical actions.')}
            <div class="ux4g-p-m">
                <!-- 1. Rectangle Buttons -->
                ${renderDemoCodeBlock('danger-rectangle', '1. Rectangle Buttons', 'Rectangular danger buttons with variant styles and disabled state.', `
                    <button class="ux4g-btn-danger">Filled</button>
                    <button class="ux4g-btn-outline-danger">Outline</button>
                    <button class="ux4g-btn-text-danger">Text</button>
                    <button class="ux4g-btn-danger" disabled>Disabled</button>
                `, false, getSnippetCode([
                    { label: 'Danger Button - Filled', markup: '<button class="ux4g-btn-danger">Filled</button>' },
                    { label: 'Danger Button - Outline', markup: '<button class="ux4g-btn-outline-danger">Outline</button>' },
                    { label: 'Danger Button - Text', markup: '<button class="ux4g-btn-text-danger">Text</button>' },
                    { label: 'Danger Button - Disabled', markup: '<button class="ux4g-btn-danger" disabled>Disabled</button>' },
                ]))}

                <!-- 2. Pill Buttons -->
                ${renderDemoCodeBlock('danger-pill', '2. Pill Buttons', 'Rounded pill-shaped danger buttons with variant styles and disabled state.', `
                    <button class="ux4g-btn-danger ux4g-radius-full">Solid</button>
                    <button class="ux4g-btn-outline-danger ux4g-radius-full">Outline</button>
                    <button class="ux4g-btn-text-danger ux4g-radius-full">Text</button>
                    <button class="ux4g-btn-danger ux4g-radius-full" disabled>Disabled</button>
                `, false, getSnippetCode([
                    { label: 'Danger Pill Button - Filled', markup: '<button class="ux4g-btn-danger ux4g-radius-full">Solid</button>' },
                    { label: 'Danger Pill Button - Outline', markup: '<button class="ux4g-btn-outline-danger ux4g-radius-full">Outline</button>' },
                    { label: 'Danger Pill Button - Text', markup: '<button class="ux4g-btn-text-danger ux4g-radius-full">Text</button>' },
                    { label: 'Danger Pill Button - Disabled', markup: '<button class="ux4g-btn-danger ux4g-radius-full" disabled>Disabled</button>' },
                ]))}

                <!-- 3. Size -->
                ${renderDemoCodeBlock('danger-sizes', '3. Size', 'Danger buttons available in standard sizes.', `
                    <button class="ux4g-btn-danger ux4g-btn-xl">Danger XL</button>
                    <button class="ux4g-btn-danger ux4g-btn-lg">Danger L</button>
                    <button class="ux4g-btn-danger">Danger MD</button>
                    <button class="ux4g-btn-danger ux4g-btn-sm">Danger SM</button>
                    <button class="ux4g-btn-danger ux4g-btn-xs">Danger XS</button>
                `, false, getSnippetCode([
                    { label: 'Danger Button - Extra Large', markup: '<button class="ux4g-btn-danger ux4g-btn-xl">Danger XL</button>' },
                    { label: 'Danger Button - Large', markup: '<button class="ux4g-btn-danger ux4g-btn-lg">Danger L</button>' },
                    { label: 'Danger Button - Medium', markup: '<button class="ux4g-btn-danger">Danger MD</button>' },
                    { label: 'Danger Button - Small', markup: '<button class="ux4g-btn-danger ux4g-btn-sm">Danger SM</button>' },
                    { label: 'Danger Button - Extra Small', markup: '<button class="ux4g-btn-danger ux4g-btn-xs">Danger XS</button>' },
                ]))}

                <!-- 4. Buttons with Spinner -->
                ${renderDemoCodeBlock('danger-spinner', '4. Buttons with Spinner', 'Danger buttons showing an active loading state.', `
                    <button class="ux4g-btn-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-inverse-full ux4g-spinner-xs"></i>Filled
                    </button>
                    <button class="ux4g-btn-outline-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-danger-full ux4g-spinner-xs"></i>Outline
                    </button>
                    <button class="ux4g-btn-text-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-danger-full ux4g-spinner-xs"></i>Text
                    </button>
                `, false, getSnippetCode([
                    { label: 'Danger Button with Spinner - Filled', markup: '<button class="ux4g-btn-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-inverse-full ux4g-spinner-xs"></i>Filled</button>' },
                    { label: 'Danger Button with Spinner - Outline', markup: '<button class="ux4g-btn-outline-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-danger-full ux4g-spinner-xs"></i>Outline</button>' },
                    { label: 'Danger Button with Spinner - Text', markup: '<button class="ux4g-btn-text-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-danger-full ux4g-spinner-xs"></i>Text</button>' },
                ]))}

                <!-- 5. Buttons with Icon -->
                ${renderDemoCodeBlock('danger-icons', '5. Buttons with Icon', 'Danger buttons with leading or trailing icons.', `
                    <button class="ux4g-btn-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">delete</i>Filled
                    </button>
                    <button class="ux4g-btn-outline-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        Outline<i class="ux4g-icon-outlined">warning</i>
                    </button>
                    <button class="ux4g-btn-text-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">close</i>Text
                    </button>
                `, false, getSnippetCode([
                    { label: 'Danger Button with Icon - Filled', markup: '<button class="ux4g-btn-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">delete</i>Filled</button>' },
                    { label: 'Danger Button with Icon - Outline', markup: '<button class="ux4g-btn-outline-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">Outline<i class="ux4g-icon-outlined">warning</i></button>' },
                    { label: 'Danger Button with Icon - Text', markup: '<button class="ux4g-btn-text-danger ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">close</i>Text</button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const NeutralButtons = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Neutral Buttons', 'Buttons used for secondary or neutral actions.')}
            <div class="ux4g-p-m">
                <!-- 1. Rectangle Buttons -->
                ${renderDemoCodeBlock('neutral-rectangle', '1. Rectangle Buttons', 'Rectangular neutral buttons with variant styles and disabled state.', `
                    <button class="ux4g-btn-outline-neutral">Outline</button>
                    <button class="ux4g-btn-text-neutral">Text</button>
                    <button class="ux4g-btn-outline-neutral" disabled>Disabled</button>
                `, false, getSnippetCode([
                    { label: 'Neutral Button - Outline', markup: '<button class="ux4g-btn-outline-neutral">Outline</button>' },
                    { label: 'Neutral Button - Text', markup: '<button class="ux4g-btn-text-neutral">Text</button>' },
                    { label: 'Neutral Button - Disabled', markup: '<button class="ux4g-btn-outline-neutral" disabled>Disabled</button>' },
                ]))}

                <!-- 2. Pill Buttons -->
                ${renderDemoCodeBlock('neutral-pill', '2. Pill Buttons', 'Rounded pill-shaped neutral buttons with variant styles and disabled state.', `
                    <button class="ux4g-btn-outline-neutral ux4g-radius-full">Outline</button>
                    <button class="ux4g-btn-text-neutral ux4g-radius-full">Text</button>
                    <button class="ux4g-btn-outline-neutral ux4g-radius-full" disabled>Disabled</button>
                `, false, getSnippetCode([
                    { label: 'Neutral Pill Button - Outline', markup: '<button class="ux4g-btn-outline-neutral ux4g-radius-full">Outline</button>' },
                    { label: 'Neutral Pill Button - Text', markup: '<button class="ux4g-btn-text-neutral ux4g-radius-full">Text</button>' },
                    { label: 'Neutral Pill Button - Disabled', markup: '<button class="ux4g-btn-outline-neutral ux4g-radius-full" disabled>Disabled</button>' },
                ]))}

                <!-- 3. Size -->
                ${renderDemoCodeBlock('neutral-sizes', '3. Size', 'Neutral buttons available in standard sizes.', `
                    <button class="ux4g-btn-outline-neutral ux4g-btn-xl">Neutral XL</button>
                    <button class="ux4g-btn-outline-neutral ux4g-btn-lg">Neutral L</button>
                    <button class="ux4g-btn-outline-neutral">Neutral MD</button>
                    <button class="ux4g-btn-outline-neutral ux4g-btn-sm">Neutral SM</button>
                    <button class="ux4g-btn-outline-neutral ux4g-btn-xs">Neutral XS</button>
                `, false, getSnippetCode([
                    { label: 'Neutral Button - Extra Large', markup: '<button class="ux4g-btn-outline-neutral ux4g-btn-xl">Neutral XL</button>' },
                    { label: 'Neutral Button - Large', markup: '<button class="ux4g-btn-outline-neutral ux4g-btn-lg">Neutral L</button>' },
                    { label: 'Neutral Button - Medium', markup: '<button class="ux4g-btn-outline-neutral">Neutral MD</button>' },
                    { label: 'Neutral Button - Small', markup: '<button class="ux4g-btn-outline-neutral ux4g-btn-sm">Neutral SM</button>' },
                    { label: 'Neutral Button - Extra Small', markup: '<button class="ux4g-btn-outline-neutral ux4g-btn-xs">Neutral XS</button>' },
                ]))}

                <!-- 4. Buttons with Spinner -->
                ${renderDemoCodeBlock('neutral-spinner', '4. Buttons with Spinner', 'Neutral buttons showing an active loading state.', `
                    <button class="ux4g-btn-outline-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-neutral-full ux4g-spinner-xs"></i>Outline
                    </button>
                    <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-spinner-neutral-full ux4g-spinner-xs"></i>Text
                    </button>
                `, false, getSnippetCode([
                    { label: 'Neutral Button with Spinner - Outline', markup: '<button class="ux4g-btn-outline-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-neutral-full ux4g-spinner-xs"></i>Outline</button>' },
                    { label: 'Neutral Button with Spinner - Text', markup: '<button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-spinner-neutral-full ux4g-spinner-xs"></i>Text</button>' },
                ]))}

                <!-- 5. Buttons with Icon -->
                ${renderDemoCodeBlock('neutral-icons', '5. Buttons with Icon', 'Neutral buttons with leading or trailing icons.', `
                    <button class="ux4g-btn-outline-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        Outline<i class="ux4g-icon-outlined">info</i>
                    </button>
                    <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">
                        <i class="ux4g-icon-outlined">info</i>Text
                    </button>
                `, false, getSnippetCode([
                    { label: 'Neutral Button with Icon - Outline', markup: '<button class="ux4g-btn-outline-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs">Outline<i class="ux4g-icon-outlined">info</i></button>' },
                    { label: 'Neutral Button with Icon - Text', markup: '<button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-xs"><i class="ux4g-icon-outlined">info</i>Text</button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const IconButtons = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Icon Buttons', 'Compact buttons that contain only icons.')}
            <div class="ux4g-p-m">
                <!-- 1. Rectangle Buttons -->
                ${renderDemoCodeBlock('icon-rectangle', '1. Rectangle Buttons', 'Square icon buttons with variant styles and disabled state.', `
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary"><i class="ux4g-icon-outlined">home</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-outline-primary"><i class="ux4g-icon-outlined">search</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-text-primary"><i class="ux4g-icon-outlined">settings</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary" disabled><i class="ux4g-icon-outlined">block</i></button>
                `, false, getSnippetCode([
                    { label: 'Icon Button - Rectangle - Filled', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary"><i class="ux4g-icon-outlined">home</i></button>' },
                    { label: 'Icon Button - Rectangle - Outline', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-outline-primary"><i class="ux4g-icon-outlined">search</i></button>' },
                    { label: 'Icon Button - Rectangle - Text', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-text-primary"><i class="ux4g-icon-outlined">settings</i></button>' },
                    { label: 'Icon Button - Rectangle - Disabled', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary" disabled><i class="ux4g-icon-outlined">block</i></button>' },
                ]))}

                <!-- 2. Pill Buttons -->
                ${renderDemoCodeBlock('icon-pill', '2. Pill Buttons', 'Circular icon buttons with variant styles and disabled state.', `
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">home</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">search</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">settings</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-pill" disabled><i class="ux4g-icon-outlined">block</i></button>
                `, false, getSnippetCode([
                    { label: 'Icon Button - Pill - Filled', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">home</i></button>' },
                    { label: 'Icon Button - Pill - Outline', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-outline-primary ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">search</i></button>' },
                    { label: 'Icon Button - Pill - Text', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-text-primary ux4g-icon-btn-pill"><i class="ux4g-icon-outlined">settings</i></button>' },
                    { label: 'Icon Button - Pill - Disabled', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-pill" disabled><i class="ux4g-icon-outlined">block</i></button>' },
                ]))}

                <!-- 3. Size -->
                ${renderDemoCodeBlock('icon-sizes', '3. Size', 'Icon buttons available in standard sizes.', `
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-xl"><i class="ux4g-icon-outlined ux4g-fs-24">home</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-lg"><i class="ux4g-icon-outlined ux4g-fs-20">home</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary"><i class="ux4g-icon-outlined ux4g-fs-18">home</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-sm"><i class="ux4g-icon-outlined ux4g-fs-16">home</i></button>
                    <button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-xs"><i class="ux4g-icon-outlined ux4g-fs-14">home</i></button>
                `, false, getSnippetCode([
                    { label: 'Icon Button - Extra Large', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-xl"><i class="ux4g-icon-outlined ux4g-fs-24">home</i></button>' },
                    { label: 'Icon Button - Large', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-lg"><i class="ux4g-icon-outlined ux4g-fs-20">home</i></button>' },
                    { label: 'Icon Button - Medium', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary"><i class="ux4g-icon-outlined ux4g-fs-18">home</i></button>' },
                    { label: 'Icon Button - Small', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-sm"><i class="ux4g-icon-outlined ux4g-fs-16">home</i></button>' },
                    { label: 'Icon Button - Extra Small', markup: '<button class="ux4g-icon-btn ux4g-icon-btn-primary ux4g-icon-btn-xs"><i class="ux4g-icon-outlined ux4g-fs-14">home</i></button>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

