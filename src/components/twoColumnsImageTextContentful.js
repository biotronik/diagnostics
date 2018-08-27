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
            <h3 className="text-center pb-3">{this.props.listTitle}</h3>
            <ListGroup flush>
              {this.props.featureA ? (
                <ListGroupItem>{this.props.featureA}</ListGroupItem>
              ) : null}
              {this.props.featureB ? (
                <ListGroupItem>{this.props.featureB}</ListGroupItem>
              ) : null}
              {this.props.featureC ? (
                <ListGroupItem>{this.props.featureC}</ListGroupItem>
              ) : null}
              {this.props.featureD ? (
                <ListGroupItem>{this.props.featureD}</ListGroupItem>
              ) : null}
              {this.props.featureE ? (
                <ListGroupItem>{this.props.featureE}</ListGroupItem>
              ) : null}
              {this.props.featureF ? (
                <ListGroupItem>{this.props.featureF}</ListGroupItem>
              ) : null}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TwoColumnsImageText
