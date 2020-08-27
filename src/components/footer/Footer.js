import React, { Component } from 'react';
import "./Footer.scss"
import fb from "../../resources/images/facebook.png"
import li from "../../resources/images/linkedIn.png"
import tw from "../../resources/images/twitter.png"
import { Button } from "react-bootstrap"
import { Trans } from "@lingui/macro";

class Footing extends Component {

    goToAfriland() {
        window.location.href = "https://www.afrilandfirstbank.com"
    }
    render() {

        return (
            <div style={{ backgroundColor: "#B3B2B2" }}>

                {/* <footer className=""> */}

                <div style={{
                     backgroundColor: "#E4E4E4",
                      paddingBottom: "30px", 
                      paddingTop: "10px" }}>
                    <div style={{ marginTop: "10px", marginBottom: "10px" }}>
                        <h1 className="header vh1"><Trans>About Us</Trans> </h1>
                    </div>

                    <p className="text">
                         <Trans id="about.text">
                            Learn all about our history, our vision, our strategy to become the
                            african
                            bank of
                            the 3rd millennium. So far, the bank counts about forty (40) branches in the ten
                            (10)
                            regions
                            of Cameroon despite the country’s unfavourable economic situation and the general tendency
                            of
                            banks going bankrupt.<br />
                            Obtain information on corporate governance, our network, our relationships
                            with
                            investors.
                             </Trans>
                    </p>
                    <center>
                        {/* <a className="h1" href="https://www.afrilandfirstbank.com " style={{ textAlign: "center" }}> */}
                        <Button onClick={this.goToAfriland} variant="outline-danger" id="customButton"><Trans>Learn More</Trans></Button>{' '}
                        {/* </a> */}
                    </center>

                </div>
                <div className="social-links-container">
                    <div className="wrapper flex-col center">
                        <div className="social-links flex-row">
                            <div className="social-link">
                                {/*<a href="#"> <i className="fab fa-facebook-f"></i></a>*/}
                                <img src={fb} alt="Facebook" />
                            </div>
                            <div className="social-link">
                                {/*<a href="#"><i className="fab fa-twitter"></i></a>*/}
                                <img src={tw} alt="Twitter" />
                            </div>
                            <div className="social-link">
                                {/*<a href="#"><i className="fab fa-linkedin"></i></a>*/}
                                <img src={li} alt="LinkedIn" />
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
