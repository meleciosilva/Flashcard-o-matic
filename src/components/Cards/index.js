import React from "react";
import {Switch, Route, useRouteMatch} from "react-router-dom";
import CreateCard from "./CreateCard";
import EditCard from "./EditCard";

function Cards({deckCards}) {
  const {path} = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${path}/new`}>
        <CreateCard />
      </Route>
      <Route path={`${path}/:cardId/edit`}>
        <EditCard />
      </Route>
    </Switch>
  )
}

export default Cards;