import React from 'react'
import Link from 'gatsby-link'
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import logoImg from '../images/bio_logo.svg'

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.closeNav = this.closeNav.bind(this)

    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  closeNav() {
    this.state.isOpen.false
      ? null
      : this.setState({
          isOpen: false,
        })
  }

  render() {
    return (
      <Container>
        <Navbar light expand="md" style={{ padding: '.5rem 0rem' }}>
          <Link exact to="/">
            <img src={logoImg} alt="Logo" width="150px" height="50px" />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  BioMonitor 2
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/bm2-physician" onClick={this.closeNav}>
                    <DropdownItem>Physician</DropdownItem>
                  </Link>
                  <Link to="/bm2-patient" onClick={this.closeNav}>
                    <DropdownItem>Patient</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  MOME
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/mome-physician" onClick={this.closeNav}>
                    <DropdownItem>Physician</DropdownItem>
                  </Link>
                  <Link to="/mome-patient" onClick={this.closeNav}>
                    <DropdownItem>Patient</DropdownItem>
                  </Link>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </Container>
    )
  }
}

export default Header
