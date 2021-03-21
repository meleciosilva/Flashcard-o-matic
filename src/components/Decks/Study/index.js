import React from "react";
import Breadcrumb from "./Breadcrumb";
import DisplayCard from "./DisplayCard";

function Study({deck, deckCards}) {
  
  return (
    <>
      <Breadcrumb deck={deck}/>
      <h1 style={{textAlign:"center"}}>{deck.name}</h1>
      <DisplayCard deckCards={deckCards} />
    </>
  )
}

export default Study;