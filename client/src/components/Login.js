import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
import '../css/Login.css';
import axios from 'axios';
import { getJwt } from '../helpers/jwt';

export class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        let authenticated;

        let data = JSON.stringify({
            email: email,
            password: password
        });

        await axios.post('http://localhost:5000/auth', data, {

            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }

        }).catch(function (error) {

            console.log(error);

            if (error.response.status === 403) {
                alert('Incorrect login or password');
            } else {
                alert(error);
            }

        }).then(function (response) {

            if (response !== undefined) {

                console.log('Status: ' + response.status);

                if (response.status === 201) {
                    authenticated = true;

                    const jwt = getJwt();
                    if (!jwt) {
                        //verify existed user jwt
                    } else {
                        localStorage.setItem('accessToken', response.data.accessToken);
                        localStorage.setItem('refreshToken', response.data.refreshToken);
                    }

                    console.log('success');
                } else {
                    authenticated = false;
                    alert('Incorrect login or password');
                    console.log('Incorrect login or password');
                }

            }
        });

        if (authenticated === true) {
            console.log('redirect');
            this.props.history.push('/profile');
        }
    }


    handleEmail(event) {
        this.setState({ email: event.target.value })
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value })
    }

    render() {

        return (
            <div className="Login">
                {/* main container */}
                <div className="log">

                    <form className="log-form" onSubmit={this.handleSubmit}>
                        <h4 className="font-weight-bold mb-3 form-title">Sign in to your account</h4>
                        <div className="md-form">
                            <MDBInput label="E-mail address" type="email" outline icon="envelope" onChange={this.handleEmail.bind(this)} required />
                            <label>
                                <a href="#!"><span className="textspan">Forgot password?</span></a>
                            </label>
                        </div>



                        <div className="md-form2">
                            <MDBInput label="Password" type="password" outline icon="fas fa-key" onChange={this.handlePasswordChange.bind(this)} required />
                        </div>

                        <div className="float-right">
                            <button className="logButton" type="submit">Sign in</button>
                        </div>

                    </form>

                </div>
                {/* end of main container */}
            </div>

        );
    }
}