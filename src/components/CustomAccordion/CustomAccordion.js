import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

class CustomAccordion extends React.Component {
    render() {
        return (
            <div>
                <Accordion defaultActiveKey="-1">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            1. Accounts
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            A. Account Management
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                a. Edit user details
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                b. Change PIN
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                c. Add address
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="1">
                                            B. Bank Account
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                a. My Bank Account
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="1">
                                            <Card.Body>
                                                b. Beneficiary Accounts
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            2. Cash In
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                a. To an AFB Bank Account
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            3. Cash Out
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                b. From an AFB Bank Account
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="23">
                            4. Fund Transfer
                        </Accordion.Toggle>  
                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                a. To other wallet
                            </Card.Body>
                        </Accordion.Collapse>
                        
                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                c. Flash Transfer
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="23">
                            <Card.Body>
                                d. Via QR code
                            </Card.Body>
                        </Accordion.Collapse>
                          
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            5. Service Payment
                        </Accordion.Toggle>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            6. Product and Service
                        </Accordion.Toggle>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            7. Top Up
                        </Accordion.Toggle>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            8. Tontine
                        </Accordion.Toggle>
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