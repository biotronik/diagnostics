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
        <Container className="mb-4">
          <Row className="py-5">
            <Col className="text-center">
              <div
                className="lead"
                dangerouslySetInnerHTML={{ __html: this.props.textBlock }}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnText
