import React, { Component } from "react";
import { MDBNavbar, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse } from "mdbreact";
import '../css/AuthNavbar.css';
import logo from '../images/logo.png';
import { createBrowserHistory } from 'history';

export class AuthNavbar extends Component {
  state = {
    isOpen: false
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  signOut = () => {

    const history = createBrowserHistory({ forceRefresh: true });

    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    history.push('/Login');

  }

  render() {

    return (
      <MDBNavbar className="nav" dark expand="md" style={{ padding: 0 }}>
        <strong className="navName">IstudenT</strong>

        <MDBNavbarToggler className="navButton" onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>

          <MDBNavbarNav className="leftNav" left>
            <MDBNavItem>
              <MDBNavLink className="link" to="#!"> <span>Courses</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
              <MDBNavLink className="link" to="/vacancies"><span>Vacancies</span></MDBNavLink>
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
              <MDBNavLink className="link" to="/profile"><span>Profile</span></MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink className="link" to="/signOut" onClick={this.signOut}><span>Sign out</span></MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}
