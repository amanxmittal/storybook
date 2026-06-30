const fs = require('fs');
const path = require('path');

const typescaleFile = fs.readFileSync(path.join(__dirname, 'src/stories/utilities/typescale.stories.js'), 'utf-8');

const boilerplate = typescaleFile.split('const INTRODUCTION_CONTENT')[0];

const generateStory = (title, items, exampleCode, classRows) => {
    return boilerplate.replace("title: 'UX4G/Utilities/Typescale'", "title: 'UX4G/Utilities/" + title + "'") + 
    "const INTRODUCTION_CONTENT = `\n" +
    "    <div class='ux4g-bg-neutral-soft ux4g-min-h-screen ux4g-w-screen' id='intro-container'>\n" +
    "        ${getHeroHeader('" + title + " Showcase', 'Reference for " + title.toLowerCase() + " utility classes.')}\n" +
    "        <section class='ux4g-p-xl'>\n" +
    "            <div class='ux4g-container'>\n" +
    "                <h2 class='ux4g-heading-m-strong ux4g-text-neutral-primary ux4g-my-l'>CSS Class Reference</h2>\n" +
    "                <div class='ux4g-border ux4g-border-neutral-emphasis ux4g-bg-white ux4g-radius-l ux4g-o-hidden'>\n" +
    "                    <table class='ux4g-table ux4g-table-bordered ux4g-m-none'>\n" +
    "                        <tbody>\n" +
    classRows.map(r => "                            ${createTableRow('" + r.c + "', '" + r.label + "')}").join('\n') +
    "\n                        </tbody>\n" +
    "                    </table>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </section>\n" +
    "    </div>\n" +
    "`;\n\n" +
    "export const Introduction = {\n" +
    "    render: () => INTRODUCTION_CONTENT,\n" +
    "    parameters: { docs: { disable: true } }\n" +
    "};\n\n" +
    "export const " + title.replace(/[- ]/g, '') + "Examples = {\n" +
    "    render: () => `\n" +
    "        <div class='ux4g-bg-neutral-soft ux4g-min-h-screen'>\n" +
    "            ${getHeroHeader('" + title + " Showcase', 'A visual demonstration of our " + title.toLowerCase() + " utility classes.')}\n" +
    "            <div class='ux4g-container ux4g-p-l ux4g-py-2xl'>\n" +
    "                ${renderDemoCodeBlock('examples', '1. Examples', 'Various " + title.toLowerCase() + " classes.', `\n" +
    exampleCode +
    "\n                `)}\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    `,\n" +
    "    parameters: { docs: { disable: true } }\n" +
    "};\n";
};

// 1. Blur
fs.writeFileSync(path.join(__dirname, 'src/stories/utilities/blur.stories.js'), generateStory('Blur', [], 
`<div class="ux4g-blur-0 ux4g-p-s ux4g-bg-white ux4g-radius-s ux4g-border">.ux4g-blur-0</div>
 <div class="ux4g-blur-1 ux4g-p-s ux4g-bg-white ux4g-radius-s ux4g-border">.ux4g-blur-1</div>
 <div class="ux4g-blur-2 ux4g-p-s ux4g-bg-white ux4g-radius-s ux4g-border">.ux4g-blur-2</div>
 <div class="ux4g-blur-3 ux4g-p-s ux4g-bg-white ux4g-radius-s ux4g-border">.ux4g-blur-3</div>
 <div class="ux4g-blur-4 ux4g-p-s ux4g-bg-white ux4g-radius-s ux4g-border">.ux4g-blur-4</div>`,
 [{c:'ux4g-blur-0', label:'None'}, {c:'ux4g-blur-1', label:'Subtle'}, {c:'ux4g-blur-2', label:'Soft'}, {c:'ux4g-blur-3', label:'Medium'}, {c:'ux4g-blur-4', label:'Strong'}]
));

// 2. Shadows
fs.writeFileSync(path.join(__dirname, 'src/stories/utilities/shadows.stories.js'), generateStory('Shadows', [], 
`<div class="ux4g-shadow-l0 ux4g-p-l ux4g-bg-white ux4g-radius-s ux4g-mb-m">.ux4g-shadow-l0</div>
<div class="ux4g-shadow-l1 ux4g-p-l ux4g-bg-white ux4g-radius-s ux4g-mb-m">.ux4g-shadow-l1</div>
<div class="ux4g-shadow-l2 ux4g-p-l ux4g-bg-white ux4g-radius-s ux4g-mb-m">.ux4g-shadow-l2</div>
<div class="ux4g-shadow-l3 ux4g-p-l ux4g-bg-white ux4g-radius-s ux4g-mb-m">.ux4g-shadow-l3</div>
<div class="ux4g-shadow-l4 ux4g-p-l ux4g-bg-white ux4g-radius-s ux4g-mb-m">.ux4g-shadow-l4</div>`,
 [{c:'ux4g-shadow-l0', label:'None'}, {c:'ux4g-shadow-l1', label:'Subtle'}, {c:'ux4g-shadow-l2', label:'Regular'}, {c:'ux4g-shadow-l3', label:'Large'}, {c:'ux4g-shadow-l4', label:'Strong'}]
));

