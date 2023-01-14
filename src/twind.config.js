const colors = require('tailwindcss/colors');
export default {
  theme: {
    extend: {
      fontFamily: {
        sans: `Inter, ui-sans-serif, system-ui, -apple-system,
            BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans",
            sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
      },
      colors: {
        primary: 'rgb(79,70,229)',
        maximumGYellow: '#DCE546',
        secondary: '#BABBD0',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        orange: {
          '50': '#FFF8E1',
          '100': '#FFECB3',
          '200': '#FFE082',
          '300': '#FFD54F',
          '400': '#FFCA28',
          '500': '#FFC107',
          '600': '#FFB300',
          '700': '#FFA000',
          '800': '#FF8F00',
          '900': '#FF6F00',
        },
        fuchsia: colors.fuchsia,
        teal: colors.teal,
        cyan: colors.cyan,
        slate: colors.slate,
        gray: colors.gray,
        zinc: colors.zinc,
        sky: colors.sky,
        purple: colors.purple,
      },
      container: {
        center: true,
      },
      transitionProperty: {
        height: 'height',
        spacing: 'margin, padding',
      },
      fontSize: {
        small: '1rem',
        medium: '1.125rem',
        large: '1.75rem',
        xlarge: '2rem',
      },
    },
  },
};
