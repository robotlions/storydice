import "./App.css";
import React, { forwardRef, useRef, useState } from "react";
import ReactToPrint, { PrintContextConsumer } from "react-to-print";
import { genreList } from "./genres";
import { themeList } from "./themes";
import { characterList } from "./characters";
import { wordCounts } from "./wordcounts";
import { Button } from "react-bootstrap";
import Modal from 'react-modal';
import bannerImg2 from "./diceV3Banner2.jpg";

import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.css";



<script src="https://cdnjs.cloudflare.com/ajax/libs/react-modal/3.14.3/react-modal.min.js"
   integrity="sha512-MY2jfK3DBnVzdS2V8MXo5lRtr0mNRroUI9hoLVv2/yL3vrJTam3VzASuKQ96fLEpyYIT4a8o7YgtUs5lPjiLVQ=="
   crossorigin="anonymous"
   referrerpolicy="no-referrer"></script>

function App() {
  const [generatedGenre, setGeneratedGenre] = useState(null);
  const [generatedTheme, setGeneratedTheme] = useState(null);
  const [generatedCharacter, setGeneratedCharacter] = useState(null);
  const [generatedWordCount, setGeneratedWordCount] = useState(null);
  const [generatedTimeLimit, setGeneratedTimeLimit] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const ref = useRef();

  const ComponentToPrint = forwardRef((props, ref) => {
    return <div ref={ref}><p className="headingName">Genre: <span className="modalString">{generatedGenre}</span></p>
    <p className="headingName">Theme: <span className="modalString">{generatedTheme}</span></p>
    <p className="headingName">Character: <span className="modalString">{generatedCharacter}</span></p>
    <p className="headingName">Word Count: <span className="modalString">{generatedWordCount}</span></p>
    <p className="headingName">Time Limit: <span className="modalString">{generatedTimeLimit}</span></p></div>;
  });

  function doGenre() {
    const newGenre = genreList[doRandom(0, genreList.length)];
    if (generatedGenre != null) {
      setGeneratedGenre(null);
      setTimeout(() => {
        setGeneratedGenre(newGenre);
      }, 300);
    } else {
      setGeneratedGenre(newGenre);
    }
  }

  function doTheme() {
    const newTheme = themeList[doRandom(0, themeList.length)];
    if (generatedTheme != null) {
      setGeneratedTheme(null);
      setTimeout(() => {
        setGeneratedTheme(newTheme);
      }, 300);
    } else {
      setGeneratedTheme(newTheme);
    }
  }

  function doCharacter() {
    const newCharacter = characterList[doRandom(0, characterList.length)];
    if (generatedCharacter != null) {
      setGeneratedCharacter(null);
      setTimeout(() => {
        setGeneratedCharacter(newCharacter);
      }, 300);
    } else {
      setGeneratedCharacter(newCharacter);
    }
  }

  function doWordCount() {
    const newWordCount = wordCounts[doRandom(0, wordCounts.length)];
    if (generatedWordCount != null) {
      setGeneratedWordCount(null);
      setTimeout(() => {
        setGeneratedWordCount(newWordCount);
      }, 300);
    } else {
      setGeneratedWordCount(newWordCount);
    }
    switch (newWordCount){
      case '100':
        setGeneratedTimeLimit("24 Hours");
        break;
      case '250':
        setGeneratedTimeLimit("24 Hours");
        break;
      case '500':
        setGeneratedTimeLimit("48 Hours");
        break;
      case '1000':
        setGeneratedTimeLimit("4 Days");
        break;
      case '2500':
          setGeneratedTimeLimit("8 Days");
          break;
      case '5000':
            setGeneratedTimeLimit("2 Weeks");
            break;
      case '10,000':
        setGeneratedTimeLimit("1 Month");
        break;
        default:
          setGeneratedTimeLimit(null);
    }
  }

  function doRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const modalStyle = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'center',
    },
  };

  return (
    <motion.div>
      
      <div className="container-fluid g-md-5">
        <div className="row navbar">
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
                setGeneratedTimeLimit(null);
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
                <p onClick={() => doGenre()} className="headingName card-title">
                  Genre:
                </p>
                <p className="card-text generatedString">
                  {generatedGenre && (
                    <motion.div
                      key="generatedGenre"
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
                <p onClick={() => doTheme()} className="headingName card-title">
                  Theme:
                </p>
                <p className="card-text generatedString">
                  {generatedTheme && (
                    <motion.div
                      key="generatedTheme"
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
                <p
                  onClick={() => doCharacter()}
                  className="card-title headingName"
                >
                  Character:
                </p>
                <p className="generatedString">
                  {generatedCharacter && (
                    <motion.div
                      key="generatedCharacter"
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

            <div className="col-md-auto">
              <div className="card">
                <p
                  onClick={() => doWordCount()}
                  className="card-title headingName"
                >
                  Word Count:
                </p>
                <p className="card-text generatedString">
                  {generatedWordCount && (
                    <motion.div
                      key="generatedWordCount"
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

            <div className="col-md-auto">
              <div className="card">
                <p
                  onClick={() => doWordCount()}
                  className="card-title headingName"
                >
                  Time Limit:
                </p>
                <p className="card-text generatedString">
                  {generatedWordCount && (
                    <motion.div
                      key="generatedWordCount"
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
                      {generatedTimeLimit}
                    </motion.div>
                  )}
                </p>
              </div>
            </div>




          </div>
        </AnimatePresence>
        <div className="modalDiv">
        
        <Modal
        style={modalStyle}
        isOpen={modalVisible}
        isClosed={!modalVisible}>
          <div>
          <ComponentToPrint ref={ref} />
      <ReactToPrint content={() => ref.current}>
        <PrintContextConsumer>
          {({ handlePrint }) => (
            <Button onClick={handlePrint}>Print</Button>
          )}
        </PrintContextConsumer>
      </ReactToPrint>
      
    </div>
    {/* <p className="headingName">Genre: <span className="modalString">{generatedGenre}</span></p>
    <p className="headingName">Theme: <span className="modalString">{generatedTheme}</span></p>
    <p className="headingName">Character: <span className="modalString">{generatedCharacter}</span></p>
    <p className="headingName">Word Count: <span className="modalString">{generatedWordCount}</span></p> */}
    <Button onClick={()=>{setModalVisible(false)}}>Close</Button>
      </Modal>
      </div>
      <br/>
        {generatedGenre || generatedTheme || generatedCharacter || generatedWordCount ? 
        <Button onClick={()=>setModalVisible(!modalVisible)}>Print Recipe</Button>
        :
        null}
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
