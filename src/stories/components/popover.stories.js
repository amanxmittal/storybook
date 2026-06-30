/**
 * Popover Component Stories
 *
 * Showcasing source-backed popover placements, rich content, and customization variants.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Popover',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Popovers reveal contextual overlays anchored to a trigger and support placement control, richer metadata, embedded actions, and lightweight customization.',
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

const escapeCodeForInlineScript = (code) =>
    code
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$')
        .replace(/<\/script>/gi, '<\\/script>');

const getReactCode = (html) => htmlToJsx(html, 'Popover');

const renderDemoCodeBlock = (
    id,
    title,
    subtitle,
    htmlContent,
    isInverse = false,
    customCode = null,
    customReactCode = null,
    customAngularCode = null
) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = customReactCode || getReactCode(displayCode);
    const angularCode = customAngularCode || displayCode;

    return `
        <div class="ux4g-mb-3xl ux4g-pb-xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden ux4g-mb-l">
                <div class="ux4g-p-l ux4g-d-flex ux4g-jc-center ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-gap-2xl ux4g-w-100 ux4g-flex-wrap">
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
                    const htmlCode = \`${escapeCodeForInlineScript(displayCode)}\`;
                    const reactCode = \`${escapeCodeForInlineScript(reactCode)}\`;
                    const angularCode = \`${escapeCodeForInlineScript(angularCode)}\`;
                    
                    const initHandlers = () => {
                        const section = document.getElementById('section-' + blockId);
                        if (!section) {
                            setTimeout(initHandlers, 100);
                            return;
                        }
                        
                        const toggleBtn = section.querySelector('.toggle-code') || document.querySelector('[data-target="code-' + blockId + '"]');
                        const codeArea = document.getElementById('code-' + blockId);
                        const output = document.getElementById('output-' + blockId);
                        const tabs = document.querySelectorAll('.tab-trigger[data-id="' + blockId + '"]');
                        const copyBtn = section.querySelector('.copy-code') || document.querySelector('.copy-code[data-id="' + blockId + '"]');
                        
                        if (!toggleBtn || !codeArea || !output) {
                            return;
                        }
                        
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
                    };
                    
                    if (document.readyState === 'loading') {
                        document.addEventListener('DOMContentLoaded', initHandlers);
                    } else {
                        initHandlers();
                    }
                })();
            </script>
        </div>
    `;
};

const renderStoryPage = (title, description, content) => `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-100 ux4g-o-hidden">
        ${getHeroHeader(title, description)}

        <div class="ux4g-w-100 ux4g-o-hidden ux4g-p-m">
            <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-s">
                ${content}
            </div>
        </div>
    </div>
`;

const PLACEMENTS_HTML = `
<div class="ux4g-w-100">
<div class="ux4g-d-grid ux4g-grid-cols-3 ux4g-gap-m ux4g-w-100">
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the left edge of the trigger." data-ux-placement="top-start" data-ux-title="Top Start" data-ux-toggle="popover">Top Start</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered on the trigger element." data-ux-placement="top" data-ux-title="Top Center" data-ux-toggle="popover">Top</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the right edge of the trigger." data-ux-placement="top-end" data-ux-title="Top End" data-ux-toggle="popover">Top End</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the left edge of the trigger." data-ux-placement="bottom-start" data-ux-title="Bottom Start" data-ux-toggle="popover">Bottom Start</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered on the trigger element." data-ux-placement="bottom" data-ux-title="Bottom Center" data-ux-toggle="popover">Bottom</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the right edge of the trigger." data-ux-placement="bottom-end" data-ux-title="Bottom End" data-ux-toggle="popover">Bottom End</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the top edge of the trigger." data-ux-placement="left-start" data-ux-title="Left Start" data-ux-toggle="popover">Left Start</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered vertically on the trigger." data-ux-placement="left" data-ux-title="Left Center" data-ux-toggle="popover">Left</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the bottom edge of the trigger." data-ux-placement="left-end" data-ux-title="Left End" data-ux-toggle="popover">Left End</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the top edge of the trigger." data-ux-placement="right-start" data-ux-title="Right Start" data-ux-toggle="popover">Right Start</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered vertically on the trigger." data-ux-placement="right" data-ux-title="Right Center" data-ux-toggle="popover">Right</button>
        </div>
<div class="ux4g-d-flex ux4g-jc-center">
            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the bottom edge of the trigger." data-ux-placement="right-end" data-ux-title="Right End" data-ux-toggle="popover">Right End</button>
        </div>
    </div>
</div>
`.trim();

const RICH_CONTENT_HTML = `
<div class="ux4g-d-flex ux4g-jc-center ux4g-w-100">
    <button class="ux4g-btn ux4g-btn-primary" data-ux-action-html="&lt;div class=&quot;ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-dropdown-control ux4g-btn-text-primary&quot; aria-label=&quot;Overflow dropdown default medium&quot; id=&quot;ux4g-dropdown-control-popover&quot; aria-haspopup=&quot;menu&quot; aria-expanded=&quot;false&quot;&gt; &lt;span class=&quot;ux4g-icon-outlined&quot;&gt;more_vert&lt;/span&gt; &lt;/button&gt; &lt;div class=&quot;ux4g-dropdown-menu&quot; role=&quot;menu&quot; aria-labelledby=&quot;ux4g-dropdown-control-popover&quot;&gt; &lt;ul class=&quot;ux4g-list ux4g-list-default ux4g-list-m&quot;&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Share&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt; &lt;span&gt;Share&lt;/span&gt; &lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Duplicate&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt; &lt;span&gt;Duplicate&lt;/span&gt; &lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Archive&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt; &lt;span&gt;Archive&lt;/span&gt; &lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt; &lt;/div&gt;" data-ux-content="&lt;p class=&quot;ux4g-mb-m&quot;&gt;A Popover is a small overlay UI component that appears floating above the page content, anchored to a trigger element (like a button).&lt;/p&gt; &lt;a href=&quot;#&quot; class=&quot;ux4g-text-link-sm&quot;&gt;Link&lt;/a&gt;" data-ux-html="true" data-ux-icon="grid_view" data-ux-label="Label" data-ux-placement="right" data-ux-subtitle="This is a subtitle text" data-ux-title="Popover Title" data-ux-toggle="popover">Complex Popover</button>
</div>
`.trim();

const CUSTOMIZATION_HTML = `
<div class="ux4g-d-flex ux4g-jc-center ux4g-w-100">
    <button class="ux4g-btn ux4g-btn-secondary" data-ux-arrow="false" data-ux-content="This popover has the arrow disabled." data-ux-placement="top" data-ux-title="No Arrow Popover" data-ux-toggle="popover">No Arrow</button>
</div>
`.trim();

const PLACEMENTS_CLEAN_CODE = `
/* Placement: Top Start */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the left edge of the trigger." data-ux-placement="top-start" data-ux-title="Top Start" data-ux-toggle="popover">Top Start</button>

