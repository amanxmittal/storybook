/**
 * Table Component Stories
 *
 * Showcasing table sizes, header variants, interactive headers, row striping,
 * embedded controls, loading states, and grouped headers.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Table',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Tables organize structured data with configurable headers, selectable rows, zebra striping, embedded controls, and advanced grouped-header layouts.',
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

const getReactCode = (html) => htmlToJsx(html, 'Table');

const escapeCodeForInlineScript = (code) =>
    code
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\$/g, '\\$')
        .replace(/<\/script>/gi, '<\\/script>');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, customCode = null) => {
    const displayCode = formatCode(customCode || htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

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

                        if (!toggleBtn || !codeArea || !output || !copyBtn) {
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

const SIZE_VARIATIONS_AND_DIVIDERS_HTML = `
<div class="ux4g-w-100 ux4g-d-grid ux4g-gap-xl">
    <div>
        <div class="ux4g-mb-s ux4g-fw-semibold ux4g-fs-14 ux4g-text-neutral-secondary">Size M (Default) + Column Dividers</div>
        <div class="ux4g-table-responsive ux4g-table-rounded">
            <table class="ux4g-table ux4g-table-m ux4g-table-column-dividers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="ux4g-table-cell-text">Anika Kapoor</td>
                        <td>Lead Designer</td>
                        <td>Design</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td class="ux4g-table-cell-text">Rohan Joshi</td>
                        <td>Sr. Engineer</td>
                        <td>Engineering</td>
                        <td>Bangalore</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div>
        <div class="ux4g-mb-s ux4g-fw-semibold ux4g-fs-14 ux4g-text-neutral-secondary">Size S + No Row Dividers</div>
        <div class="ux4g-table-responsive ux4g-table-rounded">
            <table class="ux4g-table ux4g-table-s ux4g-table-no-row-dividers">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Department</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="ux4g-table-cell-text">Anika Kapoor</td>
                        <td>Lead Designer</td>
                        <td>Design</td>
                        <td>Mumbai</td>
                    </tr>
                    <tr>
                        <td class="ux4g-table-cell-text">Rohan Joshi</td>
                        <td>Sr. Engineer</td>
                        <td>Engineering</td>
                        <td>Bangalore</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`.trim();

const SIZE_VARIATIONS_AND_DIVIDERS_CLEAN_CODE = `
/* Variant: Size M (Default) + Column Dividers */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-m ux4g-table-column-dividers">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Department</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ux4g-table-cell-text">Anika Kapoor</td>
        <td>Lead Designer</td>
        <td>Design</td>
        <td>Mumbai</td>
      </tr>
      <tr>
        <td class="ux4g-table-cell-text">Rohan Joshi</td>
        <td>Sr. Engineer</td>
        <td>Engineering</td>
        <td>Bangalore</td>
      </tr>
    </tbody>
  </table>
</div>

/* Variant: Size S + No Row Dividers */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-s ux4g-table-no-row-dividers">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Department</th>
        <th>Location</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ux4g-table-cell-text">Anika Kapoor</td>
        <td>Lead Designer</td>
        <td>Design</td>
        <td>Mumbai</td>
      </tr>
      <tr>
        <td class="ux4g-table-cell-text">Rohan Joshi</td>
        <td>Sr. Engineer</td>
        <td>Engineering</td>
        <td>Bangalore</td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const HEADER_ROW_VARIANTS_HTML = `
<div class="ux4g-w-100 ux4g-d-grid ux4g-gap-l">
    <div>
        <div class="ux4g-mb-s ux4g-fw-semibold">Neutral - Var(--Table-Header-Bg)</div>
        <div class="ux4g-table-responsive ux4g-table-rounded">
            <table class="ux4g-table ux4g-table-m ux4g-table-interactive ux4g-table-sortable">
                <thead>
                    <tr>
                        <th>
                            <div class="ux4g-table-th-content ux4g-jc-center">
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                </label>
                            </div>
                        </th>
                        <th data-sort="desc">
                            <div class="ux4g-table-th-header-row">
                                <div class="ux4g-table-th-content">Name</div>
                                <i aria-label="Filter" class="ux4g-table-filter-icon ux4g-icon-outlined">filter_alt</i>
                            </div>
                            <div class="ux4g-table-inline-filter">
                                <div class="ux4g-search-container ux4g-search-s">
                                    <div class="ux4g-search">
                                        <i class="ux4g-icon ux4g-search-leading-icon">search</i>
                                        <input class="ux4g-search-input" placeholder="Search Name..." type="text" />
                                        <div class="ux4g-search-actions">
                                            <button aria-label="Clear filter" class="ux4g-search-action-btn ux4g-search-clear" tabindex="-1" title="Clear filter">
                                                <i class="ux4g-icon-outlined">close</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th data-sort="desc">
                            <div class="ux4g-table-th-header-row">
                                <div class="ux4g-table-th-content">Role</div>
                                <i aria-label="Filter" class="ux4g-table-filter-icon ux4g-icon-outlined">filter_alt</i>
                            </div>
                            <div class="ux4g-table-inline-filter">
                                <div class="ux4g-search-container ux4g-search-s">
                                    <div class="ux4g-search">
                                        <i class="ux4g-icon ux4g-search-leading-icon">search</i>
                                        <input class="ux4g-search-input" placeholder="Search Role..." type="text" />
                                        <div class="ux4g-search-actions">
                                            <button aria-label="Clear filter" class="ux4g-search-action-btn ux4g-search-clear" tabindex="-1" title="Clear filter">
                                                <i class="ux4g-icon-outlined">close</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th data-sort="desc">
                            <div class="ux4g-table-th-header-row">
                                <div class="ux4g-table-th-content">Department</div>
                                <i aria-label="Filter" class="ux4g-table-filter-icon ux4g-icon-outlined">filter_alt</i>
                            </div>
                            <div class="ux4g-table-inline-filter">
                                <div class="ux4g-search-container ux4g-search-s">
                                    <div class="ux4g-search">
                                        <i class="ux4g-icon ux4g-search-leading-icon">search</i>
                                        <input class="ux4g-search-input" placeholder="Search Department..." type="text" />
                                        <div class="ux4g-search-actions">
                                            <button aria-label="Clear filter" class="ux4g-search-action-btn ux4g-search-clear" tabindex="-1" title="Clear filter">
                                                <i class="ux4g-icon-outlined">close</i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </th>
                        <th data-sort="none">
                            <div class="ux4g-table-th-content">Status</div>
                        </th>
                        <th>
                            <div class="ux4g-table-th-content ux4g-jc-center">Actions</div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="ux4g-is-selected">
                        <td>
                            <div class="ux4g-table-selection-col">
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input checked class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="ux4g-table-cell-avatar">
                                <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div>
                                <span class="ux4g-fw-semibold">Anika Kapoor</span>
                            </div>
                        </td>
                        <td>Lead Designer</td>
                        <td>Design</td>
                        <td>
                            <span class="ux4g-tag-filled-neutral ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                        <td>
                            <div class="ux4g-d-flex ux4g-gap-xs ux4g-ai-center ux4g-jc-center">
                                <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button>
                                <button class="ux4g-table-cell-icon-btn ux4g-text-danger"><i class="ux4g-icon">delete</i></button>
                                <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">share</i></button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="ux4g-table-selection-col">
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="ux4g-table-cell-avatar">
                                <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">RJ</div>
                                <span class="ux4g-fw-semibold">Rohan Joshi</span>
                            </div>
                        </td>
                        <td>Sr. Engineer</td>
                        <td>Engineering</td>
                        <td>
                            <span class="ux4g-tag-filled-neutral ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                        <td>
                            <div class="ux4g-d-flex ux4g-gap-xs ux4g-ai-center ux4g-jc-center">
                                <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button>
                                <button class="ux4g-table-cell-icon-btn ux4g-text-danger"><i class="ux4g-icon">delete</i></button>
                                <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">share</i></button>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div>
        <div class="ux4g-mb-s ux4g-fw-semibold">Brand - Var(--Table-Header-Brand-Bg)</div>
        <div class="ux4g-table-responsive ux4g-table-rounded">
            <table class="ux4g-table ux4g-table-m ux4g-table-interactive ux4g-table-sortable ux4g-table-header-brand">
                <thead>
                    <tr>
                        <th>
                            <div class="ux4g-table-th-content ux4g-jc-center">
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                </label>
                            </div>
                        </th>
                        <th data-sort="desc"><div class="ux4g-table-th-content">Name</div></th>
                        <th data-sort="desc"><div class="ux4g-table-th-content">Role</div></th>
                        <th data-sort="desc"><div class="ux4g-table-th-content">Department</div></th>
                        <th data-sort="none"><div class="ux4g-table-th-content">Status</div></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="ux4g-table-selection-col">
                                <label class="ux4g-checkbox ux4g-checkbox-md">
                                    <input class="ux4g-checkbox-input" type="checkbox" />
                                    <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                                </label>
                            </div>
                        </td>
                        <td>
                            <div class="ux4g-table-cell-avatar">
                                <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div>
                                <span class="ux4g-fw-semibold">Anika Kapoor</span>
                            </div>
                        </td>
                        <td>Lead Designer</td>
                        <td>Design</td>
                        <td>
                            <span class="ux4g-tag-filled-neutral ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`.trim();

