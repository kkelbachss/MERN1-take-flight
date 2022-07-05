import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import api from '../../utils/api';
import { useDispatch, useSelector } from 'react-redux';

function DeleteModal() {
    const dispatcher = useDispatch();
    let loadId = useSelector(store => store.flight.id);
    console.log(loadId);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    async function deleteHandler(id) {
        await api.deleteFlight(id)
        console.log("...flight "+id+" deleted...")

        // this will update the store and refresh the page
        let loadRefresh = new Date().getTime();
        dispatcher({type: 'SET_REFRESH', payload: loadRefresh});
        handleClose();
    }

    return (
        <>
        <Button variant="danger" onClick={handleShow}>
            DELETE
        </Button>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Are you sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>Are you sure you want to delete </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            <Button variant="primary" onClick={deleteHandler}>
                DELETE
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    );
}

export default DeleteModal;