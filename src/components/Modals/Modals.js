import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../../actions/loginActions";
import { Modal } from "react-bootstrap";

const Modals = (props) => {
  return (
    <Modal show={props.isShow} onHide={props.closeModal}>
      <Modal.Header closeButton>
        <Modal.Title className="text-warning">Warning !!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.errorMessages}</Modal.Body>
    </Modal>
  );
};

const mapStateToProps = (state) => {
  return {
    isShow: state.login.isShow,
    errorMessages: state.login.errorMessage,
  };
};

const mapsDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapsDispatchToProps)(Modals);
