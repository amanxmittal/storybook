import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Dashboard & My Applications/Profile & Preferences',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Profile and preferences management including Aadhaar-linked information, personal details, linked accounts, notification toggles, and account deletion.',
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

const getReactCodeLocal = (html) => htmlToJsx(html, 'ProfilePreferences');

const renderDemoCodeBlock = (id, title, subtitle, htmlContent, isInverse = false, gridClass = 'ux4g-grid-cols-1') => {
    const displayCode = formatCode(htmlContent);
    const reactCode = getReactCodeLocal(displayCode);
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

export const Introduction = {
    name: 'Introduction',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Profile & Preferences', 'Profile management with Aadhaar-linked information, editable personal details, verification badges, linked accounts, notification toggles, and account deletion.')}
            <div class="ux4g-container ux4g-py-2xl">
                <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-md-grid-cols-2 ux4g-lg-grid-cols-3 ux4g-gap-l">
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">person</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">User Profile</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">User card with avatar, verification tags (Mobile verified, Aadhaar linked), and edit button.</p>
                    </div>
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">badge</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Aadhaar-linked Info</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Form fields for first name, date of birth, gender, and Aadhaar number with UIDAI update option.</p>
                    </div>
                    <div class="ux4g-bg-white ux4g-radius-l ux4g-p-xl ux4g-border ux4g-border-neutral-emphasis">
                        <div class="ux4g-d-flex ux4g-ai-center ux4g-gap-m ux4g-mb-m">
                            <span class="ux4g-icon-outlined ux4g-fs-24 ux4g-text-primary">link</span>
                            <h3 class="ux4g-heading-s-strong ux4g-text-neutral-primary">Linked Accounts</h3>
                        </div>
                        <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Connected services including DigiLocker, UMANG app, and bank account for DBT with status indicators.</p>
                    </div>
                </div>
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const ProfilePreferences = {
    name: 'Profile & Preferences',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Profile & Preferences', 'User profile management with Aadhaar-linked information, verification badges, and editable personal details.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('profile-preferences', 'Profile & Preferences', 'Full profile page with sidebar navigation, user card, Aadhaar-linked form fields, personal information, linked accounts, notification toggles, and delete account section.', `<section class="ux4g-dashboard-layout-container">
    <aside class="ux4g-dashboard-sidebar ux4g-d-none ux4g-lg-d-flex">
        <div class="ux4g-dashboard-sidebar-profile">
            <div class="ux4g-avatar ux4g-avatar-l ux4g-relative">
                <img src="https://i.pravatar.cc/150?u=54" alt="avatar">
            </div>
            <div class="ux4g-title-m-strong ux4g-pt-m">Ramesh Kumar</div>
        </div>
        <div class="ux4g-w-100 ux4g-pb-s">
            <hr class="ux4g-divider-horizontal ux4g-m-0">
        </div>
        <nav class="ux4g-dashboard-sidebar-nav ux4g-w-100">
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">grid_view</span>
                My Applications
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">task_alt</span>
                Pending Tasks
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">notifications</span>
                Notifications
            </button>
            <button class="ux4g-btn-primary ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">person</span>
                Profile
            </button>
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">help_outline</span>
                Help
            </button>
        </nav>
        <div class="ux4g-dashboard-sidebar-footer ux4g-w-100">
            <hr class="ux4g-divider-horizontal ux4g-mb-m">
            <button class="ux4g-btn-text-neutral ux4g-d-flex ux4g-ai-center ux4g-jc-start ux4g-inline-gap-xs ux4g-w-100">
                <span class="ux4g-icon-outlined">logout</span>
                Sign Out
            </button>
        </div>
    </aside>
    <section class="ux4g-profile-container">
        <div class="ux4g-profile-wrapper">
            <h1 class="ux4g-heading-xl-strong">Profile & Preferences</h1>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">Manage your account details, linked services and notifications</p>
        </div>
        <div class="ux4g-profile-header profile-user-card">
            <div class="profile-user-details">
                <div class="ux4g-avatar ux4g-avatar-xl ux4g-relative">
                    <img src="https://i.pravatar.cc/150?u=54" alt="avatar">
                </div>
                <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                    <h1 class="ux4g-heading-s-strong ux4g-mb-0">Ramesh Kumar</h1>
                    <div class="profile-user-tags">
                        <span class="ux4g-tag-tonal-success ux4g-tag-s">
                            <i class="ux4g-icon ux4g-icon-success">check_circle</i>
                            Mobile verified
                        </span>
                        <span class="ux4g-tag-tonal-success ux4g-tag-s">
                            <i class="ux4g-icon ux4g-icon-success">check_circle</i>
                            Aadhaar linked
                        </span>
                    </div>
                </div>
            </div>
            <button class="ux4g-btn-outline-primary profile-edit-btn">Edit profile</button>
        </div>
        <div class="ux4g-profile-header">
            <h1 class="ux4g-heading-s-strong ux4g-mb-xs">Aadhaar-linked Information</h1>
            <form>
                <div class="ux4g-row ux4g-gutter-xs">
                    <div class="ux4g-col-12 ux4g-col-md-6">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="profile-first-name">First Name</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="profile-first-name" placeholder="First Name" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-12 ux4g-col-md-6">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="profile-dob">Date of Birth</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="profile-dob" placeholder="DD/MM/YYYY" type="date" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-12 ux4g-col-md-6">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="profile-gender">Gender</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="profile-gender" placeholder="Male" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-12 ux4g-col-md-6">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="profile-aadhaar">Aadhaar number (UID)</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="profile-aadhaar" placeholder="XXXX XXXX XXXX" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        <div class="ux4g-profile-header">
            <h1 class="ux4g-heading-s-strong ux4g-mb-xs">Personal information</h1>
            <form>
                <div class="ux4g-row ux4g-gutter-xs">
                    <div class="ux4g-col-12 ux4g-col-md-6">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="personal-email">Email address</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="personal-email" placeholder="ramesh.kumar@gmail.com" type="text" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-12 ux4g-col-md-6">
                        <div class="ux4g-input-container ux4g-input-md">
                            <label class="ux4g-label-m-default" for="personal-phone">Number</label>
                            <div class="ux4g-input">
                                <input class="ux4g-input-input" id="personal-phone" placeholder="9876543210" type="number" />
                            </div>
                        </div>
                    </div>
                    <div class="ux4g-col-12">
                        <div class="ux4g-input-container">
                            <span class="ux4g-label-m-default">Language preference</span>
                            <div class="ux4g-dropdown ux4g-dropdown-default ux4g-dropdown-selection ux4g-dropdown-single ux4g-dropdown-md ux4g-w-100">
                                <button aria-label="Single select default medium" class="ux4g-dropdown-control" type="button">
                                    <span class="ux4g-dropdown-value">
                                        <span class="ux4g-dropdown-text is-placeholder" data-placeholder="Please select.." ux4g-dropdown-value="">Please select..</span>
                                        <span aria-live="polite" class="ux4g-dropdown-selected-chips" ux4g-dropdown-chips=""></span>
                                    </span>
                                    <span aria-hidden="true" class="ux4g-icon-outlined ux4g-dropdown-caret">expand_more</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <p class="ux4g-body-xs-default ux4g-text-neutral-tertiary">Language changes apply immediately across the portal.</p>
                </div>
            </form>
        </div>
        <div class="ux4g-profile-header">
            <h1 class="ux4g-heading-s-strong ux4g-mb-xs">Linked accounts</h1>
            <ul class="ux4g-list ux4g-list-default ux4g-list-m profile-linked-accounts-list">
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                    <span class="ux4g-body-m-strong">DigiLocker</span>
                                    <div class="ux4g-tag-tonal-success">
                                        <i class="ux4g-icon ux4g-icon-success">check_circle</i>
                                        Linked
                                    </div>
                                </div>
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Access and share your digital documents</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <button class="ux4g-btn-text-primary">View in DigiLocker</button>
                        </div>
                    </div>
                </li>
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
                                    <span class="ux4g-body-m-strong">UMANG App</span>
                                    <div class="ux4g-tag-tonal-warning">
                                        <i class="ux4g-icon-outlined ux4g-icon-warning">warning</i>
                                        Not linked
                                    </div>
                                </div>
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Unified access to government services</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <button class="ux4g-btn-outline-primary">Connect</button>
                        </div>
                    </div>
                </li>
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-body-m-strong">Bank account for DBT</span>
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">******7842 · State Bank of India</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <button class="ux4g-btn-text-primary">Change</button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ux4g-profile-header">
            <h1 class="ux4g-heading-s-strong ux4g-mb-xs">Notification preferences</h1>
            <ul class="ux4g-list ux4g-list-default ux4g-list-m ux4g-list-switch">
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row ux4g-toggles">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-body-m-strong">SMS</span>
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">+91 98765 43210</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control">
                                    <span class="ux4g-switch-track">
                                        <span class="ux4g-switch-thumb"></span>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row ux4g-toggles">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-body-m-strong">Email</span>
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">r•••••h@gmail.com</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control">
                                    <span class="ux4g-switch-track">
                                        <span class="ux4g-switch-thumb"></span>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row ux4g-toggles">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-body-m-strong">App notifications</span>
                                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Push alerts on this device</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control">
                                    <span class="ux4g-switch-track">
                                        <span class="ux4g-switch-thumb"></span>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
                <li class="ux4g-list-item" role="option">
                    <div class="ux4g-list-item-row ux4g-toggles">
                        <div class="ux4g-list-item-start">
                            <div class="ux4g-d-flex ux4g-flex-column ux4g-stack-gap-xs">
                                <span class="ux4g-body-m-strong">WhatsApp</span>
                            </div>
                        </div>
                        <div class="ux4g-list-item-end">
                            <label class="ux4g-switch ux4g-switch-md">
                                <input class="ux4g-switch-input" type="checkbox" role="switch">
                                <div class="ux4g-switch-control">
                                    <span class="ux4g-switch-track">
                                        <span class="ux4g-switch-thumb"></span>
                                    </span>
                                </div>
                            </label>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div class="ux4g-profile-header ux4g-border-error-strong">
            <div class="ux4g-profile-header-content">
                <div class="ux4g-profile-header-text">
                    <h1 class="ux4g-heading-s-strong ux4g-mb-xs">Delete account</h1>
                    <p class="ux4g-body-s-default ux4g-text-neutral-secondary">Permanently delete your account and all data. 30-day grace period to restore before it is final.</p>
                </div>
                <button class="ux4g-btn-outline-danger" data-modal-target="#modalDeleteAccount">Delete my account</button>
            </div>
        </div>
    </section>
</section>
<div aria-labelledby="modalBackdropBlurLabel" class="ux4g-modal-backdrop ux4g-modal-backdrop-25 ux4g-modal-backdrop-blur profile-model" id="modalDeleteAccount">
    <div class="ux4g-modal">
        <div class="ux4g-modal-box ux4g-modal-s ux4g-modal-center-content ux4g-border-error ux4g-border">
            <header class="ux4g-modal-header">
                <div class="ux4g-modal-header-title-content ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
                    <div class="ux4g-d-block">
                        <h2 class="ux4g-modal-header-title">Delete your account?</h2>
                    </div>
                </div>
                <button aria-label="Close" class="ux4g-modal-close" data-close-modal="">
                    <span class="ux4g-icon-outlined ux4g-modal-close-icon">close</span>
                </button>
            </header>
            <div class="ux4g-modal-body">
                <p>This permanently deletes your account and all associated data. You will have a 30-day grace period to restore it — after that, deletion is final and cannot be undone.</p>
            </div>
            <footer class="ux4g-modal-actions">
                <button class="ux4g-btn-danger">Delete</button>
                <button class="ux4g-btn-outline-neutral" data-close-modal="">Cancel</button>
            </footer>
        </div>
    </div>
</div>`, false, 'ux4g-grid-cols-1')}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};
