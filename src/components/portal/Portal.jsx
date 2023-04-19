import NoPortalExample from './NoPortalExample';
import PortalExample from './PortalExample';
import './styles.css';

export function Portal() {
  return (
    <div className='portal-wrapper'>
      <div className='clipping-container'>
        <NoPortalExample />
      </div>
      <div className='clipping-container'>
        <PortalExample />
      </div>
    </div>
  );
}
