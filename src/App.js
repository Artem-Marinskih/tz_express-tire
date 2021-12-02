import './App.scss';
import { ContainerAddress } from './components/ContainerAddress/ContainerAddress';
import { ContainerMap } from './components/ContainerMap/ContainerMap';
import { useState } from 'react';

function App() {
  let data = require('./state.json');

  const [coordinate, setCoordinate] = useState({
    x: 56.8519,
    y: 60.6122,
  });

  const getTarget = (e) => {
    e.preventDefault();
    let target = e.currentTarget;

    setCoordinate((prev) => ({
      ...prev,
      x: (prev.x = +target.attributes[1].nodeValue),
      y: (prev.y = +target.attributes[2].nodeValue),
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
