module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        bannerImage:"url('https://links.papareact.com/0fm')"
    }
    },
  },
  variants: {
    extend:{
     
    },
  },
  plugins: [],
}
