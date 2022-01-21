import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import react from 'react';
import {genreList} from './genres';
import {themeList} from './themes';
import {characterList} from './characters';

function App() {

const [generatedGenre, setGeneratedGenre] = useState(null);
const [generatedTheme, setGeneratedTheme] = useState(null);
const [generatedCharacter, setGeneratedCharacter] = useState(null);


function doGenre() {
  const newGenre = genreList[doRandom(0, genreList.length)]
    setGeneratedGenre(newGenre)
  };

function doTheme() {
  const newTheme = themeList[doRandom(0, themeList.length)]
  setGeneratedTheme(newTheme)
};

function doCharacter() {
  const newCharacter = characterList[doRandom(0, characterList.length)]
  setGeneratedCharacter(newCharacter)
};

function doRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <div className="App">
      <h2>Random Story-Generating Randomizer for Stories</h2>
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
