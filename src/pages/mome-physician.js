import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
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

class MOMEphysician extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            heroTitle={this.props.data.contentfulProductPage.heroTitle}
            heroSubtitle={this.props.data.contentfulProductPage.heroSubtitle}
            heroDescription={
              this.props.data.contentfulProductPage.heroDescription
            }
          />
        </Wrapper>
        <OneColumnText
          textBlock={
            this.props.data.contentfulProductPage.contentBlock1
              .childMarkdownRemark.html
          }
        />
        <TwoColumnsImageText
          listTitle="Why MoMe Kardia?"
          featureA={this.props.data.contentfulProductPage.feature1a}
          featureB={this.props.data.contentfulProductPage.feature1b}
          featureC={this.props.data.contentfulProductPage.feature1c}
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnQuote
          quote="Last week I put MCT [MoMe®] on a patient … and it picked up 10-14 second asystolic events the following morning, and I was able to get a pacemaker in him that morning. No hospital telemetry stay, no ED visit, no unnecessary workups, no delay in diagnosis due to extended Holter … plus full disclosure data otherwise not available to clinicians with traditional IDTF type MCT. Less than 24 hours from MCT hookup to definitive treatment. That’s tremendous value to patients, clinicians, hospitals, and payers."
          physician="Michael Mazzini, MD"
        />
        <TwoColumnsTextImage
          listTitle="How does MoMe Kardia work?"
          featureA={this.props.data.contentfulProductPage.feature2a}
          featureB={this.props.data.contentfulProductPage.feature2b}
          featureC={this.props.data.contentfulProductPage.feature2c}
          featureD={this.props.data.contentfulProductPage.feature2d}
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
      </Fragment>
    )
  }
}

export default MOMEphysician

export const query = graphql`
  query MOMEPhysicanPageQuery {
    contentfulProductPage(contentful_id: { eq: "5cIO8KHxCEeU8k6yQGqac0" }) {
      heroTitle
      heroSubtitle
      heroDescription
      contentBlock1 {
        childMarkdownRemark {
          html
        }
      }
      benefit1
      feature1a
      feature1b
      feature1c
      benefit2
      feature2a
      feature2b
      feature2c
      contentBlock2 {
        childMarkdownRemark {
          html
        }
      }
      contentBlock3 {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
