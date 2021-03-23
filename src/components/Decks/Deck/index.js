import React, {useEffect, useState} from "react";
import Breadcrumb from "./Breadcrumb";
import {useParams, Switch, Route, useRouteMatch} from "react-router-dom";
import DisplayDeck from "./DisplayDeck";
import DisplayCards from "./DisplayCards";
import Study from "./../Study/index";
import EditDeck from "./../EditDeck/index";
import Cards from "./../../Cards/index";
import { readDeck } from "../../../utils/api";


function Deck() {
  const {deckId} = useParams();
  const {path} = useRouteMatch();

  const [deck, setDeck] = useState(null);

  useEffect(() => {
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
    }, [deckId]);

  if (!deck) return null;
  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Breadcrumb deck={deck}/>
          <div className="row">
            <DisplayDeck deck={deck}/>
            <DisplayCards deck={deck} />
          </div>
        </Route>
        <Route path={`${path}/study`}>
          <Study />
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck deck={deck} />
        </Route>
        <Route path={`${path}/cards`}>
          <Cards />
        </Route>
      </Switch>
    </>
  )
}

export default Deck;