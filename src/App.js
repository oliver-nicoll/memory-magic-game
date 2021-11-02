import { useEffect, useState } from 'react';
import './App.css';
import SingleCard from './components/SingleCard';

const cardImages = [
  { "src": "/img/helmet.png", matched: false },
  { "src": "/img/potion.png", matched: false },
  { "src": "/img/ring.png", matched: false },
  { "src": "/img/scroll.png", matched: false },
  { "src": "/img/shield.png", matched: false },
  { "src": "/img/sword.png", matched: false },
]


function App() {
  
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [ choiceTwo, setChoiceTwo] = useState(null)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  // console.log(cards, turns)

  //handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  //compare cards selected
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          })
        })
        resetTurn()
      } else {
        resetTurn()
      }
    }

  }, [choiceOne, choiceTwo])

  //reset choice and increase turn
  const resetTurn = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(prevTurns => prevTurns + 1)
  }

  return (
    <div className="App">
      <h1>Match Game</h1>
      <button onClick={shuffleCards}>
        New Game
      </button>

      <div className="card-grid">
        {cards.map(card => (
          <SingleCard 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
