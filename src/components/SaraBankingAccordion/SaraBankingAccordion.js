import * as React from "react";
import './saraBanking.css'
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import {Trans} from "@lingui/macro";


export default class saraBankingAccordion extends React.Component{
    render() {
        return (
            <div className='left-container'>
            <Accordion defaultActiveKey="-1" style = {{
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
                                <Accordion.Toggle as={Card.Header} eventKey="10" >
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
                                                       <Accordion.Toggle as={Card.Header} eventKey="100">
                                                           a. <Trans>Account History</Trans>
                                                       </Accordion.Toggle>
                                                       <Accordion.Toggle as={Card.Header} eventKey="100">
                                                           b. <Trans> Last 10 Transactions</Trans>
                                                       </Accordion.Toggle>
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
                                            <Accordion.Toggle as={Card.Header} eventKey="11">
                                                i. <Trans>List of beneficiaries</Trans>
                                            </Accordion.Toggle>
                                            <Accordion.Toggle as={Card.Header} eventKey="11">
                                                ii. <Trans>Add a beneficiary</Trans>
                                            </Accordion.Toggle>
                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                        B. <Trans>Account to Account</Trans>
                                    </Accordion.Toggle>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                        C. <Trans>To AFB accounts</Trans>
                                    </Accordion.Toggle>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                        D. <Trans>To other bank's account</Trans>
                                    </Accordion.Toggle>
                                    <Accordion.Toggle as={Card.Header} eventKey="11">
                                        E. <Trans>Manage recurring Transactions</Trans>
                                    </Accordion.Toggle>
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
                                    <Accordion.Toggle as={Card.Header} eventKey="16" >
                                        i. <Trans>Product</Trans>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="16">
                                        <Card.Body>
                                            <Accordion.Toggle as={Card.Header} eventKey="16">
                                                a. <Trans>Cheque book requests </Trans>
                                            </Accordion.Toggle>
                                            <Accordion.Toggle as={Card.Header} eventKey="16">
                                                b. <Trans>Request to open a bank account</Trans>
                                            </Accordion.Toggle>
                                            <Accordion.Toggle as={Card.Header} eventKey="16">
                                                c. <Trans>Subscribe to a bank account</Trans>
                                            </Accordion.Toggle>

                                        </Card.Body>
                                    </Accordion.Collapse>
                                </Card>
                            </Accordion>
                            <Accordion defaultActiveKey="0">
                                <Card>
                                    <Accordion.Toggle as={Card.Header} eventKey="17" >
                                        ii. <Trans>Service</Trans>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="17">
                                        <Card.Body>
                                            <Accordion.Toggle as={Card.Header} eventKey="17">
                                                a. <Trans>Exchange Rates</Trans>
                                            </Accordion.Toggle>
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

                </Card>

            </Accordion>
            </div>
        )

    }

}