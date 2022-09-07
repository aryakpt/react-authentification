import React from "react";
import ReactDOM from "react-dom";
import { Button } from "../../";
import styles from "./ErrorModal.module.css";

const ErrorModal = ({ title, message, onClick }) => {
  return (
    <>
      {ReactDOM.createPortal(<div className={styles.backdrop} onClick={onClick}></div>, document.getElementById("modal-backdrop"))}
      {ReactDOM.createPortal(
        <div className={styles["error-modal"]}>
          <div className={styles["error-modal__header"]}>{title}</div>
          <div className={styles["error-modal__content"]}>{message}</div>
          <div className={styles["error-modal__footer"]}>
            <Button className="btn-red" onClick={onClick}>
              Close
            </Button>
          </div>
        </div>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

export default ErrorModal;
