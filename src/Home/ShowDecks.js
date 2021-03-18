import React, {useState, useEffect} from "react";
import {Link, Switch, Route, useHistory} from "react-router-dom";
import { deleteDeck } from "../utils/api";
import Deck from "../Deck/Deck";
import Study from "../Study/Study";
import CreateDeck from "./../CreateDeck/CreateDeck";
import AddDeckButton from "./AddDeckButton";

function ShowDecks() {

  const [decks, setDecks] = useState([]);
  const [cards, setCards] = useState([]);
  const [change, setChange] = useState(false); //used as dependency for re-render

  const history = useHistory();


  useEffect(() => {
    async function fetchDecks() {
      const response = await fetch("http://localhost:5000/decks");
      const result = await response.json();
      setDecks(result);
    }
    fetchDecks();
    }
    ,[change]);

  useEffect(() => {
     async function fetchCards() {
      const response = await fetch("http://localhost:5000/cards");
      const result = await response.json();
      setCards(result);
    }
    fetchCards();
    }
    ,[change]);  

  const allDecks = decks.map((deck) => {
    const deckCards = cards.filter(card => card.deckId === deck.id);
    // filters cards for each deck
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
                <Link to={"/"} className="btn btn-danger" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this deck?")) {
                      deleteDeck(deck.id);
                      setChange(!change);
                    } else {
                      history.push("/")
                    }
                  }
                }>
                    Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  })
  
  return (
    <Switch>
      <Route exact path="/">
        <AddDeckButton />
        <div className="row">
          {allDecks}
        </div>
      </Route>
      <Route path="/decks/new">
        <CreateDeck decks={decks}/>
      </Route>
      <Route exact path="/decks/:deckId">
        <Deck decks={decks} cards={cards} />
      </Route>
      <Route path="/decks/:deckId/study">
        <Study decks={decks} cards={cards} />
      </Route>
    </Switch>
  )
  
}

export default ShowDecks;

