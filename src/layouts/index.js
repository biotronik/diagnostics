import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import Header from '../components/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import { injectGlobal } from 'styled-components'
import Footer from '../components/footer'

import appletouch from '../images/apple-touch-icon.png'

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
      <title>My Title</title>
      <meta
        name="description"
        content="BIOTRONIK’s cardiac diagnostic devices help physicians detect and monitor evidence of a patient’s suspected arrhythmia or unexplained syncope."
      />
      <meta
        name="keywords"
        content="cardiac diagnostics, arrhythmia, heart, biotronik"
      />
      <link rel="apple-touch-icon" href={appletouch} />
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
