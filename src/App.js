import './App.css';
import {useState} from 'react';
import {genreList} from './genres';
import {themeList} from './themes';
import {characterList} from './characters';
import {Button, Container} from 'react-bootstrap';
import bannerImg from './diceV3Banner.jpg';

import 'bootstrap/dist/css/bootstrap.css';

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
      <div className="container">
        <div className="row">
        <img className="bannerImg" src={bannerImg}></img>
        </div>
        <div className="headlineText">
      <h2>Random Story-Generating Randomizer for Stories</h2>
      </div>
      <div className="buttonRow">
      <Button onClick={()=>doGenre()}>Genre</Button>
      <Button onClick={()=>doTheme()}>Theme</Button>
      <Button onClick={()=>doCharacter()}>Character</Button>
      </div>
      <br/>
      <p className="headingName">Genre: <span className="generatedString">{generatedGenre}</span></p>
      <p className="headingName">Theme: <span className="generatedString">{generatedTheme}</span></p>
      <p className="headingName">Character: <span className="generatedString">{generatedCharacter}</span></p>
<br/>
<br/>
<div className="creditsRow">
<p>List of genres stolen from <a href="https://www.servicescape.com/blog/144-genres-and-subgenres-for-fiction-writing">Tanya Thompson.</a></p>
<p>List of themes stolen from <a href="https://literarydevices.net/a-huge-list-of-common-themes/">literarydevices.net</a></p>
<p>List of characters stolen from <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/ArchetypalCharacter">TV Tropes.</a></p>
   </div>
    </div>
  );
}

export default App;
