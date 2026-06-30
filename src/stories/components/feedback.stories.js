/**
 * Feedback Component Stories
 * 
 * Showcasing various feedback interaction models including Thumb, Star, NPS, and Emoji ratings.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Feedback',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Feedback components allow users to provide ratings, comments, and specific evaluations of their experience with a service or content.',
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

const getReactCode = (html) => htmlToJsx(html, 'Feedback');
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

            <div class="ux4g-mb-l ux4g-d-flex ux4g-jc-center ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
                ${htmlContent}
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

// --- Feedback HTML Content ---

const FEEDBACK_THUMB_HTML = `
<div class="ux4g-feedback">
    <h3 class="ux4g-heading-s-strong">How was your experience?</h3>
    <div class="feedback-thumb-wrapper">
        <button class="ux4g-btn-outline-primary feedback-thumb-up">
            <span class="ux4g-icon-outlined ux4g-text-neutral-secondary">thumb_up</span>
            Yes
        </button>
        <button class="ux4g-btn-outline-primary feedback-thumb-up">
            <span class="ux4g-icon-outlined ux4g-text-neutral-secondary">thumb_down</span>
            No
        </button>
    </div>
</div>`;

const FEEDBACK_STAR_HTML = `
<div class="ux4g-feedback">
    <h3 class="ux4g-heading-s-strong">Rate your experience</h3>
    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-m">
        <span class="ux4g-icon-outlined ux4g-feedback-star">star</span>
        <span class="ux4g-icon-outlined ux4g-feedback-star">star</span>
        <span class="ux4g-icon-outlined ux4g-feedback-star">star</span>
        <span class="ux4g-icon-outlined ux4g-feedback-star">star</span>
        <span class="ux4g-icon-outlined ux4g-feedback-star">star</span>
    </div>
    <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m">
        <label class="ux4g-body-s-strong">What can we improve?</label>
        <div class="ux4g-feedback-chip-wrapper">
            <button class="ux4g-filter-chip-md">Content accuracy</button>
            <button class="ux4g-filter-chip-md">Visual design</button>
            <button class="ux4g-filter-chip-md">Functionality</button>
            <button class="ux4g-filter-chip-md">Loading time</button>
            <button class="ux4g-filter-chip-md">Other</button>
        </div>
        <div class="ux4g-textarea-container">
            <div class="ux4g-textarea">
                <textarea class="ux4g-textarea-input" placeholder="Tell us more about your experience"
                    rows="4"></textarea>
            </div>
        </div>
        <button class="ux4g-btn-primary" disabled>Submit</button>
        <button class="ux4g-btn-text-primary ux4g-text-neutral-primary">Skip</button>
    </div>
</div>`;

const FEEDBACK_NPS_HTML = `
<div class="ux4g-feedback">
    <h3 class="ux4g-heading-s-strong ux4g-text-center">How likely are you to recommend us?</h3>
    <div class="ux4g-feedback-nps-wrapper">
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">0</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">1</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">2</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">3</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">4</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">5</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">6</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">7</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">8</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">9</span></button>
        <button class="feedback-nps-button"><span class="ux4g-label-l-strong">10</span></button>
    </div>
    <div class="ux4g-d-flex ux4g-jc-between ux4g-py-m">
        <span class="ux4g-body-xs-default ux4g-text-neutral-secondary">0 - Extremely Unlikely</span>
        <span class="ux4g-body-xs-default ux4g-text-neutral-secondary">10 - Extremely Likely</span>
    </div>
    <div class="ux4g-textarea-container">
        <div class="ux4g-textarea">
            <textarea class="ux4g-textarea-input" placeholder="Tell us more about your experience"
                rows="4"></textarea>
        </div>
    </div>
    <button class="ux4g-btn-primary" disabled>Submit</button>
    <button class="ux4g-btn-text-primary ux4g-text-neutral-primary">Skip</button>
</div>`;

const FEEDBACK_EMOJI_HTML = `
<div class="ux4g-feedback">
    <h3 class="ux4g-heading-s-strong">How do you feel about this service?</h3>
    <div class="ux4g-d-flex  ux4g-inline-gap-m">
        <button class="feedback-emoji-button">
            <span class="ux4g-icon-outlined  ">mood_bad</span>
        </button>
        <button class="feedback-emoji-button">
            <span class="ux4g-icon-outlined ">sentiment_dissatisfied</span>
        </button>
        <button class="feedback-emoji-button">
            <span class="ux4g-icon-outlined ">sentiment_neutral</span>
        </button>
        <button class="feedback-emoji-button">
            <span class="ux4g-icon-outlined ">sentiment_satisfied</span>
        </button>
        <button class="feedback-emoji-button">
            <span class="ux4g-icon-outlined ">mood</span>
        </button>
    </div>
    <div class="ux4g-textarea-container">
        <div class="ux4g-textarea">
            <textarea class="ux4g-textarea-input" placeholder="Tell us more about your experience"
                rows="4"></textarea>
        </div>
    </div>
    <div class="ux4g-emoji-caption">
        <span class="ux4g-body-xs-default ux4g-emoji-desc">
            <i class="ux4g-icon-outlined ux4g-text-neutral-tertiary">chevron_left</i> Bad
        </span>
        <span class="ux4g-body-xs-default ux4g-emoji-desc">
            Good <i class="ux4g-icon-outlined ux4g-text-neutral-tertiary">chevron_right</i>
        </span>
    </div>
    <button class="ux4g-btn-primary " disabled>Submit</button>
    <button class="ux4g-btn-text-primary ux4g-text-neutral-primary">Skip</button>
</div>`;

const FEEDBACK_SUBMITTED_HTML = `
<div class="ux4g-feedback ux4g-text-center">
    <div class="feedback-submitted-wrapper">
        <span class="ux4g-icon-outlined ux4g-text-success ux4g-fs-24">thumb_up</span>
        <h3 class="ux4g-heading-s-strong">Feedback submitted</h3>
        <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Thank you for your feedback. This helps
            improve government services.</p>
    </div>
    <button class=" feedback-submitted-close-btn">Close</button>
</div>`;

// --- Stories Content ---

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Feedback</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Feedback components are used to capture user sentiment, satisfaction, and qualitative data. They support multiple interaction models including thumbs, stars, NPS, and emojis.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl">
            <div class="ux4g-my-xl">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of various Feedback patterns for capturing user input.</p>
                
                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Binary Feedback (Thumb)</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-jc-center">
                        ${FEEDBACK_THUMB_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Rating Feedback (Stars)</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-jc-center">
                        ${FEEDBACK_STAR_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Recommendation Score (NPS)</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-jc-center">
                        ${FEEDBACK_NPS_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Sentiment Feedback (Emoji)</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-jc-center">
                        ${FEEDBACK_EMOJI_HTML}
                    </div>
                </div>

                <div class="ux4g-mb-2xl">
                    <h3 class="ux4g-heading-s-strong ux4g-mb-m ux4g-bg-primary-subtle ux4g-p-m">Success State</h3>
                    <div class="ux4g-mb-l ux4g-d-flex ux4g-jc-center">
                        ${FEEDBACK_SUBMITTED_HTML}
                    </div>
                </div>
            </div>

            <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

            <div id="class-reference">
                <div class="ux4g-my-l">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and interaction classes for Feedback components.</p>
                </div>

                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                    <!-- Structural Classes -->
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Structural Classes</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${[
                                            { class: 'ux4g-feedback', label: 'Base Container' },
                                            { class: 'feedback-thumb-wrapper', label: 'Thumb Wrapper' },
                                            { class: 'ux4g-feedback-chip-wrapper', label: 'Chip Wrapper' },
                                            { class: 'ux4g-textarea-container', label: 'Textarea Wrapper' },
                                            { class: 'ux4g-feedback-nps-wrapper', label: 'NPS Wrapper' },
                                            { class: 'feedback-submitted-wrapper', label: 'Submitted Wrapper' }
                                        ].map(r => `
                                        <tr>
                                            <td class="ux4g-p-l">
                                                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                    <div class="ux4g-d-flex ux4g-flex-column">
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

                    <!-- Interaction Classes -->
                    <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                        <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                            <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Interaction Classes</h4>
                        </div>
                        <div class="ux4g-p-none">
                            <div class="ux4g-table-container">
                                <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                    <tbody>
                                        ${[
                                            { class: 'feedback-thumb-up', label: 'Thumb Button' },
                                            { class: 'ux4g-feedback-star', label: 'Star Icon' },
                                            { class: 'feedback-nps-button', label: 'NPS Score Button' },
                                            { class: 'feedback-emoji-button', label: 'Emoji Button' },
                                            { class: 'feedback-submitted-close-btn', label: 'Close Button' }
                                        ].map(t => `
                                        <tr>
                                            <td class="ux4g-p-l">
                                                <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                    <div class="ux4g-d-flex ux4g-flex-column">
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

export const FeedbackType = {
    name: 'Feedback Type',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Feedback Types', 'Showcasing various interaction models for gathering user feedback.')}
            <div class="ux4g-p-m ux4g-bg-white">
                ${renderDemoCodeBlock('feedback-thumb', 'Binary Feedback (Thumb)', 'Simple Yes/No evaluation.', FEEDBACK_THUMB_HTML, false, getSnippetCode([{ label: 'Feedback - Binary Thumb', html: FEEDBACK_THUMB_HTML }]))}
                ${renderDemoCodeBlock('feedback-star', 'Rating Feedback (Stars)', '5-star rating with categorical chips and comments.', FEEDBACK_STAR_HTML, false, getSnippetCode([{ label: 'Feedback - Star Rating', html: FEEDBACK_STAR_HTML }]))}
                ${renderDemoCodeBlock('feedback-nps', 'Recommendation Score (NPS)', '0-10 Net Promoter Score scale.', FEEDBACK_NPS_HTML, false, getSnippetCode([{ label: 'Feedback - NPS', html: FEEDBACK_NPS_HTML }]))}
                ${renderDemoCodeBlock('feedback-emoji', 'Sentiment Feedback (Emoji)', 'Visual sentiment selection with bad to good scale.', FEEDBACK_EMOJI_HTML, false, getSnippetCode([{ label: 'Feedback - Emoji Sentiment', html: FEEDBACK_EMOJI_HTML }]))}
                ${renderDemoCodeBlock('feedback-submitted', 'Success State', 'Confirmation message after feedback is submitted.', FEEDBACK_SUBMITTED_HTML, false, getSnippetCode([{ label: 'Feedback - Submitted Success State', html: FEEDBACK_SUBMITTED_HTML }]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
