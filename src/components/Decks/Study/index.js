import React from "react";
import NavBar from "./NavBar";
import DisplayCard from "./DisplayCard";

function Study({deck, deckCards}) {
  
  return (
    <>
      <NavBar deck={deck}/>
      <h1 style={{textAlign:"center"}}>{deck.name}</h1>
      <DisplayCard deckCards={deckCards} />
    </>
  )
}

export default Study;