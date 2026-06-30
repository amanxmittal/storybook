const VOID_TAGS = new Set([
  'area',
  'base',
  'br',
  'col',
  'embed',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'param',
  'source',
  'track',
  'wbr',
]);

const INDENT = '  ';

const getTagName = (token) => {
  const match = token.match(/^<\/?\s*([^\s/>]+)/);
  return match ? match[1] : '';
};

const normalizeOpenTag = (token) =>
  token
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\s*\/>\s*$/, ' />')
    .replace(/\s+>\s*$/, '>');

const formatTextNode = (text) => text.replace(/\s+/g, ' ').trim();

const renderNodes = (nodes, depth, useBlankLines = false) =>
  nodes
    .map((node) => renderNode(node, depth))
    .filter(Boolean)
    .join(useBlankLines ? '\n\n' : '\n');

const renderNode = (node, depth) => {
  const indent = INDENT.repeat(depth);

  if (node.type === 'text') {
    return `${indent}${node.value}`;
  }

  if (node.type === 'comment') {
    return `${indent}${node.value}`;
  }

  if (node.selfClosing) {
    return `${indent}${node.openTag}`;
  }

  if (node.children.length === 0) {
    return `${indent}${node.openTag}</${node.tagName}>`;
  }

  if (node.children.length === 1 && node.children[0].type === 'text') {
    return `${indent}${node.openTag}${node.children[0].value}</${node.tagName}>`;
  }

  const children = renderNodes(node.children, depth + 1);
  return `${indent}${node.openTag}\n${children}\n${indent}</${node.tagName}>`;
};

export function formatCode(code, options = {}) {
  if (typeof code !== 'string') {
    return '';
  }

  const normalizedCode = code.replace(/\r\n?/g, '\n').trim();
  if (!normalizedCode) {
    return '';
  }

  const tokens = normalizedCode.match(/<!--[\s\S]*?-->|<\/?[^>]+>|[^<]+/g) || [];
  const root = { type: 'root', children: [] };
  const stack = [root];

  tokens.forEach((token) => {
    const current = stack[stack.length - 1];

    if (token.startsWith('<!--')) {
      if (!options.stripComments) {
        current.children.push({
          type: 'comment',
          value: token.trim(),
        });
      }
      return;
    }

    if (token.startsWith('</')) {
      const tagName = getTagName(token);

      while (stack.length > 1) {
        const node = stack.pop();
        if (node.tagName.toLowerCase() === tagName.toLowerCase()) {
          break;
        }
      }

      return;
    }

    if (token.startsWith('<')) {
      const tagName = getTagName(token);
      const node = {
        type: 'element',
        tagName,
        openTag: normalizeOpenTag(token),
        children: [],
        selfClosing: VOID_TAGS.has(tagName.toLowerCase()) || /\/\s*>$/.test(token),
      };

      current.children.push(node);

      if (!node.selfClosing) {
        stack.push(node);
      }

      return;
    }

    const textValue = formatTextNode(token);
    if (!textValue) {
      return;
    }

    current.children.push({
      type: 'text',
      value: textValue,
    });
  });

  let result = renderNodes(root.children, 0, false);
  if (options.stripComments) {
    result = result.replace(/\/\*[\s\S]*?\*\//g, '');
  }
  return result;
}

const STYLE_REGEX = /style="([^"]*)"/g;
const JSX_NUMERIC_PROPS = [
  'tabIndex',
  'maxLength',
  'minLength',
  'colSpan',
  'rowSpan',
  'width',
  'height',
  'size',
  'rows',
  'cols',
  'border',
  'cellPadding',
  'cellSpacing',
  'strokeWidth',
];

