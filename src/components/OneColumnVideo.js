import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import ResponsivePlayer from './wistia'

const Wrapper = styled.div`
  background-color: #00234c;
`
const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
`
const ResponsiveReactPlayer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
`

class OneColumnVideo extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row className="py-5  text-gray">
            <ResponsivePlayer />
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnVideo
