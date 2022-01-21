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
      Genre: {generatedGenre}<br/>
      Theme: {generatedTheme}<br/>
      Character: {generatedCharacter}<br/>
    </div>
  );
}

export default App;
