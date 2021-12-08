import { ContainerAddress } from './components/ContainerAddress/ContainerAddress';
import { ContainerMap } from './components/ContainerMap/ContainerMap';

import './App.scss';

function App() {
  let data = require('./state.json');

  return (
    <div className="App">
      <ContainerAddress data={data.pickPoints} />
      <ContainerMap />
    </div>
  );
}

export default App;
