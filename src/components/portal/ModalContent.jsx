import './styles.css';
export default function ModalContent({ onClose, portal = false }) {
  return (
    <div className={`modal ${portal && 'portal-modal'}`}>
      <div>I'm a modal dialog</div>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
