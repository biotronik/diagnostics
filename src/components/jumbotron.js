import React, { Component, Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap'

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
      </Fragment>
    )
  }
}

export default Banner
