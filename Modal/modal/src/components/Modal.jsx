import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, closeModal, setIsOpen }) => {
  const handleClickModal = () => {
    setIsOpen(true);
  };

  if (!isOpen) {
    return (
      <button onClick={handleClickModal} className='open-modal-button'>
        Click to open modal
      </button>
    );
  }

  return (
    <>
      <div className='modal-overlay' onClick={closeModal}></div>
      <div className='modal-container'>
        <button className='close-button' onClick={closeModal}>×</button>
        <h2>Welcome to the Modal 🎉</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam molestiae fugit nobis libero repudiandae iste sint beatae vel sequi soluta ea architecto, velit, ullam harum aut optio iure odio voluptatem!
        </p>
        <button onClick={closeModal} className="primary-button">Close</button>
      </div>
    </>
  );
};

export default Modal;
