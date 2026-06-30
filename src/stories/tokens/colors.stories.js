/**
 * Colors.stories.js
 *
 * Foundational color palette for UX4G Design System.
 * This file presents the raw tokens in a visual, documentation-first format.
 * Dynamic values are read directly from the CSS variables to ensure accuracy.
 */

const colorScales = [
  {
    category: 'Primary',
    prefix: '--ux4g-color-primary-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'The main brand color used for primary actions and key interface elements.'
  },
  {
    category: 'Secondary',
    prefix: '--ux4g-color-secondary-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Supporting brand color used for accents and variety.'
  },
  {
    category: 'Tertiary',
    prefix: '--ux4g-color-tertiary-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Supplementary colors for varied visual expressions.'
  },
  {
    category: 'Neutral',
    prefix: '--ux4g-color-neutral-',
    steps: ['0', '50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950', '1000'],
    description: 'Grays used for surfaces, borders, and typography hierarchy.'
  },
  {
    category: 'Success (Green)',
    prefix: '--ux4g-color-green-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Used to indicate positive actions, completion, or successful states.'
  },
  {
    category: 'Error (Red)',
    prefix: '--ux4g-color-red-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Used to indicate danger, critical issues, or failed states.'
  },
  {
    category: 'Info (Cyan)',
    prefix: '--ux4g-color-cyan-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Used to highlight important information or neutral notifications.'
  },
  {
    category: 'Warning (Orange)',
    prefix: '--ux4g-color-orange-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Used to warn users of potential issues or items that require attention.'
  },
  {
    category: 'Blue',
    prefix: '--ux4g-color-blue-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Professional accent colors for varied UI components.'
  },
  {
    category: 'Sky Blue',
    prefix: '--ux4g-color-skyblue-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Vibrant blue variations for high-contrast accents.'
  },
  {
    category: 'Lime',
    prefix: '--ux4g-color-lime-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Fresh, bright accents for modern interface elements.'
  },
  {
    category: 'Yellow',
    prefix: '--ux4g-color-yellow-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'High-visibility colors for focal points and attention-grabbing items.'
  },
  {
    category: 'Gold',
    prefix: '--ux4g-color-gold-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Premium accents for special highlights and status indicators.'
  },
  {
    category: 'Purple',
    prefix: '--ux4g-color-purple-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Sophisticated accent color for varied branding and UI elements.'
  },
  {
    category: 'Pink',
    prefix: '--ux4g-color-pink-',
    steps: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950'],
    description: 'Vibrant decorative accents for expressive interface designs.'
  }
];

export default {
  title: 'UX4G/Tokens/Colors',
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    docs: {
      source: { code: null },
      canvas: {
        sourceState: 'none',
      },
    },
  },
};

/**
 * Helper to convert RGB to HEX for display
 */
const rgbToHex = (rgb) => {
  if (!rgb) return '';
  const match = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  if (!match) return rgb;
  const r = parseInt(match[1]);
  const g = parseInt(match[2]);
  const b = parseInt(match[3]);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
};

const renderColorGrid = (steps, prefix) => `
  <div class="ux4g-d-grid ux4g-grid-auto-fit-200 ux4g-gap-m">
    ${steps.map(step => {
      const varName = `${prefix}${step}`;
      const displayName = varName.replace('--ux4g-color-', '');
      return `
        <div class="token-card ux4g-radius-m ux4g-border ux4g-border-neutral-subtle ux4g-bg-neutral-elevated ux4g-o-hidden ux4g-shadow-l1 ux4g-cursor-pointer"
             role="button"
             tabindex="0"
             aria-label="Copy ${displayName} HEX value"
             data-token="${varName}">
          <div class="swatch ux4g-relative ux4g-d-flex ux4g-ai-center ux4g-jc-center ux4g-hpx-100">
             <span class="hex-label ux4g-label-s-strong ux4g-opacity-90"></span>
          </div>
          <div class="token-info ux4g-p-s">
            <div class="ux4g-d-flex ux4g-jc-between ux4g-ai-center ux4g-my-m">
              <span class="ux4g-label-m-strong">${step}</span>
              <span class="copy-hint ux4g-label-s-strong ux4g-text-primary ux4g-d-flex ux4g-ai-center ux4g-gap-xs">
                <span class="ux4g-icon-outlined ux4g-fs-16 ux4g-text-primary" aria-hidden="true">content_copy</span>
              </span>
            </div>
            <code class="var-name ux4g-body-xs-default ux4g-text-neutral-secondary ux4g-d-block ux4g-text-truncate">${displayName}</code>
          </div>
        </div>
      `;
    }).join('')}
  </div>
`;

export const Palette = {
  render: () => {
    const container = document.createElement('div');
    container.className = 'ux4g-container ux4g-py-l';

    container.innerHTML = colorScales.map(scale => {
      return `
        <div class="palette-section ux4g-mb-3xl">
          <div class="section-header ux4g-bb ux4g-border-neutral-subtle ux4g-pb-m ux4g-mb-xl">
            <h2 class="ux4g-heading-xl-strong ux4g-my-m">${scale.category}</h2>
            <p class="ux4g-body-m-default ux4g-text-neutral-secondary">${scale.description}</p>
          </div>
          ${renderColorGrid(scale.steps, scale.prefix)}
        </div>
      `;
    }).join('');

    /**
     * Logic to fill hex values dynamically after rendering
     */
    setTimeout(() => {
      const cards = container.querySelectorAll('.token-card');
      cards.forEach(card => {
        const swatch = card.querySelector('.swatch');
        const label = card.querySelector('.hex-label');
        const token = card.getAttribute('data-token');

        swatch.style.backgroundColor = `var(${token})`;

        // Read the actual color from the computed style
        const rgb = window.getComputedStyle(swatch).backgroundColor;
        const hex = rgbToHex(rgb);
        label.textContent = hex;
        card.setAttribute('data-hex', hex); // Store hex for easy copying
        card.addEventListener('click', () => {
          navigator.clipboard.writeText(card.getAttribute('data-hex') || token);
        });
        card.addEventListener('keydown', (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            navigator.clipboard.writeText(card.getAttribute('data-hex') || token);
          }
        });

        // Smart contrast for label
        const rgbMatch = rgb.match(/\d+/g);
        if (rgbMatch) {
          const brightness = (parseInt(rgbMatch[0]) * 299 + parseInt(rgbMatch[1]) * 587 + parseInt(rgbMatch[2]) * 114) / 1000;
          label.classList.add(brightness > 128 ? 'ux4g-text-black' : 'ux4g-text-white');
        }
      });
    }, 100);

    return container;
  },
};
