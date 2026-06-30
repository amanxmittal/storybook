/**
 * Identity & Access — Auth Errors & Lockout Patterns.
 */

import { formatCode, htmlToJsx } from '../utils/formatCode';

export default {
    title: 'UX4G/Patterns/Identity & Access/Auth Pattern',
    parameters: {
        layout: 'fullscreen',
        docs: {
            description: {
                component: 'Authentication error and lockout flows for secure digital access to government services. Includes OTP error states, attempt counters, account lockout, auto unlock, and suspicious activity detection across Column, Fullscreen, and Card layouts.',
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

const getReactCode = (html) => htmlToJsx(html, 'AuthPattern');

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

/* ================================================================ */
/* COLUMN_OTP_ERROR                                                       */
/* ================================================================ */
const COLUMN_OTP_ERROR_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout">
		<div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
			<div class="ux4g-sidebar-top">
				<div class="ux4g-sidebar-logo-container ux4g-mb-xl">
					<img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
				</div>
				<h1 class="ux4g-heading-l-default ux4g-mb-m">Secure Digital Access to Government Services</h1>
				<p class="ux4g-body-l-default ux4g-text-neutral-inverse">Access certificates, documents, and
					identity verification seamlessly across all government platforms through a unified citizen
					login.</p>
			</div>
			<div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-gap-m">
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
				</div>
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
				</div>
			</div>
			<div class="ux4g-sidebar-ring ux4g-ring-1"></div>
			<div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
		</div>
		<div
			class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs" id="ux4g-otp-col-otp-label">
					OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-col-otp-label" aria-invalid="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="assertive">
							<span class="ux4g-otp-status" data-ux-otp-status>
								<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
								<span>Incorrect OTP</span>
							</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
								00:17</span>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* COLUMN_FIRST_ATTEMPT                                                       */
/* ================================================================ */
const COLUMN_FIRST_ATTEMPT_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout">
		<div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
			<div class="ux4g-sidebar-top">
				<div class="ux4g-sidebar-logo-container ux4g-mb-xl">
					<img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
				</div>
				<h1 class="ux4g-heading-l-default ux4g-mb-m">Secure Digital Access to Government Services</h1>
				<p class="ux4g-body-l-default ux4g-text-neutral-inverse">Access certificates, documents, and
					identity verification seamlessly across all government platforms through a unified citizen
					login.</p>
			</div>
			<div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-gap-m">
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
				</div>
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
				</div>
			</div>
			<div class="ux4g-sidebar-ring ux4g-ring-1"></div>
			<div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
		</div>
		<div
			class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs"
					id="ux4g-otp-col-first-label">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-col-first-label" aria-invalid="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="assertive">
							<span class="ux4g-otp-status" data-ux-otp-status>
								<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
								<span>Incorrect OTP</span>
							</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
								00:17</span>
						</div>
					</div>
					<!-- Warning Alert Block -->
					<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
						<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
						<div class="ux4g-form-alert-body">
							<span class="ux4g-alert-message ux4g-body-s-strong">Incorrect OTP</span>
							<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
								<span class="ux4g-body-s-default ux4g-text-warning">2 more incorrect entry
									before 30-min lockout</span>
								<span class="ux4g-alert-counter ux4g-text-warning ux4g-label-m-default">Attempt
									1 of 3</span>
							</div>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* COLUMN_FINAL_ATTEMPT                                                       */
/* ================================================================ */
const COLUMN_FINAL_ATTEMPT_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout">
		<div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
			<div class="ux4g-sidebar-top">
				<div class="ux4g-sidebar-logo-container ux4g-mb-xl">
					<img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
				</div>
				<h1 class="ux4g-heading-l-default ux4g-mb-m">Secure Digital Access to Government Services</h1>
				<p class="ux4g-body-l-default ux4g-text-neutral-inverse">Access certificates, documents, and
					identity verification seamlessly across all government platforms through a unified citizen
					login.</p>
			</div>
			<div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-gap-m">
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
				</div>
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
				</div>
			</div>
			<div class="ux4g-sidebar-ring ux4g-ring-1"></div>
			<div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
		</div>
		<div class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs" id="ux4g-otp-col-final-label">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l" onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-col-final-label" aria-invalid="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="assertive">
							<span class="ux4g-otp-status" data-ux-otp-status>
								<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
								<span>Incorrect OTP</span>
							</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
								00:17</span>
						</div>
					</div>
					<!-- Error Alert Block -->
					<div class="ux4g-alert ux4g-alert-error ux4g-form-alert ux4g-mb-m">
						<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
						<div class="ux4g-form-alert-body">
							<span class="ux4g-alert-message">Incorrect OTP</span>
							<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
								<span class="ux4g-body-s-strong ux4g-text-error">This is your last attempt before a 30-min lockout</span>
								<span class="ux4g-alert-counter ux4g-text-error ux4g-label-m-default">Attempt 3 of 3</span>
							</div>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* COLUMN_LOCKED                                                       */
/* ================================================================ */
const COLUMN_LOCKED_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout">
		<div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
			<div class="ux4g-sidebar-top">
				<div class="ux4g-sidebar-logo-container ux4g-mb-xl">
					<img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
				</div>
				<h1 class="ux4g-heading-l-default ux4g-mb-m">Secure Digital Access to Government Services</h1>
				<p class="ux4g-body-l-default ux4g-text-neutral-inverse">Access certificates, documents, and
					identity verification seamlessly across all government platforms through a unified citizen
					login.</p>
			</div>
			<div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-gap-m">
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
				</div>
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
				</div>
			</div>
			<div class="ux4g-sidebar-ring ux4g-ring-1"></div>
			<div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
		</div>
		<div
			class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<div class="ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-stack-gap-s ux4g-mb-l">
					<div class="ux4g-locked-icon-circle">
						<span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
					</div>
					<h2 class="ux4g-heading-m-default ux4g-text-neutral-primary ux4g-text-center"
						id="ux4g-otp-col-locked-label">Too many incorrect attempts</h2>
				</div>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-locked ux4g-w-100" data-ux-otp data-ux-state="locked-out"  data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-col-locked-label" aria-disabled="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" placeholder="—" disabled>
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
							<span class="ux4g-otp-status">
								<span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
								<span class="ux4g-text-neutral-tertiary">Locked for 28:43</span>
							</span>
							<span class="ux4g-text-link-disabled">Resend OTP</span>
						</div>
					</div>
					<div class="ux4g-alert ux4g-alert-error ux4g-form-alert">
						<i class="ux4g-icon ux4g-alert-icon">error</i>
						<div class="ux4g-alert-content">
							<span class="ux4g-alert-message">Account locked. Please wait for the countdown to
								complete</span>
						</div>
					</div>
				</form>
				<div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s ux4g-mt-l">
					<span class="ux4g-body-s-default ux4g-text-neutral-secondary">Need help?</span>
					<a href="tel:18001111111" class="ux4g-text-link ux4g-label-l-default">Call 1800-XXX-XXXX</a>
				</div>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* COLUMN_AUTO_UNLOCK                                                       */
/* ================================================================ */
const COLUMN_AUTO_UNLOCK_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout">
		<div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
			<div class="ux4g-sidebar-top">
				<div class="ux4g-sidebar-logo-container ux4g-mb-xl">
					<img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
				</div>
				<h1 class="ux4g-heading-l-default ux4g-mb-m">Secure Digital Access to Government Services</h1>
				<p class="ux4g-body-l-default ux4g-text-neutral-inverse">Access certificates, documents, and
					identity verification seamlessly across all government platforms through a unified citizen
					login.</p>
			</div>
			<div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-gap-m">
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
				</div>
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
				</div>
			</div>
			<div class="ux4g-sidebar-ring ux4g-ring-1"></div>
			<div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
		</div>
		<div
			class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<div class="ux4g-alert ux4g-alert-success ux4g-radius-m ux4g-mb-l">
					<i class="ux4g-icon ux4g-alert-icon">check_circle</i>
					<div class="ux4g-alert-content">
						<span class="ux4g-alert-message">You can now try signing in again.</span>
					</div>
				</div>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs"
					id="ux4g-otp-col-unlock-label">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp" data-ux-otp data-ux-count="6" data-ux-no-separator role="group"
						aria-labelledby="ux4g-otp-col-unlock-label">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
							<span class="ux4g-text-neutral-tertiary">Didn't receive OTP?</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* COLUMN_SUSPICIOUS                                                       */
/* ================================================================ */
const COLUMN_SUSPICIOUS_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<!-- Variant: Fluid Layout - Warning -->
	<div class="ux4g-alert ux4g-alert-warning">
		<i class="ux4g-icon ux4g-alert-icon">warning</i>
		<div class="ux4g-alert-content">
			<span class="ux4g-alert-title">Suspicious activity detected</span>
			<span class="ux4g-alert-message">We detected a sign-in from a new device. Please verify your identity before continuing.</span>
		</div>
		<div class="ux4g-alert-actions">
			<button class="ux4g-alert-close">
				<i class="ux4g-icon">close</i>
			</button>
		</div>
	</div>
	<div class="ux4g-identity-access-layout">
		<div class="ux4g-identity-access-sidebar ux4g-d-none ux4g-md-d-flex ux4g-flex-column ux4g-jc-between">
			<div class="ux4g-sidebar-top">
				<div class="ux4g-sidebar-logo-container ux4g-mb-xl">
					<img src="../../assets/images/navbar-logo.svg" alt="UX4G Logo" class="ux4g-logo-white">
				</div>
				<h1 class="ux4g-heading-l-default ux4g-mb-m">Secure Digital Access to Government Services</h1>
				<p class="ux4g-body-l-default ux4g-text-neutral-inverse">Access certificates, documents, and
					identity verification seamlessly across all government platforms through a unified citizen
					login.</p>
			</div>
			<div class="ux4g-sidebar-bottom ux4g-d-flex ux4g-gap-m">
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">TRUSTED BY</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">800M+ Citizens</span>
				</div>
				<div class="ux4g-sidebar-stat">
					<span class="ux4g-label-s-default ux4g-text-neutral-inverse">AVAILABLE SERVICES</span>
					<span class="ux4g-label-l-default ux4g-text-neutral-inverse">5000+ Integrated</span>
				</div>
			</div>
			<div class="ux4g-sidebar-ring ux4g-ring-1"></div>
			<div class="ux4g-sidebar-ring ux4g-ring-2 ux4g-sidebar-ring-bottom"></div>
		</div>
		<div
			class="ux4g-identity-access-column ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-flex-column">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<!-- Warning Alert Block -->
				<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
					<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
					<div class="ux4g-form-alert-body">
						<span class="ux4g-alert-message ux4g-body-s-strong">Suspicious activity detected</span>
						<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
							<span class="ux4g-text-warning">We detected a sign-in from a new device. Please verify your identity before continuing.</span>
						</div>
					</div>
				</div>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs"
					id="ux4g-otp-col-suspicious-label">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">A verification code has been
					sent to your registered number for security verification.</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp" data-ux-otp data-ux-count="6" data-ux-no-separator role="group"
						aria-labelledby="ux4g-otp-col-suspicious-label">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
							<span class="ux4g-text-neutral-tertiary">Didn't receive OTP?</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* FULLSCREEN_OTP_ERROR                                                       */
/* ================================================================ */
const FULLSCREEN_OTP_ERROR_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout ux4g-jc-center">
		<div
			class="ux4g-identity-access-full ux4g-bg-neutral">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-fs-otp-label" aria-invalid="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="assertive">
							<span class="ux4g-otp-status" data-ux-otp-status>
								<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
								<span>Incorrect OTP</span>
							</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
								00:17</span>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* FULLSCREEN_FIRST_ATTEMPT                                                       */
/* ================================================================ */
const FULLSCREEN_FIRST_ATTEMPT_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout ux4g-jc-center">
		<div
			class="ux4g-identity-access-full ux4g-bg-neutral">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-fs-first-label" aria-invalid="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="assertive">
							<span class="ux4g-otp-status" data-ux-otp-status>
								<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
								<span>Incorrect OTP</span>
							</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
								00:17</span>
						</div>
					</div>
					<!-- Warning Alert Block -->
					<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
						<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
						<div class="ux4g-form-alert-body">
							<span class="ux4g-alert-message">Incorrect OTP</span>
							<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
								<span class="ux4g-body-s-default ux4g-text-warning">1 more incorrect entry before 30-min lockout</span>
								<span class="ux4g-alert-counter ux4g-text-warning ux4g-label-m-default">Attempt 1 of 3</span>
							</div>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* FULLSCREEN_FINAL_ATTEMPT                                                       */
/* ================================================================ */
const FULLSCREEN_FINAL_ATTEMPT_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout ux4g-jc-center">
		<div
			class="ux4g-identity-access-full ux4g-bg-neutral">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-fs-final-label" aria-invalid="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="assertive">
							<span class="ux4g-otp-status" data-ux-otp-status>
								<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
								<span>Incorrect OTP</span>
							</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
								00:17</span>
						</div>
					</div>
					<!-- Error Alert Block -->
					<div class="ux4g-alert ux4g-alert-error ux4g-form-alert ux4g-mb-m">
						<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
						<div class="ux4g-form-alert-body">
							<span class="ux4g-alert-message">Incorrect OTP</span>
							<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
								<span class="ux4g-body-s-strong ux4g-text-error">This is your last attempt before a 30-min lockout</span>
								<span class="ux4g-alert-counter ux4g-text-error ux4g-label-m-default">Attempt 3 of 3</span>
							</div>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* FULLSCREEN_LOCKED                                                       */
/* ================================================================ */
const FULLSCREEN_LOCKED_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout ux4g-jc-center">
		<div
			class="ux4g-identity-access-full ux4g-bg-neutral">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<div class="ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-stack-gap-s ux4g-mb-l">
					<div class="ux4g-locked-icon-circle">
						<span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
					</div>
					<h2 class="ux4g-heading-m-default ux4g-text-neutral-primary ux4g-text-center">Too many incorrect
						attempts</h2>
				</div>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp ux4g-otp-locked ux4g-w-100" data-ux-otp data-ux-state="locked-out"  data-ux-count="6" data-ux-no-separator
						role="group" aria-labelledby="ux4g-otp-col-locked-label" aria-disabled="true">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" placeholder="—" disabled>
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
							<span class="ux4g-otp-status">
								<span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
								<span class="ux4g-text-neutral-tertiary">Locked for 28:43</span>
							</span>
							<span class="ux4g-text-link-disabled">Resend OTP</span>
						</div>
					</div>
					<div class="ux4g-alert ux4g-alert-error ux4g-form-alert">
						<i class="ux4g-icon ux4g-alert-icon">error</i>
						<div class="ux4g-alert-content">
							<span class="ux4g-alert-message">Account locked. Please wait for the countdown to complete</span>
						</div>
					</div>
				</form>
				<div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s ux4g-mt-l">
					<span class="ux4g-body-s-default ux4g-text-neutral-secondary">Need help?</span>
					<a href="tel:18001111111" class="ux4g-text-link ux4g-label-l-default">Call 1800-XXX-XXXX</a>
				</div>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* FULLSCREEN_AUTO_UNLOCK                                                       */
/* ================================================================ */
const FULLSCREEN_AUTO_UNLOCK_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout ux4g-jc-center">
		<div
			class="ux4g-identity-access-full ux4g-bg-neutral">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<div class="ux4g-alert ux4g-alert-success ux4g-radius-m ux4g-mb-l">
					<i class="ux4g-icon ux4g-alert-icon">check_circle</i>
					<div class="ux4g-alert-content">
						<span class="ux4g-alert-message">You can now try signing in again.</span>
					</div>
				</div>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code sent
					to +91 98XXX XXXXX</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp" data-ux-otp data-ux-count="6" data-ux-no-separator role="group"
						aria-labelledby="ux4g-otp-fs-unlock-label">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
							<span class="ux4g-text-neutral-tertiary">Didn't receive OTP?</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* FULLSCREEN_SUSPICIOUS                                                       */
/* ================================================================ */
const FULLSCREEN_SUSPICIOUS_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<!-- Variant: Fluid Layout - Warning -->
	<div class="ux4g-alert ux4g-alert-warning">
		<i class="ux4g-icon ux4g-alert-icon">warning</i>
		<div class="ux4g-alert-content">
			<span class="ux4g-alert-title">Suspicious activity detected</span>
			<span class="ux4g-alert-message">We detected a sign-in from a new device. Please verify your identity before continuing.</span>
		</div>
		<div class="ux4g-alert-actions">
			<button class="ux4g-alert-close">
				<i class="ux4g-icon">close</i>
			</button>
		</div>
	</div>
	<div class="ux4g-identity-access-layout ux4g-jc-center">
		<div
			class="ux4g-identity-access-full ux4g-bg-neutral">
			<div class="ux4g-form-box">
				<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
					<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
					Back
				</button>
				<!-- Warning Alert Block -->
				<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
					<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
					<div class="ux4g-form-alert-body">
						<span class="ux4g-alert-message ux4g-body-s-strong">Suspicious activity detected</span>
						<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
							<span class="ux4g-text-warning">We detected a sign-in from a new device. Please verify your identity before continuing.</span>
						</div>
					</div>
				</div>
				<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
				<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">A verification code has been
					sent to your registered number for security verification.</p>
				<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
					onsubmit="return false;">
					<div class="ux4g-otp" data-ux-otp data-ux-count="6" data-ux-no-separator role="group"
						aria-labelledby="ux4g-otp-fs-suspicious-label">
						<div class="ux4g-otp-group"></div>
						<input class="ux4g-otp-source" type="hidden" placeholder="—">
						<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
							<span class="ux4g-text-neutral-tertiary">Didn't receive OTP?</span>
							<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
								data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
						</div>
					</div>
					<div class="ux4g-form-actions">
						<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
					</div>
				</form>
			</div>
			<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
				<span class="ux4g-label-m-default">Powered by -</span>
				<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
			</div>
		</div>
	</div>
`;

/* ================================================================ */
/* CARD_OTP_ERROR                                                       */
/* ================================================================ */
const CARD_OTP_ERROR_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
		<div class="ux4g-form-box">
			<a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span class="ux4g-icon-outlined ux4g-fs-14" data-ux4g-init="true">arrow_back</span> Back</a>
			<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
			<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code
				sent to +91 98XXX XXXXX</p>
			<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
				onsubmit="return false;">
				<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
					role="group" aria-labelledby="ux4g-otp-card-otp-label" aria-invalid="true">
					<div class="ux4g-otp-group"></div>
					<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
					<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default"
						aria-live="assertive">
						<span class="ux4g-otp-status" data-ux-otp-status>
							<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
							<span>Incorrect OTP</span>
						</span>
						<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
							data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
							00:17</span>
					</div>
				</div>
				<div class="ux4g-form-actions">
					<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify
						OTP</button>
				</div>
			</form>
		</div>
		<div
			class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
			<span class="ux4g-label-m-default">Powered by -</span>
			<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
		</div>
	</div>
`;

/* ================================================================ */
/* CARD_FIRST_ATTEMPT                                                       */
/* ================================================================ */
const CARD_FIRST_ATTEMPT_HTML = `
<section class="ux4g-identity-access-container">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
		<div class="ux4g-form-box">
			<a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span class="ux4g-icon-outlined ux4g-fs-14" data-ux4g-init="true">arrow_back</span> Back</a>
			<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
			<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code
				sent to +91 98XXX XXXXX</p>
			<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
				onsubmit="return false;">
				<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
					role="group" aria-labelledby="ux4g-otp-card-first-label" aria-invalid="true">
					<div class="ux4g-otp-group"></div>
					<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
					<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default"
						aria-live="assertive">
						<span class="ux4g-otp-status" data-ux-otp-status>
							<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
							<span>Incorrect OTP</span>
						</span>
						<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
							data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
							00:17</span>
					</div>
				</div>
				<!-- Warning Alert Block -->
				<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
					<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
					<div class="ux4g-form-alert-body">
						<span class="ux4g-alert-message ux4g-body-s-strong">Incorrect OTP</span>
						<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
							<span class="ux4g-body-s-default ux4g-text-warning">1 more incorrect entry
								before 30-min lockout. </span>
							<span class="ux4g-alert-counter ux4g-text-warning ux4g-label-m-default">Attempt
								1 of 3</span>
						</div>
					</div>
				</div>
				<div class="ux4g-form-actions">
					<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify
						OTP</button>
				</div>
			</form>
		</div>
		<div
			class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
			<span class="ux4g-label-m-default">Powered by -</span>
			<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
		</div>
	</div>
`;

/* ================================================================ */
/* CARD_FINAL_ATTEMPT                                                       */
/* ================================================================ */
const CARD_FINAL_ATTEMPT_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
		<div class="ux4g-form-box">
					<a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span class="ux4g-icon-outlined ux4g-fs-14" data-ux4g-init="true">arrow_back</span> Back</a>
					<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
					<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code
						sent to +91 98XXX XXXXX</p>
					<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
						onsubmit="return false;">
						<div class="ux4g-otp ux4g-otp-error ux4g-w-100" data-ux-otp data-ux-state="error" data-ux-count="6" data-ux-no-separator
							role="group" aria-labelledby="ux4g-otp-card-final-label" aria-invalid="true">
							<div class="ux4g-otp-group"></div>
							<input class="ux4g-otp-source" type="hidden" value="555555" placeholder="—">
							<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default"
								aria-live="assertive">
								<span class="ux4g-otp-status" data-ux-otp-status>
									<span class="ux4g-icon-outlined" aria-hidden="true">error</span>
									<span>Incorrect OTP</span>
								</span>
								<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
									data-ux-otp-prefix="Resend OTP in " data-ux-otp-seconds="17">Resend OTP in
									00:17</span>
							</div>
						</div>
						<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
							<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
							<div class="ux4g-form-alert-body">
								<span class="ux4g-alert-message ux4g-body-s-strong">Incorrect OTP</span>
								<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
									<span class="ux4g-body-s-default ux4g-text-warning">This is your last attempt before a 30-min lockout</span>
									<span class="ux4g-alert-counter ux4g-text-warning ux4g-label-m-default">Attempt 2 of 3</span>
								</div>
							</div>
						</div>
						<div class="ux4g-form-actions ux4g-d-flex ux4g-flex-column">
							<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify OTP</button>
						</div>
					</form>
		</div>
		<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
			<span class="ux4g-label-m-default">Powered by -</span>
			<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
		</div>
	</div>
`;

/* ================================================================ */
/* CARD_LOCKED                                                       */
/* ================================================================ */
const CARD_LOCKED_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
		<div class="ux4g-form-box">
					<button class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block" type="button">
						<span class="ux4g-icon-outlined" aria-hidden="true">arrow_back</span>
						Back
					</button>
					<div class="ux4g-d-flex ux4g-flex-column ux4g-ai-center ux4g-stack-gap-s ux4g-mb-l">
						<div class="ux4g-locked-icon-circle">
							<span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
						</div>
						<h2 class="ux4g-heading-m-default ux4g-text-neutral-primary ux4g-text-center">Too many
							incorrect attempts</h2>
					</div>
					<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
						onsubmit="return false;">
						<div class="ux4g-otp ux4g-otp-locked ux4g-w-100" data-ux-otp data-ux-state="locked-out" data-ux-count="6"
							data-ux-no-separator role="group" aria-labelledby="ux4g-otp-col-locked-label" aria-disabled="true">
							<div class="ux4g-otp-group"></div>
							<input class="ux4g-otp-source" type="hidden" placeholder="—" disabled>
							<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
								<span class="ux4g-otp-status">
									<span class="ux4g-icon-outlined" aria-hidden="true">lock</span>
									<span class="ux4g-text-neutral-tertiary">Locked for 28:43</span>
								</span>
								<span class="ux4g-text-link-disabled">Resend OTP</span>
							</div>
						</div>
						<div class="ux4g-alert ux4g-alert-error ux4g-form-alert">
							<i class="ux4g-icon ux4g-alert-icon">error</i>
							<div class="ux4g-alert-content">
								<span class="ux4g-alert-message">Account locked. Please wait for the countdown to
									complete</span>
							</div>
						</div>
					</form>
					<div class="ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s ux4g-mt-l">
						<span class="ux4g-body-s-default ux4g-text-neutral-secondary">Need help?</span>
						<a href="tel:18001111111" class="ux4g-text-link ux4g-label-l-default">Call 1800-XXX-XXXX</a>
					</div>
		</div>
		<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
			<span class="ux4g-label-m-default">Powered by -</span>
			<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
		</div>
	</div>
`;

/* ================================================================ */
/* CARD_AUTO_UNLOCK                                                       */
/* ================================================================ */
const CARD_AUTO_UNLOCK_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
		<div class="ux4g-form-box">
					<a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span class="ux4g-icon-outlined ux4g-fs-14" data-ux4g-init="true">arrow_back</span> Back</a>
					<div class="ux4g-alert ux4g-alert-success ux4g-radius-m ux4g-mb-l">
					<i class="ux4g-icon ux4g-alert-icon" data-ux4g-init="true">check_circle</i>
					<div class="ux4g-alert-content">
						<span class="ux4g-alert-message">You can now try signing in again.</span>
					</div>
				</div>
					<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
					<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">Enter the 6-digit code
						sent to +91 98XXX XXXXX</p>
					<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
						onsubmit="return false;">
						<div class="ux4g-otp" data-ux-otp data-ux-count="6" data-ux-no-separator role="group"
							aria-labelledby="ux4g-otp-card-unlock-label">
							<div class="ux4g-otp-group"></div>
							<input class="ux4g-otp-source" type="hidden" placeholder="—">
							<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
								<span class="ux4g-text-neutral-tertiary">Didn't receive OTP?</span>
								<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
									data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
							</div>
						</div>
						<div class="ux4g-form-actions">
							<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify
								OTP</button>
						</div>
					</form>
		</div>
		<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
			<span class="ux4g-label-m-default">Powered by -</span>
			<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
		</div>
	</div>
`;

/* ================================================================ */
/* CARD_SUSPICIOUS                                                       */
/* ================================================================ */
const CARD_SUSPICIOUS_HTML = `
<section class="ux4g-identity-access-container ux4g-mb-4xl">
	<nav class="ux4g-navbar">
		<div class="ux4g-container">
			<div class="ux4g-navbar-wrap">
				<div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
					<img src="../../assets/images/national_emblem.svg" alt="National Emblem" class="ux4g-navbar-logo">
					<span class="ux4g-divider-vertical"></span>
					<img src="../../assets/images/navbar-logo.svg" alt="Logo" class="ux4g-navbar-logo">
					<div class="ux4g-d-flex ux4g-flex-column">
						<span class="ux4g-label-m-strong">Title</span>
						<span class="ux4g-body-xs-default">Description</span>
					</div>
				</div>
				<a href="#" class="ux4g-label-l-default ux4g-text-link-md">Help & Support</a>
			</div>
		</div>
	</nav>
	<!-- Variant: Fluid Layout - Warning -->
	<div class="ux4g-alert ux4g-alert-warning">
		<i class="ux4g-icon ux4g-alert-icon">warning</i>
		<div class="ux4g-alert-content">
			<span class="ux4g-alert-title">Suspicious activity detected</span>
			<span class="ux4g-alert-message">We detected a sign-in from a new device. Please verify your identity before continuing.</span>
		</div>
		<div class="ux4g-alert-actions">
			<button class="ux4g-alert-close">
				<i class="ux4g-icon">close</i>
			</button>
		</div>
	</div>
	<div class="ux4g-identity-access-layout-card ux4g-bg-primary-soft">
		<div class="ux4g-form-box">
					<a href="#" class="ux4g-text-link ux4g-label-l-default ux4g-mb-l ux4g-d-inline-block"><span class="ux4g-icon-outlined ux4g-fs-14" data-ux4g-init="true">arrow_back</span> Back</a>
					<!-- Warning Alert Block -->
					<div class="ux4g-alert ux4g-alert-warning ux4g-form-alert ux4g-mb-m">
						<i class="ux4g-icon-outlined ux4g-alert-icon">error</i>
						<div class="ux4g-form-alert-body">
							<span class="ux4g-alert-message ux4g-body-s-strong">Suspicious activity detected</span>
							<div class="ux4g-form-alert-footer ux4g-d-flex ux4g-ai-center ux4g-jc-between">
								<span class="ux4g-text-warning">We detected a sign-in from a new device. Please verify your identity before
									continuing.</span>
							</div>
						</div>
					</div>
					<h2 class="ux4g-heading-l-default ux4g-text-neutral-primary ux4g-mb-xs">OTP Verification</h2>
					<p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-mb-2xl">A verification code has
						been sent to your registered number for security verification.</p>
					<form class="ux4g-signin-form ux4g-d-flex ux4g-flex-column ux4g-stack-gap-l"
						onsubmit="return false;">
						<div class="ux4g-otp" data-ux-otp data-ux-count="6" data-ux-no-separator role="group"
							aria-labelledby="ux4g-otp-card-suspicious-label">
							<div class="ux4g-otp-group"></div>
							<input class="ux4g-otp-source" type="hidden" placeholder="—">
							<div class="ux4g-otp-meta ux4g-otp-meta-between ux4g-body-s-default" aria-live="polite">
								<span class="ux4g-text-neutral-tertiary">Didn't receive OTP?</span>
								<span class="ux4g-otp-resend ux4g-otp-resend-disabled" data-ux-otp-timer
									data-ux-otp-prefix="Resend in " data-ux-otp-seconds="17">Resend in 00:17</span>
							</div>
						</div>
						<div class="ux4g-form-actions">
							<button class="ux4g-btn-primary ux4g-btn-lg ux4g-w-100" type="submit">Verify
								OTP</button>
						</div>
					</form>
		</div>
		<div class="ux4g-form-footer ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-inline-gap-s">
			<span class="ux4g-label-m-default">Powered by -</span>
			<img src="./assets/images/dic.svg" alt="Digital India" class="ux4g-dept-logo">
		</div>
	</div>
`;

export const Column = {
    name: 'Column Layout',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Auth Pattern - Column Layout', 'Column layout variants for authentication errors and lockout flows.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('auth-column-1', 'OTP Verification (Error)', '', COLUMN_OTP_ERROR_HTML)}
                ${renderDemoCodeBlock('auth-column-2', 'First Attempt (Error)', '', COLUMN_FIRST_ATTEMPT_HTML)}
                ${renderDemoCodeBlock('auth-column-3', 'Final Attempt (Critical Error)', '', COLUMN_FINAL_ATTEMPT_HTML)}
                ${renderDemoCodeBlock('auth-column-4', 'Locked', '', COLUMN_LOCKED_HTML)}
                ${renderDemoCodeBlock('auth-column-5', 'Auto Unlock', '', COLUMN_AUTO_UNLOCK_HTML)}
                ${renderDemoCodeBlock('auth-column-6', 'Suspicious Activity', '', COLUMN_SUSPICIOUS_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const FullScreen = {
    name: 'Fullscreen Layout',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Auth Pattern - Fullscreen Layout', 'Fullscreen layout variants for authentication errors and lockout flows.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('auth-fullscreen-1', 'OTP Verification (Error)', '', FULLSCREEN_OTP_ERROR_HTML)}
                ${renderDemoCodeBlock('auth-fullscreen-2', 'First Attempt (Error)', '', FULLSCREEN_FIRST_ATTEMPT_HTML)}
                ${renderDemoCodeBlock('auth-fullscreen-3', 'Final Attempt (Critical Error)', '', FULLSCREEN_FINAL_ATTEMPT_HTML)}
                ${renderDemoCodeBlock('auth-fullscreen-4', 'Locked', '', FULLSCREEN_LOCKED_HTML)}
                ${renderDemoCodeBlock('auth-fullscreen-5', 'Auto Unlock', '', FULLSCREEN_AUTO_UNLOCK_HTML)}
                ${renderDemoCodeBlock('auth-fullscreen-6', 'Suspicious Activity', '', FULLSCREEN_SUSPICIOUS_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

export const Card = {
    name: 'Card Layout',
    render: () => `
        <div class="ux4g-bg-neutral-soft ux4g-min-h-screen">
            ${getHeroHeader('Auth Pattern - Card Layout', 'Card layout variants for authentication errors and lockout flows.')}
            <div class="ux4g-p-m">
                ${renderDemoCodeBlock('auth-card-1', 'OTP Verification (Error)', '', CARD_OTP_ERROR_HTML)}
                ${renderDemoCodeBlock('auth-card-2', 'First Attempt (Error)', '', CARD_FIRST_ATTEMPT_HTML)}
                ${renderDemoCodeBlock('auth-card-3', 'Final Attempt (Critical Error)', '', CARD_FINAL_ATTEMPT_HTML)}
                ${renderDemoCodeBlock('auth-card-4', 'Locked', '', CARD_LOCKED_HTML)}
                ${renderDemoCodeBlock('auth-card-5', 'Auto Unlock', '', CARD_AUTO_UNLOCK_HTML)}
                ${renderDemoCodeBlock('auth-card-6', 'Suspicious Activity', '', CARD_SUSPICIOUS_HTML)}
            </div>
        </div>
    `,
    parameters: { docs: { disable: true } },
};

