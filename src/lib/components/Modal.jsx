import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ title = "",
text = "" }) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div>
      <button className="openModalBtn" onClick={() => setOpenModal(true)}>
        Save
      </button>
      {openModal && (
        <div className="modal__background">
          <div className="modal__container">
            <div className='titleCloseBtn'>
              <button onClick={() => setOpenModal(false)}>X</button>
            </div>
            <div className="modal__title">{title}</div>
            <div className="modal__body">
              <p>{text}</p>
            </div>
            <div className="modal__footer">
              <button onClick={() => setOpenModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Modal;
