import React, { useState} from 'react';
import Modal from 'react-modal';
import exit from "../assets/close.png";


function PopMessage(props) {
   
    return (
        <div style={{ textAlign: "center" }}>
        <Modal
          style={customStyles}
          isOpen={props.modal}
          onRequestClose={props.handleClose}
        >
           {props.error ? 
           <h2 style={{textAlign:"center", color:"red"}}>{props.message}</h2> :
           <h2 style={{textAlign:"center", color:"green"}}>{props.message}</h2>
           }        
  <br/>
          <button
            type="image"
            style={{
              border: 0,
              background: "transparent",
              margin: 0,
              position: "absolute",
              top: "80%",
              left: "50%",
              right:"50%",
              transform: "translate(-80%, -50%)",
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
      
      top: "30%",
      left: "20%",
      bottom: "30%",
      right: "20%",
      transform: "translate(-30%, -40%, -40%, -30%)",
      backgroundColor: "rgb(188,188,188)",
    },
  };
  

export default PopMessage;
