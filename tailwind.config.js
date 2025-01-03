/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  fontFamily: {
    primary: "Poppins",
  },
  container: {
    padding: {
      DEFAULT: "1rem",
      lg: "2rem",
    },
  },
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1234px",
    Tv: "1536px",
  },
  extend: {
    colors: {
      primary: "#101828",
      secondary: "#7F56D9",
      homebg: "#FFF3E3",
      roomsbg: "#FCF8F3",
    },
    boxShadow: {
      1: "0px 4px 30px rgba(0, 0, 0, 0.08)",
    },
  },
};
export const plugins = [];
