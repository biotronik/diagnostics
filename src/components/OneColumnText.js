import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #fff;
`

class OneColumnText extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row className="py-5  text-gray">
            <Col className="text-center">
              <p className="lead">{this.props.text}</p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnText
