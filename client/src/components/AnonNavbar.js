import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import '../css/AnonNavbar.css';
import logo from '../images/logo.png';

export class AnonNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {

    return (
      <MDBNavbar className="nav" dark expand="md" style={{ padding: 0 }}>
        <strong className="navName">IstudenT</strong>

        <MDBNavbarToggler className="navButton" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav className="leftNav" left>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"> <span>How to start?</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink className="link" to="#!"><span>About us</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem className="cont comp hideBlock">
              <h5 className="staticNav t-comp">IT Company</h5>
            </MDBNavItem>
          </MDBNavbarNav>

          <a href="/" className="a-logo">
          
          <MDBNavItem className="logo hideBlock">
            <img className="logoImg" src={logo} alt="logo" />
            <h5 className="logoTitle">student</h5>
          </MDBNavItem></a>

          <MDBNavbarNav className="rightNav" right>
            <MDBNavItem className="cont stud hideBlock">
              <h5 className="staticNav t-stud">Student</h5>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>Sign in</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"><span>Create account</span></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
