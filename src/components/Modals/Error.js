import React from "react";
import { connect } from "react-redux";
import { closeModalError } from "../../actions/modalActions";
import { Modal } from "react-bootstrap";

const Error = (props) => {
  return (
    <Modal show={props.isShow} onHide={props.closeModal}>
      <Modal.Header closeButton className="bg-danger">
        <Modal.Title className="text-white">Something Wrong !!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.messages}</Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isShow: state.modal.error.isShow,
    messages: state.modal.error.message,
  };
};

const mapsDispatchToProps = {
  closeModal: closeModalError,
};

export default connect(mapStateToProps, mapsDispatchToProps)(Error);
