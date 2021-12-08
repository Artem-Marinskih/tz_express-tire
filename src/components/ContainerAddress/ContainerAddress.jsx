import { Address } from '../Address/Address';
import './ContainerAddress.scss';

export function ContainerAddress({ data, onClick }) {
  return (
    <div className="ContainerAddress">
      {data.map((card) => (
      <Address
        key={card.address}
        address={card.address}
        latitude={card.latitude}
        longitude={card.longitude}
        budgets={card.budgets}
        onClick={onClick}
      />
      ))}

    </div>
  );
}
