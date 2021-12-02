import './Address.scss';

export function Address({ address, latitude, longitude, budgets, onClick }) {
const handleClick = (e) => {
  e.stopPropagation();

  console.log('handleClick');
}
  return (
    <div className="Address" latitude={latitude} longitude={longitude} onClick={onClick}>
      <p className="Address__text">{address}</p>
      <div className="Address__buttons">
        {budgets.map((buttons) => (
          <button key={buttons} onClick={handleClick}>
            {buttons}
          </button>
        ))}
      </div>
    </div>
  );
}
