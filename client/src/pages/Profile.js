import React, { Component } from 'react';
import '../css/Profile.css';
import { AuthNavbar } from "../components/AuthNavbar";
import { Container, Row, Col } from 'react-bootstrap';
import { ProfileCard } from '../components/ProfileCard';
import { PrintButton } from '../components/PrintButton';

export class Profile extends Component {

    render() {

        return (
            <div className="Profile">
                <AuthNavbar style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="profile">
                    <Container>
                        <Row>
                            <Col lg={3} md={6} sm={7} xs={8}>
                                {/* Rectangle */}
                                <div className="profile-rectangle">
                                    <div className="profile-emptyRectangle">
                                        <h2 className="profile-rightTitle"> Your Profile</h2>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={9} md={6} sm={7} xs={8} >
                                <PrintButton id={"profileCard"} label={"Print CV in PDF"} />
                                <ProfileCard onHover id={"profileCard"} />
                            </Col>
                        </Row>
                    </Container>

                </div>
                {/* end of main container */}
            </div>

        );
    }
}