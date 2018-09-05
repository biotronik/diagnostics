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
            heroTitle={
              <div>
                MoMe Kardia<sup>&#8482;</sup>
              </div>
            }
            heroSubtitle="Provides the full picture"
            heroDescription={
              <div>
                MoMe Kardia<sup>&#8482;</sup> is a mobile monitoring platform
                that assists your physician in diagnosing heartbeat
                irregularities that may cause symptoms such as palpitations,
                fatigue, and fainting.
              </div>
            }
          />
        </Wrapper>
        <OneColumnText
          text={
            <div>
              MoMe Kardia<sup>&#8482;</sup> consists of three small adhesive
              patches that connect to a cellular monitor used for sending
              medical information to your physician to support decisions about
              your treatment and care.
            </div>
          }
        />
        <TwoColumnsImageText
          listTitle={
            <div>
              Why MoMe Kardia<sup>&#8482;</sup>?
            </div>
          }
          featureA="Convenience -- Your physician can monitor your heart activity and change test types remotely, saving you time from having to travel to unnecessary appointments"
          benefitA="Fewer office visits – Eliminates return trips to the clinic to initiate alternative testing"
          featureB="Timely diagnosis -- Diagnosis of your condition can occur faster, and your physician can intervene immediately, as needed"
          benefitB="No waiting or delays for a test period to end before your physician receives data and for you to receive treatment"
          featureC="Continuity of care -- All care provided by your known and trusted medical provider"
          benefitC="Consistency -- Work directly with your own physician's office without involvement of third-party service providers "
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnQuote
          title={
            <div>
              Who is Using MoMe Kardia<sup>&#8482;</sup>?
            </div>
          }
          quote={
            <div>
              "The MoMe<sup>&reg;</sup> device is the best I’ve used and I have
              been on a couple of different monitors. I was surprised to hear
              when I called my doctor’s office to tell them I wasn’t feeling
              great they were able to immediately look at my heartbeat. It was
              great to know they have the latest technology."
            </div>
          }
          physician="Joe G., Patient"
        />
        <TwoColumnsTextImage
          listTitle={
            <div>
              How does MoMe Kardia<sup>&#8482;</sup> work?
            </div>
          }
          featureA="3-in-1 monitoring solution – Integrates three important cardiac monitoring modes into one device"
          featureB="Near real-time telemetry – Data from your heart is gathered, analyzed, and made available to your care team for review, quickly and continuously"
          featureC="No service intermediaries  -- Patients work directly with their own physician, never with a third-party service provider"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1534453529/product/IMG_2481.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnText
          title="What's next?"
          text="Ask your medical doctor for more information"
        />
      </Fragment>
    )
  }
}

export default MOMEpatient
