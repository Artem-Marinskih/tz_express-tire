import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getCoordinate } from '../../store/actions';

import './Address.scss';

export function Address({ address, latitude, longitude, budgets }) {
  const coordinateFromAddress = {
    x: latitude,
    y: longitude,
    zoom: 17,
  };

  const dispatch = useDispatch();

  const onAddressClick = useCallback(() => {
    dispatch(getCoordinate(coordinateFromAddress));
  }, [dispatch]);

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
