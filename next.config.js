/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Static export
    exportPathMap: function () {
      return {
        '/': { page: '/' }, // Define the path for your homepage
      };
    },
  };
  
  module.exports = nextConfig;
  
  
  