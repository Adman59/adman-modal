import PropTypes from 'prop-types';
import './modal.css';

const Modal = ({ title = "", text = "", closeModal }) => {

  return (
    <div className="modal__background">
      <div className="modal__container">
        <div className='titleCloseBtn'>
          <button onClick={() => closeModal()}>X</button>
        </div>
        <div className="modal__title">{title}</div>
        <div className="modal__body">
          <p>{text}</p>
        </div>
        <div className="modal__footer">
          <button onClick={() => closeModal()}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Modal;