const HEADER_ROW_VARIANTS_CLEAN_CODE = `
/* Header Row Variant: Neutral */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-m ux4g-table-interactive ux4g-table-sortable">
    <thead>
      <tr>
<th>
          <div class="ux4g-table-th-content ux4g-jc-center">
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-header-row">
            <div class="ux4g-table-th-content">Name</div>
            <i aria-label="Filter" class="ux4g-table-filter-icon ux4g-icon-outlined">filter_alt</i>
          </div>
          <div class="ux4g-table-inline-filter">
            <div class="ux4g-search-container ux4g-search-s">
              <div class="ux4g-search">
                <i class="ux4g-icon ux4g-search-leading-icon">search</i>
                <input class="ux4g-search-input" placeholder="Search Name..." type="text" />
                <div class="ux4g-search-actions">
                  <button aria-label="Clear filter" class="ux4g-search-action-btn ux4g-search-clear" tabindex="-1" title="Clear filter">
                    <i class="ux4g-icon-outlined">close</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-header-row">
            <div class="ux4g-table-th-content">Role</div>
            <i aria-label="Filter" class="ux4g-table-filter-icon ux4g-icon-outlined">filter_alt</i>
          </div>
          <div class="ux4g-table-inline-filter">
            <div class="ux4g-search-container ux4g-search-s">
              <div class="ux4g-search">
                <i class="ux4g-icon ux4g-search-leading-icon">search</i>
                <input class="ux4g-search-input" placeholder="Search Role..." type="text" />
                <div class="ux4g-search-actions">
                  <button aria-label="Clear filter" class="ux4g-search-action-btn ux4g-search-clear" tabindex="-1" title="Clear filter">
                    <i class="ux4g-icon-outlined">close</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-header-row">
            <div class="ux4g-table-th-content">Department</div>
            <i aria-label="Filter" class="ux4g-table-filter-icon ux4g-icon-outlined">filter_alt</i>
          </div>
          <div class="ux4g-table-inline-filter">
            <div class="ux4g-search-container ux4g-search-s">
              <div class="ux4g-search">
                <i class="ux4g-icon ux4g-search-leading-icon">search</i>
                <input class="ux4g-search-input" placeholder="Search Department..." type="text" />
                <div class="ux4g-search-actions">
                  <button aria-label="Clear filter" class="ux4g-search-action-btn ux4g-search-clear" tabindex="-1" title="Clear filter">
                    <i class="ux4g-icon-outlined">close</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </th>
        <th data-sort="none">
          <div class="ux4g-table-th-content">Status</div>
        </th>
        <th>
          <div class="ux4g-table-th-content ux4g-jc-center">Actions</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr class="ux4g-is-selected">
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input checked class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div>
            <span class="ux4g-fw-semibold">Anika Kapoor</span>
          </div>
        </td>
        <td>Lead Designer</td>
        <td>Design</td>
        <td>
          <span class="ux4g-tag-filled-neutral ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-gap-xs ux4g-ai-center ux4g-jc-center">
            <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button>
            <button class="ux4g-table-cell-icon-btn ux4g-text-danger"><i class="ux4g-icon">delete</i></button>
            <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">share</i></button>
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">RJ</div>
            <span class="ux4g-fw-semibold">Rohan Joshi</span>
          </div>
        </td>
        <td>Sr. Engineer</td>
        <td>Engineering</td>
        <td>
          <span class="ux4g-tag-filled-neutral ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-gap-xs ux4g-ai-center ux4g-jc-center">
            <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button>
            <button class="ux4g-table-cell-icon-btn ux4g-text-danger"><i class="ux4g-icon">delete</i></button>
            <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">share</i></button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>

/* Header Row Variant: Brand */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-m ux4g-table-interactive ux4g-table-sortable ux4g-table-header-brand">
    <thead>
      <tr>
<th>
          <div class="ux4g-table-th-content ux4g-jc-center">
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Name</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Role</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Department</div>
        </th>
        <th data-sort="none">
          <div class="ux4g-table-th-content">Status</div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div>
            <span class="ux4g-fw-semibold">Anika Kapoor</span>
          </div>
        </td>
        <td>Lead Designer</td>
        <td>Design</td>
        <td>
          <span class="ux4g-tag-filled-neutral ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const INTERACTIVE_HEADERS_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-table-responsive ux4g-table-rounded">
        <table class="ux4g-table ux4g-table-m ux4g-table-column-dividers ux4g-table-sortable ux4g-table-resizable" id="interactive-demo">
            <thead>
                <tr>
                    <th data-sort="asc">
                        <div class="ux4g-table-th-content">City</div>
                    </th>
                    <th data-sort="none">
                        <div class="ux4g-table-th-content">State</div>
                    </th>
                    <th data-sort="desc">
                        <div class="ux4g-table-th-content">Population</div>
                    </th>
                    <th>
                        <div class="ux4g-table-th-content">Area <i class="ux4g-icon">more_vert</i></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Mumbai</td>
                    <td>Maharashtra</td>
                    <td>20.4M</td>
                    <td>603 km&sup2;</td>
                </tr>
                <tr>
                    <td>Delhi</td>
                    <td>Delhi NCT</td>
                    <td>16.8M</td>
                    <td>1,484 km&sup2;</td>
                </tr>
                <tr>
                    <td>Bengaluru</td>
                    <td>Karnataka</td>
                    <td>12.3M</td>
                    <td>741 km&sup2;</td>
                </tr>
                <tr>
                    <td>Chennai</td>
                    <td>Tamil Nadu</td>
                    <td>10.9M</td>
                    <td>426 km&sup2;</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`.trim();

