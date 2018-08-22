import React, { Component } from 'react'
import Products from './Products'
import { Container, Row, Col } from 'reactstrap'

class ProductGrid extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Products
            image={
              'http://res.cloudinary.com/binc/image/upload/c_fit,q_60,w_540/v1534732188/product/bm2/BIO19474_BioMonitor_2.png'
            }
            title={'Hello'}
            subtitle={'test'}
            shortDescription={'test'}
            physicianLink={'/bm2-physician'}
            patientLink={'/bm2-patient'}
          />
          <Products
            image={
              'http://res.cloudinary.com/binc/image/upload/c_fit,q_60,w_540/v1534728216/product/mome/ZE1A4149_DxO.png'
            }
            title={'Hello'}
            subtitle={'test'}
            shortDescription={'test'}
            physicianLink={'/mome-physician'}
            patientLink={'/mome-physician'}
          />
        </Row>
      </Container>
    )
  }
}

export default ProductGrid
