import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import Wistia from './wistiaPlayer'

const Wrapper = styled.div`
  background-color: #587992;
`

class OneColumnVideo extends Component {
  render() {
    return (
      <Wrapper>
        <Container className="py-4">
          <p className="lead text-center text-light">{this.props.title}</p>
          <Wistia video={this.props.video} className="pb-3" />
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnVideo
