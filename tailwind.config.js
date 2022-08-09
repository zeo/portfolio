const { neutral, blue } = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/**/*',
    ],
    theme: {
        extend: {
            colors: {
                primary: blue,
                gray: neutral,
            },
        },

        fontFamily: {
            sans: ['Inter'],
        },
    },
    plugins: [],
}
