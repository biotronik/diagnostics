import React, { Component } from 'react'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from 'reactstrap'
import Link from 'gatsby-link'

class Products extends Component {
  render() {
    return (
      <Col md="6" className="mb-3">
        <Card className="h-100">
          <CardImg src={this.props.image} top width="100%" />
          <CardBody className="h-100 d-flex flex-column">
            <CardTitle className="h2 font-weight-bold">
              {this.props.title}
            </CardTitle>
            <CardTitle className="h4">{this.props.subtitle}</CardTitle>
            <CardText>
              <div
                dangerouslySetInnerHTML={{
                  __html: this.props.shortDescription,
                }}
              />
            </CardText>
            <CardText className="align-items-end d-flex justify-content-between align-items-end">
              <Link to={this.props.physicianLink}>
                <Button color="link">For Physicans</Button>
              </Link>
              <Link to={this.props.patientLink}>
                <Button color="link">For Patients</Button>
              </Link>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Products
