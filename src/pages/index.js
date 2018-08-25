import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import ProductGrid from '../components/productGrid'
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
    return (
      <Fragment>
        <Wrapper>
          <Banner
            image=""
            title={this.props.data.contentfulHeroSection.title}
            subtitle={this.props.data.contentfulHeroSection.subtitle}
            description="BIOTRONIK matches technology to the human body to advance health
          and well-being with a comprehensive portfolio of cardiovascular
          solutions that are unmatched in safety and reliability."
          />
        </Wrapper>

        <OneColumnText
          text={this.props.data.contentfulHeroSection.description.description}
        />

        <ProductGrid />
      </Fragment>
    )
  }
}

export default IndexPage

export const query = graphql`
  query Hero {
    contentfulHeroSection {
      id
      title
      subtitle
      description {
        id
        description
      }
    }
  }
`
