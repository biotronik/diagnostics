import React, { Component, Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap'

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron
          fluid
          style={{
            backgroundImage: `url(${this.props.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: '#fff',
            marginBottom: '0',
            backgroundColor: '#00234C',
          }}
        >
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
