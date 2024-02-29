import { useState } from "react";
import Modal from "./modal";
import "./modal.css";

export default function ModalTest() {
  const [showModalPopUp, setShowModalPopUp] = useState(false);

  function handleToggleModalPopUp() {
    setShowModalPopUp(!showModalPopUp);
  }

  function onClose() {
    setShowModalPopUp(false);
  }
  return (
    <div>
      <button onClick={handleToggleModalPopUp}>Open Modal PopUp</button>
      {showModalPopUp && (
        <Modal
          onClose={onClose}
          header={<h1>Close</h1>}
          footer={<h1>Bye</h1>}
          body={<div>Customized Body</div>}
        />
      )}
    </div>
  );
}
