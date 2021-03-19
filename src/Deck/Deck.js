import React from "react";
import NavBar from "./NavBar";
import ViewDeck from "./ViewDeck";
import {useParams} from "react-router-dom";

function Deck({decks, cards}) {
  const {deckId} = useParams();

  // identifies selected deck to view
  const deck = decks.find((item) => item.id === +deckId);

  // identifies cards for selected deck
  const deckCards = cards.filter(item => item.deckId === +deckId);
  
  return (
    <>
      <NavBar deck={deck}/>
      <ViewDeck deck={deck} cards={deckCards} />
    </>
  )
}

export default Deck;