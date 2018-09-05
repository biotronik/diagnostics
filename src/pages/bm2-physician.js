import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import { Container } from 'reactstrap'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
import OneColumnText from '../components/oneColumnText'
import OneColumnVideo from '../components/oneColumnVideo'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390546/product/767x600_biomonitor_1.jpg');
  @media (min-width: 768px) {
    background-image: url('https://res.cloudinary.com/binc/image/upload/v1535390263/product/1440x325_biomonitor_2.jpg');
  }
  background-size: cover;
  background-position: center;
  color: #fff;
  margin-bottom: 0;
`
class BM2physician extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            heroTitle="BioMonitor 2 Insertable Cardiac Monitor"
            heroSubtitle="Capture. Deliver. Precisely."
            heroDescription="BioMonitor 2 is an insertable cardiac monitoring device designed to help physicians document evidence of a patient’s suspected cardiac arrhythmia or unexplained syncope."
          />
        </Wrapper>
        <OneColumnText
          text={
            <div>
              Designed to accurately detect arrhythmias by delivering excellent
              signal quality, BioMonitor 2 offers the assurance of BIOTRONIK
              Home Monitoring<sup>&reg;</sup> reliability to deliver continuous
              arrhythmia monitoring with automatic daily transmissions and
              highly efficient alert management.
            </div>
          }
        />
        <TwoColumnsTextImage
          listTitle="Why BioMonitor 2?"
          featureA="Excellent signal quality -- High signal amplitudes are important to improve overall signal-to-noise ratios, which have a direct impact on detection accuracy."
          benefitA="Delivers  essential information -- BioMonitor 2 provides excellent signal quality, both at implant and at follow-up, for accurate and reliable arrhythmia detection"
          featureB="Performance, reliability, and ease of use -- BIOTRONIK Home Monitoring performance is well documented both in clinical studies such as TRUST* and in over 17 years of real-world application."
          benefitB="Supports clinic goals -- Allows clinics to improve patient outcomes and efficiency of clinical operations"
          featureC="Efficient practice management – Alerts may be programmed remotely and are customizable for groups or individual patients"
          benefitC="Simplifies clinic workload -- Reduces data management strain on device clinic"
          featureD="MRI Compatible -- Allows access to the most common, as well as access to the highest quality, imaging currently available"
          benefitD="Assurance of continuous cardiac monitoring in conjunction with MRI"
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
          title="Who Is Using BioMonitor 2?"
          quote={
            <div>
              "Look a little deeper, and you will start to discover that not
              only are the algorithms of these devices different … but more
              importantly, the way the data is reportable, the way the data is
              actionable, and the speed and efficiency and accuracy by which the
              information arrives in my hands can be completely different …"
            </div>
          }
          physician="Asim Yunus, MD"
        />
        <TwoColumnsImageText
          listTitle="How Does BioMonitor 2 Work?"
          featureA="Excellent signal quality – High R-wave amplitude and low noise burden provide signal clarity"
          featureB={
            <div>
              BIOTRONIK Home Monitoring<sup>&reg;</sup> – BioMonitor 2 includes
              BIOTRONIK Home Monitoring, the only fully automatic, daily
              monitoring system for cardiac implantable or insertable devices
            </div>
          }
          featureC="Flexible, efficient alert management – Robust, customizable alert parameters"
          featureD="Approved for full-body 1.5 T and 3.0 T MRI scanning"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535737442/product/bm2/BIO14121_BioMonitor_2_und_CardioMessenger_Smart.png"
          alt="BioMonitor 2"
        />
        <OneColumnVideo
          title="Listen to Dr. Yunus on the future of ICM technologies"
          video="https://biotronik.wistia.com/medias/u0oh7jv8vw"
        />
        <OneColumnText
          title="What's next?"
          text="Contact your local BIOTRONIK sales representative to learn more"
        />
      </Fragment>
    )
  }
}

export default BM2physician
