import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm  from './LoginForm'

const LoginFormModal = () => {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)} className='login-btn'>Log In</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <LoginForm />
        </Modal>
      )}
    </>
  );
};

export default LoginFormModal;
