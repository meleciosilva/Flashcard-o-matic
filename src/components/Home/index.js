import React, { useState, useEffect } from "react";
import ShowDecks from "./ShowDecks";

function Home() {
  
  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function fetchDecks() {
      const response = await fetch("http://localhost:5000/decks");
      const result = await response.json();
      setDecks(result);
    }
    fetchDecks();
  }
    ,[]);

  useEffect(() => {
    async function fetchCards() {
     const response = await fetch("http://localhost:5000/cards");
     const result = await response.json();
     setCards(result);
   }
   fetchCards();
  }
   ,[]);

  return (
    <div className="container">
      <ShowDecks decks={decks} cards={cards}/>
    </div>
  )
}

export default Home;