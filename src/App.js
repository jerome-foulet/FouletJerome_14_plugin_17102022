import { useState } from "react";
import "./App.css";
import Modal from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);

  const showCallback = (event) => {
    setShowModal(!showModal);
  };

  return (
    <div className="App">
      <button onClick={showCallback}>Show modal</button>

      <Modal
        show={showModal}
        closeCallback={showCallback}
        style={{
          border: "solid 1px red",
          borderRadius: "5px",
        }}
      >
        Modal <strong>content</strong>
      </Modal>
    </div>
  );
}

export default App;
