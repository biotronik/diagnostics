import React, { Component, Fragment } from 'react'
import { Jumbotron, Container } from 'reactstrap'

class Banner extends Component {
  render() {
    return (
      <Fragment>
        <Jumbotron fluid style={{ background: 'none', marginBottom: '0' }}>
          <Container>
            <h1 className="display-6">{this.props.heroTitle}</h1>
            <p className="lead">{this.props.heroSubtitle}</p>
            <hr className="my-2" />
            <div
              dangerouslySetInnerHTML={{ __html: this.props.heroDescription }}
            />
          </Container>
        </Jumbotron>
      </Fragment>
    )
  }
}

export default Banner
