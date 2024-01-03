const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Bricolage Grotesque", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                darkgreen: "#00880d",
                darkgreenhover: "#269a31",
                lightgreen: "#eaffea",
                lightgreenhover: "#d3ffd3",
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
