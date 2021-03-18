import React from "react";
import NavBar from "./NavBar";
import DisplayCard from "./DisplayCard";
import {useParams} from "react-router-dom";

function Study({decks, cards}) {
  const {deckId} = useParams();

  // identifies selected deck to view
  const deck = decks.find((item) => item.id === +deckId);

  // identifies cards for selected deck
  const deckCards = cards.filter(item => item.deckId === +deckId);
  
  return (
    <>
      <NavBar deck={deck}/>
      <h1 style={{textAlign:"center"}}>{deck.name}</h1>
      <DisplayCard deckCards={deckCards}/>
    </>
  )
}

export default Study;