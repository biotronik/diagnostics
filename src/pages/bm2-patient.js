import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import { Container } from 'reactstrap'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
import OneColumnVideo from '../components/oneColumnVideo'
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
class BM2patient extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            heroTitle="{this.props.data.contentfulProductPage.heroTitle}"
            heroSubtitle="{this.props.data.contentfulProductPage.heroSubtitle}"
            heroDescription="{
              this.props.data.contentfulProductPage.heroDescription
            }"
          />
        </Wrapper>

        <TwoColumnsTextImage
          listTitle="Why BioMonitor 2?"
          featureA="{this.props.data.contentfulProductPage.feature1a}"
          featureB="{this.props.data.contentfulProductPage.feature1b}"
          featureC="{this.props.data.contentfulProductPage.feature1c}"
          featureD="{this.props.data.contentfulProductPage.feature1d}"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227871/product/bm2/BIO27348_BioMonitor_2__Impuls.jpg"
          alt="BioMonitor 2"
        />
        <Container
          className="font-italic font-weight-light"
          style={{ fontSize: '11px' }}
        >
          <p>
            * Varma N. et al. Efficacy and safety of automatic remote monitoring
            for implantable cardioverter-defibrillator follow-up: the Lumos-T
            Safely Reduces Routine Office Device Follow-up (TRUST) trial.
            Circulation. 2010, 325-322
          </p>
        </Container>
        <OneColumnQuote
          quote="Look a little deeper, and you will start to discover that not only are the algorithms of these devices different … but more importantly, the way the data is reportable, the way the data is actionable, and the speed and efficiency and accuracy by which the information arrives in my hands can be completely different …"
          physician="Asim Yunus, MD"
        />
        <TwoColumnsImageText
          listTitle="How Does BioMonitor 2 Work?"
          featureA="{this.props.data.contentfulProductPage.feature2a}"
          featureB="{this.props.data.contentfulProductPage.feature2b}"
          featureC="{this.props.data.contentfulProductPage.feature2c}"
          featureD="{this.props.data.contentfulProductPage.feature2d}"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227871/product/bm2/BIO27348_BioMonitor_2__Impuls.jpg"
          alt="BioMonitor 2"
        />
        <OneColumnVideo
          title="Listen to Dr. Yunus on the future of ICM technologies"
          video="https://biotronik.wistia.com/medias/u0oh7jv8vw"
        />
      </Fragment>
    )
  }
}

export default BM2patient
