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
        <h2>{"Class Name: " + props.item.name} </h2>
        <h3>{"Code: " + props.item.name}</h3>
        <h3>{"Credits: " + props.item.credits}</h3>
        <p>
          <b>Description: </b> {props.item.description}
        </p>
        {/* <p><b>Pre-requsisites: </b>None</p>
                <p><b>Terms Offerred: </b>First Semester, Second Semester</p>
                <p><b>Years offered: </b>Every year</p> */}
<br/>
        <button
          type="image"
          style={{
            border: 0,
            background: "transparent",
            margin: 0,
            position: "absolute",
            top: "60%",
            left: "50%",
            transform: "translate(-60%, -50%)",
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
  },
};
