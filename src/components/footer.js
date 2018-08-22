import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Logo from '../images/bio_logo_white.svg'

const Wrapper = {
  backgroundColor: '#00234C',
  position: 'relative',
  bottom: 0,
  height: '30vh',
}

const FooterStyles = {
  textAlign: 'center',
  color: '#fff',
  padding: '30px',
  fontSize: '12px',
  leftCard: {
    textAlign: 'left',
  },
  rightCard: {
    textAlign: 'right',
  },
}

class Footer extends Component {
  render() {
    return (
      <Container fluid style={Wrapper}>
        <Container style={FooterStyles}>
          <Row>
            <Col>
              <img
                src={Logo}
                alt="BIOTRONIK Logo"
                width="100px"
                height="auto"
              />
              <br />
              <br />
              <p>
                6024 Jean Road
                <br />
                Lake Oswego, OR 97035
              </p>
              <p>2018 BIOTRONIK, Inc. | All Rights Reserved</p>
            </Col>
          </Row>
        </Container>
      </Container>
    )
  }
}

export default Footer
