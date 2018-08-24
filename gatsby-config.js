module.exports = {
  siteMetadata: {
    title: 'BIOTRONIK Cardiac Diagnostics ',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
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
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `9azfumkamx1o`,
        accessToken: `37915af3d1f1fda7690e6a3e6047a756c502c245f2fd1f9bbc41db9c488c6f99`,
      },
    },
  ],
}