const ATTRIBUTE_REPLACEMENTS = [
  ['class', 'className'],
  ['for', 'htmlFor'],
  ['tabindex', 'tabIndex'],
  ['readonly', 'readOnly'],
  ['autofocus', 'autoFocus'],
  ['autocomplete', 'autoComplete'],
  ['minlength', 'minLength'],
  ['maxlength', 'maxLength'],
  ['colspan', 'colSpan'],
  ['rowspan', 'rowSpan'],
  ['contenteditable', 'contentEditable'],
  ['usemap', 'useMap'],
  ['frameborder', 'frameBorder'],
  ['enctype', 'encType'],
  ['allowfullscreen', 'allowFullScreen'],
  ['playsinline', 'playsInline'],
  ['spellcheck', 'spellCheck'],
  ['srcset', 'srcSet'],
  ['acceptcharset', 'acceptCharset'],
  ['http-equiv', 'httpEquiv'],
  ['accesskey', 'accessKey'],
  ['autocapitalize', 'autoCapitalize'],
  ['autoplay', 'autoPlay'],
  ['charset', 'charSet'],
  ['classid', 'classID'],
  ['contextmenu', 'contextMenu'],
  ['crossorigin', 'crossOrigin'],
  ['datetime', 'dateTime'],
  ['formenctype', 'formEncType'],
  ['formmethod', 'formMethod'],
  ['formnovalidate', 'formNoValidate'],
  ['formtarget', 'formTarget'],
  ['hreflang', 'hrefLang'],
  ['inputmode', 'inputMode'],
  ['marginheight', 'marginHeight'],
  ['marginwidth', 'marginWidth'],
  ['novalidate', 'noValidate'],
  ['radiogroup', 'radioGroup'],
  ['referrerpolicy', 'referrerPolicy'],
  ['srclang', 'srcLang'],
  ['srcdoc', 'srcDoc'],
];

const EVENT_REPLACEMENTS = [
  ['onclick', 'onClick'],
  ['ondblclick', 'onDoubleClick'],
  ['onmousedown', 'onMouseDown'],
  ['onmouseup', 'onMouseUp'],
  ['onmousemove', 'onMouseMove'],
  ['onmouseenter', 'onMouseEnter'],
  ['onmouseleave', 'onMouseLeave'],
  ['onmouseover', 'onMouseOver'],
  ['onmouseout', 'onMouseOut'],
  ['oncontextmenu', 'onContextMenu'],
  ['onchange', 'onChange'],
  ['oninput', 'onInput'],
  ['onsubmit', 'onSubmit'],
  ['onreset', 'onReset'],
  ['onfocus', 'onFocus'],
  ['onblur', 'onBlur'],
  ['onkeydown', 'onKeyDown'],
  ['onkeyup', 'onKeyUp'],
  ['onkeypress', 'onKeyPress'],
  ['ondrag', 'onDrag'],
  ['ondragstart', 'onDragStart'],
  ['ondragend', 'onDragEnd'],
  ['ondragenter', 'onDragEnter'],
  ['ondragleave', 'onDragLeave'],
  ['ondragover', 'onDragOver'],
  ['ondrop', 'onDrop'],
  ['onscroll', 'onScroll'],
  ['onwheel', 'onWheel'],
  ['oncopy', 'onCopy'],
  ['oncut', 'onCut'],
  ['onpaste', 'onPaste'],
];

const SVG_REPLACEMENTS = [
  ['fill-rule', 'fillRule'],
  ['clip-rule', 'clipRule'],
  ['clip-path', 'clipPath'],
  ['clip-pathunits', 'clipPathUnits'],
  ['mask-type', 'maskType'],
  ['stroke-width', 'strokeWidth'],
  ['stroke-linecap', 'strokeLinecap'],
  ['stroke-linejoin', 'strokeLinejoin'],
  ['stroke-miterlimit', 'strokeMiterlimit'],
  ['stroke-dasharray', 'strokeDasharray'],
  ['stroke-dashoffset', 'strokeDashoffset'],
  ['stroke-opacity', 'strokeOpacity'],
  ['fill-opacity', 'fillOpacity'],
  ['stop-color', 'stopColor'],
  ['stop-opacity', 'stopOpacity'],
  ['flood-color', 'floodColor'],
  ['flood-opacity', 'floodOpacity'],
  ['color-interpolation-filters', 'colorInterpolationFilters'],
  ['dominant-baseline', 'dominantBaseline'],
  ['baseline-shift', 'baselineShift'],
  ['text-anchor', 'textAnchor'],
  ['vector-effect', 'vectorEffect'],
  ['xlink:href', 'xlinkHref'],
  ['xml:space', 'xmlSpace'],
  ['viewbox', 'viewBox'],
];