const INTERACTIVE_HEADERS_CLEAN_CODE = `
/* Interactive Headers: Sort Cycle + Column Resizing */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-m ux4g-table-column-dividers ux4g-table-sortable ux4g-table-resizable" id="interactive-demo">
    <thead>
      <tr>
        <th data-sort="asc">
          <div class="ux4g-table-th-content">City</div>
        </th>
        <th data-sort="none">
          <div class="ux4g-table-th-content">State</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Population</div>
        </th>
        <th>
          <div class="ux4g-table-th-content">Area <i class="ux4g-icon">more_vert</i></div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mumbai</td>
        <td>Maharashtra</td>
        <td>20.4M</td>
        <td>603 km&sup2;</td>
      </tr>
      <tr>
        <td>Delhi</td>
        <td>Delhi NCT</td>
        <td>16.8M</td>
        <td>1,484 km&sup2;</td>
      </tr>
      <tr>
        <td>Bengaluru</td>
        <td>Karnataka</td>
        <td>12.3M</td>
        <td>741 km&sup2;</td>
      </tr>
      <tr>
        <td>Chennai</td>
        <td>Tamil Nadu</td>
        <td>10.9M</td>
        <td>426 km&sup2;</td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const ROW_INTERACTIONS_AND_ZEBRA_STRIPING_HTML = `
<div class="ux4g-w-100 ux4g-d-grid ux4g-gap-l">
    <div>
        <div class="ux4g-mb-s ux4g-fw-semibold">Zebra Rows + Interactive Rows</div>
        <div class="ux4g-table-responsive ux4g-table-rounded">
            <table class="ux4g-table ux4g-table-zebra-rows ux4g-table-interactive">
                <thead>
                    <tr>
                        <th>Department</th>
                        <th>Budget</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Engineering</td>
                        <td>&#8377;45,00,000</td>
                        <td>
                            <span class="ux4g-tag-filled-success ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                    </tr>
                    <tr class="ux4g-is-selected">
                        <td>Design (Selected)</td>
                        <td>&#8377;12,00,000</td>
                        <td>
                            <span class="ux4g-tag-filled-warning ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                    </tr>
                    <tr class="ux4g-is-disabled">
                        <td>Marketing (Disabled)</td>
                        <td>&#8377;8,00,000</td>
                        <td>
                            <span class="ux4g-tag-filled-neutral ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td>HR</td>
                        <td>&#8377;5,50,000</td>
                        <td>
                            <span class="ux4g-tag-filled-neutral ux4g-tag-s">
                                <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <div>
        <div class="ux4g-mb-s ux4g-fw-semibold">Zebra Striping: Columns Mode</div>
        <div class="ux4g-table-responsive ux4g-table-rounded">
            <table class="ux4g-table ux4g-table-zebra-cols ux4g-table-interactive">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>State</th>
                        <th>Population</th>
                        <th>Area (km&sup2;)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mumbai</td>
                        <td>Maharashtra</td>
                        <td>20.4M</td>
                        <td>603</td>
                    </tr>
                    <tr>
                        <td>Delhi</td>
                        <td>Delhi NCT</td>
                        <td>16.8M</td>
                        <td>1,484</td>
                    </tr>
                    <tr>
                        <td>Bengaluru</td>
                        <td>Karnataka</td>
                        <td>12.3M</td>
                        <td>741</td>
                    </tr>
                    <tr>
                        <td>Chennai</td>
                        <td>Tamil Nadu</td>
                        <td>10.9M</td>
                        <td>426</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
`.trim();

const ROW_INTERACTIONS_AND_ZEBRA_STRIPING_CLEAN_CODE = `
/* Variant: Zebra Rows + Interactive Rows */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-zebra-rows ux4g-table-interactive">
    <thead>
      <tr>
        <th>Department</th>
        <th>Budget</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Engineering</td>
        <td>&#8377;45,00,000</td>
        <td>
          <span class="ux4g-tag-filled-success ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
      </tr>
      <tr class="ux4g-is-selected">
        <td>Design (Selected)</td>
        <td>&#8377;12,00,000</td>
        <td>
          <span class="ux4g-tag-filled-warning ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
      </tr>
      <tr class="ux4g-is-disabled">
        <td>Marketing (Disabled)</td>
        <td>&#8377;8,00,000</td>
        <td>
          <span class="ux4g-tag-filled-neutral ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
      </tr>
      <tr>
        <td>HR</td>
        <td>&#8377;5,50,000</td>
        <td>
          <span class="ux4g-tag-filled-neutral ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

