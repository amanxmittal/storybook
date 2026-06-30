import { dirname, join } from "path";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}

/** @type { import('@storybook/html-vite').StorybookConfig } */
const config = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  tags: {
    hidden: {
      excludeFromSidebar: true,
    },
  },
  "staticDirs": ["../src"],
  "addons": [
    // getAbsolutePath("@storybook/addon-a11y"),
    getAbsolutePath("@storybook/addon-docs"),
    {
      name: getAbsolutePath("@storybook/addon-essentials"),
      options: {
        actions: false,
        controls: false,
        measure: false,
        outline: false,
      },
    },
    // getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@storybook/addon-links")
  ],
  "framework": getAbsolutePath("@storybook/html-vite")
};
export default config;
