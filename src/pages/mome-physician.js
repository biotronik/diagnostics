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
            heroTitle={
              <div>
                MoMe Kardia<sup>&#8482;</sup>
              </div>
            }
            heroSubtitle="Get the full picture"
            heroDescription={
              <div>
                MoMe Kardia<sup>&#8482;</sup> is a 3-in-1 ambulatory
                electrocardiograph detection and monitoring platform that
                empowers physicians with accessible control over data needed to
                diagnose and manage patients that are suspected of having or are
                experiencing cardiac arrhythmias.
              </div>
            }
          />
        </Wrapper>
        <OneColumnText
          text={
            <div>
              MoMe Kardia<sup>&#8482;</sup> is the first and only FDA cleared
              deep-learning SaaS (software as a service) remote cardiac
              monitoring platform that replicates in-hospital monitoring to
              capture and stream beat-to-beat, full-disclosure cardiac ECG data
              continuously, 24/7, for on-demand review.
            </div>
          }
        />
        <TwoColumnsImageText
          listTitle={
            <div>
              Why MoMe Kardia<sup>&#8482;</sup>?
            </div>
          }
          featureA="Enhanced Workflow – Practices have fast and easy access to complete data, on-demand, anywhere, anytime"
          benefitA="Faster diagnosis -- Reduced time to diagnosis and decision making enables physicians to intervene more quickly, as needed"
          featureB="Ease of use and resource optimization – Automatically and continuously streams full-disclosure data to the cloud for analysis"
          benefitB="Clinically optimized technology -- Immediate processing of streaming data, with multi-algorithm analysis, full data and deep learning in the cloud"
          featureC="Ownership – Practices gain full control over diagnostic workflow, including access to global reimbursement for services using existing CPT codes"
          benefitC="Control and predictability – Practice takes charge of operations for cardiac ambulatory monitoring"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnQuote
          quote={
            <div>
              "MoMe Kardia<sup>&#8482;</sup> is the only system that allows me
              to verify reported events, as well as review onset and offset data
              to identify event triggers. It truly is the new gold standard for
              user friendly full disclosure."
            </div>
          }
          physician="Colin Movsowitz, MD"
        />
        <TwoColumnsTextImage
          listTitle={
            <div>
              How does MoMe Kardia<sup>&#8482;</sup> work?
            </div>
          }
          featureA="Full Disclosure Data – 3-in-1 device transitions between Holter, Event, and MCT modes;  onset, offset, and event coordination data are available 24/7"
          featureB="Wireless device with automated analysis in the cloud – Provides a unique means to capture and analyze the patient’s cardiac data, with easy access to results"
          featureC="Eliminates the need for a third-party service provider —Fully integrated solution requires no external service reporting	"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1534453529/product/IMG_2481.jpg"
          alt="MoMe Kardia"
        />
        <OneColumnText
          title="What's Next?"
          email="customersolutions@biotronik.com"
          text="Request in-Person Demo: customersolutions@biotronik.com"
        />
      </Fragment>
    )
  }
}

export default MOMEphysician
