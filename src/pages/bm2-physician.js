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
class BM2physician extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            image=""
            title="BioMonitor 2 Insertable Cardiac Monitor"
            subtitle="Capture. Deliver. Precisely."
            description="BioMonitor 2 is an insertable cardiac monitoring device designed to help physicians document evidence of a patient’s suspected cardiac arrhythmia or unexplained syncope.  Designed to accurately detect arrhythmias by delivering excellent signal quality, BioMonitor 2 offers the assurance of BIOTRONIK Home Monitoring reliability to deliver accurate episode detection with automatic daily transmissions and highly efficient alert management."
          />
        </Wrapper>

        <TwoColumnsTextImage
          listTitle="Why BioMonitor 2?"
          feature1="Accurate detection – High signal amplitudes are important to improve overall signal-to-noise ratios, which have a direct impact on detection accuracy."
          feature2="Performance, reliability, and ease of use – BIOTRONIK Home Monitoring performance is well documented both in clinical studies such as TRUST* and in over 17 years of real-world application."
          feature3="Efficient practice management – Alerts may be programmed remotely and are customizable for groups or individual patients"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_500/v1534732188/product/bm2/BIO19474_BioMonitor_2.png"
          feature4="MRI Compatible – Allows access to the most common, as well as access to the highest quality, imaging currently available"
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
          feature1="Excellent signal quality – High R-wave amplitude and low noise burden provide signal clarity"
          feature2="BIOTRONIK Home Monitoring® – BioMonitor 2 includes BIOTRONIK Home Monitoring, the only fully automatic, daily monitoring system for cardiac implantable or insertable devices"
          feature3="Flexible, efficient alert management – Robust, customizable alert parameters"
          feature4="Approved for full-body 1.5 T and 3.0 T MRI scanning"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_500/v1534732188/product/bm2/BIO19474_BioMonitor_2.png"
          alt="BioMonitor 2"
        />
        <OneColumnVideo video="https://biotronik.wistia.com/medias/u0oh7jv8vw" />
      </Fragment>
    )
  }
}

export default BM2physician
