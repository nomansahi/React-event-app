import "./Modal.css";
import ReactDOM from "react-dom";
const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="backdrop">
      <div className="mdl">{props.children}</div>
    </div>,
    document.body
  );
};

export default Modal;
