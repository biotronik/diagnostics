import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

class TwoColumnsTextImage extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6" className="py-4">
            <h3 className="text-center pb-3 text-uppercase">
              {this.props.listTitle}
            </h3>
            <ListGroup flush>
              <ListGroupItem>{this.props.feature1}</ListGroupItem>
              <ListGroupItem>{this.props.feature2}</ListGroupItem>
              <ListGroupItem>{this.props.feature3}</ListGroupItem>
            </ListGroup>
          </Col>
          <Col md="6">
            <img
              src={this.props.image}
              className="img-fluid"
              alt="{this.props.alt}"
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TwoColumnsTextImage
