/** @type {import('tailwindcss').Config} */
module.exports = {
  // এটি VS Code-কে বলবে এই ফোল্ডারের সব HTML ফাইলের ওপর নজর রাখতে
  content: ["./*.{html,js}"], 
  theme: {
    extend: {
      colors: {
        // 'bike-primary': '#E76F51',
        // 'bike-primary-bg': 'rgba(231,111,81,0.1)',
        // ভবিষ্যতে অন্য কোনো কাস্টম কালার লাগলে এখানে যোগ করবেন
      },
      fontFamily: {
        'poppins': ["Poppins", "sans-serif"],
      }
    },
  },
  plugins: [],
}
