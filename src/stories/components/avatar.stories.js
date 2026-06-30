/**
 * Avatar Component Stories
 * 
 * Showcasing different types of Avatars: Base, Status, Group, and Profile Avatars with various sizes and badges.
 * Version: 1.0.0
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Components/Avatar',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Avatars are used to represent people or objects in a visual format, supporting images, icons, and initials.',
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

const getReactCode = (html) => htmlToJsx(html, 'Avatar');

const getSnippetCode = (entries) => formatCode(entries.map(({ label, html }) => `<!-- Variant: ${label} -->\n${html}`).join('\n\n'));

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, overrideCode = null) => {
    const displayCode = formatCode(overrideCode || htmlContent);

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
    <div class="ux4g-bg-neutral ux4g-min-h-screen ux4g-w-screen" id="intro-container">
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
                    <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">Avatar</h1>
                    <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">
                        Avatars are essential UI elements for representing users or entities. They support images, icons, and initials with flexible sizing and advanced badge integration.
                    </p>
                </div>
            </div>
        </section>

        <section class="ux4g-p-xl ux4g-bg-neutral-subtle">
            <div class="ux4g-container">
                <div class="ux4g-my-xl">
                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l">Implementation Showcase</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-xl">Visual demonstration of the four primary avatar configurations supported by the design system.</p>
                    
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                        <!-- Block 1: Base Avatars -->
                        <div class="ux4g-mb-xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Base Avatars</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                        <div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=b1" alt=""></div>
                                        <div class="ux4g-avatar ux4g-avatar-neutral"><span>JD</span></div>
                                        <div class="ux4g-avatar ux4g-avatar-primary"><i class="ux4g-icon">person</i></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Block 2: Status Avatars -->
                        <div class="ux4g-mb-xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Status Avatars</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-flex-wrap">
                                        <div class="ux4g-avatar ux4g-relative">
                                            <img src="https://i.pravatar.cc/150?u=s1" alt="">
                                            <span class="ux4g-badge-dot-success avatar-badge ux4g-badge-m"></span>
                                        </div>
                                        <div class="ux4g-avatar ux4g-relative">
                                            <img src="https://i.pravatar.cc/150?u=s2" alt="">
                                            <span class="ux4g-badge-icon-warning avatar-badge ux4g-badge-m"><i class="ux4g-icon">priority_high</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Block 3: Avatar Groups -->
                        <div class="ux4g-mb-xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Avatar Groups</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-avatar-group">
                                        <div class="ux4g-avatar "><img src="https://i.pravatar.cc/150?u=g1" alt=""></div>
                                        <div class="ux4g-avatar "><img src="https://i.pravatar.cc/150?u=g2" alt=""></div>
                                        <div class="ux4g-avatar  ux4g-avatar-neutral"><span>+5</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Block 4: Profile Avatars -->
                        <div class="ux4g-mb-xl">
                            <h3 class="ux4g-heading-s-strong ux4g-mb-m">Profile Avatars</h3>
                            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                                <div class="ux4g-p-xl">
                                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                                        <img src="https://i.pravatar.cc/150?u=p1" alt="">
                                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">edit</i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-mt-2xl ux4g-mb-l">CSS Class Reference</h2>
                    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-md-2 ux4g-gap-xl">
                        <!-- Avatar Sizes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Avatar Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-avatar-3xl', label: '3-Extra Large ' },
                                                { class: 'ux4g-avatar-2xl', label: '2-Extra Large ' },
                                                { class: 'ux4g-avatar-xl', label: 'Extra Large ' },
                                                { class: 'ux4g-avatar-l', label: 'Large ' },
                                                { class: 'ux4g-avatar-m', label: 'Medium  [Default]' },
                                                { class: 'ux4g-avatar-s', label: 'Small ' },
                                                { class: 'ux4g-avatar-xs', label: 'Extra Small ' }
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

                        <!-- Status Badge Sizes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Status Badge Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-badge-l', label: 'Large ' },
                                                { class: 'ux4g-badge-m', label: 'Medium [Default]' },
                                                { class: 'ux4g-badge-s', label: 'Small' }
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

                        <!-- Profile Badge Sizes -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Profile Badge Sizes</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-badge-profile-3xl', label: '3-Extra Large ' },
                                                { class: 'ux4g-badge-profile-2xl', label: '2-Extra Large ' },
                                                { class: 'ux4g-badge-profile-xl', label: 'Extra Large ' },
                                                { class: 'ux4g-badge-profile-l', label: 'Large  [Default]' }
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

                        <!-- Status & Badge Variants -->
                        <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden">
                            <div class="ux4g-bg-neutral-soft ux4g-py-m ux4g-px-l ux4g-bb ux4g-border-neutral-emphasis">
                                <h4 class="ux4g-label-m-strong ux4g-text-neutral-strong">Status & Badge Variants</h4>
                            </div>
                            <div class="ux4g-p-none">
                                <div class="ux4g-table-container">
                                    <table class="ux4g-table ux4g-table-bordered ux4g-m-none">
                                        <tbody>
                                            ${[
                                                { class: 'ux4g-badge-dot-success', label: 'Online Status' },
                                                { class: 'ux4g-badge-dot-neutral', label: 'Offline Status' },
                                                { class: 'ux4g-badge-icon-warning', label: 'Busy / Busy Icon' },
                                                { class: 'ux4g-badge-icon-success', label: 'Success Icon' },
                                                { class: 'ux4g-badge-icon-danger', label: 'Error Icon' },
                                                { class: 'ux4g-badge-icon-primary', label: 'Profile Verify Icon' }
                                            ].map(v => `
                                            <tr>
                                                <td class="ux4g-p-l">
                                                    <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center">
                                                        <div class="ux4g-d-flex ux4g-flex-col">
                                                            <span class="ux4g-label-s-strong">${v.label}</span>
                                                            <code class="ux4g-text-primary ux4g-fs-12">${v.class}</code>
                                                        </div>
                                                        <button class="ux4g-btn ux4g-btn-ghost ux4g-btn-sm copy-text" data-text="${v.class}"><span class="ux4g-icon-outlined ux4g-fs-16">content_copy</span></button>
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
                            btn.innerHTML = '<span class="ux4g-icon-outlined ux4g-fs-16 ux4g-text-success">check</span>';
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

export const BaseAvatar = {
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Base Avatar', 'Standard avatars with support for initials, icons, and images across multiple sizes.')}
            <div class="ux4g-p-m">
                <!-- 1. Initials Scaling -->
                ${renderDemoCodeBlock('initial-scaling', '1. Initials Scaling', 'Avatars displaying user initials in various sizes.', `
                    <div class="ux4g-avatar ux4g-avatar-xs">XS</div>
                    <div class="ux4g-avatar ux4g-avatar-s">S</div>
                    <div class="ux4g-avatar">M</div>
                    <div class="ux4g-avatar ux4g-avatar-l">L</div>
                    <div class="ux4g-avatar ux4g-avatar-xl">XL</div>
                    <div class="ux4g-avatar ux4g-avatar-2xl">2XL</div>
                    <div class="ux4g-avatar ux4g-avatar-3xl">3XL</div>
                `, false, getSnippetCode([
                    { label: 'Initial Avatar - XS', html: '<div class="ux4g-avatar ux4g-avatar-xs">XS</div>' },
                    { label: 'Initial Avatar - S', html: '<div class="ux4g-avatar ux4g-avatar-s">S</div>' },
                    { label: 'Initial Avatar - M', html: '<div class="ux4g-avatar">M</div>' },
                    { label: 'Initial Avatar - L', html: '<div class="ux4g-avatar ux4g-avatar-l">L</div>' },
                    { label: 'Initial Avatar - XL', html: '<div class="ux4g-avatar ux4g-avatar-xl">XL</div>' },
                    { label: 'Initial Avatar - 2XL', html: '<div class="ux4g-avatar ux4g-avatar-2xl">2XL</div>' },
                    { label: 'Initial Avatar - 3XL', html: '<div class="ux4g-avatar ux4g-avatar-3xl">3XL</div>' },
                ]))}

                <!-- 2. Icon Scaling -->
                ${renderDemoCodeBlock('icon-scaling', '2. Icon Scaling', 'Avatars displaying icons in various sizes.', `
                    <div class="ux4g-avatar ux4g-avatar-xs"><i class="ux4g-icon">person</i></div>
                    <div class="ux4g-avatar ux4g-avatar-s"><i class="ux4g-icon">person</i></div>
                    <div class="ux4g-avatar"><i class="ux4g-icon">person</i></div>
                    <div class="ux4g-avatar ux4g-avatar-l"><i class="ux4g-icon">person</i></div>
                    <div class="ux4g-avatar ux4g-avatar-xl"><i class="ux4g-icon">person</i></div>
                    <div class="ux4g-avatar ux4g-avatar-2xl"><i class="ux4g-icon">person</i></div>
                    <div class="ux4g-avatar ux4g-avatar-3xl"><i class="ux4g-icon">person</i></div>
                `, false, getSnippetCode([
                    { label: 'Icon Avatar - XS', html: '<div class="ux4g-avatar ux4g-avatar-xs"><i class="ux4g-icon">person</i></div>' },
                    { label: 'Icon Avatar - S', html: '<div class="ux4g-avatar ux4g-avatar-s"><i class="ux4g-icon">person</i></div>' },
                    { label: 'Icon Avatar - M', html: '<div class="ux4g-avatar"><i class="ux4g-icon">person</i></div>' },
                    { label: 'Icon Avatar - L', html: '<div class="ux4g-avatar ux4g-avatar-l"><i class="ux4g-icon">person</i></div>' },
                    { label: 'Icon Avatar - XL', html: '<div class="ux4g-avatar ux4g-avatar-xl"><i class="ux4g-icon">person</i></div>' },
                    { label: 'Icon Avatar - 2XL', html: '<div class="ux4g-avatar ux4g-avatar-2xl"><i class="ux4g-icon">person</i></div>' },
                    { label: 'Icon Avatar - 3XL', html: '<div class="ux4g-avatar ux4g-avatar-3xl"><i class="ux4g-icon">person</i></div>' },
                ]))}

                <!-- 3. Image Scaling -->
                ${renderDemoCodeBlock('image-scaling', '3. Image Scaling', 'Avatars displaying images in various sizes.', `
                    <div class="ux4g-avatar ux4g-avatar-xs"><img alt="avatar" src="https://i.pravatar.cc/150?u=xs"></div>
                    <div class="ux4g-avatar ux4g-avatar-s"><img alt="avatar" src="https://i.pravatar.cc/150?u=s"></div>
                    <div class="ux4g-avatar"><img alt="avatar" src="https://i.pravatar.cc/150?u=m"></div>
                    <div class="ux4g-avatar ux4g-avatar-l"><img alt="avatar" src="https://i.pravatar.cc/150?u=l"></div>
                    <div class="ux4g-avatar ux4g-avatar-xl"><img alt="avatar" src="https://i.pravatar.cc/150?u=xl"></div>
                    <div class="ux4g-avatar ux4g-avatar-2xl"><img alt="avatar" src="https://i.pravatar.cc/150?u=2xl"></div>
                    <div class="ux4g-avatar ux4g-avatar-3xl"><img alt="avatar" src="https://i.pravatar.cc/150?u=3xl"></div>
                `, false, getSnippetCode([
                    { label: 'Image Avatar - XS', html: '<div class="ux4g-avatar ux4g-avatar-xs"><img alt="avatar" src="https://i.pravatar.cc/150?u=xs"></div>' },
                    { label: 'Image Avatar - S', html: '<div class="ux4g-avatar ux4g-avatar-s"><img alt="avatar" src="https://i.pravatar.cc/150?u=s"></div>' },
                    { label: 'Image Avatar - M', html: '<div class="ux4g-avatar"><img alt="avatar" src="https://i.pravatar.cc/150?u=m"></div>' },
                    { label: 'Image Avatar - L', html: '<div class="ux4g-avatar ux4g-avatar-l"><img alt="avatar" src="https://i.pravatar.cc/150?u=l"></div>' },
                    { label: 'Image Avatar - XL', html: '<div class="ux4g-avatar ux4g-avatar-xl"><img alt="avatar" src="https://i.pravatar.cc/150?u=xl"></div>' },
                    { label: 'Image Avatar - 2XL', html: '<div class="ux4g-avatar ux4g-avatar-2xl"><img alt="avatar" src="https://i.pravatar.cc/150?u=2xl"></div>' },
                    { label: 'Image Avatar - 3XL', html: '<div class="ux4g-avatar ux4g-avatar-3xl"><img alt="avatar" src="https://i.pravatar.cc/150?u=3xl"></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const StatusAvatar = {
    render: () => `
        <div class="ux4g-bg-neutral ux4g-min-h-screen">
            ${getHeroHeader('Status Avatar', 'Avatars with integrated status indicators for availability or activities.')}
            <div class="ux4g-p-m ">
                <!-- 1. Status Badges -->
                ${renderDemoCodeBlock('status-badges', '1. Status Badges', 'Avatars with integrated status indicators for availability or activities.', `
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-xl ux4g-flex-wrap">
                        <!-- Online -->
                        <div class="ux4g-avatar ux4g-relative">
                            <img src="https://i.pravatar.cc/150?u=s1" alt="avatar">
                            <span class="ux4g-badge-dot-success avatar-badge ux4g-badge-m"></span>
                        </div>
                        <!-- Offline -->
                        <div class="ux4g-avatar ux4g-relative">
                            <img src="https://i.pravatar.cc/150?u=s2" alt="avatar">
                            <span class="ux4g-badge-dot-neutral avatar-badge ux4g-badge-m"></span>
                        </div>
                        <!-- Busy -->
                        <div class="ux4g-avatar ux4g-relative">
                            <img src="https://i.pravatar.cc/150?u=s3" alt="avatar">
                            <span class="ux4g-badge-icon-warning avatar-badge ux4g-badge-m"><i class="ux4g-icon">do_disturb_on</i></span>
                        </div>
                        <!-- Success -->
                        <div class="ux4g-avatar ux4g-relative">
                            <img src="https://i.pravatar.cc/150?u=s4" alt="avatar">
                            <span class="ux4g-badge-icon-success avatar-badge ux4g-badge-m"><i class="ux4g-icon">check</i></span>
                        </div>
                        <!-- Error -->
                        <div class="ux4g-avatar ux4g-relative">
                            <img src="https://i.pravatar.cc/150?u=s5" alt="avatar">
                            <span class="ux4g-badge-icon-danger avatar-badge ux4g-badge-m"><i class="ux4g-icon">close</i></span>
                        </div>
                        <!-- Warning -->
                        <div class="ux4g-avatar ux4g-relative">
                            <img src="https://i.pravatar.cc/150?u=s6" alt="avatar">
                            <span class="ux4g-badge-icon-warning avatar-badge ux4g-badge-m"><i class="ux4g-icon">priority_high</i></span>
                        </div>
                    </div>
                `)}

                <!-- 2. Status Sizes -->
                ${renderDemoCodeBlock('status-sizes', '2. Status Sizes', 'Status indicators available in small to large sizes.', `
                    <div class="ux4g-d-flex ux4g-ai-end ux4g-gap-xl ux4g-flex-wrap">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 40px;">S (10px)</span>
                            <div class="ux4g-avatar ux4g-avatar-s ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=sz1" alt="avatar">
                                <span class="ux4g-badge-icon-success avatar-badge ux4g-badge-s"><i class="ux4g-icon">check</i></span>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 48px;">M (Default)</span>
                            <div class="ux4g-avatar ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=sz2" alt="avatar">
                                <span class="ux4g-badge-icon-success avatar-badge ux4g-badge-m"><i class="ux4g-icon">check</i></span>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 56px;">L (12px)</span>
                            <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=sz3" alt="avatar">
                                <span class="ux4g-badge-icon-success avatar-badge ux4g-badge-l"><i class="ux4g-icon">check</i></span>
                            </div>
                        </div>
                    </div>
                `, false, getSnippetCode([
                    { label: 'Status Avatar - Small Badge Size', html: '<div class="ux4g-avatar ux4g-avatar-s ux4g-relative"><img src="https://i.pravatar.cc/150?u=sz1" alt="avatar"><span class="ux4g-badge-icon-success avatar-badge ux4g-badge-s"><i class="ux4g-icon">check</i></span></div>' },
                    { label: 'Status Avatar - Medium Badge Size', html: '<div class="ux4g-avatar ux4g-relative"><img src="https://i.pravatar.cc/150?u=sz2" alt="avatar"><span class="ux4g-badge-icon-success avatar-badge ux4g-badge-m"><i class="ux4g-icon">check</i></span></div>' },
                    { label: 'Status Avatar - Large Badge Size', html: '<div class="ux4g-avatar ux4g-avatar-l ux4g-relative"><img src="https://i.pravatar.cc/150?u=sz3" alt="avatar"><span class="ux4g-badge-icon-success avatar-badge ux4g-badge-l"><i class="ux4g-icon">check</i></span></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const AvatarGroup = {
    render: () => `
        <div class="ux4g-bg-neutral ux4g-min-h-screen">
            ${getHeroHeader('Avatar Group', 'Display multiple avatars in a stacked arrangement.')}
            <div class="ux4g-p-m">
                <!-- 1. Group Variants -->
                ${renderDemoCodeBlock('group-variants', '1. Group Variants', 'Multiple avatars in a stacked image arrangement.', `
                    <div class="ux4g-avatar-group">
                        <div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=g1" alt="avatar"></div>
                        <div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=g2" alt="avatar"></div>
                        <div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=g3" alt="avatar"></div>
                    </div>
                `, false, getSnippetCode([
                    { label: 'Avatar Group - Three Members', html: '<div class="ux4g-avatar-group"><div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=g1" alt="avatar"></div><div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=g2" alt="avatar"></div><div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=g3" alt="avatar"></div></div>' },
                ]))}

                <!-- 2. Group Sizes -->
                ${renderDemoCodeBlock('group-sizes-refactor', '2. Group Sizes', 'Avatar groups in different sizes from XS to Medium.', `
                    <div class="ux4g-d-flex ux4g-ai-end ux4g-gap-xl ux4g-flex-wrap">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center">XS (24px)</span>
                            <div class="ux4g-avatar-group">
                                <div class="ux4g-avatar ux4g-avatar-xs"><img src="https://i.pravatar.cc/150?u=gz1" alt="avatar"></div>
                                <div class="ux4g-avatar ux4g-avatar-xs"><img src="https://i.pravatar.cc/150?u=gz2" alt="avatar"></div>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center">S (32px)</span>
                            <div class="ux4g-avatar-group">
                                <div class="ux4g-avatar ux4g-avatar-s"><img src="https://i.pravatar.cc/150?u=gz3" alt="avatar"></div>
                                <div class="ux4g-avatar ux4g-avatar-s"><img src="https://i.pravatar.cc/150?u=gz4" alt="avatar"></div>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center">M (Default)</span>
                            <div class="ux4g-avatar-group">
                                <div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=gz5" alt="avatar"></div>
                                <div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=gz6" alt="avatar"></div>
                            </div>
                        </div>
                    </div>
                `, false, getSnippetCode([
                    { label: 'Avatar Group - XS', html: '<div class="ux4g-avatar-group"><div class="ux4g-avatar ux4g-avatar-xs"><img src="https://i.pravatar.cc/150?u=gz1" alt="avatar"></div><div class="ux4g-avatar ux4g-avatar-xs"><img src="https://i.pravatar.cc/150?u=gz2" alt="avatar"></div></div>' },
                    { label: 'Avatar Group - S', html: '<div class="ux4g-avatar-group"><div class="ux4g-avatar ux4g-avatar-s"><img src="https://i.pravatar.cc/150?u=gz3" alt="avatar"></div><div class="ux4g-avatar ux4g-avatar-s"><img src="https://i.pravatar.cc/150?u=gz4" alt="avatar"></div></div>' },
                    { label: 'Avatar Group - M', html: '<div class="ux4g-avatar-group"><div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=gz5" alt="avatar"></div><div class="ux4g-avatar"><img src="https://i.pravatar.cc/150?u=gz6" alt="avatar"></div></div>' },
                ]))}

                <!-- 3. Collapsed Groups -->
                ${renderDemoCodeBlock('group-collapsed', '3. Collapsed Groups', 'Displaying a maximum number of avatars with a surplus indicator.', `
                    <div class="ux4g-d-flex ux4g-flex-col ux4g-gap-l">
                        <!-- Max 2 -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary ux4g-mb-xs">Max 2</div>
                            <div class="ux4g-avatar-group" data-max="2">
                                <div class="ux4g-avatar ux4g-avatar-xs"><img alt="" src="https://i.pravatar.cc/150?u=15" /></div>
                                <div class="ux4g-avatar ux4g-avatar-xs"><img alt="" src="https://i.pravatar.cc/150?u=16" /></div>
                                <div class="ux4g-avatar ux4g-avatar-xs"><img alt="" src="https://i.pravatar.cc/150?u=17" /></div>
                                <div class="ux4g-avatar ux4g-avatar-xs"><img alt="" src="https://i.pravatar.cc/150?u=18" /></div>
                                <div class="ux4g-avatar ux4g-avatar-xs ux4g-avatar-number">+6</div>
                            </div>
                        </div>
                        <!-- Max 3 -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary ux4g-mb-xs">Max 3</div>
                            <div class="ux4g-avatar-group" data-max="3">
                                <div class="ux4g-avatar ux4g-avatar-s"><img alt="" src="https://i.pravatar.cc/150?u=19" /></div>
                                <div class="ux4g-avatar ux4g-avatar-s"><img alt="" src="https://i.pravatar.cc/150?u=20" /></div>
                                <div class="ux4g-avatar ux4g-avatar-s"><img alt="" src="https://i.pravatar.cc/150?u=21" /></div>
                                <div class="ux4g-avatar ux4g-avatar-s"><img alt="" src="https://i.pravatar.cc/150?u=22" /></div>
                                <div class="ux4g-avatar ux4g-avatar-s"><img alt="" src="https://i.pravatar.cc/150?u=23" /></div>
                                <div class="ux4g-avatar ux4g-avatar-s"><img alt="" src="https://i.pravatar.cc/150?u=24" /></div>
                                <div class="ux4g-avatar ux4g-avatar-s ux4g-avatar-number">+3</div>
                            </div>
                        </div>
                        <!-- Max 4 -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary ux4g-mb-xs">Max 4</div>
                            <div class="ux4g-avatar-group" data-max="4">
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=25" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=26" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=27" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=28" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=29" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=30" /></div>
                                <div class="ux4g-avatar ux4g-avatar-number">+2</div>
                            </div>
                        </div>
                        <!-- Max 5 -->
                        <div>
                            <div class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary ux4g-mb-xs">Max 5</div>
                            <div class="ux4g-avatar-group" data-max="5">
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=31" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=32" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=33" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=34" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=35" /></div>
                                <div class="ux4g-avatar"><img alt="" src="https://i.pravatar.cc/150?u=36" /></div>
                                <div class="ux4g-avatar ux4g-avatar-number">+1</div>
                            </div>
                        </div>
                    </div>
                `)}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};

export const ProfileAvatar = {
    render: () => `
        <div class="ux4g-bg-neutral ux4g-min-h-screen">
            ${getHeroHeader('Profile Avatar', 'Enhanced avatars for user profiles with specialized badges and action indicators.')}
            <div class="ux4g-p-m">
                <!-- 1. Profile Badges (Dot & Icon) -->
                ${renderDemoCodeBlock('profile-badges', '1. Profile Badges', 'Avatars with verification, star, and action badges.', `
                    <!-- Verify -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=50" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.377 3.93945L17.5234 4.18652L17.8037 4.25L21.2949 5.04297L20.9658 8.6123L20.9395 8.89746L21.1279 9.1123L23.4893 11.8125L21.1279 14.5127L20.9395 14.7275L20.9658 15.0127L21.2949 18.5811L17.8037 19.375L17.5234 19.4385L17.3779 19.6855L15.5498 22.7695L12.2627 21.3584L11.999 21.2451L11.7354 21.3594L8.44922 22.7793L6.62207 19.6963L6.47656 19.4492L6.19629 19.3857L2.7041 18.5928L3.03418 15.0127L3.05957 14.7275L2.87207 14.5127L0.509766 11.8115L2.87305 9.10059L3.05957 8.88574L3.03418 8.60156L2.7041 5.02148L6.19434 4.23926L6.47559 4.17578L6.62207 3.92871L8.4502 0.842773L11.7373 2.25488L12 2.36816L12.2627 2.25488L15.5488 0.842773L17.377 3.93945Z" fill="#3271EA" stroke="#FAFAFA" stroke-width="1.33333" />
                            </svg>
                        </span>
                    </div>
                    <!-- Star -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=51" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M15.1045 1.51953C15.4418 0.678693 16.5582 0.678693 16.8955 1.51953L16.8965 1.52246L20.4307 10.248L20.6348 10.752L21.1758 10.7998L30.207 11.6025H30.2119C31.0109 11.6692 31.4844 12.8201 30.7549 13.4814L30.7539 13.4824L23.8916 19.7041L23.5088 20.0508L23.6211 20.5557L25.6777 29.79C25.785 30.2732 25.5932 30.6816 25.2881 30.9141C25.0258 31.1137 24.6965 31.1763 24.373 31.0332L24.2354 30.959L16.4756 26.0479L16.001 25.748L15.5264 26.0469L7.7666 30.9385L7.76465 30.9395C7.39843 31.1714 7.01161 31.1226 6.71191 30.8945C6.40678 30.6621 6.21499 30.2537 6.32227 29.7705L8.37891 20.5361L8.49121 20.0312L8.1084 19.6846L1.24609 13.4629L1.24512 13.4619C0.515553 12.8006 0.98912 11.6497 1.78809 11.583L1.79297 11.582L10.8242 10.7803L11.3652 10.7324L11.5693 10.2295L15.1035 1.52246L15.1045 1.51953Z" fill="#FFC327" stroke="#FAFAFA" stroke-width="1.77778" />
                            </svg>
                        </span>
                    </div>
                    <!-- Admin (Shield) -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=52" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">shield</i></span>
                    </div>
                    <!-- Edit -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=53" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">edit</i></span>
                    </div>
                    <!-- Gallery -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=54" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">local_see</i></span>
                    </div>
                    <!-- Remove -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=55" alt="avatar">
                        <span class="ux4g-badge-icon-danger avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">remove</i></span>
                    </div>
                `)}

                <!-- 2. Profile Sizes -->
                ${renderDemoCodeBlock('profile-sizes', '2. Profile Sizes', 'Profile avatars available in large to extra-large sizes.', `
                    <div class="ux4g-d-flex ux4g-ai-end ux4g-gap-xl ux4g-flex-wrap">
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 60px;">L (18px)</span>
                            <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=63" alt="avatar">
                                <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">edit</i></span>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 65px;">XL (20px)</span>
                            <div class="ux4g-avatar ux4g-avatar-xl ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=62" alt="avatar">
                                <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-xl"><i class="ux4g-icon">edit</i></span>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 80px;">2XL (24px)</span>
                            <div class="ux4g-avatar ux4g-avatar-2xl ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=61" alt="avatar">
                                <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-2xl"><i class="ux4g-icon">edit</i></span>
                            </div>
                        </div>
                        <div class="ux4g-d-flex ux4g-flex-col ux4g-ai-center ux4g-gap-xs">
                            <span class="ux4g-fs-12 ux4g-fw-bold ux4g-text-neutral-secondary text-center" style="min-width: 96px;">3XL (32px)</span>
                            <div class="ux4g-avatar ux4g-avatar-3xl ux4g-relative">
                                <img src="https://i.pravatar.cc/150?u=60" alt="avatar">
                                <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-3xl"><i class="ux4g-icon">edit</i></span>
                            </div>
                        </div>
                    </div>
                `, false, `
                    <!-- Large -->
                    <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=63" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">edit</i></span>
                    </div>

                    <!-- Extra Large -->
                    <div class="ux4g-avatar ux4g-avatar-xl ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=62" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-xl"><i class="ux4g-icon">edit</i></span>
                    </div>

                    <!-- 2-Extra Large -->
                    <div class="ux4g-avatar ux4g-avatar-2xl ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=61" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-2xl"><i class="ux4g-icon">edit</i></span>
                    </div>

                    <!-- 3-Extra Large -->
                    <div class="ux4g-avatar ux4g-avatar-3xl ux4g-relative">
                        <img src="https://i.pravatar.cc/150?u=60" alt="avatar">
                        <span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-3xl"><i class="ux4g-icon">edit</i></span>
                    </div>
                `, false, getSnippetCode([
                    { label: 'Profile Avatar - L', html: '<div class="ux4g-avatar ux4g-avatar-l ux4g-relative"><img src="https://i.pravatar.cc/150?u=63" alt="avatar"><span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-l"><i class="ux4g-icon">edit</i></span></div>' },
                    { label: 'Profile Avatar - XL', html: '<div class="ux4g-avatar ux4g-avatar-xl ux4g-relative"><img src="https://i.pravatar.cc/150?u=62" alt="avatar"><span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-xl"><i class="ux4g-icon">edit</i></span></div>' },
                    { label: 'Profile Avatar - 2XL', html: '<div class="ux4g-avatar ux4g-avatar-2xl ux4g-relative"><img src="https://i.pravatar.cc/150?u=61" alt="avatar"><span class="ux4g-badge-icon-primary avatar-badge ux4g-badge-profile-2xl"><i class="ux4g-icon">edit</i></span></div>' },
                ]))}
            </div>
        </div>
    `,
    parameters: {
        docs: { disable: true },
    },
};
