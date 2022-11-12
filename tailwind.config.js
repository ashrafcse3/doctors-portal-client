/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        doctor_portal: {
          primary: "#19D3AE",
          secondary: "#0FCFEC",
          "base-100": "#FFFFFF",
          neutral: '#3A4256',
        }
      }
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui")
  ],
}
