import React, {useEffect, useState} from "react";
import Breadcrumb from "./Breadcrumb";
import {useParams, Switch, Route, useRouteMatch} from "react-router-dom";
import DisplayDeck from "./DisplayDeck";
import DisplayCards from "./DisplayCards";
import Study from "./../Study/index";
import EditDeck from "./../EditDeck/index";
import Cards from "./../../Cards/index";


function Deck() {
  const {deckId} = useParams();
  const {path} = useRouteMatch();

  const [deckCards, setDeckCards] = useState([]);
  const [deck, setDeck] = useState([]);

  useEffect(() => {
    async function fetchDeckCards() {
      const response = await fetch(`http://localhost:5000/decks/${deckId}?_embed=cards`);
      const result = await response.json();
      setDeckCards(result.cards);
      setDeck(result);
    }
    fetchDeckCards();
    }, [deckId]);

  return (
    <>
      <Switch>
        <Route exact path={`${path}`}>
          <Breadcrumb deck={deck}/>
          <div className="row">
            <DisplayDeck deck={deck}/>
            <DisplayCards cards={deckCards} />
          </div>
        </Route>
        <Route path={`${path}/study`}>
          <Study deck={deck} deckCards={deckCards}/>
        </Route>
        <Route path={`${path}/edit`}>
          <EditDeck deck={deck} />
        </Route>
        <Route path={`${path}/cards`}>
          <Cards deckCards={deckCards} />
        </Route>
      </Switch>
    </>
  )
}

export default Deck;