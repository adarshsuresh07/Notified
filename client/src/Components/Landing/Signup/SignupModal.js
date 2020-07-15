import React from "react";
import { Button, Modal } from "react-bootstrap";

import SignupForm from "./SignupForm.js";

export default class SignupModal extends React.Component {
    render() {
        function Signup(props) {
            const [show, setShow] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            return (
                <>
                    <Button variant="success" onClick={handleShow}>
                        Sign Up
                    </Button>

                    <Modal
                        // for static backdrop
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}

                        // for vertically centered
                        {...props}
                        size="sm"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                    >

                        <Modal.Header closeButton>
                            <Modal.Title>Sign Up</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {/* include sign up form */}
                            <SignupForm />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Go Back!
                                </Button>
                            <Button variant="success">Sign Up</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }

        
        // return from class
        return (
            <Signup />
        );
    }
}
