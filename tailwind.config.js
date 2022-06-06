module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
          colors: {
            background: {
              orange: '#E54416'
            },
            primary: "#E54416"
          }
        },
      },
    variants: {
        extend: {},
    },
    plugins: [],
}