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
    {
      resolve: `gatsby-plugin-google-tagmanager`,
      options: {
        id: 'GTM-MR8RLSJ',

        // Include GTM in development.
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,

        // Specify optional GTM environment details.
        gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING',
        gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME',
        dataLayerName: 'YOUR_DATA_LAYER_NAME',
      },
    },
  ],
}
