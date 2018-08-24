import React from 'react'
import PropTypes from 'prop-types'
import { injectGlobal } from 'styled-components'
import Helmet from 'react-helmet'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/header'
import Footer from '../components/footer'

import appletouchicon57x57 from '../images/apple-touch-icon-57x57.png'
import appletouchicon72x72 from '../images/apple-touch-icon-72x72.png'
import appletouchicon76x76 from '../images/apple-touch-icon-76x76.png'
import appletouchicon114x114 from '../images/apple-touch-icon-114x114.png'
import appletouchicon120x120 from '../images/apple-touch-icon-120x120.png'
import appletouchicon144x144 from '../images/apple-touch-icon-144x144.png'
import appletouchicon152x152 from '../images/apple-touch-icon-152x152.png'
import appletouchicon180x180 from '../images/apple-touch-icon-180x180.png'

import appletouchstartupimage640x1136 from '../images/apple-touch-startup-image-640x1136.png'
import appletouchstartupimage750x1294 from '../images/apple-touch-startup-image-750x1294.png'
import appletouchstartupimage1125x2436 from '../images/apple-touch-startup-image-1125x2436.png'
import appletouchstartupimage1242x2148 from '../images/apple-touch-startup-image-1242x2148.png'
import appletouchstartupimage1536x2048 from '../images/apple-touch-startup-image-1536x2048.png'
import appletouchstartupimage1668x2224 from '../images/apple-touch-startup-image-1668x2224.png'
import appletouchstartupimage2048x2732 from '../images/apple-touch-startup-image-2048x2732.png'

injectGlobal`
html{
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  font-weight: 400;

}
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
    a:hover {
      text-decoration: none;
    }
    a:active {
      text-decoration: none;
    }
  }
`

const Layout = ({ children, data }) => (
  <div>
    <Helmet>
      <title>BIOTRONIK Cardiac Diagnostics</title>
      <meta
        name="description"
        content="BIOTRONIK’s cardiac diagnostic devices help physicians detect and monitor evidence of a patient’s suspected arrhythmia or unexplained syncope."
      />
      <meta
        name="keywords"
        content="cardiac diagnostics, arrhythmia, heart, biotronik"
      />
      <link rel="apple-touch-icon" sizes="57x57" href={appletouchicon57x57} />
      <link rel="apple-touch-icon" sizes="72x72" href={appletouchicon72x72} />
      <link rel="apple-touch-icon" sizes="76x76" href={appletouchicon76x76} />
      <link
        rel="apple-touch-icon"
        sizes="114x114"
        href={appletouchicon114x114}
      />
      <link
        rel="apple-touch-icon"
        sizes="120x120"
        href={appletouchicon120x120}
      />
      <link
        rel="apple-touch-icon"
        sizes="144x144"
        href={appletouchicon144x144}
      />
      <link
        rel="apple-touch-icon"
        sizes="152x152"
        href={appletouchicon152x152}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={appletouchicon180x180}
      />

      <meta name="apple-mobile-web-app-capable" content="yes" />
      <link
        href={appletouchstartupimage2048x2732}
        sizes="2048x2732"
        rel="apple-touch-startup-image"
      />
      <link
        href={appletouchstartupimage1668x2224}
        sizes="1668x2224"
        rel="apple-touch-startup-image"
      />
      <link
        href={appletouchstartupimage1536x2048}
        sizes="1536x2048"
        rel="apple-touch-startup-image"
      />
      <link
        href={appletouchstartupimage1125x2436}
        sizes="1125x2436"
        rel="apple-touch-startup-image"
      />
      <link
        href={appletouchstartupimage1242x2148}
        sizes="1242x2148"
        rel="apple-touch-startup-image"
      />
      <link
        href={appletouchstartupimage750x1294}
        sizes="750x1294"
        rel="apple-touch-startup-image"
      />
      <link
        href={appletouchstartupimage640x1136}
        sizes="640x1136"
        rel="apple-touch-startup-image"
      />
    </Helmet>

    <Header siteTitle={data.site.siteMetadata.title} />
    {children()}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
