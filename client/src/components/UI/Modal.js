import React, { useContext } from "react";
import ReactDOM from "react-dom";
import { CartContext } from "../../context/CartContext";

const Backdrop = ({ isClose }) => {
  return <div className="fixed top-0 left-0 w-full h-screen  z-20 bg-backDrop" onClick={isClose} />;
};

const ModalOverlay = (props) => {
  return (
    <div className="fixed top-0 right-0 md:max-w-[500px] w-[50%] bg-white h-screen shadow-modalBox z-30 animate-slide-down">
      <div>{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = ({ children, isClose }) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop isClose={isClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