/* Variant: Zebra Striping - Columns Mode */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-zebra-cols ux4g-table-interactive">
    <thead>
      <tr>
        <th>City</th>
        <th>State</th>
        <th>Population</th>
        <th>Area (km&sup2;)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mumbai</td>
        <td>Maharashtra</td>
        <td>20.4M</td>
        <td>603</td>
      </tr>
      <tr>
        <td>Delhi</td>
        <td>Delhi NCT</td>
        <td>16.8M</td>
        <td>1,484</td>
      </tr>
      <tr>
        <td>Bengaluru</td>
        <td>Karnataka</td>
        <td>12.3M</td>
        <td>741</td>
      </tr>
      <tr>
        <td>Chennai</td>
        <td>Tamil Nadu</td>
        <td>10.9M</td>
        <td>426</td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const SELECTION_FEATURE_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-table-responsive ux4g-table-rounded">
        <table class="ux4g-table ux4g-table-interactive ux4g-table-m">
            <thead>
                <tr>
                    <th>
                        <div class="ux4g-table-th-content ux4g-jc-center">
                            <label class="ux4g-checkbox ux4g-checkbox-md">
                                <input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" />
                                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                            </label>
                        </div>
                    </th>
                    <th>User</th>
                    <th>Status (Radio)</th>
                    <th>Action (Icon)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="ux4g-table-selection-col">
                            <span class="ux4g-sno-text">1</span>
                            <label class="ux4g-checkbox ux4g-checkbox-md">
                                <input aria-label="Select row 1" class="ux4g-checkbox-input" type="checkbox" />
                                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-table-cell-avatar">
                            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">
                                <img alt="avatar" src="https://i.pravatar.cc/150?u=1" />
                            </div>
                            <span>Anika Kapoor</span>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-s">
                            <label class="ux4g-radio ux4g-radio-md">
                                <input checked class="ux4g-radio-input" name="status1" type="radio" />
                                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                Active
                            </label>
                        </div>
                    </td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button></td>
                </tr>
                <tr class="ux4g-is-selected">
                    <td>
                        <div class="ux4g-table-selection-col">
                            <span class="ux4g-sno-text">2</span>
                            <label class="ux4g-checkbox ux4g-checkbox-md">
                                <input aria-label="Select row 2" checked class="ux4g-checkbox-input" type="checkbox" />
                                <div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-table-cell-avatar">
                            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">
                                <i class="ux4g-icon ux4g-fs-32 ux4g-text-neutral-secondary">account_circle</i>
                            </div>
                            <span>Rohan Joshi</span>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-s">
                            <label class="ux4g-radio ux4g-radio-md">
                                <input class="ux4g-radio-input" name="status1" type="radio" />
                                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                                Inactive
                            </label>
                        </div>
                    </td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">delete</i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`.trim();

const SELECTION_FEATURE_CLEAN_CODE = `
/* Special Feature: Hover Selection, Checkbox, Radio, Avatar, Icon */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-interactive ux4g-table-m">
    <thead>
      <tr>
        <th style="width:48px">
          <div class="ux4g-table-th-content ux4g-jc-center">
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </th>
        <th>User</th>
        <th>Status (Radio)</th>
        <th>Action (Icon)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="ux4g-table-selection-col">
            <span class="ux4g-sno-text">1</span>
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input aria-label="Select row 1" class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">
              <img alt="avatar" src="https://i.pravatar.cc/150?u=1" />
            </div>
            <span>Anika Kapoor</span>
          </div>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-s">
            <label class="ux4g-radio ux4g-radio-md">
              <input checked class="ux4g-radio-input" name="status1" type="radio" />
              <div class="ux4g-radio-control">
                <span class="ux4g-radiomark"></span>
              </div>
              Active
            </label>
          </div>
        </td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button>
        </td>
      </tr>
      <tr class="ux4g-is-selected">
        <td>
          <div class="ux4g-table-selection-col">
            <span class="ux4g-sno-text">2</span>
            <label class="ux4g-checkbox ux4g-checkbox-md">
              <input aria-label="Select row 2" checked class="ux4g-checkbox-input" type="checkbox" />
              <div class="ux4g-checkbox-control">
                <span class="ux4g-checkmark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">
              <i class="ux4g-icon ux4g-fs-32 ux4g-text-neutral-secondary">account_circle</i>
            </div>
            <span>Rohan Joshi</span>
          </div>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-s">
            <label class="ux4g-radio ux4g-radio-md">
              <input class="ux4g-radio-input" name="status1" type="radio" />
              <div class="ux4g-radio-control">
                <span class="ux4g-radiomark"></span>
              </div>
              Inactive
            </label>
          </div>
        </td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">delete</i></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const LOADING_STATE_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-table-responsive ux4g-table-rounded">
        <table class="ux4g-table ux4g-table-m">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Department</th>
                    <th>Location</th>
                    <th>Status</th>
                </tr>
            </thead>
        </table>
        <div class="ux4g-table-loading-overlay">
            <i class="ux4g-spinner-primary-split ux4g-fs-32 ux4g-mb-s"></i>
            <span class="ux4g-table-loading-label">Loading data...</span>
        </div>
    </div>
</div>
`.trim();

const LOADING_STATE_CLEAN_CODE = `
/* Special Feature: Loading State */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-m">
    <thead>
      <tr>
        <th>Name</th>
        <th>Role</th>
        <th>Department</th>
        <th>Location</th>
        <th>Status</th>
      </tr>
    </thead>
  </table>
  <div class="ux4g-table-loading-overlay">
    <i class="ux4g-spinner-primary-split ux4g-fs-32 ux4g-mb-s"></i>
    <span class="ux4g-table-loading-label">Loading data...</span>
  </div>
</div>
`.trim();

const PRODUCT_CATALOG_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-table-responsive ux4g-table-rounded">
        <table class="ux4g-table ux4g-table-interactive ux4g-table-m ux4g-table-sortable">
            <thead>
                <tr>
                    <th></th>
                    <th data-sort="desc"><div class="ux4g-table-th-content">Product</div></th>
                    <th data-sort="desc"><div class="ux4g-table-th-content">SKU</div></th>
                    <th data-sort="desc"><div class="ux4g-table-th-content">Category</div></th>
                    <th data-sort="desc"><div class="ux4g-table-th-content">Price (INR)</div></th>
                    <th data-sort="desc"><div class="ux4g-table-th-content">Stock</div></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="ux4g-table-selection-col">
                            <label class="ux4g-radio ux4g-radio-md">
                                <input class="ux4g-radio-input" name="product_sel" type="radio" />
                                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                            <div class="ux4g-table-avatar ux4g-bg-primary-strong"></div>
                            <span class="ux4g-fw-semibold">Wireless...</span>
                        </div>
                    </td>
                    <td>WH-1001</td>
                    <td>
                        <select class="ux4g-table-select ux4g-table-cell-fixed-input">
                            <option>Electronics</option>
                            <option>Audio</option>
                        </select>
                    </td>
                    <td>
                        <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="2,499" />
                    </td>
                    <td>142</td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
                <tr class="ux4g-is-selected">
                    <td>
                        <div class="ux4g-table-selection-col">
                            <label class="ux4g-radio ux4g-radio-md">
                                <input checked class="ux4g-radio-input" name="product_sel" type="radio" />
                                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                            <div class="ux4g-table-avatar ux4g-bg-success-strong"></div>
                            <span class="ux4g-fw-semibold">Organi...</span>
                        </div>
                    </td>
                    <td>GT-2045</td>
                    <td>
                        <select class="ux4g-table-select ux4g-table-cell-fixed-input">
                            <option>Beverages</option>
                            <option>Food</option>
                        </select>
                    </td>
                    <td>
                        <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="349" />
                    </td>
                    <td>580</td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
                <tr>
                    <td>
                        <div class="ux4g-table-selection-col">
                            <label class="ux4g-radio ux4g-radio-md">
                                <input class="ux4g-radio-input" name="product_sel" type="radio" />
                                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                            <div class="ux4g-table-avatar ux4g-bg-warning-strong"></div>
                            <span class="ux4g-fw-semibold">Standi...</span>
                        </div>
                    </td>
                    <td>SD-3022</td>
                    <td>
                        <select class="ux4g-table-select ux4g-table-cell-fixed-input">
                            <option>Office</option>
                            <option>Furniture</option>
                        </select>
                    </td>
                    <td>
                        <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="1,899" />
                    </td>
                    <td>67</td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
                <tr>
                    <td>
                        <div class="ux4g-table-selection-col">
                            <label class="ux4g-radio ux4g-radio-md">
                                <input class="ux4g-radio-input" name="product_sel" type="radio" />
                                <div class="ux4g-radio-control"><span class="ux4g-radiomark"></span></div>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
                            <div class="ux4g-table-avatar ux4g-bg-danger-strong"></div>
                            <span class="ux4g-fw-semibold">Runnin...</span>
                        </div>
                    </td>
                    <td>RS-4011</td>
                    <td>
                        <select class="ux4g-table-select ux4g-table-cell-fixed-input">
                            <option>Sports</option>
                            <option>Apparel</option>
                        </select>
                    </td>
                    <td>
                        <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="5,999" />
                    </td>
                    <td>23</td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`.trim();

const PRODUCT_CATALOG_CLEAN_CODE = `
/* Special Feature: Product Catalog (Embedded Inputs, Tags & Media) */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-interactive ux4g-table-m ux4g-table-sortable">
    <thead>
      <tr>
