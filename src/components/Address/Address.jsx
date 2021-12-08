import './Address.scss';

export function Address({ address, latitude, longitude, budgets, onClick }) {
  const handleClick = () => {
    onClick({ x: latitude, y: longitude });
  };
  return (
    <div className="Address" onClick={handleClick}>
      <p className="Address__text">{address}</p>
      <div className="Address__buttons">
        {budgets.map((buttons) => (
          <button className="Address__button" key={buttons}>
            {buttons}
          </button>
        ))}
      </div>
    </div>
  );
}
