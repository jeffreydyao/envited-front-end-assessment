/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Envited colors from Figma file
      colors: {
        primary: {
          envited: {
            purple: "#8456EC",
            pink: "#E87BF8",
          },
          text: {
            purple: {
              dark: "#240D57",
              light: "#501FC1",
            },
          },
        },
        secondary: {
          purple: {
            1: "#CCB6FF",
            2: "#EDE5FF",
            3: "#F6F2FF",
          },
          alert: {
            green: {
              bg: "#D3FFE2",
              fg: "#00805E",
            },
            red: {
              bg: "#FFD7E0",
              fg: "#E61445",
            },
          },
        },
        neutral: {
          100: "#4F4F4F",
          200: "#828282",
          300: "#BDBDBD",
          400: "#E0E0E0",
          500: "#F2F2F2",
          600: "#FBFAFF",
        },
      },
    },
  },
  plugins: [],
};
