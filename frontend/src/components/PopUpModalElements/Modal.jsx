// @src/components/Modal.jsx

import React from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import TableReadyMessage from "../Twilio Functions/tableReady.js";
import SendCustomMessage from "../Twilio Functions/tableReady.js";

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <h5 className={styles.heading}>Jake - Table of 4</h5>
          </div>
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
                <button className={styles.regBtn} onClick={TableReadyMessage}>Table Ready</button><br /><br />
                <button className={styles.regBtn}>5 Minutes</button><br /><br />
                <button className={styles.regBtn} onClick={SendCustomMessage}>Custom Message</button>
          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button
                className={styles.cancelBtn}
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;