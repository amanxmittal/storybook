import { addons } from '@storybook/manager-api';
import { GLOBALS_UPDATED, STORY_RENDERED } from '@storybook/core-events';
import { getUx4gTheme } from './ux4gTheme';

const ADDON_ID = 'ux4g/theme-sync';

const baseConfig = {
    bottomPanelHeight: 0,
    rightPanelWidth: 0,
    panelPosition: 'bottom',
    sidebar: {
        showRoots: false,
    },
    toolbar: {
        title: { hidden: false },
    },
};

const getManagerOptions = (mode = 'light') => ({
    ...baseConfig,
    theme: getUx4gTheme(mode),
});

addons.setConfig(getManagerOptions('light'));

addons.register(ADDON_ID, (api) => {
    const applyManagerTheme = (mode = 'light') => {
        api.setOptions(getManagerOptions(mode));
        api.togglePanel?.(false);
    };

    applyManagerTheme(api.getGlobals?.().theme || 'light');

    api.on(GLOBALS_UPDATED, ({ globals }) => {
        applyManagerTheme(globals?.theme || 'light');
    });

    api.on(STORY_RENDERED, () => {
        api.togglePanel?.(false);
    });
});
