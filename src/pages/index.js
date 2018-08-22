import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import ProductGrid from '../components/productGrid'

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <ProductGrid />
      </Fragment>
    )
  }
}

export default IndexPage
