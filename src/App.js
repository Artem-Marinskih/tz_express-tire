import './App.scss';
import { ContainerAddress } from './components/ContainerAddress/ContainerAddress';
import { ContainerMap } from './components/ContainerMap/ContainerMap';
import { useState } from 'react';

function App() {
  let data = require('./state.json');
  console.log(data.pickPoints[0]);

  let latitude = data.pickPoints[1].latitude;
  let longitude = data.pickPoints[1].longitude;

  const [coordinate, setCoordinate] = useState({
    x: 56.8519,
    y: 60.6122,
  });

  const getTarget = (e) => {
    e.preventDefault();
    let target = e.target
console.log(target)
    setCoordinate((prev) => ({
      ...prev,
      x: (prev.x = latitude),
      y: (prev.y = longitude),
    }));

    console.log('click', coordinate)
  };

  return (
    <div className="App">
      {data.pickPoints.map((card) => (
        <ContainerAddress address={card.address} latitude={card.latitude} onClick={getTarget} />
      ))}
      
      <ContainerMap coordinate={coordinate}/>
    </div>
  );
}

export default App;
