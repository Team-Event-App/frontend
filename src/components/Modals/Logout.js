import React from "react";
import { connect } from "react-redux";
import { closeModalLogout } from "../../actions/modalActions";
import { Modal } from "react-bootstrap";
import { Button } from 'react-bootstrap'


const Logout = (props) => {
    return (
        <Modal show={props.isShow} onHide={props.closeModal}>
            <Modal.Header closeButton className="bg-danger">
                <Modal.Title className="text-white" style={{ fontSize: "20px", padding: "10px" }} closeButton>Are you sure want to Logout ?</Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <a href="/" className="btn btn-danger text-white">
                    Yes
                </a>
                <Button variant="secondary" onClick={props.closeModal}>
                    Cancel
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

const mapStateToProps = (state) => {
    return {
        isShow: state.modal.logout.isShow,
        messages: state.modal.logout.message,
    };
};

const mapsDispatchToProps = {
    closeModal: closeModalLogout,
};

export default connect(mapStateToProps, mapsDispatchToProps)(Logout);
