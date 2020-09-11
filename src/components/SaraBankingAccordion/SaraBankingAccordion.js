import * as React from "react";
import './saraBanking.scss'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {Trans} from "@lingui/macro";


export default class saraBankingAccordion extends React.Component {
    render() {
        return (
            <div className='left-container'>
                <Accordion defaultActiveKey="-1" style={{
                    cursor: "pointer"
                }}>
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                            <Trans> 1. My Accounts</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="10">
                                            A. <Trans>List of Accounts</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="10">
                                            <Card.Body>
                                                <Accordion defaultActiveKey="0">
                                                    <Card>
                                                        <Accordion.Toggle as={Card.Header} eventKey="100">
                                                            i. <Trans>More Information</Trans>
                                                        </Accordion.Toggle>
                                                        <Accordion.Collapse eventKey="100">
                                                            <Card.Body>
                                                                a. <Trans>Account History</Trans>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                        <Accordion.Collapse eventKey="100">
                                                            <Card.Body>
                                                                b. <Trans> Last 10 Transactions</Trans>
                                                            </Card.Body>
                                                        </Accordion.Collapse>
                                                    </Card>
                                                </Accordion>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="1">
                            <Trans> 2. Fund Transfer</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <Accordion defaultKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="11">
                                            A. <Trans>Manage Beneficiaries</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="11">
                                            <Card.Body>
                                                i. <Trans>List of beneficiaries</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="11">
                                            <Card.Body>
                                                ii. <Trans>Add a beneficiary</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                B. <Trans>Account to Account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                C. <Trans>To AFB accounts</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                D. <Trans>To other bank's account</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                E. <Trans>Manage recurring Transactions</Trans>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="2">
                            <Trans> 3. Fixed Deposits</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                            <Trans> 4. Loans</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="4">
                            <Trans> 5. Cash Vouchers</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="5">
                            <Trans> 6. Commerce</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="6">
                            <Trans> 7. Product and Services</Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="16">
                                            i. <Trans>Product</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="16">
                                            <Card.Body>
                                                a. <Trans>Cheque book requests </Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="16">
                                            <Card.Body>
                                                b. <Trans>Request to open a bank account</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                        <Accordion.Collapse eventKey="16">
                                            <Card.Body>
                                                c. <Trans>Subscribe to a bank account</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="6">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="17">
                                            ii. <Trans>Service</Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="17">
                                            <Card.Body>
                                                a. <Trans>Exchange Rates</Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>

                        <Accordion.Toggle as={Card.Header} eventKey="7">
                            <Trans> 8. Bill Payments</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="8">
                            <Trans> 9. Chat</Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="9">
                            <Trans> 10. Complaints </Trans>
                        </Accordion.Toggle>
                        <Accordion.Toggle as={Card.Header} eventKey="1000">
                            <Trans> 11. Settings </Trans>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1000">
                            <Card.Body>
                                    A. <Trans>About AFB</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                        <Accordion.Collapse eventKey="1000">
                            <Card.Body>
                                <Accordion defaultActiveKey="0">
                                    <Card>
                                        <Accordion.Toggle as={Card.Header} eventKey="200">
                                            B.<Trans>ATM Branches </Trans>
                                        </Accordion.Toggle>
                                        <Accordion.Collapse eventKey="200">
                                            <Card.Body>
                                                    i.<Trans>View al ATM </Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>
                                                <Accordion.Collapse eventKey="200">
                                                <Card.Body>
                                                    ii.<Trans>view all Branches </Trans>
                                            </Card.Body>
                                        </Accordion.Collapse>

                                    </Card>
                                </Accordion>
                            </Card.Body>
                        </Accordion.Collapse>
                                <Accordion.Collapse eventKey="1000">
                                    <Card.Body>
                                    C. <Trans>ChangeLanguage </Trans>
                                    </Card.Body>
                                </Accordion.Collapse>
                                <Accordion.Collapse eventKey="1000">
                                    <Card.Body>
                                    D. <Trans>Change PIN</Trans>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                </Accordion>
            </div>
        )

    }

}