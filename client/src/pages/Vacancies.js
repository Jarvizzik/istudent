import React, { Component } from 'react';
import '../css/Vacancies.css';
import { CardDeck, Card } from 'react-bootstrap';
import { AuthNavbar } from '../components/AuthNavbar';
import { getJwt } from '../helpers/jwt';
import { MdSearch } from "react-icons/md";

export class Vacancies extends Component {
    constructor() {
        super();
        this.state = {
            vacancies: [],
            skill: '',
            company: '',
            position: ''
        };

    }

    componentDidMount() {

        let token = getJwt();
        fetch('/vacancy', {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            })
        }).then(results => {
            console.log('dsd' + results);
            return results.json();
        }).then(data => {
            let vacancies = data.map((vac, index) => {
                return (
                    <Card style={{ flex: '0 0 500px', marginTop: '50px' }}>
                        <Card.Body>
                            <div style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px' }}>
                                <p style={{ float: 'left', color: '#78cc1f' }}>position</p>
                                <p style={{ float: 'right', color: '#78cc1f' }}>Company<span style={{ paddingLeft: '65px', marginRight: '42px' }}>$</span></p>
                            </div>
                            <div style={{ marginLeft: '10px', marginTop: '5vh', paddingBottom: '5vh' }}>
                                <Card.Title style={{ float: 'left', position: 'absolute' }}>{vac.Skills[0].name} {vac.Position.name}</Card.Title>
                                <Card.Title style={{ float: 'left', textTransform: 'uppercase',position: 'absolute', marginLeft: '260px' }}>{vac.Company.name}</Card.Title>
                                <Card.Title style={{ float: 'right', textTransform: 'uppercase',position: 'absolute', marginLeft: '380px' }}>{vac.salaryFrom}</Card.Title>
                            </div>
                            <p style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px', float: 'left', color: '#78cc1f' }}>required skills</p>
                            <ul className="reqs" style={{ marginTop: '5vh', marginLeft: '-25px' }}>
                                <li><span>{vac.detail}</span></li>
                            </ul>
                        </Card.Body>
                        <button className="applyBtn">Apply</button>
                    </Card>
                )
            })
            this.setState({ vacancies: vacancies });
            console.log("state", this.state.vacancies);
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { skill, company, position } = this.state;

        let dataObj = { "filter": {} };

       if(skill !== ""){
          dataObj.filter.skill = skill;
       }
       if(company !== ""){
          dataObj.filter.company = company;
       }
       if(position !== ""){
         dataObj.filter.position = position;
       }

       let data = JSON.stringify(dataObj);
        console.log(data);
        let token = getJwt();
        fetch('/vacancy', {
            method: 'post',
            body: data,
            headers: new Headers({
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: `Bearer ${token}`
            })
        }).then(results => {

            console.log('dsd' + results);
            return results.json();
        }).then(res => {
            let vacs = res.map((vac, index) => {
                return (
                    <Card style={{ flex: '0 0 500px', marginTop: '50px' }}>
                        <Card.Body>
                            <div style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px' }}>
                                <p style={{ float: 'left', color: '#78cc1f' }}>position</p>
                                <p style={{ float: 'right', color: '#78cc1f' }}>Company<span style={{ paddingLeft: '65px', marginRight: '42px' }}>$</span></p>
                            </div>
                            <div style={{ marginLeft: '10px', marginTop: '5vh', paddingBottom: '5vh' }}>
                                <Card.Title style={{ float: 'left', position: 'absolute' }}>{vac.Skills[0].name} {vac.Position.name}</Card.Title>
                                <Card.Title style={{ float: 'left', textTransform: 'uppercase',position: 'absolute', marginLeft: '260px' }}>{vac.Company.name}</Card.Title>
                                <Card.Title style={{ float: 'right', textTransform: 'uppercase',position: 'absolute', marginLeft: '380px' }}>{vac.salaryFrom}</Card.Title>
                            </div>
                            <p style={{ margin: '0 10px', fontWeight: '600', fontSize: '16px', float: 'left', color: '#78cc1f' }}>required skills</p>
                            <ul className="reqs" style={{ marginTop: '5vh', marginLeft: '-25px' }}>
                                <li><span>{vac.detail}</span></li>
                            </ul>
                        </Card.Body>
                        <button className="applyBtn">Apply</button>
                    </Card>
                )
            })
            this.setState({ vacancies: vacs });
            
            console.log("state", this.state.vacancies);
        })
    }

    handleSkill(event) {
        this.setState({ skill: event.target.value })
    }
    handlePosition(event) {
        this.setState({ position: event.target.value })
    }

    handleCompany(event) {
        this.setState({ company: event.target.value })
    }

    render() {

        return (
            <div className="bodybg">
                <AuthNavbar style={{ boxShadow: "none" }} />
                {/* main container */}
                <form class="inner-form" onSubmit={this.handleSubmit}>
                        <div class="input-field first-wrap">
                            <input id="skill" type="text" placeholder="Technology" onChange={this.handleSkill.bind(this)}/>
                        </div>
                        <span key="line1" className="ownline">|</span>
                        <div class="input-field second-wrap">
                            <input id="position" type="text" placeholder="Position" onChange={this.handlePosition.bind(this)}/>
                        </div>
                        <span key="line1" className="ownline">|</span>
                        <div class="input-field third-wrap">
                            <input id="company" type="text" placeholder="Company" onChange={this.handleCompany.bind(this)}/>
                        </div>
                        <span key="line1" className="ownline">|</span>
                        <div class="input-field fourth-wrap">
                            <input id="location" type="text" placeholder="Location" />
                        </div>
                        <span key="line1" className="ownline">|</span>
                        <div class="input-field sixth-wrap">
                            <button class="btn-search" type="submit"><MdSearch style={{ fontSize: '30px', color: '#000'}}/></button>
                        </div>
                </form>
                <div className="vacancies">
                    
                    <CardDeck style={{ width: '100%', display: 'flex', flexWrap: 'wrap', alignItems: 'stretch' }}>
                        {this.state.vacancies}
                    </CardDeck>
                </div>
                {/* end of main container */}
            </div>
        );
    }
}