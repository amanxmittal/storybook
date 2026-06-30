/**
 * Mega Menu Component Stories
 *
 * Showcasing Mega Menu layouts with and without category navigation.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Mega Menu',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Mega menus surface grouped navigation links in a broad panel, either with category switching or as a single multi-column content layout.',
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
    <section class="ux4g-bg-primary-strong ux4g-text-white ux4g-p-xl">
        <div class="ux4g-container">
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
            
        </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'MegaMenu');
const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const escapeCodeForInlineScript = (code) =>
    code
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$')
        .replace(/<\/script>/gi, '<\\/script>');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, behaviorScript = '', customCode = null) => {
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
                <div class="ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-w-100 ux4g-py-s">
                        ${htmlContent}
                    </div>
                </div>
            </div>

            <div class="ux4g-d-flex ux4g-jc-end ux4g-mb-l">
                <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm toggle-code" data-target="code-${id}">Show Code</button>
            </div>

            <div class="code-area ux4g-mt-m" id="code-${id}" style="display: none;">
                <div class="ux4g-tab ux4g-tab-underline ux4g-tab-md ux4g-mb-m">
                    <ul class="ux4g-tab-list">
                        <li class="ux4g-tab-item active tab-trigger" data-lang="html" data-id="${id}">HTML</li>
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

                    const scriptEl = document.currentScript;
                    const section = scriptEl ? scriptEl.closest('.ux4g-mb-3xl') : document.getElementById('section-' + blockId);
                    if (!section) return;

                    const toggleBtn = section.querySelector('.toggle-code');
                    const codeArea = section.querySelector('.code-area');
                    const output = section.querySelector('.code-output');
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

                    tabs.forEach((tab) => {
                        tab.onclick = () => {
                            tabs.forEach((trigger) => trigger.classList.remove('active'));
                            tab.classList.add('active');
                            currentLang = tab.dataset.lang;
                            highlight();
                        };
                    });

                    copyBtn.onclick = () => {
                        navigator.clipboard.writeText(output.textContent).then(() => {
                            const original = copyBtn.innerHTML;
                            copyBtn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-18 ux4g-text-white ux4g-mr-xs">check</span> <span class="ux4g-text-white">Copied</span>';
                            setTimeout(() => {
                                copyBtn.innerHTML = original;
                            }, 2000);
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
            ${behaviorScript}
        </div>
    `;
};

const renderCopyRows = (rows) =>
    rows
        .map(
            (row) => `
                <tr>
                    <td class="ux4g-p-l">
                        <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                            <div class="ux4g-d-flex ux4g-flex-column">
                                <span class="ux4g-label-s-strong">${row.label}</span>
                                <code class="ux4g-text-primary ux4g-fs-12">${row.className}</code>
                            </div>
                            <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.className}">
                                <span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span>
                            </button>
                        </div>
                    </td>
                </tr>
            `
        )
        .join('');

const renderMegaMenuBehaviorScript = (rootId) => `
    <script>
        (function() {
            const root = document.getElementById('${rootId}');
            if (!root) return;

            const menus = root.querySelectorAll('.ux4g-mega-menu');
            menus.forEach((menu) => {
                if (menu.dataset.megaMenuBound === 'true') return;
                menu.dataset.megaMenuBound = 'true';

                const categoryItems = Array.from(menu.querySelectorAll('.ux4g-mega-menu__category-item, .ux4g-mega-menu-five__category-item'));
                const contentBlocks = Array.from(menu.querySelectorAll('.ux4g-mega-menu__content, .ux4g-mega-menu-five__content'));

                if (!categoryItems.length || !contentBlocks.length) {
                    menu.querySelectorAll('.ux4g-mega-menu__content, .ux4g-mega-menu-five__content').forEach((content) => {
                        content.classList.add('ux4g-mega-menu__content--active');
                        content.classList.add('ux4g-mega-menu-five__content--active');
                    });
                    return;
                }

                const activateItem = (item) => {
                    const targetId = item.dataset.target || '';
                    const targetBlock = targetId ? menu.querySelector('#' + targetId) : null;
                    if (!targetBlock) return;

                    categoryItems.forEach((category) => {
                        category.classList.remove('ux4g-mega-menu__category-item--active');
                        category.classList.remove('ux4g-mega-menu-five__category-item--active');
                    });
                    contentBlocks.forEach((block) => {
                        block.classList.remove('ux4g-mega-menu__content--active');
                        block.classList.remove('ux4g-mega-menu-five__content--active');
                    });

                    if (item.classList.contains('ux4g-mega-menu-five__category-item')) {
                        item.classList.add('ux4g-mega-menu-five__category-item--active');
                        targetBlock.classList.add('ux4g-mega-menu-five__content--active');
                    } else {
                        item.classList.add('ux4g-mega-menu__category-item--active');
                        targetBlock.classList.add('ux4g-mega-menu__content--active');
                    }
                };

                categoryItems.forEach((item, index) => {
                    if (!item.dataset.target && contentBlocks[index]) {
                        item.dataset.target = contentBlocks[index].id;
                    }

                    item.addEventListener('click', (event) => {
                        event.preventDefault();
                        activateItem(item);
                    });
                });

                const activeItem = menu.querySelector('.ux4g-mega-menu__category-item--active, .ux4g-mega-menu-five__category-item--active') || categoryItems[0];
                if (activeItem) {
                    activateItem(activeItem);
                }
            });
        })();
    </script>
`;

const renderIntroUtilityScript = (rootId) => `
    <script>
        (function() {
            const root = document.getElementById('${rootId}');
            if (!root) return;

            root.querySelectorAll('.copy-text').forEach((button) => {
                if (button.dataset.copyBound === 'true') return;
                button.dataset.copyBound = 'true';

                button.onclick = () => {
                    const value = button.dataset.text || '';
                    navigator.clipboard.writeText(value).then(() => {
                        const original = button.innerHTML;
                        button.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-16 ux4g-text-success">check</span>';
                        setTimeout(() => {
                            button.innerHTML = original;
                        }, 2000);
                    });
                };
            });
        })();
    </script>
`;

const CORE_CLASS_ROWS = [
    { label: 'Base Mega Menu', className: 'ux4g-mega-menu' },
    { label: 'Layout Container', className: 'ux4g-mega-menu__container' },
    { label: 'Category Sidebar', className: 'ux4g-mega-menu__sidebar' },
    { label: 'Content Panel', className: 'ux4g-mega-menu__content' },
    { label: 'Navigation Column', className: 'ux4g-mega-menu__column' },
];

const STATE_CLASS_ROWS = [
    { label: 'Category List', className: 'ux4g-mega-menu__category-list' },
    { label: 'Category Item', className: 'ux4g-mega-menu__category-item' },
    { label: 'Active Category', className: 'ux4g-mega-menu__category-item--active' },
    { label: 'Item List', className: 'ux4g-mega-menu__item-list' },
    { label: 'Visible Content', className: 'ux4g-mega-menu__content--active' },
];

// --- Exact Mega Menu Variant templates from index2.html ---

const MEGA_MENU_VARIANT_1_HTML = `
<section class="ux4g-mega-menu">
    <div class="ux4g-mega-menu__container">
        <div class="ux4g-mega-menu__sidebar">
            <ul class="ux4g-mega-menu__category-list">
                <li class="ux4g-mega-menu__category-item ux4g-mega-menu__category-item--active">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 1</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 2</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 3</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 4</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 5</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 6</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 7</a>
                </li>
                <li class="ux4g-mega-menu__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 8</a>
                </li>
            </ul>
        </div>
        <div class="ux4g-mega-menu__content ux4g-mega-menu__content--active" id="category-1">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 4 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 1 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 2 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 4 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 5 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 4 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 6 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)"><i class="ux4g-icon-outlined">token</i>Item 7 <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span></a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-2">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title2</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title2</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title2</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title2</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-3">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title3</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title3</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title3</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title3</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-4">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title4</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title4</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title4</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title4</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-5">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title5</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title5</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title5</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title5</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-6">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title6</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title6</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title6</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title6</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-7">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title7</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title7</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title7</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title7</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        </div>
        <div class="ux4g-mega-menu__content" id="category-8">
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title8</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title8</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title8</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title8</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 5</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 6</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 7</a></li>
                </ul>
            </div>
        
        </div>
    </section>
`;

const MEGA_MENU_VARIANT_2_HTML = `
<section class="ux4g-mega-menu ux4g-mb-l">
    <div class="ux4g-mega-menu__container">
        <div class="ux4g-mega-menu__list-content">
            <!-- Column 1 -->
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 1
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 2
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 3</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Column 2 -->
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 1</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 2</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 3
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Column 3 -->
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 1
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 2
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 3</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>

            <!-- Column 4 -->
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 1
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 2</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <i class="ux4g-icon-outlined ux4g-mega-menu__item-icon">token</i>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 3</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidi...</p>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        
    </section>
`;

const MEGA_MENU_VARIANT_3_HTML = `
<section class="ux4g-mega-menu">
    <div class="ux4g-mega-menu__container">
        <div class="ux4g-mega-menu__list-content ux4g-mega-menu__list-content--grid">
            <!-- Row 1 -->
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>

            <!-- Row 2 -->
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
            <div class="ux4g-mega-menu__column">
                <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                <ul class="ux4g-mega-menu__item-list">
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                    <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                </ul>
            </div>
        
    </section>
`;

const MEGA_MENU_VARIANT_4_HTML = `
<section class="ux4g-mega-menu ux4g-mb-l">
    <div class="ux4g-mega-menu__container">
        <div class="ux4g-mega-menu__list-content ux4g-mega-menu__list-content--promo">
            <!-- Left Grid: 3 columns, 2 rows -->
            <div class="ux4g-mega-menu__grid-left">
                <!-- Column 1, Row 1 -->
                <div class="ux4g-mega-menu__column">
                    <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                    <ul class="ux4g-mega-menu__item-list">
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    </ul>
                </div>
                <!-- Column 2, Row 1 -->
                <div class="ux4g-mega-menu__column">
                    <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                    <ul class="ux4g-mega-menu__item-list">
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    </ul>
                </div>
                <!-- Column 3, Row 1 -->
                <div class="ux4g-mega-menu__column">
                    <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                    <ul class="ux4g-mega-menu__item-list">
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    </ul>
                </div>

                <!-- Column 1, Row 2 -->
                <div class="ux4g-mega-menu__column">
                    <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                    <ul class="ux4g-mega-menu__item-list">
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    </ul>
                </div>
                <!-- Column 2, Row 2 -->
                <div class="ux4g-mega-menu__column">
                    <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                    <ul class="ux4g-mega-menu__item-list">
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    </ul>
                </div>
                <!-- Column 3, Row 2 -->
                <div class="ux4g-mega-menu__column">
                    <h3 class="ux4g-mega-menu__title ux4g-heading-xs-strong">Title</h3>
                    <ul class="ux4g-mega-menu__item-list">
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 1</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 2</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 3</a></li>
                        <li class="ux4g-mega-menu__item ux4g-body-s-default"><a href="javascript:void(0)">Item 4</a></li>
                    </ul>
                </div>
            </div>
            <!-- Right Promo Sidebar -->
            <div class="ux4g-mega-menu__promo-sidebar">
                <div class="ux4g-mega-menu__promo-card">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
                <div class="ux4g-mega-menu__promo-card">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        
     </section>
`;

const MEGA_MENU_VARIANT_5_HTML = `
<section class="ux4g-mega-menu ux4g-mega-menu--five ux4g-mb-l">
    <div class="ux4g-mega-menu__container">
        <div class="ux4g-mega-menu__sidebar">
            <ul class="ux4g-mega-menu__category-list">
                <li class="ux4g-mega-menu-five__category-item ux4g-mega-menu-five__category-item--active">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 1</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 2</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 3</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 4</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 5</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 6</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 7</a>
                </li>
                <li class="ux4g-mega-menu-five__category-item">
                    <a href="javascript:void(0)" class="ux4g-mega-menu__category-link ux4g-body-s-default">Category 8</a>
                </li>
            </ul>
        </div>
        
        <!-- Category 1 Content -->
        <div class="ux4g-mega-menu-five__content ux4g-mega-menu-five__content--active" id="five-category-1">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 1</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco</p>
                </div>
                <div class="ux4g-mega-menu-five__grid">
                    <!-- Col 1 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 1
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Col 2 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 1
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Col 3 (Row 2 Col 1) -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 2
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Col 4 (Row 2 Col 2) -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 2
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Col 5 (Row 3 Col 1) -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 3
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Col 6 (Row 3 Col 2) -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 3
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <!-- Right Promo Card -->
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 2 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-2">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 2</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div class="ux4g-mega-menu-five__grid">
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-five__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 1</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 3 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-3">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 3</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 4 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-4">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 4</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 5 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-5">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 5</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 6 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-6">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 6</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 7 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-7">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 7</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        </div>

        <!-- Category 8 Content -->
        <div class="ux4g-mega-menu-five__content" id="five-category-8">
            <div class="ux4g-mega-menu-five__main">
                <div class="ux4g-mega-menu-five__header">
                    <h3 class="ux4g-heading-xs-strong">Category 8</h3>
                    <p class="ux4g-body-s-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="ux4g-mega-menu__promo-sidebar ux4g-d-flex">
                <div class="ux4g-mega-menu__promo-card ux4g-h-100">
                    <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
                </div>
            </div>
        
    </section>
`;

const MEGA_MENU_VARIANT_6_HTML = `
<section class="ux4g-mega-menu ux4g-mega-menu--six ux4g-mb-l">
    <div class="ux4g-mega-menu__container">
        <div class="ux4g-mega-menu-six__main">
            <div class="ux4g-mega-menu-six__grid">
                <!-- Column 1 -->
                <div class="ux4g-mega-menu-six__column">
                    <!-- Item 1 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 1
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 2 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 2</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 3 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 3</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 4 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 4</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Column 2 -->
                <div class="ux4g-mega-menu-six__column">
                    <!-- Item 1 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 1</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 2 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 2</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 3 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 3
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 4 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 4</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>

                <!-- Column 3 -->
                <div class="ux4g-mega-menu-six__column">
                    <!-- Item 1 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 1</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 2 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 2</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 3 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">
                                    Item 3
                                    <span class="ux4g-tag-tonal-primary ux4g-tag-s">Tag</span>
                                </div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                    <!-- Item 4 -->
                    <div class="ux4g-mega-menu__item ux4g-body-s-default">
                        <a href="javascript:void(0)" class="ux4g-mega-menu__item-link">
                            <div class="ux4g-mega-menu-six__icon-wrapper">
                                <i class="ux4g-icon-outlined">token</i>
                            </div>
                            <div class="ux4g-mega-menu__item-text">
                                <div class="ux4g-mega-menu__item-title ux4g-body-s-default">Item 4</div>
                                <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary ux4g-m-none">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Right Promo Column (2 cards) -->
        <div class="ux4g-mega-menu-six__promo-sidebar">
            <div class="ux4g-mega-menu__promo-card">
                <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
            </div>
            <div class="ux4g-mega-menu__promo-card">
                <img class="ux4g-radius-m" src="./assets/images/ux4g-card.svg" alt="Promo Card" />
            </div>
        
    </section>
`;

const INTRODUCTION_CONTENT = `
    <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="mega-menu-intro">
        ${getHeroHeader('Mega Menu', 'Mega menus organize large navigation sets into scannable columns. This pattern supports both category-led exploration and a streamlined multi-column layout without categories.')}

        <section >
            <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Live previews adapted from the mega menu patterns, presented in the same Storybook structure as other UX4G components.</p>

            <div class="ux4g-mb-2xl">
                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mega Menu Variant 1</h3>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-py-s">
                        ${MEGA_MENU_VARIANT_1_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-mb-2xl">
                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mega Menu Variant 2</h3>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-py-s">
                        ${MEGA_MENU_VARIANT_2_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-mb-2xl">
                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mega Menu Variant 3</h3>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-py-s">
                        ${MEGA_MENU_VARIANT_3_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-mb-2xl">
                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mega Menu Variant 4</h3>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-py-s">
                        ${MEGA_MENU_VARIANT_4_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-mb-2xl">
                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mega Menu Variant 5</h3>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-py-s">
                        ${MEGA_MENU_VARIANT_5_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-mb-2xl">
                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Mega Menu Variant 6</h3>
                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-l" style="overflow-x: auto;">
                    <div class="ux4g-py-s">
                        ${MEGA_MENU_VARIANT_6_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

            <div id="class-reference">
                <div class="ux4g-my-l">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy the structural and state classes used to assemble the mega menu patterns.</p>
                </div>

                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Core Structure</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${renderCopyRows(CORE_CLASS_ROWS)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Navigation & States</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${renderCopyRows(STATE_CLASS_ROWS)}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                
            </section>
        ${renderMegaMenuBehaviorScript('mega-menu-intro')}
        ${renderIntroUtilityScript('mega-menu-intro')}
    </div>
`;

export const Introduction = {
    render: () => INTRODUCTION_CONTENT,
    parameters: {
        docs: { disable: true },
    },
};

export const Variant1 = {
    name: 'Variant 1',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mega Menu Variant 1', 'Use a category rail when the navigation needs a strong information hierarchy and multiple grouped destinations.')}
            <div  id="mega-menu-variants-story-1">
                ${renderDemoCodeBlock(
                    'mega-menu-variant-1',
                    'Mega Menu Variant 1',
                    'Use a category rail when the navigation needs a strong information hierarchy and multiple grouped destinations.',
                    MEGA_MENU_VARIANT_1_HTML,
                    renderMegaMenuBehaviorScript('mega-menu-variants-story-1'),
                    getSnippetCode([{ label: 'Mega Menu Variant 1', html: MEGA_MENU_VARIANT_1_HTML.trim() }])
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Variant2 = {
    name: 'Variant 2',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mega Menu Variant 2', 'A multi-column mega menu with icons, title labels, and text descriptions.')}
            <div  id="mega-menu-variants-story-2">
                ${renderDemoCodeBlock(
                    'mega-menu-variant-2',
                    'Mega Menu Variant 2',
                    'A multi-column mega menu with icons, title labels, and text descriptions.',
                    MEGA_MENU_VARIANT_2_HTML,
                    renderMegaMenuBehaviorScript('mega-menu-variants-story-2'),
                    getSnippetCode([{ label: 'Mega Menu Variant 2', html: MEGA_MENU_VARIANT_2_HTML.trim() }])
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Variant3 = {
    name: 'Variant 3',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mega Menu Variant 3', 'A grid based flat mega menu layout showing multiple rows of navigation columns.')}
            <div  id="mega-menu-variants-story-3">
                ${renderDemoCodeBlock(
                    'mega-menu-variant-3',
                    'Mega Menu Variant 3',
                    'A grid based flat mega menu layout showing multiple rows of navigation columns.',
                    MEGA_MENU_VARIANT_3_HTML,
                    renderMegaMenuBehaviorScript('mega-menu-variants-story-3'),
                    getSnippetCode([{ label: 'Mega Menu Variant 3', html: MEGA_MENU_VARIANT_3_HTML.trim() }])
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Variant4 = {
    name: 'Variant 4',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mega Menu Variant 4', 'A mega menu layout featuring a grid of navigation options alongside a right-side promo cards container.')}
            <div  id="mega-menu-variants-story-4">
                ${renderDemoCodeBlock(
                    'mega-menu-variant-4',
                    'Mega Menu Variant 4',
                    'A mega menu layout featuring a grid of navigation options alongside a right-side promo cards container.',
                    MEGA_MENU_VARIANT_4_HTML,
                    renderMegaMenuBehaviorScript('mega-menu-variants-story-4'),
                    getSnippetCode([{ label: 'Mega Menu Variant 4', html: MEGA_MENU_VARIANT_4_HTML.trim() }])
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Variant5 = {
    name: 'Variant 5',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mega Menu Variant 5', 'A category sidebar based menu style featuring custom icon wrappers, descriptions, and a right-side promo card container.')}
            <div  id="mega-menu-variants-story-5">
                ${renderDemoCodeBlock(
                    'mega-menu-variant-5',
                    'Mega Menu Variant 5',
                    'A category sidebar based menu style featuring custom icon wrappers, descriptions, and a right-side promo card container.',
                    MEGA_MENU_VARIANT_5_HTML,
                    renderMegaMenuBehaviorScript('mega-menu-variants-story-5'),
                    getSnippetCode([{ label: 'Mega Menu Variant 5', html: MEGA_MENU_VARIANT_5_HTML.trim() }])
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Variant6 = {
    name: 'Variant 6',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Mega Menu Variant 6', 'A grid based flat mega menu with icon wrappers, header details, and dual right-side promo cards container.')}
            <div  id="mega-menu-variants-story-6">
                ${renderDemoCodeBlock(
                    'mega-menu-variant-6',
                    'Mega Menu Variant 6',
                    'A grid based flat mega menu with icon wrappers, header details, and dual right-side promo cards container.',
                    MEGA_MENU_VARIANT_6_HTML,
                    renderMegaMenuBehaviorScript('mega-menu-variants-story-6'),
                    getSnippetCode([{ label: 'Mega Menu Variant 6', html: MEGA_MENU_VARIANT_6_HTML.trim() }])
                )}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
