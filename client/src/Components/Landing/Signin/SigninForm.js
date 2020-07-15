import React from "react";
import { Form } from "react-bootstrap";

export default class SigninForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                    
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Form>
        );
    }
}