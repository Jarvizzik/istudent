import React, { Component } from 'react';
import '../css/Login.css';
import { AnonNavbar } from "../components/AnonNavbar";
import { Container, Row, Col } from 'react-bootstrap';
import { LoginComponent } from '../components/LoginComponent';

export class Login extends Component {

  render() {
    return (
      <div className="App">
        <AnonNavbar />

        {/* main container */}
        <div className="main">


          <Container className="main-container">
            <Row>
              <Col lg={6} md={6} sm={7} xs={8}>
                <div className="topic">

                  <h2 className="leftTitle">For both IT Company and</h2>

                  <div className="shape">
                    <div className="rectangle">
                      <div className="emptyRectangle">
                        <h2 className="rightTitle"> Students</h2>
                      </div>
                    </div>
                  </div>

                  <p className="pTitle">
                    Find a job of your dream<br />
                    in any Ukrainian's IT Company<br />
                    or find intelligent students on your<br />
                    successful project!</p>
                </div>
              </Col>
              <Col lg={6} md={6} sm={7} xs={8}>
                <LoginComponent history={this.props.history}/>
              </Col>
            </Row>

          </Container>
          <div className="buttonsMain">
            <a href="registration/company" className="butMain but-comp">Company</a>
            <a href="registration/student" className="butMain but-stud">Student</a>
          </div>
        </div>
        {/* end of main container */}
      </div>
    );
  }
}
