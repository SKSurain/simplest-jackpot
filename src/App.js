import logo from './logo.svg';
import './App.css';
import Machine from './Machine.js'
import MachineProps from './MachineProps.js'
import Person from './Person.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <Person
          hobbies={["EXERCISING", " BODYBUILDING"]
          } />

        {/* This component showcase display 
        dynamically without props */}
        <Machine />

        {/* This component is using props & fails 
        because the alphabets dont match*/}
        <MachineProps
          s1="X"
          s2="Y"
          s3="Z" />

        {/* This component is using props & succeeds 
        because the alphabets match*/}
        <MachineProps
          s1="X"
          s2="X"
          s3="X" />

        <p>SIMPLEST JACKPOT WEB APP EVER!</p>
      </header>
    </div>
  );
}

export default App;
