import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Input',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Inputs collect user-entered text across multiple sizes and validation states.',
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

const getReactCode = (html) => htmlToJsx(html, 'Input');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, cleanCode = htmlContent) => {
    const displayCode = formatCode(cleanCode);
    const reactCode = getReactCode(cleanCode);
    const angularCode = formatCode(cleanCode);

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-xl ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                    <div class="ux4g-w-100">
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

                    tabs.forEach((tab) => {
                        tab.onclick = () => {
                            tabs.forEach((item) => item.classList.remove('is-active'));
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

const INPUT_SIZE_PREVIEW_HTML = `
    <div class="ux4g-d-grid ux4g-grid-auto-fit-300 ux4g-gap-l">
        <div class="ux4g-input-container ux4g-input-sm">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Small</h3>
            <label class="ux4g-label-m-default" for="introInputSm">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="introInputSm" placeholder="input for..." type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-md">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Medium</h3>
            <label class="ux4g-label-m-default" for="introInputMd">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="introInputMd" placeholder="input for..." type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-lg">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Large</h3>
            <label class="ux4g-label-l-default" for="introInputLg">Label <span class="ux4g-text-error">*</span></label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="introInputLg" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
                <span class="ux4g-input-helper-text">Description</span>
            </div>
        </div>
    </div>
`;

const INPUT_SIZE_SHOWCASE_HTML = `
    <div class="ux4g-d-grid ux4g-grid-auto-fit-300 ux4g-gap-l">
        <div class="ux4g-input-container ux4g-input-sm">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Small</h3>
            <label class="ux4g-label-m-default" for="inputSizeSm">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="inputSizeSm" placeholder="input for..." type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-md">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Medium</h3>
            <label class="ux4g-label-m-default" for="inputSizeMd">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="inputSizeMd" placeholder="input for..." type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-lg">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Large</h3>
            <label class="ux4g-label-l-default" for="inputSizeLg">Label <span class="ux4g-text-error">*</span></label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="inputSizeLg" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
                <span class="ux4g-input-helper-text">Description</span>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-xl">
            <h3 class="ux4g-body-l-strong ux4g-mb-s">Input XLarge</h3>
            <label class="ux4g-label-l-default" for="inputSizeXl">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="inputSizeXl" placeholder="input for..." type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
`;

const INPUT_SIZES_CLEAN_CODE = `
<!-- Variant: Input Small -->
<div class="ux4g-input-container ux4g-input-sm">
  <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Small</h3>
  <label class="ux4g-label-m-default" for="inputSizeSm">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="inputSizeSm" placeholder="input for..." type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
</div>

<!-- Variant: Input Medium -->
<div class="ux4g-input-container ux4g-input-md">
  <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Medium</h3>
  <label class="ux4g-label-m-default" for="inputSizeMd">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="inputSizeMd" placeholder="input for..." type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
</div>

<!-- Variant: Input Large -->
<div class="ux4g-input-container ux4g-input-lg">
  <h3 class="ux4g-body-l-strong ux4g-mb-s">Input Large</h3>
  <label class="ux4g-label-l-default" for="inputSizeLg">Label <span class="ux4g-text-error">*</span></label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="inputSizeLg" placeholder="Placeholder" type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
  <div class="ux4g-input-helper">
    <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
    <span class="ux4g-input-helper-text">Description</span>
  </div>
</div>

<!-- Variant: Input XLarge -->
<div class="ux4g-input-container ux4g-input-xl">
  <h3 class="ux4g-body-l-strong ux4g-mb-s">Input XLarge</h3>
  <label class="ux4g-label-l-default" for="inputSizeXl">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="inputSizeXl" placeholder="input for..." type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
</div>
`;

const INPUT_VALIDATION_HTML = `
    <div class="ux4g-d-grid ux4g-grid-auto-fit-400 ux4g-gap-xs ux4g-mb-l">
        <div class="ux4g-input-container ux4g-input-md ux4g-input-default">
            <label class="ux4g-label-m-default" for="validationDefault">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="validationDefault" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
                <span class="ux4g-input-helper-text">Description</span>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-md ux4g-input-error">
            <label class="ux4g-label-m-default" for="validationError">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="validationError" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">error</span>
                <span class="ux4g-input-helper-text">Error message</span>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-md">
            <label class="ux4g-label-m-default" for="validationDisabled">Label</label>
            <div class="ux4g-input ux4g-input-is-disabled">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" disabled="" id="validationDisabled" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" disabled="" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" disabled="" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
                <span class="ux4g-input-helper-text">Description</span>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-md ux4g-input-success">
            <label class="ux4g-label-m-default" for="validationSuccess">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="validationSuccess" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">check_circle</span>
                <span class="ux4g-input-helper-text">Success message</span>
            </div>
        </div>
        <div class="ux4g-input-container ux4g-input-md ux4g-input-warning">
            <label class="ux4g-label-m-default" for="validationWarning">Label</label>
            <div class="ux4g-input">
                <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
                <input class="ux4g-input-input" id="validationWarning" placeholder="Placeholder" type="text" />
                <div class="ux4g-input-actions">
                    <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">mic</span>
                    </button>
                    <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
                        <span class="ux4g-icon-outlined">close</span>
                    </button>
                </div>
            </div>
            <div class="ux4g-input-helper">
                <span class="ux4g-icon-outlined ux4g-input-helper-icon">warning</span>
                <span class="ux4g-input-helper-text">Warning message</span>
            </div>
        </div>
    </div>
`;

const INPUT_VALIDATION_CLEAN_CODE = `
<!-- Variant: Validation State - Default -->
<div class="ux4g-input-container ux4g-input-md ux4g-input-default">
  <label class="ux4g-label-m-default" for="validationDefault">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="validationDefault" placeholder="Placeholder" type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
  <div class="ux4g-input-helper">
    <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
    <span class="ux4g-input-helper-text">Description</span>
  </div>
</div>

<!-- Variant: Validation State - Error -->
<div class="ux4g-input-container ux4g-input-md ux4g-input-error">
  <label class="ux4g-label-m-default" for="validationError">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="validationError" placeholder="Placeholder" type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
  <div class="ux4g-input-helper">
    <span class="ux4g-icon-outlined ux4g-input-helper-icon">error</span>
    <span class="ux4g-input-helper-text">Error message</span>
  </div>
</div>

<!-- Variant: Validation State - Disabled -->
<div class="ux4g-input-container ux4g-input-md">
  <label class="ux4g-label-m-default" for="validationDisabled">Label</label>
  <div class="ux4g-input ux4g-input-is-disabled">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" disabled id="validationDisabled" placeholder="Placeholder" type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" disabled type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" disabled type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
  <div class="ux4g-input-helper">
    <span class="ux4g-icon-outlined ux4g-input-helper-icon">info</span>
    <span class="ux4g-input-helper-text">Description</span>
  </div>
</div>

<!-- Variant: Validation State - Success -->
<div class="ux4g-input-container ux4g-input-md ux4g-input-success">
  <label class="ux4g-label-m-default" for="validationSuccess">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="validationSuccess" placeholder="Placeholder" type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
  <div class="ux4g-input-helper">
    <span class="ux4g-icon-outlined ux4g-input-helper-icon">check_circle</span>
    <span class="ux4g-input-helper-text">Success message</span>
  </div>
</div>

<!-- Variant: Validation State - Warning -->
<div class="ux4g-input-container ux4g-input-md ux4g-input-warning">
  <label class="ux4g-label-m-default" for="validationWarning">Label</label>
  <div class="ux4g-input">
    <span class="ux4g-icon-outlined ux4g-input-leading-icon">token</span>
    <input class="ux4g-input-input" id="validationWarning" placeholder="Placeholder" type="text" />
    <div class="ux4g-input-actions">
      <button aria-label="Voice input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">mic</span>
      </button>
      <button aria-label="Clear input" class="ux4g-input-action-btn" type="button">
        <span class="ux4g-icon-outlined">close</span>
      </button>
    </div>
  </div>
  <div class="ux4g-input-helper">
    <span class="ux4g-icon-outlined ux4g-input-helper-icon">warning</span>
    <span class="ux4g-input-helper-text">Warning message</span>
  </div>
</div>
`;

export const Introduction = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen" id="intro-container">
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
                        <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Input</h1>
                        <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                            Inputs support structured text entry across four sizes and five validation states using the UX4G design system.
                        </p>
                    </div>
                </div>
            </section>
            <section class="ux4g-p-xl">
                <div class="ux4g-p-m">
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-p-xl">
                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-mb-l">
                                <div>
                                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">Input Showcase</h2>
                                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">Source-backed examples from src/index.html covering standard input sizing and supporting actions.</p>
                                </div>
                            </div>
                            ${INPUT_SIZE_PREVIEW_HTML}
                        </div>

                        <div id="class-reference">
                            <div class="ux4g-my-l">
                                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                                <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy source-backed utility classes for input structure and state patterns.</p>
                            </div>

                            <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                                <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                    <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Input Structure</h4>
                                    </div>
                                    <div class="ux4g-p-none">
                                        <div class="ux4g-table-container">
                                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                                <tbody>
                                                    ${[
            { class: 'ux4g-input-container', label: 'Input Container' },
            { class: 'ux4g-input', label: 'Field Shell' },
            { class: 'ux4g-input-input', label: 'Native Input' },
            { class: 'ux4g-input-actions', label: 'Action Group' },
            { class: 'ux4g-input-helper', label: 'Helper Message' }
        ].map((row) => `
                                                    <tr>
                                                        <td class="ux4g-p-l">
                                                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                                <div class="ux4g-d-flex ux4g-flex-col">
                                                                    <span class="ux4g-label-s-strong">${row.label}</span>
                                                                    <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                                </div>
                                                                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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
                                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">State Classes</h4>
                                    </div>
                                    <div class="ux4g-p-none">
                                        <div class="ux4g-table-container">
                                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                                <tbody>
                                                    ${[
            { class: 'ux4g-input-default', label: 'Default State' },
            { class: 'ux4g-input-error', label: 'Error State' },
            { class: 'ux4g-input-success', label: 'Success State' },
            { class: 'ux4g-input-warning', label: 'Warning State' },
            { class: 'ux4g-input-is-disabled', label: 'Disabled State' }
        ].map((row) => `
                                                    <tr>
                                                        <td class="ux4g-p-l">
                                                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                                <div class="ux4g-d-flex ux4g-flex-col">
                                                                    <span class="ux4g-label-s-strong">${row.label}</span>
                                                                    <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                                </div>
                                                                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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
                                        <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Size Classes</h4>
                                    </div>
                                    <div class="ux4g-p-none">
                                        <div class="ux4g-table-container">
                                            <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                                <tbody>
                                                    ${[
            { class: 'ux4g-input-sm', label: 'Small Input' },
            { class: 'ux4g-input-md', label: 'Medium Input' },
            { class: 'ux4g-input-lg', label: 'Large Input' },
            { class: 'ux4g-input-xl', label: 'Extra Large Input' }
        ].map((row) => `
                                                    <tr>
                                                        <td class="ux4g-p-l">
                                                            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                                <div class="ux4g-d-flex ux4g-flex-col">
                                                                    <span class="ux4g-label-s-strong">${row.label}</span>
                                                                    <code class="ux4g-text-primary ux4g-fs-12">${row.class}</code>
                                                                </div>
                                                                <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${row.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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
                </div>
            </section>

            <script>
                (function() {
                    const intro = document.getElementById('intro-container');
                    if (!intro) return;
                    const copyBtns = intro.querySelectorAll('.copy-text');
                    copyBtns.forEach((btn) => {
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
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const InputSizes = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Input Sizes', 'Small, medium, large, and xlarge input fields using only source-backed UX4G markup.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('input-sizes', 'Input Sizes', 'Displays the four input sizes exactly as defined in src/index.html.', INPUT_SIZE_SHOWCASE_HTML, false, INPUT_SIZES_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const ValidationStates = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Validation States', 'Default, error, disabled, success, and warning input states sourced from the medium input validation showcase.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('input-validation', 'Input Validation States', 'Medium validation examples covering the five states shown in the source showcase.', INPUT_VALIDATION_HTML, false, INPUT_VALIDATION_CLEAN_CODE)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
