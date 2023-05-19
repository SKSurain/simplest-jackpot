import logo from './logo.svg';
import './App.css';
import Machine from './Machine.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <h1> THIS IS A JACKPOT MACHINE, CLICK REFRESH TO SPIN THE WHEELS</h1>
        {/* This component showcase display 
        dynamically without props */}
        <Machine />

      </header>
    </div>
  );
}

export default App;
