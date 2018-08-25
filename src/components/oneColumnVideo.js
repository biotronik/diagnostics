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
        <Container className="p-5">
          <Wistia video={this.props.video} />
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnVideo
