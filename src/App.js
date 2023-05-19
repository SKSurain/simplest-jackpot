import logo from './logo.svg';
import './App.css';
import Machine from './Machine.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <h1> SIMPLEST JACKPOT MACHINE</h1>
        <h3>REFRESH TO SPIN THE WHEELS</h3>
        {/* This component showcase display 
        dynamically without props */}
        <Machine />

      </header>
    </div>
  );
}

export default App;
