import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import ProductGrid from '../components/productGrid'
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

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Wrapper>
          <Banner
            image=""
            title="Cardiac Diagnotics"
            subtitle="Diagnosis begins with the right device"
            description="BIOTRONIK matches technology to the human body to advance health
          and well-being with a comprehensive portfolio of cardiovascular
          solutions that are unmatched in safety and reliability."
          />
        </Wrapper>
        <OneColumnText
          text="Two innovative cardiac diagnostic platforms, MoMe Kardia and
                BioMonitor 2, are tailored to help improve the patient’s journey
                to health. Each tool is designed to give physicians a deeper
                understanding of the patient’s condition, and each allows
                patients to maintain their normal daily activities with comfort
                and minimal interference."
        />

        <ProductGrid />
      </Fragment>
    )
  }
}

export default IndexPage
