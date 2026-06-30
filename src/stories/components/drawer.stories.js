/**
 * Drawer Component Stories
 * 
 * Showcasing different types of Drawers: Top, Right, Bottom, and Left positions.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Drawer',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Drawers are sliding panels that provide supplementary content or actions without losing the main context.',
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

const getReactCode = (html) => htmlToJsx(html, 'Drawer');

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

// --- Drawer Templates (Panels Only) ---

const PANEL_TOP = formatCode(`
<div class="ux4g-drawer-overlay">
    <div class="ux4g-drawer ux4g-drawer-top" id="ux4g-drawerTop">
        <div class="ux4g-drawer-header">
            <div class="ux4g-drawer-title-group">
                <div class="ux4g-drawer-title-wrapper">
                    <i class="ux4g-icon">token</i>
                    <span class="ux4g-drawer-title">Top Drawer</span>
                </div>
                <span class="ux4g-drawer-subtitle">Drawer from top</span>
            </div>
            <button class="ux4g-drawer-close" data-drawer-close="">
                <i class="ux4g-icon-outlined">close</i>
            </button>
        </div>
        <div class="ux4g-drawer-body">
            Content from top drawer
        </div>
        <div class="ux4g-drawer-footer">
            <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" data-drawer-close="">
                Cancel
            </button>
            <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md">Confirm</button>
        </div>
    </div>
</div>
`);

const PANEL_RIGHT = formatCode(`
<div class="ux4g-drawer-overlay">
    <div class="ux4g-drawer ux4g-drawer-right" id="ux4g-drawerRight">
        <div class="ux4g-drawer-header">
            <div class="ux4g-drawer-title-group">
                <div class="ux4g-drawer-title-wrapper">
                    <i class="ux4g-icon">token</i>
                    <span class="ux4g-drawer-title">Right Drawer</span>
                </div>
                <span class="ux4g-drawer-subtitle">Drawer from right</span>
            </div>
            <button class="ux4g-drawer-close" data-drawer-close="">
                <i class="ux4g-icon-outlined">close</i>
            </button>
        </div>
        <div class="ux4g-drawer-body">
            Content from right drawer
        </div>
        <div class="ux4g-drawer-footer">
            <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" data-drawer-close="">
                Cancel
            </button>
            <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md">Confirm</button>
        </div>
    </div>
</div>
`);

const PANEL_BOTTOM = formatCode(`
<div class="ux4g-drawer-overlay">
    <div class="ux4g-drawer ux4g-drawer-bottom" id="ux4g-drawerBottom">
        <div class="ux4g-drawer-header">
            <div class="ux4g-drawer-title-group">
                <div class="ux4g-drawer-title-wrapper">
                    <i class="ux4g-icon">token</i>
                    <span class="ux4g-drawer-title">Bottom Drawer</span>
                </div>
                <span class="ux4g-drawer-subtitle">Drawer from bottom</span>
            </div>
            <button class="ux4g-drawer-close" data-drawer-close="">
                <i class="ux4g-icon-outlined">close</i>
            </button>
        </div>
        <div class="ux4g-drawer-body">
            Content from bottom drawer
        </div>
        <div class="ux4g-drawer-footer">
            <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" data-drawer-close="">
                Cancel
            </button>
            <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md">Confirm</button>
        </div>
    </div>
</div>
`);

const PANEL_LEFT = formatCode(`
<div class="ux4g-drawer-overlay">
    <div class="ux4g-drawer ux4g-drawer-left" id="ux4g-drawerLeft">
        <div class="ux4g-drawer-header">
            <div class="ux4g-drawer-title-group">
                <div class="ux4g-drawer-title-wrapper">
                    <i class="ux4g-icon">token</i>
                    <span class="ux4g-drawer-title">Left Drawer</span>
                </div>
                <span class="ux4g-drawer-subtitle">Drawer from left</span>
            </div>
            <button class="ux4g-drawer-close" data-drawer-close="">
                <i class="ux4g-icon-outlined">close</i>
            </button>
        </div>
        <div class="ux4g-drawer-body">
            Content from left drawer
        </div>
        <div class="ux4g-drawer-footer">
            <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-md" data-drawer-close="">
                Cancel
            </button>
            <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md">Confirm</button>
        </div>
    </div>
</div>
`);

// --- Full Demos (Trigger + Panel) ---

const DRAWER_TOP_HTML = formatCode(`<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerTop">Open Top Drawer</button>\n${PANEL_TOP}`);
const DRAWER_RIGHT_HTML = formatCode(`<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerRight">Open Right Drawer</button>\n${PANEL_RIGHT}`);
const DRAWER_BOTTOM_HTML = formatCode(`<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerBottom">Open Bottom Drawer</button>\n${PANEL_BOTTOM}`);
const DRAWER_LEFT_HTML = formatCode(`<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerLeft">Open Left Drawer</button>\n${PANEL_LEFT}`);

const DRAWER_TRIGGERS_HTML = formatCode(`
<div class="ux4g-d-flex ux4g-ai-center ux4g-gap-l ux4g-flex-wrap ux4g-inline-gap-m">
    <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerTop">
        Open Top Drawer
    </button>
    <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerRight">
        Open Right Drawer
    </button>
    <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerBottom">
        Open Bottom Drawer
    </button>
    <button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerLeft">
        Open Left Drawer
    </button>
</div>
`);

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Drawer</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Drawers are sub-containers that slide out from the edges of the screen, typically used for navigation, filters, or additional details.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
            <div class="">
                <h2 class="ux4g-fs-28 ux4g-fw-semibold ux4g-mb-xl">Drawer Component</h2>
                <div class="ux4g-p-xl ux4g-bg-white ux4g-radius-l ux4g-border ux4g-mb-2xl">
                    ${DRAWER_TRIGGERS_HTML}
                </div>

                <!-- Hidden Panels for Triggers -->
                ${PANEL_TOP}
                ${PANEL_RIGHT}
                ${PANEL_BOTTOM}
                ${PANEL_LEFT}

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Utility classes for drawer positioning and structure.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Position Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Positions</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-drawer-top', label: 'Top Drawer' },
        { class: 'ux4g-drawer-right', label: 'Right Drawer' },
        { class: 'ux4g-drawer-bottom', label: 'Bottom Drawer' },
        { class: 'ux4g-drawer-left', label: 'Left Drawer' }
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

                        <!-- Structure Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structure</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
        { class: 'ux4g-drawer-overlay', label: 'Overlay' },
        { class: 'ux4g-drawer-header', label: 'Header' },
        { class: 'ux4g-drawer-body', label: 'Body Content' },
        { class: 'ux4g-drawer-footer', label: 'Footer Actions' }
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

export const DrawerVariants = {
    name: 'Drawer Variants',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Drawer Variants', 'Drawers can slide from any edge of the screen: Top, Right, Bottom, or Left.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('drawer-top', 'Top Drawer', 'Slides down from the top of the viewport.', DRAWER_TOP_HTML, false, getSnippetCode([
                    { label: 'Drawer Trigger - Top', html: '<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerTop">Open Top Drawer</button>' },
                    { label: 'Drawer Panel - Top', html: PANEL_TOP.trim() },
                ]))}
                ${renderDemoCodeBlock('drawer-right', 'Right Drawer', 'Slides in from the right of the viewport.', DRAWER_RIGHT_HTML, false, getSnippetCode([
                    { label: 'Drawer Trigger - Right', html: '<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerRight">Open Right Drawer</button>' },
                    { label: 'Drawer Panel - Right', html: PANEL_RIGHT.trim() },
                ]))}
                ${renderDemoCodeBlock('drawer-bottom', 'Bottom Drawer', 'Slides up from the bottom of the viewport.', DRAWER_BOTTOM_HTML, false, getSnippetCode([
                    { label: 'Drawer Trigger - Bottom', html: '<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerBottom">Open Bottom Drawer</button>' },
                    { label: 'Drawer Panel - Bottom', html: PANEL_BOTTOM.trim() },
                ]))}
                ${renderDemoCodeBlock('drawer-left', 'Left Drawer', 'Slides in from the left of the viewport.', DRAWER_LEFT_HTML, false, getSnippetCode([
                    { label: 'Drawer Trigger - Left', html: '<button class="ux4g-btn ux4g-btn-primary ux4g-btn-md" data-drawer="ux4g-drawerLeft">Open Left Drawer</button>' },
                    { label: 'Drawer Panel - Left', html: PANEL_LEFT.trim() },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
