import React, { Component } from 'react';
import '../css/ProfileCard.css';
import avatar from '../images/headshot.jpg';
import { Page } from './Page';

export class ProfileCard extends Component {

    render() {

        return (
            <Page singleMode={true} id={this.props.id}>
                <div className="profile-card">
                    <div id="cv" className="instaFade">
                        <div className="mainDetails">
                            <div id="headshot" className="quickFade">
                                <img src={avatar} alt="Alan Smith" />
                            </div>

                            <div id="name">
                                <h1 className="quickFade delayTwo">Rostyk Hlynka</h1>
                                <h2 className="quickFade delayThree">Developer(net)</h2>
                            </div>

                            <div id="contactDetails" className="quickFade delayFour">
                                <ul>
                                    <li>email: <a href="hlynka1608@gmail.com" target="_blank">hlynka1608@gmail.com</a></li>
                                    <li>skype: rostyk_hlynka</li>
                                </ul>
                            </div>
                            <div className="clear"></div>
                        </div>

                        <div id="mainArea" className="quickFade delayFive">
                            <section>
                                <article>
                                    <div className="sectionTitle">
                                        <h1>Personal Profile</h1>
                                    </div>

                                    <div className="sectionContent">
                                        <p>Student CS,AI, 2nd course, bla bla.</p>
                                    </div>
                                </article>
                                <div className="clear"></div>
                            </section>


                            <section>
                                <div className="sectionTitle">
                                    <h1>Work Experience</h1>
                                </div>

                                <div className="sectionContent">
                                    <article>
                                        <h2>Job Title at Company</h2>
                                        <p className="subDetails">April 2011 - Present</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                    </article>

                                    <article>
                                        <h2>Job Title at Company</h2>
                                        <p className="subDetails">Janruary 2007 - March 2011</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                    </article>

                                    <article>
                                        <h2>Job Title at Company</h2>
                                        <p className="subDetails">October 2004 - December 2006</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim. Vestibulum bibendum mattis dignissim. Proin id sapien quis libero interdum porttitor.</p>
                                    </article>
                                </div>
                                <div className="clear"></div>
                            </section>


                            <section>
                                <div className="sectionTitle">
                                    <h1>Key Skills</h1>
                                </div>

                                <div className="sectionContent">
                                    <ul className="keySkills">
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                        <li>A Key Skill</li>
                                    </ul>
                                </div>
                                <div className="clear"></div>
                            </section>


                            <section>
                                <div className="sectionTitle">
                                    <h1>Education</h1>
                                </div>

                                <div className="sectionContent">
                                    <article>
                                        <h2>College/University</h2>
                                        <p className="subDetails">Qualification</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                    </article>

                                    <article>
                                        <h2>College/University</h2>
                                        <p className="subDetails">Qualification</p>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ultricies massa et erat luctus hendrerit. Curabitur non consequat enim.</p>
                                    </article>
                                </div>
                                <div className="clear"></div>
                            </section>

                        </div>
                    </div>
                </div>
            </Page>
        );
    }
}