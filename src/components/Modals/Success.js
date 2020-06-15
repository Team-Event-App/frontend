import React from "react";
import { connect } from "react-redux";
import { closeModalSuccess } from "../../actions/modalActions";
import { Modal } from "react-bootstrap";

const Success = (props) => {
  return (
    <Modal show={props.isShow} onHide={props.closeModal}>
      <Modal.Header closeButton className="bg-success">
        <Modal.Title className="text-white">Success</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.messages}</Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isShow: state.modal.success.isShow,
    messages: state.modal.success.message,
  };
};

const mapsDispatchToProps = {
  closeModal: closeModalSuccess,
};

export default connect(mapStateToProps, mapsDispatchToProps)(Success);
