/**
 * Time Slot Component Stories
 * 
 * Showcasing Time Slot variants including Weekly Expanded and Compact.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Time Slot',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Time Slot components allow users to select available appointment or meeting times from a scheduled grid.',
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

const getReactCode = (html) => htmlToJsx(html, 'TimeSlot');

const getSnippetCode = (entries) => entries.map(({ label, markup }) => `<!-- Variant: ${label} -->\n${markup}`).join('\n\n');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, gridClass = 'ux4g-grid-cols-1', codeContent = null) => {
    const displayCode = formatCode(codeContent || htmlContent);
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

// --- HTML Content ---

const WEEKLY_EXPANDED_HTML = `
<div class="ux4g-time-slot-weekly-container">
    <!-- Mobile Navigation Header (Hidden on Desktop) -->
    <div class="ux4g-time-slot-mobile-nav">
        <button class="ux4g-btn-icon ux4g-btn-text-neutral">
            <span class="ux4g-icon-outlined">arrow_back</span>
        </button>
        <div class="ux4g-time-slot-mobile-date">
            <strong>Mon 14 Apr</strong>
            <span class="ux4g-text-success-600">Today</span>
        </div>
        <button class="ux4g-btn-icon ux4g-btn-text-neutral">
            <span class="ux4g-icon-outlined">arrow_forward</span>
        </button>
    </div>

    <div class="ux4g-time-slot-weekly-grid" data-active-day="0">
        <!-- Headers -->
        <div class="ux4g-time-slot-time-col"></div>
        <div class="ux4g-time-slot-day-header" data-day="0">
            <strong>Mon</strong><span>14 Apr</span>
        </div>
        <div class="ux4g-time-slot-day-header" data-day="1">
            <strong>Tue</strong><span>15 Apr</span>
        </div>
        <div class="ux4g-time-slot-day-header" data-day="2">
            <strong>Wed</strong><span>16 Apr</span>
        </div>
        <div class="ux4g-time-slot-day-header holiday" data-day="3">
            <strong>Thu</strong><span>17 Apr</span>
        </div>
        <div class="ux4g-time-slot-day-header" data-day="4">
            <strong>Fri</strong><span>18 Apr</span>
        </div>
        <div class="ux4g-time-slot-day-header weekly-off" data-day="5">
            <strong>Sat</strong><span>19 Apr</span>
        </div>
        <div class="ux4g-time-slot-day-header weekly-off" data-day="6">
            <strong>Sun</strong><span>20 Apr</span>
        </div>

        <!-- 9:00 AM -->
        <div class="ux4g-time-slot-time-col">9:00 AM</div>
        <button class="ux4g-time-slot-cell available" data-day="0">
            <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
            <span class="ux4g-time-slot-slots">4 slots</span>
        </button>
        <button class="ux4g-time-slot-cell available" data-day="1">
            <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
            <span class="ux4g-time-slot-slots">5 slots</span>
        </button>
        <button class="ux4g-time-slot-cell available" data-day="2">
            <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
            <span class="ux4g-time-slot-slots">6 slots</span>
        </button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell available" data-day="4">
            <span class="ux4g-time-slot-mobile-time">9:00 AM</span>
            <span class="ux4g-time-slot-slots">7 slots</span>
        </button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 9:30 AM -->
        <div class="ux4g-time-slot-time-col">9:30 AM</div>
        <button class="ux4g-time-slot-cell available" data-day="0">
            <span class="ux4g-time-slot-mobile-time">9:30 AM</span>
            <span class="ux4g-time-slot-slots">6 slots</span>
        </button>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="1">No slots
            available</button>
        <button class="ux4g-time-slot-cell available" data-day="2">
            <span class="ux4g-time-slot-mobile-time">9:30 AM</span>
            <span class="ux4g-time-slot-slots">6 slots</span>
        </button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell limited" data-day="4">
            <span class="ux4g-time-slot-mobile-time">9:30 AM</span>
            <span class="ux4g-time-slot-slots">2 slots</span>
        </button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 10:00 AM -->
        <div class="ux4g-time-slot-time-col">10:00 AM</div>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="0">No slots
            available</button>
        <button class="ux4g-time-slot-cell available" data-day="1">9 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="2">10 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell limited" data-day="4">2 slots</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 10:30 AM -->
        <div class="ux4g-time-slot-time-col">10:30 AM</div>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="0">No slots
            available</button>
        <button class="ux4g-time-slot-cell available" data-day="1">5 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="2">8 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell available" data-day="4">2 slots</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 11:00 AM -->
        <div class="ux4g-time-slot-time-col">11:00 AM</div>
        <button class="ux4g-time-slot-cell available" data-day="0">10 slots</button>
        <button class="ux4g-time-slot-cell limited" data-day="1">2 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="2">10 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3">
            <strong>Public Holiday</strong>
            <span>Gandhi Jayanti</span>
        </div>
        <button class="ux4g-time-slot-cell available" data-day="4">3 slots</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5">Weekly off</div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6">Weekly off</div>

        <!-- 11:30 AM -->
        <div class="ux4g-time-slot-time-col">11:30 AM</div>
        <button class="ux4g-time-slot-cell available" data-day="0">5 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="1">6 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="2">7 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="4">No slots
            available</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 12:00 PM -->
        <div class="ux4g-time-slot-time-col">12:00 PM</div>
        <button class="ux4g-time-slot-cell available" data-day="0">5 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="1">10 slots</button>
        <button class="ux4g-time-slot-cell limited" data-day="2">2 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="4">No slots
            available</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 12:30 PM -->
        <div class="ux4g-time-slot-time-col">12:30 PM</div>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="0">No slots
            available</button>
        <button class="ux4g-time-slot-cell disabled" disabled="" data-day="1">No slots
            available</button>
        <button class="ux4g-time-slot-cell available" data-day="2">8 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell available" data-day="4">10 slots</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 1:00 PM -->
        <div class="ux4g-time-slot-time-col">1:00 PM</div>
        <button class="ux4g-time-slot-cell limited" data-day="0">2 slots</button>
        <button class="ux4g-time-slot-cell available" data-day="1">3 slots</button>
        <button class="ux4g-time-slot-cell" data-day="2">
        </button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell available" data-day="4">4 slots</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

        <!-- 1:30 PM -->
        <div class="ux4g-time-slot-time-col">1:30 PM</div>
        <button class="ux4g-time-slot-cell available" data-day="0">6 slots</button>
        <button class="ux4g-time-slot-cell limited" data-day="1">2 slots</button>
        <button class="ux4g-time-slot-cell limited" data-day="2">2 slots</button>
        <div class="ux4g-time-slot-cell holiday" data-day="3"></div>
        <button class="ux4g-time-slot-cell available" data-day="4">3 slots</button>
        <div class="ux4g-time-slot-cell weekly-off" data-day="5"></div>
        <div class="ux4g-time-slot-cell weekly-off" data-day="6"></div>

    </div>

    <div class="ux4g-time-slot-weekly-legend">
        <div class="ux4g-time-slot-legend-item">
            <span class="ux4g-legend-box bordered"></span> Available
        </div>
        <div class="ux4g-time-slot-legend-item">
            <span class="ux4g-legend-box check-purple"><span
                    class="ux4g-icon-filled">check_circle</span></span> Selected
        </div>
        <div class="ux4g-time-slot-legend-item">
            <span class="ux4g-legend-box disabled"></span> No slots
        </div>
        <div class="ux4g-time-slot-legend-item">
            <span class="ux4g-legend-box border-yellow"></span> Limited slots
        </div>
        <div class="ux4g-time-slot-legend-item">
            <span class="ux4g-legend-box holiday"></span> Public holiday
        </div>
        <div class="ux4g-time-slot-legend-item">
            <span class="ux4g-legend-box weekly-off"></span> Weekly off
        </div>
    </div>
    <div class="ux4g-time-slot-weekly-actions">
        <button class="ux4g-btn ux4g-btn-outline-neutral">Cancel</button>
        <button class="ux4g-btn ux4g-btn-primary" disabled="">Confirm</button>
    </div>
</div>
`;

const COMPACT_HTML = `
<div class="ux4g-time-slot-compact-container">
    <!-- Left Pane: Calendar -->
    <div class="ux4g-time-slot-compact-calendar">
        <div class="ux4g-time-slot-compact-header">
            <button class="ux4g-btn-icon ux4g-btn-text-neutral ux4g-btn-sm"><span
                    class="ux4g-icon-outlined">arrow_back</span></button>
            <span class="ux4g-time-slot-compact-month">May 2026</span>
            <button class="ux4g-btn-icon ux4g-btn-text-neutral ux4g-btn-sm"><span
                    class="ux4g-icon-outlined">arrow_forward</span></button>
        </div>
        <div class="ux4g-time-slot-compact-grid">
            <div class="ux4g-time-slot-day-name">Mo</div>
            <div class="ux4g-time-slot-day-name">Tu</div>
            <div class="ux4g-time-slot-day-name">We</div>
            <div class="ux4g-time-slot-day-name">Th</div>
            <div class="ux4g-time-slot-day-name">Fr</div>
            <div class="ux4g-time-slot-day-name">Sa</div>
            <div class="ux4g-time-slot-day-name">Su</div>
            <div class="ux4g-time-slot-date muted">27</div>
            <div class="ux4g-time-slot-date muted">28</div>
            <div class="ux4g-time-slot-date muted">29</div>
            <div class="ux4g-time-slot-date muted">30</div>
            <div class="ux4g-time-slot-date" data-date="1">1</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="2">2</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="3">3</div>
            <div class="ux4g-time-slot-date" data-date="4">4</div>
            <div class="ux4g-time-slot-date" data-date="5">5</div>
            <div class="ux4g-time-slot-date" data-date="6">6</div>
            <div class="ux4g-time-slot-date" data-date="7">7</div>
            <div class="ux4g-time-slot-date" data-date="8">8</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="9">9</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="10">10</div>
            <div class="ux4g-time-slot-date" data-date="11">11</div>
            <div class="ux4g-time-slot-date today" data-date="12">12</div>
            <div class="ux4g-time-slot-date" data-date="13">13</div>
            <div class="ux4g-time-slot-date" data-date="14">14</div>
            <div class="ux4g-time-slot-date" data-date="15">15</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="16">16</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="17">17</div>
            <div class="ux4g-time-slot-date" data-date="18">18</div>
            <div class="ux4g-time-slot-date" data-date="19">19</div>
            <div class="ux4g-time-slot-date" data-date="20">20</div>
            <div class="ux4g-time-slot-date" data-date="21">21</div>
            <div class="ux4g-time-slot-date" data-date="22">22</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="23">23</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="24">24</div>
            <div class="ux4g-time-slot-date" data-date="25">25</div>
            <div class="ux4g-time-slot-date" data-date="26">26</div>
            <div class="ux4g-time-slot-date" data-date="27">27</div>
            <div class="ux4g-time-slot-date" data-date="28">28</div>
            <div class="ux4g-time-slot-date" data-date="29">29</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="30">30</div>
            <div class="ux4g-time-slot-date weekly-off" data-date="31">31</div>
            <div class="ux4g-time-slot-date muted">1</div>
            <div class="ux4g-time-slot-date muted">2</div>
            <div class="ux4g-time-slot-date muted">3</div>
            <div class="ux4g-time-slot-date muted">4</div>
            <div class="ux4g-time-slot-date muted">5</div>
            <div class="ux4g-time-slot-date muted">6</div>
            <div class="ux4g-time-slot-date muted">7</div>
        </div>

        <div class="ux4g-time-slot-compact-legend">
            <div class="ux4g-time-slot-legend-item"><span class="ux4g-legend-box no-slots"></span> No
                slots</div>
            <div class="ux4g-time-slot-legend-item"><span class="ux4g-legend-box holiday"></span> Public
                holiday</div>
            <div class="ux4g-time-slot-legend-item"><span class="ux4g-legend-box weekly-off"></span>
                Weekly off</div>
        </div>
    </div>

    <!-- Right Pane: Slots -->
    <div class="ux4g-time-slot-compact-slots">
        <div class="ux4g-time-slot-compact-desktop-header">23rd April 2026</div>
        <div class="ux4g-time-slot-compact-list grid-2">
            <div class="ux4g-time-slot-compact-slot-item">
                <span>9:00 AM</span><span class="ux4g-slot-badge success">6</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>9:30 AM</span><span class="ux4g-slot-badge success">7</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>10:00 AM</span><span class="ux4g-slot-badge warning">1</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>10:30 AM</span><span class="ux4g-slot-badge success">9</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item disabled">
                <span>11:00 AM</span><span class="ux4g-slot-badge ux4g-slot-badge-neutral">0</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>11:30 AM</span><span class="ux4g-slot-badge warning">2</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>12:00 PM</span><span class="ux4g-slot-badge warning">2</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>12:30 PM</span><span class="ux4g-slot-badge success">3</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item disabled">
                <span>1:00 PM</span><span class="ux4g-slot-badge ux4g-slot-badge-neutral">0</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>1:30 PM</span><span class="ux4g-slot-badge success">7</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>2:00 PM</span><span class="ux4g-slot-badge success">3</span>
            </div>
            <div class="ux4g-time-slot-compact-slot-item">
                <span>2:30 PM</span><span class="ux4g-slot-badge warning">2</span>
            </div>
        </div>

        <div class="ux4g-time-slot-compact-actions">
            <button class="ux4g-btn ux4g-btn-outline-neutral">Cancel</button>
            <button class="ux4g-btn ux4g-btn-primary" disabled="">Confirm</button>
        </div>
    </div>
</div>
`;

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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Time Slot</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Time Slot components display available appointment grids allowing users to view schedules and pick a specific time across a week or a compact calendar layout.
                    </p>
                </div>
            </div>
        </section>

       <section class="ux4g-p-xl">
            <div class="">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of Time Slot variations.</p>
                    
                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Time Slot / Weekly Expanded</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${WEEKLY_EXPANDED_HTML}
                            </div>
                        </div>
                    </div>

                    <div class="ux4g-mb-xl">
                        <h3 class="ux4g-heading-s-strong ux4g-mb-m">Time Slot / Compact</h3>
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-p-xl">
                                ${COMPACT_HTML}
                            </div>
                        </div>
                    </div>
                </div>

                <div class="ux4g-divider-horizontal ux4g-my-3xl"></div>

                <div id="class-reference">
                    <div class="ux4g-my-l">
                        <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">CSS Class Reference</h2>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Quickly copy layout and utility classes for Time Slot interfaces.</p>
                    </div>

                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl ux4g-mb-xl">
                        <!-- Weekly Expanded Classes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Weekly Expanded Classes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-time-slot-weekly-container', label: 'Main Weekly Container' },
                                                { class: 'ux4g-time-slot-weekly-grid', label: 'Schedule Grid Area' },
                                                { class: 'ux4g-time-slot-day-header', label: 'Day Column Header' },
                                                { class: 'ux4g-time-slot-cell', label: 'Time Slot Item/Cell' },
                                                { class: 'ux4g-time-slot-weekly-legend', label: 'Legend Container' },
                                                { class: 'ux4g-time-slot-mobile-nav', label: 'Mobile Nav Container' }
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

                        <!-- Compact & State Utilities -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Compact & State Utilities</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-time-slot-compact-container', label: 'Main Compact Container' },
                                                { class: 'ux4g-time-slot-compact-calendar', label: 'Compact Left Pane' },
                                                { class: 'ux4g-time-slot-compact-slots', label: 'Compact Right Pane' },
                                                { class: 'ux4g-time-slot-compact-slot-item', label: 'Compact Time Slot Item' },
                                                { class: 'available', label: 'Available Slot State' },
                                                { class: 'holiday', label: 'Holiday State' },
                                                { class: 'weekly-off', label: 'Weekly Off State' }
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

export const WeeklyExpanded = {
    name: 'Weekly Expanded',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Time Slot / Weekly Expanded', 'A detailed, week-level timeline grid showing available meeting or appointment slots across multiple days.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('time-slot-weekly', 'Weekly Expanded Time Slot', 'Full schedule view displaying available time cells across a structured 7-day period.', WEEKLY_EXPANDED_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([
                    { label: 'Weekly Expanded - Mobile Navigation Header', markup: '<div class="ux4g-time-slot-mobile-nav">...</div>' },
                    { label: 'Weekly Expanded - Weekly Grid Container', markup: '<div class="ux4g-time-slot-weekly-grid" data-active-day="0">...</div>' },
                    { label: 'Weekly Expanded - Available Slot Cell', markup: '<button class="ux4g-time-slot-cell available" data-day="0"><span class="ux4g-time-slot-mobile-time">9:00 AM</span><span class="ux4g-time-slot-slots">4 slots</span></button>' },
                    { label: 'Weekly Expanded - Limited Slot Cell', markup: '<button class="ux4g-time-slot-cell limited" data-day="4"><span class="ux4g-time-slot-mobile-time">9:30 AM</span><span class="ux4g-time-slot-slots">2 slots</span></button>' },
                    { label: 'Weekly Expanded - Disabled Slot Cell', markup: '<button class="ux4g-time-slot-cell disabled" disabled data-day="1">No slots available</button>' },
                    { label: 'Weekly Expanded - Holiday Cell', markup: '<div class="ux4g-time-slot-cell holiday" data-day="3"><strong>Public Holiday</strong><span>Gandhi Jayanti</span></div>' },
                    { label: 'Weekly Expanded - Weekly Off Cell', markup: '<div class="ux4g-time-slot-cell weekly-off" data-day="5">Weekly off</div>' },
                    { label: 'Weekly Expanded - Legend', markup: '<div class="ux4g-time-slot-weekly-legend">...</div>' },
                    { label: 'Weekly Expanded - Actions', markup: '<div class="ux4g-time-slot-weekly-actions"><button class="ux4g-btn ux4g-btn-outline-neutral">Cancel</button><button class="ux4g-btn ux4g-btn-primary" disabled>Confirm</button></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const Compact = {
    name: 'Compact',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Time Slot / Compact', 'A condensed view grouping a monthly calendar on one side and a focused daily slot list on the other.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('time-slot-compact', 'Compact Time Slot', 'Split layout displaying a monthly calendar navigation alongside available times for the selected date.', COMPACT_HTML, false, 'ux4g-grid-cols-1', getSnippetCode([
                    { label: 'Compact Time Slot - Calendar Container', markup: '<div class="ux4g-time-slot-compact-calendar">...</div>' },
                    { label: 'Compact Time Slot - Calendar Date - Today', markup: '<div class="ux4g-time-slot-date today" data-date="12">12</div>' },
                    { label: 'Compact Time Slot - Calendar Date - Weekly Off', markup: '<div class="ux4g-time-slot-date weekly-off" data-date="16">16</div>' },
                    { label: 'Compact Time Slot - Calendar Date - Muted', markup: '<div class="ux4g-time-slot-date muted">27</div>' },
                    { label: 'Compact Time Slot - Slot Item - Available', markup: '<div class="ux4g-time-slot-compact-slot-item"><span>9:00 AM</span><span class="ux4g-slot-badge success">6</span></div>' },
                    { label: 'Compact Time Slot - Slot Item - Limited', markup: '<div class="ux4g-time-slot-compact-slot-item"><span>10:00 AM</span><span class="ux4g-slot-badge warning">1</span></div>' },
                    { label: 'Compact Time Slot - Slot Item - Disabled', markup: '<div class="ux4g-time-slot-compact-slot-item disabled"><span>11:00 AM</span><span class="ux4g-slot-badge ux4g-slot-badge-neutral">0</span></div>' },
                    { label: 'Compact Time Slot - Actions', markup: '<div class="ux4g-time-slot-compact-actions"><button class="ux4g-btn ux4g-btn-outline-neutral">Cancel</button><button class="ux4g-btn ux4g-btn-primary" disabled>Confirm</button></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
