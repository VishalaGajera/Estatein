/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        BgPurple: "#703BF7",
        BgWhite: "#FFFFFF",
        BgLightPurple: "#f5f2fd",
      },
      boxShadow: {
        custom: "0 0 20px 0 rgba(0, 0, 0, .20)",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, rgba(112, 59, 247, 1) 0%, rgba(112, 59, 247, 0) 100%)',
        'gradient-linear': 'linear-gradient(120.79deg, #703BF7 -49.01%, rgba(112, 59, 247, 0) 13.65%)',
      },
    },
  },
  plugins: [],
};
