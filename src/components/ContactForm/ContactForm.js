import React from "react";
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup';
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css'
import {useFormik} from 'formik'

 const ContactForm =() =>{
 const  formik= useFormik({
    initialValues:{
        email:'',
        comment:'',

    },
     validationSchema:Yup.object({
    email: Yup.string()
        .email('Invalid Email Address')
        .required('Required'),
     comment: Yup.string()
         .min(5,'Minimum of 5 characters')
         .required('Required')

     })
 });
        return (
                <div>
                    <Form >
                        <Form.Row>
                        <Form.Group as={Col} controlId="email" xs={3}>
                            <Form.Control placeholder={"email"} {...formik.getFieldProps('email')} isInvalid={formik.touched.email && formik.errors.email
                            }/>
                            <Form.Control.Feedback type='invalid'>
                                {formik.errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Form.Row>
                        <Form.Row>
                            <Form.Group as={Col} controlId="comment" xs={3}>
                                <Form.Control as="textarea"  rows="3" placeholder={"Comment"} {...formik.getFieldProps('comment')} isInvalid={formik.touched.comment && formik.errors.comment
                                }/>
                                <Form.Control.Feedback type='invalid'>
                                    {formik.errors.comment}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>

                        <div >
                            <input type="submit" value="Submit" />
                            <div />
                        </div>
                    </Form>
                    </div>

        );
}
export default ContactForm