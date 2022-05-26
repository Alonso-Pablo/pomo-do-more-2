module.exports = {
  mode: 'jit',
  important: true,
  content: ["./src/**/*.{react,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'main': [
        'DinRound',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'Noto Sans',
        'sans-serif',
        'Apple Color Emoji',
        'Segoe UI Emoji',
        'Segoe UI Symbol',
        'Noto Color Emoji',
      ],
    },
    colors: {
      'tomato': {
        light: '#FF8873',
        regular: '#FF6347',
        dark: '#D35A44',
        darkest: '#BF452F',
      },
      'gray': {
        light: '#E6E6E6',
        regular: '#C1C1C1',
      },
      'white': '#FFFFFF',
      'black': '#000000',
      transparent: 'transparent',
    },
    extend: {
      keyframes: {
        // High
        'pressInHigh': {
          '0%': { transform: 'translate(0, -12px)' },
          '35%': { transform: 'translate(0, -4px)' },
          '100%': { transform: 'translate(0, -8px)' },
        },
        'pressOutHigh': {
          '0%': { transform: 'translate(0, -8px)'},
          '65%': { transform: 'translate(0, -4px)'},
          '100%': { transform: 'translate(0, -12px)'},
        },
        // Normal
        'pressInNormal': {
          '0%': { transform: 'translate(0, -8px)' },
          '35%': { transform: 'translate(0, -2px)' },
          '100%': { transform: 'translate(0, -4px)' },
        },
        'pressOutNormal': {
          '0%': { transform: 'translate(0, -4px)'},
          '65%': { transform: 'translate(0, -2px)'},
          '100%': { transform: 'translate(0, -8px)'},
        },
        // Low
        'pressInLow': {
          '0%': { transform: 'translate(0, -4px)' },
          '35%': { transform: 'translate(0, -0px)' },
          '100%': { transform: 'translate(0, -2px)' },
        },
        'pressOutLow': {
          '0%': { transform: 'translate(0, -2px)'},
          '65%': { transform: 'translate(0, -0px)'},
          '100%': { transform: 'translate(0, -4px)'},
        },
      },
      animation: {
        // High
        'pressInHigh': 'pressInHigh 0.5s forwards',
        'pressOutHigh': 'pressOutHigh 0.3s forwards',
        // Normal
        'pressInNormal': 'pressInNormal 0.5s forwards',
        'pressOutNormal': 'pressOutNormal 0.3s forwards',
        // Low
        'pressInLow': 'pressInLow 0.5s forwards',
        'pressOutLow': 'pressOutLow 0.3s forwards',
      },
    },
  },
  plugins: [],
}
