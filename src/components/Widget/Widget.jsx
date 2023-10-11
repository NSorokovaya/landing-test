import React, { useState, useEffect } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import style from './Widget.module.scss';
import Button from 'components/Button/Button';

const Modal = ({ show, onClose }) => {
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (show && !e.target.closest(`.${style.modalContent}`)) {
        onClose();
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  if (!show) {
    return null;
  }

  return (
    <div className={style.modal}>
      <div className={style.modalContent}>
        <span className={style.close} onClick={onClose}>
          ×
        </span>
                    <p>Have an idea? Get a free consultation</p>
                                  <Button text='Want'/>

              </div>
    </div>
  );
};

const Widget = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={style.widget}>
      {!showModal && (
        <button onClick={openModal}>
          <FaCommentDots />
        </button>
      )}
      <Modal show={showModal} onClose={closeModal} />
    </div>
  );
};

export default Widget;