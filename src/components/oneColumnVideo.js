import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import ResponsivePlayer from './wistiaPlayer'

const Wrapper = styled.div`
  background-color: #00234c;
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
