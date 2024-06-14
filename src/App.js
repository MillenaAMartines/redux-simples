import logo from './logo.svg';
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux-Simples.</h1>

      <div className='linha'>
        <Card title="Card 1" red>M</Card>
        <Card title="Card 2" green>I</Card>
      </div>

      <div className='linha'>
        <Card title="Card 3" blue>H</Card>
        <Card title="Card 4" purple>E</Card>
      </div>

    </div>
  );
}

export default App;
