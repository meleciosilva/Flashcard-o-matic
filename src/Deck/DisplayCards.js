import React from "react";
import {Link} from "react-router-dom";

function DisplayCards({cards}) {
  return (
    cards.map(card => {
      return (
        <div className="col-sm-6" key={card.id}>
          <div className="card">
            <div className="card-body">
              <p className="card-text"><strong>Front: </strong>{card.front}</p>
              <p className="card-text"><strong>Back: </strong>{card.back}</p>
              <div className= "d-flex justify-content-end">
                <Link className="btn btn-secondary mr-1">Edit</Link>
                <Link className="btn btn-danger">Delete</Link>
              </div>  
            </div>        
          </div>
        </div>
      )
    })
  )
}

export default DisplayCards;