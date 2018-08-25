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
            title="MoMe Kardia"
            subtitle="Get the full picture "
            description="MoMe Kardia  is a 3-in-1 ambulatory electrocardiograph detection and monitoring system that empowers physicians with accessible control over the data they need to diagnose and manage patients that are suspected of having or are experiencing cardiac arrhythmias."
          />
        </Wrapper>
        <OneColumnText text="MoMe Kardia is the first and only FDA approved deep-learning SaaS (software as a service) remote cardiac monitoring platform that replicates in-hospital monitoring to capture and stream beat-to-beat, full-disclosure cardiac data continuously, 24/7, for on-demand review." />
        <TwoColumnsImageText
          listTitle="Why MoMe Kardia?"
          feature1="Enhanced Workflow – Practices have fast and easy access to complete data, on-demand, anywhere, anytime"
          feature2="Ease of use and resource optimization – Automatically and continuously streams full-disclosure data to the cloud for analysis"
          feature3="Ownership – Practices gain full control over diagnostic workflow, including billing for both technical and professional services"
          feature4="Approved for full-body 1.5 T and 3.0 T MRI scanning"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="BioMonitor 2"
        />
        <OneColumnQuote
          quote="Last week I put MCT [MoMe®] on a patient … and it picked up 10-14 second asystolic events the following morning, and I was able to get a pacemaker in him that morning. No hospital telemetry stay, no ED visit, no unnecessary workups, no delay in diagnosis due to extended Holter … plus full disclosure data otherwise not available to clinicians with traditional IDTF type MCT. Less than 24 hours from MCT hookup to definitive treatment. That’s tremendous value to patients, clinicians, hospitals, and payers."
          physician="Michael Mazzini, MD"
        />
        <TwoColumnsTextImage
          listTitle="How does MoMe Kardia work?"
          feature1="Full Disclosure Data – 3-in-1 device transitions between Holter, Event, and MCT modes;  onset, offset, and event coordination data are available 24/7"
          feature2="Wireless device with automated analysis in the cloud – Provides a unique means to capture and analyze the patient’s cardiac data, with easy access to results"
          feature3="Efficient practice management – Alerts may be programmed remotely and are customizable for groups or individual patients"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          feature4="MRI Compatible – Allows access to the most common, as well as access to the highest quality, imaging currently available"
          alt="BioMonitor 2"
        />
      </Fragment>
    )
  }
}

export default MOMEphysician
