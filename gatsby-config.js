module.exports = {
  siteMetadata: {
    title: 'BIOTRONIK Cardiac Diagnostics ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'BIOTRONIK Cardiac Diagnostics',
        short_name: 'Diagnostics',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#a2466c',
        display: 'standalone',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
