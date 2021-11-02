import { useState } from 'react';
import './App.css';

const cardImages = [
  { "src": "/public/img/helmet.png" },
  { "src": "/public/img/potion.png" },
  { "src": "/public/img/ring.png" },
  { "src": "/public/img/scroll.png" },
  { "src": "/public/img/shield.png" },
  { "src": "/public/img/sword.png" },
]


function App() {
  
  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)

  //shuffle cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))

    setCards(shuffledCards)
    setTurns(0)
  }

  console.log(cards, turns)
  return (
    <div className="App">
      <h1>Match Game</h1>
      <button onClick={shuffleCards}>
        New Game
      </button>
    </div>
  );
}

export default App;
