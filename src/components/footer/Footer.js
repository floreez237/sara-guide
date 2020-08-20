import React, { Component } from 'react';
import "./Footer.css"
import fb from "../../resources/images/facebook.png"
import li from "../../resources/images/linkedIn.png"
import tw from "../../resources/images/twitter.png"
import {Button} from "react-bootstrap"
import '../../resources/fonts/OpenSansCondensed-Light.ttf'
import {Trans} from "@lingui/macro";

class Footing extends Component {
    
    render() {
        
        return (
            <div style = {{backgroundColor : "#B3B2B2"}}>
                
                {/* <footer className=""> */}

                    <div style = {{backgroundColor : "#E4E4E4", paddingBottom: "30px", paddingTop : "10px"}}>
                        <h1 className="header h1"><Trans>About Us</Trans> </h1>
                        <p className="text"><Trans id="about.text">Learn all about our history, our vision, our strategy to become the
                            african
                            bank of
                            the 3rd millennium. So far, the bank counts about forty (40) branches in the ten
                            (10) <br/><br/>
                            regions
                            of Cameroon despite the country’s unfavourable economic situation and the general tendency
                            of
                            banks going bankrupt.
                            <br/><br/>
                            Obtain information on corporate governance, our network, our relationships
                            with
                            investors.</Trans>
                        </p>
                        <center>
                            <a className="h1" href="https://www.afrilandfirstbank.com " style={{ textAlign: "center" }}>
                            <Button variant="outline-danger" id ="buttonOutline"><Trans>Learn More</Trans></Button>{' '}
                            </a>
                        </center>

                    </div>
                    <div className="social-links-container">
                        <div className="wrapper flex-col center">
                            <div className="social-links flex-row">
                                <div className="social-link">
                                    {/*<a href="#"> <i className="fab fa-facebook-f"></i></a>*/}
                                    <img src={fb} alt="Facebook"/>
                                </div>
                                <div className="social-link">
                                    {/*<a href="#"><i className="fab fa-twitter"></i></a>*/}
                                    <img src={tw} alt="Twitter"/>
                                </div>
                                <div className="social-link">
                                    {/*<a href="#"><i className="fab fa-linkedin"></i></a>*/}
                                    <img src={li} alt="LinkedIn"/>
                                </div>

                            </div>
                            <div className="copyright-container">
                                <p> Copyright &copy; 2020. <Trans id='rights'>All rights reserved</Trans></p>
                            </div>
                        </div>
                    </div>
                {/* </footer> */}
            </div>
        )
    }

}

export default Footing;
