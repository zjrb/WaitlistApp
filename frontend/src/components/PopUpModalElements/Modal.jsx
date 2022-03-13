// @src/components/Modal.jsx

import React, {useState} from "react";
import styles from "./Modal.module.css";
import { RiCloseLine } from "react-icons/ri";
import TableReadyMessage from "../Twilio Functions/tableReady.cjs";
import SendCustomMessage from "../Twilio Functions/tableReady.cjs";


const Modal = ({ setIsOpen }) => {
  return (

    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}><br />
            <h5 className={styles.heading}>Send a Custom Message for Jakes - Table of 4</h5>
          </div><br /><br />
          <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
            <RiCloseLine style={{ marginBottom: "-3px" }} />
          </button>
          <div className={styles.modalContent}>
            <textarea id="customMessage" name="customMessage" placeholder="Type Custom Message Here..." rows="6" cols="75"></textarea>

          </div>
          <div className={styles.modalActions}>
            <div className={styles.actionsContainer}>
              <button className={styles.cancelBtn} onClick={() => setIsOpen(false)}>Cancel</button>
              <button className={styles.regBtn} 
              onClick={() => {
                TableReadyMessage();
                setIsOpen(false);
            }}>Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;