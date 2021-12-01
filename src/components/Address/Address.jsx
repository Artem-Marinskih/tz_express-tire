import './Address.scss';

export function Address({address, onClick}) {


  return (
    <div className="Address" onClick={onClick}>
     <p>{address}</p>
    </div>
  );
}

