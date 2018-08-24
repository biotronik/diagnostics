import React, { Component } from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'

class TwoColumnsImageText extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="6">
            <img
              src={this.props.image}
              className="img-fluid"
              alt="{this.props.alt}"
            />
          </Col>
          <Col md="6" className="py-4">
            <h3 className="text-center pb-3 text-uppercase">
              {this.props.listTitle}
            </h3>
            <ListGroup flush>
              {this.props.feature1 ? (
                <ListGroupItem>{this.props.feature1}</ListGroupItem>
              ) : null}
              {this.props.feature2 ? (
                <ListGroupItem>{this.props.feature2}</ListGroupItem>
              ) : null}
              {this.props.feature3 ? (
                <ListGroupItem>{this.props.feature3}</ListGroupItem>
              ) : null}
              {this.props.feature4 ? (
                <ListGroupItem>{this.props.feature4}</ListGroupItem>
              ) : null}
              {this.props.feature5 ? (
                <ListGroupItem>{this.props.feature5}</ListGroupItem>
              ) : null}
              {this.props.feature6 ? (
                <ListGroupItem>{this.props.feature6}</ListGroupItem>
              ) : null}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TwoColumnsImageText
