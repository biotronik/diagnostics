import React, { Component, Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap'

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron fluid style={{ background: 'none', marginBottom: '0' }}>
          <Container>
            <h1 className="display-6">{this.props.title}</h1>
            <p className="lead">{this.props.subtitle}</p>
            <hr className="my-2" />
            <p>{this.props.description}</p>
          </Container>
        </Jumbotron>
      </Fragment>
    )
  }
}

export default Banner
