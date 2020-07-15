import React from "react";
import { Button, Modal } from "react-bootstrap";

import SigninForm from "./SigninForm.js";

export default class SigninModal extends React.Component {
    render() {
        function Signin(props) {
            const [show, setShow] = React.useState(false);
            const handleClose = () => setShow(false);
            const handleShow = () => setShow(true);

            return (
                <>
                    <Button variant="primary" onClick={handleShow}>
                        Sign In
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
                            <Modal.Title>Sign In</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            {/* include sign in form */}
                            <SigninForm />
                        </Modal.Body>

                        <Modal.Footer>
                            <Button variant="dark" onClick={handleClose}>
                                Go Back!
                                </Button>
                            <Button variant="primary">Sign In</Button>
                        </Modal.Footer>
                    </Modal>
                </>
            );
        }
        return (
            <Signin />
        );
    }
}