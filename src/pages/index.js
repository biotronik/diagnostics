import React, { Component, Fragment } from 'react'
import { Container, Row } from 'reactstrap'
import Banner from '../components/jumbotron'
import Products from '../components/products'
import OneColumnText from '../components/oneColumnText'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-image: url('https://res.cloudinary.com/binc/image/upload/v1535387765/product/BM2_MOME_767x600.jpg');
  @media (min-width: 768px) {
    background-image: url('https://res.cloudinary.com/binc/image/upload/v1535387765/product/BM2_MOME_1440x325.jpg');
  }
  background-size: cover;
  background-position: center;
  color: #fff;
  margin-bottom: 0;
`

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            heroTitle="Cardiac Diagnostics"
            heroSubtitle="Diagnosis begins with the right device"
            heroDescription="BIOTRONIK matches technology to the human body to advance health and well-being with a comprehensive portfolio of cardiovascular solutions that are unmatched in safety and reliability. "
          />
        </Wrapper>

        <OneColumnText
          text="BIOTRONIK’s cardiac diagnostic devices help physicians detect and monitor evidence of a patient’s suspected arrhythmia or unexplained syncope. 
          Two innovative cardiac diagnostic platforms, MoMe Kardia and BioMonitor 2, are tailored to help improve the patient’s journey to health. Each tool is designed to give physicians a deeper understanding of the patient’s condition, and each allows patients to maintain their normal daily activities with comfort and minimal interference."
        />
        <Container className="py-5">
          <Row>
            <Products
              image={
                'https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227871/product/bm2/BIO27348_BioMonitor_2__Impuls.jpg'
              }
              title="BioMonitor 2"
              subtitle="Capture. Deliver. Precisely"
              shortDescription="BioMonitor 2 is an insertable cardiac monitor that is designed to accurately detect arrhythmias or unexplained syncope. This small electrocardiogram device continuously monitors the patient’s heart rhythm for an extended period of time and stores information about heartbeat irregularities. It combines excellent signal quality, BIOTRONIK Home Monitoring, and highly efficient alert management for reliable, continuous arrhythmia monitoring."
              physicianLink="/bm2-physician"
              patientLink="/bm2-patient"
            />
            <Products
              image={
                'https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg'
              }
              title="MoMe Kardia"
              subtitle="Get the full picture"
              shortDescription="Wearable and portable,  MoMe Kardia is a 3-in-1 electrocardiograph monitoring system that empowers physicians with full disclosure cardiac information and accessible control over the data needed to diagnose and manage patients that are suspected of having, or are experiencing, cardiac arrhythmias."
              physicianLink="/mome-physician"
              patientLink="/mome-patient"
            />
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default IndexPage
