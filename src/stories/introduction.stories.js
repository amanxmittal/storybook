const BRAND = {
  name: 'UX4G Design System',
  tagline: 'Government-grade UI foundations for trusted public digital experiences.',
  description:
    'UX4G gives product, design, and engineering teams one coherent system for building accessible, consistent, and scalable citizen-facing services.',
  website: 'https://www.ux4g.gov.in',
  logo: 'https://www.ux4g.gov.in/assets/img/logo/ux4g-logo.svg',
  version: 'v3.0 beta',
};

const featureItems = [
  {
    icon: 'account_tree',
    title: 'Scalable Architecture',
    description:
      'A structured system of foundations, patterns, and components that can scale across ministries, vendors, and service teams.',
    tone: 'ux4g-bg-primary-soft ux4g-text-primary',
  },
  {
    icon: 'accessibility_new',
    title: 'Accessible Components',
    description:
      'Interaction patterns are designed for clarity, contrast, keyboard use, and dependable public-facing experiences.',
    tone: 'ux4g-bg-success-soft ux4g-text-success',
  },
  {
    icon: 'palette',
    title: 'Token-Driven Design',
    description:
      'Color, typography, spacing, and elevation are governed through reusable tokens that keep every experience aligned.',
    tone: 'ux4g-bg-warning-soft ux4g-text-warning',
  },
  {
    icon: 'code',
    title: 'Developer Friendly',
    description:
      'Composable utilities, production-ready components, and Storybook documentation reduce friction from exploration to delivery.',
    tone: 'ux4g-bg-info-soft ux4g-text-info',
  },
];

const tokenItems = [
  {
    label: 'Primary',
    value: 'Background Utility',
    textClass: 'ux4g-text-white',
    bgClass: 'ux4g-bg-primary-stronger',
  },
  {
    label: 'Secondary',
    value: 'Background Utility',
    textClass: 'ux4g-text-neutral-primary',
    bgClass: 'ux4g-bg-secondary-strong',
  },
  {
    label: 'Tertiary',
    value: 'Background Utility',
    textClass: 'ux4g-text-neutral-primary',
    bgClass: 'ux4g-bg-tertiary-strong',
  },
  {
    label: 'Neutral',
    value: 'Background Utility',
    textClass: 'ux4g-text-white',
    bgClass: 'ux4g-bg-neutral-stronger',
  },
];

const categoryItems = [
  {
    icon: 'widgets',
    title: 'Components',
    description:
      'Form controls, navigation, feedback, and layout primitives designed for real government workflows.',
    points: ['Production-ready UI building blocks', 'Interactive states documented in Storybook', 'Consistent anatomy across surfaces'],
    tone: 'ux4g-bg-primary-soft ux4g-text-primary',
  },
  {
    icon: 'tune',
    title: 'Tokens',
    description:
      'Core design decisions captured as reusable color, typography, spacing, and semantic values.',
    points: ['Brand and neutral palettes', 'Semantic mappings for surfaces and states', 'A shared source of truth for scale'],
    tone: 'ux4g-bg-secondary-soft ux4g-text-secondary',
  },
  {
    icon: 'view_quilt',
    title: 'Utilities',
    description:
      'Layout, spacing, border, shadow, and background helpers that make composition fast and predictable.',
    points: ['Responsive grid utilities', 'Spacing and radius shortcuts', 'Surface and elevation helpers'],
    tone: 'ux4g-bg-success-soft ux4g-text-success',
  },
  {
    icon: 'dashboard_customize',
    title: 'Patterns',
    description:
      'Reusable block-level compositions like headers, footers, and complex forms used across applications.',
    points: ['Pre-built structural blocks', 'Streamlined composition', 'Accelerated feature delivery'],
    tone: 'ux4g-bg-warning-soft ux4g-text-warning',
  },
  {
    icon: 'web',
    title: 'Archetypes',
    description:
      'Full-page templates and standard layouts tailored for citizen-facing digital services.',
    points: ['Ready-to-use page layouts', 'Consistent user journeys', 'End-to-end service templates'],
    tone: 'ux4g-bg-info-soft ux4g-text-info',
  },
];

