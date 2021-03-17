import React, {useState} from "react";
import {Link} from "react-router-dom";

function DisplayCard({deckCards}) {
  
  const [Card, setCard] = useState(0);
  const [side, setSide] = useState(true);

  function handleFlip() {
    setSide(!side);
  }

  function handleNext() {
    setCard(prevCard => prevCard + 1);
    setSide(true); // sets side to front when switching to another card
  }

  function handlePrev() {
    setCard(prevCard => prevCard - 1);
    setSide(true);
  }
  
  return (
    <div className="row py-2 d-flex justify-content-center">
      <div className="col-sm-6">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card {Card + 1} of {deckCards.length}</h5>
            <p className="card-text">{side ? deckCards[Card].front : deckCards[Card].back}</p>
            <Link id="previous" className={!Card ? "btn btn-primary disabled" : "btn btn-primary"} onClick={handlePrev}>Previous</Link>
            <Link className="btn btn-secondary mx-2" onClick={handleFlip}>Flip</Link>
            <Link className="btn btn-primary" onClick={handleNext}>Next</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DisplayCard;