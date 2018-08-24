import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import TwoColumnsTextImage from '../components/twoColumnsTextImage'
import TwoColumnsImageText from '../components/twoColumnsImageText'
import OneColumnQuote from '../components/oneColumnQuote'
import OneColumnVideo from '../components/oneColumnVideo'

class BM2physician extends Component {
  render() {
    return (
      <Fragment>
        <Banner
          image=""
          title="Capture.  Deliver. Precisely."
          subtitle="BioMonitor 2 Insertable Cardiac Monitor"
          description="BioMonitor 2 is an insertable cardiac monitoring device designed to help physicians document evidence of a patient’s suspected cardiac arrhythmia or unexplained syncope.  Designed to accurately detect arrhythmias by delivering excellent signal quality, BioMonitor 2 offers the assurance of BIOTRONIK Home Monitoring reliability to deliver accurate episode detection with automatic daily transmissions and highly efficient alert management."
        />
        <TwoColumnsTextImage
          listTitle="Why BioMonitor 2?"
          feature1="Accurate detection-- High signal amplitudes are important to improve overall signal-to-noise ratios, which have a direct impact on detection accuracy."
          feature2="Performance, reliability, and ease of use -- BIOTRONIK Home Monitoring performance is well documented both in clinical studies such as TRUST* and in over 17 years of real-world application."
          feature3="Efficient practice management – Alerts may be programmed remotely and are customizable for groups or individual patients"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_500/v1534732188/product/bm2/BIO19474_BioMonitor_2.png"
          alt="BioMonitor 2"
        />
        <OneColumnQuote
          quote="Look a little deeper, and you will start to discover that not only are the algorithms of these devices different … but more importantly, the way the data is reportable, the way the data is actionable, and the speed and efficiency and accuracy by which the information arrives in my hands can be completely different …"
          physician="Asim Yunus, MD"
        />
        <TwoColumnsImageText
          listTitle="How Does  BioMonitor 2 Work?"
          feature1="Accurate detection-- High signal amplitudes are important to improve overall signal-to-noise ratios, which have a direct impact on detection accuracy."
          feature2="Performance, reliability, and ease of use -- BIOTRONIK Home Monitoring performance is well documented both in clinical studies such as TRUST* and in over 17 years of real-world application."
          feature3="Efficient practice management – Alerts may be programmed remotely and are customizable for groups or individual patients"
          image="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_500/v1534732188/product/bm2/BIO19474_BioMonitor_2.png"
          alt="BioMonitor 2"
        />
        <OneColumnVideo />
      </Fragment>
    )
  }
}

export default BM2physician
