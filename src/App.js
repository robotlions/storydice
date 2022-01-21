import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import react from 'react';

function App() {

const [generatedGenre, setGeneratedGenre] = useState(null);
const [generatedTheme, setGeneratedTheme] = useState(null);
const [generatedCharacter, setGeneratedCharacter] = useState(null);


function doGenre() {
    setGeneratedGenre("New Genre")
  };

function doTheme() {
    setGeneratedTheme("New Theme")
  };

function doCharacter() {
    setGeneratedCharacter("New Character")
  };

  return (
    <div className="App">
      <h2>Random Story-Generating Radomizer for Stories</h2>
      <button onClick={()=>doGenre()}>Genre</button>
      <button onClick={()=>doTheme()}>Theme</button>
      <button onClick={()=>doCharacter()}>Character</button>
      <br/>
      <p className="headingName">Genre: <span className="generatedString">{generatedGenre}</span></p>
      <p className="headingName">Theme: <span className="generatedString">{generatedTheme}</span></p>
      <p className="headingName">Character: <span className="generatedString">{generatedCharacter}</span></p>

    </div>
  );
}

export default App;
