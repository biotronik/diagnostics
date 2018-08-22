import React, { Component } from 'react'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
            <CardTitle>{this.props.title}</CardTitle>
            <CardTitle>{this.props.subtitle}</CardTitle>
            <CardText>{this.props.shortDescription}</CardText>
            <CardText className="align-items-end d-flex justify-content-between flex-wrap">
              <Link to={this.props.physicianLink}>
                <Button>For Physicans</Button>
              </Link>
              <Link to={this.props.patientLink}>
                <Button>For Patients</Button>
              </Link>
            </CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }
}

export default Products
