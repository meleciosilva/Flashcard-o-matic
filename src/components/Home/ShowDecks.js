import React, {useState, useEffect} from "react";
import {Link, Route, useHistory} from "react-router-dom";
import { deleteDeck } from "./../../utils/api/index";
import AddDeckButton from "./AddDeckButton";

function ShowDecks({decks, cards}) {

  const history = useHistory();

  // creates a card listing for each deck
  const deckListings = decks.map((deck) => {
    
    // filters cards for each deck
    const deckCards = cards.filter(card => card.deckId === deck.id);
      
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
    <div className="container">
      <Route exact path="/">
        <AddDeckButton />
        <div className="row">
          {deckListings}
        </div>
      </Route>
    </div>
  )
}

export default ShowDecks;

