import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import { Container } from 'reactstrap'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
import OneColumnText from '../components/oneColumnText'
import OneColumnVideo from '../components/oneColumnVideo'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390546/product/767x600_biomonitor_2.jpg');
  @media (min-width: 768px) {
    background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390263/product/1440x325_biomonitor_1.jpg');
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
            heroTitle="BioMonitor 2 Insertable Cardiac Monitor"
            heroSubtitle="Capture. Deliver. Precisely."
            heroDescription="BioMonitor 2 is a small electrocardiogram (ECG) device that is capable of recording your heart rhythm over an extended period of time and stores information about any irregularities in your heartbeat. "
          />
        </Wrapper>
        <OneColumnText text="Your doctor inserts the device just beneath the skin, usually directly over the heart. The device can closely monitor your heart’s activity using the ECG recordings. With this ECG information, your doctor is in a better position to make decisions about your diagnosis and treatment, and to provide you with the best care." />
        <TwoColumnsTextImage
          listTitle="Why BioMonitor 2?"
          featureA="Convenience -- No external monitors, cables, or patches that attach to your skin"
          benefitA="No lifestyle restrictions -- BioMonitor 2 is comfortable and unobtrusive, allowing you to maintain the normal activities of your everyday life.  Not visually noticeable under the skin for the vast majority of patients."
          featureB="Captures critical information -- Records heartbeat irregularities very precisely, stores the information, and transmits it to your doctor"
          benefitB="Facilitates diagnosis -- Your physician can diagnose your condition quickly, accurately, and reliably to provide you with the best care"
          featureC="Painless, efficient, low-risk insertion -- BioMonitor is inserted (just under the skin). In a simple procedure that usually takes less than 10 minutes and can be performed under local anesthesia."
          benefitC="Routine procedure -- Little or no disruption to the patient’s daily life for insertion  procedure."
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227871/product/bm2/BIO27348_BioMonitor_2__Impuls.jpg"
          alt="BioMonitor 2"
        />
        <OneColumnQuote
          quote="The existence of these devices allows us to meet most of the criteria which are almost not available when you are using Holter monitors and wearable devices… "
          physician="Asim Yunus, MD"
        />
        <TwoColumnsImageText
          listTitle="How Does BioMonitor 2 Work?"
          featureA="Compact size -- Self-contained, implanted device"
          featureB="Provides vital information – Monitors and records your heart rhythm over an extended time period and sends it to your physician"
          featureC="Easy insertion – Inserting the BioMonitor 2 is a short, uncomplicated procedure"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535737442/product/bm2/BIO14121_BioMonitor_2_und_CardioMessenger_Smart.png"
          alt="BioMonitor 2"
        />
        {/* <OneColumnVideo
          title="Listen to Dr. Yunus on the future of ICM technologies"
          video="https://biotronik.wistia.com/medias/u0oh7jv8vw"
        /> */}
        <OneColumnText
          title="What's next?"
          text="Ask your medical doctor for more information"
        />
      </Fragment>
    )
  }
}

export default BM2patient
