import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
import OneColumnText from '../components/oneColumnText'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390546/product/767x600_MoMe_2.jpg');
  @media (min-width: 768px) {
    background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390263/product/1440x325_MoMe_2.jpg');
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
            heroTitle="MoMe Kardia"
            heroSubtitle="Get the full picture"
            heroDescription="MoMe Kardia  is a 3-in-1 ambulatory electrocardiograph detection and monitoring system that empowers physicians with accessible control over the data they need to diagnose and manage patients that are suspected of having or are experiencing cardiac arrhythmias."
          />
        </Wrapper>
        <OneColumnText text="MoMe Kardia is the first and only FDA approved deep-learning SaaS (software as a service) remote cardiac monitoring platform that replicates in-hospital monitoring to capture and stream beat-to-beat, full-disclosure cardiac data continuously, 24/7, for on-demand review." />
        <TwoColumnsImageText
          listTitle="Why MoMe Kardia?"
          featureA="Enhanced Workflow – Practices have fast and easy access to complete data, on-demand, anywhere, anytime"
          benefitA="Faster diagnosis -- Reduced time to diagnosis and decision making enables physicians to intervene more quickly, as needed"
          featureB="Ease of use and resource optimization – Automatically and continuously streams full-disclosure data to the cloud for analysis"
          benefitB="Clinically optimized technology -- Immediate processing of streaming data, with multi-algorithm analysis, full data and deep learning in the cloud"
          featureC="Ownership – Practices gain full control over diagnostic workflow, including billing for both technical and professional services"
          benefitC="Control and predictability – Practice takes charge of operations for cardiac ambulatory monitoring"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnQuote
          quote="Last week I put MCT [MoMe®] on a patient … and it picked up 10-14 second asystolic events the following morning, and I was able to get a pacemaker in him that morning. No hospital telemetry stay, no ED visit, no unnecessary workups, no delay in diagnosis due to extended Holter … plus full disclosure data otherwise not available to clinicians with traditional IDTF type MCT. Less than 24 hours from MCT hookup to definitive treatment. That’s tremendous value to patients, clinicians, hospitals, and payers."
          physician="Michael Mazzini, MD"
        />
        <TwoColumnsTextImage
          listTitle="How does MoMe Kardia work?"
          featureA="Full Disclosure Data – 3-in-1 device transitions between Holter, Event, and MCT modes;  onset, offset, and event coordination data are available 24/7"
          featureB="Wireless device with automated analysis in the cloud – Provides a unique means to capture and analyze the patient’s cardiac data, with easy access to results"
          featureC="Eliminates the need for a third-party service provider —Fully integrated solution requires no external service reporting	"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnText
          title="What's Next?"
          text="Request in-Person Demo: customersolutions@biotronik.com"
        />
      </Fragment>
    )
  }
}

export default MOMEphysician