// 3. Opacity
fs.writeFileSync(path.join(__dirname, 'src/stories/utilities/opacity.stories.js'), generateStory('Opacity', [], 
`<div class="ux4g-d-flex ux4g-gap-m">
    <div class="ux4g-opacity-100 ux4g-p-l ux4g-bg-primary ux4g-text-white ux4g-radius-s">.ux4g-opacity-100</div>
    <div class="ux4g-opacity-75 ux4g-p-l ux4g-bg-primary ux4g-text-white ux4g-radius-s">.ux4g-opacity-75</div>
    <div class="ux4g-opacity-50 ux4g-p-l ux4g-bg-primary ux4g-text-white ux4g-radius-s">.ux4g-opacity-50</div>
    <div class="ux4g-opacity-25 ux4g-p-l ux4g-bg-primary ux4g-text-white ux4g-radius-s">.ux4g-opacity-25</div>
</div>`,
 [{c:'ux4g-opacity-100', label:'100%'}, {c:'ux4g-opacity-75', label:'75%'}, {c:'ux4g-opacity-50', label:'50%'}, {c:'ux4g-opacity-25', label:'25%'}, {c:'ux4g-opacity-0', label:'0%'}]
));

// 4. Text Colors
fs.writeFileSync(path.join(__dirname, 'src/stories/utilities/text-colors.stories.js'), generateStory('Text Colors', [], 
`<div class="ux4g-fs-16 ux4g-fw-bold ux4g-text-primary ux4g-mb-s">.ux4g-text-primary</div>
<div class="ux4g-fs-16 ux4g-fw-bold ux4g-text-secondary ux4g-mb-s">.ux4g-text-secondary</div>
<div class="ux4g-fs-16 ux4g-fw-bold ux4g-text-success ux4g-mb-s">.ux4g-text-success</div>
<div class="ux4g-fs-16 ux4g-fw-bold ux4g-text-error ux4g-mb-s">.ux4g-text-error</div>
<div class="ux4g-fs-16 ux4g-fw-bold ux4g-text-warning ux4g-mb-s">.ux4g-text-warning</div>
<div class="ux4g-fs-16 ux4g-fw-bold ux4g-text-info ux4g-mb-s">.ux4g-text-info</div>`,
 [{c:'ux4g-text-primary', label:'Primary'}, {c:'ux4g-text-secondary', label:'Secondary'}, {c:'ux4g-text-success', label:'Success'}, {c:'ux4g-text-error', label:'Error'}, {c:'ux4g-text-warning', label:'Warning'}, {c:'ux4g-text-info', label:'Info'}]
));

// 5. Backgrounds
fs.writeFileSync(path.join(__dirname, 'src/stories/utilities/backgrounds.stories.js'), generateStory('Backgrounds', [], 
`<div class="ux4g-d-flex ux4g-gap-m ux4g-flex-wrap">
    <div class="ux4g-p-m ux4g-bg-primary ux4g-text-white ux4g-radius-s">.ux4g-bg-primary</div>
    <div class="ux4g-p-m ux4g-bg-secondary ux4g-text-white ux4g-radius-s">.ux4g-bg-secondary</div>
    <div class="ux4g-p-m ux4g-bg-success ux4g-text-white ux4g-radius-s">.ux4g-bg-success</div>
    <div class="ux4g-p-m ux4g-bg-error ux4g-text-white ux4g-radius-s">.ux4g-bg-error</div>
    <div class="ux4g-p-m ux4g-bg-warning ux4g-text-neutral-strong ux4g-radius-s">.ux4g-bg-warning</div>
    <div class="ux4g-p-m ux4g-bg-info ux4g-text-white ux4g-radius-s">.ux4g-bg-info</div>
</div>`,
 [{c:'ux4g-bg-primary', label:'Primary'}, {c:'ux4g-bg-secondary', label:'Secondary'}, {c:'ux4g-bg-success', label:'Success'}, {c:'ux4g-bg-error', label:'Error'}, {c:'ux4g-bg-warning', label:'Warning'}, {c:'ux4g-bg-info', label:'Info'}]
));

// 6. Borders
fs.writeFileSync(path.join(__dirname, 'src/stories/utilities/border.stories.js'), generateStory('Borders', [], 
`<div class="ux4g-d-flex ux4g-gap-m ux4g-flex-wrap">
    <div class="ux4g-p-l ux4g-bg-white ux4g-border ux4g-border-primary ux4g-radius-s">.ux4g-border</div>
    <div class="ux4g-p-l ux4g-bg-white ux4g-border ux4g-border-secondary ux4g-radius-m">.ux4g-radius-m</div>
    <div class="ux4g-p-l ux4g-bg-white ux4g-border ux4g-border-success ux4g-radius-l">.ux4g-radius-l</div>
</div>`,
 [{c:'ux4g-border', label:'Border Default'}, {c:'ux4g-border-primary', label:'Border Primary'}, {c:'ux4g-radius-s', label:'Radius Small'}, {c:'ux4g-radius-m', label:'Radius Medium'}, {c:'ux4g-radius-l', label:'Radius Large'}]
));

console.log("All stories updated successfully.");
