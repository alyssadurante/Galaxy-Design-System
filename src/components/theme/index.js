const baseTheme = {
  fonts: {
    mono: '"SF Mono", "Roboto Mono", Menlo, monospace',
  },
};

const lightTheme = {
  ...baseTheme,
  colors: {
    background: '#fff',
    heading: '#111827',
    text: '#374151',
    preFormattedText: 'rgb(245, 247, 249)',
    link: '#1000EE',
  },
};

const darkTheme = {
  ...baseTheme,
  colors: {
    background: '#001933',
    heading: '#fff',
    text: '#fff',
    preFormattedText: '#000',
    link: '#1ED3C6',
  },
};

export { lightTheme, darkTheme };
