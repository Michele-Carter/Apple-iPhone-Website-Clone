/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'next export', // Ensures Next.js builds a static export
  distDir: ".next"
  };
  
  module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
        // Add other pages here
      };
    },
  };
  
  
  
  