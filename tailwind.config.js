/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#ffffff",
      primary: "#00B2CE",
      secondary: "#223343",
      grey: {
        80: "#223343CC", //opacity-80
        60: "#22334399", //opacity-60
      },
    },
    fontFamily: {
      merriweather: "Merriweather-regular, sans-serif",
      "merriweather-bold": "Merriweather-bold, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    extend: {
      fontSize: {
        "Phone/Header1": ["40px"],
        "Phone/header2": ["24px"],
        "Phone/header3": ["16px"],
        "Phone/Label": ["16px", { lineHeight: "24px" }],
        "Phone/Labelsmall": ["7px"],
        "Phone/paragraph": ["14px"],
        "Phone/Quote": ["16px"],
        "Phone/buttonsmall": ["14px", { lineHeight: "21px" }],
        "Phone/buttonlarge": ["16px", { lineHeight: "24px" }],
        "Desktop/Header1": ["80px", { lineHeight: "120px" }],
        "Desktop/Header2": ["40px", { lineHeight: "45px" }],
        "Desktop/Header3": ["24px"],
        "Desktop/Label": ["20px", { lineHeight: "30px" }],
        "Desktop/paragraph": ["16px", { lineHeight: "10px" }],
        "Desktop/Quote": ["22px", { lineHeight: "25px" }],
        "Desktop/buttonsmall": ["18px", { lineHeight: "27px" }],
        "Desktop/buttonlarge": ["20px", { lineHeight: "30px" }],
        "Desktop/nav": ["16px", { lineHeight: "24px" }],
      },
      borderRadius: {
        "10px": "10px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
