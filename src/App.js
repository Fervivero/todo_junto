import './App.css';
import Person from './components/Person';

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Person firstName='Jane' lastName='Doe' age={45} hairColor='Black' />
        <Person firstName='John' lastName='Smith' age={88} hairColor='Brown' />
        <Person firstName='Juan' lastName='Perez' age={32} hairColor='Oscuro' />
        <Person firstName='Maria' lastName='Smith' age={62} hairColor='Brown' />
      </div>
    </div>

  );
}

export default App;