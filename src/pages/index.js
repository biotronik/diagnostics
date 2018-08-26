import React, { Component, Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Banner from '../components/jumbotron'
import Products from '../components/products'
import OneColumnText from '../components/oneColumnText'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('https://via.placeholder.com/767x600');
  @media (min-width: 768px) {
    background-image: url('https://via.placeholder.com/1440x325');
  }
  background-size: cover;
  background-position: center;
  color: #fff;
  margin-bottom: 0;
`

class IndexPage extends Component {
  render() {
    console.log(this.props.data.allContentfulProductCard.edges[0])
    return (
      <Fragment>
        <Wrapper>
          <Banner
            image=""
            heroTitle={this.props.data.contentfulHomePage.heroTitle}
            heroSubtitle={this.props.data.contentfulHomePage.heroSubtitle}
            heroDescription={
              this.props.data.contentfulHomePage.heroDescription
                .childMarkdownRemark.html
            }
          />
        </Wrapper>

        <OneColumnText
          textBlock={
            this.props.data.contentfulHomePage.textBlock.childMarkdownRemark
              .html
          }
        />
        <Container>
          <Row>
            <Products
              image={
                'https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227871/product/bm2/BIO27348_BioMonitor_2__Impuls.jpg'
              }
              title={
                this.props.data.allContentfulProductCard.edges[1].node.title
              }
              subtitle={
                this.props.data.allContentfulProductCard.edges[1].node.subtitle
              }
              shortDescription={
                this.props.data.allContentfulProductCard.edges[1].node
                  .shortDescription.shortDescription
              }
              physicianLink={'/bm2-physician'}
              patientLink={'/bm2-patient'}
            />
            <Products
              image={
                'https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg'
              }
              title={
                this.props.data.allContentfulProductCard.edges[0].node.title
              }
              subtitle={
                this.props.data.allContentfulProductCard.edges[0].node.subtitle
              }
              shortDescription={
                this.props.data.allContentfulProductCard.edges[0].node
                  .shortDescription.shortDescription
              }
              physicianLink={'/mome-physician'}
              patientLink={'/mome-physician'}
            />
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default IndexPage

export const query = graphql`
  query Hero {
    contentfulHomePage {
      heroTitle
      heroSubtitle
      heroDescription {
        childMarkdownRemark {
          html
        }
      }
      textBlock {
        childMarkdownRemark {
          html
        }
      }
    }
    allContentfulProductCard {
      edges {
        node {
          id
          title
          subtitle
          shortDescription {
            shortDescription
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
