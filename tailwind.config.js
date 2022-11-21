module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  prefix: "tw-",
  theme: {
    colors: {
      'purple': "#9382E8",
      'primary': "#F2F1F3",
      'secondary': "#6D6A7C",
      'background': "#191627",
      'code': "#db8ddb",
      'name': "#fac863",
      'curlybrackets': "#7adf76",
      'property': "#8bd890"
    },
    screens: {
      'mobile': '640px',
      'tablet': '768px',
      'laptop': '1024px'
    },
    extend: {},
  },
  plugins: [],
}
