import React, { Component } from 'react';
import { getJwt, getRefreshToken } from '../helpers/jwt';
import axios from 'axios';
import { createBrowserHistory } from 'history';
import { LoadingComponent } from './LoadingComponent';

export class AuthenticatedComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            access: false
        }
    }

    componentDidMount() {

        const history = createBrowserHistory({ forceRefresh: true });
        const jwt = getJwt();

        if (!jwt) {

            setTimeout(function(){
                history.push('/Login')
            }.bind(this), 600);
            return;
        }

        axios.get('/getToken', { headers: { Authorization: `Bearer ${jwt}` } }).then(res => {

            this.setState({ access: true });
            return res;
        }).catch(err => {

            console.log(err.response);
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
            
            setTimeout(function(){
                history.push('/Login')
            }.bind(this), 600);

        });
    }

    render() {
        if (this.state.access === false) {
            return (
                <div>
                    <LoadingComponent />
                </div>
            )
        }
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}