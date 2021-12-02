import { Address } from '../Address/Address';
import './ContainerAddress.scss';

export function ContainerAddress({ address, latitude, onClick }) {
  return (
    <div className="ContainerAddress">
      <Address address={address} onClick={onClick} latitude={latitude}/>
    </div>
  );
}
