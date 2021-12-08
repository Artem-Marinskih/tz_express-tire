import './App.scss';
import { ContainerAddress } from './components/ContainerAddress/ContainerAddress';
import { ContainerMap } from './components/ContainerMap/ContainerMap';
import { useState, useCallback } from 'react';
// import { useDispatch } from 'react-redux';
import { store } from './store/store';
import { getCoordinate, Coordinate } from './store/actions';

function App() {
  let data = require('./state.json');

  // const [coordinate, setCoordinate] = useState({
  //   x: 56.8519,
  //   y: 60.6122,
  //   zoom: 12,
  // });

  // const dispatch = useDispatch();

  // const onAddressClick = useCallback((e) => {
  //   store.dispatch(getCoordinate());
  // }, []);

  // const getTarget = ({ x, y }) => {
  //   setCoordinate((prev) => ({
  //     ...prev,
  //     x,
  //     y,
  //     zoom: 17,
  //   }));
  // };

  return (
    <div className="App">
      <ContainerAddress data={data.pickPoints} />

      <ContainerMap />
    </div>
  );
}

export default App;
