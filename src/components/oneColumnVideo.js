import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #00234c;
`

class OneColumnVideo extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row className="py-5  text-gray">
            <Col className="text-center">Placeholder</Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnVideo
