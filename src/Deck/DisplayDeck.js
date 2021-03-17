import React from "react";
import {Link} from "react-router-dom";

function DisplayDeck({deck}) {
  return (
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
  )
}

export default DisplayDeck;