import React, { Component } from 'react'
import Products from './products'
import { Container, Row } from 'reactstrap'

class ProductGrid extends Component {
  render() {
    console.log(this.props.data)
    return (
      <Container>
        <Row>
          <Products
            image={
              'https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227871/product/bm2/BIO27348_BioMonitor_2__Impuls.jpg'
            }
            title={'Capture. Deliver. Precisely'}
            subtitle={'BioMonitor 2'}
            shortDescription={
              'BioMonitor 2 is an insertable cardiac monitor that is designed to accurately detect arrhythmias or unexplained syncope . This small electrocardiogram device continuously monitors the patient’s heart rhythm for an extended period of time and stores information about heartbeat irregularities. It combines excellent signal quality, BIOTRONIK Home Monitoring, and highly efficient alert management for reliable, continuous arrhythmia monitoring.'
            }
            physicianLink={'/bm2-physician'}
            patientLink={'/bm2-patient'}
          />
          <Products
            image={
              'https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_540/v1535227862/product/mome/BIO29229_MoMe__Impuls.jpg'
            }
            title={'Get the full picture'}
            subtitle={'MoMe Kardia'}
            shortDescription={
              'Wearable and portable, MoMe Kardia is a 3-in-1 electrocardiograph monitoring system that empowers physicians with full disclosure cardiac information and accessible control over the data needed to diagnose and manage patients that are suspected of having, or are experiencing, cardiac arrhythmias.'
            }
            physicianLink={'/mome-physician'}
            patientLink={'/mome-physician'}
          />
        </Row>
      </Container>
    )
  }
}

export default ProductGrid