const heroSignals = [
  { value: '50+', label: 'Reusable components' },
  { value: '1K+', label: 'Design tokens' },
  { value: '10+', label: 'Patterns & Archetypes' },
  { value: 'AA', label: 'Accessibility target' },
];



/**
 * Storybook generates story IDs by sanitizing the title (kind) and story name.
 * This mirrors the exact sanitize() from @storybook/csf so links navigate correctly.
 */
const sanitize = (string) => {
  return string
    .toLowerCase()
    .replace(/[ ’–—―]/g, ' ')
    .replace(/[!?.&,:;'()@"<>\[\]#$^*~\/]/g, '-')
    .replace(/[ -]+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
    .replace(/[^a-zA-Z0-9-]/g, '');
};

const toStoryPath = (kind, storyName) => `?path=/story/${sanitize(kind)}--${sanitize(storyName)}`;

/**
 * Storybook renders stories inside an iframe. Plain links navigate the iframe,
 * hiding the sidebar. target="_top" navigates the top-level parent window where
 * Storybook's UI (sidebar + toolbar) lives, keeping everything visible.
 */
const storyNavLink = (href, classes, content) =>
  `<a href="${href}" target="_top" class="${classes}">${content}</a>`;

/**
 * Map of display names to actual Storybook story titles.
 * Some component titles differ from their sidebar label (e.g. "Button" → "Buttons").
 */
const componentMap = Object.fromEntries([
  ['Accessibility Bar', 'UX4G/Components/Accessibility Bar'],
  ['Accordion', 'UX4G/Components/Accordion'],
  ['Alert', 'UX4G/Components/Alert'],
  ['Avatar', 'UX4G/Components/Avatar'],
  ['Badge', 'UX4G/Components/Badge'],
  ['Breadcrumb', 'UX4G/Components/Breadcrumb'],
  ['Button', 'UX4G/Components/Buttons'],
  ['Card', 'UX4G/Components/Card'],
  ['Card Header', 'UX4G/Components/Card/Header'],
  ['Card Body', 'UX4G/Components/Card/Body'],
  ['Card Footer', 'UX4G/Components/Card/Footer'],
  ['Carousel', 'UX4G/Components/Carousel'],
  ['Checkbox', 'UX4G/Components/Checkbox'],
  ['Chip', 'UX4G/Components/Chips'],
  ['Chips Group', 'UX4G/Components/Chip Group'],
  ['Combobox', 'UX4G/Components/Combobox'],
  ['Date Time', 'UX4G/Components/Date Picker'],
  ['Dividers', 'UX4G/Components/Divider'],
  ['Draft Status Bar', 'UX4G/Components/Draft Status'],
  ['Drawer', 'UX4G/Components/Drawer'],
  ['Drawer Header', 'UX4G/Components/Drawer/Header'],
  ['Drawer Body', 'UX4G/Components/Drawer/Body'],
  ['Drawer Footer', 'UX4G/Components/Drawer/Footer'],
  ['Dropdown', 'UX4G/Components/Dropdown'],
  ['Empty State', 'UX4G/Components/Empty State'],
  ['Feedback', 'UX4G/Components/Feedback'],
  ['Footer', 'UX4G/Components/Footer'],
  ['Form Field Group', 'UX4G/Components/Form Field'],
  ['Image', 'UX4G/Components/Image'],
  ['Input', 'UX4G/Components/Input'],
  ['Journey Timeline', 'UX4G/Components/Journey Timeline'],
  ['Links', 'UX4G/Components/Link'],
  ['List', 'UX4G/Components/List'],
  ['Mega Menu', 'UX4G/Components/Mega Menu'],
  ['Modal', 'UX4G/Components/Modal'],
  ['Modal Header', 'UX4G/Components/Modal/Header'],
  ['Modal Body', 'UX4G/Components/Modal/Body'],
  ['Modal Footer', 'UX4G/Components/Modal/Footer'],
  ['Navbar', 'UX4G/Components/Navbar'],
  ['Otp', 'UX4G/Components/Input-OTP'],
  ['Pagination', 'UX4G/Components/Pagination'],
  ['Popover', 'UX4G/Components/Popover'],
  ['Progress Indicator', 'UX4G/Components/Progress Indicator'],
  ['Radio', 'UX4G/Components/Radio'],
  ['Result List', 'UX4G/Components/Result List'],
  ['Search', 'UX4G/Components/Search'],
  ['Sla Progress Indicator', 'UX4G/Components/Progress SLA Indicator'],
  ['Slider', 'UX4G/Components/Slider'],
  ['Social Link', 'UX4G/Components/Social Link'],
  ['Spinner', 'UX4G/Components/Spinner'],
  ['Status Pipeline', 'UX4G/Components/Status Pipeline'],
  ['Stepper', 'UX4G/Components/Stepper'],
  ['Switch', 'UX4G/Components/Switch'],
  ['Textarea', 'UX4G/Components/Textarea'],
  ['Tab', 'UX4G/Components/Tab'],
  ['Table', 'UX4G/Components/Table'],
  ['Tag', 'UX4G/Components/Tags'],
  ['Time Slot', 'UX4G/Components/Time Slot'],
  ['Tooltip', 'UX4G/Components/Tooltip'],
  ['Upload', 'UX4G/Components/File Upload'],
]);

const semanticTones = [
  'ux4g-bg-neutral-elevated', 'ux4g-bg-neutral', 'ux4g-bg-neutral-soft', 'ux4g-bg-neutral-subtle', 'ux4g-bg-neutral-emphasis', 'ux4g-bg-neutral-strong', 'ux4g-bg-neutral-stronger',
  'ux4g-bg-primary', 'ux4g-bg-primary-soft', 'ux4g-bg-primary-subtle', 'ux4g-bg-primary-emphasis', 'ux4g-bg-primary-strong', 'ux4g-bg-primary-stronger',
  'ux4g-bg-secondary', 'ux4g-bg-secondary-soft', 'ux4g-bg-secondary-subtle', 'ux4g-bg-secondary-emphasis', 'ux4g-bg-secondary-strong', 'ux4g-bg-secondary-stronger',
  'ux4g-bg-tertiary', 'ux4g-bg-tertiary-soft', 'ux4g-bg-tertiary-subtle', 'ux4g-bg-tertiary-emphasis', 'ux4g-bg-tertiary-strong', 'ux4g-bg-tertiary-stronger',
  'ux4g-bg-success', 'ux4g-bg-success-soft', 'ux4g-bg-success-subtle', 'ux4g-bg-success-emphasis', 'ux4g-bg-success-strong',
  'ux4g-bg-error', 'ux4g-bg-error-soft', 'ux4g-bg-error-subtle', 'ux4g-bg-error-emphasis', 'ux4g-bg-error-strong', 'ux4g-bg-error-stronger',
  'ux4g-bg-warning', 'ux4g-bg-warning-soft', 'ux4g-bg-warning-subtle', 'ux4g-bg-warning-emphasis', 'ux4g-bg-warning-strong',
  'ux4g-bg-info', 'ux4g-bg-info-soft', 'ux4g-bg-info-subtle', 'ux4g-bg-info-emphasis', 'ux4g-bg-info-strong'
];

const renderSectionIntro = (eyebrow, title, description) => `
  <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m ux4g-mb-2xl">
    <span class="ux4g-tag-filled-primary ux4g-w-fit">${eyebrow}</span>
    <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
      <h2 class="ux4g-heading-xl-strong">${title}</h2>
      <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-max-w-700">${description}</p>
    </div>
  </div>
`;

const renderHeroSignals = () =>
  heroSignals
    .map(
      ({ value, label }) => `
        <div class="ux4g-bg-tertiary-subtle ux4g-border ux4g-border-tertiary-subtle ux4g-radius-m ux4g-p-m">
          <div class="ux4g-heading-l-strong ux4g-text-neutral-primary">${value}</div>
          <div class="ux4g-body-s-default ux4g-text-neutral-secondary">${label}</div>
        </div>
      `
    )
    .join('');

const renderFeatureCards = () =>
  featureItems
    .map(
      ({ icon, title, description, tone }) => {
        const bgTone = tone.split(' ')[0];
        const strongTone = bgTone.replace('-soft', '-strong');
        return `
        <article class="ux4g-card ux4g-card-solid ux4g-o-hidden ux4g-shadow-m ux4g-transition-all hover:ux4g-shadow-l ${bgTone}">
          <div class="ux4g-card-body ux4g-flex-col">
            <div class="ux4g-icon-btn ux4g-icon-btn-pill ux4g-icon-btn-l ${strongTone} ux4g-shadow-s ux4g-mb-m" style="cursor: default;">
              <i class="ux4g-icon-outlined">${icon}</i>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
              <h3 class="ux4g-heading-s-strong">${title}</h3>
              <p class="ux4g-body-s-default ux4g-text-neutral-secondary">${description}</p>
            </div>
          </div>
        </article>
      `}
    )
    .join('');

const renderTokenPreview = () =>
  tokenItems
    .map(
      ({ label, token, value, textClass, bgClass }) => `
        <div class="ux4g-card ux4g-card-outline ux4g-o-hidden ux4g-shadow-m ux4g-transition-all hover:ux4g-shadow-l">
          <div class="${bgClass} ux4g-d-flex ux4g-flex-col ux4g-jc-end ux4g-stack-gap-2xs ux4g-p-l ux4g-pt-3xl">
            <div class="ux4g-label-s-strong ${textClass}">${label}</div>
            <div class="ux4g-body-xs-default ${textClass}">${value}</div>
          </div>
          <div class="ux4g-card-body ux4g-flex-col">
            <div class="ux4g-body-s-strong">${label}</div>
          </div>
        </div>
      `
    )
    .join('');

const renderCategoryCards = () =>
  categoryItems
    .map(
      ({ icon, title, description, points, tone }) => {
        const bgTone = tone.split(' ')[0];
        const strongTone = bgTone.replace('-soft', '-strong');
        return `
        <article class="ux4g-card ux4g-card-outline ux4g-o-hidden ux4g-shadow-m ux4g-transition-all hover:ux4g-shadow-l ${bgTone}">
          <div class="ux4g-card-body ux4g-flex-col">
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s ux4g-mb-s">
              <div class="ux4g-icon-btn ux4g-icon-btn-pill ux4g-icon-btn-l ${strongTone} ux4g-shadow-s">
                <i class="ux4g-icon-outlined">${icon}</i>
              </div>
              <h3 class="ux4g-heading-s-strong">${title}</h3>
            </div>
            <p class="ux4g-body-s-default ux4g-text-neutral-secondary">${description}</p>
            <ul class="ux4g-pl-xl ux4g-m-none ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs" style="list-style-type: disc;">
              ${points.map((point) => `<li class="ux4g-body-s-default ux4g-text-neutral-primary">${point}</li>`).join('')}
            </ul>
          </div>
        </article>
      `}
    )
    .join('');

const getHeroSection = () => `
  <section class="ux4g-bg-primary-emphasis ux4g-py-2xl ux4g-shadow-l">
    <div class="ux4g-container">
      <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-lg-12 ux4g-gap-l ux4g-ai-center">
        <div class="ux4g-span-lg-6 ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l">
          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-xs">
            <span class="ux4g-tag-filled-secondary">${BRAND.version}</span>
            <span class="ux4g-tag-filled-success">Design + code + governance</span>
          </div>

          <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-m">
            <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
              <img src="${BRAND.logo}" alt="UX4G logo" height="40" />
              <span class="ux4g-label-l-strong ux4g-text-neutral-primary">UX4G</span>
            </div>
            <h1 class="ux4g-display-s-strong ux4g-text-neutral-primary">${BRAND.name}</h1>
            <p class="ux4g-body-l-default ux4g-text-neutral-secondary ux4g-max-w-700">${BRAND.tagline}</p>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary ux4g-max-w-700">${BRAND.description}</p>
          </div>

          <div class="ux4g-d-flex ux4g-wrap ux4g-gap-s">
            ${storyNavLink(toStoryPath('UX4G/Components/Accessibility Bar', 'Introduction'), 'ux4g-btn-primary ux4g-btn-lg ux4g-text-decoration-none', 'Explore Components')}
            ${storyNavLink(toStoryPath('UX4G/Tokens/Colors', 'Palette'), 'ux4g-btn-outline-primary ux4g-btn-lg ux4g-text-decoration-none', 'View Tokens')}
          </div>
        </div>

        <div class="ux4g-span-lg-6">
          <div class="ux4g-bg-neutral-subtle ux4g-border ux4g-border-neutral-subtle ux4g-radius-l ux4g-p-xl ux4g-d-flex ux4g-flex-col ux4g-stack-gap-l ux4g-shadow-l">
            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-xs">
              <span class="ux4g-tag-filled-success ux4g-w-fit">System overview</span>
              <h2 class="ux4g-heading-l-strong ux4g-text-neutral-primary">One platform for consistent public service journeys.</h2>
              <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
                Start from shared tokens, move into reusable components, and document delivery paths in one place.
              </p>
            </div>

            <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-gap-s">
              ${renderHeroSignals()}
            </div>

            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
              <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-pb-xs ux4g-bb ux4g-border-neutral-subtle">
                <span class="ux4g-body-s-strong ux4g-text-neutral-primary">Utilities</span>
                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Layouts, helpers, grids</span>
              </div>
              <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-pb-xs ux4g-bb ux4g-border-neutral-subtle">
                <span class="ux4g-body-s-strong ux4g-text-neutral-primary">Components</span>
                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Inputs, buttons, cards</span>
              </div>
              <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-pb-xs ux4g-bb ux4g-border-neutral-subtle">
                <span class="ux4g-body-s-strong ux4g-text-neutral-primary">Patterns</span>
                <span class="ux4g-body-s-default ux4g-text-neutral-secondary">Headers, footers, forms</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const getFeatureSection = () => `
  <section class="ux4g-container ux4g-py-2xl">
    ${renderSectionIntro(
  'Core strengths',
  'Built for design systems that need to scale beyond one product team.',
  'UX4G combines visual consistency, engineering pragmatism, and accessibility expectations into a single documentation experience.'
)}
    <div class="ux4g-d-grid ux4g-grid-auto-fit-400 ux4g-gap-m">
      ${renderFeatureCards()}
    </div>
  </section>
`;


const renderAllComponentsPills = () =>
  Object.entries(componentMap)
    .map(([name, title], index) => {
      const tone = semanticTones[index % semanticTones.length];
      // Every component has an "Introduction" export → story name is always "introduction"
      const path = toStoryPath(title, 'Introduction');
      const classes = `${tone} ux4g-radius-full ux4g-px-m ux4g-py-xs ux4g-body-s-strong ux4g-text-decoration-none ux4g-transition-all hover:ux4g-shadow-s ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center`;
      return storyNavLink(path, classes, name);
    })
    .join('');

const getComponentShowcaseSection = () => `
  <section class="ux4g-container ux4g-py-2xl">
    ${renderSectionIntro(
  'Components',
  'The complete component library.',
  'Over 50+ highly customizable and accessible components ready for use.'
)}
    <div class="ux4g-d-grid ux4g-grid-cols-2 ux4g-grid-cols-lg-4 ux4g-gap-s">
      ${renderAllComponentsPills()}
    </div>
  </section>
`;

const showcasePatterns = [
  { name: 'Application & Submission', icon: 'assignment', kind: 'UX4G/Patterns/Application & Submission/Submission Acknowledgement', storyName: 'Full Screen', tone: 'ux4g-bg-primary-soft ux4g-text-primary' },
  { name: 'Consent & Declaration', icon: 'verified_user', kind: 'UX4G/Patterns/Consent & Declaration/Manage Data Sharing Consents', storyName: 'Manage Data Sharing Consents - Full Screen', tone: 'ux4g-bg-success-soft ux4g-text-success' },
  { name: 'Dashboard & My Applications', icon: 'dashboard', kind: 'UX4G/Patterns/Dashboard & My Applications/Profile & Preferences', storyName: 'Profile & Preferences', tone: 'ux4g-bg-warning-soft ux4g-text-warning' },
  { name: 'Feedback & Communication', icon: 'forum', kind: 'UX4G/Patterns/Feedback & Communication/Feedback Submitted', storyName: 'Feedback Submitted', tone: 'ux4g-bg-info-soft ux4g-text-info' },
  { name: 'Identity & Access', icon: 'vpn_key', kind: 'UX4G/Patterns/Identity & Access/Sign In', storyName: 'Column', tone: 'ux4g-bg-secondary-soft ux4g-text-secondary' },
  { name: 'Notifications', icon: 'notifications', kind: 'UX4G/Patterns/Notifications/Notification Centre', storyName: 'Introduction', tone: 'ux4g-bg-tertiary-soft ux4g-text-tertiary' },
  { name: 'Payment & Transactions', icon: 'payments', kind: 'UX4G/Patterns/Payment & Transactions/Payment Confirmation', storyName: 'Full Screen', tone: 'ux4g-bg-primary-soft ux4g-text-primary' },
  { name: 'Search & Discovery', icon: 'search', kind: 'UX4G/Patterns/Search & Discovery/Appointment Confirmed', storyName: 'Column', tone: 'ux4g-bg-success-soft ux4g-text-success' },
  { name: 'Status Tracker', icon: 'timeline', kind: 'UX4G/Patterns/Status Tracker/Application Tracker', storyName: 'Column', tone: 'ux4g-bg-warning-soft ux4g-text-warning' }
];

const renderPatternCards = () =>
  showcasePatterns
    .map(
      ({ name, icon, kind, storyName, tone }) => {
        const bgTone = tone.split(' ')[0];
        const strongTone = bgTone.replace('-soft', '-strong');
        const path = toStoryPath(kind, storyName);
        const classes = `ux4g-card ux4g-card-outline ux4g-o-hidden ux4g-shadow-m ux4g-transition-all hover:ux4g-shadow-l ux4g-text-decoration-none ${bgTone}`;
        const content = `
          <div class="ux4g-card-body ux4g-flex-col ux4g-ai-center ux4g-jc-center ux4g-stack-gap-s ux4g-p-l">
            <div class="ux4g-icon-btn ux4g-icon-btn-pill ux4g-icon-btn-l ${strongTone} ux4g-shadow-s ux4g-mb-2xs">
              <i class="ux4g-icon-outlined">${icon}</i>
            </div>
            <div class="ux4g-body-m-strong ux4g-text-neutral-primary ux4g-text-center">${name}</div>
          </div>`;
        return storyNavLink(path, classes, content);
      }
    )
    .join('');

const getPatternShowcaseSection = () => `
  <section class="ux4g-container ux4g-py-2xl">
    ${renderSectionIntro(
  'Patterns',
  'Commonly used page compositions.',
  'A collection of robust, production-ready templates for the most frequent government-citizen interactions.'
)}
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-sm-2 ux4g-grid-cols-lg-3 ux4g-gap-m">
      ${renderPatternCards()}
    </div>
  </section>
`;

const getGettingStartedSection = () => `
  <section class="ux4g-container ux4g-py-2xl">
    <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-gap-l ux4g-ai-start">
      <div class="ux4g-span-lg-12">
        ${renderSectionIntro(
  'Getting started',
  'Adopt UX4G with a minimal setup and one clear component example.',
  'Use the shared stylesheet, compose with utilities, and start from production-ready components documented directly in Storybook.'
)}
        <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
            <div class="ux4g-bg-primary-soft ux4g-text-primary ux4g-radius-full ux4g-p-s ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
              <i class="ux4g-icon-outlined ux4g-fs-18">download</i>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
              <div class="ux4g-body-s-strong">Load the stylesheet</div>
              <div class="ux4g-body-s-default ux4g-text-neutral-secondary">
                Bring UX4G foundations, components, and utilities into your page.
              </div>
            </div>
          </div>

          <div class="ux4g-d-flex ux4g-ai-start ux4g-inline-gap-s">
            <div class="ux4g-bg-secondary-soft ux4g-text-secondary ux4g-radius-full ux4g-p-s ux4g-d-inline-flex ux4g-ai-center ux4g-jc-center">
              <i class="ux4g-icon-outlined ux4g-fs-18">check_box</i>
            </div>
            <div class="ux4g-d-flex ux4g-flex-col ux4g-stack-gap-2xs">
              <div class="ux4g-body-s-strong">Compose from documented parts</div>
              <div class="ux4g-body-s-default ux4g-text-neutral-secondary">
                Every component story shows anatomy, variants, and implementation detail in one place.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

const getTokenPreviewSection = () => `
  <section class="ux4g-container ux4g-py-2xl">
    ${renderSectionIntro(
  'Token preview',
  'A quick look at the palette that drives the UX4G surface language.',
  'Primary and secondary accents pair with a neutral foundation to support professional, trustworthy interfaces.'
)}
    <div class="ux4g-d-grid ux4g-grid-auto-fit-400 ux4g-gap-m">
      ${renderTokenPreview()}
    </div>
  </section>
`;

const getCategorySection = () => `
  <section class="ux4g-container ux4g-py-2xl">
    ${renderSectionIntro(
  'Library map',
  'Navigate the design system through the same categories shown in the Storybook sidebar.',
  'Components, tokens, and utilities are organized to help teams move from exploration to implementation without losing context.'
)}
    <div class="ux4g-d-grid ux4g-grid-auto-fit-300 ux4g-gap-m">
      ${renderCategoryCards()}
    </div>
  </section>
`;

const getFooterSection = () => `
  <footer class="ux4g-bg-neutral-subtle ux4g-py-xl">
    <div class="ux4g-container">
      <div class="ux4g-d-grid ux4g-grid-cols-1 ux4g-grid-cols-lg-12 ux4g-gap-l ux4g-ai-center">
        <div class="ux4g-span-lg-6 ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <div class="ux4g-d-flex ux4g-ai-center ux4g-inline-gap-s">
            <img src="${BRAND.logo}" alt="UX4G logo" height="24" />
            <span class="ux4g-label-l-strong ux4g-text-neutral-primary">${BRAND.name}</span>
          </div>
          <p class="ux4g-body-m-default ux4g-text-neutral-secondary">
            A shared platform for accessible, consistent, and reliable public digital products.
          </p>
        </div>
        <div class="ux4g-span-lg-6 ux4g-d-flex ux4g-flex-col ux4g-stack-gap-s">
          <a class="ux4g-text-link-sm" href="${BRAND.website}" target="_blank" rel="noreferrer">Visit ${BRAND.website}</a>
          <p class="ux4g-body-s-default ux4g-text-neutral-secondary">${BRAND.version} • Documentation preview inside Storybook</p>
        </div>
      </div>
    </div>
  </footer>
`;

const getOverviewPage = () => `
  <div class="ux4g-min-h-screen ux4g-text-neutral-primary">
    ${getHeroSection()}
    ${getComponentShowcaseSection()}
    ${getPatternShowcaseSection()}
    ${getFeatureSection()}
    ${getGettingStartedSection()}
    ${getTokenPreviewSection()}
    ${getCategorySection()}
    ${getFooterSection()}
  </div>
`;

export default {
  title: 'Getting Started/Introduction',
  parameters: {
    layout: 'fullscreen',
    options: { showPanel: false },
    docs: { autodocs: false },
  },
};

export const Overview = {
  name: 'Introduction',
  render: () => getOverviewPage(),
};

Overview.parameters = {
  docs: { disable: true },
};
