import './App.scss';
import Header from './components/header/header';
import ButtonPanel from './components/button_panel/buttonPanel';
import person from './components/person.js';




function App() {
  return (
    <div className="App">
      <div className='App__container'>
        <Header person = {person}/>
        <ButtonPanel person = {person}/>
      </div>
    </div>
  );
}

export default App;

