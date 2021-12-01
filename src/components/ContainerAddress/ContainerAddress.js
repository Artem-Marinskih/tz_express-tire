import { Address } from '../Address/Address';
import './ContainerAddress.scss';

export function ContainerAddress() {
  let data = require('../../state.json');
  console.log(data.pickPoints[0].address);

  return (
    <div className="ContainerAddress">
      <Address address={data.pickPoints[0].address}/>
    </div>
  );
}