/* Placement: Top Center */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered on the trigger element." data-ux-placement="top" data-ux-title="Top Center" data-ux-toggle="popover">Top</button>

/* Placement: Top End */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the right edge of the trigger." data-ux-placement="top-end" data-ux-title="Top End" data-ux-toggle="popover">Top End</button>

/* Placement: Bottom Start */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the left edge of the trigger." data-ux-placement="bottom-start" data-ux-title="Bottom Start" data-ux-toggle="popover">Bottom Start</button>

/* Placement: Bottom Center */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered on the trigger element." data-ux-placement="bottom" data-ux-title="Bottom Center" data-ux-toggle="popover">Bottom</button>

/* Placement: Bottom End */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the right edge of the trigger." data-ux-placement="bottom-end" data-ux-title="Bottom End" data-ux-toggle="popover">Bottom End</button>

/* Placement: Left Start */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the top edge of the trigger." data-ux-placement="left-start" data-ux-title="Left Start" data-ux-toggle="popover">Left Start</button>

/* Placement: Left Center */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered vertically on the trigger." data-ux-placement="left" data-ux-title="Left Center" data-ux-toggle="popover">Left</button>

/* Placement: Left End */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the bottom edge of the trigger." data-ux-placement="left-end" data-ux-title="Left End" data-ux-toggle="popover">Left End</button>

