import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import './style.scss'
import {Trans} from '@lingui/macro';

class CustomAccordion extends React.Component {
    render() {
        const {selectedCountry} = this.props;
        return (
            <div className = 'left-container' >
                <Accordion defaultActiveKey="-1" style = {{
                    cursor: "pointer"
                }}>
                    <Card >
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            1. <Trans>Accounts</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            A. <Trans>Account Management</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1" >
                                            <Card.Body style ={{margin : "0 auto"}}>
                                                a. <Trans>Edit user details</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                b. <Trans>Change PIN</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                c. <Trans>Add address</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            B. <Trans>Bank Account</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                a. <Trans>My Bank Account</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                b. <Trans>Beneficiary Accounts</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            2. <Trans>Cash In</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                a. <Trans>To an AFB Bank Account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            3. <Trans>Cash Out</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                b. <Trans>From an AFB Bank Account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="23">
                            4. <Trans>Fund Transfer</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                a. <Trans>To other wallet</Trans>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="20">
                                            b. <Trans>To an AFB bank account</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                i. <Trans>Choose from beneficiary list</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="20">
                                            <Card.Body>
                                                ii. <Trans>Enter beneficiary account number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>

                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                c. <Trans>Flash Transfer</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                d. <Trans>Via QR code</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            5. <Trans>Service Payment</Trans>
                        </Accordion.Toggle>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="21">
                            6. <Trans>Product and Service</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="21">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="21">
                                            a. <Trans>Product</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                i. <Trans>Subscription for bank card</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                ii. <Trans>Application for new account</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="21">
                                            b. <Trans>Service</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="21">
                                            <Card.Body>
                                                i. <Trans>Exchange rates</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>

                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="22">
                            7. <Trans>Top Up</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="22">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="22">
                                            a. <Trans>Airtime</Trans>
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                i. <Trans>My number</Trans>
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                ii. Other number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="22">
                                            b. Data
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                i. My number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="22">
                                            <Card.Body>
                                                ii. Other number
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            8. Tontine
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="7">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="7">
                                            a. Robs tontine
                                    </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                i. New payment
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                ii. Contribute
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                iii. Tontine history
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                iv. Pending approval
                                        </Card.Body>
                                        </Accordion.Collapse>
                                        < Accordion.Collapse eventKey="7">
                                            <Card.Body>
                                                v. Payment history
                                        </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                            9. Chat
                        </Accordion.Toggle>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default CustomAccordion