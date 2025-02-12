
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",  // Adjust this if you're using other file extensions
  ],
  theme: {
    extend: {
      fontFamily: {
        antonio: ['Antonio', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        imperial: ['Imperial Script', 'cursive'],
        kalam: ['Kalam', 'cursive'],
      },
    },
  },
  plugins: [],
}

