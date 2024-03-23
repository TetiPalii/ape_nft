/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        BiroScript: ['"Biro Script Plus"'],
        MessinaSansMono: ['"Messina Sans Mono"'],
        RightGrotesk: ['"Right Grotesk"'],
      },
      colors: {
        backgroundMainColor: '#181818',
        accentColor: '#dc3b5a',
        secondaryTextColor: '#1E1E1E',
      },
    },
  },
  plugins: [],
};
