import React, { Component, Fragment } from 'react'
import Banner from '../components/jumbotron'
import ProductGrid from '../components/productGrid'
import OneColumnText from '../components/oneColumnText'
import { Spring } from 'react-spring'

class IndexPage extends Component {
  render() {
    return (
      <Fragment>
        <Spring
          from={{ height: 100, opacity: 0 }}
          to={{ height: 472, opacity: 1 }}
        >
          {({ height, opacity }) => (
            <Banner
              style={{ height, opacity }}
              image=""
              title="Cardiac Diagnotics"
              subtitle="Diagnosis begins with the right device"
              description="BIOTRONIK matches technology to the human body to advance health
          and well-being with a comprehensive portfolio of cardiovascular
          solutions that are unmatched in safety and reliability."
            />
          )}
        </Spring>
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