/* Placement: Right Start */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the top edge of the trigger." data-ux-placement="right-start" data-ux-title="Right Start" data-ux-toggle="popover">Right Start</button>

/* Placement: Right Center */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered vertically on the trigger." data-ux-placement="right" data-ux-title="Right Center" data-ux-toggle="popover">Right</button>

/* Placement: Right End */
<button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the bottom edge of the trigger." data-ux-placement="right-end" data-ux-title="Right End" data-ux-toggle="popover">Right End</button>
`.trim();

const RICH_CONTENT_CLEAN_CODE = `
/* Variant: Rich Content */
<button class="ux4g-btn ux4g-btn-primary" data-ux-action-html="&lt;div class=&quot;ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-dropdown-control ux4g-btn-text-primary&quot; aria-label=&quot;Overflow dropdown default medium&quot; id=&quot;ux4g-dropdown-control-popover&quot; aria-haspopup=&quot;menu&quot; aria-expanded=&quot;false&quot;&gt; &lt;span class=&quot;ux4g-icon-outlined&quot;&gt;more_vert&lt;/span&gt; &lt;/button&gt; &lt;div class=&quot;ux4g-dropdown-menu&quot; role=&quot;menu&quot; aria-labelledby=&quot;ux4g-dropdown-control-popover&quot;&gt; &lt;ul class=&quot;ux4g-list ux4g-list-default ux4g-list-m&quot;&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Share&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt; &lt;span&gt;Share&lt;/span&gt; &lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Duplicate&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt; &lt;span&gt;Duplicate&lt;/span&gt; &lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Archive&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt; &lt;span&gt;Archive&lt;/span&gt; &lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt; &lt;/div&gt;" data-ux-content="&lt;p class=&quot;ux4g-mb-m&quot;&gt;A Popover is a small overlay UI component that appears floating above the page content, anchored to a trigger element (like a button).&lt;/p&gt; &lt;a href=&quot;#&quot; class=&quot;ux4g-text-link-sm&quot;&gt;Link&lt;/a&gt;" data-ux-html="true" data-ux-icon="grid_view" data-ux-label="Label" data-ux-placement="right" data-ux-subtitle="This is a subtitle text" data-ux-title="Popover Title" data-ux-toggle="popover">Complex Popover</button>
`.trim();

const CUSTOMIZATION_CLEAN_CODE = `
/* Variant: No Arrow */
<button class="ux4g-btn ux4g-btn-secondary" data-ux-arrow="false" data-ux-content="This popover has the arrow disabled." data-ux-placement="top" data-ux-title="No Arrow Popover" data-ux-toggle="popover">No Arrow</button>
`.trim();

const RICH_CONTENT_REACT_CODE = `import React from 'react';

