import React, {useState, useEffect} from "react";
import {Link, Switch, Route} from "react-router-dom";
import CreateDeckButton from "./CreateDeckButton";
import Deck from "./../Deck/Deck";
import Study from "./../Study/Study";

function Decks() {

  const [Decks, setDecks] = useState([]);
  const [Cards, setCards] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/decks";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setDecks(response);
      });
  }, []);

  useEffect(() => {
    const url = "http://localhost:5000/cards";
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setCards(response);
      });
  }, []);
    
  // creates deck listing for each deck
  const allDecks = Decks.map((deck, index) => {
      // filters cards for each deck
      const deckCards = Cards.filter(card => card.deckId === deck.id)
      return (
        <div className="col-sm-6" key={deck.id}>
        <div className="card">
          <div className="card-body">
            <div className='d-flex justify-content-between'>
              <h5 className="card-title">{deck.name}</h5>
              <p>Cards: {deckCards.length}</p>
            </div>
            <p className="card-text">{deck.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary mr-1">View</Link>
                <Link to={`/decks/${deck.id}/study`} className="btn btn-primary">Study</Link>
              </div>
              <div>
                <Link to={"/"} className="btn btn-danger">Delete</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    })

  return (
    <>
      <Switch>
        <Route exact path="/">
          <CreateDeckButton />
          <div className="row">
            {allDecks}
          </div>
        </Route>
        <Route exact path="/decks/:deckId">
          <Deck decks={Decks} cards={Cards} />
        </Route>
        <Route path="/decks/:deckId/study">
          <Study decks={Decks} cards={Cards} />
        </Route>
      </Switch>
    </>
  )
}

export default Decks;