<th></th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Product</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">SKU</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Category</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Price (INR)</div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Stock</div>
        </th>
<th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-radio ux4g-radio-md">
              <input class="ux4g-radio-input" name="product_sel" type="radio" />
              <div class="ux4g-radio-control">
                <span class="ux4g-radiomark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
            <div class="ux4g-table-avatar ux4g-radius-base" style="background:#8b5cf6;"></div>
            <span class="ux4g-fw-semibold">Wireless...</span>
          </div>
        </td>
        <td>WH-1001</td>
        <td>
          <select class="ux4g-table-select ux4g-table-cell-fixed-input">
            <option>Electronics</option>
            <option>Audio</option>
          </select>
        </td>
        <td>
          <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="2,499" />
        </td>
        <td>142</td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
      <tr class="ux4g-is-selected">
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-radio ux4g-radio-md">
              <input checked class="ux4g-radio-input" name="product_sel" type="radio" />
              <div class="ux4g-radio-control">
                <span class="ux4g-radiomark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
            <div class="ux4g-table-avatar ux4g-bg-success-strong"></div>
            <span class="ux4g-fw-semibold">Organi...</span>
          </div>
        </td>
        <td>GT-2045</td>
        <td>
          <select class="ux4g-table-select ux4g-table-cell-fixed-input">
            <option>Beverages</option>
            <option>Food</option>
          </select>
        </td>
        <td>
          <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="349" />
        </td>
        <td>580</td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-radio ux4g-radio-md">
              <input class="ux4g-radio-input" name="product_sel" type="radio" />
              <div class="ux4g-radio-control">
                <span class="ux4g-radiomark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
            <div class="ux4g-table-avatar ux4g-radius-base" style="background:#f59e0b;"></div>
            <span class="ux4g-fw-semibold">Standi...</span>
          </div>
        </td>
        <td>SD-3022</td>
        <td>
          <select class="ux4g-table-select ux4g-table-cell-fixed-input">
            <option>Office</option>
            <option>Furniture</option>
          </select>
        </td>
        <td>
          <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="1,899" />
        </td>
        <td>67</td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="ux4g-table-selection-col">
            <label class="ux4g-radio ux4g-radio-md">
              <input class="ux4g-radio-input" name="product_sel" type="radio" />
              <div class="ux4g-radio-control">
                <span class="ux4g-radiomark"></span>
              </div>
            </label>
          </div>
        </td>
        <td>
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-xs">
            <div class="ux4g-table-avatar ux4g-bg-error-strong"></div>
            <span class="ux4g-fw-semibold">Runnin...</span>
          </div>
        </td>
        <td>RS-4011</td>
        <td>
          <select class="ux4g-table-select ux4g-table-cell-fixed-input">
            <option>Sports</option>
            <option>Apparel</option>
          </select>
        </td>
        <td>
          <input class="ux4g-table-input ux4g-table-cell-fixed-input ux4g-status-success" type="text" value="5,999" />
        </td>
        <td>23</td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const ACTION_CELL_MODES_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-table-responsive ux4g-table-rounded">
        <table class="ux4g-table ux4g-table-interactive ux4g-table-m">
            <thead>
                <tr>
                    <th>User</th>
                    <th>Status</th>
                    <th>Actions (Default Button)</th>
                    <th>Actions (Overflow)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <div class="ux4g-table-cell-avatar">
                            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div>
                            <span>Anika Kapoor</span>
                        </div>
                    </td>
                    <td>
                        <span class="ux4g-tag-filled-info ux4g-tag-s">
                            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                        </span>
                    </td>
                    <td><button class="ux4g-btn ux4g-btn-primary ux4g-btn-sm">Action</button></td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
                <tr>
                    <td>
                        <div class="ux4g-table-cell-avatar">
                            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">RJ</div>
                            <span>Rohan Joshi</span>
                        </div>
                    </td>
                    <td>
                        <span class="ux4g-tag-filled-primary ux4g-tag-s">
                            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
                        </span>
                    </td>
                    <td><button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm">Action</button></td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
                <tr>
                    <td>
                        <div class="ux4g-table-cell-avatar">
                            <div class="ux4g-table-avatar ux4g-bg-danger-strong ux4g-text-white">PS</div>
                            <span>Priya Sharma</span>
                        </div>
                    </td>
                    <td>
                        <span class="ux4g-tag-filled-warning ux4g-tag-s">Away</span>
                    </td>
                    <td><button class="ux4g-btn ux4g-btn-text-primary ux4g-btn-sm">Action</button></td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
                <tr>
                    <td>
                        <div class="ux4g-table-cell-avatar">
                            <div class="ux4g-table-avatar ux4g-bg-success-strong ux4g-text-white">MS</div>
                            <span>Meera Singh</span>
                        </div>
                    </td>
                    <td>
                        <span class="ux4g-tag-filled-error ux4g-tag-s">Offline</span>
                    </td>
                    <td><button class="ux4g-btn ux4g-btn-danger ux4g-btn-sm">Delete</button></td>
                    <td><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`.trim();

const ACTION_CELL_MODES_CLEAN_CODE = `
/* Special Feature: Action Cell Modes */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-interactive ux4g-table-m">
    <thead>
      <tr>
        <th>User</th>
        <th>Status</th>
        <th>Actions (Default Button)</th>
        <th>Actions (Overflow)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div>
            <span>Anika Kapoor</span>
          </div>
        </td>
        <td>
          <span class="ux4g-tag-filled-info ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
        <td>
          <button class="ux4g-btn ux4g-btn-primary ux4g-btn-sm">Action</button>
        </td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">RJ</div>
            <span>Rohan Joshi</span>
          </div>
        </td>
        <td>
          <span class="ux4g-tag-filled-primary ux4g-tag-s">
            <i class="ux4g-icon-outlined ux4g-text-white">token</i> Neutral
          </span>
        </td>
        <td>
          <button class="ux4g-btn ux4g-btn-outline-primary ux4g-btn-sm">Action</button>
        </td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-table-avatar ux4g-bg-error-strong ux4g-text-white">PS</div>
            <span>Priya Sharma</span>
          </div>
        </td>
        <td>
          <span class="ux4g-tag-filled-warning ux4g-tag-s">Away</span>
        </td>
        <td>
          <button class="ux4g-btn ux4g-btn-text-primary ux4g-btn-sm">Action</button>
        </td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
      <tr>
        <td>
          <div class="ux4g-table-cell-avatar">
            <div class="ux4g-table-avatar ux4g-bg-success-strong ux4g-text-white">MS</div>
            <span>Meera Singh</span>
          </div>
        </td>
        <td>
          <span class="ux4g-tag-filled-error ux4g-tag-s">Offline</span>
        </td>
        <td>
          <button class="ux4g-btn ux4g-btn-danger ux4g-btn-sm">Delete</button>
        </td>
        <td>
          <button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">more_vert</i></button>
        </td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const SPECIAL_FEATURES_CLEAN_CODE = [
    SELECTION_FEATURE_CLEAN_CODE,
    LOADING_STATE_CLEAN_CODE,
    PRODUCT_CATALOG_CLEAN_CODE,
    ACTION_CELL_MODES_CLEAN_CODE,
].join('\n\n');

