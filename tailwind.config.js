/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "-webkit-text-size-adjust": "100%" /* For older browsers */,
            "text-size-adjust": "100%" /* For modern browsers */,
          },
        },
      },
    },
  },
  plugins: [],
};
