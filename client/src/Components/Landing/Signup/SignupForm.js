import React from "react";
import { Form } from "react-bootstrap";

export default class SignupForm extends React.Component {
    render() {
        return (
            <Form>
                <Form.Group controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formGroupPassword">
                    <Form.Control type="password" placeholder="Password" />
                    <Form.Text id="passwordHelpBlock" muted>
                        Password Constraints
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formGroupRePassword">
                    <Form.Control type="password" placeholder="Re-type Password" />
                </Form.Group>
            </Form>
        );
    }
}