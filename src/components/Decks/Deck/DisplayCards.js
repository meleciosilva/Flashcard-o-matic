import React from "react";
import { deleteCard } from "./../../../utils/api";
import {Link, useRouteMatch, useHistory} from "react-router-dom";

function DisplayCards({cards}) {
  const {url} = useRouteMatch();
  const history = useHistory();
  
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
                <Link className="btn btn-danger" onClick={() => {
                    if (window.confirm("Are you sure you want to delete this card?")) {
                      deleteCard(card.id)
                    } else {
                      history.push(`${url}`)
                    }
                  }
                }>
                    Delete
                </Link>
              </div>  
            </div>        
          </div>
        </div>
      )
    })
  )
}

export default DisplayCards;