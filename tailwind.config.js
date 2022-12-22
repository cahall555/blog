/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./layouts/**/*.hbs"],
  theme: {
    colors: {
      "light-blue": "#8ECAE6",
      "medium-blue": "#219EBC",
      blue: "#0081a7",
      orange: "#FB8500",
      yellow: "#FFB703",
      "gray-dark": "#273444",
      gray: "#8492a6",
      "gray-light": "#d3dce6",
      white: "#ffffff",
      purple: "#7e5bef",
      pink: "#ff49db",
      green: "#13ce66",
      coral: "#f07167",
    },
    fontFamily: {
      serif: ["Merriweather", "serif"],
sans: ['Itim', 'sans-serif'],
		'permanent-marker': ['"Permanent Marker"', 'cursive'],
		jua: ['Jua', 'sans-serif'],

    },
  },
  plugins: [],
};
