/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'cloudybg': "url('/assets/center_bg_landing_header.svg')",
        'leftcarton': "url('/assets/left_bg_landing_header.svg')",
        'rightcarton': "url('/assets/right_bg_landing_header.svg')",
      }
    },
  },
  plugins: [],
}