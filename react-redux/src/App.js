import './App.css';

import Card from './components/Cards'
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Projeto React-Redux</h1>

      <div className='linha'>
        <Card title="Card1" red> Teste 1</Card>
      </div>

      <div className='linha'>
        <Card title="Card2" green> Teste 2</Card>
        <Card title="Card3" blue> Teste 3</Card>
        <Card title="Card4" purple> Teste 4</Card>
      </div>

    </div>
  );
}

export default App;