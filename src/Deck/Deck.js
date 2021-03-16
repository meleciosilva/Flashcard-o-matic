import React from "react";
import {useParams, Link} from "react-router-dom";

function Deck({decks, cards}) {
  const {deckId} = useParams();
  
  const deck = decks.find((item) => item.id == deckId);
  console.log(deck.name)
  const deckCards = cards.filter(item => item.deckId === deckId);
  
  const deckContent =
    <div className="col-sm-12">
      <div className="card" style={{border: "none"}}>
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <p className="card-text">{deck.description}</p>
          <div className="d-flex justify-content-between">
            <div>
              <Link className="btn btn-secondary mr-1">Edit</Link>
              <Link className="btn btn-primary mr-1">Study</Link>
              <Link className="btn btn-primary"><strong>+ Add Cards</strong></Link>
            </div>
            <div>
              <Link className="btn btn-danger">Delete</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link>Home</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Name</li>
        </ol>
      </nav>
      <div className="row">
        {deckContent}
      </div>
    </>
  )
}

export default Deck;