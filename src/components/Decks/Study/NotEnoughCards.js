import React from "react";
import {Link, useParams} from "react-router-dom";

function NotEnoughCards({deckCards}) {
  const {deckId} = useParams();
  
  return (
    <>
      <h1>Not Enough Cards</h1>
      <p>You need at least 3 cards to study. You have {deckCards.length} cards in your deck.</p>
      <Link to={`/decks/${deckId}/cards/new`} type="button" class="btn btn-primary"><strong>+ Add Cards</strong></Link>
    </>
  )
}

export default NotEnoughCards;