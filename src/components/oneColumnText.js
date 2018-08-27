import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #587992;
  color: #ffffff;
`

class OneColumnText extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row className="py-5">
            <Col className="text-center">
              <h3>{this.props.title}</h3>
              <p className="lead">{this.props.text}</p>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnText
