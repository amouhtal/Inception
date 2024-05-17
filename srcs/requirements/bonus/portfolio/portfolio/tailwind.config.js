/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        "primary-color": "#2b3d43",
        "primary-color-light": "#3d535f",
        "secondary-color": "#E1EAE9",
        "third-color": "#2b4331",
        "third-color-light": "#3d5f46",
        "text-color": "#2b3d43",
        "text-secondary-color": "#7f00ff",
        "text-color-light": "#43ff64d9",
        "text-color-dark": "#ffffff",
        "text-color-light-dark": "#43ff64d9",
        "heading-color": "#000",
        "subheading-color": "#454545",
        "paragraph-color": "#7F7F7F",
        "heading-color-dark": "#ffffff",
        "subheading-color-dark": "#ffffff",
        "paragraph-color-dark": "#868e96",
        "button-color": "#55198b",
      },
      boxShadow: {
        "15xl": "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        shadowHover: "0 8px 16px 0 rgba(0, 0, 0, 0.2)",
        "education-shadow": " 0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        "education-shadow-dark": "0 8px 16px 0 rgba(0, 0, 5, 0.2)",
        "dark-mode-shadow": " 10px 2px 18px rgba(0, 0, 0, 0.5)",
      },
      height: {
        290: "20rem",
        368: "23rem",
      },
    },
  },
  plugins: [
    // heading class
  ],
  darkMode: "class",
};