const GROUP_HEADERS_AND_ADVANCED_STATES_HTML = `
<div class="ux4g-w-100">
    <div class="ux4g-table-responsive ux4g-table-rounded">
        <table class="ux4g-table ux4g-table-interactive ux4g-table-m ux4g-table-sortable ux4g-table-column-dividers">
            <thead>
                <tr>
                    <th rowspan="2" data-sort="asc">
                        <div class="ux4g-table-th-content">Region</div>
                    </th>
                    <th colspan="4">
                        <div class="ux4g-table-th-content ux4g-jc-center">Quarterly Revenue</div>
                    </th>
                    <th rowspan="2" data-sort="none">
                        <div class="ux4g-table-th-content">Total</div>
                    </th>
                </tr>
                <tr>
                    <th data-sort="none">
                        <div class="ux4g-table-th-content">Q1 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
                    </th>
                    <th data-sort="desc">
                        <div class="ux4g-table-th-content">Q2 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
                    </th>
                    <th data-sort="none">
                        <div class="ux4g-table-th-content">Q3 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
                    </th>
                    <th data-sort="none">
                        <div class="ux4g-table-th-content">Q4 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td class="ux4g-fw-medium">North America</td>
                    <td>$1.2M</td>
                    <td>$1.4M</td>
                    <td>$1.1M</td>
                    <td>$1.6M</td>
                    <td class="ux4g-fw-bold">$5.3M</td>
                </tr>
                <tr class="ux4g-is-selected">
                    <td class="ux4g-fw-medium">Europe (Selected)</td>
                    <td>$800K</td>
                    <td>$950K</td>
                    <td>$900K</td>
                    <td>$1.0M</td>
                    <td class="ux4g-fw-bold">$3.65M</td>
                </tr>
                <tr class="ux4g-is-disabled" tabindex="-1">
                    <td class="ux4g-fw-medium">Asia Pacific (Disabled)</td>
                    <td>$600K</td>
                    <td>$650K</td>
                    <td>$700K</td>
                    <td>$800K</td>
                    <td class="ux4g-fw-bold">$2.75M</td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
`.trim();

const GROUP_HEADERS_AND_ADVANCED_STATES_CLEAN_CODE = `
/* Advanced Table: Group Headers, Sorting, Selected State, and Disabled State */
<div class="ux4g-table-responsive ux4g-table-rounded">
  <table class="ux4g-table ux4g-table-interactive ux4g-table-m ux4g-table-sortable ux4g-table-column-dividers">
    <thead>
      <tr>
        <th rowspan="2" data-sort="asc">
          <div class="ux4g-table-th-content">Region</div>
        </th>
        <th colspan="4">
          <div class="ux4g-table-th-content ux4g-jc-center">Quarterly Revenue</div>
        </th>
        <th rowspan="2" data-sort="none">
          <div class="ux4g-table-th-content">Total</div>
        </th>
      </tr>
      <tr>
        <th data-sort="none">
          <div class="ux4g-table-th-content">Q1 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
        </th>
        <th data-sort="desc">
          <div class="ux4g-table-th-content">Q2 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
        </th>
        <th data-sort="none">
          <div class="ux4g-table-th-content">Q3 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
        </th>
        <th data-sort="none">
          <div class="ux4g-table-th-content">Q4 <i class="ux4g-table-sort-icon ux4g-icon">north</i></div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="ux4g-fw-medium">North America</td>
        <td>$1.2M</td>
        <td>$1.4M</td>
        <td>$1.1M</td>
        <td>$1.6M</td>
        <td class="ux4g-fw-bold">$5.3M</td>
      </tr>
      <tr class="ux4g-is-selected">
        <td class="ux4g-fw-medium">Europe (Selected)</td>
        <td>$800K</td>
        <td>$950K</td>
        <td>$900K</td>
        <td>$1.0M</td>
        <td class="ux4g-fw-bold">$3.65M</td>
      </tr>
      <tr class="ux4g-is-disabled" tabindex="-1">
        <td class="ux4g-fw-medium">Asia Pacific (Disabled)</td>
        <td>$600K</td>
        <td>$650K</td>
        <td>$700K</td>
        <td>$800K</td>
        <td class="ux4g-fw-bold">$2.75M</td>
      </tr>
    </tbody>
  </table>
</div>
`.trim();

const getStoryParameters = (code) => ({
    docs: {
        disable: true,
        source: { code: formatCode(code) },
    },
});