function replaceAttributeNames(input, replacements) {
  return replacements.reduce(
    (result, [from, to]) => result.replace(new RegExp(`\\b${from}=`, 'gi'), `${to}=`),
    input,
  );
}

function convertJsxComments(input) {
  return input
    .replace(/<!--\s*([\s\S]*?)\s*-->/g, '{/* $1 */}')
    .replace(/(^|\n)([ \t]*)\/\*\s*([\s\S]*?)\s*\*\/(?=\n|$)/g, (match, prefix, indent, comment) => {
      const normalized = comment.replace(/\s+/g, ' ').trim();
      return `${prefix}${indent}{/* ${normalized} */}`;
    });
}

function convertBooleanAttributes(input) {
  let output = input;

  output = output
    .replace(/\bchecked="checked"/gi, 'defaultChecked')
    .replace(/\bchecked="true"/gi, 'defaultChecked')
    .replace(/\bchecked=""/gi, 'defaultChecked')
    .replace(/\schecked(?=[\s/>])/gi, ' defaultChecked')
    .replace(/\bselected="selected"/gi, 'defaultSelected')
    .replace(/\bselected="true"/gi, 'defaultSelected')
    .replace(/\bselected=""/gi, 'defaultSelected')
    .replace(/\sselected(?=[\s/>])/gi, ' defaultSelected')
    .replace(/\bdisabled="disabled"/gi, 'disabled')
    .replace(/\bdisabled="true"/gi, 'disabled')
    .replace(/\bdisabled=""/gi, 'disabled')
    .replace(/\sdisabled(?=[\s/>])/gi, ' disabled');

  const shorthandBooleans = [
    'required',
    'hidden',
    'multiple',
    'controls',
    'loop',
    'muted',
    'open',
    'playsInline',
    'default',
    'defer',
    'async',
    'noValidate',
    'formNoValidate',
    'allowFullScreen',
    'readOnly',
    'autoFocus',
    'autoPlay',
  ];

  for (const attr of shorthandBooleans) {
    output = output
      .replace(new RegExp(`\\b${attr}="(?:${attr}|true)"`, 'gi'), attr)
      .replace(new RegExp(`\\b${attr}=""`, 'gi'), attr)
      .replace(new RegExp(`\\s${attr}(?=[\\s/>])`, 'g'), ` ${attr}`);
  }

  return output;
}

function convertNumericAttributes(input) {
  return JSX_NUMERIC_PROPS.reduce(
    (result, attr) => result.replace(new RegExp(`\\b${attr}="(-?\\d+(?:\\.\\d+)?)"`, 'g'), `${attr}={$1}`),
    input,
  );
}

