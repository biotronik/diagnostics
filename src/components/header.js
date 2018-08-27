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
            <img
              src="https://res.cloudinary.com/binc/image/upload/c_fit,f_auto,w_142/v1535137868/web/bio_logo.png"
              alt="Logo"
              width="142px"
              height="29px"
            />
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  BM2
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
