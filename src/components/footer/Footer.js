import React, { Component } from 'react';
import "./Footer.css"
import fb from "../../resources/images/facebook.png"
import li from "../../resources/images/linkedIn.png"
import tw from "../../resources/images/twitter.png"
import {Button} from "react-bootstrap"
import '../../resources/fonts/OpenSansCondensed-Light.ttf'

class Footing extends Component {
    
    render() {
        
        return (
            <div style = {{backgroundColor : "#B3B2B2"}}>
                
                {/* <footer className=""> */}

                    <div >
                        <h1 className="header h1"> About Us </h1>
                        <p className="text">Learn all about our history, our vision, our strategy to become the african
                        bank of
                            the 3rd millennium. So far, the bank counts about forty (40) branches in the ten (10) <br /><br />
                            regions
                            of Cameroon despite the country’s unfavourable economic situation and the general tendency
                            of
                            banks going bankrupt.
                            <br /><br />
                             Obtain information on corporate governance, our network, our relationships
                            with
                            investors.
                        </p>
                        <center>
                            <a className="h1" href="https://www.afrilandfirstbank.com " style={{ textAlign: "center" }}>
                            <Button variant="outline-danger" id ="buttonOutline">Learn More</Button>{' '}
                            </a>
                        </center>

                    </div>
                    <div className="social-links-container">
                        <div className="wrapper flex-col center">
                            <div className="social-links flex-row">
                                <div className="social-link">
                                    {/*<a href="#"> <i className="fab fa-facebook-f"></i></a>*/}
                                    <img src={fb}></img>
                                </div>
                                <div className="social-link">
                                    {/*<a href="#"><i className="fab fa-twitter"></i></a>*/}
                                    <img src={tw}></img>
                                </div>
                                <div className="social-link">
                                    {/*<a href="#"><i className="fab fa-linkedin"></i></a>*/}
                                    <img src={li}></img>
                                </div>

                            </div>
                            <div className="copyright-container">
                                <p> Copyright &copy; 2020. All rights reserved</p>
                            </div>
                        </div>
                    </div>
                {/* </footer> */}
            </div>
        )
    }

}

export default Footing;