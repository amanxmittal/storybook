/**
 * Aadhaar Authentication Patterns
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Identity & Access/Aadhaar Authentication',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Aadhaar-based authentication selection patterns for government services identity verification.',
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
                <span class="ux4g-label-l-medium ux4g-d-block ux4g-mb-xs ux4g-opacity-90">Patterns</span>
                <h1 class="ux4g-display-s-strong ux4g-mb-m ux4g-text-white">${title}</h1>
                <p class="ux4g-body-l-default ux4g-opacity-90 ux4g-max-w-700">${description}</p>
            </div>
        </div>
    </section>
`;

const getReactCode = (html) => htmlToJsx(html, 'IdentityAccess');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false) => {
    const displayCode = formatCode(htmlContent);
    const reactCode = getReactCode(displayCode);
    const angularCode = displayCode;

    return `
        <div class="ux4g-mb-2xl" id="section-${id}">
            <div class="ux4g-mb-l">
                <h2 class="ux4g-heading-m-strong ux4g-text-neutral-primary">${title}</h2>
                ${subtitle ? `<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mt-xs">${subtitle}</p>` : ''}
            </div>

            <div class="ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-mb-l">
                <div class="ux4g-p-none ${isInverse ? 'ux4g-bg-neutral-stronger' : ''}">
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

        </div>
    `;
};

const COLUMN_1_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Aadhaar Authentication
                    </h1>
                    <p class="ux4g-body-l-default ux4g-text-neutral-inverse ">
                        A secure, paperless way to verify your identity using your Aadhaar credentials. Choose how you
                        would like to authenticate.
                    </p>
                </div>

                <!-- Bottom section -->
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>

                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span
                            class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span> Back</a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Verify with Aadhaar</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Choose how you want to
                        authenticate. Your Aadhaar number is never stored.</p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div class="ux4g-aadhaar-options ux4g-mb-xl">

                            <!-- Aadhaar OTP -->
                            <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                                <input type="radio" name="aadhaar-auth-col" class="ux4g-radio-input" checked>
                                <div class="ux4g-radio-control">
                                    <span class="ux4g-radiomark"></span>
                                </div>
                                <div class="ux4g-radio-content">
                                    <div class="ux4g-radio-header">
                                        <span class="ux4g-radio-label ux4g-body-m-strong">Aadhaar OTP</span>
                                    </div>
                                    <span class="ux4g-radio-description ux4g-body-s-default">Receive a one-time password
                                        on your Aadhaar-linked mobile number.</span>
                                </div>
                            </label>

                            <!-- Face Authentication -->
                            <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                                <input type="radio" name="aadhaar-auth-col" class="ux4g-radio-input">
                                <div class="ux4g-radio-control">
                                    <span class="ux4g-radiomark"></span>
                                </div>
                                <div class="ux4g-radio-content">
                                    <div class="ux4g-radio-header">
                                        <span class="ux4g-radio-label ux4g-body-m-strong">Face Authentication</span>
                                    </div>
                                    <span class="ux4g-radio-description ux4g-body-s-default">Verify identity using face
                                        recognition. Camera access required.</span>
                                </div>
                            </label>

                            <!-- mAadhaar OTP -->
                            <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                                <input type="radio" name="aadhaar-auth-col" class="ux4g-radio-input">
                                <div class="ux4g-radio-control">
                                    <span class="ux4g-radiomark"></span>
                                </div>
                                <div class="ux4g-radio-content">
                                    <div class="ux4g-radio-header">
                                        <span class="ux4g-radio-label ux4g-body-m-strong">mAadhaar TOTP</span>
                                    </div>
                                    <span class="ux4g-radio-description ux4g-body-s-default">Use the time-based code
                                        from your mAadhaar app.</span>
                                </div>
                            </label>

                        </div>
                        <!-- Form actions: Cancel & Continue -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Continue</button>
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                        <g clip-path="url(#a)">
                            <path fill="#0e6eb6" fill-rule="evenodd"
                                d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                clip-rule="evenodd" />
                            <path fill="#f26329" fill-rule="evenodd"
                                d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                clip-rule="evenodd" />
                            <path fill="#09a14a" fill-rule="evenodd"
                                d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                clip-rule="evenodd" />
                            <path fill="currentColor"
                                d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                clip-rule="evenodd" />
                            <path fill="currentColor"
                                d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                clip-rule="evenodd" />
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#fff" d="M0 0h61v24H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_2_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Face Authentication
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse">
                        Verify your identity using facial recognition via your device camera.
                    </p>
                </div>
                <!-- Bottom section -->
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>

                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span
                            class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span> Change method</a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Face Authentication</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Allow camera access to
                        capture your face for Aadhaar biometric verification.</p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div
                            class="ux4g-bg-warning-soft ux4g-p-xl ux4g-radius-m ux4g-text-center ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m ux4g-mb-xl">
                            <span class="ux4g-title-m-default">Camera Access Required</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Your face scan data is
                                processed locally and never stored on our servers.</span>
                        </div>

                        <!-- Form actions: Cancel & Allow Camera -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Allow Camera</button>
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
           <g clip-path="url(#a)">
             <path fill="#0e6eb6" fill-rule="evenodd"
               d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
               clip-rule="evenodd" />
             <path fill="#f26329" fill-rule="evenodd"
               d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
               clip-rule="evenodd" />
             <path fill="#09a14a" fill-rule="evenodd"
               d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
               clip-rule="evenodd" />
             <path fill="currentColor"
               d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
             <path fill="currentColor" fill-rule="evenodd"
               d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
               clip-rule="evenodd" />
             <path fill="currentColor"
               d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
             <path fill="currentColor" fill-rule="evenodd"
               d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
               clip-rule="evenodd" />
           </g>
           <defs>
             <clipPath id="a">
               <path fill="#fff" d="M0 0h61v24H0z" />
             </clipPath>
           </defs>
         </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_3_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Aadhaar OTP Verification
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse">
                        Enter the one-time password sent to your Aadhaar-linked mobile number.
                    </p>
                </div>
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>
                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block">
                        <span class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span>
                        Change method
                    </a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Enter OTP</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        A 6-digit OTP has been sent to the mobile number linked to your Aadhaar.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div class="ux4g-d-flex ux4g-flex-column ux4g-mb-xl">
                            <label class="ux4g-otp-label ux4g-label-m-default ux4g-mb-2xs">Enter OTP</label>
                            <!-- OTP Input Block Component (6 slots, auto-generated by data-ux-otp) -->
                            <div class="ux4g-otp ux4g-otp-default ux4g-w-100" data-ux-otp data-ux-state="default"
                                data-ux-count="6" role="group">
                                <div class="ux4g-otp-group">
                                    <input class="ux4g-otp-source" type="hidden" value="" >
                                </div>
                                <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-meta-aadhaar">
                                    <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
                                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
                                        data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                                </div>
                            </div>
                        </div>


                        <!-- Form actions: Cancel & Continue -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Back</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Verify OTP</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_4_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        mAadhaar TOTP
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse">
                        Use the time-based one-time password generated in your mAadhaar app.
                    </p>
                </div>
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>
                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block">
                        <span class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span>
                        Change method
                    </a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Enter OTP Code</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        Open the mAadhaar app and enter the 8-digit time-based code shown.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div class="ux4g-d-flex ux4g-flex-column ux4g-mb-xl">
                            <label class="ux4g-otp-label ux4g-label-m-default ux4g-mb-2xs">Enter OTP</label>
                            <!-- OTP Input Block Component (6 slots, auto-generated by data-ux-otp) -->
                            <div class="ux4g-otp ux4g-otp-default ux4g-w-100" data-ux-otp data-ux-state="default"
                                data-ux-count="6" role="group">
                                <div class="ux4g-otp-group">
                                    <input class="ux4g-otp-source" type="hidden" value="" >
                                </div>
                                <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-meta-totp">
                                    <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
                                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
                                        data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                                </div>
                            </div>
                        </div>


                        <!-- Form actions: Cancel & Continue -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Verify Code</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_5_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Authentication Complete
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse">
                        Your Aadhaar identity has been successfully verified.
                    </p>
                </div>
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>
                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <!-- Success Alert -->
                    <div class="ux4g-d-flex ux4g-jc-center ux4g-w-100 ux4g-mb-xl">
                        <div
                            class="ux4g-alert ux4g-alert-success ux4g-w-auto ux4g-radius-m ux4g-border ux4g-border-success ux4g-py-2xs ux4g-px-m">
                            <i class="ux4g-icon ux4g-alert-icon">check_circle</i>
                            <div class="ux4g-alert-content">
                                <span class="ux4g-alert-message"
                                    style="color: var(--ux4g-text-success-default); font-weight: 500;">Aadhaar identity
                                    verified successfully</span>
                            </div>
                        </div>
                    </div>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Authentication Successful
                    </h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        Your Aadhaar identity has been verified. You may now proceed to the service.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <!-- Transaction ID Box -->
                        <div
                            class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs ux4g-mb-xl">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Transaction ID</span>
                            <span class="ux4g-label-xl-strong ux4g-text-neutral-primary">TXN-2024-AAD-78432</span>
                        </div>


                        <!-- Form actions: Continue to Service -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Continue to
                                Service</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_6_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Verification Failed
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse">
                        Authentication was unsuccessful. Please try again or choose a different method.
                    </p>
                </div>
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>
                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <div class="ux4g-error-badge-outer ux4g-mb-xl">
                        <div class="ux4g-error-badge-inner">
                            <span class="ux4g-icon-outlined ux4g-text-white">priority_high</span>
                        </div>
                    </div>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Authentication Failed</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">The OTP entered is incorrect.
                        You have 2 attempts remaining before your account is temporarily locked.</p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">


                        <div class="ux4g-alert ux4g-alert-error ux4g-form-alert ux4g-mb-xl">
                            <i class="ux4g-icon ux4g-alert-icon">error</i>
                            <div class="ux4g-form-alert-body">
                                <span class="ux4g-alert-message">Verification failed, Please try a different method or
                                    try again</span>
                                <div class="ux4g-form-alert-footer">
                                    <span></span>
                                    <span class="ux4g-alert-counter ux4g-text-error ux4g-label-m-default">Attempt 1 of
                                        2</span>
                                </div>
                            </div>
                        </div>

                        <!-- Form actions: Cancel & Allow Camera -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Try Different Method</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Try Again</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                        <g clip-path="url(#a)">
                          <path fill="#0e6eb6" fill-rule="evenodd"
                            d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                            clip-rule="evenodd" />
                          <path fill="#f26329" fill-rule="evenodd"
                            d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                            clip-rule="evenodd" />
                          <path fill="#09a14a" fill-rule="evenodd"
                            d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                            clip-rule="evenodd" />
                          <path fill="currentColor"
                            d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                            clip-rule="evenodd" />
                          <path fill="currentColor"
                            d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                            clip-rule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h61v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_7_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <div class="ux4g-sidebar-logo-container ux4g-mb-xl">
                        <img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
                    </div>
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Account Temporarily Locked
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse">
                        Too many failed verification attempts. Please try again after the lock period.
                    </p>
                </div>
                <div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-inline-gap-l">
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
                    </div>
                    <div class="ux4g-sidebar-stat">
                        <span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
                        <span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
                    </div>
                </div>
                <!-- Decorative rings/circles in background -->
                <div class="ux4g-sidebar-ring ux4g-ring-1"></div>
                <div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <!-- Red Lock Badge -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-mb-xl ux4g-radius-full ux4g-bg-error-soft"
                        style="width: var(--ux4g-sz-64); height: var(--ux4g-sz-64);">
                        <span class="ux4g-icon-outlined ux4g-text-error"
                            style="font-size: var(--ux4g-fs-24);">lock</span>
                    </div>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Account Locked</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        Your Aadhaar authentication has been suspended due to too many failed attempts.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <!-- Warning/Timer Card -->
                        <div
                            class="ux4g-bg-warning ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m ux4g-mb-xl ux4g-ai-center ux4g-jc-center">
                            <span class="ux4g-title-s-strong ux4g-text-neutral-primary ux4g-text-center">Try again
                                in</span>
                            <span class="ux4g-display-m-strong ux4g-text-warning ux4g-text-center">23:45:00</span>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-text-center"
                                style="max-width: 320px; margin-inline: auto;">
                                Your account will be unlocked automatically. If you need immediate assistance, contact
                                UIDAI support.
                            </p>
                        </div>


                        <!-- Form actions: Contact UIDAI Support -->
                        <div class="ux4g-aadhaar-form-actions" style="justify-content: center;">
                            <button
                                class="ux4g-btn-outline-primary ux4g-btn-lg ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs"
                                type="button">
                                <span class="ux4g-icon-outlined ux4g-fs-18">language</span>
                                Contact UIDAI Support
                            </button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                    <g clip-path="url(#a)">
                                      <path fill="#0e6eb6" fill-rule="evenodd"
                                        d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                        clip-rule="evenodd" />
                                      <path fill="#f26329" fill-rule="evenodd"
                                        d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                        clip-rule="evenodd" />
                                      <path fill="#09a14a" fill-rule="evenodd"
                                        d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                        clip-rule="evenodd" />
                                      <path fill="currentColor"
                                        d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                      <path fill="currentColor" fill-rule="evenodd"
                                        d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                        clip-rule="evenodd" />
                                      <path fill="currentColor"
                                        d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                      <path fill="currentColor" fill-rule="evenodd"
                                        d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                        clip-rule="evenodd" />
                                    </g>
                                    <defs>
                                      <clipPath id="a">
                                        <path fill="#fff" d="M0 0h61v24H0z" />
                                      </clipPath>
                                    </defs>
                                  </svg>
                </div>
            </div>
        </div>
    </section>`;

const COLUMN_8_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout">
            <!-- Left Panel (Sidebar - Hidden on Mobile) -->
            <div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column">
                <!-- Top section -->
                <div class="ux4g-sidebar-top">
                    <h1 class="ux4g-heading-l-default ux4g-mb-m">
                        Operator-Assisted Verification
                    </h1>
                    <p class="ux4g-body-m-default ux4g-text-neutral-inverse" style="opacity: 0.8;">
                        A certified VLE operator will assist with your Aadhaar verification.
                    </p>
                </div>
            </div>

            <!-- Right Panel (Form panel) -->
            <div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
                <div class="ux4g-form-box">

                    <!-- Back button link -->
                    <a href="#" class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-mb-xl"
                        id="ux4g-back-link"
                        style="text-decoration: none; color: var(--ux4g-text-brand-primary-default); font-weight: var(--ux4g-font-weight-medium); font-size: var(--ux4g-fs-14);">
                        &larr; Back
                    </a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Operator-Assisted
                        Authentication</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        A certified VLE operator will conduct this Aadhaar verification on your behalf with your
                        consent.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <!-- VLE Operator Details Card -->
                        <div
                            class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs ux4g-mb-2xl">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">VLE Operator</span>
                            <span class="ux4g-title-m-strong ux4g-text-neutral-primary">Ramesh Kumar</span>
                            <span class="ux4g-body-xs-default ux4g-text-neutral-secondary"
                                style="color: var(--ux4g-text-neutral-tertiary);">ID: VLE-MH-2024-00387 &middot;
                                Certified by MeitY</span>
                        </div>

                        <!-- Checkbox Consent -->
                        <div class="ux4g-mb-xl">
                            <label class="ux4g-checkbox ux4g-checkbox-md">
                                <input type="checkbox" class="ux4g-checkbox-input" id="ux4g-operator-consent">
                                <div class="ux4g-checkbox-control">
                                    <span class="ux4g-checkmark"></span>
                                </div>
                                <div class="ux4g-checkbox-content">
                                    <span class="ux4g-checkbox-label">
                                        I consent to operator-assisted Aadhaar authentication. My identity documents
                                        have been verified by the VLE.
                                        <span class="ux4g-text-error"
                                            style="color: var(--ux4g-color-red-600); margin-left: 2px;">*</span>
                                    </span>
                                </div>
                            </label>
                        </div>

                        <!-- Form actions: Cancel & Proceed with Consent -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-text-primary ux4g-btn-lg" type="button"
                                id="ux4g-btn-cancel-consent">Cancel</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit"
                                id="ux4g-btn-proceed-consent">Proceed with Consent</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                        <g clip-path="url(#a)">
                          <path fill="#0e6eb6" fill-rule="evenodd"
                            d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                            clip-rule="evenodd" />
                          <path fill="#f26329" fill-rule="evenodd"
                            d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                            clip-rule="evenodd" />
                          <path fill="#09a14a" fill-rule="evenodd"
                            d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                            clip-rule="evenodd" />
                          <path fill="currentColor"
                            d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                            clip-rule="evenodd" />
                          <path fill="currentColor"
                            d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                            clip-rule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h61v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_1_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span
                            class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span> Back</a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Verify with Aadhaar</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Choose how you want to
                        authenticate. Your Aadhaar number is never stored.</p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div class="ux4g-aadhaar-options ux4g-mb-xl">

                            <!-- Aadhaar OTP -->
                            <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                                <input type="radio" name="aadhaar-auth-col" class="ux4g-radio-input" checked>
                                <div class="ux4g-radio-control">
                                    <span class="ux4g-radiomark"></span>
                                </div>
                                <div class="ux4g-radio-content">
                                    <div class="ux4g-radio-header">
                                        <span class="ux4g-radio-label ux4g-body-m-strong">Aadhaar OTP</span>
                                    </div>
                                    <span class="ux4g-radio-description ux4g-body-s-default">Receive a one-time password
                                        on your Aadhaar-linked mobile number.</span>
                                </div>
                            </label>

                            <!-- Face Authentication -->
                            <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                                <input type="radio" name="aadhaar-auth-col" class="ux4g-radio-input">
                                <div class="ux4g-radio-control">
                                    <span class="ux4g-radiomark"></span>
                                </div>
                                <div class="ux4g-radio-content">
                                    <div class="ux4g-radio-header">
                                        <span class="ux4g-radio-label ux4g-body-m-strong">Face Authentication</span>
                                    </div>
                                    <span class="ux4g-radio-description ux4g-body-s-default">Verify identity using face
                                        recognition. Camera access required.</span>
                                </div>
                            </label>

                            <!-- mAadhaar OTP -->
                            <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                                <input type="radio" name="aadhaar-auth-col" class="ux4g-radio-input">
                                <div class="ux4g-radio-control">
                                    <span class="ux4g-radiomark"></span>
                                </div>
                                <div class="ux4g-radio-content">
                                    <div class="ux4g-radio-header">
                                        <span class="ux4g-radio-label ux4g-body-m-strong">mAadhaar TOTP</span>
                                    </div>
                                    <span class="ux4g-radio-description ux4g-body-s-default">Use the time-based code
                                        from your mAadhaar app.</span>
                                </div>
                            </label>

                        </div>
                        <!-- Form actions: Cancel & Continue -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Continue</button>
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                        <g clip-path="url(#a)">
                            <path fill="#0e6eb6" fill-rule="evenodd"
                                d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                clip-rule="evenodd" />
                            <path fill="#f26329" fill-rule="evenodd"
                                d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                clip-rule="evenodd" />
                            <path fill="#09a14a" fill-rule="evenodd"
                                d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                clip-rule="evenodd" />
                            <path fill="currentColor"
                                d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                clip-rule="evenodd" />
                            <path fill="currentColor"
                                d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                            <path fill="currentColor" fill-rule="evenodd"
                                d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                clip-rule="evenodd" />
                        </g>
                        <defs>
                            <clipPath id="a">
                                <path fill="#fff" d="M0 0h61v24H0z" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_2_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span
                            class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span> Change method</a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Face Authentication</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Allow camera access to
                        capture your face for Aadhaar biometric verification.</p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div
                            class="ux4g-bg-warning-soft ux4g-p-xl ux4g-radius-m ux4g-text-center ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m ux4g-mb-xl">
                            <span class="ux4g-title-m-default">Camera Access Required</span>
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Your face scan data is
                                processed locally and never stored on our servers.</span>
                        </div>

                        <!-- Form actions: Cancel & Allow Camera -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Allow Camera</button>
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_3_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block">
                        <span class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span>
                        Change method
                    </a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Enter OTP</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        A 6-digit OTP has been sent to the mobile number linked to your Aadhaar.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div class="ux4g-d-flex ux4g-flex-column ux4g-mb-xl">
                            <label class="ux4g-otp-label ux4g-label-m-default ux4g-mb-2xs">Enter OTP</label>
                            <!-- OTP Input Block Component (6 slots, auto-generated by data-ux-otp) -->
                            <div class="ux4g-otp ux4g-otp-default ux4g-w-100" data-ux-otp data-ux-state="default"
                                data-ux-count="6" role="group">
                                <div class="ux4g-otp-group">
                                    <input class="ux4g-otp-source" type="hidden" value="" >
                                </div>
                                <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-meta-aadhaar">
                                    <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
                                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
                                        data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                                </div>
                            </div>
                        </div>


                        <!-- Form actions: Cancel & Continue -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Back</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Verify OTP</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_4_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block">
                        <span class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span>
                        Change method
                    </a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Enter OTP Code</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        Open the mAadhaar app and enter the 8-digit time-based code shown.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <div class="ux4g-d-flex ux4g-flex-column ux4g-mb-xl">
                            <label class="ux4g-otp-label ux4g-label-m-default ux4g-mb-2xs">Enter OTP</label>
                            <!-- OTP Input Block Component (6 slots, auto-generated by data-ux-otp) -->
                            <div class="ux4g-otp ux4g-otp-default ux4g-w-100" data-ux-otp data-ux-state="default"
                                data-ux-count="6" role="group">
                                <div class="ux4g-otp-group">
                                    <input class="ux4g-otp-source" type="hidden" value="" >
                                </div>
                                <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-meta-totp">
                                    <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
                                    <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
                                        data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                                </div>
                            </div>
                        </div>


                        <!-- Form actions: Cancel & Continue -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Verify Code</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_5_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <!-- Success Alert -->
                    <div class="ux4g-d-flex ux4g-jc-center ux4g-w-100 ux4g-mb-xl">
                        <div
                            class="ux4g-alert ux4g-alert-success ux4g-w-auto ux4g-radius-m ux4g-border ux4g-border-success ux4g-py-2xs ux4g-px-m">
                            <i class="ux4g-icon ux4g-alert-icon">check_circle</i>
                            <div class="ux4g-alert-content">
                                <span class="ux4g-alert-message"
                                    style="color: var(--ux4g-text-success-default); font-weight: 500;">Aadhaar identity
                                    verified successfully</span>
                            </div>
                        </div>
                    </div>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Authentication Successful
                    </h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        Your Aadhaar identity has been verified. You may now proceed to the service.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <!-- Transaction ID Box -->
                        <div
                            class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs ux4g-mb-xl">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Transaction ID</span>
                            <span class="ux4g-label-xl-strong ux4g-text-neutral-primary">TXN-2024-AAD-78432</span>
                        </div>


                        <!-- Form actions: Continue to Service -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Continue to
                                Service</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
        <g clip-path="url(#a)">
          <path fill="#0e6eb6" fill-rule="evenodd"
            d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
            clip-rule="evenodd" />
          <path fill="#f26329" fill-rule="evenodd"
            d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
            clip-rule="evenodd" />
          <path fill="#09a14a" fill-rule="evenodd"
            d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
            clip-rule="evenodd" />
          <path fill="currentColor"
            d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
          <path fill="currentColor" fill-rule="evenodd"
            d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
            clip-rule="evenodd" />
          <path fill="currentColor"
            d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
          <path fill="currentColor" fill-rule="evenodd"
            d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
            clip-rule="evenodd" />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="#fff" d="M0 0h61v24H0z" />
          </clipPath>
        </defs>
      </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_6_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <div class="ux4g-error-badge-outer ux4g-mb-xl">
                        <div class="ux4g-error-badge-inner">
                            <span class="ux4g-icon-outlined ux4g-text-white">priority_high</span>
                        </div>
                    </div>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Authentication Failed</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">The OTP entered is incorrect.
                        You have 2 attempts remaining before your account is temporarily locked.</p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">


                        <div class="ux4g-alert ux4g-alert-error ux4g-form-alert ux4g-mb-xl">
                            <i class="ux4g-icon ux4g-alert-icon">error</i>
                            <div class="ux4g-form-alert-body">
                                <span class="ux4g-alert-message">Verification failed, Please try a different method or
                                    try again</span>
                                <div class="ux4g-form-alert-footer">
                                    <span></span>
                                    <span class="ux4g-alert-counter ux4g-text-error ux4g-label-m-default">Attempt 1 of
                                        2</span>
                                </div>
                            </div>
                        </div>

                        <!-- Form actions: Cancel & Allow Camera -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Try Different Method</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Try Again</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                        <g clip-path="url(#a)">
                          <path fill="#0e6eb6" fill-rule="evenodd"
                            d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                            clip-rule="evenodd" />
                          <path fill="#f26329" fill-rule="evenodd"
                            d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                            clip-rule="evenodd" />
                          <path fill="#09a14a" fill-rule="evenodd"
                            d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                            clip-rule="evenodd" />
                          <path fill="currentColor"
                            d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                            clip-rule="evenodd" />
                          <path fill="currentColor"
                            d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                          <path fill="currentColor" fill-rule="evenodd"
                            d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                            clip-rule="evenodd" />
                        </g>
                        <defs>
                          <clipPath id="a">
                            <path fill="#fff" d="M0 0h61v24H0z" />
                          </clipPath>
                        </defs>
                      </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_7_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <!-- Red Lock Badge -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-mb-xl ux4g-radius-full ux4g-bg-error-soft"
                        style="width: var(--ux4g-sz-64); height: var(--ux4g-sz-64);">
                        <span class="ux4g-icon-outlined ux4g-text-error"
                            style="font-size: var(--ux4g-fs-24);">lock</span>
                    </div>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Account Locked</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        Your Aadhaar authentication has been suspended due to too many failed attempts.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <!-- Warning/Timer Card -->
                        <div
                            class="ux4g-bg-warning ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m ux4g-mb-xl ux4g-ai-center ux4g-jc-center">
                            <span class="ux4g-title-s-strong ux4g-text-neutral-primary ux4g-text-center">Try again
                                in</span>
                            <span class="ux4g-display-m-strong ux4g-text-warning ux4g-text-center">23:45:00</span>
                            <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-text-center"
                                style="max-width: 320px; margin-inline: auto;">
                                Your account will be unlocked automatically. If you need immediate assistance, contact
                                UIDAI support.
                            </p>
                        </div>


                        <!-- Form actions: Contact UIDAI Support -->
                        <div class="ux4g-aadhaar-form-actions" style="justify-content: center;">
                            <button
                                class="ux4g-btn-outline-primary ux4g-btn-lg ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs"
                                type="button">
                                <span class="ux4g-icon-outlined ux4g-fs-18">language</span>
                                Contact UIDAI Support
                            </button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                           <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
           <g clip-path="url(#a)">
             <path fill="#0e6eb6" fill-rule="evenodd"
               d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
               clip-rule="evenodd" />
             <path fill="#f26329" fill-rule="evenodd"
               d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
               clip-rule="evenodd" />
             <path fill="#09a14a" fill-rule="evenodd"
               d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
               clip-rule="evenodd" />
             <path fill="currentColor"
               d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
             <path fill="currentColor" fill-rule="evenodd"
               d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
               clip-rule="evenodd" />
             <path fill="currentColor"
               d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
             <path fill="currentColor" fill-rule="evenodd"
               d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
               clip-rule="evenodd" />
           </g>
           <defs>
             <clipPath id="a">
               <path fill="#fff" d="M0 0h61v24H0z" />
             </clipPath>
           </defs>
         </svg>
                </div>
            </div>
        </div>
    </section>`;

const FULL_8_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout ux4g-jc-center">
            <!-- Main Panel (Centered) -->
            <div class="ux4g-identity-access-full ux4g-bg-neutral">
                <div class="ux4g-form-box">

                    <!-- Back button link -->
                    <a href="#" class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-mb-xl"
                        id="ux4g-back-link"
                        style="text-decoration: none; color: var(--ux4g-text-brand-primary-default); font-weight: var(--ux4g-font-weight-medium); font-size: var(--ux4g-fs-14);">
                        &larr; Back
                    </a>

                    <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Operator-Assisted
                        Authentication</h2>
                    <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                        A certified VLE operator will conduct this Aadhaar verification on your behalf with your
                        consent.
                    </p>

                    <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m"
                        onsubmit="return false;">

                        <!-- VLE Operator Details Card -->
                        <div
                            class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs ux4g-mb-2xl">
                            <span class="ux4g-body-s-default ux4g-text-neutral-secondary">VLE Operator</span>
                            <span class="ux4g-title-m-strong ux4g-text-neutral-primary">Ramesh Kumar</span>
                            <span class="ux4g-body-xs-default ux4g-text-neutral-secondary"
                                style="color: var(--ux4g-text-neutral-tertiary);">ID: VLE-MH-2024-00387 &middot;
                                Certified by MeitY</span>
                        </div>

                        <!-- Checkbox Consent -->
                        <div class="ux4g-mb-xl">
                            <label class="ux4g-checkbox ux4g-checkbox-md">
                                <input type="checkbox" class="ux4g-checkbox-input" id="ux4g-operator-consent">
                                <div class="ux4g-checkbox-control">
                                    <span class="ux4g-checkmark"></span>
                                </div>
                                <div class="ux4g-checkbox-content">
                                    <span class="ux4g-checkbox-label">
                                        I consent to operator-assisted Aadhaar authentication. My identity documents
                                        have been verified by the VLE.
                                        <span class="ux4g-text-error"
                                            style="color: var(--ux4g-color-red-600); margin-left: 2px;">*</span>
                                    </span>
                                </div>
                            </label>
                        </div>

                        <!-- Form actions: Cancel & Proceed with Consent -->
                        <div class="ux4g-aadhaar-form-actions">
                            <button class="ux4g-btn-text-primary ux4g-btn-lg" type="button"
                                id="ux4g-btn-cancel-consent">Cancel</button>
                            <button class="ux4g-btn-primary ux4g-btn-lg" type="submit"
                                id="ux4g-btn-proceed-consent">Proceed with Consent</button>
                        </div>

                    </form>

                </div>
                <!-- Footer Branding -->
                <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                    <span class="ux4g-label-m-default">Powered by -</span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                                <g clip-path="url(#a)">
                                  <path fill="#0e6eb6" fill-rule="evenodd"
                                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                                    clip-rule="evenodd" />
                                  <path fill="#f26329" fill-rule="evenodd"
                                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                                    clip-rule="evenodd" />
                                  <path fill="#09a14a" fill-rule="evenodd"
                                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                                    clip-rule="evenodd" />
                                  <path fill="currentColor"
                                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                                  <path fill="currentColor" fill-rule="evenodd"
                                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                                    clip-rule="evenodd" />
                                </g>
                                <defs>
                                  <clipPath id="a">
                                    <path fill="#fff" d="M0 0h61v24H0z" />
                                  </clipPath>
                                </defs>
                              </svg>
                </div>
            </div>
        </div>
    </section>`;

const CARD_1_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span
                        class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span> Back</a>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Verify with Aadhaar</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Choose how you want to
                    authenticate. Your Aadhaar number is never stored.</p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <div class="ux4g-aadhaar-options ux4g-mb-xl">

                        <!-- Aadhaar OTP -->
                        <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                            <input type="radio" name="aadhaar-auth-card" class="ux4g-radio-input" checked>
                            <div class="ux4g-radio-control">
                                <span class="ux4g-radiomark"></span>
                            </div>
                            <div class="ux4g-radio-content">
                                <div class="ux4g-radio-header">
                                    <span class="ux4g-radio-label ux4g-body-m-strong">Aadhaar OTP</span>
                                </div>
                                <span class="ux4g-radio-description ux4g-body-s-default">Receive a one-time password
                                    on your Aadhaar-linked mobile number.</span>
                            </div>
                        </label>

                        <!-- Face Authentication -->
                        <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                            <input type="radio" name="aadhaar-auth-card" class="ux4g-radio-input">
                            <div class="ux4g-radio-control">
                                <span class="ux4g-radiomark"></span>
                            </div>
                            <div class="ux4g-radio-content">
                                <div class="ux4g-radio-header">
                                    <span class="ux4g-radio-label ux4g-body-m-strong">Face Authentication</span>
                                </div>
                                <span class="ux4g-radio-description ux4g-body-s-default">Verify identity using face
                                    recognition. Camera access required.</span>
                            </div>
                        </label>

                        <!-- mAadhaar OTP -->
                        <label class="ux4g-radio ux4g-radio-md ux4g-aadhaar-option-card">
                            <input type="radio" name="aadhaar-auth-card" class="ux4g-radio-input">
                            <div class="ux4g-radio-control">
                                <span class="ux4g-radiomark"></span>
                            </div>
                            <div class="ux4g-radio-content">
                                <div class="ux4g-radio-header">
                                    <span class="ux4g-radio-label ux4g-body-m-strong">mAadhaar TOTP</span>
                                </div>
                                <span class="ux4g-radio-description ux4g-body-s-default">Use the time-based code
                                    from your mAadhaar app.</span>
                            </div>
                        </label>

                    </div>
                    <!-- Form actions: Cancel & Continue -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Continue</button>
                        <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                    <g clip-path="url(#a)">
                      <path fill="#0e6eb6" fill-rule="evenodd"
                        d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                        clip-rule="evenodd" />
                      <path fill="#f26329" fill-rule="evenodd"
                        d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                        clip-rule="evenodd" />
                      <path fill="#09a14a" fill-rule="evenodd"
                        d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                        clip-rule="evenodd" />
                      <path fill="currentColor"
                        d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                        clip-rule="evenodd" />
                      <path fill="currentColor"
                        d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                        clip-rule="evenodd" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h61v24H0z" />
                      </clipPath>
                    </defs>
                  </svg>
            </div>
        </div>
        </div>
    </section>`;

const CARD_2_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span
                        class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span> Change method</a>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Face Authentication</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Allow camera access to
                    capture your face for Aadhaar biometric verification.</p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <div
                        class="ux4g-bg-warning-soft ux4g-p-xl ux4g-radius-m ux4g-text-center ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m ux4g-mb-xl">
                        <span class="ux4g-title-m-default">Camera Access Required</span>
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Your face scan data is
                            processed locally and never stored on our servers.</span>
                    </div>

                    <!-- Form actions: Cancel & Allow Camera -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Allow Camera</button>
                        <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                <g clip-path="url(#a)">
                  <path fill="#0e6eb6" fill-rule="evenodd"
                    d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                    clip-rule="evenodd" />
                  <path fill="#f26329" fill-rule="evenodd"
                    d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                    clip-rule="evenodd" />
                  <path fill="#09a14a" fill-rule="evenodd"
                    d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                    clip-rule="evenodd" />
                  <path fill="currentColor"
                    d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                    clip-rule="evenodd" />
                  <path fill="currentColor"
                    d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                  <path fill="currentColor" fill-rule="evenodd"
                    d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                    clip-rule="evenodd" />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h61v24H0z" />
                  </clipPath>
                </defs>
              </svg>
            </div>
        </div>
    </section>`;

const CARD_3_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block">
                    <span class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span>
                    Change method
                </a>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Enter OTP</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                    A 6-digit OTP has been sent to the mobile number linked to your Aadhaar.
                </p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <div class="ux4g-d-flex ux4g-flex-column ux4g-mb-xl">
                        <label class="ux4g-otp-label ux4g-label-m-default ux4g-mb-2xs">Enter OTP</label>
                        <!-- OTP Input Block Component (6 slots, auto-generated by data-ux-otp) -->
                        <div class="ux4g-otp ux4g-otp-default ux4g-w-100" data-ux-otp data-ux-state="default"
                            data-ux-count="6" role="group">
                            <div class="ux4g-otp-group">
                                <input class="ux4g-otp-source" type="hidden" value="" >
                            </div>
                            <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-meta-aadhaar-card">
                                <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
                                <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
                                    data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                            </div>
                        </div>
                    </div>


                    <!-- Form actions: Cancel & Continue -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Back</button>
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Verify OTP</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                                  <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                      <g clip-path="url(#a)">
                        <path fill="#0e6eb6" fill-rule="evenodd"
                          d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                          clip-rule="evenodd" />
                        <path fill="#f26329" fill-rule="evenodd"
                          d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                          clip-rule="evenodd" />
                        <path fill="#09a14a" fill-rule="evenodd"
                          d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                          clip-rule="evenodd" />
                        <path fill="currentColor"
                          d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                        <path fill="currentColor" fill-rule="evenodd"
                          d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                          clip-rule="evenodd" />
                        <path fill="currentColor"
                          d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                        <path fill="currentColor" fill-rule="evenodd"
                          d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                          clip-rule="evenodd" />
                      </g>
                      <defs>
                        <clipPath id="a">
                          <path fill="#fff" d="M0 0h61v24H0z" />
                        </clipPath>
                      </defs>
                    </svg>
            </div>
        </div>
    </section>`;

const CARD_4_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block">
                    <span class="ux4g-icon-outlined ux4g-fs-14">arrow_back</span>
                    Change method
                </a>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Enter OTP Code</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                    Open the mAadhaar app and enter the 8-digit time-based code shown.
                </p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <div class="ux4g-d-flex ux4g-flex-column ux4g-mb-xl">
                        <label class="ux4g-otp-label ux4g-label-m-default ux4g-mb-2xs">Enter OTP</label>
                        <!-- OTP Input Block Component (6 slots, auto-generated by data-ux-otp) -->
                        <div class="ux4g-otp ux4g-otp-default ux4g-w-100" data-ux-otp data-ux-state="default"
                            data-ux-count="6" role="group">
                            <div class="ux4g-otp-group">
                                <input class="ux4g-otp-source" type="hidden" value="" >
                            </div>
                            <div class="ux4g-otp-meta ux4g-body-s-default" id="ux4g-otp-meta-totp-card">
                                <span class="ux4g-otp-helper" data-ux-otp-helper>Didn't receive OTP?</span>
                                <span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
                                    data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
                            </div>
                        </div>
                    </div>


                    <!-- Form actions: Cancel & Continue -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Cancel</button>
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Verify Code</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
       <g clip-path="url(#a)">
         <path fill="#0e6eb6" fill-rule="evenodd"
           d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
           clip-rule="evenodd" />
         <path fill="#f26329" fill-rule="evenodd"
           d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
           clip-rule="evenodd" />
         <path fill="#09a14a" fill-rule="evenodd"
           d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
           clip-rule="evenodd" />
         <path fill="currentColor"
           d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
         <path fill="currentColor" fill-rule="evenodd"
           d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
           clip-rule="evenodd" />
         <path fill="currentColor"
           d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
         <path fill="currentColor" fill-rule="evenodd"
           d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
           clip-rule="evenodd" />
       </g>
       <defs>
         <clipPath id="a">
           <path fill="#fff" d="M0 0h61v24H0z" />
         </clipPath>
       </defs>
     </svg>
            </div>
        </div>
    </section>`;

const CARD_5_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <!-- Success Alert -->
                <div class="ux4g-d-flex ux4g-jc-center ux4g-w-100 ux4g-mb-xl">
                    <div
                        class="ux4g-alert ux4g-alert-success ux4g-w-auto ux4g-radius-m ux4g-border ux4g-border-success ux4g-py-2xs ux4g-px-m">
                        <i class="ux4g-icon ux4g-alert-icon">check_circle</i>
                        <div class="ux4g-alert-content">
                            <span class="ux4g-alert-message"
                                style="color: var(--ux4g-text-success-default); font-weight: 500;">Aadhaar identity
                                verified successfully</span>
                        </div>
                    </div>
                </div>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Authentication Successful</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                    Your Aadhaar identity has been verified. You may now proceed to the service.
                </p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <!-- Transaction ID Box -->
                    <div
                        class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs ux4g-mb-xl">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Transaction ID</span>
                        <span class="ux4g-label-xl-strong ux4g-text-neutral-primary">TXN-2024-AAD-78432</span>
                    </div>


                    <!-- Form actions: Continue to Service -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Continue to
                            Service</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                             <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                 <g clip-path="url(#a)">
                   <path fill="#0e6eb6" fill-rule="evenodd"
                     d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                     clip-rule="evenodd" />
                   <path fill="#f26329" fill-rule="evenodd"
                     d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                     clip-rule="evenodd" />
                   <path fill="#09a14a" fill-rule="evenodd"
                     d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                     clip-rule="evenodd" />
                   <path fill="currentColor"
                     d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                   <path fill="currentColor" fill-rule="evenodd"
                     d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                     clip-rule="evenodd" />
                   <path fill="currentColor"
                     d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                   <path fill="currentColor" fill-rule="evenodd"
                     d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                     clip-rule="evenodd" />
                 </g>
                 <defs>
                   <clipPath id="a">
                     <path fill="#fff" d="M0 0h61v24H0z" />
                   </clipPath>
                 </defs>
               </svg>
            </div>
        </div>
    </section>`;

const CARD_6_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <div class="ux4g-error-badge-outer ux4g-mb-xl">
                    <div class="ux4g-error-badge-inner">
                        <span class="ux4g-icon-outlined ux4g-text-white">priority_high</span>
                    </div>
                </div>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Authentication Failed</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">The OTP entered is incorrect.
                    You have 2 attempts remaining before your account is temporarily locked.</p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">


                    <div class="ux4g-alert ux4g-alert-error ux4g-form-alert ux4g-mb-xl">
                        <i class="ux4g-icon ux4g-alert-icon">error</i>
                        <div class="ux4g-form-alert-body">
                            <span class="ux4g-alert-message">Verification failed, Please try a different method or
                                try again</span>
                            <div class="ux4g-form-alert-footer">
                                <span></span>
                                <span class="ux4g-alert-counter ux4g-text-error ux4g-label-m-default">Attempt 1 of
                                    2</span>
                            </div>
                        </div>
                    </div>

                    <!-- Form actions: Cancel & Allow Camera -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-text-link ux4g-label-xl-default ux4g-btn">Try Different Method</button>
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="submit">Try Again</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                   <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
       <g clip-path="url(#a)">
         <path fill="#0e6eb6" fill-rule="evenodd"
           d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
           clip-rule="evenodd" />
         <path fill="#f26329" fill-rule="evenodd"
           d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
           clip-rule="evenodd" />
         <path fill="#09a14a" fill-rule="evenodd"
           d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
           clip-rule="evenodd" />
         <path fill="currentColor"
           d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
         <path fill="currentColor" fill-rule="evenodd"
           d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
           clip-rule="evenodd" />
         <path fill="currentColor"
           d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
         <path fill="currentColor" fill-rule="evenodd"
           d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
           clip-rule="evenodd" />
       </g>
       <defs>
         <clipPath id="a">
           <path fill="#fff" d="M0 0h61v24H0z" />
         </clipPath>
       </defs>
     </svg>
            </div>
        </div>
    </section>`;

const CARD_7_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <!-- Red Lock Badge -->
                <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-mb-xl ux4g-radius-full ux4g-bg-error-soft"
                    style="width: var(--ux4g-sz-64); height: var(--ux4g-sz-64);">
                    <span class="ux4g-icon-outlined ux4g-text-error" style="font-size: var(--ux4g-fs-24);">lock</span>
                </div>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Account Locked</h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                    Your Aadhaar authentication has been suspended due to too many failed attempts.
                </p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <!-- Warning/Timer Card -->
                    <div
                        class="ux4g-bg-warning ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m ux4g-mb-xl ux4g-ai-center ux4g-jc-center">
                        <span class="ux4g-title-s-strong ux4g-text-neutral-primary ux4g-text-center">Try again in</span>
                        <span class="ux4g-display-m-strong ux4g-text-warning ux4g-text-center">23:45:00</span>
                        <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-text-center"
                            style="max-width: 320px; margin-inline: auto;">
                            Your account will be unlocked automatically. If you need immediate assistance, contact UIDAI
                            support.
                        </p>
                    </div>


                    <!-- Form actions: Contact UIDAI Support -->
                    <div class="ux4g-aadhaar-form-actions" style="justify-content: center;">
                        <button
                            class="ux4g-btn-outline-primary ux4g-btn-lg ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-xs"
                            type="button">
                            <span class="ux4g-icon-outlined ux4g-fs-18">language</span>
                            Contact UIDAI Support
                        </button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                          <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
              <g clip-path="url(#a)">
                <path fill="#0e6eb6" fill-rule="evenodd"
                  d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                  clip-rule="evenodd" />
                <path fill="#f26329" fill-rule="evenodd"
                  d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                  clip-rule="evenodd" />
                <path fill="#09a14a" fill-rule="evenodd"
                  d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                  clip-rule="evenodd" />
                <path fill="currentColor"
                  d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                <path fill="currentColor" fill-rule="evenodd"
                  d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                  clip-rule="evenodd" />
                <path fill="currentColor"
                  d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                <path fill="currentColor" fill-rule="evenodd"
                  d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                  clip-rule="evenodd" />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h61v24H0z" />
                </clipPath>
              </defs>
            </svg>
            </div>
        </div>
    </section>`;

const CARD_8_HTML = `    <section class="ux4g-identity-access-container ux4g-mb-4xl">
        <nav class="ux4g-navbar">
            <div class="ux4g-container">
                <div class="ux4g-navbar-wrap">
                    <!-- Logo & Brand -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                        <img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
                        <span class="ux4g-divider-vertical "></span>
                        <img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
                        <div class="ux4g-d-flex ux4g-flex-column">
                            <span class="ux4g-label-m-strong">Title</span>
                            <span class="ux4g-body-xs-default">Description</span>
                        </div>
                    </div>

                    <a href="" class="ux4g-label-l-default ux4g-text-link-md">
                        Help & Support
                    </a>
                </div>
            </div>
        </nav>
        <div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
            <div class="ux4g-form-box">

                <!-- Back button link -->
                <a href="#" class="ux4g-d-inline-flex ux4g-ai-center ux4g-inline-gap-2xs ux4g-mb-xl"
                    id="ux4g-back-link-card"
                    style="text-decoration: none; color: var(--ux4g-text-brand-primary-default); font-weight: var(--ux4g-font-weight-medium); font-size: var(--ux4g-fs-14);">
                    &larr; Back
                </a>

                <h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">Operator-Assisted Authentication
                </h2>
                <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">
                    A certified VLE operator will conduct this Aadhaar verification on your behalf with your consent.
                </p>

                <form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-m" onsubmit="return false;">

                    <!-- VLE Operator Details Card -->
                    <div
                        class="ux4g-bg-primary-soft ux4g-p-xl ux4g-radius-m ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs ux4g-mb-2xl">
                        <span class="ux4g-body-s-default ux4g-text-neutral-secondary">VLE Operator</span>
                        <span class="ux4g-title-m-strong ux4g-text-neutral-primary">Ramesh Kumar</span>
                        <span class="ux4g-body-xs-default ux4g-text-neutral-secondary"
                            style="color: var(--ux4g-text-neutral-tertiary);">ID: VLE-MH-2024-00387 &middot; Certified
                            by MeitY</span>
                    </div>

                    <!-- Checkbox Consent -->
                    <div class="ux4g-mb-xl">
                        <label class="ux4g-checkbox ux4g-checkbox-md">
                            <input type="checkbox" class="ux4g-checkbox-input" id="ux4g-operator-consent-card">
                            <div class="ux4g-checkbox-control">
                                <span class="ux4g-checkmark"></span>
                            </div>
                            <div class="ux4g-checkbox-content">
                                <span class="ux4g-checkbox-label">
                                    I consent to operator-assisted Aadhaar authentication. My identity documents have
                                    been verified by the VLE.
                                    <span class="ux4g-text-error"
                                        style="color: var(--ux4g-color-red-600); margin-left: 2px;">*</span>
                                </span>
                            </div>
                        </label>
                    </div>

                    <!-- Form actions: Cancel & Proceed with Consent -->
                    <div class="ux4g-aadhaar-form-actions">
                        <button class="ux4g-btn-text-primary ux4g-btn-lg" type="button"
                            id="ux4g-btn-cancel-consent-card">Cancel</button>
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="submit"
                            id="ux4g-btn-proceed-consent-card">Proceed with Consent</button>
                    </div>

                </form>

            </div>
            <!-- Footer Branding -->
            <div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
                <span class="ux4g-label-m-default">Powered by -</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="61" height="24" fill="none" viewBox="0 0 61 24">
                    <g clip-path="url(#a)">
                      <path fill="#0e6eb6" fill-rule="evenodd"
                        d="m1.353 12.184-.25-.26c.228-.238.5-.427.801-.556a2.4 2.4 0 0 1 1.898 0c.3.13.573.318.802.556l-.255.25a2.1 2.1 0 0 0-.684-.472 2.06 2.06 0 0 0-2.303.472m.882.867-.23-.236a1.2 1.2 0 0 1 .86-.372 1.17 1.17 0 0 1 .86.372l-.23.236a.88.88 0 0 0-.623-.264.85.85 0 0 0-.623.264m.623.631-.446-.447a.68.68 0 0 1 .446-.193.65.65 0 0 1 .44.193zm0-1.498a1.415 1.415 0 0 1 1.038.452l.278-.285a1.8 1.8 0 0 0-.603-.424 1.8 1.8 0 0 0-2.039.424l.276.288a1.408 1.408 0 0 1 1.048-.455M1.199 13.983h3.274c-2.348 6.09-2.757 9.659-.375 9.564-5.227.316-4.549-4.89-2.897-9.564"
                        clip-rule="evenodd" />
                      <path fill="#f26329" fill-rule="evenodd"
                        d="M4.209 4.643C7.195-.346 12.039-.855 15.488.962c3.828 2.018 5.009 6.69 4.055 10.803-.838 3.74-3.242 7.158-6.348 9.356a15.54 15.54 0 0 1-6.33 2.58 10.26 10.26 0 0 0 4.508-3.032 14.2 14.2 0 0 0 1.942-2.763c1.762-2.436 2.577-4.822 2.635-6.9.115-2.787-1.068-5.552-3.566-6.831-2.173-1.133-5.1-1.075-8.176.47"
                        clip-rule="evenodd" />
                      <path fill="#09a14a" fill-rule="evenodd"
                        d="M1.952 10.271c2.435-4.947 7.45-5.293 10.405-3.152a5.95 5.95 0 0 1 2.298 3.534c.402 1.818.108 3.703-.558 5.5a13.8 13.8 0 0 1-2.723 4.516c-1.682 1.906-4.09 3.359-6.663 3.33a5.6 5.6 0 0 1-2.924-.81c1.215.601 3.106.389 4.261-.084 1.912-.804 3.447-2.47 4.405-4.311 1.183-2.257 2.116-5.89.23-7.97-1.712-1.93-5.126-2.59-8.731-.555"
                        clip-rule="evenodd" />
                      <path fill="currentColor"
                        d="m59.16 13.105.579-1.703h-.205a1.28 1.28 0 0 0-.976.389c-.257.259-.431.591-.501.954a.77.77 0 0 0 .016.501q.046.091.131.141a.32.32 0 0 0 .186.043c.283-.018.553-.128.772-.313M61 10.646l-1.213 3.49H58.8l.113-.331c-.297.242-.66.383-1.039.402a.8.8 0 0 1-.429-.106.8.8 0 0 1-.308-.325 1.53 1.53 0 0 1-.094-1.102c.124-.62.464-1.174.956-1.557a2.9 2.9 0 0 1 1.9-.606q.55-.005 1.089.12m-4.017-.044-1.229 3.55h-.985l1.233-3.55zm-.67-.994a.68.68 0 0 1 .217-.382.65.65 0 0 1 .4-.162.4.4 0 0 1 .33.157.44.44 0 0 1 .068.387.74.74 0 0 1-.23.398.63.63 0 0 1-.4.15.4.4 0 0 1-.323-.15.48.48 0 0 1-.058-.398m-3.09 3.707.632-1.844a1.4 1.4 0 0 0-.246-.019 1.38 1.38 0 0 0-.894.306c-.242.19-.41.461-.477.766a.7.7 0 0 0 .108.608.74.74 0 0 0 .597.235q.142-.008.28-.042m2.527-4.516-1.817 5.303q-.575.109-1.16.12-.885 0-1.305-.471c-.28-.316-.359-.724-.246-1.242a2.47 2.47 0 0 1 .855-1.413 2.4 2.4 0 0 1 1.608-.58q.237.005.473.038l.604-1.764zm-6.727 1.793-.149.398c.355-.28.784-.445 1.231-.471.115-.011.23.01.335.06.104.052.192.13.256.23a1.07 1.07 0 0 1 .057.805 3 3 0 0 1-.085.318l-.756 2.212h-.98l.728-2.12a1 1 0 0 0 .06-.186q.101-.525-.2-.523c-.2 0-.547.177-.94.546l-.788 2.288h-.986l1.232-3.557zm-1.401-1.793-1.838 5.352h-1.062l1.838-5.352zm-4.09 0-1.838 5.352h-.976l1.838-5.352zm-4.365 4.32.575-1.703h-.205a1.27 1.27 0 0 0-.972.389 1.86 1.86 0 0 0-.505.933.72.72 0 0 0 .02.502.33.33 0 0 0 .13.14c.055.033.119.048.183.043.283-.02.554-.13.774-.313m1.838-2.471-1.206 3.503h-.981l.115-.332a1.8 1.8 0 0 1-1.036.402.8.8 0 0 1-.44-.102.8.8 0 0 1-.316-.326 1.57 1.57 0 0 1-.095-1.103 2.6 2.6 0 0 1 .956-1.557 2.9 2.9 0 0 1 1.905-.605q.55-.006 1.087.12m-4.27-.806-.289.759h.724l-.296.777h-.729l-.431 1.16q-.057.13-.083.272c-.072.318 0 .471.2.471.214-.031.42-.104.608-.214l-.2.942c-.276.146-.58.226-.89.236a.77.77 0 0 1-.387-.073.8.8 0 0 1-.303-.255 1.13 1.13 0 0 1-.094-.857q.044-.152.094-.309l.526-1.359h-.666l.29-.777h.67l.278-.752zm-2.4.759-1.227 3.55h-.98l1.221-3.55zm-.678-.994a.72.72 0 0 1 .23-.387.63.63 0 0 1 .397-.157.4.4 0 0 1 .331.157.5.5 0 0 1 .07.387.8.8 0 0 1-.23.398.65.65 0 0 1-.398.15.38.38 0 0 1-.324-.15.48.48 0 0 1-.069-.398m-3.205 5.33c.032-.165-.099-.287-.388-.35l-.411-.102a1.1 1.1 0 0 0-.391.101.43.43 0 0 0-.306.319c-.05.25.166.37.653.37.204.008.408-.018.604-.078a.34.34 0 0 0 .23-.26m-.041-2.355c.356 0 .585-.26.689-.768a.48.48 0 0 0-.04-.37.36.36 0 0 0-.307-.137c-.358 0-.595.257-.715.783-.066.322.05.492.363.492m2.388-1.981-.262.777h-.527c.037.188.037.382 0 .57-.08.367-.282.693-.572.924-.31.25-.696.382-1.091.374a2.3 2.3 0 0 0-.46.033.2.2 0 0 0-.11.051.2.2 0 0 0-.057.11c-.012.042 0 .08.064.127q.339.102.69.15c.406.073.689.191.822.382a.82.82 0 0 1 .129.706c-.164.768-.816 1.16-1.956 1.16-.389.03-.779-.052-1.125-.236a.57.57 0 0 1-.244-.279.6.6 0 0 1-.025-.374c.076-.339.402-.614.985-.793a.57.57 0 0 1-.273-.274.6.6 0 0 1-.041-.388q.106-.496.806-.655a.93.93 0 0 1-.34-.454.95.95 0 0 1-.016-.573c.09-.38.31-.713.618-.943.325-.266.73-.406 1.146-.395zm-3.906 0-1.227 3.56h-.981l1.21-3.56zm-.69-.994a.73.73 0 0 1 .23-.387.64.64 0 0 1 .393-.157.41.41 0 0 1 .33.157.45.45 0 0 1 .063.387.8.8 0 0 1-.23.398.63.63 0 0 1-.402.15.39.39 0 0 1-.322-.15.53.53 0 0 1-.068-.398m-4.327.092-1.213 3.566h.988a1.81 1.81 0 0 0 1.33-.544 2.5 2.5 0 0 0 .729-1.336 1.48 1.48 0 0 0-.19-1.227 1.3 1.3 0 0 0-.508-.375 1.3 1.3 0 0 0-.619-.096zm-.742-.89h1.65c.832 0 1.415.235 1.753.725s.42 1.114.26 1.884a3.67 3.67 0 0 1-1.094 1.965c-.49.495-1.15.776-1.838.782h-2.56z" />
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M21.683 17.795h.568a.8.8 0 0 0 .516-.17.55.55 0 0 0 .182-.443.57.57 0 0 0-.182-.45.75.75 0 0 0-.516-.162h-.568zm0 .323v1.361h-.335V16.24h.829c.293-.016.584.067.827.236a.85.85 0 0 1 .306.706.86.86 0 0 1-.306.688c-.24.177-.532.265-.827.25zM24.661 19.166a.72.72 0 0 0 .551-.236.84.84 0 0 0 .23-.598.83.83 0 0 0-.23-.596.727.727 0 0 0-1.11 0 .82.82 0 0 0-.229.596.86.86 0 0 0 .23.598.73.73 0 0 0 .558.236m0 .32a1.02 1.02 0 0 1-.797-.327 1.27 1.27 0 0 1-.315-.84c0-.31.112-.61.315-.84.212-.213.498-.333.796-.333s.583.12.796.333c.2.232.311.53.311.84s-.11.608-.311.84a1.05 1.05 0 0 1-.793.327M27.089 18.9l.62-1.795h.205l.631 1.792.662-1.76h.308l-.887 2.344h-.202l-.62-1.757-.628 1.757h-.2l-.886-2.344h.34zM31.39 18.035a.74.74 0 0 0-.147-.337.59.59 0 0 0-.487-.219.6.6 0 0 0-.46.236 1.1 1.1 0 0 0-.158.323zm-1.298.278a.83.83 0 0 0 .241.589.78.78 0 0 0 .581.25q.203 0 .39-.071.202-.083.369-.221l.073-.064v.363h-.023a1.3 1.3 0 0 1-.386.235 1.22 1.22 0 0 1-1.245-.25 1.13 1.13 0 0 1-.32-.836 1.27 1.27 0 0 1 .276-.843.875.875 0 0 1 .71-.33.9.9 0 0 1 .733.309c.172.228.262.51.253.798v.047zM32.769 17.479a.7.7 0 0 1 .415-.344.67.67 0 0 1 .531.064q.008 0 .013.004a.02.02 0 0 1 .008.012v.368c-.02-.012 0 0-.028 0-.519-.297-.836.13-.94.419v1.475h-.319V17.12h.32zM36.07 16.58h-1.013v-.297h2.366v.296H36.41v2.867h-.34zM41.587 16.629v1.034h1.282v.306h-1.282v1.157h1.52v.308H41.25V16.32h1.799v.309zM44.026 17.435a.82.82 0 0 1 .962-.255.8.8 0 0 1 .274.19q.075.085.13.185l.047-.078a.87.87 0 0 1 .678-.358.77.77 0 0 1 .6.25.88.88 0 0 1 .229.638V19.4h-.333v-1.38a.6.6 0 0 0-.145-.422.47.47 0 0 0-.384-.16.63.63 0 0 0-.482.264.7.7 0 0 0-.11.146v1.552h-.334v-1.38a.6.6 0 0 0-.144-.422.48.48 0 0 0-.384-.16.64.64 0 0 0-.487.264q-.06.07-.113.146v1.552h-.326v-2.237h.322z"
                        clip-rule="evenodd" />
                      <path fill="currentColor"
                        d="M47.659 17.168h.333v.283c.07-.12.18-.21.31-.252a1.075 1.075 0 0 1 1.174.235 1.364 1.364 0 0 1 .011 1.699c-.4.447-.985.346-1.463.087l-.032-.021v1.09h-.333zm1.341.408c-.275-.184-.677-.142-1.001.303v.912c.337.372.774.408 1.063.191a.9.9 0 0 0 .307-.722.91.91 0 0 0-.369-.691M26.887 14.674h-6.295v.372h6.295zM60.596 14.674h-28.64v.372h28.64z" />
                      <path fill="currentColor" fill-rule="evenodd"
                        d="M38.329 19.105a.7.7 0 0 0 .55-.236.86.86 0 0 0 .23-.596.88.88 0 0 0-.23-.6.69.69 0 0 0-.55-.236.7.7 0 0 0-.556.235.86.86 0 0 0-.23.6.85.85 0 0 0 .23.597.74.74 0 0 0 .555.236m0 .322a1.05 1.05 0 0 1-.798-.327 1.16 1.16 0 0 1-.314-.837 1.16 1.16 0 0 1 .314-.845 1.06 1.06 0 0 1 .797-.332 1.01 1.01 0 0 1 .793.332 1.15 1.15 0 0 1 .32.836 1.19 1.19 0 0 1-.32.836 1.07 1.07 0 0 1-.793.328M51.298 19.105a.72.72 0 0 0 .551-.236.85.85 0 0 0 .23-.596.87.87 0 0 0-.23-.6.76.76 0 0 0-.553-.246.74.74 0 0 0-.552.245.83.83 0 0 0-.23.601.83.83 0 0 0 .23.596.74.74 0 0 0 .551.236m0 .322a1.03 1.03 0 0 1-.797-.327 1.14 1.14 0 0 1-.315-.836 1.15 1.15 0 0 1 .32-.846 1.05 1.05 0 0 1 .797-.332 1.04 1.04 0 0 1 .797.332 1.17 1.17 0 0 1 .31.836c.008.31-.103.61-.31.836a1.07 1.07 0 0 1-.797.328M53.729 18.928l.622-1.805h.21l.622 1.8.662-1.762h.317l-.887 2.34h-.202l-.625-1.753-.623 1.752h-.204l-.887-2.339h.335zM58.04 18.035a.7.7 0 0 0-.147-.337.59.59 0 0 0-.484-.219.58.58 0 0 0-.46.236.9.9 0 0 0-.158.323zm-1.295.278a.83.83 0 0 0 .24.589.78.78 0 0 0 .578.25 1.12 1.12 0 0 0 .753-.292l.08-.064v.363h-.016a1.22 1.22 0 0 1-1.643-.014 1.15 1.15 0 0 1-.316-.837 1.3 1.3 0 0 1 .273-.843 1 1 0 0 1 .717-.33.97.97 0 0 1 .726.311c.174.227.265.51.257.799v.047zM59.42 17.456a.7.7 0 0 1 .414-.337.67.67 0 0 1 .525.064s.016 0 .025.011v.382c-.027-.03 0 0-.027-.017-.522-.299-.837.132-.94.415v1.475h-.32v-2.347h.322z"
                        clip-rule="evenodd" />
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path fill="#fff" d="M0 0h61v24H0z" />
                      </clipPath>
                    </defs>
                  </svg>
            </div>
        </div>
    </section>`;

const CARD_9_HTML = `    <section class="ux4g-mb-l">
        <div class="ux4g-session-timeout-wrapper ux4g-relative ux4g-w-100 ux4g-o-hidden">
            <!-- Reusable: Mock Dashboard Backdrop (Blurred) -->
            <div class="ux4g-w-100 ux4g-h-100 ux4g-blur-3 ux4g-opacity-40 ux4g-pointer-events-none ux4g-select-none">
                <div class="ux4g-bg-neutral-elevated ux4g-bb ux4g-border-neutral-subtle ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-px-xl ux4g-py-m"
                    style="height: 60px;">
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 120px; height: 24px;"></div>
                    <div class="ux4g-d-flex ux4g-gap-m">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                    </div>
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-full" style="width: 32px; height: 32px;"></div>
                </div>
                <div class="ux4g-d-flex ux4g-gap-xl ux4g-p-xl" style="height: calc(100% - 60px);">
                    <div
                        class="ux4g-flex-1 ux4g-bg-neutral-elevated ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 200px; height: 24px;"></div>
                        <div class="ux4g-flex-1 ux4g-bg-neutral-soft ux4g-radius-s" style="min-height: 180px;"></div>
                        <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-2xs">
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="width: 60%; height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                        </div>
                    </div>
                    <div class="ux4g-d-none ux4g-sm-d-flex ux4g-flex-column ux4g-gap-l" style="width: 260px;">
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                    </div>
                </div>
            </div>

            <!-- Overlay & Centered Modal Card -->
            <div
                class="ux4g-absolute ux4g-top-0 ux4g-bottom-0 ux4g-start-0 ux4g-end-0 session-out-bg ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-p-xl ux4g-z-1">
                <!-- Session Modal Card Component -->
                <div
                    class="ux4g-session-card ux4g-bg-neutral-elevated ux4g-radius-l ux4g-shadow-l3 ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-text-center ux4g-z-2">
                    <!-- Purple Lock Status Badge -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-mb-xl ux4g-radius-full ux4g-bg-primary-soft"
                        style="width: var(--ux4g-sz-64); height: var(--ux4g-sz-64);">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-radius-full ux4g-bg-primary-strong"
                            style="width: var(--ux4g-sz-40); height: var(--ux4g-sz-40);">
                            <span class="ux4g-icon-outlined ux4g-text-white">lock</span>
                        </div>
                    </div>

                    <!-- Heading -->
                    <h2 class="ux4g-heading-m-default ux4g-text-neutral-primary"
                        style="margin-block: var(--ux4g-margin-m) var(--ux4g-margin-xs);">Your session is expiring</h2>

                    <!-- Countdown Timer (Purple) -->
                    <div class="ux4g-session-timer ux4g-text-primary ux4g-mb-m" style="line-height: 1;"
                        aria-live="polite">04:47</div>

                    <!-- Description -->
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-xl" style="max-width: 340px;">
                        You've been inactive for a while. For your security, we'll sign you out automatically.</p>

                    <!-- Progress Bar (50% filled, Purple) -->
                    <div class="ux4g-w-100 ux4g-radius-full ux4g-bg-neutral-subtle ux4g-o-hidden ux4g-mb-2xl"
                        style="height: 8px;" role="progressbar" aria-valuenow="50" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="ux4g-session-progress-fill ux4g-bg-primary-strong ux4g-h-100 ux4g-radius-full"
                            style="width: 50%;"></div>
                    </div>

                    <!-- Actions -->
                    <div class="ux4g-session-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="button">Stay signed in</button>
                        <button class="ux4g-btn ux4g-btn-outline-neutral ux4g-btn-lg" type="button">Sign out
                            now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

const CARD_10_HTML = `    <section class="ux4g-mb-l">
        <div class="ux4g-session-timeout-wrapper ux4g-relative ux4g-w-100 t ux4g-o-hidden">
            <!-- Reusable: Mock Dashboard Backdrop (Blurred) -->
            <div class="ux4g-w-100 ux4g-h-100 ux4g-blur-3 ux4g-opacity-40 ux4g-pointer-events-none ux4g-select-none">
                <div class="ux4g-bg-neutral-elevated ux4g-bb ux4g-border-neutral-subtle ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-px-xl ux4g-py-m"
                    style="height: 60px;">
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 120px; height: 24px;"></div>
                    <div class="ux4g-d-flex ux4g-gap-m">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                    </div>
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-full" style="width: 32px; height: 32px;"></div>
                </div>
                <div class="ux4g-d-flex ux4g-gap-xl ux4g-p-xl" style="height: calc(100% - 60px);">
                    <div
                        class="ux4g-flex-1 ux4g-bg-neutral-elevated ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 200px; height: 24px;"></div>
                        <div class="ux4g-flex-1 ux4g-bg-neutral-soft ux4g-radius-s" style="min-height: 180px;"></div>
                        <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-2xs">
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="width: 60%; height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                        </div>
                    </div>
                    <div class="ux4g-d-none ux4g-sm-d-flex ux4g-flex-column ux4g-gap-l" style="width: 260px;">
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                    </div>
                </div>
            </div>

            <!-- Overlay & Centered Modal Card -->
            <div
                class="ux4g-absolute ux4g-top-0 ux4g-bottom-0 ux4g-start-0 ux4g-end-0 session-out-bg ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-p-xl ux4g-z-1">
                <!-- Session Modal Card Component -->
                <div
                    class="ux4g-session-card ux4g-bg-neutral-elevated ux4g-radius-l ux4g-shadow-l3 ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-text-center ux4g-z-2">
                    <!-- Amber Warning Status Badge -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-mb-xl ux4g-radius-full ux4g-bg-warning-soft"
                        style="width: var(--ux4g-sz-64); height: var(--ux4g-sz-64);">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-radius-full ux4g-bg-warning-strong"
                            style="width: var(--ux4g-sz-40); height: var(--ux4g-sz-40);">
                            <span class="ux4g-icon-outlined ux4g-text-white">warning</span>
                        </div>
                    </div>

                    <!-- Heading -->
                    <h2 class="ux4g-heading-m-default ux4g-text-neutral-primary"
                        style="margin-block: var(--ux4g-margin-m) var(--ux4g-margin-xs);">Your session is expiring soon
                    </h2>

                    <!-- Countdown Timer (Amber/Orange) -->
                    <div class="ux4g-session-timer ux4g-text-warning ux4g-mb-m" style="line-height: 1;"
                        aria-live="polite">00:57</div>

                    <!-- Description -->
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-xl" style="max-width: 340px;">
                        You'll be signed out in less than a minute</p>

                    <!-- Progress Bar (15% filled, Amber/Orange) -->
                    <div class="ux4g-w-100 ux4g-radius-full ux4g-bg-neutral-subtle ux4g-o-hidden ux4g-mb-2xl"
                        style="height: 8px;" role="progressbar" aria-valuenow="15" aria-valuemin="0"
                        aria-valuemax="100">
                        <div class="ux4g-session-progress-fill ux4g-bg-warning-strong ux4g-h-100 ux4g-radius-full"
                            style="width: 15%;"></div>
                    </div>

                    <!-- Actions -->
                    <div class="ux4g-session-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg" type="button">Stay signed in</button>
                        <button class="ux4g-btn ux4g-btn-outline-neutral ux4g-btn-lg" type="button">Sign out
                            now</button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

const CARD_11_HTML = `    <section class="ux4g-mb-l">
        <div class="ux4g-session-timeout-wrapper ux4g-relative ux4g-w-100 ux4g-o-hidden">
            <!-- Reusable: Mock Dashboard Backdrop (Blurred) -->
            <div class="ux4g-w-100 ux4g-h-100 ux4g-blur-3 ux4g-opacity-40 ux4g-pointer-events-none ux4g-select-none">
                <div class="ux4g-bg-neutral-elevated ux4g-bb ux4g-border-neutral-subtle ux4g-d-flex ux4g-ai-center ux4g-jc-between ux4g-px-xl ux4g-py-m"
                    style="height: 60px;">
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 120px; height: 24px;"></div>
                    <div class="ux4g-d-flex ux4g-gap-m">
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                        <div class="ux4g-bg-neutral-subtle ux4g-radius-s" style="width: 80px; height: 16px;"></div>
                    </div>
                    <div class="ux4g-bg-neutral-emphasis ux4g-radius-full" style="width: 32px; height: 32px;"></div>
                </div>
                <div class="ux4g-d-flex ux4g-gap-xl ux4g-p-xl" style="height: calc(100% - 60px);">
                    <div
                        class="ux4g-flex-1 ux4g-bg-neutral-elevated ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-column ux4g-gap-m">
                        <div class="ux4g-bg-neutral-emphasis ux4g-radius-s" style="width: 200px; height: 24px;"></div>
                        <div class="ux4g-flex-1 ux4g-bg-neutral-soft ux4g-radius-s" style="min-height: 180px;"></div>
                        <div class="ux4g-d-flex ux4g-flex-column ux4g-gap-2xs">
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                            <div class="ux4g-w-100 ux4g-bg-neutral-subtle ux4g-radius-s"
                                style="width: 60%; height: 12px; margin-bottom: var(--ux4g-margin-xs);"></div>
                        </div>
                    </div>
                    <div class="ux4g-d-none ux4g-sm-d-flex ux4g-flex-column ux4g-gap-l" style="width: 260px;">
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                        <div class="ux4g-w-100 ux4g-bg-neutral-elevated ux4g-radius-l" style="height: 140px;"></div>
                    </div>
                </div>
            </div>

            <!-- Overlay & Centered Modal Card -->
            <div
                class="ux4g-absolute ux4g-top-0 ux4g-bottom-0 ux4g-start-0 ux4g-end-0 session-out-bg ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-p-xl ux4g-z-1">
                <!-- Session Modal Card Component -->
                <div
                    class="ux4g-session-card ux4g-bg-neutral-elevated ux4g-radius-l ux4g-shadow-l3 ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-text-center ux4g-z-2">
                    <!-- Neutral Clock Status Badge -->
                    <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-mb-xl ux4g-radius-full ux4g-bg-neutral-soft"
                        style="width: var(--ux4g-sz-64); height: var(--ux4g-sz-64);">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-radius-full ux4g-bg-neutral-strong"
                            style="width: var(--ux4g-sz-40); height: var(--ux4g-sz-40);">
                            <span class="ux4g-icon-outlined ux4g-text-white">schedule</span>
                        </div>
                    </div>

                    <!-- Heading -->
                    <h2 class="ux4g-heading-s-strong ux4g-text-neutral-primary"
                        style="margin-block: var(--ux4g-margin-m) var(--ux4g-margin-2xl);">Session ended</h2>

                    <!-- Description -->
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary ux4g-mb-2xl" style="max-width: 340px;">
                        Your form progress has been saved. Sign in again to continue where you left off.</p>

                    <!-- Actions -->
                    <div class="ux4g-session-actions">
                        <button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="button">Sign in to
                            continue</button>
                    </div>
                </div>
            </div>
        </div>
    </section>`;


export const Column = {
    name: 'Column',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Aadhaar Authentication - Column', 'Column layout variants for aadhaar authentication patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('aadhaar-col-1', 'Verify with Aadhaar - Number Entry', '', COLUMN_1_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-2', 'Face Authentication', '', COLUMN_2_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-3', 'Enter OTP - Active Timer', '', COLUMN_3_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-4', 'Enter OTP Code - Aadhaar Verification', '', COLUMN_4_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-5', 'Success - Authentication', '', COLUMN_5_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-6', 'Error - Authentication Failed', '', COLUMN_6_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-7', 'Account Locked', '', COLUMN_7_HTML)}
                ${renderDemoCodeBlock('aadhaar-col-8', 'Operator-Assisted Authentication', '', COLUMN_8_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const FullScreen = {
    name: 'Full Screen',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Aadhaar Authentication - Full Screen', 'Full screen layout variants for aadhaar authentication patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('aadhaar-full-1', 'Verify with Aadhaar - Number Entry', '', FULL_1_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-2', 'Face Authentication', '', FULL_2_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-3', 'Enter OTP - Active Timer', '', FULL_3_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-4', 'Enter OTP Code - Aadhaar Verification', '', FULL_4_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-5', 'Success - Authentication', '', FULL_5_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-6', 'Error - Authentication Failed', '', FULL_6_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-7', 'Account Locked', '', FULL_7_HTML)}
                ${renderDemoCodeBlock('aadhaar-full-8', 'Operator-Assisted Authentication', '', FULL_8_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const Card = {
    name: 'Card',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Aadhaar Authentication - Card', 'Card layout variants for aadhaar authentication patterns.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('aadhaar-card-1', 'Verify with Aadhaar - Number Entry', '', CARD_1_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-2', 'Face Authentication', '', CARD_2_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-3', 'Enter OTP - Active Timer', '', CARD_3_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-4', 'Enter OTP Code - Aadhaar Verification', '', CARD_4_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-5', 'Success - Authentication', '', CARD_5_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-6', 'Error - Authentication Failed', '', CARD_6_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-7', 'Account Locked', '', CARD_7_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-8', 'Operator-Assisted Authentication', '', CARD_8_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-9', 'Session Expiring - Warning', '', CARD_9_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-10', 'Session Expiring Soon - Critical', '', CARD_10_HTML)}
                ${renderDemoCodeBlock('aadhaar-card-11', 'Session Ended', '', CARD_11_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
