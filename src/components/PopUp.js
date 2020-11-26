import React, { useState } from "react";
import Modal from "react-modal";
import exit from "../assets/close.png";

export default function PopUp(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <Modal
        style={customStyles}
        isOpen={props.modal}
        onRequestClose={props.handleClose}
      >
        <h2>{"Class Name: " + props.item.regular_name} </h2>
        <h3>{"Code: " + props.item.name}</h3>
        <h3>{"Credits: " + props.item.credits}</h3>
        <p style={{}}>
          <b>Description: </b> {props.item.description}
        </p>
<br/>
        <button
          type="image"
          style={{
            border: 0,
            background: "transparent",
            margin: 0,
            position: "absolute",
            top: "90%",
            left: "50%",
            right:"50%",
            transform: "translate(-90%, -50%)",
          }}
          onClick={props.handleClose}
        >
          <img src={exit} alt="Close" />
        </button>
      </Modal>
    </div>
  );
}
const customStyles = {
  overlay: {borderRadious: "40"},
  content: {
    
    top: "10%",
    left: "10%",
    bottom: "10%",
    right: "10%",
    transform: "translate(-20%, -30%, -30%, -20%)",
    backgroundColor: "rgb(188,188,188)",
    maxHeight:"80vh"
  },
};
