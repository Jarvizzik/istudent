import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import "mdbreact/dist/css/mdb.css";
import App from './App';
import {Login} from './Login';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route path="/01" component={Login}/>
  </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
