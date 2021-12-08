import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getCoordinate } from '../../store/actions';
import './Address.scss';

export function Address({ address, latitude, longitude, budgets }) {
  // const handleClick = () => {
  //   onClick({ x: latitude, y: longitude });
  // };

  const dispatch = useDispatch();

  const onAddressClick = useCallback((e) => {
    dispatch(getCoordinate());
  }, []);

  return (
    <div className="Address" onClick={onAddressClick}>
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
