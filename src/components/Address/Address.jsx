import './Address.scss';

export function Address({address, onClick, latitude}) {

console.log(latitude)
  return (
    <div className="Address" onClick={onClick}>
     <p>{address}</p>
    </div>
  );
}

