import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  const wrapper = document.querySelector('.portal-wrapper');
  return (
    <>
      <button onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal &&
        createPortal(
          <ModalContent portal={true} onClose={() => setShowModal(false)} />,
          document.body
        )}
    </>
  );
}
