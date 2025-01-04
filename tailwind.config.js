import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Noto Sans TC', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Wittgenstein', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
      // borderRadius: {
      //   '2xl-custom': '2rem',
      //   'xl-custom': '1rem',
      // },
      screens: {
        sm: '600px',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
