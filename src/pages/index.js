import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import { Container, Row, Col } from 'reactstrap'
import ProductGrid from '../components/productGrid'

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Banner />
        <Container>
          <Row className="py-5  text-gray">
            <Col className="text-center">
              <p className="lead">
                Two innovative cardiac diagnostic platforms, MoMe Kardia and
                BioMonitor 2, are tailored to help improve the patient’s journey
                to health. Each tool is designed to give physicians a deeper
                understanding of the patient’s condition, and each allows
                patients to maintain their normal daily activities with comfort
                and minimal interference.
              </p>
            </Col>
          </Row>
        </Container>
        <ProductGrid />
      </Fragment>
    )
  }
}

export default IndexPage
