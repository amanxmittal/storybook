import { create } from '@storybook/theming';
export const UX4G_THEME_TOKENS = {
    primary500: '#6a4eff',
    secondary500: '#ffa827',
    neutral0: '#ffffff',
    neutral50: '#fafafa',
    neutral200: '#e5e5e5',
    neutral600: '#525252',
    neutral900: '#171717',
    neutral950: '#0a0a0a',
    neutral800: '#262626',
    neutral700: '#404040',
};

const sharedThemeConfig = {
    brandTitle: 'UX4G Design System V3.0',
    brandUrl: 'https://www.ux4g.gov.in',
    brandImage: 'https://www.ux4g.gov.in/assets/img/logo/ux4g-logo.svg',
    brandTarget: '_self',
    colorPrimary: UX4G_THEME_TOKENS.primary500,
    colorSecondary: UX4G_THEME_TOKENS.primary500,
    appBorderRadius: 12,
    inputBorderRadius: 8,
};

export const ux4gLightTheme = create({
    ...sharedThemeConfig,
    base: 'light',
    appBg: UX4G_THEME_TOKENS.neutral50,
    appContentBg: UX4G_THEME_TOKENS.neutral0,
    appPreviewBg: UX4G_THEME_TOKENS.neutral0,
    appBorderColor: UX4G_THEME_TOKENS.neutral200,
    textColor: UX4G_THEME_TOKENS.neutral900,
    textInverseColor: UX4G_THEME_TOKENS.neutral0,
    textMutedColor: UX4G_THEME_TOKENS.neutral600,
    barTextColor: UX4G_THEME_TOKENS.neutral600,
    barSelectedColor: UX4G_THEME_TOKENS.primary500,
    barHoverColor: UX4G_THEME_TOKENS.primary500,
    barBg: UX4G_THEME_TOKENS.neutral0,
    inputBg: UX4G_THEME_TOKENS.neutral0,
    inputBorder: UX4G_THEME_TOKENS.neutral200,
    inputTextColor: UX4G_THEME_TOKENS.neutral900,
});

export const ux4gDarkTheme = create({
    ...sharedThemeConfig,
    base: 'dark',
    appBg: UX4G_THEME_TOKENS.neutral950,
    appContentBg: UX4G_THEME_TOKENS.neutral900,
    appPreviewBg: UX4G_THEME_TOKENS.neutral900,
    appBorderColor: UX4G_THEME_TOKENS.neutral700,
    textColor: UX4G_THEME_TOKENS.neutral0,
    textInverseColor: UX4G_THEME_TOKENS.neutral900,
    textMutedColor: UX4G_THEME_TOKENS.neutral200,
    barTextColor: UX4G_THEME_TOKENS.neutral200,
    barSelectedColor: UX4G_THEME_TOKENS.primary500,
    barHoverColor: UX4G_THEME_TOKENS.primary500,
    barBg: UX4G_THEME_TOKENS.neutral800,
    inputBg: UX4G_THEME_TOKENS.neutral800,
    inputBorder: UX4G_THEME_TOKENS.neutral700,
    inputTextColor: UX4G_THEME_TOKENS.neutral0,
});

export const getUx4gTheme = (mode = 'light') => mode === 'dark' ? ux4gDarkTheme : ux4gLightTheme;

export default ux4gLightTheme;
