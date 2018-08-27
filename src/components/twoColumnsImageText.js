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
                <ListGroupItem>
                  <p>{this.props.featureA}</p>
                  <i>
                    <h6>{this.props.benefitA}</h6>
                  </i>
                </ListGroupItem>
              ) : null}
              {this.props.featureB ? (
                <ListGroupItem>
                  <p>{this.props.featureB}</p>
                  <i>
                    <h6>{this.props.benefitB}</h6>
                  </i>
                </ListGroupItem>
              ) : null}
              {this.props.featureC ? (
                <ListGroupItem>
                  <p>{this.props.featureC}</p>
                  <i>
                    <h6>{this.props.benefitC}</h6>
                  </i>
                </ListGroupItem>
              ) : null}
              {this.props.featureD ? (
                <ListGroupItem>
                  <p>{this.props.featureD}</p>
                  <i>
                    <h6>{this.props.benefitD}</h6>
                  </i>
                </ListGroupItem>
              ) : null}
              {this.props.featureE ? (
                <ListGroupItem>
                  <p>{this.props.featureE}</p>
                  <i>
                    <h6>{this.props.benefitE}</h6>
                  </i>
                </ListGroupItem>
              ) : null}
              {this.props.featureF ? (
                <ListGroupItem>
                  <p>{this.props.featureF}</p>
                  <i>
                    <h6>{this.props.benefitF}</h6>
                  </i>
                </ListGroupItem>
              ) : null}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default TwoColumnsImageText
