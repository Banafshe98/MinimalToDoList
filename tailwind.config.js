module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        'custom-beige':'#ECDFCC',
        'custom-green':'#697565',
        'custom-brown':'#3C3D37',
        'input': '#FFFDDE',
        'todo' : '#8B93FF',
        'add':'#FF71CD',
        'toggle' :'#5755FE',
        'layout':'#FFF7FC',
        'hover':'#FF3EA5',
        'done':'#06D001',
        'delete':'#FF004D'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  darkMode:'class'
}