const actionHtml = \`<div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md">
  <button type="button" class="ux4g-dropdown-control ux4g-btn-text-primary" aria-label="Overflow dropdown default medium" id="ux4g-dropdown-control-popover" aria-haspopup="menu" aria-expanded="false">
    <span class="ux4g-icon-outlined">more_vert</span>
  </button>
  <div class="ux4g-dropdown-menu" role="menu" aria-labelledby="ux4g-dropdown-control-popover">
    <ul class="ux4g-list ux4g-list-default ux4g-list-m">
      <li class="ux4g-list-item" role="menuitem">
        <button type="button" class="ux4g-list-item-row" ux4g-dropdown-choice="Share">
          <span class="ux4g-list-item-start">
            <span>Share</span>
          </span>
          <span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span>
        </button>
      </li>
      <li class="ux4g-list-item" role="menuitem">
        <button type="button" class="ux4g-list-item-row" ux4g-dropdown-choice="Duplicate">
          <span class="ux4g-list-item-start">
            <span>Duplicate</span>
          </span>
          <span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span>
        </button>
      </li>
      <li class="ux4g-list-item" role="menuitem">
        <button type="button" class="ux4g-list-item-row" ux4g-dropdown-choice="Archive">
          <span class="ux4g-list-item-start">
            <span>Archive</span>
          </span>
          <span class="ux4g-list-item-end ux4g-icon-outlined">chevron_right</span>
        </button>
      </li>
    </ul>
  </div>
</div>\`;

const contentHtml = \`<p class="ux4g-mb-m">A Popover is a small overlay UI component that appears floating above the page content, anchored to a trigger element (like a button).</p>
<a href="#" class="ux4g-text-link-sm">Link</a>\`;

const PopoverDemo = () => (
  <>
    <button
      className="ux4g-btn ux4g-btn-primary"
      data-ux-action-html={actionHtml}
      data-ux-content={contentHtml}
      data-ux-html="true"
      data-ux-icon="grid_view"
      data-ux-label="Label"
      data-ux-placement="right"
      data-ux-subtitle="This is a subtitle text"
      data-ux-title="Popover Title"
      data-ux-toggle="popover"
    >
      Complex Popover
    </button>
  </>
);

export default PopoverDemo;`;

const getStoryParameters = (code) => ({
    docs: {
        disable: true,
        source: { code: formatCode(code) },
    },
});

