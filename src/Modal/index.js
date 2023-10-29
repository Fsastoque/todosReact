import React from "react";
import ReactDOM from "react-dom";
import './Modal.css';

function Modal({ children }){
    return ReactDOM.createPortal(
        <diV className="ModalBackground">
            {children}
        </diV>,
        document.getElementById('modal')
    ); 
}

export { Modal };