import { useEffect, useState, useRef, useCallback } from 'react';
import './App.css'
import { quotes } from './consts/phases'

//store the list of words and the indez of the word the player is currently
/* let wordIndex = 0;
let startTime = Date.now();
let highScore = localStorage.getItem("elapsedTime") || 0; */

//highScore = localStorage.getItem("elapsedTime") || highScore;

//divHighScore.innerHTML = `<b>High Score:</b> ${localStorage.getItem("elapsedTime")|| 0} seconds.`;

function App() {
  const [quote, setQuote] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [typedValue, setTypedValue] = useState('');
  const inputRef = useRef(null);
  const [started, setStarted] = useState(false)
  
  const getQuote = () => {
    //get a quote
    const quoteIndex = Math.floor(Math.random()* quotes.length);
    const quote = quotes[quoteIndex];
    setQuote(quote)

    setTypedValue('')
    setCurrentWordIndex(0)
    inputRef.current.focus()
  }
  const handleInputChange = (event) =>{
    setTypedValue(event.target.value)
  }

  useEffect(() => {
    const handleKeyDown = (event) => {
      if(event.key === 'Enter'){
        event.preventDefault()
        checkTypedValue()
      };
    }
      document.addEventListener("keydown",handleKeyDown)

      return () => {
        document.removeEventListener("keydown", handleKeyDown)
      }
    },[])

  const checkTypedValue = () => {
    const words = quote.split(' ')
    console.log(words)
    const currentWord = words[currentWordIndex]
    if (typedValue.trim() === currentWord.trim()){
      if (currentWordIndex === words.length - 1) {
        getQuote();
      } else {
        setCurrentWordIndex((prevIndex) => prevIndex + 1);
        setTypedValue('');
      }
    }
  }

  useEffect(() => {
    checkTypedValue()
  },[checkTypedValue])

  const handleStartClick = () => {
    if (!started) {
      setStarted(true)
      getQuote()
    }
  }

  return (
    <>
    <h1>Typping Game</h1>
    <p>Practica tus skills de escritura con citas de Sherlock Holmes, ¡Espero que te diviertas!</p>
    <p id="highScore"></p>
    <p id="quote"></p>
    <div>
      {started && (
        <>
          {quote.split(' ').map((word, index) => (
                <span
                  key={index}
                  className={currentWordIndex === index ? 'highlight' : 'none'}
                >
                  {word}{' '}
                </span>
            ))}
          </>
      )}
    </div>
    <p id="message"></p>
    <div id="container">
        <input 
          type="text" 
          ref={inputRef} 
          value={typedValue} 
          onInput={handleInputChange}
          disabled= {currentWordIndex >= quote.split(' ').length}
          />
          {!started && (
        <button type="button" onClick={handleStartClick} >
          Start
        </button>
        )}
    </div>
    </>
  )
}

export default App
