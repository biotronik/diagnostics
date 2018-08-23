import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'
import WistiaEmbed from './Wistia'

const Wrapper = styled.div`
  background-color: #00234c;
`

class OneColumnVideo extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Row className="py-5  text-gray">
            <Col className="text-center">
              <WistiaEmbed
                hashedId="yw2e8so7j2"
                playerColor="#587992"
                plugin={this.plugins}
              />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  }
}

export default OneColumnVideo
