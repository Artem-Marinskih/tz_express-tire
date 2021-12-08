import './App.scss';
import { ContainerAddress } from './components/ContainerAddress/ContainerAddress';
import { ContainerMap } from './components/ContainerMap/ContainerMap';
import { useState } from 'react';

function App() {
  let data = require('./state.json');

  const [coordinate, setCoordinate] = useState({
    x: 56.8519,
    y: 60.6122,
    zoom: 12
  });

  const getTarget = ({x, y}) => {
    setCoordinate((prev) => ({
      ...prev,
      x,
      y,
      zoom: 17
    }));
  };

  return (
    <div className="App">
      <ContainerAddress data={data.pickPoints} onClick={getTarget} />

      <ContainerMap coordinate={coordinate} />
    </div>
  );
}

export default App;
