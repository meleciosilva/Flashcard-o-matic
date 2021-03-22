import React from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import AddCard from "./AddCard/index";
import EditCard from "./EditCard/index";

function Cards({deck, deckCards}) {
  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/new`}>
        <AddCard deck={deck} deckCards={deckCards}/>
      </Route>
      <Route path={`${path}/:cardId/edit`}>
        <EditCard deck={deck} deckCards={deckCards}/>
      </Route>
    </Switch>
  )
}

export default Cards;