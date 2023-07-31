/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'moher':"url('https://media.istockphoto.com/id/1045814682/photo/beautiful-panoramic-sunset-view-over-the-claddagh-galway-in-galway-city-ireland.jpg?b=1&s=612x612&w=0&k=20&c=xswxkanfzWXB0m-UoAgyIBhWvlzCNIsVXs5YUnBApXI=')"
      },
    },
  },
  plugins: [],
}
