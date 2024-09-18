/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // ensures Next.js builds a static export
};
  
module.exports = {
    exportPathMap: function () {
      return {
        '/': { page: '/' },
      };
    },
  };
  
  module.exports = nextConfig;
  
  