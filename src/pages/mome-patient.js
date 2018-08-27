import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
import OneColumnText from '../components/oneColumnText'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390546/product/767x600_MoMe_1.jpg');
  @media (min-width: 768px) {
    background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390262/product/1440x325_MoMe_1.jpg');
  }
  background-size: cover;
  background-position: center;
  color: #fff;
  margin-bottom: 0;
`

class MOMEpatient extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            heroTitle="MoMe Kardia"
            heroSubtitle="Provides the full picture"
            heroDescription=":  MoMe Kardia is a mobile monitoring system that assists your physician in diagnosing heartbeat irregularities that may cause symptoms such as palpitations, fatigue, and fainting."
          />
        </Wrapper>
        <OneColumnText text=" It consists of three small stick-on patches that connect to a cellular transmission unit used for sending medical information to your physician for decisions about your treatment and care." />
        <TwoColumnsImageText
          listTitle="Why MoMe Kardia?"
          featureA="Convenience – – Your physician can monitor your heart activity remotely,  saving you time from having to travel to unnecessary appointments"
          featureB="Timely diagnosis -- Diagnosis of your condition can occur faster, and your physician can intervene immediately, as needed"
          featureC="Continuity of care – All care provided by the patient’s known and trusted medical provider"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnQuote
          title="Who is Using MoMe Kardia"
          quote="The MoMe device is the best I’ve used and I have been on a couple of different monitors. I was surprised to hear when I called my doctor’s office to tell them I wasn’t feeling great they were able to immediately look at my heartbeat. It was great to know they have the latest technology."
          physician="Joe G., Patient"
        />
        <TwoColumnsTextImage
          listTitle="How does MoMe Kardia work?"
          featureA="3-in-1 monitoring solution – Integrates three important cardiac monitoring modes into one device"
          featureB="Near real-time telemetry – Data from your heart is gathered, analyzed, and made available to your care team for review, quickly and continuously"
          featureC="No service intermediaries  -- Patients work directly with their own physician, never with a third-party service provider"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
      </Fragment>
    )
  }
}

export default MOMEpatient
