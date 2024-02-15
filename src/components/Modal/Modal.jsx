import React from "react";
import { createPortal } from "react-dom";
import { MdCancel } from "react-icons/md";
import { useGeneralContext } from "../../store/GeneralProvider";

const ModalOverlay = (props) => {
  const generalCtx = useGeneralContext();
  return (
    <div className="w-screen h-screen flex justify-center items-center fixed top-0 right-0 left-0 bottom-0 z-[999] bg-black/85">
      <div className="relative mx-auto min-w-[400px] bg-white rounded-md shadow-md">
        <button
          onClick={generalCtx.closeModalHandler}
          className="absolute top-0 right-0"
        >
          <MdCancel size={30} />
        </button>
        <div className="py-5">{props.children}</div>
      </div>
    </div>
  );
};

const Modal = (props) => {
  return createPortal(
    <ModalOverlay>{props.children}</ModalOverlay>,
    document.getElementById("modal_root")
  );
};

export default Modal;