export const Introduction = () => {
    return `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
            ${getHeroHeader('Popover', 'Popovers surface contextual overlays from a trigger, covering directional placement, richer descriptive content, embedded actions, and optional presentation tweaks without leaving the current page.')}

            <section class="ux4g-p-xl">
                    <!-- Implementation Showcase -->
                    <div class="ux4g-my-xl">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Explore the key popover trigger patterns used most often across product surfaces, from directional placement to richer overlay content and minimal presentation tweaks.</p>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">

                            <!-- Placement Coverage -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Placement Coverage</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-m ux4g-hpx-200 ux4g-ai-center">
                                            <div class="ux4g-d-flex ux4g-jc-center"><button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Aligned to the left edge of the trigger." data-ux-placement="top-start" data-ux-title="Top Start" data-ux-toggle="popover">Top Start</button></div>
                                            <div class="ux4g-d-flex ux4g-jc-center"><button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered on the trigger element." data-ux-placement="right" data-ux-title="Right Center" data-ux-toggle="popover">Right</button></div>
                                            <div class="ux4g-d-flex ux4g-jc-center"><button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered on the trigger element." data-ux-placement="bottom" data-ux-title="Bottom Center" data-ux-toggle="popover">Bottom</button></div>
                                            <div class="ux4g-d-flex ux4g-jc-center"><button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Centered vertically on the trigger." data-ux-placement="left" data-ux-title="Left Center" data-ux-toggle="popover">Left</button></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Rich Content -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Rich Content</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-hpx-200">
                                            <button class="ux4g-btn ux4g-btn-primary" data-ux-action-html="&lt;div class=&quot;ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-overflow ux4g-dropdown-md&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-dropdown-control ux4g-btn-text-primary&quot; aria-label=&quot;Overflow dropdown default medium&quot; id=&quot;ux4g-dropdown-control-popover-intro&quot; aria-haspopup=&quot;menu&quot; aria-expanded=&quot;false&quot;&gt; &lt;span class=&quot;ux4g-icon-outlined&quot;&gt;more_vert&lt;/span&gt; &lt;/button&gt; &lt;div class=&quot;ux4g-dropdown-menu&quot; role=&quot;menu&quot; aria-labelledby=&quot;ux4g-dropdown-control-popover-intro&quot;&gt; &lt;ul class=&quot;ux4g-list ux4g-list-default ux4g-list-m&quot;&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Share&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt;&lt;span&gt;Share&lt;/span&gt;&lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Duplicate&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt;&lt;span&gt;Duplicate&lt;/span&gt;&lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;li class=&quot;ux4g-list-item&quot; role=&quot;menuitem&quot;&gt; &lt;button type=&quot;button&quot; class=&quot;ux4g-list-item-row&quot; ux4g-dropdown-choice=&quot;Archive&quot;&gt; &lt;span class=&quot;ux4g-list-item-start&quot;&gt;&lt;span&gt;Archive&lt;/span&gt;&lt;/span&gt; &lt;span class=&quot;ux4g-list-item-end ux4g-icon-outlined&quot;&gt;chevron_right&lt;/span&gt; &lt;/button&gt; &lt;/li&gt; &lt;/ul&gt; &lt;/div&gt; &lt;/div&gt;" data-ux-content="&lt;p class=&quot;ux4g-mb-m&quot;&gt;A Popover is a small overlay UI component that appears floating above the page content, anchored to a trigger element.&lt;/p&gt;&lt;a href=&quot;#&quot; class=&quot;ux4g-text-link-sm&quot;&gt;Link&lt;/a&gt;" data-ux-html="true" data-ux-icon="grid_view" data-ux-label="Label" data-ux-placement="right" data-ux-subtitle="This is a subtitle text" data-ux-title="Popover Title" data-ux-toggle="popover">Complex Popover</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Arrowless Variant -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Arrowless Variant</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-hpx-200">
                                            <button class="ux4g-btn ux4g-btn-secondary" data-ux-arrow="false" data-ux-content="This popover has the arrow disabled." data-ux-placement="top" data-ux-title="No Arrow Popover" data-ux-toggle="popover">No Arrow</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Metadata-First Trigger -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Metadata-First Trigger</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-d-flex ux4g-jc-center ux4g-ai-center ux4g-hpx-200">
                                            <button class="ux4g-btn ux4g-btn-outline-primary" data-ux-content="Review due date, owner, and current status without opening the full record." data-ux-icon="event" data-ux-label="Draft" data-ux-placement="bottom-end" data-ux-subtitle="Updated 5 mins ago" data-ux-title="Review timeline" data-ux-toggle="popover">Open Summary</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    <!-- CSS Class Reference -->
                    <div class="ux4g-my-xl">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Key CSS classes used across popover triggers and content patterns. Click any class name to copy it.</p>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">

                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-primary-soft"><h3 class="ux4g-heading-s-strong ux4g-text-primary">Trigger Foundation</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
                                    <table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
                                        <tbody>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-btn</code></td><td>Base trigger button shell</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-btn-primary</code></td><td>Prominent rich-content trigger</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-btn-secondary</code></td><td>Alternative trigger emphasis</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-btn-outline-primary</code></td><td>Neutral outline trigger treatment</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-info-soft"><h3 class="ux4g-heading-s-strong ux4g-text-info">Placement API</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
                                    <table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Attribute</th><th>Purpose</th></tr></thead>
                                        <tbody>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-toggle="popover"</code></td><td>Enables popover behavior on the trigger</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-placement="top-start"</code></td><td>Align overlay above the trigger start edge</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-placement="right"</code></td><td>Centers overlay on the right side</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-placement="bottom-end"</code></td><td>Align overlay below the trigger end edge</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-success-soft"><h3 class="ux4g-heading-s-strong ux4g-text-success">Content Metadata</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
                                    <table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Attribute</th><th>Purpose</th></tr></thead>
                                        <tbody>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-title</code></td><td>Sets the popover heading</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-subtitle</code></td><td>Adds supporting metadata under the title</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-label</code></td><td>Shows a contextual badge-style label</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-icon</code></td><td>Displays a leading icon inside the overlay</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-warning-soft"><h3 class="ux4g-heading-s-strong ux4g-text-warning">Advanced Content</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
                                    <table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Attribute</th><th>Purpose</th></tr></thead>
                                        <tbody>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-content</code></td><td>Defines the main body copy or HTML payload</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-html="true"</code></td><td>Allows HTML rendering inside content</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-action-html</code></td><td>Injects action markup such as overflow menus</td></tr>
                                            <tr><td><code class="intro-copy-class ux4g-cursor-pointer">data-ux-arrow="false"</code></td><td>Removes the default directional arrow</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Key Behaviors & Available Stories -->
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-my-xl">
                        <div class="ux4g-card ux4g-card-solid">
                            <div class="ux4g-card-header">
                                <h2 class="ux4g-heading-m-strong">Key behaviors</h2>
                            </div>
                            <div class="ux4g-card-body ux4g-flex-col">
                                <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Anchors lightweight overlay content to a button trigger using the existing popover data-toggle behavior.</li>
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports directional placement choices including start, center, and end alignments across all four sides.</li>
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Handles richer popover shells with title, subtitle, icon, label, embedded links, and injected action menus.</li>
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Allows targeted presentation changes such as removing the arrow while preserving the same trigger pattern.</li>
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
                                        <div class="ux4g-label-m-strong ux4g-text-primary">Placements</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">The twelve source-backed placement triggers spanning top, bottom, left, and right alignments.</div>
                                    </div>
                                    <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                        <div class="ux4g-label-m-strong ux4g-text-info">Rich Content</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">A higher-fidelity popover with icon, subtitle, label, descriptive content, a link, and injected dropdown actions.</div>
                                    </div>
                                    <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                        <div class="ux4g-label-m-strong ux4g-text-success">Customization</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">A source-backed customization example that disables the popover arrow without changing the core trigger contract.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <script>
                (function() {
                    const initIntroCopy = () => {
                        const container = document.getElementById('intro-container');
                        if (!container) { setTimeout(initIntroCopy, 100); return; }
                        container.querySelectorAll('.intro-copy-class').forEach(el => {
                            el.addEventListener('click', () => {
                                navigator.clipboard.writeText(el.textContent).then(() => {
                                    const orig = el.textContent;
                                    el.textContent = 'Copied!';
                                    el.style.color = 'var(--ux4g-color-success, #16a34a)';
                                    setTimeout(() => { el.textContent = orig; el.style.color = ''; }, 1500);
                                });
                            });
                        });
                    };
                    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initIntroCopy);
                    else initIntroCopy();
                })();
            </script>
        </div>
    `;
};

