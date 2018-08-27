import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: #587992;
  color: #fff;
`

class OneColumnQuote extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row>
            <Col className="py-4  text-center">
              <h3>{this.props.title}</h3>
              <blockquote className="blockquote">
                <p className="mb-0">"{this.props.quote}"</p>
                <footer className="blockquote-footer text-light">
                  {this.props.physician}
                </footer>
              </blockquote>
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnQuote
