import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'primary-bg-color': '#2B2B2B',
      'secondary-bg-color': '#3B3B3B',
      'primary-text-color': '#858584',
      'secondary-text-color': '#FFFFFF',
      'action-color': '#ff5f00',
      'sender-color': '#00d2f5',
      'recipient-color': '#fa5758'
    },
    extend: {}
  },
  plugins: []
}

export default config