export const Placements = () => {
    return renderStoryPage(
        'Popover Placements',
        'Compare all source-backed placement triggers from the Popover showcase in src/index.html.',
        renderDemoCodeBlock(
            'popover-placements',
            'Placements',
            'Top, bottom, left, and right variants with start, center, and end alignment drawn directly from the Popover showcase.',
            PLACEMENTS_HTML,
            false,
            PLACEMENTS_CLEAN_CODE
        )
    );
};

export const RichContent = () => {
    return renderStoryPage(
        'Popover Rich Content',
        'Reference the richer Popover variant that combines metadata, content, and embedded actions.',
        renderDemoCodeBlock(
            'popover-rich-content',
            'Rich Content',
            'A source-backed popover trigger with title, subtitle, icon, label, HTML content, and injected dropdown actions.',
            RICH_CONTENT_HTML,
            false,
            RICH_CONTENT_CLEAN_CODE,
            RICH_CONTENT_REACT_CODE
        )
    );
};

export const Customization = () => {
    return renderStoryPage(
        'Popover Customization',
        'Review the source-backed customization pattern that disables the popover arrow.',
        renderDemoCodeBlock(
            'popover-customization',
            'Customization',
            'A no-arrow popover variant using the existing button trigger and data attribute API from src/index.html.',
            CUSTOMIZATION_HTML,
            false,
            CUSTOMIZATION_CLEAN_CODE
        )
    );
};

Introduction.parameters = {
    docs: { disable: true },
};

Placements.parameters = {
    ...getStoryParameters(PLACEMENTS_CLEAN_CODE),
};

RichContent.parameters = {
    ...getStoryParameters(RICH_CONTENT_CLEAN_CODE),
};

Customization.parameters = {
    ...getStoryParameters(CUSTOMIZATION_CLEAN_CODE),
};
