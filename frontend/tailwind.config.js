/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          50: "#ebf1fa",
          100: "#d7e2f6",
          150: "#c3d4f1",
          200: "#afc5ec",
          250: "#9bb7e8",
          300: "#87a9e3",
          350: "#739ade",
          400: "#5f8cd9",
          450: "#4b7dd5",
          500: "#376fd0",
          550: "#3264bb",
          600: "#2c59a6",
          650: "#274e92",
          700: "#21437d",
          750: "#1c3868",
          800: "#162c53",
          850: "#10213e",
          900: "#0b162a",
          950: "#050b15",
        },
        gray: {
          50: "#f3f4f5",
          100: "#e7e8ea",
          150: "#dbdde0",
          200: "#cfd2d5",
          250: "#c3c7cb",
          300: "#b6bbc0",
          350: "#aab0b6",
          400: "#9ea5ab",
          450: "#9299a1",
          500: "#868e96",
          550: "#798087",
          600: "#6b7278",
          650: "#5e6369",
          700: "#50555a",
          750: "#43474b",
          800: "#36393c",
          850: "#282b2d",
          900: "#1b1c1e",
          950: "#0d0e0f",
        },
        red: {
          50: "#fbe6ea",
          100: "#f7cdd4",
          150: "#f4b4bf",
          200: "#f09ba9",
          250: "#ec8294",
          300: "#e8687f",
          350: "#e44f69",
          400: "#e13654",
          450: "#dd1d3e",
          500: "#d90429",
          550: "#c30425",
          600: "#ae0321",
          650: "#98031d",
          700: "#820219",
          750: "#6d0215",
          800: "#570210",
          850: "#41010c",
          900: "#2b0108",
          950: "#160004",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        "fade-in": "fadeIn 200ms ease",
      },
    },
  },
  plugins: [],
};
