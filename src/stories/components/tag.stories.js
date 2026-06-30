/**
 * Tag Component Stories
 * 
 * Showcasing different types of Tags: Tonal, Filled, Outline, and Text with size and shape variants.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Tags',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Tags are compact elements used to categorize, label, or display metadata for content.',
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

const getReactCode = (html) => htmlToJsx(html, 'Tag');

const getTagCode = (entries) => entries.map(({ label, markup }) => `<!-- Variant: ${label} -->\n${markup}`).join('\n\n');

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Tags</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Tags are compact elements used to categorize, label, or display metadata for content. They help in organizing information and providing quick visual cues about the nature of the associated item.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various tag variants including Tonal, Filled, Outline, and Text styles.</p>
                    
                    <!-- Tonal Tags Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Tonal Tags</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                    <span class="ux4g-tag-tonal-neutral"><i class="ux4g-icon-outlined ux4g-icon-neutral">token</i> Neutral</span>
                                    <span class="ux4g-tag-tonal-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                                    <span class="ux4g-tag-tonal-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                                    <span class="ux4g-tag-tonal-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                                    <span class="ux4g-tag-tonal-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                                    <span class="ux4g-tag-tonal-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Filled Tags Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Filled Tags</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                    <span class="ux4g-tag-filled-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                                    <span class="ux4g-tag-filled-primary"><i class="ux4g-icon-outlined">token</i> Brand</span>
                                    <span class="ux4g-tag-filled-success"><i class="ux4g-icon-outlined">token</i> Success</span>
                                    <span class="ux4g-tag-filled-warning"><i class="ux4g-icon-outlined">token</i> Warning</span>
                                    <span class="ux4g-tag-filled-error"><i class="ux4g-icon-outlined">token</i> Error</span>
                                    <span class="ux4g-tag-filled-info"><i class="ux4g-icon-outlined">token</i> Info</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Outline Tags Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Outline Tags</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                    <span class="ux4g-tag-outline-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                                    <span class="ux4g-tag-outline-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                                    <span class="ux4g-tag-outline-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                                    <span class="ux4g-tag-outline-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                                    <span class="ux4g-tag-outline-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                                    <span class="ux4g-tag-outline-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Text Tags Showcase -->
                    <div class="ux4g-mb-2xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Text Tags</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                    <span class="ux4g-tag-text-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                                    <span class="ux4g-tag-text-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                                    <span class="ux4g-tag-text-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                                    <span class="ux4g-tag-text-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                                    <span class="ux4g-tag-text-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                                    <span class="ux4g-tag-text-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy sizing and variant utility classes for Tags.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-3 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Variant Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Variant Base Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-tag-tonal-{v}', label: 'Tonal Variant' },
                                                { class: 'ux4g-tag-filled-{v}', label: 'Filled Variant' },
                                                { class: 'ux4g-tag-outline-{v}', label: 'Outline Variant' },
                                                { class: 'ux4g-tag-text-{v}', label: 'Text Variant' }
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

                        <!-- Semantic Colors -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Semantic Colors ({v})</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'primary', label: 'Primary (Brand)', textTone: 'ux4g-text-primary' },
                                                { class: 'neutral', label: 'Neutral / Default', textTone: 'ux4g-text-neutral-primary' },
                                                { class: 'success', label: 'Success (Positive)', textTone: 'ux4g-text-success' },
                                                { class: 'warning', label: 'Warning (Caution)', textTone: 'ux4g-text-warning' },
                                                { class: 'error', label: 'Error (Critical)', textTone: 'ux4g-text-error' },
                                                { class: 'info', label: 'Info (Action)', textTone: 'ux4g-text-info' }
                                            ].map(s => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${s.label}</span>
                                                            <code class="${s.textTone} ux4g-fs-12">${s.class}</code>
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

                        <!-- Modifier Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Modifiers</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-tag-s', label: 'Small Size' },
                                                { class: 'ux4g-radius-none', label: 'Radius None' },
                                                { class: 'ux4g-radius-s', label: 'Radius Small' },
                                                { class: 'ux4g-radius-m', label: 'Radius Medium' },
                                                { class: 'ux4g-radius-l', label: 'Radius Large' },
                                                { class: 'ux4g-radius-full', label: 'Circular (Pill)' }
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

export const TonalTags = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Tonal Tags', 'Tags with subtle background colors and semantic text colors.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('tonal-default', 'Rectangular', 'Standard tonal tags with semantic variants.', `
                    <span class="ux4g-tag-tonal-neutral"><i class="ux4g-icon-outlined ux4g-icon-neutral">token</i> Neutral</span>
                    <span class="ux4g-tag-tonal-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-tonal-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-tonal-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-tonal-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-tonal-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Tonal Tag - Neutral', markup: '<span class="ux4g-tag-tonal-neutral"><i class="ux4g-icon-outlined ux4g-icon-neutral">token</i> Neutral</span>' },
                    { label: 'Tonal Tag - Brand', markup: '<span class="ux4g-tag-tonal-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Tonal Tag - Success', markup: '<span class="ux4g-tag-tonal-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Tonal Tag - Warning', markup: '<span class="ux4g-tag-tonal-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Tonal Tag - Error', markup: '<span class="ux4g-tag-tonal-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Tonal Tag - Info', markup: '<span class="ux4g-tag-tonal-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
 
                ${renderDemoCodeBlock('tonal-small-rect', 'Rectangular (Small)', 'Compact rectangular tonal tags using the ux4g-tag-s class.', `
                    <span class="ux4g-tag-tonal-neutral ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-neutral">token</i> Neutral</span>
                    <span class="ux4g-tag-tonal-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-tonal-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-tonal-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-tonal-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-tonal-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Tonal Tag - Neutral - Small', markup: '<span class="ux4g-tag-tonal-neutral ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-neutral">token</i> Neutral</span>' },
                    { label: 'Tonal Tag - Brand - Small', markup: '<span class="ux4g-tag-tonal-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Tonal Tag - Success - Small', markup: '<span class="ux4g-tag-tonal-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Tonal Tag - Warning - Small', markup: '<span class="ux4g-tag-tonal-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Tonal Tag - Error - Small', markup: '<span class="ux4g-tag-tonal-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Tonal Tag - Info - Small', markup: '<span class="ux4g-tag-tonal-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
 
                ${renderDemoCodeBlock('tonal-pills', 'Circular (Pill)', 'Standard size tonal tags with fully rounded corners.', `
                    <span class="ux4g-tag-tonal-neutral ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-tonal-primary ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-tonal-success ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-tonal-warning ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-tonal-error ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-tonal-info ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Tonal Tag - Neutral - Pill', markup: '<span class="ux4g-tag-tonal-neutral ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Tonal Tag - Brand - Pill', markup: '<span class="ux4g-tag-tonal-primary ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Tonal Tag - Success - Pill', markup: '<span class="ux4g-tag-tonal-success ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Tonal Tag - Warning - Pill', markup: '<span class="ux4g-tag-tonal-warning ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Tonal Tag - Error - Pill', markup: '<span class="ux4g-tag-tonal-error ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Tonal Tag - Info - Pill', markup: '<span class="ux4g-tag-tonal-info ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}

                ${renderDemoCodeBlock('tonal-pills-small', 'Circular (Pill) (Small)', 'Compact tonal tags with fully rounded corners.', `
                    <span class="ux4g-tag-tonal-neutral ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-tonal-primary ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-tonal-success ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-tonal-warning ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-tonal-error ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-tonal-info ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Tonal Tag - Neutral - Small Pill', markup: '<span class="ux4g-tag-tonal-neutral ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Tonal Tag - Brand - Small Pill', markup: '<span class="ux4g-tag-tonal-primary ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Tonal Tag - Success - Small Pill', markup: '<span class="ux4g-tag-tonal-success ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Tonal Tag - Warning - Small Pill', markup: '<span class="ux4g-tag-tonal-warning ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Tonal Tag - Error - Small Pill', markup: '<span class="ux4g-tag-tonal-error ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Tonal Tag - Info - Small Pill', markup: '<span class="ux4g-tag-tonal-info ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const FilledTags = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Filled Tags', 'Tags with solid background colors for higher visual emphasis.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('filled-default', 'Rectangular', 'Standard filled tags with semantic variants.', `
                    <span class="ux4g-tag-filled-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-filled-primary"><i class="ux4g-icon-outlined">token</i> Brand</span>
                    <span class="ux4g-tag-filled-success"><i class="ux4g-icon-outlined">token</i> Success</span>
                    <span class="ux4g-tag-filled-warning"><i class="ux4g-icon-outlined">token</i> Warning</span>
                    <span class="ux4g-tag-filled-error"><i class="ux4g-icon-outlined">token</i> Error</span>
                    <span class="ux4g-tag-filled-info"><i class="ux4g-icon-outlined">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Filled Tag - Neutral', markup: '<span class="ux4g-tag-filled-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Filled Tag - Brand', markup: '<span class="ux4g-tag-filled-primary"><i class="ux4g-icon-outlined">token</i> Brand</span>' },
                    { label: 'Filled Tag - Success', markup: '<span class="ux4g-tag-filled-success"><i class="ux4g-icon-outlined">token</i> Success</span>' },
                    { label: 'Filled Tag - Warning', markup: '<span class="ux4g-tag-filled-warning"><i class="ux4g-icon-outlined">token</i> Warning</span>' },
                    { label: 'Filled Tag - Error', markup: '<span class="ux4g-tag-filled-error"><i class="ux4g-icon-outlined">token</i> Error</span>' },
                    { label: 'Filled Tag - Info', markup: '<span class="ux4g-tag-filled-info"><i class="ux4g-icon-outlined">token</i> Info</span>' },
                ]))}
 
                ${renderDemoCodeBlock('filled-small-rect', 'Rectangular (Small)', 'Compact rectangular filled tags using the ux4g-tag-s class.', `
                    <span class="ux4g-tag-filled-neutral ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral</span>
                    <span class="ux4g-tag-filled-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Brand</span>
                    <span class="ux4g-tag-filled-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Success</span>
                    <span class="ux4g-tag-filled-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Warning</span>
                    <span class="ux4g-tag-filled-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Error</span>
                    <span class="ux4g-tag-filled-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Filled Tag - Neutral - Small', markup: '<span class="ux4g-tag-filled-neutral ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral</span>' },
                    { label: 'Filled Tag - Brand - Small', markup: '<span class="ux4g-tag-filled-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Brand</span>' },
                    { label: 'Filled Tag - Success - Small', markup: '<span class="ux4g-tag-filled-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Success</span>' },
                    { label: 'Filled Tag - Warning - Small', markup: '<span class="ux4g-tag-filled-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Warning</span>' },
                    { label: 'Filled Tag - Error - Small', markup: '<span class="ux4g-tag-filled-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Error</span>' },
                    { label: 'Filled Tag - Info - Small', markup: '<span class="ux4g-tag-filled-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Info</span>' },
                ]))}
 
                ${renderDemoCodeBlock('filled-pills', 'Circular (Pill)', 'Standard size filled tags with fully rounded corners.', `
                    <span class="ux4g-tag-filled-neutral ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral</span>
                    <span class="ux4g-tag-filled-primary ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Brand</span>
                    <span class="ux4g-tag-filled-success ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Success</span>
                    <span class="ux4g-tag-filled-warning ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Warning</span>
                    <span class="ux4g-tag-filled-error ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Error</span>
                    <span class="ux4g-tag-filled-info ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Filled Tag - Neutral - Pill', markup: '<span class="ux4g-tag-filled-neutral ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral</span>' },
                    { label: 'Filled Tag - Brand - Pill', markup: '<span class="ux4g-tag-filled-primary ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Brand</span>' },
                    { label: 'Filled Tag - Success - Pill', markup: '<span class="ux4g-tag-filled-success ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Success</span>' },
                    { label: 'Filled Tag - Warning - Pill', markup: '<span class="ux4g-tag-filled-warning ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Warning</span>' },
                    { label: 'Filled Tag - Error - Pill', markup: '<span class="ux4g-tag-filled-error ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Error</span>' },
                    { label: 'Filled Tag - Info - Pill', markup: '<span class="ux4g-tag-filled-info ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Info</span>' },
                ]))}

                ${renderDemoCodeBlock('filled-pills-small', 'Circular (Pill) (Small)', 'Compact filled tags with fully rounded corners.', `
                    <span class="ux4g-tag-filled-neutral ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral</span>
                    <span class="ux4g-tag-filled-primary ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Brand</span>
                    <span class="ux4g-tag-filled-success ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Success</span>
                    <span class="ux4g-tag-filled-warning ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Warning</span>
                    <span class="ux4g-tag-filled-error ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Error</span>
                    <span class="ux4g-tag-filled-info ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Filled Tag - Neutral - Small Pill', markup: '<span class="ux4g-tag-filled-neutral ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral</span>' },
                    { label: 'Filled Tag - Brand - Small Pill', markup: '<span class="ux4g-tag-filled-primary ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Brand</span>' },
                    { label: 'Filled Tag - Success - Small Pill', markup: '<span class="ux4g-tag-filled-success ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Success</span>' },
                    { label: 'Filled Tag - Warning - Small Pill', markup: '<span class="ux4g-tag-filled-warning ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Warning</span>' },
                    { label: 'Filled Tag - Error - Small Pill', markup: '<span class="ux4g-tag-filled-error ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Error</span>' },
                    { label: 'Filled Tag - Info - Small Pill', markup: '<span class="ux4g-tag-filled-info ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Info</span>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const OutlineTags = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Outline Tags', 'Tags with borders and semantic text colors for low visual weight.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('outline-default', 'Rectangular', 'Standard outline tags with semantic variants.', `
                    <span class="ux4g-tag-outline-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-outline-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-outline-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-outline-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-outline-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-outline-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Outline Tag - Neutral', markup: '<span class="ux4g-tag-outline-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Outline Tag - Brand', markup: '<span class="ux4g-tag-outline-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Outline Tag - Success', markup: '<span class="ux4g-tag-outline-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Outline Tag - Warning', markup: '<span class="ux4g-tag-outline-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Outline Tag - Error', markup: '<span class="ux4g-tag-outline-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Outline Tag - Info', markup: '<span class="ux4g-tag-outline-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
 
                ${renderDemoCodeBlock('outline-small-rect', 'Rectangular (Small)', 'Compact rectangular outline tags.', `
                    <span class="ux4g-tag-outline-neutral ux4g-tag-s"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-outline-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-outline-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-outline-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-outline-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-outline-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Outline Tag - Neutral - Small', markup: '<span class="ux4g-tag-outline-neutral ux4g-tag-s"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Outline Tag - Brand - Small', markup: '<span class="ux4g-tag-outline-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Outline Tag - Success - Small', markup: '<span class="ux4g-tag-outline-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Outline Tag - Warning - Small', markup: '<span class="ux4g-tag-outline-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Outline Tag - Error - Small', markup: '<span class="ux4g-tag-outline-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Outline Tag - Info - Small', markup: '<span class="ux4g-tag-outline-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
                
                ${renderDemoCodeBlock('outline-pills', 'Circular (Pill)', 'Standard size outline tags with fully rounded corners.', `
                    <span class="ux4g-tag-outline-neutral ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-outline-primary ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-outline-success ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-outline-warning ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-outline-error ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-outline-info ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Outline Tag - Neutral - Pill', markup: '<span class="ux4g-tag-outline-neutral ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Outline Tag - Brand - Pill', markup: '<span class="ux4g-tag-outline-primary ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Outline Tag - Success - Pill', markup: '<span class="ux4g-tag-outline-success ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Outline Tag - Warning - Pill', markup: '<span class="ux4g-tag-outline-warning ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Outline Tag - Error - Pill', markup: '<span class="ux4g-tag-outline-error ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Outline Tag - Info - Pill', markup: '<span class="ux4g-tag-outline-info ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}

                ${renderDemoCodeBlock('outline-pills-small', 'Circular (Pill) (Small)', 'Compact outline tags with fully rounded corners.', `
                    <span class="ux4g-tag-outline-neutral ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-outline-primary ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-outline-success ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-outline-warning ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-outline-error ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-outline-info ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Outline Tag - Neutral - Small Pill', markup: '<span class="ux4g-tag-outline-neutral ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Outline Tag - Brand - Small Pill', markup: '<span class="ux4g-tag-outline-primary ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Outline Tag - Success - Small Pill', markup: '<span class="ux4g-tag-outline-success ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Outline Tag - Warning - Small Pill', markup: '<span class="ux4g-tag-outline-warning ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Outline Tag - Error - Small Pill', markup: '<span class="ux4g-tag-outline-error ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Outline Tag - Info - Small Pill', markup: '<span class="ux4g-tag-outline-info ux4g-tag-s ux4g-radius-full"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const TextTags = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Text Tags', 'Minimalist tags without backgrounds or borders.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('text-small', 'Text Tag (Small)', 'Minimalist small text tags.', `
                    <span class="ux4g-tag-text-neutral ux4g-tag-s"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-text-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-text-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-text-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-text-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-text-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Text Tag - Neutral - Small', markup: '<span class="ux4g-tag-text-neutral ux4g-tag-s"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Text Tag - Brand - Small', markup: '<span class="ux4g-tag-text-primary ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Text Tag - Success - Small', markup: '<span class="ux4g-tag-text-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Text Tag - Warning - Small', markup: '<span class="ux4g-tag-text-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Text Tag - Error - Small', markup: '<span class="ux4g-tag-text-error ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Text Tag - Info - Small', markup: '<span class="ux4g-tag-text-info ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
 
                ${renderDemoCodeBlock('text-default', 'Text Tag', 'Minimalist standard size text tags.', `
                    <span class="ux4g-tag-text-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>
                    <span class="ux4g-tag-text-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>
                    <span class="ux4g-tag-text-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>
                    <span class="ux4g-tag-text-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>
                    <span class="ux4g-tag-text-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>
                    <span class="ux4g-tag-text-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>
                `, false, getTagCode([
                    { label: 'Text Tag - Neutral', markup: '<span class="ux4g-tag-text-neutral"><i class="ux4g-icon-outlined">token</i> Neutral</span>' },
                    { label: 'Text Tag - Brand', markup: '<span class="ux4g-tag-text-primary"><i class="ux4g-icon-outlined ux4g-text-primary">token</i> Brand</span>' },
                    { label: 'Text Tag - Success', markup: '<span class="ux4g-tag-text-success"><i class="ux4g-icon-outlined ux4g-icon-success">token</i> Success</span>' },
                    { label: 'Text Tag - Warning', markup: '<span class="ux4g-tag-text-warning"><i class="ux4g-icon-outlined ux4g-icon-warning">token</i> Warning</span>' },
                    { label: 'Text Tag - Error', markup: '<span class="ux4g-tag-text-error"><i class="ux4g-icon-outlined ux4g-icon-error">token</i> Error</span>' },
                    { label: 'Text Tag - Info', markup: '<span class="ux4g-tag-text-info"><i class="ux4g-icon-outlined ux4g-icon-info">token</i> Info</span>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

