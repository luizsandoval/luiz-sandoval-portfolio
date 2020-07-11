import { rgba } from 'polished';

const getColorPalette = (color) => (
    {
        main: color,
        medium: rgba(color, 0.5),
        light: rgba(color, 0.2),
    }
);

const DefaultTheme = {
    colors: {
        accent: getColorPalette('#56CCF2'),
        black: getColorPalette('#333333'),
        white: getColorPalette('#FFFFFF'),
    }
};

export default DefaultTheme;