export const Introduction = () => {
    return `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen" id="intro-container">
            ${getHeroHeader('Table', 'Tables help teams scan, compare, and act on structured data through density options, sortable headers, selectable rows, embedded controls, and advanced grouped-header layouts.')}

            <section class="ux4g-p-xl">
                <div class="ux4g-container">
                    <!-- Implementation Showcase -->
                    <div class="ux4g-my-xl">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various table variants including sizes, header styles, row states, and embedded controls.</p>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                            <!-- Size M Preview -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Size M + Column Dividers</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-table-responsive ux4g-table-rounded">
                                            <table class="ux4g-table ux4g-table-m ux4g-table-column-dividers">
                                                <thead><tr><th>Name</th><th>Role</th><th>Dept</th></tr></thead>
                                                <tbody>
                                                    <tr><td class="ux4g-table-cell-text">Anika Kapoor</td><td>Lead Designer</td><td>Design</td></tr>
                                                    <tr><td class="ux4g-table-cell-text">Rohan Joshi</td><td>Sr. Engineer</td><td>Engineering</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Brand Header Preview -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Brand Header + Sortable</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-table-responsive ux4g-table-rounded">
                                            <table class="ux4g-table ux4g-table-m ux4g-table-sortable ux4g-table-header-brand">
                                                <thead><tr><th data-sort="asc"><div class="ux4g-table-th-content">City</div></th><th data-sort="desc"><div class="ux4g-table-th-content">Population</div></th><th><div class="ux4g-table-th-content">State</div></th></tr></thead>
                                                <tbody>
                                                    <tr><td>Mumbai</td><td>20.4M</td><td>Maharashtra</td></tr>
                                                    <tr><td>Delhi</td><td>16.8M</td><td>Delhi NCT</td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Zebra Rows Preview -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Zebra Rows + Row States</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-table-responsive ux4g-table-rounded">
                                            <table class="ux4g-table ux4g-table-zebra-rows ux4g-table-interactive">
                                                <thead><tr><th>Department</th><th>Budget</th><th>Status</th></tr></thead>
                                                <tbody>
                                                    <tr><td>Engineering</td><td>&#8377;45,00,000</td><td><span class="ux4g-tag-filled-success ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Active</span></td></tr>
                                                    <tr class="ux4g-is-selected"><td>Design</td><td>&#8377;12,00,000</td><td><span class="ux4g-tag-filled-warning ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Review</span></td></tr>
                                                    <tr class="ux4g-is-disabled"><td>Marketing</td><td>&#8377;8,00,000</td><td><span class="ux4g-tag-filled-neutral ux4g-tag-s"><i class="ux4g-icon-outlined ux4g-text-white">token</i> Paused</span></td></tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Selection + Embedded Controls Preview -->
                            <div class="ux4g-mb-2xl">
                                <h3 class="ux4g-heading-s-strong ux4g-mb-m">Selection + Embedded Controls</h3>
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-p-l">
                                        <div class="ux4g-table-responsive ux4g-table-rounded">
                                            <table class="ux4g-table ux4g-table-interactive ux4g-table-m">
                                                <thead>
                                                    <tr>
<th><div class="ux4g-table-th-content ux4g-jc-center"><label class="ux4g-checkbox ux4g-checkbox-md"><input aria-label="Select all" class="ux4g-checkbox-input" type="checkbox" /><div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div></label></div></th>
                                                        <th>User</th>
                                                        <th>Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><div class="ux4g-table-selection-col"><label class="ux4g-checkbox ux4g-checkbox-md"><input class="ux4g-checkbox-input" type="checkbox" /><div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div></label></div></td>
                                                        <td><div class="ux4g-table-cell-avatar"><div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">AK</div><span class="ux4g-fw-semibold">Anika Kapoor</span></div></td>
                                                        <td><div class="ux4g-d-flex ux4g-gap-xs ux4g-ai-center"><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button><button class="ux4g-table-cell-icon-btn ux4g-text-danger"><i class="ux4g-icon">delete</i></button></div></td>
                                                    </tr>
                                                    <tr class="ux4g-is-selected">
                                                        <td><div class="ux4g-table-selection-col"><label class="ux4g-checkbox ux4g-checkbox-md"><input checked class="ux4g-checkbox-input" type="checkbox" /><div class="ux4g-checkbox-control"><span class="ux4g-checkmark"></span></div></label></div></td>
                                                        <td><div class="ux4g-table-cell-avatar"><div class="ux4g-avatar ux4g-avatar-status ux4g-avatar-s">RJ</div><span class="ux4g-fw-semibold">Rohan Joshi</span></div></td>
                                                        <td><div class="ux4g-d-flex ux4g-gap-xs ux4g-ai-center"><button class="ux4g-table-cell-icon-btn"><i class="ux4g-icon">edit</i></button><button class="ux4g-table-cell-icon-btn ux4g-text-danger"><i class="ux4g-icon">delete</i></button></div></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- CSS Class Reference -->
                    <div class="ux4g-my-xl">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Key CSS classes used across table variants. Click any class name to copy it.</p>

                        <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                            <!-- Table Shell Classes -->
                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-primary-soft"><h3 class="ux4g-heading-s-strong ux4g-text-primary">Table Shell</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
<table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
                                        <tbody>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table</code></td><td>Base table class</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-m</code></td><td>Medium density</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-s</code></td><td>Small / compact density</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-responsive</code></td><td>Horizontal scroll wrapper</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-rounded</code></td><td>Rounded table corners</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Divider & Stripe Classes -->
                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-info-soft"><h3 class="ux4g-heading-s-strong ux4g-text-info">Dividers &amp; Stripes</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
<table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
                                        <tbody>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-column-dividers</code></td><td>Vertical column lines</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-no-row-dividers</code></td><td>Remove horizontal lines</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-zebra-rows</code></td><td>Alternating row shading</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-zebra-cols</code></td><td>Alternating column shading</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Header & Interaction Classes -->
                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-success-soft"><h3 class="ux4g-heading-s-strong ux4g-text-success">Headers &amp; Interaction</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
<table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
                                        <tbody>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-header-brand</code></td><td>Brand-colored header row</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-sortable</code></td><td>Enable sort indicators</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-resizable</code></td><td>Resizable column widths</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-interactive</code></td><td>Row hover &amp; select states</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- Row & Cell State Classes -->
                            <div class="ux4g-card ux4g-card-outline ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-card-header ux4g-bg-warning-soft"><h3 class="ux4g-heading-s-strong ux4g-text-warning">Row &amp; Cell States</h3></div>
                                <div class="ux4g-card-body ux4g-p-none">
<table class="ux4g-table ux4g-table-s">
                                        <thead><tr><th>Class</th><th>Purpose</th></tr></thead>
                                        <tbody>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-is-selected</code></td><td>Highlight selected row</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-is-disabled</code></td><td>Dim disabled row</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-cell-avatar</code></td><td>Avatar + text cell layout</td></tr>
<tr><td><code class="intro-copy-class ux4g-cursor-pointer">ux4g-table-cell-icon-btn</code></td><td>Inline action icon button</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Available Stories & Key Behaviors -->
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-l ux4g-my-xl">
                        <div class="ux4g-card ux4g-card-solid">
                            <div class="ux4g-card-header">
                                <h2 class="ux4g-heading-m-strong">Key behaviors</h2>
                            </div>
                            <div class="ux4g-card-body ux4g-flex-col">
                                <ul class="ux4g-list ux4g-list-disc ux4g-m-none ux4g-pl-l">
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Supports compact and medium densities, column dividers, row-divider removal, and responsive wrappers.</li>
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Exposes sortable, filterable, and resizable header treatments without changing the core table shell.</li>
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Handles zebra striping, selected rows, disabled rows, loading overlays, and grouped multi-row headers.</li>
                                    <li class="ux4g-body-m-default ux4g-text-neutral-primary">Embeds checkboxes, radios, tags, inputs, selects, avatars, and action cells directly inside table rows.</li>
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
                                        <div class="ux4g-label-m-strong ux4g-text-primary">Size Variations &amp; Dividers</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Medium and small densities paired with column-divider and no-row-divider treatments.</div>
                                    </div>
                                    <div class="ux4g-p-s ux4g-radius-s ux4g-bg-info-soft">
                                        <div class="ux4g-label-m-strong ux4g-text-info">Header Behaviors</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Neutral and brand header rows plus sortable and resizable header interactions.</div>
                                    </div>
                                    <div class="ux4g-p-s ux4g-radius-s ux4g-bg-success-soft">
                                        <div class="ux4g-label-m-strong ux4g-text-success">Rows &amp; Special Features</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Zebra striping, selected and disabled states, loading overlays, embedded controls, and action cells.</div>
                                    </div>
                                    <div class="ux4g-p-s ux4g-radius-s ux4g-bg-warning-soft">
                                        <div class="ux4g-label-m-strong ux4g-text-warning">Advanced Layout</div>
                                        <div class="ux4g-body-s-default ux4g-text-neutral-secondary">Grouped headers with rowSpan/colSpan and advanced state styling inside the same data grid.</div>
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

export const SizeVariationsAndDividers = () => {
    return renderStoryPage(
        'Table Size Variations & Dividers',
        'Compare the source-backed medium and small table densities while preserving the responsive wrapper and divider treatments.',
        renderDemoCodeBlock(
            'table-size-variations-dividers',
            'Size Variations & Dividers',
            'The Table showcase currently provides Size M with column dividers and Size S with no row dividers.',
            SIZE_VARIATIONS_AND_DIVIDERS_HTML,
            false,
            SIZE_VARIATIONS_AND_DIVIDERS_CLEAN_CODE
        )
    );
};

export const HeaderRowVariants = () => {
    return renderStoryPage(
        'Table Header Row Variants',
        'Review the neutral and brand header-row treatments, including selectable rows, inline filters, sort states, and action cells.',
        renderDemoCodeBlock(
            'table-header-row-variants',
            'Header Row Variants',
            'Neutral and brand header backgrounds taken directly from the Table showcase.',
            HEADER_ROW_VARIANTS_HTML,
            false,
            HEADER_ROW_VARIANTS_CLEAN_CODE
        )
    );
};

export const InteractiveHeaders = () => {
    return renderStoryPage(
        'Interactive Headers',
        'Show the sortable and resizable header treatment used for city, state, population, and area columns.',
        renderDemoCodeBlock(
            'table-interactive-headers',
            'Interactive Headers',
            'Demonstrates the sort cycle and column-resizing classes from the source table example.',
            INTERACTIVE_HEADERS_HTML,
            false,
            INTERACTIVE_HEADERS_CLEAN_CODE
        )
    );
};

export const RowInteractionsAndZebraStriping = () => {
    return renderStoryPage(
        'Row Interactions & Zebra Striping',
        'Reference the source-backed row striping modes alongside selected and disabled row states.',
        renderDemoCodeBlock(
            'table-row-interactions-zebra',
            'Row Interactions & Zebra Striping',
            'Includes zebra rows with interactive state classes and the separate zebra-columns mode.',
            ROW_INTERACTIONS_AND_ZEBRA_STRIPING_HTML,
            false,
            ROW_INTERACTIONS_AND_ZEBRA_STRIPING_CLEAN_CODE
        )
    );
};

export const SpecialFeatures = () => {
    return renderStoryPage(
        'Table Special Features',
        'Collect the source-backed special table examples: mixed selection controls, loading overlays, embedded inputs, and action-cell patterns.',
        [
            renderDemoCodeBlock(
                'table-special-selection',
                'Hover Selection, Checkbox, Radio, Avatar, Icon',
                'Combines row-selection affordances with checkbox, radio, avatar, and icon-cell patterns.',
                SELECTION_FEATURE_HTML,
                false,
                SELECTION_FEATURE_CLEAN_CODE
            ),
            renderDemoCodeBlock(
                'table-loading-state',
                'Loading State',
                'Uses the dedicated loading overlay container on top of the base table shell.',
                LOADING_STATE_HTML,
                false,
                LOADING_STATE_CLEAN_CODE
            ),
            renderDemoCodeBlock(
                'table-product-catalog',
                'Product Catalog (Embedded Inputs, Tags & Media)',
                'Shows embedded radios, selects, editable inputs, media cells, and overflow actions inside interactive rows.',
                PRODUCT_CATALOG_HTML,
                false,
                PRODUCT_CATALOG_CLEAN_CODE
            ),
            renderDemoCodeBlock(
                'table-action-cell-modes',
                'Action Cell Modes',
                'Compares primary, outline, text, and danger button actions against the overflow action pattern.',
                ACTION_CELL_MODES_HTML,
                false,
                ACTION_CELL_MODES_CLEAN_CODE
            ),
        ].join('')
    );
};

export const GroupHeadersAndAdvancedStates = () => {
    return renderStoryPage(
        'Group Headers & Advanced States',
        'Demonstrate rowSpan and colSpan group headers together with selected and disabled row treatments.',
        renderDemoCodeBlock(
            'table-group-headers-advanced-states',
            'Group Headers & Advanced States',
            'The grouped revenue table shows multi-row headers, sortable header cells, and row-level state classes.',
            GROUP_HEADERS_AND_ADVANCED_STATES_HTML,
            false,
            GROUP_HEADERS_AND_ADVANCED_STATES_CLEAN_CODE
        )
    );
};

Introduction.parameters = {
    docs: { disable: true },
};

SizeVariationsAndDividers.parameters = {
    ...getStoryParameters(SIZE_VARIATIONS_AND_DIVIDERS_CLEAN_CODE),
};

HeaderRowVariants.parameters = {
    ...getStoryParameters(HEADER_ROW_VARIANTS_CLEAN_CODE),
};

InteractiveHeaders.parameters = {
    ...getStoryParameters(INTERACTIVE_HEADERS_CLEAN_CODE),
};

RowInteractionsAndZebraStriping.parameters = {
    ...getStoryParameters(ROW_INTERACTIONS_AND_ZEBRA_STRIPING_CLEAN_CODE),
};

SpecialFeatures.parameters = {
    ...getStoryParameters(SPECIAL_FEATURES_CLEAN_CODE),
};

GroupHeadersAndAdvancedStates.parameters = {
    ...getStoryParameters(GROUP_HEADERS_AND_ADVANCED_STATES_CLEAN_CODE),
};