function escapeTemplateLiteralValue(value) {
  return value
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function toPascalCase(value) {
  return value
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');
}

function buildProtectedDataConstName(componentName, attrName, index) {
  const componentPart = toPascalCase(componentName || 'Component');
  const attrPart = toPascalCase(attrName.replace(/^data-/, 'data-'));
  return `${componentPart}${attrPart}${index + 1}`;
}

function decodeHtmlEntities(value) {
  return value
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&quot;/gi, '"')
    .replace(/&#34;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&apos;/gi, "'")
    .replace(/&amp;/gi, '&');
}

function isValidOuterAttributeBoundary(source, quoteIndex) {
  const afterQuote = source.slice(quoteIndex + 1);

  if (/^\s+[A-Za-z_:][-A-Za-z0-9_:.]*=/.test(afterQuote)) {
    return true;
  }

  if (/^\s*\/?>\s*$/.test(afterQuote)) {
    return true;
  }

  if (/^\s*\/?>\s*[^<]/.test(afterQuote)) {
    return true;
  }

  return false;
}

function findQuotedAttributeEnd(source, valueStartIndex, quoteChar, treatAsComplex) {
  let index = valueStartIndex;

  while (index < source.length) {
    const quoteIndex = source.indexOf(quoteChar, index);
    if (quoteIndex === -1) {
      return -1;
    }

    if (!treatAsComplex) {
      return quoteIndex;
    }

    if (isValidOuterAttributeBoundary(source, quoteIndex)) {
      return quoteIndex;
    }

    index = quoteIndex + 1;
  }

  return -1;
}

function findRawHtmlAttributeEnd(source, valueStartIndex, quoteChar) {
  let index = valueStartIndex;
  let depth = 0;

  while (index < source.length) {
    if (source[index] === quoteChar && depth === 0) {
      return index;
    }

    if (source[index] === '<') {
      const tagMatch = source.slice(index).match(/^<\/?\s*([A-Za-z][\w:-]*)[^>]*?>/);

      if (tagMatch) {
        const fullTag = tagMatch[0];
        const tagName = tagMatch[1].toLowerCase();
        const isClosingTag = /^<\//.test(fullTag);
        const isSelfClosingTag = /\/>$/.test(fullTag) || VOID_TAGS.has(tagName);

        if (isClosingTag) {
          depth = Math.max(0, depth - 1);
        } else if (!isSelfClosingTag) {
          depth += 1;
        }

        index += fullTag.length;
        continue;
      }
    }

    index += 1;
  }

  return -1;
}

function protectComplexDataAttributes(input, componentName) {
  const replacements = new Map();
  const definitions = [];
  let replacementIndex = 0;
  let cursor = 0;
  let output = '';

  while (cursor < input.length) {
    const attrMatch = input.slice(cursor).match(/\b(data-[\w:-]+)=/i);

    if (!attrMatch) {
      output += input.slice(cursor);
      break;
    }

    const attrStart = cursor + attrMatch.index;
    const attrName = attrMatch[1];
    const attrValueQuoteIndex = attrStart + attrMatch[0].length;
    const quoteChar = input[attrValueQuoteIndex];

    if (quoteChar !== '"' && quoteChar !== "'") {
      output += input.slice(cursor, attrValueQuoteIndex + 1);
      cursor = attrValueQuoteIndex + 1;
      continue;
    }

    output += input.slice(cursor, attrStart);

    const valueStartIndex = attrValueQuoteIndex + 1;
    const quickValueEnd = input.indexOf(quoteChar, valueStartIndex);
    const quickValue = quickValueEnd === -1 ? '' : input.slice(valueStartIndex, quickValueEnd);
    const startsWithRawHtml = /^\s*</.test(input.slice(valueStartIndex));
    const shouldTreatAsComplex =
      /(?:&lt;|<|&quot;|&#34;|&#39;|&apos;|\n|\r)/i.test(quickValue) ||
      startsWithRawHtml;
    const valueEndIndex = startsWithRawHtml
      ? findRawHtmlAttributeEnd(input, valueStartIndex, quoteChar)
      : findQuotedAttributeEnd(
          input,
          valueStartIndex,
          quoteChar,
          shouldTreatAsComplex,
        );

    if (valueEndIndex === -1) {
      output += input.slice(attrStart);
      break;
    }

    const rawValue = input.slice(valueStartIndex, valueEndIndex);
    const treatAsComplex = /(?:&lt;|<|&quot;|&#34;|&#39;|&apos;|\n|\r)/i.test(rawValue);

    if (!treatAsComplex) {
      output += input.slice(attrStart, valueEndIndex + 1);
      cursor = valueEndIndex + 1;
      continue;
    }

    const token = `__UX4G_COMPLEX_DATA_ATTR_${replacementIndex}__`;
    const decodedValue = /&(?:lt|gt|quot|#34|#39|apos|amp);/i.test(rawValue)
      ? decodeHtmlEntities(rawValue)
      : rawValue;
    const normalizedValue = /<[^>]+>/.test(decodedValue)
      ? formatCode(decodedValue)
      : decodedValue.replace(/\s+/g, ' ').trim();
    const constName = buildProtectedDataConstName(componentName, attrName, replacementIndex);
    const restoredValue = `${attrName}={${constName}}`;

    definitions.push({
      constName,
      value: normalizedValue,
    });
    replacements.set(token, restoredValue);

    output += token;
    replacementIndex += 1;
    cursor = valueEndIndex + 1;
  }

  return { output, replacements, definitions };
}

function restoreProtectedDataAttributes(input, replacements) {
  let output = input;
  for (const [token, value] of replacements.entries()) {
    output = output.replace(token, value);
  }
  return output;
}

function parseStyleToObject(styleString) {
  const obj = {};
  styleString.split(';').filter(Boolean).forEach(rule => {
    const idx = rule.indexOf(':');
    if (idx > 0) {
      const key = rule.substring(0, idx).trim();
      const val = rule.substring(idx + 1).trim();
      if (key && val) obj[key.replace(/-([a-z])/g, (_, c) => c.toUpperCase())] = val;
    }
  });
  return obj;
}

const SELF_CLOSING_TAGS = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
const SELF_CLOSING_REGEX = new RegExp('<(' + [...SELF_CLOSING_TAGS].join('|') + ')([^>]*?)>', 'g');

export function htmlToJsx(html, componentName) {
  const {
    output: protectedHtml,
    replacements: protectedDataAttributes,
    definitions: protectedDataDefinitions,
  } = protectComplexDataAttributes(html, componentName);
  let jsx = formatCode(protectedHtml);

  jsx = convertJsxComments(jsx);
  jsx = replaceAttributeNames(jsx, ATTRIBUTE_REPLACEMENTS);
  jsx = replaceAttributeNames(jsx, EVENT_REPLACEMENTS);
  jsx = replaceAttributeNames(jsx, SVG_REPLACEMENTS);
  jsx = convertBooleanAttributes(jsx);
  jsx = convertNumericAttributes(jsx);
  jsx = restoreProtectedDataAttributes(jsx, protectedDataAttributes);

  jsx = jsx.replace(STYLE_REGEX, (match, p1) => {
    const obj = parseStyleToObject(p1);
    const entries = Object.entries(obj);
    if (entries.length === 0) return match;
    const styleStr = entries.map(([k, v]) => `${k}: '${v}'`).join(', ');
    return `style={{ ${styleStr} }}`;
  });

  jsx = jsx.replace(SELF_CLOSING_REGEX, (match, tag, attrs) => {
    if (/\/\s*>$/.test(match)) return match;
    return `<${tag}${attrs.replace(/\s+$/, '')} />`;
  });

  const formatted = jsx.split('\n').map((line) => (line ? '    ' + line : line)).join('\n');
  const dataDefinitions = protectedDataDefinitions.length
    ? `${protectedDataDefinitions
        .map(({ constName, value }) => `const ${constName} = \`\n${escapeTemplateLiteralValue(value)}\n\`;`)
        .join('\n\n')}\n\n`
    : '';
  return `import React from 'react';\n\n${dataDefinitions}const ${componentName}Demo = () => (\n  <>\n${formatted}\n  </>\n);\n\nexport default ${componentName}Demo;`;
}

export function annotateSnippet(code, label, framework = 'html') {
  if (typeof code !== 'string' || !code.trim()) {
    return code;
  }

  const commentLabel = `Variant: ${label}`;

  if (framework === 'react') {
    return code.replace(/<>\n/, `  <>\n    {/* ${commentLabel} */}\n`);
  }

  return `<!-- ${commentLabel} -->\n${code}`;
}
