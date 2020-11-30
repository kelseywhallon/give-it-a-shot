import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal'
// import ModalDialog from 'react-bootstrap/ModalDialog'
// import ModalHeader from 'react-bootstrap/ModalHeader'
// import ModalTitle from 'react-bootstrap/ModalTitle'
// import ModalBody from 'react-bootstrap/ModalBody'
// import ModalFooter from 'react-bootstrap/ModalFooter'
import { Button } from "../Button";

export const FavModal = () => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Button onClick={() => setShow(true)}>
                Custom Width Modal
            </Button>

            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-50w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
            </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>
                        Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                        commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                        ipsam atque a dolores quisquam quisquam adipisci possimus
                        laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                        accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                        reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                        deleniti rem!
            </p>
                </Modal.Body>
            </Modal>
        </>
    );
}



