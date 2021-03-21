import React from "react";
import {Link, useParams, Switch, Route, useRouteMatch} from "react-router-dom";
import AddCard from "./AddCard"

function NotEnoughCards({deckCards}) {
  const {deckId} = useParams();
  const {url} = useRouteMatch();
  
  return (
    <>
      <Switch>
        <Route >
          <h1>Not Enough Cards</h1>
          <p>You need at least 3 cards to study. You have {deckCards.length} cards in your deck.</p>
          <Link to={`/decks/${deckId}/cards/new`} type="button" class="btn btn-primary"><strong>+ Add Cards</strong></Link>
        </Route>
        {/* <Route path={`/decks/:deckId/cards/new`}>
          <AddCard />
        </Route> */}
      </Switch>
    </>
  )
}

export default NotEnoughCards;