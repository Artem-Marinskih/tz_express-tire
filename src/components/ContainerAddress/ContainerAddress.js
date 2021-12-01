import { Address } from '../Address/Address';
import './ContainerAddress.scss';

export function ContainerAddress({ address, onClick }) {
  return (
    <div className="ContainerAddress">
      <Address address={address} onClick={onClick}/>
    </div>
  );
}
