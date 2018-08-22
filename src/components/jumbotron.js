import React, { Component, Fragment } from 'react'
import { Jumbotron, Container, Row, Col } from 'reactstrap'

const Styles = {
  backgroundImage: `url(https://images.pexels.com/photos/221340/pexels-photo-221340.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  marginBottom: '0',
}

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron fluid style={Styles}>
          <Container>
            <h1 className="display-6">Cardiac Diagnostics</h1>
            <p className="lead">Diagnosis begins with the right device</p>
            <hr className="my-2" />
            <p>
              BIOTRONIK matches technology to the human body to advance health
              and well-being with a comprehensive portfolio of cardiovascular
              solutions that are unmatched in safety and reliability.
            </p>
          </Container>
        </Jumbotron>
        <Container>
          <Row className="py-5  text-gray">
            <Col className="text-center">
              <p className="lead">
                MoMe Kardia is the first and only FDA ahproved deep-learning
                SaaS (software as a service) remote cardiac monitoring platform
                that replicates in-hospital monitoring to capture and stream
                beat-to-beat, full-disclosure cardiac data continuously, 24/7,
                for on-demand review
              </p>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default Banner
