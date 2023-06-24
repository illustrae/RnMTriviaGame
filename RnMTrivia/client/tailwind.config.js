/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'tvStatic': "url('/src/assets/tvstatic.gif')",
        'bgStars': "url('/src/assets/backgroundstars.gif')",
        'bgWall': "url('/src/assets/bgwall.png')"
      },
      fontFamily: {
        SchoolBell: ["Schoolbell", 'serif'],
      },
    },
  },
  plugins: [],
}

