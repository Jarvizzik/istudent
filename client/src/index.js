import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './css/index.css';
import "mdbreact/dist/css/mdb.css";
import * as serviceWorker from './serviceWorker';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import { Main } from './pages/Main';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import { StudentRegistration } from './pages/StudentRegistration';
import { CompanyRegistration } from './pages/CompanyRegistration';
import { Profile } from './pages/Profile';
import { AuthenticatedComponent } from './components/AuthenticatedComponent';
import { Vacancies } from './pages/Vacancies'

ReactDOM.render(
<BrowserRouter>
  <Switch>
    <Route exact path="/Login" component={Login}/>
    <Route exact path="/registration/student" component={Registration}/>
    <Route exact path="/registration/company" component={Registration}/>
    <AuthenticatedComponent>
      <Route exact path="/" component={Main}/>
      <Route exact path="/profile" component={Profile}/>
      <Route exact path="/profile/student" component={StudentRegistration}/>
      <Route exact path="/profile/company" component={CompanyRegistration}/>
      <Route exact path="/vacancies" component={Vacancies}/>
    </AuthenticatedComponent>
  </Switch>
</BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
