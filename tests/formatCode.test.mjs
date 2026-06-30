import test from 'node:test';
import assert from 'node:assert/strict';

import { htmlToJsx } from '../src/stories/utils/formatCode.js';

test('htmlToJsx converts comments, standard attributes, events, numbers, and booleans', () => {
  const html = `
<!-- Section -->
<label class="field" for="email" tabindex="0">
  <input checked disabled maxlength="6" minlength="2" autocomplete="off" onfocus="focusField()" onchange="changeField()" />
</label>
  `.trim();

  const jsx = htmlToJsx(html, 'Field');

  assert.match(jsx, /\{\/\* Section \*\/\}/);
  assert.match(jsx, /className="field"/);
  assert.match(jsx, /htmlFor="email"/);
  assert.match(jsx, /tabIndex=\{0\}/);
  assert.match(jsx, /defaultChecked/);
  assert.match(jsx, /\sdisabled(?=[\s/>])/);
  assert.match(jsx, /maxLength=\{6\}/);
  assert.match(jsx, /minLength=\{2\}/);
  assert.match(jsx, /autoComplete="off"/);
  assert.match(jsx, /onFocus="focusField\(\)"/);
  assert.match(jsx, /onChange="changeField\(\)"/);
});

test('htmlToJsx converts SVG attributes and numeric dimensions', () => {
  const html = `
<svg viewbox="0 0 24 24" width="24" height="24">
  <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
</svg>
  `.trim();

  const jsx = htmlToJsx(html, 'Icon');

  assert.match(jsx, /viewBox="0 0 24 24"/);
  assert.match(jsx, /width=\{24\}/);
  assert.match(jsx, /height=\{24\}/);
  assert.match(jsx, /fillRule="evenodd"/);
  assert.match(jsx, /clipRule="evenodd"/);
  assert.match(jsx, /strokeWidth=\{2\}/);
  assert.match(jsx, /strokeLinecap="round"/);
  assert.match(jsx, /strokeLinejoin="round"/);
});

test('htmlToJsx keeps data and aria attributes hyphenated and converts style object', () => {
  const html = `
<div data-theme="light" aria-label="Demo" style="max-width:700px; border-bottom-width: 1px;"></div>
  `.trim();

  const jsx = htmlToJsx(html, 'Panel');

  assert.match(jsx, /data-theme="light"/);
  assert.match(jsx, /aria-label="Demo"/);
  assert.match(jsx, /style=\{\{ maxWidth: '700px', borderBottomWidth: '1px' \}\}/);
});

test('htmlToJsx preserves embedded HTML payloads as readable hoisted template literals', () => {
  const html = `
<button class="ux4g-btn" data-ux-action-html="&lt;div class=&quot;ux4g-dropdown&quot;&gt;&lt;button type=&quot;button&quot; class=&quot;ux4g-btn-text-primary&quot;&gt;Open&lt;/button&gt;&lt;/div&gt;" data-ux-content="&lt;p class=&quot;ux4g-mb-m&quot;&gt;Body&lt;/p&gt;" data-ux-toggle="popover">Open</button>
  `.trim();

  const jsx = htmlToJsx(html, 'Popover');

  assert.match(jsx, /className="ux4g-btn"/);
  assert.match(jsx, /const PopoverDataUxActionHtml1 = `[\s\S]*<div class="ux4g-dropdown">[\s\S]*<button type="button" class="ux4g-btn-text-primary">Open<\/button>[\s\S]*<\/div>[\s\S]*`;/);
  assert.match(jsx, /const PopoverDataUxContent2 = `[\s\S]*<p class="ux4g-mb-m">Body<\/p>[\s\S]*`;/);
  assert.match(jsx, /data-ux-action-html=\{PopoverDataUxActionHtml1\}/);
  assert.match(jsx, /data-ux-content=\{PopoverDataUxContent2\}/);
  assert.doesNotMatch(jsx, /data-ux-action-html=.*className=/);
});

test('htmlToJsx preserves raw embedded HTML payloads with inner quoted attributes', () => {
  const html = `
<button class="ux4g-btn" data-ux-action-html="<div class="ux4g-dropdown ux4g-dropdown-default"><button type="button" class="ux4g-btn-text-primary">Open</button></div>" data-ux-content="<p class="ux4g-mb-m">Body</p>" data-ux-toggle="popover">Open</button>
  `.trim();

  const jsx = htmlToJsx(html, 'Component');

  assert.match(jsx, /const ComponentDataUxActionHtml1 = `[\s\S]*<div class="ux4g-dropdown ux4g-dropdown-default">[\s\S]*<button type="button" class="ux4g-btn-text-primary">Open<\/button>[\s\S]*<\/div>[\s\S]*`;/);
  assert.match(jsx, /const ComponentDataUxContent2 = `[\s\S]*<p class="ux4g-mb-m">Body<\/p>[\s\S]*`;/);
  assert.match(jsx, /data-ux-action-html=\{ComponentDataUxActionHtml1\}/);
  assert.match(jsx, /data-ux-content=\{ComponentDataUxContent2\}/);
  assert.doesNotMatch(jsx, /\}ux4g-dropdown/);
});
