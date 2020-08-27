import React from "react";
import './ContactForm.scss'
import {useFormik} from "formik";
import Form from 'react-bootstrap/Form'
import * as Yup from 'yup';
import Col from "react-bootstrap/Col";
import 'bootstrap/dist/css/bootstrap.min.css'

 const ContactForm =() =>{
 const  formik=useFormik({
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

     })
 })
        return (
                <div id="form-div">
                    <Form className="form" id="form1">

                        <Form.Group as={Col} controlId="email" xs={10}>
                            <Form.Control placeholder={"Email"} {...formik.getFieldProps('email')} isInvalid={formik.touched.email && formik.errors.email
                            }/>
                            <Form.Control.Feedback type='invalid'>
                                {formik.errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group  controlId="email" xs={10}>
                            <Form.Control as="textarea" placeholder={"Email"} {...formik.getFieldProps('email')} isInvalid={formik.touched.email && formik.errors.email
                            }/>
                            <Form.Control.Feedback type='invalid'>
                                {formik.errors.email}
                            </Form.Control.Feedback>
                        </Form.Group>

                        {/*<p className="text" controlId={'comment'}>*/}
                        {/*    <textarea name="text" className="validate[required,length[6,300]] feedback-input"*/}
                        {/*              id="comment" placeholder="Comment"/>*/}
                        {/*</p>*/}

                        <div className="submit">
                            <input type="submit" value="Submit" id="button-blue"/>
                            <div className="ease"/>
                        </div>
                    </Form>
                    </div>

        );
}
export default ContactForm