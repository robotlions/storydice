import "./App.css";
import { useState } from "react";
import { genreList } from "./genres";
import { themeList } from "./themes";
import { characterList } from "./characters";
import { wordCounts } from "./wordcounts";
import { Button } from "react-bootstrap";
import bannerImg2 from "./diceV3Banner2.jpg";

import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [generatedGenre, setGeneratedGenre] = useState(null);
  const [generatedTheme, setGeneratedTheme] = useState(null);
  const [generatedCharacter, setGeneratedCharacter] = useState(null);
  const [generatedWordCount, setGeneratedWordCount] = useState(null);

  function doGenre() {
    const newGenre = genreList[doRandom(0, genreList.length)];
    if (generatedGenre != null){
    setGeneratedGenre(null);
    setTimeout(()=>{setGeneratedGenre(newGenre)},300);
    }
    else{
      setGeneratedGenre(newGenre)
    }
  }

  function doTheme() {
    const newTheme = themeList[doRandom(0, themeList.length)];
    if (generatedTheme != null){
      setGeneratedTheme(null);
      setTimeout(()=>{setGeneratedTheme(newTheme)},300);
    }
    else{
    setGeneratedTheme(newTheme);
  }
}

  function doCharacter() {
    const newCharacter = characterList[doRandom(0, characterList.length)];
    if (generatedCharacter != null){
      setGeneratedCharacter(null);
      setTimeout(()=>{setGeneratedCharacter(newCharacter)},300);
    }
    else{
    setGeneratedCharacter(newCharacter);
  }
}

  function doWordCount() {
    const newWordCount = wordCounts[doRandom(0, wordCounts.length)];
    if (generatedWordCount != null){
      setGeneratedWordCount(null);
      setTimeout(()=>{setGeneratedWordCount(newWordCount)},300);
    }
    else{
    setGeneratedWordCount(newWordCount);
  }
}

  function doRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  return (
    <motion.div>
      <div className="container-fluid g-md-5">
        <div className="row navbar sticky-top">
        
          <img
            className="bannerImg"
            src={bannerImg2}
            alt="black and white dice"
          ></img>
          
        </div>
        <div className="headlineText">
          <h2>Random Story-Generating Randomizer for Stories</h2>
        </div>
        <div className="row buttonRow">
          <p>
            <Button onClick={() => doGenre()}>Genre</Button>
            <Button onClick={() => doTheme()}>Theme</Button>
            <Button onClick={() => doCharacter()}>Character</Button>
            <Button onClick={() => doWordCount()}>Word Count</Button>
          </p>
        </div>
        <div className="row allButtonRow">
          <p>
            <Button
              onClick={() => {
                doGenre();
                doTheme();
                doCharacter();
                doWordCount();
              }}
            >
              Generate All
            </Button>
            <Button
              onClick={() => {
                setGeneratedGenre(null);
                setGeneratedTheme(null);
                setGeneratedCharacter(null);
                setGeneratedWordCount(null);
              }}
            >
              Clear All
            </Button>
          </p>
        </div>
        <br />
        <AnimatePresence>
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                  <p onClick={()=>doGenre()} className="headingName card-title">
                    Genre:</p>
                    <p className="card-text generatedString">
                    {generatedGenre && (
                      <motion.div
                        key="answer"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        
                          {generatedGenre}
                       
                      </motion.div>
                    )}
                  </p>
                
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                
                  <p onClick={()=>doTheme()} className="headingName card-title">
                    Theme:
                    </p>
                    <p className="card-text generatedString">
                    {generatedTheme && (
                      <motion.div
                        key="answer"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        
                          {generatedTheme}
                        
                      </motion.div>
                    )}
                  </p>
                
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                
                  <p onClick={()=>doCharacter()} className="card-title headingName">
                    Character:
                    </p>
                    <p className="generatedString">
                    {generatedCharacter && (
                      <motion.div
                        key="answer"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        
                          {generatedCharacter}
                        
                      </motion.div>
                    )}
                  </p>
                
              </div>
            </div>

            <div className="col-md-3">
              <div className="card">
                
                  <p onClick={()=>doWordCount()} className="card-title headingName">
                    Word Count:
                    </p>
                    <p className="card-text generatedString">
                    {generatedWordCount && (
                      <motion.div
                        key="answer"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                          open: { opacity: 1, height: "auto" },
                          collapsed: { opacity: 0, height: 0 },
                        }}
                        transition={{
                          duration: 1.2,
                          ease: [0.04, 0.62, 0.23, 0.98],
                        }}
                      >
                        
                          {generatedWordCount}
                       
                      </motion.div>
                    )}
                  </p>
                
              </div>
            </div>
          </div>
        </AnimatePresence>
        <br />
        <br />
        <br />
        <div className="row creditsRow justify-content-center">
          <p>
            List of genres stolen from{" "}
            <a href="https://www.servicescape.com/blog/144-genres-and-subgenres-for-fiction-writing">
              Tanya Thompson.
            </a>
          </p>
          <p>
            List of themes stolen from{" "}
            <a href="https://literarydevices.net/a-huge-list-of-common-themes/">
              literarydevices.net
            </a>
          </p>
          <p>
            List of characters stolen from{" "}
            <a href="https://tvtropes.org/pmwiki/pmwiki.php/Main/ArchetypalCharacter">
              TV Tropes.
            </a>
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
