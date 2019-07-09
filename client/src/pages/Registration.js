import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import '../css/Registration.css';
import { AnonNavbar } from "../components/AnonNavbar";
import ListGroup from 'react-bootstrap/ListGroup';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        console.log(this.props.history.location)
        const { email, password, confirmPassword } = this.state;

        let registered;

        // perform all neccassary validations
        if (password === '') {
            alert("Please, fill in all fields!")
        }
        else if (password !== confirmPassword) {
            alert("Passwords don't match");

        } else {

            console.log('passed validation!')

            let data = JSON.stringify({
                email: email,
                password: password
            });


            await axios.post('http://localhost:5000/reg/student', data, {

                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
                }

            }).catch(function (error) {

                if (error.response !== undefined) {
                    if (error.response.status === 409) {
                        alert('This user already exists');
                    } else {
                        alert(error);
                    }
                } else {
                    alert(error);
                }

            }).then(function (response) {

                if (response !== undefined) {

                    console.log('Status: ' + response.status);

                    if (response.status === 201) {
                        registered = true;
                        localStorage.setItem('accessToken', response.data.accessToken);
                        localStorage.setItem('refreshToken', response.data.refreshToken);
                        console.log('success');
                    } else {
                        registered = false;
                        alert('This user already exists');
                    }
                }
                return;
            });


            if (registered === true) {
                this.props.history.location.pathname === '/registration/company'? this.props.history.push('/profile/company') : this.props.history.push('/profile/student');
            }
            
            console.log(getJwt());
        }

    }


    handleEmail(event) {
        this.setState({ email: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    handleConfirmPasswordChange(event) {
        this.setState({ confirmPassword: event.target.value })
    }

    render() {

        return (
            <div className="Registration">
                <AnonNavbar style={{ boxShadow: "none" }} />
                {/* main container */}
                <div className="reg">

                    {/* Rectangle */}
                    <div className="rectangle1">
                        <div className="emptyRectangle1">
                            <h2 className="rightTitle1">Registration Form</h2>
                        </div>
                    </div>

                    {/* Social Buttons */}
                    <ListGroup className="buttonGroup">

                        <a href="http://facebook.com">
                            <button className="socialButton" style={{ backgroundColor: "#3b5998" }}>
                                <i style={{ color: 'white', marginLeft: "0.05vw", marginRight: "1vw" }} className="fab fa-facebook-f pr-1"></i>
                                Continue with Facebook
                            </button>
                        </a>

                        <a href="http://google.com">
                            <button className="socialButton" style={{ backgroundColor: "#4385f3" }}>
                                <i style={{ color: 'white', marginLeft: "-2.05vw", marginRight: "1vw" }} className="fab fa-google"></i>
                                Continue with Google
                            </button>
                        </a>

                        <a href="http://linkedin.com">
                            <button className="socialButton" style={{ backgroundColor: "#2697cf" }}>
                                <i style={{ color: 'white', marginLeft: "-1.1vw", marginRight: "1vw" }} className="fab fa-linkedin"></i>
                                Continue with LinkedIn
                            </button>
                        </a>
                    </ListGroup>

                    {/*Input form */}
                        <form className="reg-form" onSubmit={this.handleSubmit}>
                            <h4 className="font-weight-bold mb-3">Create account</h4>
                            <p className="mdb-color-text">To sign up, please fill in these text fields</p>

                            <div className="reg-input">
                                <MDBInput label="E-mail address" type="email" outline icon="envelope" onChange={this.handleEmail.bind(this)} required />
                            </div>
                            <div className="reg-input">
                                <MDBInput label="Password" type="password" outline icon="fas fa-key" onChange={this.handlePasswordChange.bind(this)} required />
                            </div>
                            <div className="reg-input">
                                <MDBInput label="Confirm password" type="password" outline icon="fas fa-lock" onChange={this.handleConfirmPasswordChange.bind(this)} required />
                            </div>

                            <div className="space">
                                <div className="float-left">
                                    <a href="/" ><button className="signup-but cancel" type="button" style={{ color: 'white' }}>Cancel</button></a>
                                </div>
                                <div className="float-right">
                                    <button className="signup-but sign-up" type="submit" style={{ color: 'white' }}>Continue</button>
                                </div>
                            </div>

                        </form>
                    </div>
                {/* end of main container */}
            </div>

        );
    }
}